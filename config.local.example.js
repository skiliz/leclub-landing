// ─── Local development credentials ────────────────────────────────
// Copy this file to config.local.js and fill in your Client Secret.
// config.local.js is gitignored and never deployed to Vercel.
//
// Get your Client Secret from:
// https://developer.spotify.com/dashboard → your app → Settings
//
// On Vercel, set these as environment variables in the dashboard:
//   SPOTIFY_CLIENT_ID     = 2d26910dc8fe4ce398f540ce9c582c72
//   SPOTIFY_CLIENT_SECRET = <your secret>

window.__LECLUB_DEV__ = {
  clientId:     '2d26910dc8fe4ce398f540ce9c582c72',
  clientSecret: 'YOUR_CLIENT_SECRET_HERE',
};
