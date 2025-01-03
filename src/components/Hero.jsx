import { Link } from 'react-router-dom';
import pbn from '../assets/images/primary_btn_img.png'
import hrimg from '../assets/images/hi_right_img.png'
import has from '../assets/images/hero_angle_star_img.png'
import hjbimg from '../assets/images/hi_jhon_right_background_img.png'
const Hero = () => {
    return (
        <div>
            <section className="hero" style={{ overflow: "hidden" }}>
                <div className="container">
                    <div className="row align-items-top">
                        <div className="col-lg-6">
                            <div className="hero_left_side ">
                                <h1 className="hero_heading">
                                    Hi! <span className="wave">👋</span> <br className="d-none d-lg-block" />
                                    Im <span className="element">John Smith</span>
                                </h1>
                                <div className=" borderline pt-4 d-flex align-items-center ">
                                    <p className="border_text"></p>
                                    <p className="visual">Visual Designer</p>
                                </div>
                                <p className="hero_content pt-5">
                                    Im creative designer based with 10 years experience in <br className="d-none d-lg-block" />
                                    New York, and Im very passionate and dedicated to my work.
                                </p>
                                <div className="hero_btn d-flex ">
                                    <button className="btn btn_primary orange_btn">
                                        <a className="clr_white" >
                                            <Link to="/services">Hire Me </Link>
                                            <img src={pbn} alt="" />
                                        </a>
                                    </button>
                                    <button className="btn btn_dark dark_btn">
                                        <a className="clr_white" >
                                            <Link to="/portfolio"> View Portfolio
                                            </Link>
                                        </a>
                                    </button>
                                </div>
                                <h3>Follow Me:</h3>
                                <ul className="hero_social_group d-flex  gap-4 ">
                                    <li>
                                        <a href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M8.67576 7.3349C8.67558 7.68851 8.53446 8.02755 8.28343 8.27746C8.03241 8.52737 7.69204 8.66767 7.33721 8.6675C6.98238 8.66732 6.64216 8.52668 6.39138 8.27652C6.14061 8.02636 5.99982 7.68717 6 7.33357C6.00018 6.97997 6.1413 6.64092 6.39233 6.39101C6.64336 6.1411 6.98372 6.0008 7.33855 6.00098C7.69338 6.00115 8.0336 6.14179 8.28438 6.39195C8.53515 6.64211 8.67594 6.9813 8.67576 7.3349ZM8.7159 9.65477H6.04014V18.001H8.7159V9.65477ZM12.9436 9.65477H10.2812V18.001H12.9168V13.6212C12.9168 11.1814 16.1077 10.9547 16.1077 13.6212V18.001H18.75V12.7146C18.75 8.6015 14.0273 8.75482 12.9168 10.7747L12.9436 9.65477Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M19.6217 7.24292C19.0491 7.49619 18.4419 7.66253 17.8202 7.73642C18.4755 7.3445 18.966 6.72768 19.2002 6.00092C18.5852 6.36692 17.911 6.62342 17.2082 6.76217C16.7362 6.25711 16.1105 5.92214 15.4284 5.80936C14.7464 5.69658 14.0462 5.81229 13.4367 6.13851C12.8272 6.46473 12.3425 6.98318 12.058 7.61327C11.7736 8.24335 11.7053 8.94976 11.8637 9.62267C10.6165 9.56016 9.39647 9.23606 8.28268 8.67142C7.1689 8.10678 6.18631 7.31421 5.39872 6.34517C5.11994 6.82401 4.97344 7.36834 4.97422 7.92242C4.97422 9.00992 5.52772 9.97067 6.36922 10.5332C5.87123 10.5175 5.38419 10.383 4.94872 10.1409V10.1799C4.94887 10.9042 5.1995 11.6061 5.6581 12.1667C6.11671 12.7273 6.75508 13.112 7.46497 13.2557C7.00268 13.3809 6.51795 13.3994 6.04747 13.3097C6.24762 13.9331 6.63772 14.4783 7.16316 14.869C7.6886 15.2597 8.32307 15.4763 8.97772 15.4884C8.32708 15.9994 7.5821 16.3772 6.78538 16.6001C5.98866 16.8229 5.15581 16.8866 4.33447 16.7874C5.76824 17.7095 7.43729 18.199 9.14197 18.1974C14.9117 18.1974 18.067 13.4177 18.067 9.27242C18.067 9.13742 18.0632 9.00092 18.0572 8.86742C18.6714 8.42355 19.2014 7.87369 19.6225 7.24367L19.6217 7.24292Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M12 9.75098C11.4033 9.75098 10.831 9.98803 10.409 10.41C9.98705 10.8319 9.75 11.4042 9.75 12.001C9.75 12.5977 9.98705 13.17 10.409 13.592C10.831 14.0139 11.4033 14.251 12 14.251C12.5967 14.251 13.169 14.0139 13.591 13.592C14.0129 13.17 14.25 12.5977 14.25 12.001C14.25 11.4042 14.0129 10.8319 13.591 10.41C13.169 9.98803 12.5967 9.75098 12 9.75098ZM12 8.25098C12.9946 8.25098 13.9484 8.64606 14.6517 9.34933C15.3549 10.0526 15.75 11.0064 15.75 12.001C15.75 12.9955 15.3549 13.9494 14.6517 14.6526C13.9484 15.3559 12.9946 15.751 12 15.751C11.0054 15.751 10.0516 15.3559 9.34835 14.6526C8.64509 13.9494 8.25 12.9955 8.25 12.001C8.25 11.0064 8.64509 10.0526 9.34835 9.34933C10.0516 8.64606 11.0054 8.25098 12 8.25098ZM16.875 8.06348C16.875 8.31212 16.7762 8.55057 16.6004 8.72639C16.4246 8.9022 16.1861 9.00098 15.9375 9.00098C15.6889 9.00098 15.4504 8.9022 15.2746 8.72639C15.0988 8.55057 15 8.31212 15 8.06348C15 7.81484 15.0988 7.57638 15.2746 7.40056C15.4504 7.22475 15.6889 7.12598 15.9375 7.12598C16.1861 7.12598 16.4246 7.22475 16.6004 7.40056C16.7762 7.57638 16.875 7.81484 16.875 8.06348ZM12 6.00098C10.1445 6.00098 9.8415 6.00623 8.97825 6.04448C8.39025 6.07223 7.99575 6.15098 7.62975 6.29348C7.30425 6.41948 7.0695 6.57023 6.81975 6.82073C6.58501 7.04753 6.40451 7.32441 6.29175 7.63073C6.14925 7.99823 6.0705 8.39198 6.0435 8.97923C6.0045 9.80723 6 10.0967 6 12.001C6 13.8565 6.00525 14.1595 6.0435 15.0227C6.07125 15.61 6.15 16.0052 6.29175 16.3705C6.41925 16.6967 6.56925 16.9315 6.81825 17.1805C7.071 17.4325 7.30575 17.5832 7.62825 17.7077C7.99875 17.851 8.39325 17.9305 8.97825 17.9575C9.80625 17.9965 10.0957 18.001 12 18.001C13.8555 18.001 14.1585 17.9957 15.0217 17.9575C15.6082 17.9297 16.0035 17.851 16.3695 17.7092C16.6943 17.5825 16.9305 17.4317 17.1795 17.1827C17.4323 16.93 17.583 16.6952 17.7075 16.3727C17.85 16.003 17.9295 15.6077 17.9565 15.0227C17.9955 14.1947 18 13.9052 18 12.001C18 10.1455 17.9947 9.84248 17.9565 8.97923C17.9287 8.39273 17.85 7.99673 17.7075 7.63073C17.5945 7.32473 17.4143 7.04795 17.1802 6.82073C16.9535 6.58586 16.6766 6.40535 16.3702 6.29273C16.0027 6.15023 15.6082 6.07148 15.0217 6.04448C14.1937 6.00548 13.9043 6.00098 12 6.00098ZM12 4.50098C14.0378 4.50098 14.292 4.50848 15.0915 4.54598C15.8902 4.58348 16.434 4.70873 16.9125 4.89473C17.4075 5.08523 17.8245 5.34323 18.2415 5.75948C18.6229 6.1344 18.918 6.58792 19.1063 7.08848C19.2915 7.56623 19.4175 8.11073 19.455 8.90948C19.4903 9.70898 19.5 9.96323 19.5 12.001C19.5 14.0387 19.4925 14.293 19.455 15.0925C19.4175 15.8912 19.2915 16.435 19.1063 16.9135C18.9185 17.4143 18.6233 17.8679 18.2415 18.2425C17.8665 18.6237 17.413 18.9188 16.9125 19.1072C16.4347 19.2925 15.8902 19.4185 15.0915 19.456C14.292 19.4912 14.0378 19.501 12 19.501C9.96225 19.501 9.708 19.4935 8.9085 19.456C8.10975 19.4185 7.566 19.2925 7.0875 19.1072C6.58674 18.9193 6.13315 18.6242 5.7585 18.2425C5.37705 17.8676 5.08195 17.4141 4.89375 16.9135C4.70775 16.4357 4.5825 15.8912 4.545 15.0925C4.50975 14.293 4.5 14.0387 4.5 12.001C4.5 9.96323 4.5075 9.70898 4.545 8.90948C4.5825 8.10998 4.70775 7.56698 4.89375 7.08848C5.08143 6.58761 5.3766 6.13397 5.7585 5.75948C6.13325 5.3779 6.58682 5.08277 7.0875 4.89473C7.566 4.70873 8.109 4.58348 8.9085 4.54598C9.708 4.51073 9.96225 4.50098 12 4.50098Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="hero_right_side">
                                <img className="img-fluid" src={hrimg} alt="" />
                                <img className="right_element d-none d-lg-block" src={hjbimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="marquee_parent">
                    <div className="marqueeContainer">
                        <div className="marquee d-flex flex-nowrap gap-5">
                            <div className="marque_items d-flex flex-shrink-0 justify-content-between gap-5">
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Discover</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Discover</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Discover</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Discover</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Discover</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Discover</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Discover</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Discover</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Develop</p>
                                </div>
                            </div>

                            <div className="marque_items d-flex flex-shrink-0 justify-content-between gap-5">
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src={has} alt="Star" />
                                    <p>Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Hero;