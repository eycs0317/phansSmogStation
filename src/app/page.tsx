// nextjs
import Image from 'next/image';
import Link from 'next/link';

// ui - atoms
import Heading from '@/ui/atoms/heading';

// ui - molecules
import Hero from '@/ui/molecules/hero';
import Message from '@/ui/molecules/message';
import ContainerGroup from '@/ui/molecules/containerGroup';
import Container from '@/ui/molecules/container';
import TestimonialGroup from '@/ui/molecules/testimonialGroup';
import Navigation from '@/ui/molecules/navigation';

// styles
import '@/ui/atoms/formField/styles.css';

// lib
import {getSite} from '@/lib/getSite';
import {l10n} from '@/lib/l10n';

// type
export type PageProps = {
  searchParams?: Promise<Record<string, string | string[]>>;
};

export default async function MainPage({
  searchParams
}: PageProps) {
  const params = searchParams ? await searchParams : undefined;
  const site = await getSite(params);

  return (
    <>
      <Hero
        primary={
          <Image src="/assets/i/profile.svg" width="100" height="100" alt={l10n('home-hero-avatar', site.lang)} />
        }
        secondary={
          <>
            <Heading level={1}><strong>{l10n('home-hero-heading-1a', site.lang)}</strong> {l10n('home-hero-heading-1b', site.lang)}</Heading>
            <p>{l10n('home-hero-content-1a', site.lang)}<strong>{l10n('home-hero-content-1b', site.lang)}</strong>{l10n('home-hero-content-1c', site.lang)}<br />{l10n('home-hero-content-2a', site.lang)}<strong>{l10n('home-hero-content-2b', site.lang)}</strong>{l10n('home-hero-content-2c', site.lang)}<br />{l10n('home-hero-content-3a', site.lang)}<strong>{l10n('home-hero-content-3b', site.lang)}</strong>{l10n('home-hero-content-3c', site.lang)}</p>
            <Navigation display="horizontal">
              <ul>
                <li><Link href="/resume" className="formButton primary">Resume</Link></li>
                <li><Link href="https://www.linkedin.com/in/edlou/" className="formButton" target="_blank">LinkedIn</Link></li>
                <li><Link href="https://bit.ly/edlou-ux-portfolio" className="formButton" target="_blank">Portfolio</Link></li>
              </ul>
            </Navigation>
          </>
        }
      />
      <main role="main">
        <Message messageCode={site.messageCode ?? ''} />
        <ContainerGroup id="intro">
          <Container className="intro">
            <p>{l10n('home-intro-content-1a', site.lang)}<strong>{l10n('home-intro-content-1b', site.lang)}</strong>{l10n('home-intro-content-1c', site.lang)}<strong>{l10n('home-intro-content-1d', site.lang)}</strong>{l10n('home-intro-content-1e', site.lang)}<strong>{l10n('home-intro-content-1f', site.lang)}</strong>{l10n('home-intro-content-1g', site.lang)}</p>
            <p>{l10n('home-intro-content-2a', site.lang)}<strong>{l10n('home-intro-content-2b', site.lang)}</strong>{l10n('home-intro-content-2c', site.lang)}</p>
          </Container>
        </ContainerGroup>

        <TestimonialGroup contentType="testimonial" />

        <ContainerGroup className="dual forth reverse" id="handbook">
          <Container>
            <Image src="/assets/i/design_engineering_handbook.png" width="264" height="403" alt={l10n('home-book-photo', site.lang)} />
          </Container>
          <Container>
            <Heading level={2}><strong>{l10n('home-book-heading-1a', site.lang)}</strong>{l10n('home-book-heading-1b', site.lang)}</Heading>
            <p>{l10n('home-book-content-1', site.lang)}</p>
            <Navigation display="horizontal">
              <ul>
                <li><Link href="/assets/r/InVision_DesignEngineeringHandbook.pdf" className="formButton" target="_blank">Download</Link></li>
                <li><Link href="https://books.apple.com/us/audiobook/design-engineering-handbook/id1527368573" className="formButton" target="_blank">Apple Books</Link></li>
                <li><Link href="https://www.audiobooks.com/m-audiobook/design-engineering-handbook/452247" className="formButton" target="_blank">audiobooks.com</Link></li>
                <li><Link href="https://play.google.com/store/audiobooks/details?pcampaignid=books_assistant&id=AQAAAEAcTFAMXM" className="formButton" target="_blank">Google Play Books</Link></li>
              </ul>
            </Navigation>
          </Container>
        </ContainerGroup>
      </main>
    </>
  );
}
