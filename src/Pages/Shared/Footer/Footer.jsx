import footerIm from '../../../assets/images/image2.png';
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-orange-400 text-base-content">
            <nav className="mt-10">
                <div>
                    <div>
                        <input type="email" className="input input-bordered input-md w-96 rounded-2xl" placeholder='Enter Your Email' name="" id="" />
                        <button className="btn rounded-2xl">Subscribe</button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <nav className="mt-20">
                        <header className="footer-title text-4xl lowercase pb-2">pti.</header>
                        <p className="">Copyright&copy;Tripp.All Right Reserved</p>
                    </nav>
                    <nav className="mt-28">
                        <ul className='flex gap-2 justify-end'>
                            <li className='bg-slate-300 p-3 rounded-full cursor-pointer'><a className="link link-hover text-orange-600"><FaGoogle /></a></li>
                            <li className='bg-slate-300 p-3 rounded-full cursor-pointer'><a className="link link-hover text-orange-600"><TiSocialTwitter /></a></li>
                            <li className='bg-slate-300 p-3 rounded-full cursor-pointer'><a className="link link-hover text-orange-600"><SlSocialInstagram /></a></li>
                        </ul>
                    </nav>
                </div>
            </nav>

            <aside>
                <img className="max-w-sm" src={footerIm} alt="footer-image" />
            </aside>
        </footer>
    );
};

export default Footer;