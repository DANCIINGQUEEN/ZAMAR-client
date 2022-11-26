import React, {useState} from "react";
import ImageUpload from "../../file-upload/imageUpload.component";




const FunctionOne = () => {


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
        <form onSubmit={handleSubmit}>
            <ImageUpload
                accept=".jpg,.png,.jpeg"
                label="Profile Image(s)"
                multiple
                updateFilesCb={updateUploadedFiles}
            />
            {/*<button type="submit">Create New User</button>*/}

        </form>

    );
};

export default FunctionOne;
