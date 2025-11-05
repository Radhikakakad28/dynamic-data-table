"use client";
import React, { useRef } from "react";
import { Button, Stack } from "@mui/material";
import Papa from "papaparse";
import { saveAs } from "file-saver";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addRow } from "../store/tableSlice";

export default function ImportExportButtons() {
  const dispatch = useDispatch();
  const { data, visibleColumns } = useSelector((state: RootState) => state.table);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /** 📥 Import CSV */
  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rows = results.data as any[];
        rows.forEach((r, index) => {
          // Basic validation: must contain name/email/age/role
          if (r.name && r.email && r.age && r.role) {
            dispatch(
              addRow({
                id: Date.now() + index,
                name: r.name,
                email: r.email,
                age: Number(r.age),
                role: r.role,
              })
            );
          } else {
            alert("⚠️ Some rows were skipped due to missing fields.");
          }
        });
      },
      error: (err) => {
        alert("CSV parsing error: " + err.message);
      },
    });

    // Reset input so same file can be uploaded again if needed
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /** 📤 Export CSV */
  const handleExport = () => {
    const filtered = data.map((row) => {
      const filteredRow: Record<string, any> = {};
      visibleColumns.forEach((col) => {
        filteredRow[col] = (row as any)[col];
      });
      return filteredRow;
    });

    const csv = Papa.unparse(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "table_data.csv");
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => fileInputRef.current?.click()}
      >
        Import CSV
      </Button>
      <input
        type="file"
        accept=".csv"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImport}
      />

      <Button variant="outlined" color="success" onClick={handleExport}>
        Export CSV
      </Button>
    </Stack>
  );
}
