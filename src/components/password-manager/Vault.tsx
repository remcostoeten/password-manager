'use client';

import { useState, useEffect } from 'react';
import { useLocalStorage } from '@/core/hooks/useLocalStorage';
import { PasswordFormData } from '@/core/models/validationSchema';
import AddNewDialog from '@/components/shells/AddNewDialog';
import DataTable from '@/components/shells/DataTable';
import LegendBar from '@/components/shells/LegendBar';
import { fetchData } from '@/core/server/actions';
import { toast } from 'sonner';

type Client = {
  name: string;
  color: string;
};

export default function VaultManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [vault, setVault] = useLocalStorage<PasswordFormData[]>(
    'vaultEntries',
    [],
  );
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    async function loadClients() {
      const data = await fetchData();
      setClients(data);
    }
    loadClients();
  }, []);

  const handleNewEntry = (data: PasswordFormData) => {
    setVault((prevVault) => [...prevVault, data]);
    setIsOpen(false);
    toast('Entry saved successfully to the vault!');
  };

  const handleDelete = (item: PasswordFormData) => {
    setVault((prevVault) => prevVault.filter((x) => x !== item));
    toast('Entry deleted successfully from the vault!');
  };

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex my-8 justify-end w-full">
        <AddNewDialog
          isOpen={isOpen}
          onClose={toggleDialog}
          onSave={handleNewEntry}
          clients={clients}
        />
      </div>
      {clients.length > 0 && (
        <LegendBar
          items={clients.map((client) => ({
            color: client.color,
            label: client.name,
            description: `Client: ${client.name}`,
          }))}
        />
      )}
      <DataTable vaultItems={vault} onDelete={handleDelete} clients={clients} />
    </>
  );
}
