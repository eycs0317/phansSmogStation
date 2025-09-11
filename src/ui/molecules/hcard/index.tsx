// styles
import '@/ui/molecules/hcard/styles.css';

// util
import { formatUSPhone } from '@/util/formatUSPhone';

// type
export type HcardProps = {
  name?: string;
  street1?: string;
  street2?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  email?: string;
  url?: string;
  phone?: string;
  className?: string;
  id?: string;
};

export default function Hcard({
  name,
  street1,
  street2,
  locality,
  region,
  postalCode,
  email,
  url,
  phone,
  className,
  id,
}: HcardProps) {
  const classes = ['h-card'];
  if (className) classes.push(className);

  return (
    <div className={classes.join(' ')} id={id}>
      {name && <div className="p-name">{name}</div>}

      {(street1 || street2 || locality || region || postalCode) && (
        <div className="p-adr h-adr">
          {street1 && <div className="p-street-address">{street1}</div>}
          {street2 && <div className="p-extended-address">{street2}</div>}

          {(locality || region || postalCode) && (
            <div>
              {locality && <span className="p-locality">{locality}</span>}
              {locality && region && ','}{' '}
              {region && <abbr className="p-region">{region}</abbr>}{' '}
              {postalCode && (
                <span className="p-postal-code">{postalCode}</span>
              )}
            </div>
          )}
        </div>
      )}

      {phone && (
        <a
          className="p-tel"
          href={`tel:${phone}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {formatUSPhone(phone)}
        </a>
      )}

      {email && (
        <a className="u-email" href={`mailto:${email}`}>
          {email}
        </a>
      )}

      {url && (
        <div>
          <a
            className="u-url"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {url}
          </a>
        </div>
      )}
    </div>
  );
}
