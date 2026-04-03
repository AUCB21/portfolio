export const revalidate = 3600; // re-fetch at most once per hour

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  updated_at: string;
  fork: boolean;
}

export async function GET() {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  if (process.env.GITHUB_TOKEN) {
    (headers as Record<string, string>).Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    'https://api.github.com/users/aucb21/repos?per_page=100&sort=updated',
    { headers, next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return Response.json({ error: 'Failed to fetch repos' }, { status: res.status });
  }

  const repos: GitHubRepo[] = await res.json();

  const filtered = repos.filter(
    (r) => !r.fork && r.topics?.includes('portfolio')
  );

  return Response.json(filtered);
}
