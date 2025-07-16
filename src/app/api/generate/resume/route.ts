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

    const resume = await req.json();

    const filePath = await writeDataToFile(
      'resume.ts',
      'getContent',
      resume,
      { typeName: "Resume", importPath: "@/types/resume" }
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
