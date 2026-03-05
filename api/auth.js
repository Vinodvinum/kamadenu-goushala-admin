export default function handler(req, res) {
  const { provider, site_id, scope } = req.query;

  if (provider !== 'github') {
    return res.status(400).send('Unsupported provider');
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = `https://kamadenu-goushala-admin.vercel.app/api/callback`;
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope || 'repo'}&state=${encodeURIComponent(site_id || '')}`;

  res.redirect(authUrl);
}
