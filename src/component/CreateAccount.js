import React, {useState} from "react";




const CreateAccount = () => {


    return (
        <div >

            <section>
                <p>Create a new account</p>
                {/*<p>No problem. I'll make you a new one!</p>*/}

                <main>
                    <div className="loginContainer">


                        <input type="text" placeholder="Enter your name" name="name" required/>
                        <input type="text" placeholder="Enter your Email" name="email" required/>
                        <input type="text" placeholder="Enter your Password" name="password" required/>

                        <button className="signUpButton" type="submit">Sign Up</button>

                        {/*<div>Don't have an account? <Link to="/createaccount">Create an account</Link></div>*/}

                    </div>
                </main>
            </section>

        </div>

    );
};

export default CreateAccount;
