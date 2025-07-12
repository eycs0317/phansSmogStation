// data
import {getContent as getTestimonial} from '@/data/testimonial';
import {getContent as getResumeDE} from '@/data/resumeDE';
import {getContent as getrResumeUX} from '@/data/resumeUX';

// type
type Content =
  | Array<Record<string, string>>
  | Record<string, string>;

export function getContent(
  contentType: string,
): Content {
  let content: Array<Record<string, string>> | Record<string, string>;

  switch (contentType) {
    case 'testimonial':
      content = getTestimonial();
      break;
    case 'resumeUX':
      content = getrResumeUX();
      break;
    case 'resumeDE':
      content = getResumeDE();
      break;
    default:
      throw new Error(`Unsupported content type: ${contentType}`);
  }

  return (
    content ??
    `[${contentType.toUpperCase()}]`
  );
}
