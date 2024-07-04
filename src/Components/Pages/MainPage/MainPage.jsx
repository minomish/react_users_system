import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import s from './MainPage.module.css'

export const MainPage = () => {

  return (
      <header>

        <nav className={s.nav}>
      
          <NavLink to="/" 
              className={s.link} 
              style={({ isActive }) => {
                return isActive ? { color: "#e08aff" } : {};
              }}
          >Page Form</NavLink>
          <NavLink to="/two"
              className={s.link}
              style={({ isActive }) => {
                return isActive ? { color: "#e08aff" } : {};
              }} 
          >Page Table</NavLink>
          <NavLink to="/edit"
              className={s.link} 
              style={({ isActive }) => {
                return isActive ? { color: "#e08aff" } : {};
              }} 
          >Page Error</NavLink>
        </nav>
        <Outlet/>
        
      </header>

  );
};







// import React, { useEffect } from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';

// import s from './MainPage.module.css'

// export const MainPage = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.log('Current location is ', location);
//   }, [location]);

//   return (
//     <header>
//       <nav className={s.nav}>
//         <ul>
//           <li>
//             <Link to='/home'>LOGO</Link>
//           </li>
//           <li>
//             <Link to="/one">Page Form</Link>
//           </li>
//           <li>
//             <Link to="/two">Page Table</Link>
//           </li>
//           <li>
//             <Link to="/error">Page Error</Link>
//           </li>
//         </ul>
//       </nav>
//       <Outlet/>
//     </header>

//   );
// };






      // return (
      //   <header>
      //     <nav className={s.nav}>
      //     <Link to='/home'>LOGO</Link>
      //     <Link to="/one">Page Form</Link>
      //     <Link to="/two">Page Table</Link>
      //     <Link to="/error">Page Error</Link>
      //     </nav>
      //   </header>
      // );