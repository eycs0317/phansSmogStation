// nextjs
import Image from 'next/image';

// ui - atoms
import Heading from '@/ui/atoms/heading';

// ui - molecules
import Hero from '@/ui/molecules/hero';
import ContainerGroup from '@/ui/molecules/containerGroup';
import Container from '@/ui/molecules/container';
import Testimonial from '@/ui/molecules/testimonial';
import HCard from '@/ui/molecules/hcard';

// styles
import '@/ui/atoms/formField/styles.css';

// lib
// import { getSite } from '@/lib/getSite';

// type
export type PageProps = {
  searchParams?: Promise<Record<string, string | string[]>>;
};

export default async function MainPage({ searchParams }: PageProps) {
  const params = searchParams ? await searchParams : undefined;
  console.log(params);

  return (
    <>
      <Hero
        video="home"
        primary={
          <>
            <Heading level={1}>Drive Worry-Free</Heading>
            <p>
              We make smog checks simple, fast, and stress-free, so you can get
              back on the road with peace of mind.
            </p>
          </>
        }
      />
      <main role="main">
        <ContainerGroup id="intro" className="dual">
          <Container>
            <Image
              src="/assets/i/smogcheck.jpg"
              width="379"
              height="277"
              alt="Smog Check"
            />
          </Container>
          <Container>
            <Heading level={3}>Services</Heading>
            <p>
              At Phan’s Smog Station, we specialize in providing reliable smog
              checks to keep your vehicle compliant with California emissions
              standards. Our process is quick, efficient, and designed to get
              you back on the road without hassle. With friendly service and
              accurate testing, we make smog checks simple and stress-free.
            </p>
          </Container>
        </ContainerGroup>

        <ContainerGroup id="testimonialGroup" className="tri">
          <Container>
            <Testimonial
              quote="Fast, great customer service, and Nate even kept his shop open an extra 15 minutes because I was running late"
              author="Manpreet K."
              role="2025"
            />
          </Container>
          <Container>
            <Testimonial
              quote="Have been here for flat tires, replacements, smog...they do everything well and with a smile."
              author="Nick L."
              role="2025"
            />
          </Container>
          <Container>
            <Testimonial
              quote="I was helped by Tri, he was super friendly and the service was QUICK, and affordable and the information was sent directly to the DMV!"
              author="Cythia C."
              role="2025"
            />
          </Container>
        </ContainerGroup>

        <ContainerGroup id="contact" className="dual">
          <Container>
            <HCard
              name="Phan's Smog Station"
              street1="6938 Thornton Ave,"
              locality="Newark"
              region="CA"
              postalCode="94560"
            ></HCard>

            <HCard phone="5107940384" email="info@phan-smog.com"></HCard>
            <dl>
              <dt>Sunday:</dt>
              <dd>Closed</dd>
              <dt>Monday</dt>
              <dd>8:00am - 5:00pm</dd>
              <dt>Tuesday</dt>
              <dd>8:00am - 5:00pm</dd>
              <dt>Wednesday</dt>
              <dd>8:00am - 5:00pm</dd>
              <dt>Thursday</dt>
              <dd>8:00am - 5:00pm</dd>
              <dt>Friday</dt>
              <dd>8:00am - 5:00pm</dd>
              <dt>Saturday</dt>
              <dd>8:00am - 1:00pm</dd>
            </dl>
          </Container>
          <Container>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.0407352322018!2d-122.0387420876875!3d37.53053702607344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf1dd7f0cb75%3A0x5dd5b9f492d542bf!2sPhan&#39;s%20Smog%20Station!5e0!3m2!1sen!2sus!4v1756924872552!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Container>
        </ContainerGroup>
      </main>
    </>
  );
}
