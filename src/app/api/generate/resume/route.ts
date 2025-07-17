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
    const resume = body.resume;
    if (!resume) {
      return NextResponse.json(
        { error: 'Missing resume data' },
        { status: 400 }
      );
    }
    const filename = body.filename ?? 'resume.ts';

    const filePath = await writeDataToFile(
      filename,
      'getContent',
      resume,
      { typeName: 'Resume', importPath: '@/types/resume' }
    );

    return NextResponse.json({
      message: 'Resume file generated.',
      file: filePath,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate resume.' }, { status: 500 });
  }
}
