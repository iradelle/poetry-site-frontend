import { useEffect, useState } from "react";
import axios from "axios";
import PoemCard from "../components/PoemCard";
import { useNavigate } from "react-router-dom";

interface Poem {
    id: number;
    title: string;
    content: string;
    // Optionally, add `createdAt` or `updatedAt` if available
}

const Poem = () => {
    const [poems, setPoems] = useState<Poem[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    const url = "http://localhost:3000/poem";
    const navigate = useNavigate();

    const loadPoems = async () => {
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });

            if (res.status === 200) {
                const sortedPoems = res.data.sort((a: Poem, b: Poem) => b.id - a.id); // Sort poems by ID in descending order
                setPoems(sortedPoems);
            }
        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                setErrorMessage(e.response.data.message);
            }
        }
    }

    const addPoem = () => {
        navigate("/addPoem");
    }

    useEffect(() => {
        loadPoems();
    }, []);

    const removePoem = async (id: number) => {
        const url = `http://localhost:3000/poem/${id}`;

        try {
            const res = await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });

            if (res.status === 200) {
                setPoems(poems.filter(poem => poem.id !== id));
            }
        } catch (e) {
            console.error(e);
            setErrorMessage("Error deleting poem!");
        }
    }

    const editPoem = (id: number) => {
        const url = `/editPoem/${id}`;
        navigate(url);
    }

    return (
        <>
            <div className="browse-poems-container">
                <button className="btn btn-bd-primary m-3 fixed-add-poem-button" onClick={addPoem}>Add Poem</button>
                <div className="album py-5 bg-body-tertiary">
                    <div className="scrollable-poems-container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                poems.map((sub, i) => {
                                    return <PoemCard key={i} data={sub} onRemove={removePoem} onEdit={editPoem}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Poem;
