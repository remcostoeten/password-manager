'use client';

import { useState } from 'react';
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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { PasswordFormData } from '@/core/models/validationSchema';
import { useLocalStorage } from '@/core/hooks/useLocalStorage';
import { PasswordForm } from '@/components/password-manager/NewEntryForm';
import AddPasswordDialog from '@/components/shells/AddNewDialog';

type VaultObjectProps = {
  website: string;
  username: string;
  password: string;
};

export default function Page() {
  const [vault, setVault] = useLocalStorage<VaultObjectProps[]>(
    'vaultEntries',
    [],
  );
  const [open, setOpen] = useState(false);

  const handleNewEntry = (data: PasswordFormData) => {
    setOpen(false);
    const newVaultEntries = [...vault, data];
    setVault(newVaultEntries);
  };

  return (
    <PageWrapper>
      <main className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Saved Passwords</h2>
          <AddPasswordDialog
            open={open}
            setOpen={setOpen}
            onSave={handleNewEntry}
          />
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
              {vault.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <GlobeIcon className="w-5 h-5" />
                      <span>{entry.website}</span>
                    </div>
                  </TableCell>
                  <TableCell>{entry.username}</TableCell>
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
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <div className="bg-card-foreground py-4 px-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Your passwords are securely encrypted.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Logout</Button>
          <Button>Lock</Button>
        </div>
      </div>
    </PageWrapper>
  );
}
