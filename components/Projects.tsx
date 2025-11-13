'use client';

const projects = [
  {
    title: 'Kakraba',
    authors: 'Samuel Owusu',
    description: 'Receive anonymous messages from your friends, colleagues etc. A full-stack web application built with modern technologies including Vue.js, Express, Node.js, and MongoDB.',
    links: [
      { label: 'Demo', url: 'https://kakraba.netlify.app' },
      { label: 'Code', url: 'https://github.com/owususamuel/unChat_frontend' },
    ],
  },
  {
    title: 'Quest App',
    authors: 'Samuel Owusu',
    description: 'A mobile trivia game application built with Android Studio. Engage users with interactive questions and smooth UI, demonstrating mobile app development expertise.',
    links: [
      { label: 'Code', url: 'https://github.com/owususamuel/quest_app' },
    ],
  },
  {
    title: 'Workit',
    authors: 'Samuel Owusu',
    description: 'A markdown editor and preview application built with Vue.js. Write and preview markdown content in real-time, showcasing modern web development practices.',
    links: [
      { label: 'Demo', url: 'https://workit.netlify.app' },
      { label: 'Code', url: 'https://github.com/owususamuel/workit-app' },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-light mb-8">Projects</h2>
        <div className="space-y-8">
          {projects.map((item, index) => (
            <div key={item.title} className="space-y-2">
              <div>
                <a
                  href={item.links[0]?.url || item.links[1]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-light hover:underline text-foreground"
                >
                  {item.title}
                </a>
              </div>
              <p className="text-sm text-muted-foreground">{item.authors}</p>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-4 pt-2">
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                  >
                    [ {link.label} ]
                  </a>
                ))}
              </div>
              {index < projects.length - 1 && (
                <div className="pt-6 border-b border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

