import React, { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="dark bg-background text-foreground min-h-screen flex flex-col">
      {children}
    </main>
  );
}
