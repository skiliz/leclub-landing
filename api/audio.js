export const config = { runtime: 'edge' };

export default async function handler(req) {
  const url = new URL(req.url);
  const audioUrl = url.searchParams.get('url');
  if (!audioUrl) {
    return new Response('Missing url param', { status: 400 });
  }

  try {
    const upstream = await fetch(audioUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    const body = upstream.body;
    const contentType = upstream.headers.get('content-type') || 'audio/mpeg';

    return new Response(body, {
      status: upstream.status,
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (e) {
    return new Response('Fetch failed', { status: 502 });
  }
}