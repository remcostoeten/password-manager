'use client';

import React, { useState } from 'react';
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  TableHead,
} from '@/components/ui/table';
import { PasswordFormData } from '../../core/models/validationSchema';
import { Button } from '../ui';
import { EyeIcon, HideIcon, TrashIcon } from '../icons';

type DataTableProps = {
  vaultItems: PasswordFormData[];
  onDelete: (item: PasswordFormData) => void;
};

function DataTable({ vaultItems, onDelete }: DataTableProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  if (vaultItems.length === 0) {
    return <p className="text-center">No items in the vault</p>;
  }

  return (
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
        {vaultItems.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{item.website}</TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell className="flex items-center">
                {isPasswordVisible ? item.password : '********'}
                <Button
                  size="icon"
                  variant="ghost"
                  className="ml-2"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <HideIcon /> : <EyeIcon />}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onDelete(item)}
                >
                  <TrashIcon />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default DataTable;
