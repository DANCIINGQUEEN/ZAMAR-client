import React, {useState} from "react";
import ImageUpload from "./file-upload/imageUpload.component";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

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
        <div>
            <Navbar/>
            <form onSubmit={handleSubmit}>
                <ImageUpload
                    accept=".jpg,.png,.jpeg"
                    label="Profile Image(s)"
                    multiple
                    updateFilesCb={updateUploadedFiles}
                />
                {/*<button type="submit">Create New User</button>*/}

            </form>
<Footer/>
        </div>
    );
}

export default App;