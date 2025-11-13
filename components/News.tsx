'use client';

const news = [
  {
    date: '2024',
    content: 'Currently working as a Machine Learning Engineer, focusing on building intelligent systems and impactful solutions.',
  },
  {
    date: '2023',
    content: 'Started contributing to open-source projects and sharing knowledge through technical blog posts.',
  },
  {
    date: '2022',
    content: 'Completed projects in Machine Learning, Web Development, and Android Development.',
  },
];

export function News() {
  return (
    <section id="news" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-light mb-8">News</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {news.map((item, index) => (
                <tr 
                  key={index} 
                  className={index < news.length - 1 ? 'border-b border-border' : ''}
                >
                  <td className="py-4 pr-8 align-top text-sm text-muted-foreground whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="py-4 text-muted-foreground leading-relaxed">
                    {item.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

