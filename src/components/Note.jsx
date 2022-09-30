

function Note(props) {
    return (
        <div className="Note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button>Delete!</button>
        </div>
    );
}

export default Note;