export const config = { runtime: 'edge' };

export default async function handler() {
  const clientId     = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response(
      JSON.stringify({ error: 'Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET env vars' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const credentials = btoa(`${clientId}:${clientSecret}`);

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!res.ok) {
    const body = await res.text();
    return new Response(
      JSON.stringify({ error: 'Spotify token request failed', status: res.status, body }),
      { status: res.status, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { access_token } = await res.json();

  return new Response(JSON.stringify({ access_token }), {
    headers: {
      'Content-Type': 'application/json',
      // Cache for 50 min — client_credentials tokens last 60 min
      'Cache-Control': 'public, max-age=3000, s-maxage=3000',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
