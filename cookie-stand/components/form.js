function Form(){
    return(
        <>
        <h2>Create Cookie Stand </h2>
        <form>
            <label>Create Cookie Stand </label>
            <label>Location</label>
            <input type = "text" placeholder="location"/>
            <label>Minimum Customers per Hour</label>
            <input type = "number"  placeholder="Min"/>
            <label>Maximum Numbers per Hour</label>
            <input type = "number" placeholder="Max"/>
            <label>Average Cookies per Sale</label>
            <input type = "number" placeholder="Avg"/>
            <button>Create</button>
            
        </form>
        </>
    )
}
export default Form;