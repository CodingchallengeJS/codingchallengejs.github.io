
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-deep-blue/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center justify-between w-full max-w-4xl shadow-2xl"
      >
        <Link to="/" className="flex items-center gap-3 group">
          <span className="h-10 w-10 overflow-hidden rounded-full border border-snow/30 transition-colors group-hover:border-snow">
            <img 
              src="https://res.cloudinary.com/dflrkkdvt/image/upload/v1774880724/chibi1_nyt0pv.webp" 
              alt="Avatar" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </span>
          <span className="text-snow font-bold text-lg tracking-tight">Azaylibelz</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-snow ${location.pathname === '/' ? 'text-snow' : 'text-gray-400'}`}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className={`text-sm font-medium transition-colors hover:text-snow ${location.pathname === '/blog' ? 'text-snow' : 'text-gray-400'}`}
          >
            Blog
          </Link>
          <Link 
            to="/projects" 
            className={`text-sm font-medium transition-colors hover:text-snow ${location.pathname === '/projects' ? 'text-snow' : 'text-gray-400'}`}
          >
            Projects
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
