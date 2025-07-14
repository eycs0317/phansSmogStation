// react
import type {ReactNode} from 'react';

// styles
import '@/ui/molecules/hero/styles.css';

// type
export type HeroProps = {
  primary: ReactNode;
  secondary?: ReactNode;
  className?: string;
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
      <div className="wrapper">
        <div>{primary}</div>
        {secondary && <div>{secondary}</div>}
      </div>
    </section>
  );
}
