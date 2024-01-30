import nav from '../assets/images/nav_left_img.png'
const Navbar = () => {
    return (
        <div>
            <section className="top_bar" style={{ overflowX: "hidden" }} >
                    <div className="nav_section">
                        <nav className="navbar navbar-expand-md">
                            <div className="container">
                                <a className="navbar-brand nav-logo d-flex  justify-content-center" href="index.html">
                                    <img src={nav} alt="" />
                                    <span className="polio">Polio</span> </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav align-items-center gap-md-4 ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item ">
                                            <a className="nav-link active " aria-current="page" href="./index.html">Home</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="./about.html">About</a>
                                        </li>

                                        <li className="nav-item ">
                                            <a className="nav-link" href="./service.html">Services </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="./portfolio.html">Portfolio</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="./blog.html">Blog</a>
                                        </li>
                                    </ul>
                                    <ul className="btn_side d-flex flex-column align-items-center flex-md-row ms-auto gap-4">

                                        <li className="nav-item">

                                            <div className="lets_parent">
                                                <button className="btn btn-secondary lets_btn">
                                                    <a href="./service.html"><span className="snd">Lets Talk</span></a>

                                                </button>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>

                    </div>
                    <div className="nav_border">

                    </div>
                </section>
        </div>
    );
};

export default Navbar;