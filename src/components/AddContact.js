import React from "react";

class AddContact extends React.Component {
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <lable>Name</lable>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddContact;