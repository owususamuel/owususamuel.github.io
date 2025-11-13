'use client';

const blogPosts = [
  {
    title: 'Building a Personal Portfolio with Next.js',
    date: '2024-01-15',
    description: 'A journey of creating a modern portfolio website using Next.js, TypeScript, and Tailwind CSS. Exploring frameworks and addressing challenges in web development.',
    url: '#',
  },
  {
    title: 'Machine Learning for Beginners: Getting Started with TensorFlow',
    date: '2023-12-10',
    description: 'An introduction to machine learning and how to get started with TensorFlow. Learn the basics of building your first neural network.',
    url: '#',
  },
  {
    title: 'Modern Web Development: Vue.js vs React',
    date: '2023-11-05',
    description: 'Comparing Vue.js and React for modern web development. Understanding the differences, strengths, and use cases for each framework.',
    url: '#',
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-light">Recent blog posts</h2>
          <a 
            href="#blog"
            className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            more →
          </a>
        </div>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div key={post.title} className="space-y-2">
              <div>
                <a
                  href={post.url}
                  className="text-lg font-light hover:underline text-foreground"
                >
                  {post.title}
                </a>
              </div>
              <p className="text-sm text-muted-foreground">{post.date}</p>
              <p className="text-muted-foreground leading-relaxed">{post.description}</p>
              {index < blogPosts.length - 1 && (
                <div className="pt-6 border-b border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

