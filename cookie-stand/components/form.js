function Form(){
    return(
        <>
        <div className = "w-full max-w-xs">
        <h2>Create Cookie Stand </h2>
        <form className = "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
        </div>
        </>
    )
}
export default Form;