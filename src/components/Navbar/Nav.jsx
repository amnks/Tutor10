// import React, { useState } from "react";
// import styled from "styled-components";
// import MenuIcon from "@mui/icons-material/Menu";
// import CancelIcon from "@mui/icons-material/Cancel";

// function Header() {
//   const [sideNavStatus, setsideNavStatus] = useState(false);
//   return (
//     <Container>
//       <img src="/images/logo.svg" alt=""></img>
//       <Menu>
//         <a href="#">About Us</a>
//         <a href="#">Our Mentors</a>
//         <a href="#">Testimonials</a>
//         <a href="#">Pricing</a>
//       </Menu>
//       <RightMenu>
//         <Btn>Enrol Now</Btn>
//         <CustomMenu onClick={() => setsideNavStatus(true)}></CustomMenu>
//       </RightMenu>
//       <SideNav show={sideNavStatus}>
//         <CloseWrapper>
//           <CustomClose onClick={() => setsideNavStatus(false)}></CustomClose>
//         </CloseWrapper>
//         <li onClick={() => setsideNavStatus(false)}>
//           <a href="#">About Us</a>
//         </li>
//         <li onClick={() => setsideNavStatus(false)}>
//           <a href="#">Our Mentors</a>
//         </li>
//         <li onClick={() => setsideNavStatus(false)}>
//           <a href="#">Pricing</a>
//         </li>
//         <li onClick={() => setsideNavStatus(false)}>
//           <a href="#">Testimonials</a>
//         </li>
//       </SideNav>
//     </Container>
//   );
// }

// export default Header;
// const Container = styled.div`
//   min-height: 60px;
//   display: flex;
//   align-items: center;
//   position: fixed;
//   padding: 0px 20px;
//   justify-content: space-between;
//   top: 0;
//   right: 0;
//   z-index: 1;
//   left: 0;
// `;

// const Menu = styled.div`
//   display: flex;
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   a{
//     font-weight: 600;
//     padding: 0px 10px;
//     flex-wrap: nowrap;
//     text-transform: uppercase;
//   }
//   @media ( max-width: 768px){
//     display:none;
//   }
// `;
// const Btn = styled.div`
//      color: #000000;
//      padding: 0px 7px;
//      margin: 0px 20px;
//      text-transform: uppercase;
//      font-weight: 600px;
//      border-radius: 40px;
//      border: 1px solid black;
// `;
// const RightMenu = styled.div`
// display: flex;
// align-items: center;
// a{
//   font-weight: 600;
//   padding 0px 10px;
//   flex-wrap: nowrap;
//   text-transform: uppercase;
// }
// `;
// const CustomMenu = styled(MenuIcon)`
//   align-items: center;
// `;
// const SideNav = styled.div`
//   position: fixed;
//   z-index: 15;
//   background: #fff;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   text-align: left;
//   width: 250px;
//   list-style: none;
//   padding: 20px;
//   font-weight: 600;
//   transform: ${(props) => (props.show ? "teanslateX(0)" : "translateX(100%)")};
//   li {
//     text-decoration: none;
//     border-bottom: 1px solid rgba(0, 0, 0, 0.2);
//     padding: 15px 0px;
//   }
// `;

// const CustomClose = styled(CancelIcon)`
//   cursor: pointer;
// `;
// const CloseWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;
// //Create a header


import React from 'react';
import './Nav.css'
import { Button } from '../Button/Button';

function Nav() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav-logo">
            AlgoGeek
            <i className="fa fa-code"></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href='#'
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href='#Approach'
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href='#Testimonial'
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a
                href='#Contact'
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </a>
              
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default Nav;