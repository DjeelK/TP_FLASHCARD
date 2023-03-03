import { configureStore } from "@reduxjs/toolkit";
import flashcardSlice from "./routes/flashcards/flashcardSlice";

const store = configureStore ({
    reducer: {
        flashcards: flashcardSlice
        

    }
})

export default store
