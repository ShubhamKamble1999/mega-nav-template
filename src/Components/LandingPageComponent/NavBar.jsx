import React, {  useState } from 'react';
import { NavMenu } from './NavMenu';

export const NavBar = ({transparantNav}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the hovered menu item
  const navListArray = ["Solution", "Service", "Industry", "Work", "Company"];
  
  return (
    <>
      {/* <div className='h-20 px-4 flex items-center justify-between relative'> */}
      <div
        className={`sticky top-0 z-50 ${transparantNav === true
          ? 'h-20 px-4 bg-blue-400 flex items-center justify-between'
          : 'h-20 px-4 bg-transparent flex items-center justify-between'
        }`}
      >
        <div className="logo">
          LOGO
        </div>
        <nav className="nav-list-el">
          <ul className='flex items-center'>
            {navListArray.map((navEle, index) => (
              <li
                key={index}
                className='hover:bg-orange-300 px-2 h-20 flex items-center w-[100%] relative'
                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on hover
                onMouseLeave={() => setHoveredIndex(null)}  // Reset hovered index on leave
              >
                {navEle}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Render the mega menu outside the <li> but conditionally show it */}
      {hoveredIndex !== null && (
        <div
          onMouseEnter={() => setHoveredIndex(hoveredIndex)} // Prevent closing when hovering on mega menu
          onMouseLeave={() => setHoveredIndex(null)} // Hide menu when mouse leaves the entire menu
          className='absolute w-full left-0 mt-0' // Positioning the menu
        >
          <NavMenu index={hoveredIndex} />
        </div>
      )}

      
    </>
  );
};
