import { LockIcon } from 'lucide-react';
import siteConfig from '@/core/data/site-config';
import Link from 'next/link';
import InfoDialog from './InfoDialog';
import { GithubIcon } from './icons';

export default function Header() {
  return (
    <header className="bg-card py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <LockIcon className="w-6 h-6" />
        <h1 className="text-2xl font-bold">{siteConfig.title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <InfoDialog />
        <span className="sr-only">Settings</span>
        <Link href={siteConfig.repository} target="_blank">
          <GithubIcon />
          <span className="sr-only">Github</span>
        </Link>
      </div>
    </header>
  );
}
