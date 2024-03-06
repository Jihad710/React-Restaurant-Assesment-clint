
import { Link } from "react-router-dom";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Container = ({ children }) => {
    return (
        <div className='w-[96%] max-w-[1440px] mx-auto'>
            {children}
        </div>
    );
}

const Footer = () => {
    return (
        <footer className='footer_bg_image pt-16 text-white overflow-hidden bg-black'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-5 border-b-2 border-amber-500 jm_container'>
                    <div>
                        <div>
                            <Link onClick={() => window.scrollTo(0, 0)} to='/'>
                                {/* <img src={logo} alt='' width={150} /> */}
                            </Link>
                            <p className="mt-4">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>

                        <ul className='flex gap-2 mt-4'>
                            <li>
                                <a
                                    href='#'
                                    className='bg-[#35878b65] hover:bg-[#53a6aa80] p-2 inline-block text-[#5ce5ec] rounded-full border border-[#35868b] duration-200'
                                >
                                    <FaGoogle />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='bg-[#35878b65] hover:bg-[#53a6aa80] p-2 inline-block text-[#5ce5ec] rounded-full border border-[#35868b] duration-200'
                                >
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='bg-[#35878b65] hover:bg-[#53a6aa80] p-2 inline-block text-[#5ce5ec] rounded-full border border-[#35868b] duration-200'
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='bg-[#35878b65] hover:bg-[#53a6aa80] p-2 inline-block text-[#5ce5ec] rounded-full border border-[#35868b] duration-200'
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-4 sm:mt-0">
                        <h3 className={`text-xl font-bold mb-4`}>Working Days</h3>
                        <ul className='space-y-1'>
                            <li>
                                <Link className='text-[14px] hover:underline'>
                                Monday - Friday 

                                </Link>
                              
                            </li>
                            <li>
                                <Link  className='text-[14px] hover:underline'>
                                Saturday	

                                </Link>
                            </li>
                            <li>
                                <Link  className='text-[14px] hover:underline'>
                                Sunday	
                                </Link>
                            </li>
                           
                        </ul>
                    </div>

                    <div className="mt-4 sm:mt-0">
                        <h3 className={`text-xl font-bold mb-4`}>Working Hour</h3>
                        <ul className='space-y-1'>
                            <li>
                                <Link
                                    
                                    className='text-[14px] hover:underline'
                                >
                                    09:00 - 22:00
                                </Link>
                            </li>
                            <li>
                                <Link
                                    
                                    className='text-[14px] hover:underline'
                                >
                                    09:00 - 22:00
                                </Link>
                            </li>
                            <li>
                                <Link
                                    
                                    className='text-[14px] hover:underline'
                                >
                                    09:00 - 22:00
                                </Link>
                            </li>
                        
                        </ul>
                    </div>

                    <div className="mt-4 sm:mt-0">
                        <h3 className={` text-xl font-bold mb-4`}>Contact Us</h3>
                        <p className='my-3'>
                            <b className='block mb-2'>Office Address: </b> SEL Trident Tower, Suite # 907 (9th Floor), 57, Purana
                            Paltan, (VIP Road), Dhaka - 1000.
                        </p>
                        <p className='my-3'>
                            <b></b> +880 96932323
                        </p>
                        <p className='my-3 '>
                            <b></b> +88 132123123
                        </p>
                        <p className='my-3'>
                            <b>Email: </b> info@chilox.com.bd
                        </p>
                    </div>
                </div>
            </Container>
            <p className='text-center my-5'>Copyright © {new Date().getFullYear()} - All rights reserved by Chilox</p>
        </footer>
    );
};

export default Footer;
