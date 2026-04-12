import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../components/Logo/Logo";

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-white py-12 px-4 text-secondary rounded-3xl mx-4 my-8">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                {/* Logo and Tagline */}
                <div className="mb-8 max-w-lg">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <Logo />
                    </div>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Divider Line */}
                <div className="w-full border-t border-dashed border-gray-700 my-6"></div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium mb-6">
                    <a href="#" className="hover:text-[#a3e635] transition-colors">Services</a>
                    <a href="#" className="hover:text-[#a3e635] transition-colors">Coverage</a>
                    <a href="#" className="hover:text-[#a3e635] transition-colors">About Us</a>
                    <a href="#" className="hover:text-[#a3e635] transition-colors">Pricing</a>
                    <a href="#" className="hover:text-[#a3e635] transition-colors">Blog</a>
                    <a href="#" className="hover:text-[#a3e635] transition-colors">Contact</a>
                </nav>

                {/* Divider Line */}
                <div className="w-full border-t border-dashed border-gray-700 my-6"></div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <a href="#" className="bg-[#0077b5] p-2 rounded-full hover:scale-110 transition-transform">
                        <FaLinkedinIn size={18} />
                    </a>
                    <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform">
                        <FaXTwitter size={18} />
                    </a>
                    <a href="#" className="bg-[#1877f2] p-2 rounded-full hover:scale-110 transition-transform">
                        <FaFacebookF size={18} />
                    </a>
                    <a href="#" className="bg-[#ff0000] p-2 rounded-full hover:scale-110 transition-transform">
                        <FaYoutube size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;