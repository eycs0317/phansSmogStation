// styles
import '@/ui/molecules/message/styles.css';

// lib
import {getSession} from '@/lib/session';

// utils
import {l10n} from '@/lib/l10n';

// type
export type MessageProps = {
  messageCode: string;
  className?: string | null;
  id?: string;
};

export default async function Message({
  messageCode,
  className,
  id,
}: MessageProps) {
  if (!messageCode) {
    return null;
  }

  const session = await getSession();
  const lang = session?.lang ?? 'en-US';

  const messageTypeMap: Record<string, string> = {
    e: 'error',
    i: 'info',
    s: 'success',
  };

  const messageType = messageCode.charAt(0).toLowerCase();
  const messageTypeClassName = messageTypeMap[messageType] ?? 'info';

  const classes = [
    'message',
    messageTypeClassName,
    className ?? '',
  ].filter(Boolean);

  const message = l10n('message-' + messageCode, lang);

  return (
    <section className={classes.join(' ')} id={id}>
      <p>{message}</p>
    </section>
  );
}
