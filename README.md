<<<<<<< HEAD
# FitLife Tracker

FitLife Tracker is a beginner-friendly fitness tracking application built with **Next.js (App Router)** and **Tailwind CSS**. It relies on local state (localStorage) and mock data, making it a perfect starting point for learning Next.js without the complexity of a backend.

## 🚀 Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Open in Browser:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```
fitlife-tracker/
├── app/                  # Next.js App Router Pages
│   ├── dashboard/        # Dashboard modules (goals, diet, exercises)
│   ├── login/            # Login Page
│   ├── profile-setup/    # Initial profile setup form
│   ├── signup/           # Signup Page
│   ├── layout.js         # Main layout
│   └── page.js           # Landing page
├── components/           # Reusable UI Components
│   ├── Button.js
│   ├── Card.js
│   ├── Input.js
│   ├── Navbar.js
│   └── Sidebar.js
├── data/                 # Mock Data (JSON-like objects)
│   └── mockData.js       # Exercises, Diet data
├── styles/               # Global Styles
│   └── globals.css
├── utils/                # Helper Functions
│   └── calculations.js   # BMI, BMR, Calorie logic
└── public/               # Static assets
```

## 🛠 Features

-   **Authentication Flow**: Mock Login/Signup with redirection.
-   **Profile Setup**: Collects body stats and fitness goals.
-   **Dashboard**: Shows BMI, Weight, and Daily Calorie Requirement dynamically calculated.
-   **Modules**:
    -   **Goals**: Daily checklist for habits.
    -   **Exercises**: Recommendations based on body type and goal.
    -   **Diet**: Simple list of food and calorie values.

## 💡 How to Extend This Project

Here are some ideas for taking this project further:

1.  **Add a Real Backend**: Replace `localStorage` and `mockData.js` with a database like **MongoDB** or **Firebase**.
2.  **State Management**: Use **Context API** or **Zustand** to manage user state globally across components.
3.  **Better UI/UX**: Add charts using `recharts` or `chart.js` to visualize weight progress over time.
4.  **Auth Integration**: Use **NextAuth.js** for real Google/GitHub sign-in.
5.  **Mobile Responsive**: Enhance the mobile view of the dashboard sidebar (currently hidden on small screens).

## 📝 License

This project is open-source and available for educational purposes.
=======
# Fitlife_Website
more about fitness
>>>>>>> 31a879b736184ecd5fd6e96ec326aac6935f9b72
