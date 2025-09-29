# Lab 5.2 – Team Expansion Lab 1

## 📌 Project Description
For this lab, our team worked together to build a **Multi-Counter Dashboard** in React.  
We took the code from the previous individual lab and expanded it into a **team project**.  

The goal was to practice React concepts such as:
- Functional components  
- Props  
- Lifted state  
- Lists with keys  
- Controlled forms  
- Derived UI  
- Persistence with Local Storage  

---

## 🚀 Features (What the App Can Do)
- ➕ Add counters with custom names  
- 🔼 Increment, 🔽 decrement, and 🔄 reset each counter  
- 🗑️ Delete counters  
- ➕➕ Display the **total sum** of all counters  
- 📝 Show a message **“No counters yet”** when the list is empty  
- 💾 Save counters and values even after refreshing the page  

---

## 📂 File Setup
The final project structure:

src/
├── main.jsx
├── App.jsx
├── index.css
└── components/
├── AddCounterForm.jsx
├── CounterCard.jsx
├── CounterList.jsx
└── Header.jsx

yaml
Copy code

---

## ⚙️ How to Run the Project
1. Create a new Vite project:  
   ```bash
   npm create vite@latest multi-counter -- --template react
Move into the project folder:

bash
Copy code
cd multi-counter
Install dependencies:

bash
Copy code
npm i
Run the development server:

bash
Copy code
