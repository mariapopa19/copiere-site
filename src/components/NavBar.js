import React from "react";
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="pinterest">
                <div className="left">
                    <a href="#home" className="logo"><i class="fab fa-pinterest"></i></a>
                    <a href="#home" className="home">Flux principal</a>
                </div>
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="search" name="" placeholder="Caută" id="" />
                </div>
                <div class="right">
                    <a href="#notifications" className="items"><i className="fas fa-bell"></i></a>
                    <a href="#notifications" className="items"><i className="far fa-comment-dots"></i></a>
                    <a href="#user" className="avatar">
                        <div className="img"><img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80" alt="" /></div>
                    </a>
                    <a href="#settings" className="items-down"><i className="fas fa-chevron-down"></i></a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;