
function Sales({ name, item, sales, handleSales }) {
    // console.log('name:', name)
    
    return (
        <div>
            <select onChange={handleSales} name={name} id="sales">
                <option>
                    {item ? item : "Choose an option"}
                </option>
                {sales.map((item,i) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default Sales;
