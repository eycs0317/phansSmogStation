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

    const body = await req.json();
    const testimonials: Record<string, string>[] = body.testimonials;
    if (!testimonials) {
      return NextResponse.json(
        { error: 'Missing testimonials data' },
        { status: 400 }
      );
    }
    const filename = body.filename ?? 'testimonial.ts';

    const filePath = await writeDataToFile(
      filename,
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
