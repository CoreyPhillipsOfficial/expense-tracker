# Expense Tracker

A simple and intuitive expense tracking application built with React and Redux. Easily manage, search, and track your expenses with a clean and responsive user interface.

## 🚀 Features

- **Add Expenses:** Quickly add new expenses with title, amount, and category.
- **Search Expenses:** Instantly filter expenses by typing keywords.
- **Delete Expenses:** Easily remove unwanted expenses with instant notifications.
- **Persistent Storage:** Expenses are saved locally in your browser's storage.
- **Responsive UI:** User-friendly design optimized for desktop and mobile devices.
- **Notifications:** User-friendly notifications powered by React Toastify.

## 🛠️ Technologies Used

- **React** (v19.0.0)
- **Redux** (v5.0.1)
- **React Redux** (v9.2.0)
- **Redux Toolkit** (v2.6.1)
- **React Router DOM** (v7.3.0)
- **Moment.js** (v2.30.1)
- **React Modal** (v3.16.3)
- **React Toastify** (v11.0.5)
- **Testing Library** (React Testing Library, Jest DOM)
- **Local Storage** for data persistence

## 📥 Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd expense-tracker
npm install
```

### ▶️ Running the Application
```bash
npm start
```

### Start the development server:
```bash
npm start
```
The application will automatically open at http://localhost:3000.

## 🧑‍💻 Usage
Adding an Expense
- Click the "Add" button.
- Enter the expense details (title, amount, category).
- Submit the form to add the expense.

Searching Expenses
- Use the search bar at the top to filter expenses by title.
- The search is case-insensitive and updates instantly as you type.

Deleting Expenses
- Click the delete icon/button on an expense card.
- A notification will confirm successful deletion.

📂 Project Structure
- javascript

```bash
expense-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── add-form/
│   │   ├── add-form.js
│   │   └── success-modal.js
│   ├── expense-list/
│   │   ├── card.js
│   │   └── index.js
│   ├── topfold/
│   │   └── index.js
│   ├── redux/
│   │   ├── actions/
│   │   │   └── expenses.js
│   │   ├── action-types/
│   │   │   └── expenses.js
│   │   └── reducers/
│   │       └── expenses.js
│   ├── constants/
│   │   └── add-expense.js
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md
```

# 🧪 Testing
Run tests using:
```bash
npm test
```

# 🚧 Building for Production
To build the app for production, run:
```bash
npm run build 
```


# 📚 Available Scripts
In the project directory, you can run:
Start the app in development mode:

```bash
npm start
```

Opens the app at http://localhost:3000.
Automatically reloads on code changes.

```bash
npm run build
```
Builds the app for production in the build folder.
Optimizes the build for best performance.

## 📌 Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.
📄 License
This project is open-source and available under the MIT License.