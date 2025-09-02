// src/components/EmailLink.tsx
"use client";

import { useMemo, MouseEvent } from "react";

export default function EmailLink({
  user = "kevin",
  domain = "h2autowv.com",
  className = "",
  children,
}: {
  user?: string;
  domain?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const email = useMemo(() => `${user}@${domain}`, [user, domain]);

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    (e.currentTarget as HTMLAnchorElement).href = `mailto:${email}`;
  }

  return (
    <a onClick={handleClick} className={className}>
      {children ?? (
        <>
          {user}
          <span className="px-1 select-none">[at]</span>
          {domain}
        </>
      )}
    </a>
  );
}
