'use client';

import React, { useState } from 'react';
import {} from '@radix-ui/react-dialog';
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui';
import { EditIcon } from 'lucide-react';

type PasswordFormData = {
  id: string;
  name: string;
};

interface EditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  item: PasswordFormData | null;
  onSave: (updatedItem: PasswordFormData) => void;
}

export const EditDialog: React.FC<EditDialogProps> = ({
  isOpen,
  onClose,
  item,
  onSave,
}) => {
  const [formData, setFormData] = useState<PasswordFormData | null>(item);

  const handleSave = () => {
    if (formData) {
      onSave(formData);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger>
        <EditIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Entry</DialogTitle>
        <form onSubmit={handleSave} className="space-y-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={formData?.name}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />

          {/* Add more fields as necessary */}

          <div className="flex items-center justify-end space-x-2">
            <Button type="submit">Save</Button>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
