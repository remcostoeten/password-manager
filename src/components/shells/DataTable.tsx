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

type DataTableProps = {
  vaultItems: PasswordFormData[];
};

const DataTable: React.FC<DataTableProps> = ({ vaultItems }) => {
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
              <button>Delete</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
