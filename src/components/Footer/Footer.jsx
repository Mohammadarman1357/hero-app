import React from 'react';
import logoImg from '../../assets/logo.png';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <div className='bg-[#001931] py-8 px-15 inter-font'>
            <div className='flex justify-between items-center'>
                <span className='flex items-center'>
                    <img className='w-10 h-10' src={logoImg} alt="" />
                    <h1 className='text-white text-xl font-bold ml-2'>HERO.IO</h1>
                </span>

                <span className='text-white'>
                    <h1 className='font-medium text-xl'>Social Links</h1>
                    <span className='flex gap-4 '>
                        <Twitter />
                        <Linkedin />
                        <Facebook />
                    </span>
                </span>
            </div>

            <footer className="footer sm:footer-horizontal text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            <hr className='border-[#E5E7EB] my-4' />
            <p className='text-center text-[#FAFAFA]'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;