"use client";
import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleColumn } from "../store/tableSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function ManageColumnsModal() {
  const dispatch = useDispatch();
  const { visibleColumns } = useSelector((state: RootState) => state.table);
  const [open, setOpen] = useState(false);
  const [newColumn, setNewColumn] = useState("");

  const allColumns = ["name", "email", "age", "role", "department", "location"];

  const handleAddColumn = () => {
    if (newColumn && !allColumns.includes(newColumn.toLowerCase())) {
      allColumns.push(newColumn.toLowerCase());
      dispatch(toggleColumn(newColumn.toLowerCase()));
      setNewColumn("");
    }
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)} sx={{ mb: 2 }}>
        Manage Columns
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h6" gutterBottom>
            Manage Columns
          </Typography>

          <FormGroup>
            {allColumns.map((col) => (
              <FormControlLabel
                key={col}
                control={
                  <Checkbox
                    checked={visibleColumns.includes(col)}
                    onChange={() => dispatch(toggleColumn(col))}
                  />
                }
                label={col.charAt(0).toUpperCase() + col.slice(1)}
              />
            ))}
          </FormGroup>

          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
            <TextField
              size="small"
              label="Add new column"
              variant="outlined"
              value={newColumn}
              onChange={(e) => setNewColumn(e.target.value)}
              fullWidth
            />
            <Button onClick={handleAddColumn} variant="contained">
              Add
            </Button>
          </Box>

          <Button
            onClick={() => setOpen(false)}
            sx={{ mt: 2 }}
            fullWidth
            variant="outlined"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
