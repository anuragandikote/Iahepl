import Head from 'next/head';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function BlogPostContent({ blog }: { blog: any }) {
  if (!blog) return <div className="py-10">Blog not found.</div>;

  const { Title, blog_content, publishedAt, cover_image } = blog;
  const description = blog_content?.slice(0, 160) || "";

  return (
    <>
      <Head>
        <title>{Title} | My Blog</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={Title} />
        <meta property="og:description" content={description} />
        {cover_image?.[0]?.url && (
          <meta
            property="og:image"
            content={
              cover_image[0].url.startsWith("http")
                ? cover_image[0].url
                : `${process.env.NEXT_PUBLIC_API_URL}${cover_image[0].url}`
            }
          />
        )}
        <meta property="og:type" content="article" />
      </Head>

      <div className="py-10 container mx-auto">
        <h1 className="text-4xl font-bold mb-4">{Title}</h1>
        <div className="text-sm text-gray-500 mb-6">
          Published on - {publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}
        </div>

        {cover_image?.[0]?.url && (
          <Image
            src={
              cover_image[0].url.startsWith("http")
                ? cover_image[0].url
                : `${process.env.NEXT_PUBLIC_API_URL}${cover_image[0].url}`
            }
            alt={Title}
            height={300}
            width={800}
            className="w-full h-auto object-cover rounded-lg mb-8"
            unoptimized
          />
        )}

        <article className="custom-prose mx-auto py-10">
          <ReactMarkdown>{blog_content}</ReactMarkdown>
        </article>
      </div>
    </>
  );
}
