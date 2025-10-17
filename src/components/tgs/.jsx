import { useState } from 'react';
import gitu from '../../assets/images/tgs_logo_one-removebg-preview.png';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState({});

    const NavItems = [
        { name: 'Home', path: '/home' },
        {
            name: 'About',
            path: '/about',
            submenu: [
                { name: 'Our Mission, vision & values', href: '/our_mission' },
                { name: 'Our story', href: '/our_story' },
                {
                    name: 'Our team',
                    href: '/our_team',
                    submenu: [
                        { name: 'Board', href: '/board' },
                        { name: 'Ambassadors', href: '/ambassadors' },
                    ]
                },
                { name: 'Get in touch', href: '/contact' },
            ]
        },
        { name: 'Opportunities', path: '/opportunities' },
        { name: 'News', path: '/news' },
    ]

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {
            setOpenMenus({});
        }
    };

    const toggleSubMenu = (menuName, level = 0) => {
        setOpenMenus(prev => ({
            ...prev,
            [menuName]: !prev[menuName]
        }));
    };

    const isMenuOpen = (menuName) => {
        return openMenus[menuName];
    };

    // Composant récursif pour les sous-menus mobile
    const renderMenuItem = (item, level = 0) => {
        const hasSubmenu = item.submenu && item.submenu.length > 0;
        const isOpen = isMenuOpen(item.name);

        return (
            <div key={item.name}>
                {hasSubmenu ? (
                    <div>
                        <button
                            onClick={() => toggleSubMenu(item.name, level)}
                            className={`flex justify-between items-center w-full px-4 py-3 text-left hover:bg-sky-800 rounded-lg ${level > 0 ? 'text-sky-200' : 'text-white'
                                }`}
                        >
                            <span>{item.name}</span>
                            <span>
                                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </span>
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="ml-4 mt-2 space-y-1"
                                >
                                    {item.submenu.map((subItem) => renderMenuItem(subItem, level + 1))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <a
                        href={item.href || item.path}
                        className={`block px-4 py-3 hover:bg-sky-800 rounded-lg ${level > 0 ? 'text-sky-200 hover:text-white' : 'text-white'
                            }`}
                        onClick={toggleMenu}
                    >
                        {item.name}
                    </a>
                )}
            </div>
        );
    };

    // Composant pour les sous-menus desktop - version hover uniquement
    const DesktopSubMenu = ({ items, level = 0 }) => {
        return (
            <div className={`absolute top- left-0 hidden group-hover:block bg-white/90 bg-transparent shadow-lg py-2 ${level > 0 ? 'ml-50 mt-[-3rem]' : ''
                } min-w-[200px] z-50`}>
                {items.map((item, index) => (
                    <div key={index} className="relative group">
                        {item.submenu ? (
                            <>
                                <div className="flex justify-center items-center px-4 py-2 text-sky-950 hover:text-sky-600 hover:bg-sky-50 cursor-pointer">
                                    <span>{item.name}</span>
                                    <ChevronRight size={16} className='justify-end'/>
                                </div>
                                <DesktopSubMenu items={item.submenu} level={level + 1} />
                            </>
                        ) : (
                            <a
                                href={item.href || item.path}
                                className="hidden group-hover:block px-4 py-2 text-sky-950 hover:text-sky-600 hover:bg-sky-50"
                            >
                                {item.name}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    // Composant récursif pour le menu desktop - version hover uniquement
    const renderDesktopMenuItem = (item, index) => {
        const hasSubmenu = item.submenu && item.submenu.length > 0;

        return (
            <li key={index} className="text-sky-950 hover:text-sky-600 relative group w-full">
                {hasSubmenu ? (
                    <>
                        <div className="flex items-center cursor-pointer">
                            <span className="block py-2 md:inline-block px-4">
                                {item.name}
                            </span>
                            <ChevronDown size={16} className="ml-auto" />
                        </div>
                        <DesktopSubMenu items={item.submenu} />
                    </>
                ) : (
                    <motion.a
                        href={item.path}
                        whileHover={{ scale: 1.1 }}
                        className="block py-2 md:inline-block px-4 cursor-pointer"
                    >
                        {item.name}
                    </motion.a>
                )}
            </li>
        );
    };

    return (
        <header className="fixed z-50 rounded-full md:w-[65%] w-[95%] bg-white/90 shadow-md px-6 py-3 md:m-4 m-3">
            <div className='max-w-7xl'>
                <div className='flex items-center justify-between mx-auto h-14 w-full'>
                    {/* Logo */}
                    <div>
                        <img src={gitu} alt="Logo" className="h-16 w-[100px] md:h-[100px] md:w-[100px] object-contain" />
                    </div>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center space-x-2">
                        <ul className="md:flex md:space-x-0 md:w-auto md:bg-transparent md:text-center w-full">
                            {NavItems.map((item, index) => renderDesktopMenuItem(item, index))}
                        </ul>
                        <div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-teal-900 text-white w-[150px] py-4 rounded-full hover:bg-sky-600 md:ml-[1rem]"
                            >
                                TGS ACADEMY
                            </motion.button>
                        </div>
                    </nav>

                    {/* Bouton Menu Mobile */}
                    <div className="md:hidden flex justify-end w-full px-4">
                        <button
                            className="text-sky-950 focus:outline-none z-60"
                            onClick={toggleMenu}
                            aria-label="Ouvrir le menu"
                        >
                            {menuOpen ? (
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 180 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <X className="h-8 w-8" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Menu className="h-8 w-8" />
                                </motion.div>
                            )}
                        </button>
                    </div>

                    {/* Menu Mobile */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: '100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '100%' }}
                                transition={{ duration: 0.3 }}
                                className="fixed md:hidden top-0 left-0 w-full h-full bg-sky-950 z-50 overflow-y-auto"
                            >
                                {/* Header du menu mobile avec bouton fermer en haut */}
                                <div className="flex justify-between items-center p-4 border-b border-sky-700">
                                    <img src={gitu} alt="Logo" className="h-12 w-auto object-contain" />
                                    <button
                                        onClick={toggleMenu}
                                        className="text-white p-2"
                                        aria-label="Fermer le menu"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* Contenu du menu mobile */}
                                <div className="p-4">
                                    <ul className="space-y-2">
                                        {NavItems.map((item) => renderMenuItem(item))}
                                    </ul>

                                    {/* Boutons */}
                                    <div className="flex flex-col items-center space-y-4 mt-6">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-sky-400 text-white w-full max-w-xs py-3 rounded-full hover:bg-teal-700 font-semibold"
                                            onClick={toggleMenu}
                                        >
                                            TGS ACADEMY
                                        </motion.button>
                                    </div>

                                    {/* Footer */}
                                    <div className="absolute bottom-4 left-0 w-full flex justify-center">
                                        <span className="text-gray-300 text-xs border-t border-gray-300 pt-4 px-4">
                                            Powered by gitu technology.
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}

export default Navbar;