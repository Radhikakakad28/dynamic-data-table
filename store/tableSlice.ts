import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Row {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
}

interface TableState {
  data: Row[];
  visibleColumns: string[];
}

const initialState: TableState = {
  data: [
    { id: 1, name: "Radhika Kakad", email: "radhika@example.com", age: 22, role: "Frontend Developer" },
    { id: 2, name: "Ruchira Jawale", email: "ruchira@example.com", age: 23, role: "UI Designer" },
  ],
  visibleColumns: ["name", "email", "age", "role"],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<Row>) => {
      state.data.push(action.payload);
    },
    deleteRow: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(row => row.id !== action.payload);
    },
    toggleColumn: (state, action: PayloadAction<string>) => {
      if (state.visibleColumns.includes(action.payload)) {
        state.visibleColumns = state.visibleColumns.filter(c => c !== action.payload);
      } else {
        state.visibleColumns.push(action.payload);
      }
    },
  },
});

export const { addRow, deleteRow, toggleColumn } = tableSlice.actions;
export default tableSlice.reducer;
