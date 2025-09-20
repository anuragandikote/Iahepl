import React from "react";
import { fetchBlogs } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

const BlogPage = async () => {
  const blogs = await fetchBlogs();

  return (
    <div className="container mx-auto px-6 md:px-10 py-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-gray-100 font-oswald text-center">
        Our Latest Blogs
      </h1>

      {/* Staggered Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {blogs.map((post: any) => (
          <Link key={post.id} href={`/blog/${post.Slug}`} className="group">
            <div className="relative flex flex-col overflow-hidden rounded-3xl shadow-2xl backdrop-blur-md bg-white/10 dark:bg-gray-900/40 border border-white/20 hover:border-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 hover:scale-100 hover:-translate-y-1">
              
              {/* Floating Accent Shapes */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-pink-300/30 animate-spin-slow pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-purple-300/30 animate-pulse pointer-events-none"></div>

              {/* Image */}
              {post.cover_image?.[0]?.url && (
                <div className="relative w-full h-64 md:h-56 lg:h-60">
                  <Image
                    src={
                      post.cover_image[0].url.startsWith("http")
                        ? post.cover_image[0].url
                        : `${process.env.NEXT_PUBLIC_API_URL}${post.cover_image[0].url}`
                    }
                    alt={post.Title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Text */}
              <div className="p-5 flex flex-col flex-1 relative z-10">
                {post.category && (
                  <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">
                    {post.category}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#870d07] transition-colors duration-300">
                  {post.Title}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300 line-clamp-3 text-sm md:text-base">
                  {post.description || post.blog_content || ""}
                </p>

                <div className="mt-auto flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                  {post.publishedAt && (
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  )}
                  <span className="font-semibold text-black dark:text-[#870d07] group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>

              {/* Glow Layer */}
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_rgba(255,0,255,0.1)] pointer-events-none"></div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
