
# Mini CRM Dashboard

A modern and responsive **CRM (Customer Relationship Management) web application** built with **React** for the frontend and a simple backend API. Designed for managing leads, tracking their status, and converting them into customers.

# Mini CRM Dashboard

**Mini CRM** is a fully functional **Customer Relationship Management (CRM) system** built as a web application using **React** for the frontend and a backend API. It is designed to help businesses or individuals manage leads, track their status, and efficiently convert potential customers into actual clients. The project emphasizes a **modern, responsive, and user-friendly interface**, following global SaaS design standards.

---

## 🌟 Project Overview

The Mini CRM Dashboard provides an intuitive interface for managing customer leads. It allows users to:

- Add new leads with information such as **Name, Email, Source, and Status**.
- Update the status of leads (**New, Contacted, Converted**) quickly with action buttons.
- Delete leads if they are no longer relevant.
- Monitor lead statistics via **summary cards** showing:
  - Total Leads
  - New Leads
  - Converted Leads

The project focuses on **simplicity, usability, and responsive design**, making it suitable for desktop, tablet, and mobile devices.

---

## 🛠️ Technologies & Tools Used

### Frontend

- **React.js** – Component-based UI for dynamic rendering.
- **React Hooks** (`useState`, `useEffect`) – For managing component state and lifecycle.
- **React Icons (FontAwesome)** – For consistent and modern action icons (Add, Delete, Update).
- **CSS** – Fully customized styling including responsive layout, hover effects, shadows, and focus states.

### Backend (Optional / Suggested)

- **Node.js & Express.js** – For creating RESTful API endpoints to manage leads.
- **JSON or Database (MongoDB / Oracle / PostgreSQL)** – To store lead data.
- **Fetch API** – For communicating between the React frontend and backend.

### Project Management & Version Control

- **Git** – Version control system.
- **GitHub** – Repository hosting and collaboration platform.

---

## 🎨 Design & User Interface

The Mini CRM dashboard was designed to follow modern SaaS standards with a clean and professional look:

### Layout

- **Header** – Displays project title with subtle text shadow.
- **Dashboard Cards** – Show important metrics at a glance.
- **Form Section** – For adding new leads.
- **Table Section** – Displays all leads with actions for update and deletion.

### Features

- **Responsive Design** – Fully adapts to desktops, tablets, and mobile devices.
- **Hover & Focus Effects** – Smooth transitions for buttons, table rows, and input fields.
- **Color Scheme** – Blue primary color (`#2563EB`), neutral background (`#f3f6fd`), dark text (`#111827`), providing clarity and professionalism.
- **Typography** – Uses `Segoe UI` and `Roboto` for readability and modern aesthetics.

### Actions

- **Add Lead** – Fill the form and submit.
- **Update Status** – Use buttons to mark a lead as Contacted or Converted.
- **Delete Lead** – Remove unnecessary or duplicate leads.

---

## 📂 Project Structure

A well-organized structure for maintainability and scalability:



## 📂 Project Structure

```
mini-crm/
├─ backend/ # Backend API code (Node.js / Express)
│ ├─ routes/ # API routes for CRUD operations
│ ├─ models/ # Data models (optional for DB integration)
│ └─ server.js # Entry point for backend
├─ frontend/ # React frontend
│ ├─ public/ # Static files
│ ├─ src/
│ │ ├─ components/ # React components (Dashboard, LeadList, etc.)
│ │ ├─ services/ # API services for fetching/updating leads
│ │ └─ index.js # React entry point
│ └─ package.json
├─ .gitignore # Ignore node_modules and sensitive files
└─ README.md # Project documentation
```

---

## ⚡ Features in Detail

1. **Lead Management**

- Add leads with name, email, source, and status.
- Update lead status directly from the table.
- Delete leads permanently.
- Filter leads by status (`New`, `Contacted`, `Converted`).

2. **Dashboard Analytics**

- Cards showing:
  - Total leads
  - New leads
  - Converted leads
- Quick visual insights without going through the table.

3. **Responsive & Modern UI**

- Designed with **CSS Flexbox** for dynamic layouts.
- Smooth **hover effects** for table rows, cards, and buttons.
- Focus effects for better form usability.

4. **Error Handling & UX**

- Fetch requests include basic error handling to alert the user in case of network issues.
- Form validation ensures proper data input before submission.
- Buttons have confirmation for critical actions (like deletion).

---

## 🚀 Installation & Running Locally

```
cd frontend
npm install
npm start
```
---------
```
cd ../backend
npm install
node server.js
```
---
---

## 👤 Author

**Ziad Madin** – Developer of Mini CRM Dashboard.  

You can reach me at:  
- Email: ziadmadin842@gmail.com  
- GitHub: [Ziad_Madin](https://github.com/Ziad-Madin-132)  
- LinkedIn: [Ziad_Madin](https://www.linkedin.com/in/ziad-madin-a70305392/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bb8wqd%2BpeQnGEMewfrTp8rQ%3D%3D)



