'use client';

import { CSSProperties } from 'react';

import { TreeNode } from './SearchSubNavbar';

export default function NavbarButton({ node, style }: { node: TreeNode; style: CSSProperties }) {
  return (
    <button
      onClick={() => scrollToSection(`nav_${node.name}`)}
      className={`block text-left text-sm ${
        node.bold ? 'font-bold text-main-orange' : 'text-neutral-700'
      } ${node.size === undefined || node.size === 0 ? 'pointer-events-none' : ''}`}
      style={style}
    >
      {node.name}
      {node.size !== undefined && `(${node.size})`}
    </button>
  );
}

const scrollToSection = (id: string) => {
  const target = document.getElementById(id.replace(' ', '_'));
  if (target === null) return;

  const pos = target.getBoundingClientRect();
  window.scrollTo({ top: pos.top + window.scrollY - 100, behavior: 'smooth' });
};
