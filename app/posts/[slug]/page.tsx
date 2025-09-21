import { getAllPostSlugs, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <article>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{postData.title}</h1>
        <p style={{ color: '#888', marginBottom: '1rem' }}>
          {postData.date} | {postData.category}
        </p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </main>
  );
}
