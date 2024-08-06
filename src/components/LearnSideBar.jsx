import React, { Children, useState } from 'react'
import { FaBars, FaShoppingBag } from 'react-icons/fa';
import { FcPortraitMode, FcBarChart, FcComments, FcList } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import './Styles.css';

const LearnSideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItems = [
    {
      path: "/",
      name: "About",
      icon: <FcPortraitMode />
    },
    {
      path: "/analatics",
      name: "Analatics",
      icon: <FcBarChart />
    },
    {
      path: "/comments",
      name: "Comments",
      icon: <FcComments />
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />
    },
    {
      path: "/productList",
      name: "ProductList",
      icon: <FcList />
    }
  ]
  return (
    // <div>
    //   <div className='main'>
    //   <div className='log'>
    //   <FaBars onClick={toggle}/>
    //   </div>
    //   <h3>Logo</h3>
    //   {menuItems.map((item, index) =>{
    //     return(
    //       < >
    //       <NavLink className='nav' to={item.path} key={index}>
    //         <div>{item.icon}</div>
    //         <div>{item.name}</div>

    //       </NavLink>
    //       </>
    //     )
    //   })}
    //   </div>
    //   <main className='child'>{children}</main>

    // </div>
    <div className='container'>
      <div style={{ width: isOpen ? "200px" : "50px", height:"500px",position:"relative",bottom:"20px",  backgroundColor:"red" }} className='sidebar'>
        <div className='top_section'>
          <h2 style={{ display: isOpen ? "block" : "none" }} className='logo'>Logo</h2>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className='bars' >
            <FaBars onClick={ toggle}/>
          </div>
        </div>
         {
          menuItems.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className='icon'>{item.icon}</div>
              <div style={{display:isOpen? "block":"none"}} className='link_text'>{item.name}</div>

            </NavLink>
          ))
         }
      </div>
      <main className='child'>{children}</main>
    </div>
  )
}

export default LearnSideBar
