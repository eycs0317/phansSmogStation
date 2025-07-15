// nextjs
import {NextRequest, NextResponse} from 'next/server';

// lib
import {getSession} from '@/lib/session';

export async function GET(req: NextRequest) {

  try {
    const {searchParams} = new URL(req.url);
    const lang = searchParams.get('lang');

    if (!lang) {
      return NextResponse.json(
        {success: false, error: 'Missing lang parameter'},
        {status: 400}
      );
    }

    const session = await getSession();
    switch (lang) {
      case 'en-US': session.lang = lang; break;
      default: session.lang = 'zh-HK'; break;
    }        
    await session.save();
    return NextResponse.json({success: true});
  } catch {
    return NextResponse.json(
      {success: false, error: 'Internal server error'},
      {status: 500}
    );
  }
}
