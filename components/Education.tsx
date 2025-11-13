'use client';

const education = [
  {
    institution: "University of Aberdeen, UK",
    degree: 'MSc Artificial Intelligence',
    period: '2025 - 2026',
  },
  {
    institution: 'Ghana Technology University',
    degree: 'BSc Information Technology (Software Engineering)',
    period: '2015 - 2019',
  }
];

export function Education() {
  return (
    <section id="education" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-light mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="space-y-1">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="text-lg font-light">{edu.institution}</h3>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
              <p className="text-muted-foreground">{edu.degree}</p>
              {index < education.length - 1 && (
                <div className="pt-6 border-b border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

