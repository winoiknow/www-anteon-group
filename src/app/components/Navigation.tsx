import { Link, useLocation } from 'react-router';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-light tracking-wide">
          ANTEON GROUP
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
