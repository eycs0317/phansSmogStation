// styles
import '@/ui/molecules/testimonialGroup/styles.css';

// ui - molecules
import Testimonial from '@/ui/molecules/testimonial';

// lib
import {getContent} from '@/lib/getContent';

// utils
import {getRandomFromArray} from '@/util/getRandomFromArray';

// type
export type TestimonialGroupProps = {
  contentType: 'testimonial';
  className?: string;
  id?: string;
};

export default function TestimonialGroup({
  contentType,
  className,
  id,
}: TestimonialGroupProps) {
  const classes = ['testimonialGroup'];
  if (className) classes.push(className);

  const testimonials = getContent(contentType);
  const randomTestimonials = getRandomFromArray(testimonials, 2);

  return (
    <div className={classes.join(' ')} id={id}>
      {randomTestimonials.map(({quote, author, role}, i) => (
        <Testimonial
          key={i}
          quote={quote}
          author={author}
          role={role}
        />
      ))}
    </div>
  );
}
