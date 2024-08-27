import {SyntheticEvent, useEffect, useState} from "react";
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";

const PoemEdit = () => {

    // pridobimo id iz url-ja
    const {id} = useParams<{id: string}>();

    const[poemTitle, setPoemTitle] = useState("");
    const[poemContent, setPoemContent] = useState("");

    //const url = "http://localhost:3000/subs";
    const [redirect, setRedirect] = useState(false);
    const[errorMessage, setErrorMessage] = useState("");

    const getPoem = async () => {
        const url = `http://localhost:3000/poem/${id}`;

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            if (res.status === 200) {
                setPoemTitle(res.data.title);
                setPoemContent(res.data.content);
            }
        } catch (e) {
            setErrorMessage("Napaka pri dostopu!");
        }

    }

    useEffect(() => {
        getPoem();
    }, [id]);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(poemTitle);
        console.log(poemContent);

        const url = `http://localhost:3000/poem/${id}`;

        const data = {
            title: poemTitle,
            content: poemContent,
        }

        try {
            // vzame jwt userja iz local storage-a, da lahk shranimo, ker user je naredil poem
            const jwt = localStorage.getItem("jwt");
            const res = await axios.patch(url, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            if (res.status === 200) {
                setRedirect(true);
            }
        } catch (e) {
            if(axios.isAxiosError(e) && e.response) {
                setErrorMessage(e.response.data.message);
            }
        }
    }
    if (redirect) {
        return <Navigate to="/poem" />;
    }
    return (
        <>
            <div className="browse-poems-container">
                <div className="card shadow-lg p-4 form-card m-3" style={{maxWidth: '700px', width: '100%'}}>
                    <h1 className="form-header">Edit your poem:</h1>
                    <form onSubmit={submit}>
                        <div className="form-group txt-dark m-10">
                            <label htmlFor="title">Title</label>
                            <textarea
                                id="title"
                                className="input-field-title"
                                name="title"
                                rows={3}
                                value={poemTitle}
                                onChange={(e) => setPoemTitle(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="form-group txt-dark m-10">
                            <label htmlFor="content">Verses</label>
                            <textarea
                                id="content"
                                className="input-field-verses"
                                name="content"
                                rows={10}
                                value={poemContent}
                                onChange={(e) => setPoemContent(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button m-10">
                            Save
                        </button>
                        {errorMessage && (
                            <div className="alert alert-danger mt-3">{errorMessage}</div>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
export default PoemEdit;