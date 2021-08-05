import React from 'react'

function Header({onDarkModeClick,theme}) {
     return (
      <>
          <header>
               <h2>Shopster</h2>
               <button onClick={onDarkModeClick}>
               {theme ? "Dark" : "Light"} Mode
               </button>
          </header>
     </>
     )
}

export default Header
