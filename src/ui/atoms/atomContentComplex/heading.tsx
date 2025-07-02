// react
import type {JSX} from 'react';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string | null;
  className?: string | null;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
};

const defaultClasses: Record<HeadingProps['level'], string> = {
  1: 'text-6xl',
  2: 'text-5xl',
  3: 'text-4xl',
  4: 'text-3xl',
  5: 'text-2xl',
  6: 'text-xl',
};

export default function Heading({
  level,
  id = null,
  className = null,
  children,
  dangerouslySetInnerHTML,
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = className ?? defaultClasses[level];

  return (
    <Tag
      id={id ?? undefined}
      className={classes}
      {...(dangerouslySetInnerHTML
        ? {dangerouslySetInnerHTML}
        : {children})}
    />
  );
}
