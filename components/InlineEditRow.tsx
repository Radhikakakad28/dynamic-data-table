"use client";
import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  TextField,
  IconButton,
} from "@mui/material";
import { Save, Cancel } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addRow, deleteRow } from "../store/tableSlice";

interface Props {
  row: any;
  visibleColumns: string[];
  onCancel: () => void;
  onSave: (updated: any) => void;
}

export default function InlineEditRow({ row, visibleColumns, onCancel, onSave }: Props) {
  const [editData, setEditData] = useState(row);

  const handleChange = (field: string, value: string) => {
    setEditData({ ...editData, [field]: value });
  };

  const handleSave = () => {
    // Basic validation
    if (isNaN(Number(editData.age))) {
      alert("⚠️ Age must be a number.");
      return;
    }
    onSave(editData);
  };

  return (
    <TableRow>
      {visibleColumns.includes("name") && (
        <TableCell>
          <TextField
            size="small"
            value={editData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </TableCell>
      )}
      {visibleColumns.includes("email") && (
        <TableCell>
          <TextField
            size="small"
            value={editData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </TableCell>
      )}
      {visibleColumns.includes("age") && (
        <TableCell>
          <TextField
            size="small"
            value={editData.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
        </TableCell>
      )}
      {visibleColumns.includes("role") && (
        <TableCell>
          <TextField
            size="small"
            value={editData.role}
            onChange={(e) => handleChange("role", e.target.value)}
          />
        </TableCell>
      )}
      {visibleColumns.includes("department") && (
        <TableCell>
          <TextField
            size="small"
            value={editData.department || ""}
            onChange={(e) => handleChange("department", e.target.value)}
          />
        </TableCell>
      )}
      {visibleColumns.includes("location") && (
        <TableCell>
          <TextField
            size="small"
            value={editData.location || ""}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </TableCell>
      )}
      <TableCell>
        <IconButton color="success" onClick={handleSave}>
          <Save />
        </IconButton>
        <IconButton color="error" onClick={onCancel}>
          <Cancel />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
