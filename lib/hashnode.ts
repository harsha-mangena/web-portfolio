export async function getBlogPosts(username: string) {
  const query = `
    query Publication($host: String!) {
      publication(host: $host) {
        posts(first: 6) {
          edges {
            node {
              id
              title
              brief
              slug
              url
              coverImage { url }
              publishedAt
              readTimeInMinutes
              tags { name slug }
            }
          }
        }
      }
    }
  `;

  // host should be username.hashnode.dev usually, or custom domain. 
  // User provided: "harshamangena" -> likely "harshamangena.hashnode.dev"
  const host = `${username}.hashnode.dev`;

  try {
    const response = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { host },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const data = await response.json();
    return data?.data?.publication?.posts?.edges || [];
  } catch (error) {
    console.error("Error fetching Hashnode posts:", error);
    return [];
  }
}
