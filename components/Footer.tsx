'use client';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Samuel Owusu</p>
          <p className="text-xs">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </footer>
  );
}
