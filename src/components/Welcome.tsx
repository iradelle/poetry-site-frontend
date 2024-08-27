import React from 'react';
import PoetCard from './PoetCard';
import Card from "./Card";

const Welcome = () => {
    return (
        <>
            <section className="py-5 bg-light text-center container-fluid">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="txt-dark text-align-center">Poetry is the beating heart of one's mind.</h1>
                        <p className="lead text-body-secondary txt-dark text-align-center mx-3">Lorem ipsum dolor
                            sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                        <h1 className="txt-dark text-align-center">Affect and be affected.</h1>
                        {/*<p className="lead text-body-secondary txt-dark text-align-center">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>*/}
                    </div>
                </div>

                {/* Poet Cards Section */}
                <div className="row txt-dark d-flex justify-content-center">
                    <div className="col-md-4">
                        <PoetCard
                            image='/images/poets/Sunday-Reading-Russian-Lit.webp'
                            quote="The only way to be happy is to love. Unless you love, your life will flash by."
                            name="Leo Tolstoy"
                        />
                    </div>
                    <div className="col-md-4">
                        <PoetCard
                            image='/images/poets/Irish-author-Oscar-Wilde-Napoleon-Sarony-photographer-1882.webp'
                            quote="To live is the rarest thing in the world. Most people exist, that is all."
                            name="Oscar Wilde"
                        />
                    </div>
                    <div className="col-md-4">
                        <PoetCard
                            image='/images/poets/emily-dickinson-painting.jpg'
                            quote="If I read a book and it makes my whole body so cold no fire can ever warm me, I know that is poetry."
                            name="Emily Dickinson"
                        />
                    </div>
                    <div className="col-md-4">
                        <PoetCard
                            image="/images/poets/who-was-Edgar-Allan-Poe.webp"
                            quote="There is no exquisite beauty… without some strangeness in the proportion."
                            name="Edgar Allan Poe"
                        />
                    </div>
                </div>


                {/* Card Section */}
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <Card/>
                </div>
            </section>
        </>
    );
}

export default Welcome;
