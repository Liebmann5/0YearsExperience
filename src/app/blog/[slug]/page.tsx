import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import { z } from 'zod';

const BlogPostMetaSchema = z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
});

type BlogPostMeta = z.infer<typeof BlogPostMetaSchema>;

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export async function generateStaticParams() {
    const filenames = await fs.readdir(postsDirectory);
    return filenames.map((filename) => ({
        slug: filename.replace(/\.md$/, ''),
    }));
}

async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    try {
        //https://github.com/jonschlinkert/gray-matter

        const fileContents = await fs.readFile(fullPath, 'utf8');

        const parsed = matter(fileContents);
        const data = BlogPostMetaSchema.parse(parsed.data);
        const content = parsed.content as string;

        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return {
            slug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            contentHtml,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}

//export default async function BlogPost({ params }: { params: { slug: string } }) {
export default async function BlogPost({
    params,
}: {
    params: { slug: string };
}) {
    const postData = await getPostData(params.slug);
    if (!postData) {
        notFound();
    }

    return (
        <div className="font-base max-w-2xl mx-auto">
            <h1 className="text-4xl font-heading mb-4">{postData.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{postData.date}</p>
            <article
                className="prose prose-lg dark:prose-dark"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </div>
    );
}