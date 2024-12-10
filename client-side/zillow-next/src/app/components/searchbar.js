'use client';

import { useState, useEffect } from'react'; import React from "react"; 

const handleSearch = () => {
    return(<>
    </>)
};

const Searchbar = () => {
    // Define search functionality here
return(
    <> 
    <div className="searchbar max-w-[200px] ">
     <input className="search" type="search" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} />
     <button className="searchBtn" type="submit" onClick={handleSearch}>Submit</button>
     </div>

</>

)}

export default Searchbar;