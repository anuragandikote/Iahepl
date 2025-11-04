import BlogPostContent from '@/features/blog/blogContent'
import { getBlog } from '@/lib/api';
import React from 'react';

type Params = Promise<{ slug: string }>;

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  console.log({ blog });

  return <BlogPostContent blog={blog} />;
}