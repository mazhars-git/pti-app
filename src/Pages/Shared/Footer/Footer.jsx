import footerIm from '../../../assets/images/image2.png';
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-orange-400 text-base-content">            
            <nav className="mt-10">
                <div>
                    <header>
                        <input type="email" className="input input-bordered input-md w-96" placeholder='Enter Your Email' name="" id="" />
                        <button className="btn btn-rounded">Subscribe</button>
                    </header>
                    
                </div>
                
                
                <div className="grid grid-cols-2">
                    <nav className="mt-20">
                        <header className="footer-title text-4xl lowercase">pti.</header>
                        <p className="">Copyright&copy;Tripp.All Right Reserved</p>
                    </nav>
                    <nav className="mt-24">
                        <ul className='flex gap-2'>
                            <li><a className="link link-hover"><SlSocialGoogle /></a></li>
                            <li><a className="link link-hover"><TiSocialTwitter /></a></li>
                            <li><a className="link link-hover"><SlSocialInstagram /></a></li>
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