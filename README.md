# 📊 Dynamic Data Table Manager  
**Surefy Technologies Internship Assignment — Built by Radhika Kakad**

A modern, responsive data table application built using **Next.js**, **TypeScript**, **Redux Toolkit**, and **Material UI**.  
It allows users to dynamically manage columns, edit rows inline, import/export data via CSV, and switch between dark/light themes — all in a sleek UI.

---

## 🚀 **Run the Project Locally**

### Clone the repository
```bash
git clone https://github.com/Radhikakakad28/dynamic-data-table.git
cd dynamic-data-table
npm install
npm run dev
Then open your browser and visit:
👉 http://localhost:3000


---

✅ When you view your README on **GitHub**,  
`http://localhost:3000` will appear **blue and clickable** (like a real link).


🧠 Features
✅ Dynamic column management (show/hide or add new columns)
✅ Inline row editing (Name, Email, Age, Department, etc.)
✅ CSV import & export using PapaParse + FileSaver.js
✅ Delete confirmation dialog with Material UI
✅ Dark/Light theme toggle
✅ Fully responsive layout
✅ State management using Redux Toolkit
✅ TypeScript-based clean, modular architecture

🧰 Tech Stack
Layer	Tools Used
Frontend	Next.js 16 (React 19 + TypeScript)
UI Library	Material UI (MUI v6)
State Management	Redux Toolkit
CSV Handling	PapaParse, FileSaver.js
Icons	Lucide React
Styling	Tailwind CSS + MUI Themes

🖼️ Screenshots
🔹 Light Mode

🔹 Dark Mode

🧩 Folder Structure
pgsql
Copy code
dynamic-data-table/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│
├── components/
│   ├── InlineEditRow.tsx
│   ├── ManageColumnsModal.tsx
│   ├── ImportExportButtons.tsx
│
├── store/
│   ├── index.ts
│   ├── tableSlice.ts
│
├── public/
│   ├── icons, svg files
│
├── package.json
├── tsconfig.json
├── README.md
💡 How It Works
The table is powered by Redux state — all data and column visibility are stored in a slice.

Users can add, edit, or delete rows dynamically.

CSV import merges data and export downloads the current visible table view.

UI supports dark/light theme toggling for accessibility.

👩‍💻 Author
Radhika Kakad
📧 radhikakakad03@gmail.com
💼 GitHub Profile

🏁 Acknowledgment
This project was developed as part of the Frontend Internship Assignment for
Surefy Technologies Pvt. Ltd. (Submission Date: 5th November 2025)

yaml
Copy code

---

### 💯 Why This Is Better

✅ Clean and readable markdown formatting  
✅ Removed default Next.js template text  
✅ Keeps focus on your project (not framework docs)  
✅ Perfectly professional for internship submission  

---

Now just run:
```bash
git add README.md
git commit -m "Updated polished README for internship submission"
git push
