import { Link, useLocation } from 'react-router';
import AtomicLogo from './AtomicLogo';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 relative">
          <AtomicLogo className="w-12 h-12" />
          <div className="flex flex-col leading-none -ml-2">
            <span className="text-2xl" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}>
              Anteon
            </span>
            <span className="text-[10px] tracking-[0.2em] font-light uppercase ml-4 -mt-1">
              GROUP
            </span>
          </div>
        </Link>
        <div className="flex gap-8">
          <Link
            to="/"
            className={`text-sm tracking-wide transition-colors ${
              location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            HOME
          </Link>
          <Link
            to="/contact"
            className={`text-sm tracking-wide transition-colors ${
              location.pathname === '/contact' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
