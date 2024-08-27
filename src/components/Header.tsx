import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // preverimo, če je uporabnik prijavljen
    useEffect(() => {
        const token = localStorage.getItem("jwt");
        // ta token bi morali poslati na backend, ga validirat in na podlagi tega
        // rezultata določali ali je uporabnik prijavljen
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const navigate = useNavigate();

    const logoutUser = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsLoggedIn(false);
        localStorage.removeItem("jwt");

        navigate('/login');
    }

    const addPoem = () => {
        navigate('/addPoem');
    }

    return (
        <>
            <header data-bs-theme="dark">
                <div className="text-bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex align-items-center justify-content-between">
                                <div className="mx-3 d-flex justify-content-between"> {/* Flex container for "About" and description */}
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <a href='/'>
                                            <img src='/images/možgani.png' alt='Možgani.png'
                                                 className='header-image img-fluid'/>
                                        </a>
                                    </div>
                                    <div>
                                    <h4 className="mb-0 ">About</h4> {/* Remove bottom margin and add right margin */}
                                        <p className="text-body-secondary mb-0 mb-3">This is a site for posting your
                                            poetry.</p> {/* Remove bottom margin */}
                                    </div>
                                </div>

                                <div className="align-items-center">
                                    <ul className="list-unstyled d-flex align-items-center"> {/* Flex container */}
                                        {isLoggedIn ? (
                                            <>
                                                <li className="mx-3"><a href="/"
                                                                        className="text-white link-color-light">Home</a>
                                                </li>
                                                <li className="mx-3"><a href="/poem"
                                                                        className="text-white link-color-light">Poems</a>
                                                </li>
                                                {/*<li className="mx-3"><a href="/profile"
                                                                        className="text-white link-color-light">Profile</a>
                                                </li>*/}
                                                <li className="mx-3"><a href="#" onClick={logoutUser}
                                                                        className="text-white link-color-light">Logout</a>
                                                </li>
                                                <li>
                                                    {/* Add Poem Button */}

                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li className="mx-3"><a href="/login"
                                                                        className="text-white link-color-light">Login</a>
                                                </li>
                                                <li className="mx-3"><a href="/register"
                                                                        className="text-white link-color-light">Register</a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;