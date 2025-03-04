import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';
//import { z } from 'zod';

import MY_PROJECTS from '@/data/my-projects';

import { AspectRatio } from '@/components/ui/aspect-ratio';

//MY_PROJECTS v == both do the same thing doofus
//const projectsPreviewDirectory = path.join(process.cwd(), 'data', 'my-projects');
const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

export async function generateStaticParams() {
    return MY_PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

async function getProjectContent(slug: string) {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    try {
        const fileContents = await fs.readFile(fullPath, 'utf8');

        const parsed = matter(fileContents);

        const processedContent = await remark().use(html).process(parsed.content);

        return processedContent.toString();
    } catch (error) {
        //return notFound;
        console.log(error);
        return null;
    }
}

export default async function ProjectPost({ params, }: { params: { slug: string }; }) {
    const metaData = MY_PROJECTS.find((project) => project.slug === params.slug);
    if (!metaData) {
        notFound();
    }

    const contentHtml = await getProjectContent(params.slug);
    if (!contentHtml) {
        notFound();
    }

    return (
        <div className="font-base max-w-2xl mx-auto">
            <h1 className="text-4xl font-heading mb-4">{metaData.name}</h1>
            <div className="mb-6 flex justify-center">
                <AspectRatio
                    className="border-border dark:border-darkBorder shadow-light dark:shadow-dark !-bottom-[2px] rounded-base border-2"
                    ratio={71 / 26}
                  >
                    <img
                      className="w-full rounded-base"
                      src={`${metaData.previewImage}`}
                      alt={metaData.name}
                    />
                  </AspectRatio>
            </div>
            <p className="text-sm text-gray-500 mb-4">Last Updated: {metaData.lastUpdate}</p>
            <article
                className="prose prose-lg dark:prose-dark"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </div>
    )
}