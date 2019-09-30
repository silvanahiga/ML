import React from "react";
import "./style.css";
import Search from "../Search";


class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
            <div className="nav_logo"> <img src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png" alt=""/></div>
           
            <Search dataSearch={(data) => this}/>
            <div className="cards"><img src="https://http2.mlstatic.com/resources/deals/exhibitors_resources/mla-menu-desktop-notification-picture-86b2b844-4c2d-4b7c-8649-4fef867e0b9d.png" alt=""/></div>
            
            
            </div>
        )
    }

}

export default Navbar