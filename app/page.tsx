import { Loom } from '@/components/Loom';
import { CopyEmail } from '@/components/CopyEmail';

const links = [
  { label: 'CV', href: '/Samuel_Owusu_CV.pdf', text: 'Samuel_Owusu_CV.pdf' },
  { label: 'GitHub', href: 'https://github.com/owususamuel', text: 'owususamuel' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/owususamuel', text: 'owususamuel' },
  { label: 'X', href: 'https://x.com/owusu_rg', text: '@owusu_rg' },
];

export default function Home() {
  return (
    <div className="page">
      <Loom />

      <main className="intro">
        <h1 className="name">Samuel Owusu</h1>
        <div className="about">
          <p className="lede">
            Machine learning engineer and software developer. I work on speech, language and AI agents,
            and build the products that put them to use.
          </p>
          <dl className="contact">
            <div className="row">
              <dt>Email</dt>
              <dd>
                <CopyEmail address="owusu.oben@gmail.com" />
              </dd>
            </div>
            {links.map((link) => (
              <div className="row" key={link.label}>
                <dt>{link.label}</dt>
                <dd>
                  <a href={link.href} target="_blank" rel="noopener">
                    {link.text}
                    <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>

      <footer className="foot">
        <span>
          <span className="hint-pointer">Move across the threads</span>
          <span className="hint-touch">Drag across the threads</span>
        </span>
        <span>© {new Date().getFullYear()} Samuel Owusu</span>
      </footer>
    </div>
  );
}
