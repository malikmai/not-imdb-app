const DeleteConfirmation = ({ selectedMovie, handleDeleteMovie, setView }) => {
    return (
        <div>
            <h2>Are you sure you want to delete "{selectedMovie.title}"?</h2>
            <button onClick={() => handleDeleteMovie(selectedMovie._id)}>Delete</button>
            <button onClick={() => setView('details')}>Cancel</button>
        </div>
    );
};

export default DeleteConfirmation;