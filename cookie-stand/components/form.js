import React, {useState} from "react";

function Form(){
    const [formInput, setFormInput] = useState({});

    const handleChange = (e) => {
        setFormInput({...formInput,[e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(formInput);
        e.target.reset();
    }
    return(
        <>
        <div class="formDiv">
        <form class="storeForm" onSubmit= {onSubmit}>
            <div class="inputContainer">
            <h2>Create Cookie Stand </h2>
            <div class="location">
            <label>Location</label>
            <input name="location" placeholder="location" onChange={handleChange}/>
            </div>

            <div class="inputField">
            <div class="min">
            <label>Minimum Customers per Hour</label>
            <input name = "min"  placeholder="Min" onChange={handleChange}/>
            </div>

            <div class="max">
            <label>Maximum Numbers per Hour</label>
            <input name = "max" placeholder="Max" onChange={handleChange}/>
            </div>

            <div class="avg">
            <label>Average Cookies per Sale</label>
            <input name = "avg" placeholder="Avg" onChange={handleChange}/>
            </div>

            <button id="formButton" type="submit">Create</button>
            </div>
            </div>
        </form>
        </div>
        </>
    )
}
export default Form;