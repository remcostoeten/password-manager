'use client';

import { useState } from 'react';
import { useLocalStorage } from '@/core/hooks/useLocalStorage';
import { PasswordFormData } from '@/core/models/validationSchema';
import AddNewDialog from '@/components/shells/AddNewDialog';
import DataTable from '@/components/shells/DataTable';
import { toast } from 'sonner';

export default function VaultManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [vault, setVault] = useLocalStorage<PasswordFormData[]>(
    'vaultEntries',
    [],
  );

  const handleNewEntry = (data: PasswordFormData) => {
    setVault((prevVault) => [...prevVault, data]);
    setIsOpen(false);
  };

  const handleDelete = (item: PasswordFormData) => {
    setVault((prevVault) => prevVault.filter((x) => x !== item));
  };

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex my-8 justify-end w-full">
        <AddNewDialog
          isOpen={isOpen}
          onClose={toggleDialog}
          onSave={handleNewEntry}
        />
      </div>
      <DataTable vaultItems={vault} onDelete={handleDelete} />
    </>
  );
}
