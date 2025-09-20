export async function fetchBlogs() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/iahepl-blogs?populate=*`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
                },
                next: { revalidate: 60 },
            }
        );

        console.log({ res })
        if (!res.ok) {
            throw new Error(`Failed to fetch blogs: ${res.statusText}`);
        }

        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}

export async function getBlog(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/iahepl-blogs?filters[Slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 60 }, // optional ISR
      }
    );

    if (!res.ok) throw new Error(`Failed to fetch blog: ${res.statusText}`);

    const data = await res.json();
    return data.data[0] || null;
  } catch (err) {
    console.error(err);
    return null;
  }
}