// react
import type {JSX} from 'react';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
  className?: string | null;
};

const defaultClasses: Record<HeadingProps['level'], string> = {
  1: 'text-6xl',
  2: 'text-5xl',
  3: 'text-4xl',
  4: 'text-3xl',
  5: 'text-2xl',
  6: 'text-xl',
};

export default function Heading({level, content, className = null}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = className ?? defaultClasses[level];

  return <Tag className={classes}>{content}</Tag>;
}
