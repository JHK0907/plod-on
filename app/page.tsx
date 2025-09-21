import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
        JHK0907의 포트폴리오 블로그
      </h1>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>프로젝트 목록</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {allPostsData.map(({ slug, date, title, description, category }) => (
            <li key={slug} style={{ marginBottom: '2rem', border: '1px solid #333', padding: '1.5rem', borderRadius: '8px' }}>
              <Link href={`/posts/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#0070f3' }}>
                  {title}
                </h3>
                <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  {date} | {category}
                </p>
                <p style={{ color: '#ccc' }}>{description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
