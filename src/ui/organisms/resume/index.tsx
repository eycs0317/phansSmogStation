// styles
import '@/ui/organisms/resume/styles.css';

// ui - atoms
import Heading from '@/ui/atoms/heading';

// ui - molecules
import Hcard from '@/ui/molecules/hcard';

// lib
import {getContent} from '@/lib/getContent';

// type
export type ResumeProps = {
  contentType?: string;
  className?: string;
  id?: string;
};

export default async function Resume({
  contentType = 'resumeUX',
  className,
  id,
}: ResumeProps) {
  const classes = ['resumeUX'];
  if (className) classes.push(className);

  const resume = getContent(contentType);
  if (Array.isArray(resume)) {
    throw new Error(`${contentType} returned an array — expected an object`);
  }

  return (
    <div className={classes.join(' ')} id={id}>
      <Hcard
        name={resume.name}
        street1={resume.street1}
        street2={resume.street2}
        locality={resume.locality}
        region={resume.region}
        postalCode={resume.postalCode}
        email={resume.email}
        url={resume.urlLinkedin}
        phone={resume.phone}
      />
      <section dangerouslySetInnerHTML={{ __html: resume.summary }} />
      <Heading level={2}>Core Competencies</Heading>
      <section dangerouslySetInnerHTML={{ __html: resume.competencies }} />
    </div>
  );
}
