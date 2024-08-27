import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import './Login.css'; // You can use the same CSS file as Login

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [redirect, setRedirect] = useState(false);

    const url = "http://localhost:3000/user";
    /*const url = "http://localhost:5172/user";*/

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        }

        console.log(data);

        const res = await axios.post(url, data);

        if (res.status === 201) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="register-container">
            <div className="card p-4 shadow-lg txt-dark" style={{ maxWidth: '700px', width: '100%' }}>
                <h1 className="h3 mb-3 fw-normal text-center text-align-center txt-dark">Please register</h1>
                <form onSubmit={submit} className="mx-15">
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="firstNameInput"
                            placeholder="Input your first name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstNameInput">First name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="lastNameInput"
                            placeholder="Input your last name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="lastNameInput">Last name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="emailInput">Email address</label>
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
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword2"
                            placeholder="Repeat password"
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                        <label htmlFor="floatingPassword2">Repeat password</label>
                    </div>
                    <button className="btn btn-primary py-2 my-10" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
