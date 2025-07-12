// styles
import '@/ui/molecules/resumeDescription/styles.css';

// ui - atoms
import Heading from '@/ui/atoms/heading';

// type
export type ResumeExperience = {
  company?: string;
  locality?: string;
  region?: string;
  time?: string;
  role?: string;
  intro?: string;
  description?: string;
};
export type ResumeDescriptionProps = {
  experience?: ResumeExperience[];
  open?: boolean;
  className?: string;
  id?: string;
};

export default function ResumeDescription({
  experience,
  open,
  className,
  id,
}: ResumeDescriptionProps) {
  const classes = ['resumeDescription'];
  if (className) classes.push(className);

  return (
    <section className={classes.join(' ')} id={id}>
      {experience?.map(({company, locality, region, time, role, intro, description}, i) => (
        <details open={open} key={i}>
          {(company || locality || region || time || role) && (
            <summary>
              {company && <Heading level={3}>{company}</Heading>}
              {(locality || region) && (
                <div className="p-adr h-adr">
                  <div>
                    {locality && <span className="p-locality">{locality}</span>}
                    {locality && region && ','}{' '}
                    {region && <abbr className="p-region">{region}</abbr>}{' '}
                  </div>
                </div>
              )}
              {time && <time>{time}</time>}
              {role && <div>{role}</div>}
            </summary>
          )}
          {intro && <p>{intro}</p>}
          {description && 
            <ul dangerouslySetInnerHTML={{ __html: description }} />
          }
        </details>
      ))}
    </section>
  );
}
