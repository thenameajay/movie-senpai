
import Image from "next/image";
import "../Components/ComponentsStyles/Navbar.css"

export default function Navbar() {
    return (
        <div id="navbar">
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
    )
}