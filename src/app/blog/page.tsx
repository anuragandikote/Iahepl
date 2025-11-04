import React from "react";
import { fetchBlogs } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1B1B] to-[#111] text-white relative overflow-hidden">
      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 md:px-10 py-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-oswald text-center font-bold text-[#D6CDA4] tracking-widest mb-16 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          OPERATION KNOWLEDGE BASE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((post: any) => (
            <Link key={post.id} href={`/blog/${post.Slug}`}>
              <div className="relative group rounded-3xl overflow-hidden bg-[#2D2D2D]/80 border border-[#D6CDA4]/20 shadow-[0_0_30px_rgba(214,205,164,0.05)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(214,205,164,0.15)] hover:-translate-y-2 hover:border-[#D6CDA4]/40">
                
                {/* Neon Edge */}
                <div className="absolute inset-0 before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-transparent before:bg-[linear-gradient(90deg,#870D07,transparent,transparent,#D6CDA4)] before:bg-[length:200%_200%] before:animate-[borderFlow_5s_linear_infinite]" />

                {/* Cover Image */}
                {post.cover_image?.[0]?.url && (
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={
                        post.cover_image[0].url.startsWith("http")
                          ? post.cover_image[0].url
                          : `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.cover_image[0].url}`
                      }
                      alt={post.Title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-[1.15]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 via-transparent to-transparent"></div>
                  </div>
                )}

                {/* Rank Badge */}
                <div className="absolute top-4 left-4 z-10 bg-[#870D07] px-3 py-1 rounded-md uppercase text-xs font-bold tracking-wide shadow-md border border-[#D6CDA4]/30">
                  {post.category || "MISSION FILE"}
                </div>

                {/* Blog Content */}
                <div className="p-6 flex flex-col space-y-4 relative z-10 mt-6">
                  <h3 className="text-2xl font-bold font-oswald text-[#D6CDA4] group-hover:text-white transition-colors">
                    {post.Title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {post.description || post.blog_content?.substring(0, 120) + "..."}
                  </p>

                  {/* Footer Meta */}
                  <div className="mt-auto flex justify-between items-center text-xs text-gray-400">
                    <span className="italic">
                      {post.publishedAt && (
                        <span>{new Date(post.publishedAt).toISOString().split("T")[0]}</span>
                      )}
                    </span>
                    <span className="text-[#D6CDA4] font-semibold tracking-wide group-hover:text-white">
                      Read Mission →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
