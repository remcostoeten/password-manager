"use client";

import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { PasswordFormData } from "../../core/models/validationSchema";
import { Button } from "../ui";
import { EyeIcon, HideIcon, TrashIcon } from "../icons";

type DataTableProps = {
  vaultItems: PasswordFormData[];
  onDelete: (item: PasswordFormData) => void;
  clients: { name: string; color: string }[];
};

function DataTable({ vaultItems, onDelete, clients }: DataTableProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getClientColor = (clientName: string) => {
    const client = clients.find((client) => client.name === clientName);
    return client ? client.color : "#000";
  };

  if (vaultItems.length === 0) {
    return <p className="py-4 text-center">No items in the vault 🕵️‍♂️</p>;
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
            <TableRow
              key={index}
              style={{
                borderLeft: `3px solid ${getClientColor(item.client || "")}`,
              }}
            >
              <TableCell>{item.website}</TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell className="flex items-center">
                {isPasswordVisible ? item.password : "********"}
                <Button
                  size="icon"
                  variant="ghost"
                  className="ml-2"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <HideIcon /> : <EyeIcon />}
                </Button>
              </TableCell>
              <TableCell className="min-w[">
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
