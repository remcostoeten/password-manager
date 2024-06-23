import React from 'react';
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
import { DeleteIcon, EditIcon } from 'lucide-react';

type DataTableProps = {
  vaultItems: PasswordFormData[];
  onDelete: (item: PasswordFormData) => void;
  onEdit: (item: PasswordFormData) => void;
};

const DataTable: React.FC<DataTableProps> = ({
  vaultItems,
  onDelete,
  onEdit,
}) => {
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
        {vaultItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.website}</TableCell>
            <TableCell>{item.username}</TableCell>
            <TableCell>{item.password}</TableCell>
            <TableCell>
              <Button size="icon" variant="ghost" onClick={() => onEdit(item)}>
                <EditIcon />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => onDelete(item)}
              >
                <DeleteIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
