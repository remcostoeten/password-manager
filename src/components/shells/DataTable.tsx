import React, { ReactNode } from 'react';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui';

type DataRow = {
  [key: string]: string | ReactNode;
};

type DataTableProps = {
  columns: string[];
  data: DataRow[];
};


function DataTable({ columns, data }: DataTableProps) {
  if (!data || data.length === 0) {
    return <p>No passwords found yet.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column}>{column}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => (
              <TableCell key={`${rowIndex}-${cellIndex}`}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;