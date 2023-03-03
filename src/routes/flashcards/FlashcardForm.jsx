
const FlashcardForm = () => {


    return (
        <>
        <form>
        <h2 className="display-6">Ajout d'une flashcard</h2>
        <hr />
        <div className="mb-3">
            <label htmlFor="question-input" className="form-label">
            Question
            </label>
            <input
            type="text"
            className="form-control"
            id="question-input"
            placeholder="Saisissez la question"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="explanation-textarea" className="form-label">
            Explication
            </label>
            <textarea
            className="form-control"
            id="explanation-textarea"
            rows="3"
            placeholder="Saisissez l'explication"
            ></textarea>
        </div>
        <button type="submit" className="btn btn-primary float-end">Envoyer</button>
        </form>
        </>
    )

}

export default FlashcardForm