import React from 'react';

const CreateForm = (props) => {

    const state = {
        title: null,
        description: null,
        imageUrl: null
    }


    const handleChange = (event) => (
        state[event.target.name] = event.target.value
    )


    return (
        <div className="create-form">
            <h1>Create game</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.createGame(state);
            }}>
                <label>Title</label>
                <input type="text" onChange={handleChange} name="title" id="title" />
                <label>Description</label>
                <textarea type="text"  onChange={handleChange} name="description" id="description" />
                <label>ImageUrl</label>
                <input type="text" onChange={handleChange} name="imageUrl" id="imageUrl" />
                <input type="submit" value="Create" />
            </form>
        </div>
    )
};

export default CreateForm;

