"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { deleteRow, addRow } from "../store/tableSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// 👇 Imports
import ManageColumnsModal from "../components/ManageColumnsModal";
import ImportExportButtons from "../components/ImportExportButtons";
import InlineEditRow from "../components/InlineEditRow";
import { useState } from "react";

export default function Home() {
  const { data, visibleColumns } = useSelector((state: RootState) => state.table);
  const dispatch = useDispatch();

  const [editRowId, setEditRowId] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const handleSave = (updatedRow: any) => {
    // Replace the old row with the updated one
    dispatch(deleteRow(updatedRow.id));
    dispatch(addRow(updatedRow));
    setEditRowId(null);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteRow(id));
    setConfirmDeleteId(null);
  };

  return (
    <Box>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontWeight: 600,
        }}
      >
        📊 Dynamic Data Table
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
        <ManageColumnsModal />
        <ImportExportButtons />
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {visibleColumns.includes("name") && <TableCell>Name</TableCell>}
              {visibleColumns.includes("email") && <TableCell>Email</TableCell>}
              {visibleColumns.includes("age") && <TableCell>Age</TableCell>}
              {visibleColumns.includes("role") && <TableCell>Role</TableCell>}
              {visibleColumns.includes("department") && <TableCell>Department</TableCell>}
              {visibleColumns.includes("location") && <TableCell>Location</TableCell>}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) =>
              editRowId === row.id ? (
                <InlineEditRow
                  key={row.id}
                  row={row}
                  visibleColumns={visibleColumns}
                  onCancel={() => setEditRowId(null)}
                  onSave={handleSave}
                />
              ) : (
                <TableRow key={row.id} onDoubleClick={() => setEditRowId(row.id)}>
                  {visibleColumns.includes("name") && <TableCell>{row.name}</TableCell>}
                  {visibleColumns.includes("email") && <TableCell>{row.email}</TableCell>}
                  {visibleColumns.includes("age") && <TableCell>{row.age}</TableCell>}
                  {visibleColumns.includes("role") && <TableCell>{row.role}</TableCell>}
                  {visibleColumns.includes("department") && (
                    <TableCell>{(row as any).department || "-"}</TableCell>
                  )}
                  {visibleColumns.includes("location") && (
                    <TableCell>{(row as any).location || "-"}</TableCell>
                  )}
                  <TableCell>
                    <IconButton color="primary" onClick={() => setEditRowId(row.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => setConfirmDeleteId(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!confirmDeleteId} onClose={() => setConfirmDeleteId(null)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this row? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDeleteId(null)}>Cancel</Button>
          <Button color="error" onClick={() => handleDelete(confirmDeleteId!)}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
