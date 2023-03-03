import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import FlashcardForm from "./routes/flashcards/FlashcardForm.jsx";
import FlashcardformrandomForm from "./routes/flashcardsrandom/FlashcardformrandomForm";
import HomePage from "./routes/HomePage";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <HomePage />
        },
        {
            path:"/addflashcard",
            element: <FlashcardForm/>
        },
        {
            path:"/randomflashcard",
            element:<FlashcardformrandomForm/>
        },
        
        



    ]
    }

])

export default router