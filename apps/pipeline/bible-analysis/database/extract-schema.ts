import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

dotenv.config({ path: path.resolve(__dirname, '../../../../apps/web/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

interface TableInfo {
  table_name: string;
  columns: ColumnInfo[];
  primary_keys: string[];
  foreign_keys: ForeignKeyInfo[];
  indexes: IndexInfo[];
}

interface ColumnInfo {
  column_name: string;
  data_type: string;
  is_nullable: string;
  column_default: string | null;
  character_maximum_length: number | null;
}

interface ForeignKeyInfo {
  constraint_name: string;
  column_name: string;
  foreign_table_name: string;
  foreign_column_name: string;
}

interface IndexInfo {
  index_name: string;
  column_names: string[];
}

/**
 * DB에서 모든 테이블 목록 가져오기
 */
async function getTables(): Promise<string[]> {
  const { data, error } = await supabase.rpc('get_tables', {});

  if (error) {
    // RPC가 없으면 직접 쿼리
    const query = `
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `;

    const { data: tables, error: queryError } = await supabase
      .from('information_schema.tables')
      .select('table_name');

    if (queryError) {
      console.error('테이블 목록 조회 실패:', queryError);
      // 하드코딩된 테이블 목록 사용
      return [
        'books',
        'chapters',
        'verses',
        'sentence_structures',
        'vocabulary',
        'contextual_explanations',
        'korean_translations',
        'special_explanations'
      ];
    }

    return tables?.map(t => t.table_name) || [];
  }

  return data || [];
}

/**
 * 특정 테이블의 컬럼 정보 가져오기
 */
async function getColumns(tableName: string): Promise<ColumnInfo[]> {
  const { data, error } = await supabase
    .rpc('exec_sql', {
      sql: `
        SELECT
          column_name,
          data_type,
          is_nullable,
          column_default,
          character_maximum_length
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = '${tableName}'
        ORDER BY ordinal_position;
      `
    });

  if (error) {
    console.error(`${tableName} 컬럼 조회 실패:`, error);
    return [];
  }

  return data || [];
}

/**
 * 스키마를 SQL 형식으로 생성
 */
async function generateSchemaSQL(): Promise<string> {
  const tables = await getTables();
  let sql = `-- Supabase 데이터베이스 스키마\n`;
  sql += `-- 생성일: ${new Date().toISOString()}\n`;
  sql += `-- 프로젝트: bible-transcription-site\n\n`;

  for (const tableName of tables) {
    sql += `-- ========================================\n`;
    sql += `-- 테이블: ${tableName}\n`;
    sql += `-- ========================================\n\n`;

    // 실제 테이블에서 샘플 데이터 구조 확인
    const { data: sample } = await supabase
      .from(tableName)
      .select('*')
      .limit(1)
      .single();

    if (sample) {
      sql += `CREATE TABLE ${tableName} (\n`;

      const columns: string[] = [];
      for (const [key, value] of Object.entries(sample)) {
        let type = 'TEXT';

        if (typeof value === 'number') {
          type = Number.isInteger(value) ? 'INTEGER' : 'NUMERIC';
        } else if (typeof value === 'boolean') {
          type = 'BOOLEAN';
        } else if (value instanceof Date || (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}/))) {
          type = 'TIMESTAMP';
        }

        columns.push(`  ${key} ${type}`);
      }

      sql += columns.join(',\n');
      sql += `\n);\n\n`;
    }
  }

  return sql;
}

/**
 * 스키마를 마크다운 형식으로 생성
 */
async function generateSchemaMarkdown(): Promise<string> {
  const tables = await getTables();
  let md = `# 데이터베이스 스키마\n\n`;
  md += `**생성일**: ${new Date().toISOString()}\n\n`;
  md += `**프로젝트**: bible-transcription-site\n\n`;
  md += `**총 테이블 수**: ${tables.length}\n\n`;
  md += `---\n\n`;

  for (const tableName of tables) {
    md += `## ${tableName}\n\n`;

    // 샘플 데이터로 구조 파악
    const { data: sample, error } = await supabase
      .from(tableName)
      .select('*')
      .limit(1)
      .single();

    if (sample) {
      md += `### 컬럼 목록\n\n`;
      md += `| 컬럼명 | 타입 | 샘플 값 |\n`;
      md += `|--------|------|--------|\n`;

      for (const [key, value] of Object.entries(sample)) {
        let type = 'TEXT';

        if (typeof value === 'number') {
          type = Number.isInteger(value) ? 'INTEGER' : 'NUMERIC';
        } else if (typeof value === 'boolean') {
          type = 'BOOLEAN';
        } else if (value instanceof Date || (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}/))) {
          type = 'TIMESTAMP';
        }

        const sampleValue = value === null ? 'NULL' :
                           typeof value === 'string' && value.length > 50
                           ? value.substring(0, 47) + '...'
                           : String(value);

        md += `| ${key} | ${type} | ${sampleValue} |\n`;
      }

      md += `\n`;

      // 총 레코드 수
      const { count } = await supabase
        .from(tableName)
        .select('*', { count: 'exact', head: true });

      if (count !== null) {
        md += `**총 레코드 수**: ${count}\n\n`;
      }
    } else {
      md += `*빈 테이블*\n\n`;
    }

    md += `---\n\n`;
  }

  return md;
}

/**
 * 메인 실행
 */
async function main() {
  console.log('📊 Supabase 스키마 추출 시작...\n');

  try {
    // SQL 형식 생성
    console.log('1️⃣ SQL 스키마 생성 중...');
    const sqlSchema = await generateSchemaSQL();
    fs.writeFileSync(
      path.join(__dirname, 'schema.sql'),
      sqlSchema,
      'utf-8'
    );
    console.log('✅ schema.sql 생성 완료\n');

    // Markdown 형식 생성
    console.log('2️⃣ Markdown 스키마 생성 중...');
    const mdSchema = await generateSchemaMarkdown();
    fs.writeFileSync(
      path.join(__dirname, 'SCHEMA.md'),
      mdSchema,
      'utf-8'
    );
    console.log('✅ SCHEMA.md 생성 완료\n');

    console.log('🎉 스키마 추출 완료!');
    console.log('   - bible-analysis/database/schema.sql');
    console.log('   - bible-analysis/database/SCHEMA.md');

  } catch (error) {
    console.error('❌ 스키마 추출 실패:', error);
    process.exit(1);
  }
}

main();
