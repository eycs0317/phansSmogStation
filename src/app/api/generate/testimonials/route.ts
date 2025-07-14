import {NextResponse} from 'next/server';
import {prisma} from '@/lib/prisma';
import {writeDataToFile} from '@/lib/writeDataToFile';

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      select: {
        quote: true,
        author: true,
        role: true,
      },
    });

    const sanitizedTestimonials = testimonials.map(t => ({
      quote: t.quote ?? '',
      author: t.author ?? '',
      role: t.role ?? '',
    }));

    const filePath = await writeDataToFile(
      'testimonial.ts',
      'getContent',
      sanitizedTestimonials
    );

    return NextResponse.json({
      message: 'Testimonials file generated.',
      file: filePath,
      count: sanitizedTestimonials.length,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate testimonials.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
