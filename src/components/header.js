import React from "react";
import "./header.css"
function Header() {
  return (
    <React.Fragment>
        <div className=" mx-auto text-center">
            <span onClick={()=>window.scroll(0,0)}>Buscador de peliculas</span>
        </div>
    </React.Fragment>
  );
}

export default Header;
