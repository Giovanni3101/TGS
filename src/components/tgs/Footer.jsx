import { FacebookFilled } from "@ant-design/icons";
import { Facebook, Linkedin, Instagram } from 'lucide-react'
import { URLS } from '../../utils/urls'
import { HashLink } from 'react-router-hash-link'

function Footer() {
    return (
        <footer className="footer bg-sky-900 text-white p-10 mb-10 md:max-w-7xl rounded-3xl">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">TGS</h3>
                        <p className="text-sky-200">THE GROWTH SPHERE</p>
                        <p className="text-sky-200 mt-2">Empowering youth beyond borders</p>
                    </div>

                    <div>
                        <h4 className="footer-title">Quick Links</h4>
                        <div className="flex flex-col space-y-2">
                            <a href="/about" className="link link-hover text-sky-200">About</a>
                            <HashLink to="home#services" className="link link-hover text-sky-200">Services</HashLink>
                            <a href={`${URLS.tgsAcademyUrl}/opportunities`} className="link link-hover text-sky-200">Opportunities</a>
                            <a href={`${URLS.tgsAcademyUrl}`} className="link link-hover text-sky-200">TGS Academy</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-title">Connect</h4>
                        <a href="/contact" className="link link-hover text-sky-200">Contact Us</a>
                        <div className="flex gap-4 mt-2">
                            <a href="https://www.facebook.com/people/The-Growth-Sphere-TGS-En/61581261688760" className="text-sky-200 hover:text-white">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/company/the-growth-sphere-tgs" className="text-sky-200 hover:text-white">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/tgs2.025?igsh=YXdvcDNjemJlMnFu" className="text-sky-200 hover:text-white">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-title">Legal</h4>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="link link-hover text-sky-200">Terms of use</a>
                            <a href="#" className="link link-hover text-sky-200">Privacy policy</a>
                            <a href="#" className="link link-hover text-sky-200">Cookie policy</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-sky-700 mt-8 pt-8 text-center">
                    <p className="text-sky-200">
                        &copy; {new Date().getFullYear()} Powered by <a className="text-white" href="https://gitutechnology.onrender.com" target="_blank"> GITU Technology</a>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;