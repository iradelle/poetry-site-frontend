// Assuming the Poem interface is defined elsewhere in your project
interface Poem {
    id: number;
    title: string;
    content: string;
}

const PoemCard = ({ data, onRemove, onEdit }: { data: Poem, onRemove: (id: number) => void, onEdit: (id: number) => void }) => {
    return (
        <div className="col">
            <div className="poem-card shadow-sm my-50">
                <div className="card-body txt-dark">
                    <h1 className="m-10 poem-title">{data.title}</h1>
                    <pre className="card-text m-10 poem-content">{data.content}</pre>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button onClick={() => onEdit(data.id)} type="button" className="btn btn-sm btn-outline-secondary m-3">Edit</button>
                            <button onClick={() => onRemove(data.id)} type="button" className="btn btn-sm btn-outline-secondary m-3">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PoemCard;
