// styles
import '@/ui/organisms/resume/styles.css';

// ui - atoms
import Heading from '@/ui/atoms/heading';

// ui - molecules
import Hcard from '@/ui/molecules/hcard';
import ResumeDescription from '@/ui/molecules/resumeDescription';

// lib
import {getContent} from '@/lib/getContent';

// type
export type ResumeProps = {
  contentType: 'resumeUX' | 'resumeDE';
  className?: string;
  id?: string;
};

export default async function Resume({
  contentType,
  className,
  id,
}: ResumeProps) {
  const classes = ['resume'];
  if (className) classes.push(className);

  const resume = getContent(contentType);

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
      <section dangerouslySetInnerHTML={{ __html: resume.summary }} className="summary" />
      <Heading level={2}>Core Competencies</Heading>
      <section dangerouslySetInnerHTML={{ __html: resume.competencies }} className="competencies" />
      <Heading level={2}>Professional Experience</Heading>
      <ResumeDescription
        experience={resume.experience}
        open={true}
      />
      <Heading level={2}>Additional Experience</Heading>
      <ResumeDescription
        experience={resume.additionalExperience}
        open={true}
      />
    </div>
  );
}
