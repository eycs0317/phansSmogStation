// data
import {getContent as layoutContent} from '@/data/layout';
import {getContent as messageContent} from '@/data/message';

export function l10n(
  contentCode: string,
  lang: string = 'en-US',
): string {
  if (!contentCode.includes('-')) {
    throw new Error(`Invalid contentCode: ${contentCode}`);
  }
  const [groupKey, ...rest] = contentCode.split('-');
  if (!groupKey || rest.length === 0) {
    throw new Error(`Invalid contentCode: ${contentCode}`);
  }
  const contentKey = rest.join('-').toLowerCase();

  let content: Record<string, Record<string, string>>;

  switch (groupKey) {
    case 'layout':
      content = layoutContent();
      break;
    case 'message':
      content = messageContent();
      break;
    default:
      throw new Error(`Unsupported content group: ${groupKey}`);
  }

  return (
    content?.[contentKey]?.[lang] ??
    content?.[contentKey]?.['en-US'] ??
    `[${contentKey.toUpperCase()}]`
  );
}
