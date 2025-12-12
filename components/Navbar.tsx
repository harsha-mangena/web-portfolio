"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Experience', href: '/experience' },
        { name: 'Skills', href: '/skills' },
        { name: 'Projects', href: '/projects' },
        { name: 'Pubs', href: '/publications' }, // Shortened for space
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full z-50 py-4 px-4"
        >
            <div className="max-w-fit mx-auto bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 shadow-sm overflow-x-auto max-w-full">
                <ul className="flex items-center gap-1 sm:gap-6 text-sm font-medium whitespace-nowrap">
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`px-3 py-1.5 rounded-full transition-colors ${isActive
                                            ? "bg-black text-white"
                                            : "text-gray-600 hover:text-black hover:bg-gray-100"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.nav>
    );
}
