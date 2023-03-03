import React from 'react';


export function createNavbar(): HTMLElement { 
    // Create the navbar container element 
    const navbarContainer = document.createElement("div"); 
    navbarContainer.classList.add("navbar-container"); 
  
    // Create the banner element 
    const banner = document.createElement("div"); 
    banner.classList.add("banner"); 
    banner.style.backgroundColor = "black"; 
  
    // Create the logo element 
    const logo = document.createElement("img"); 
    logo.src = "tax-element/image/logo.png"; 
    logo.alt = "Logo"; 
    logo.classList.add("logo"); 
  
    // Append the logo to the banner 
    banner.appendChild(logo); 
  
    // Append the banner to the navbar container 
    navbarContainer.appendChild(banner); 
  
    // Return the navbar container 
    return navbarContainer; 
  } 
  

export default createNavbar;



// const Navbar = () => {
//     const navbar = document.createElement('div');
//     navbar.style.width = '100%';
//     navbar.style.backgroundColor = 'black';

//     const logo = document.createElement('img');
//     logo.src = 'https://www.vice.com/etc/designs/vice/images/logos/vice-logo.svg';

//     const banner = document.createElement('img');
//     banner.style.backgroundColor = 'black';
//     banner.style.display = 'flex';
//     banner.style.alignItems = 'center';
//     banner.style.padding = '10px';

//     banner.appendChild(logo);
//     navbar.appendChild(banner);

//     return navbar;
// }

// export default Navbar;

// width={1260} style={{display: 'block', margin: '0 auto', marginTop: "40px"}}