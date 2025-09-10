// react
import fs from 'fs/promises';
import path from 'path';

function toTSLiteral(value: unknown, indent = 2): string {
  const pad = ' '.repeat(indent);

  if (Array.isArray(value)) {
    if (value.length === 0) return `[]`;
    const items = value
      .map((item) => toTSLiteral(item, indent + 2))
      .join(',\n');
    return `[\n${items}\n${pad}]`;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
      .map(([k, v]) => {
        const key = JSON.stringify(k);
        return `${pad}${key}: ${toTSLiteral(v, indent + 2)}`;
      })
      .join(',\n');
    return `{\n${entries}\n${' '.repeat(indent - 2)}}`;
  }

  return JSON.stringify(value);
}

export async function writeDataToFile(
  filename: string,
  exportName: string,
  data: unknown,
  typeImport?: { typeName: string; importPath: string }
) {
  const body = toTSLiteral(data);

  const typeLine = typeImport
    ? `import type { ${typeImport.typeName} } from "${typeImport.importPath}";\n\n`
    : '';

  const returnType = typeImport ? typeImport.typeName : 'unknown';

  const content = `${typeLine}export function ${exportName}(): ${returnType} {
  return ${body};
}
`;

  const filePath = path.resolve(process.cwd(), 'src/data', filename);

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, 'utf8');

  return filePath;
}
