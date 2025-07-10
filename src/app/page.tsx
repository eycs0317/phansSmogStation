// nextjs
import Image from 'next/image';

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

// utils
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
          <Image src="/assets/i/profile.svg" width="100" height="100" alt={l10n('layout-hero-avatar', site.lang)} />
        }
        secondary={
          <>
            <Heading level={1}><strong>Eddie</strong> Lou</Heading>
            <p>I <strong>code</strong> web.<br />I <strong>design</strong> web.<br />Most importantly, I <strong>understand</strong> web.</p>
          </>
        }
      />
      <main role="main">
        <Message messageCode={site.messageCode ?? ''} />
        <ContainerGroup id="intro">
          <Container>
            <p>Seasoned UX and Engineering Leader with a proven track record of leading, scaling, and maturing design and engineering organization to deliver world-class user experiences, exemplify engineering excellence and align with company goals. Expert in developing and implementing <strong>design systems</strong>, fostering <strong>cross-functional collaboration</strong>, and defining <strong>UX strategy</strong>.</p>
            <p>Author of <strong>Design Engineering Handbook</strong> published by Design Better, InVision.</p>
          </Container>
        </ContainerGroup>
        <TestimonialGroup>
          <Testimonial
            quote="When I managed the centralized Job Seeker Design Technology and Design Engineering team, Eddie offered me valuable guidance and helped me maintain high standards for my team."
            author="Susan Le"
            role="Senior UX Director"
          />
          <Testimonial
            quote="When I managed the centralized Job Seeker Design Technology and Design Engineering team, Eddie offered me valuable guidance and helped me maintain high standards for my team."
            author="Susan Le"
            role="Senior UX Director"
          />
        </TestimonialGroup>
        <ContainerGroup className="river forth">
          <Container>
            <Image src="/assets/i/design_engineering_handbook.png" width="264" height="403" alt={l10n('home-book', site.lang)} />
          </Container>
          <Container>
            <Heading level={2}><strong>Design Engineering</strong> Handbook</Heading>
            <p>Learn how design engineering, an essential discipline to creating great products, brings together form and function while accelerating innovation. Written by industry leaders from Indeed, Mailchimp, The New York Times, and Minted, this book will help you connect design and engineering and work more efficiently as a team. Available in epub, PDF, and audiobook formats.</p>
          </Container>
        </ContainerGroup>
      </main>
    </>
  );
}
