// data
import {getContent as getTestimonial} from '@/data/testimonial';
import {getContent as getResumeDE} from '@/data/resumeDE';
import {getContent as getResumeUX, Resume} from '@/data/resumeUX';

export function getContent(contentType: 'testimonial'): Record<string, string>[];
export function getContent(contentType: 'resumeUX' | 'resumeDE'): Resume;
export function getContent(
  contentType: string,
): unknown {

  switch (contentType) {
    case 'testimonial':
      return getTestimonial();
    case 'resumeUX':
      return getResumeUX();
    case 'resumeDE':
      return getResumeDE();
    default:
      throw new Error(`Unsupported content type: ${contentType}`);
  }
}
