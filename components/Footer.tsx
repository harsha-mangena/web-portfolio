export default function Footer() {
    return (
        <footer className="bg-black text-gray-500 py-12 border-t border-gray-900 text-center text-sm">
            <div className="max-w-6xl mx-auto px-4">
                <p>© {new Date().getFullYear()} Sai Ranga M. All rights reserved.</p>
                <p className="mt-2">Built with Next.js 14, Tailwind CSS, and Framer Motion.</p>
            </div>
        </footer>
    );
}
