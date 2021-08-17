import React, { useState } from "react";

export default function searchChapters() {
    const [input, setInput] = useState('');

    return (
        <div className="chapter-search"> 
            <input className="chapter-searbar" type = "text" placeholder = "Search for a chapter">
            </input>
        </div> 
    )
}
