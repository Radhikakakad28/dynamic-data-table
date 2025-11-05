# 📊 Dynamic Data Table Manager  
**Surefy Technologies Internship Assignment — Built by Radhika Kakad**

A modern, responsive data table application built using **Next.js**, **TypeScript**, **Redux Toolkit**, and **Material UI**.  
It allows users to dynamically manage columns, edit rows inline, import/export data via CSV, and switch between dark/light themes — all in a sleek UI.

---

## 🚀 **Live Preview**
You can run the project locally using the steps below 👇  

```bash
git clone https://github.com/Radhikakakad28/dynamic-data-table.git
cd dynamic-data-table
npm install
npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

🧠 Features

✅ Dynamic column management (show/hide or add new columns)
✅ Inline row editing (name, email, age, department, etc.)
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

CSV import merges data; export downloads current table view.

UI supports both dark/light mode toggling for accessibility.

👩‍💻 Author

Radhika Kakad
📧 radhikakakad03@gmail.com

💼 GitHub Profile

🏁 Acknowledgment

This project was developed as part of the Frontend Internship Assignment for
Surefy Technologies Pvt. Ltd. (Submission Date: 5th Nov 2025)


---

### ✅ Final Steps Before Submission

1. Copy the above content → paste into your **`README.md`** file.  
2. Save it.  
3. Run these commands in VS Code terminal:  
   ```bash
   git add README.md
   git commit -m "Added professional README for internship submission"
   git push
