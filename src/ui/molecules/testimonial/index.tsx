// styles
import '@/ui/molecules/testimonial/styles.css';

// type
export type TestimonialProps = {
  quote: string;
  author: string;
  role?: string;
  className?: string;
  id?: string;
};

export default function Testimonial({
  quote,
  author,
  role,
  className,
  id,
}: TestimonialProps) {
  const classes = ['testimonial'];
  if (className) classes.push(className);

  return (
    <section className={classes.join(' ')} id={id}>
      <blockquote>&quot;{quote}&quot;</blockquote>
      <p>
        {author}
        {role && <em> {role}</em>}
      </p>
    </section>
  );
}
