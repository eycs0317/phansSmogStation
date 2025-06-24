// data
import {getContent as getLayoutContent} from '@/data/layout';
import {getContent as getMessageContent} from '@/data/message';

export function l10n(contentGroup: string, contentKey: string, lang: string): string {
  let content: Record<string, Record<string, string>> = {};

  switch (contentGroup) {
    case 'layout':
      content = getLayoutContent();
      break;
    case 'message':
      content = getMessageContent();
      break;
    default:
      return `[${contentKey}]`;
  }

  return content[contentKey]?.[lang] ?? `[${contentKey}]`;
}
