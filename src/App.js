import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ImageUpload from "./file-upload/imageUpload.component";
import Header from "./component/header";
import Footer from "./component/footer";
import FunctionOne from './component/function/FunctionOne'
import FunctionTwo from './component/function/FunctionTwo'
import Homepage from './component/function/Homepage'
import Login from "./component/Login";
import FindPassword from "./component/FindPassword";
import CreateAccount from "./component/CreateAccount";
// import LoginModal from './component/logInModal'

function App() {
    const [newUserInfo, setNewUserInfo] = useState({
        profileImages: []
    });


    const updateUploadedFiles = (files) => {
        setNewUserInfo({...newUserInfo, profileImages: files});
        console.log()
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //logic to create new user...
    };

    return (
        <Router>
            <div>
                <Header/>
                {/*<FunctionTwo/>*/}
                <Switch>
                    <Route exact path='/'>
                        <Homepage/>
                    </Route>
                    <Route path='/functionOne' component={FunctionOne}/>
                    <Route path='/functionTwo' component={FunctionTwo}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/findpassword' component={FindPassword}/>
                    <Route path='/createaccount' component={CreateAccount}/>
                    {/*<form onSubmit={handleSubmit}>*/}
                    {/*    <ImageUpload*/}
                    {/*        accept=".jpg,.png,.jpeg"*/}
                    {/*        label="Profile Image(s)"*/}
                    {/*        multiple*/}
                    {/*        updateFilesCb={updateUploadedFiles}*/}
                    {/*    />*/}
                    {/*    /!*<button type="submit">Create New User</button>*!/*/}

                    {/*</form>*/}
                    {/*<Routes>*/}
                    {/*    <Route path='/function1' element={<function1/>}/>*/}
                    {/*    <Route path='/function2' element={<function2/>}/>*/}
                    {/*</Routes>*/}
                </Switch>
{/*<Footer/>*/}
            </div>
        </Router>
    );
}

export default App;