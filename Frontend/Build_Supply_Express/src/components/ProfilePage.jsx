import React, { useState } from 'react';
import styles from "./ProfilePage.module.css"
import { FaCreditCard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import ProfileContent from './ProfileContent';
import axios from "axios"
import { server } from "../server";
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Profile");
  // const [hoveredLink, setHoveredLink] = useState(null);
  const navigate= useNavigate();

  const logoutHandler=()=>{
    axios.get(`${server}/user/logout`,{withCredentials:true}).then((res)=>{
      toast.success(res.data.message);
       
      navigate("/login");
      window.location.reload(true)
    }).catch((error)=>{
      console.log(error.response.data.message);
    })
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCategory = (categoryId) => setActiveCategory(activeCategory === categoryId ? null : categoryId);

  // const linkStyle = (id) => ({
  //   cursor: 'pointer',
  //   display: 'block',
  //   padding: '10px 15px',
  //   backgroundColor: hoveredLink === id ? '#f1f1f1' : 'transparent', // Change background color on hover
  //   color: activeCategory === id ? 'red' : '#000', // Change text color when active
  // });

  const handleMouseEnter = (id) => setHoveredLink(id);
  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <div style={{backgroundColor:'#f1f1f1',}} >

    <div >
      <div>
      <nav
        id="sidenav-2"
        style={{
            width: '240px',
            transition: 'transform 0.3s linear',
            transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-240px)',
            position: 'fixed',
            // height: '100vh',
            overflowY: 'auto',
             // Allows the sidebar itself to scroll if its content exceeds the viewport height
            backgroundColor:'white'

          }}
          className={styles.sidebar}

      >
        <ul style={{ listStyleType: 'none', padding: 0 }}>

            <ul style={{listStyle:"none", paddingTop:"7%"} }>
               <li onClick={()=>setActiveCategory("Profile") }  style={{cursor:"pointer"}}> <div ><CgProfile size={30}/><span> Profile</span></div></li>
               <hr />
              
               <ul style={{listStyle:"none",paddingTop: "0%"}} className={styles.sidelist}>
                <li onClick={()=>setActiveCategory("Orders")}>
               <div style={{borderRadius:"5px", height:"10%"}}> <FaCreditCard size={20} style={{}}/> <span>Orders</span></div>

                </li>
                <li onClick={()=>setActiveCategory("Refunds")}> <CgProfile /><span> Refunds</span></li>
                <li onClick={()=>setActiveCategory("Inbox")}> <CgProfile /><span> Inbox</span></li>
                {/* <li onClick={()=>setActiveCategory("Track Order")}> <CgProfile /><span>Track Order</span></li> */}
                <li onClick={()=>setActiveCategory("Payment")}> <CgProfile /><span> Payment Methods</span></li>
                <li onClick={()=>setActiveCategory("Address")}> <CgProfile /><span> Address</span></li>
                <li onClick={()=> logoutHandler()}> <CgProfile /><span> Logout</span></li>
               </ul>
            </ul>
          {/* {navigationLinks.map((item) => (
            
            <li key={item.id} >
              <a
                style={linkStyle(item.id)}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => console.log("heloo")}
              >
                <i className={item.icon}></i> <span>{item.title}</span>
                {item.isCategory && (
                  <i className={`fas fa-angle-down ${activeCategory === item.id ? 'rotate-icon' : ''}`}></i>
           
                )}
              </a>
              {item.isCategory && (
                <ul style={{ display: activeCategory === item.id ? 'block' : 'none', paddingLeft: '20px' }}>
                  {item.links.map((subItem) => (
                    <li key={subItem.id}>
                      <a
                        style={linkStyle(subItem.id)}
                        onMouseEnter={() => handleMouseEnter(subItem.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))} */}
        </ul>
      </nav>
      </div>
      <div  style={{
            // flex: 1,
            // marginLeft: isSidebarOpen ? '240px' : '0', // Adjust based on the sidebar state
            // transition: 'margin-left 0.3s linear',
            // padding: '20px',
            overflowY:'scrollBy', // Enable scrolling for the main content area
            // width: isSidebarOpen ? 'calc(100% - 240px)' : '100%', // Adjust width based on the sidebar state
            // backgroundColor:'green',
           
          }}>

      <div
        id="content"
        style={{
            flex: 1,
            marginLeft: isSidebarOpen ? '240px' : '0', // Adjust based on the sidebar state
            transition: 'margin-left 0.3s linear',
            padding: '20px',
            overflowY: 'auto', // Enable scrolling for the main content area
            width: isSidebarOpen ? 'calc(100% - 240px)' : '100%', // Adjust width based on the sidebar state
            // position:'fixed'
            backgroundAttachment:'fixed',
            height:"100vh"
          }}
        // className='col-20'
      >
        <button onClick={toggleSidebar} style={{ marginBottom: '20px' }}>
          Toggle Sidebar
        </button>
        
       <ProfileContent active={activeCategory}></ProfileContent>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;

// function ProfilePage() {
//   return (
//     <div>
// <section className="pb-4">
//   <div className="border rounded-5">
//     <section
//       style={{
//         position: "relative",
//         overflowY: "hidden",
//         minHeight: "400px",
//       }}
//       className="p-4 d-flex justify-content-center"
//     >
//       <nav
//         id="sidenav-2"
//         data-mdb-close-on-esc="false"
//         className="sidenav sidenav-primary ps"
//         data-mdb-position="absolute"
//         data-mdb-mode="side"
//         data-mdb-content="#content"
//         data-mdb-focus-trap="false"
//         style={{
//           width: "240px",
//           height: "100%",
//           position: "absolute",
//           transitionDuration: "0.3s",
//           transitionProperty: "transform, width, padding, margin",
//           transitionTimingFunction: "linear",
//           transform: "translateX(-100%)",
//         }}
//       >
//         <ul className="sidenav-menu">
//           <li className="sidenav-item">
//             <a className="sidenav-link ripple-surface">
//               <i className="far fa-smile fa-fw me-3" />
//               <span>Link 1</span>
//             </a>
//           </li>
//           {/* Repeat for other items */}
//         </ul>
//         {/* Scrollbars removed for clarity */}
//       </nav>

//       <div
//         style={{
//           padding: "20px",
//           transition: "all 0s ease 0s",
//           marginRight: "0px",
//         }}
//         className="text-center"
//         id="content"
//       >
//         <button
//           data-mdb-toggle="sidenav"
//           data-mdb-target="#sidenav-2"
//           className="btn btn-primary"
//           aria-controls="sidenav-2"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           {/* Icon commented out for clarity */}
//         </button>

//         <div className="d-flex my-5 text-start">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc magna massa, ornare quis
//           interdum a, cursus in quam. Quisque risus libero, cursus eget eros vitae, aliquam placerat
//           velit. Vivamus luctus eros id sagittis luctus. Pellentesque felis nulla, rhoncus viverra
//           nunc vitae, viverra aliquam ante. Ut feugiat mattis tempor.
//         </div>
//       </div>
//     </section>

//     <div className="p-4 text-center border-top mobile-hidden">
//       <button
//         className="btn btn-link px-3"
//         data-mdb-toggle="modal"
//         aria-expanded="false"
//         aria-controls="example2"
//         data-mdb-target="#apiRestrictedModal"
//       >
//         <span className="d-none d-md-inline-block">Show code</span>
//       </button>
//     </div>
//   </div>
// </section>

      
//     </div>
//   )
// }

// export default ProfilePage




{/* <section className="pb-4">
  <div className="border rounded-5">
    
    <section style="position: relative; overflow-x: hidden; min-height: 400px" className="p-4 d-flex justify-content-center">
      <!-- Sidenav-->
      <nav id="sidenav-4" data-mdb-close-on-esc="false" className="sidenav sidenav-primary ps sidenav-slim" data-mdb-position="absolute" data-mdb-hidden="false" data-mdb-mode="side" data-mdb-slim="true" data-mdb-slim-collapsed="true" data-mdb-content="#slim-content" data-mdb-focus-trap="false" style="width: 77px; height: 100%; position: absolute; transition-duration: 0.3s; transition-property: transform, width, padding, margin; transition-timing-function: linear; transform: translateX(0%);">
        <ul className="sidenav-menu">
          <li className="sidenav-item">
            <a className="sidenav-link ripple-surface">
              <i className="far fa-smile fa-fw me-3"></i><span data-mdb-slim="false" style="display: none;">Link 1</span></a>
          </li>
          <li className="sidenav-item">
            <a className="sidenav-link ripple-surface-primary collapsed" data-mdb-toggle="collapse" href="#sidenav-collapse-8-0-0" role="button" aria-expanded="false"><i className="fas fa-grin fa-fw me-3"></i><span data-mdb-slim="false" style="display: none;">Category 1</span><i className="fas fa-angle-down rotate-icon" style="transform: rotate(0deg);"></i></a>
            <ul className="sidenav-collapse collapse" id="sidenav-collapse-8-0-0" style="">
              <li className="sidenav-item">
                <a className="sidenav-link ripple-surface">Link 2</a>
              </li>
              <li className="sidenav-item">
                <a className="sidenav-link ripple-surface">Link 3</a>
              </li>
            </ul>
          </li>
          <li className="sidenav-item">
            <a className="sidenav-link ripple-surface-primary collapsed" data-mdb-toggle="collapse" href="#sidenav-collapse-8-0-1" role="button" aria-expanded="false"><i className="fas fa-grin-wink fa-fw me-3"></i><span data-mdb-slim="false" style="display: none;">Category 2</span><i className="fas fa-angle-down rotate-icon" style="transform: rotate(0deg);"></i></a>
            <ul className="sidenav-collapse collapse" id="sidenav-collapse-8-0-1" style="">
              <li className="sidenav-item">
                <a className="sidenav-link ripple-surface">Link 4</a>
              </li>
              <li className="sidenav-item">
                <a className="sidenav-link ripple-surface">Link 5</a>
              </li>
            </ul>
          </li>
        </ul>
      <div className="ps__rail-x" style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabIndex="0" style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabIndex="0" style="top: 0px; height: 0px;"></div></div></nav>
      <!-- Sidenav-->
      <div style="padding: 20px 20px 20px 97px; margin-right: 0px; transition: all 0s ease 0s;" className="text-center" id="slim-content">
        <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-4" className="btn btn-primary" aria-controls="#sidenav-4" aria-haspopup="true" style="" aria-expanded="true">
          <i className="fas fa-bars"></i>
        </button>
        <button id="slim-toggler" className="btn btn-primary" style="">Toggle slim</button>
        <div className="d-flex justify-content-center my-5"></div>
      </div>
    </section>
    
    
    
    <div className="p-4 text-center border-top mobile-hidden">
      <a className="btn btn-link px-3" data-mdb-toggle="modal" role="button" aria-expanded="false" aria-controls="example6" data-ripple-color="hsl(0, 0%, 67%)" data-mdb-target="#apiRestrictedModal" type="button">
        <i className="fas fa-code me-md-2"></i>
        <span className="d-none d-md-inline-block">
          Show code
        </span>
      </a>
      
      
    </div>
    
    
  </div>
</section> */}