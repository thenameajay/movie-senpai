"use client"
import Image from "next/image";
import "../Components/ComponentsStyles/Navbar.css"
import { useState } from "react";

export default function Navbar() {
    const [slideMenuActive, setSlideMenuActive] = useState(false)
    return (
        <>
            <div id="navbar">
                {/* For Mobile */}
                <div id="nav-menu" onClick={() => setSlideMenuActive(!slideMenuActive)}>
                    M
                </div>
                {/* For Mobile */}
                <div id="brand-name">
                    Senpai
                </div>
                <nav id="inner-nav">
                    <a className="nav-pages" href="#">Home</a>
                    <a className="nav-pages" href="#">Movies</a>
                    <a className="nav-pages" href="#">Series</a>
                    <a className="nav-pages" href="#">About</a>

                    {/* <button>
                    Advanced Search
                </button> */}
                </nav>
                <div className="search-div">
                    <input id="search-bar" type="search" placeholder="Demon Slayer" />
                    <Image
                        className="search-button"
                        src="search.svg"
                        alt="search"
                        width={30}
                        height={30}
                    />
                </div>
            </div>

            <div id="slide-bar-menu" className={slideMenuActive ? "menu-active" : "menu-deactive"}>
                <a className="slide-menu-nav-pages" href="#">Home</a>
                <a className="slide-menu-nav-pages" href="#">Movies</a>
                <a className="slide-menu-nav-pages" href="#">Series</a>
                <a className="slide-menu-nav-pages" href="#">About</a>
            </div>
        </>
    )
}