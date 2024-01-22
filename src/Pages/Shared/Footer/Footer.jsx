import footerIm from '../../../assets/images/image2.png';
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGoogle, FaLongArrowAltRight } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-amber-500 rounded-b-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 md:pl-0 max-w-screen-lg mx-auto text-base-content">
                <div className="mt-10">
                    <div className="w-full">
                        <div className="wrapper">
                            <input type="email" className="input input-bordered input-md w-96 rounded-2xl input-sub" placeholder='Enter Your Email' name="" id="" />
                            <button className="btn-subscribe"><span className='mr-1'>Subscribe</span><FaLongArrowAltRight /></button>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row gap-5">
                        <div className="mt-5 md:mt-20 text-center md:text-left">
                            <h1 className="footer-title text-4xl lowercase pb-2 text-black font-bold">pti<span className='text-orange-600'>.</span></h1>
                            <p className="font-semibold text-[10px] md:text-sm">Copyright&copy;Tripp.All Right Reserved</p>
                        </div>
                        <div className="mt-10 md:mt-28">
                            <ul className='flex justify-center md:justify-end gap-2'>
                                <li className='bg-slate-200 p-3 rounded-full cursor-pointer'><a className="link link-hover text-orange-500"><FaGoogle /></a></li>
                                <li className='bg-slate-200 p-3 rounded-full cursor-pointer'><a className="link link-hover text-orange-500"><TiSocialTwitter /></a></li>
                                <li className='bg-slate-200 p-3 rounded-full cursor-pointer'><a className="link link-hover text-orange-500"><SlSocialInstagram /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='hidden md:flex justify-end'>
                    <img className="w-auto md:w-96" src={footerIm} alt="footer-image" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;