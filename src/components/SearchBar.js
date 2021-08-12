import React, { useState } from "react";

export default function SearchBar() {
	const [search_msg,setSearchMsg] = useState("Search for a manga");
    const [toggle_button_msg, set_toggle_button_msg] = useState("or enter a link");

    function toggle(){
        if(toggle_button_msg=="or enter a link"){
            set_toggle_button_msg("or search for a manga");
            setSearchMsg("Enter a link");
        }
        else{
            set_toggle_button_msg("or enter a link");
            setSearchMsg("Search for a manga");
        }

    }
	return (
		<>
			<input className="searchbar" placeholder={search_msg}></input>
			<button className="searchbar-toggle" onClick={toggle}>{toggle_button_msg}</button>
		</>
	);
}
