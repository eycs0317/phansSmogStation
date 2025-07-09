// react
import type {ReactNode} from 'react';

// styles
import '@/ui/molecules/hero/styles.css';

// type
export type HeroProps = {
  primary: ReactNode;
  secondary: ReactNode;
  className?: string | null;
  id?: string;
};

export default function Hero({
  primary,
  secondary,
  className,
  id,
}: HeroProps) {
  const classes = ['hero'];
  if (className) classes.push(className);

  return (
    <section className={classes.join(' ')} id={id}>
      <div className="container">
        <div>{primary}</div>
        <div>{secondary}</div>
      </div>
    </section>
  );
}
