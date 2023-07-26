interface Params {
  url: string;
}

async function fetchBranches({ url }: Params): Promise<string[]> {
  const uri = `${import.meta.env.VITE_API_URL}/projects/branches`;
  const params = new URLSearchParams({
    url,
  });

  try {
    const response = await fetch(`${uri}?${params.toString()}`);

    if (!response.ok) throw new Error("Request failed");

    const data = await response.json();

    return data.branches as string[];
  } catch (err) {
    console.error(err);
    throw new Error("Could not fetch branches");
  }
}

export default fetchBranches;
