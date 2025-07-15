// nextjs
import {NextRequest, NextResponse} from 'next/server';

import {writeDataToFile} from '@/lib/writeDataToFile';

export async function POST(req: NextRequest) {
  try {

    const secret = req.headers.get('x-efx-secret');
    if (secret !== process.env.EFX_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const testimonials: Record<string, string>[] = await req.json();

    const filePath = await writeDataToFile(
      'testimonial.ts',
      'getContent',
      testimonials
    );

    return NextResponse.json({
      message: 'Testimonials file generated.',
      file: filePath,
      count: testimonials.length,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate testimonials.' }, { status: 500 });
  }
}
