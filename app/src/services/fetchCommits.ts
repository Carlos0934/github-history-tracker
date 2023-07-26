import { Commit } from "../types";

interface Params {
  url: string;
  branch?: string;
  page: number;
  perPage?: number;
}

async function fetchCommits({ url, branch, page, perPage }: Params) {
  const uri = `${import.meta.env.VITE_API_URL}/projects/commits`;
  const params = new URLSearchParams({
    url,
    perPage: perPage?.toString() || "10",
    page: page.toString(),
  });
  if (branch) params.append("branch", branch);

  try {
    const response = await fetch(`${uri}?${params.toString()}`);

    if (!response.ok) throw new Error("Request failed");

    const data = await response.json();

    return data.commits as Commit[];
  } catch (err) {
    throw new Error("Could not fetch commits");
  }
}

export default fetchCommits;
