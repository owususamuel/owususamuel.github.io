'use client';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-light">Contact</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
          <div className="space-y-2 pt-4">
            <a 
              href="mailto:owusu.oben@gmail.com"
              className="block hover:underline hover:text-foreground transition-colors"
            >
              owusu.oben@gmail.com
            </a>
            <p>Accra, Ghana</p>
          </div>
        </div>
      </div>
    </section>
  );
}
