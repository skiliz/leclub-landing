export const config = { runtime: 'edge' };

export default async function handler(req) {
  const res = await fetch(
    'https://api.deezer.com/playlist/5237028406/tracks?limit=50'
  );
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
