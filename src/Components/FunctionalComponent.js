import React, { useState, useEffect } from 'react';

export default function FunctionalComponent() {
    const [data, setData] = useState([]);
    const [query,setQuery] =useState('');
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const json = await response.json(); // Corrected JSON parsing
                setData(json);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    const filteredData=data.filter(e1=>{
        return e1.name.toLowerCase().indexOf(query)>=0
    })
    return (
        <div>
            <input type='text' placeholder='Type here to search' value={query} onChange={(e)=>setQuery(e.target.value)}/>
            {filteredData.length===0?(<h1>data not found</h1>):
            filteredData.map((value) => {
                return (
                    <p key={value.id}>{value.name}</p> // Added key prop for each element
                );
            })}
        </div>
    );
}
