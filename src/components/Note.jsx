

function Note(props) {
    function handleClick() {
        props.deleteNote(props.id)
    }
    return (
        <div className="Note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete!</button>
        </div>
    );
}

export default Note;