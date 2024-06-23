'use client';

import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { PasswordFormData } from '../../core/models/validationSchema';
import { PasswordForm } from '../password-manager/NewEntryForm';
import { Button } from '../ui';

interface AddPasswordDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: PasswordFormData) => void;
}

const AddPasswordDialog: React.FC<AddPasswordDialogProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const handleNewEntry = (data: PasswordFormData) => {
    onSave(data);
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button className="w-max justify-end" onClick={onClose}>
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Password</DialogTitle>
        </DialogHeader>
        <PasswordForm onSave={handleNewEntry} />
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPasswordDialog;
