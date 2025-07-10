// nextjs
import Image from 'next/image';

// ui
import Heading from '@/ui/atoms/heading';

// ui - molecules
import Hero from '@/ui/molecules/hero';
import Message from '@/ui/molecules/message';
import ContainerGroup from '@/ui/molecules/containerGroup';
import Container from '@/ui/molecules/container';

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
        <ContainerGroup className="river forth">
          <Container>
            <Heading level={2}>Photo 1</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 2</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 3</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 4</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 5</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 6</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 7</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 8</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 9</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 10</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 11</Heading>
            <p>These are my latest photos</p>
          </Container>
          <Container>
            <Heading level={2}>Photo 12</Heading>
            <p>These are my latest photos</p>
          </Container>
        </ContainerGroup>
      </main>
    </>
  );
}
