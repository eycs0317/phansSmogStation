// lib
import {getSession} from '@/lib/session';

export async function getSite(searchParams?: Record<string, string | string[]>) {
  const session = await getSession();
  const lang = session?.lang ?? 'en-US';

  const messageParam = searchParams?.message;

  let messageCode: string | null = null;
  if (typeof messageParam === 'string' && messageParam.trim() !== '') {
    messageCode = messageParam;
  } else if (Array.isArray(messageParam) && messageParam.length > 0) {
    messageCode = messageParam[0];
  }

  return {lang, messageCode};
}
