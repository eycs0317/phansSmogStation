// metadata
export async function generateMetadata() {
  const {lang} = await getSite();

  const localizedTitles: Record<string, string> = {
    'en-US': 'Resume',
    'zh-HK': '履歷',
  };

  return {
    title: localizedTitles[lang] ?? '',
  };
}

// nextjs
import Image from 'next/image';

// data
import {getContent as testimonialContent} from '@/data/testimonial';

// ui
import Heading from '@/ui/atoms/heading';

// ui - molecules
import Hero from '@/ui/molecules/hero';
import Message from '@/ui/molecules/message';
import ContainerGroup from '@/ui/molecules/containerGroup';
import Container from '@/ui/molecules/container';
import TestimonialGroup from '@/ui/molecules/testimonialGroup';
import Testimonial from '@/ui/molecules/testimonial';

// lib
import {getSite} from '@/lib/getSite';
import {l10n} from '@/lib/l10n';

// utils
import {getRandomFromArray} from '@/util/getRandomFromArray';

// type
export type PageProps = {
  searchParams?: Promise<Record<string, string | string[]>>;
};

export default async function MainPage({
  searchParams
}: PageProps) {
  const params = searchParams ? await searchParams : undefined;
  const site = await getSite(params);

  const testimonials = testimonialContent();
  const randomTestimonials = getRandomFromArray(testimonials, 2);

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
        <TestimonialGroup>
          {randomTestimonials.map(({quote, author, role}, i) => (
            <Testimonial
              key={i}
              quote={quote}
              author={author}
              role={role}
            />
          ))}
        </TestimonialGroup>
        <ContainerGroup className="dual forth reverse">
          <Container>
            <Image src="/assets/i/design_engineering_handbook.png" width="264" height="403" alt={l10n('home-book-photo', site.lang)} />
          </Container>
          <Container>
            <Heading level={2}><strong>{l10n('home-book-heading-1a', site.lang)}</strong>{l10n('home-book-heading-1b', site.lang)}</Heading>
            <p>{l10n('home-book-content-1', site.lang)}</p>
          </Container>
        </ContainerGroup>
      </main>
    </>
  );
}
