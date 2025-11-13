'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : ''
    }`}>
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="text-lg font-light hover:opacity-70 transition-opacity"
          >
            Samuel Owusu
          </a>
          <div className="flex items-center gap-6">
            <a 
              href="#about"
              className="text-sm hover:underline text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              About
            </a>
            <a 
              href="#news"
              className="text-sm hover:underline text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              News
            </a>
            <a 
              href="#blog"
              className="text-sm hover:underline text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Blog
            </a>
            <a 
              href="#projects"
              className="text-sm hover:underline text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Projects
            </a>
            <a 
              href="/Samuel_Owusu_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              CV
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

