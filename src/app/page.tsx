import Header from '@/components/shells/Header';
import PageWrapper from '@/components/shells/PageWrapper';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import {
  PlusIcon,
  GlobeIcon,
  EyeIcon,
  FilePenIcon,
  TrashIcon,
} from 'lucide-react';

export default function Component() {
  return (
    <>
      <main className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Saved Passwords</h2>
          <Button>
            <PlusIcon className="w-5 h-5 mr-2" />
            {/* THIS SHOULD BE A DIALOG */}
            Add Password
            {/* THIS SHOULD BE A DIALOG */}
          </Button>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Website</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Password</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <GlobeIcon className="w-5 h-5" />
                    <span>example.com</span>
                  </div>
                </TableCell>
                <TableCell>johndoe</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>********</span>
                    <Button variant="ghost" size="icon">
                      <EyeIcon className="w-5 h-5" />
                      <span className="sr-only">Show password</span>
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <GlobeIcon className="w-5 h-5" />
                    <span>github.com</span>
                  </div>
                </TableCell>
                <TableCell>janedoe</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>********</span>
                    <Button variant="ghost" size="icon">
                      <EyeIcon className="w-5 h-5" />
                      <span className="sr-only">Show password</span>
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
}
