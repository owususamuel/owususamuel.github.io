'use client';

import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden border border-border">
              <Image
                src="/images/profilepic.jpg"
                alt="Samuel Owusu"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Name and Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-light mb-2">Samuel Owusu</h1>
              <p className="text-base text-muted-foreground mb-2">
                Machine Learning Engineer & Software Developer
              </p>
              <a 
                href="mailto:owusu.oben@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
              >
                owusu.oben@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/Samuel_Owusu_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors flex items-center gap-1"
              >
                <FileText className="h-4 w-4" />
                CV
              </a>
              <a
                href="https://github.com/owususamuel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors flex items-center gap-1"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/owususamuel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors flex items-center gap-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://x.com/owusu_rg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors flex items-center gap-1"
                aria-label="X"
              >
                <Twitter className="h-4 w-4" />
                X
              </a>
              <a
                href="mailto:owusu.oben@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors flex items-center gap-1"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
