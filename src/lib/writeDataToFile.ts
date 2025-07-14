// react
import fs from 'fs/promises';
import path from 'path';

export async function writeDataToFile(
  filename: string,
  exportName: string,
  data: Record<string, string> | Record<string, string>[]
) {
  let body: string;
  let returnType: string;

  if (Array.isArray(data)) {
    // Array of objects
    const arrayString = data.map(obj => {
      const entries = Object.entries(obj).map(
        ([k, v]) => `  ${k}: ${JSON.stringify(v)}`
      );
      return `{\n${entries.join(',\n')}\n}`;
    }).join(',\n');

    body = `[\n${arrayString}\n]`;
    returnType = `Record<string, string>[]`;
  } else {
    // Single object
    const entries = Object.entries(data).map(
      ([k, v]) => `  ${k}: ${JSON.stringify(v)}`
    );
    body = `{\n${entries.join(',\n')}\n}`;
    returnType = `Record<string, string>`;
  }

  const content = `export function ${exportName}(): ${returnType} {
  return ${body};
}
`;

  const filePath = path.resolve(process.cwd(), 'src/data', filename);

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, 'utf8');

  return filePath;
}
