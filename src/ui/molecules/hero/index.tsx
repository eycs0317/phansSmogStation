// react
import type { ReactNode } from 'react';

// styles
import '@/ui/molecules/hero/styles.css';

// type
export type HeroProps = {
  video?: string;
  primary: ReactNode;
  secondary?: ReactNode;
  className?: string;
  id?: string;
};

export default function Hero({
  video,
  primary,
  secondary,
  className,
  id,
}: HeroProps) {
  const classes = ['hero'];
  if (className) classes.push(className);
  if (video) classes.push('video');

  return (
    <section className={classes.join(' ')} id={id}>
      {video && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={`/assets/v/hero/${video}.mov`} type="video/mp4" />
        </video>
      )}
      <div className="wrapper">
        <div>{primary}</div>
        {secondary && <div>{secondary}</div>}
      </div>
    </section>
  );
}
