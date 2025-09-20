import BlogPostContent from '@/features/blog/blogContent'
import { getBlog } from '@/lib/api';
import React from 'react';

type Params = { slug: string };

export default async function BlogPostPage({ params }: { params: Params }) {
  const blog = await getBlog(params.slug);

  return <BlogPostContent blog={blog} />;
}
