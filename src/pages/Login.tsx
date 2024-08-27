import { SyntheticEvent, useState } from "react";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const url = "http://localhost:3000/auth/login";
    const [redirect, setRedirect] = useState(false);


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data = { email, password };

        try {
            const res = await axios.post(url, data);

            if (res.status === 201) {
                setRedirect(true);
                const token = res.data;
                localStorage.setItem("jwt", token);
            }
        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                setErrorMessage(e.response.data.message);
            } else {
                setErrorMessage("Napaka pri prijavi.");
            }
        }
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div className="login-container"
             style={{ backgroundImage: `url(/images/europeana-Agwv1mKDUnc-unsplash.jpg)` }}>
            <div className="card p-4 shadow-lg txt-dark" style={{ maxWidth: '700px', width: '100%' }}>
                <h1 className="h3 mb-3 fw-normal text-align-center txt-dark">Please sign in</h1>
                <form onSubmit={submit} className="mx-15">
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="btn btn-primary py-2 my-10" type="submit">
                        Sign in
                    </button>
                    {errorMessage && (
                        <div className="alert alert-danger mt-3">{errorMessage}</div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
