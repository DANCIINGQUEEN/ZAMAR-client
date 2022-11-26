import React, {useState} from "react";
import {Link} from "react-router-dom";




const FindPassword = () => {


    return (
        <div >

            <section>
<p>Forgot your password?</p>
                <p>No problem. I'll make you a new one!</p>

                <main>
                    <div className="findPasswordContainer">


                        <input type="text" placeholder="Enter your Email" name="email" required/>

                        <button className="findPasswordButton" type="submit">Send</button>


                    </div>
                </main>
            </section>

        </div>
    );
};

export default FindPassword;
