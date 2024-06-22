import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { EyeIcon, FilePenIcon, TrashIcon } from 'lucide-react';

export const pageData: {
  website: string;
  username: string;
  password: ReactNode;
  actions: ReactNode;
}[] = [
  {
    website: 'example.com',
    username: 'johndoe',
    password: (
      <>
        '********'
        <Button className="mx-2" variant="ghost" size="icon">
          <EyeIcon className="w-5 h-5" />
          <span className="sr-only">Show password</span>
        </Button>
      </>
    ),
    actions: (
      <>
        <Button variant="ghost" size="icon">
          <FilePenIcon className="w-5 h-5" />
          <span className="sr-only">Edit</span>
        </Button>
        <Button variant="ghost" size="icon">
          <TrashIcon className="w-5 h-5" />
          <span className="sr-only">Delete</span>
        </Button>
      </>
    ),
  },
];
