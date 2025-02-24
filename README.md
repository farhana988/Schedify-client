
# Schedify (Task Management Application)

This is a Task Management Application built with a clean and minimalistic UI where users can manage their tasks. Tasks are categorized into three sections: To-Do, In Progress, and Done. Users can add, edit, delete, and reorder tasks with a drag-and-drop interface. The application is fully responsive and stores tasks in a MongoDB database for persistent data. Real-time updates are handled via Firebase Authentication for user sign-ins and instant synchronization of tasks.


 <img src="https://i.ibb.co/twc5ChgT/schedify.jpg" alt="schedify Screenshot" style="width: 100%; max-width: 800px;"/>


- **Live URL:**  https://schedify-594f9.web.app


## 🛠️ Main Technologies

- **Frontend**: React.js
- **Backend**: Firebase (for authentication) , MongoDb (for database)
- **Libraries/Packages**:
  - **react-beautiful-dnd** –  A drag-and-drop library for React.
  - **axios** – For making HTTP requests
  - **react-icons** – For using vector icons in the UI
  - **sweetalert2** – For showing beautiful and customizable alerts



## 📦 Dependencies
Here’s a list of key npm packages that have been used in the project:

- **@stripe/react-stripe-js**: React library for integrating Stripe payments.
- **@tanstack/react-query**: Data fetching and caching library for React.
- **@tanstack/react-table**: Headless table library for building flexible and powerful tables.
- **axios**: Promise-based HTTP client for the browser and Node.js.
- **formik**: React form library for handling form submission and validation.
- **react-icons**: Popular icons for React applications.
- **sweetalert2**: A library for beautiful, responsive, customizable popups.

## 🚀 How to Run the Project Locally

Follow these steps to run this project on your local machine:

1. **Clone the repository**:
 ```bash
 git clone https://github.com/farhana988/Schedify-client.git
 ```

2. **Install dependencies:** First, make sure you have Node.js installed. Then, run the following command to install all the necessary dependencies:
 ```bash
npm install
 ```
 
3. **Set up Firebase Authentication:** 
  - Create a Firebase project and enable Google Authentication.
  - Download the Firebase config file and add it to the project.
  - Add the Firebase config to the appropriate section in the code.
  - Set up environment variables for Firebase and other configurations: Create a .env file in the root of the project and add the following:

 ```bash
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id

 ```

4. **Start the application:** Now you can start the application by running:

 ```bash
npm run dev
 ```
