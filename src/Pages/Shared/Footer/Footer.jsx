import footerIm from '../../../assets/images/image2.png';
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGoogle, FaLongArrowAltRight } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-amber-500">
            <div className="max-w-screen-lg mx-auto footer p-10 text-base-content">
                <nav className="mt-10">
                    <div>
                        <div>
                            <input type="email" className="input input-bordered input-md w-96 rounded-2xl input-sub" placeholder='Enter Your Email' name="" id="" />
                            <button className="btn-subscribe"><span className='mr-1'>Subscribe</span><FaLongArrowAltRight /></button>
                        </div>
                    </div>

                    <div className="hero-content grid grid-cols-2 gap-2">
                        <nav className="mt-20">
                            <header className="footer-title text-4xl lowercase pb-2 text-black">pti<span className='text-orange-600'>.</span></header>
                            <p className="font-semibold text-md">Copyright&copy;Tripp.All Right Reserved</p>
                        </nav>
                        <nav className="mt-28">
                            <ul className='flex gap-2 justify-end'>
                                <li className='bg-slate-200 p-3 rounded-full cursor-pointer'><a className="link link-hover text-orange-500"><FaGoogle /></a></li>
                                <li className='bg-slate-200 p-3 rounded-full cursor-pointer'><a className="link link-hover text-orange-500"><TiSocialTwitter /></a></li>
                                <li className='bg-slate-200 p-3 rounded-full cursor-pointer'><a className="link link-hover text-orange-500"><SlSocialInstagram /></a></li>
                            </ul>
                        </nav>
                    </div>
                </nav>

                <aside>
                    <img className="max-w-sm" src={footerIm} alt="footer-image" />
                </aside>
            </div>
        </footer>
    );
};

export default Footer;