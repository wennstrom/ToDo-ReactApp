import React from "react";

export default class InputSection extends React.Component {
    render() {
        return (
            <div>
                <input placeholder="enter task"></input><button onClick={handleSubmit}>Add</button>
            </div>
        )
        function handleSubmit() {
            //check if input is empty
            //add to list if not 

        }

    }

}