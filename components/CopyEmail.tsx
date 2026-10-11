'use client';

import { useEffect, useRef, useState } from 'react';

/** Email link with a copy button that falls back to selecting the address. */
export function CopyEmail({ address }: { address: string }) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const [label, setLabel] = useState('Copy');

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const flash = (text: string) => {
    setLabel(text);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setLabel('Copy'), 1800);
  };

  const selectAddress = () => {
    const el = linkRef.current;
    const selection = window.getSelection();
    if (!el || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
    flash('Selected');
  };

  const copy = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(address).then(() => flash('Copied'), selectAddress);
    } else {
      selectAddress();
    }
  };

  return (
    <>
      <a ref={linkRef} href={`mailto:${address}`}>{address}</a>
      <button type="button" className="copy" onClick={copy}>{label}</button>
    </>
  );
}
