// react
import type {ReactNode} from 'react';

// styles
import '@/ui/molecules/testimonialGroup/styles.css';

// type
export type TestimonialGroupProps = {
  children: ReactNode;
  className?: string | null;
  id?: string;
};

export default function TestimonialGroup({
  children,
  className,
  id,
}: TestimonialGroupProps) {
  const classes = ['testimonialGroup'];
  if (className) classes.push(className);

  return (
    <div className={classes.join(' ')} id={id}>{children}</div>
  );
}
