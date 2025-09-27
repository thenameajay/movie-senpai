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
            <input id="searchbar" type="search" placeholder="Demon Slayer" />
        </div>
    )
}