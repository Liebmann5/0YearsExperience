import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

//TODO: Move this you fool!!!
const BlogPostMetaSchema = z.object ({
  title: z.string(),
  date: z.string(),
  excerpt: z.string(),
});

type BlogPostMeta = z.infer<typeof BlogPostMetaSchema>;

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export default async function Blog() {
  const filenames = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      
      const parsed = matter(fileContents);
      const data = BlogPostMetaSchema.parse(parsed.data);
      return { slug, ...data };
    })
  );

  //Sorts posts oldest->latest
  posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">0YearsExperience</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
