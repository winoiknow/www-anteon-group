import { Link } from 'react-router';
import Navigation from './Navigation';
import logoSrc from '../../assets/logo.png';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-12">
          <div className="space-y-6">
            <img
              src={logoSrc}
              alt="Anteon Group"
              className="mx-auto w-auto"
              style={{ maxHeight: '260px' }}
            />
            <div className="h-px w-32 mx-auto bg-highlight"></div>
            <p className="text-xl md:text-2xl font-light tracking-wide text-muted-foreground">
              Tailoring Solutions to Unique Problems
            </p>
          </div>

          <div className="pt-8">
            <Link
              to="/contact"
              className="inline-block px-12 py-4 border border-foreground text-sm tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 px-6 py-6 flex justify-center gap-8 text-xs tracking-wide text-muted-foreground">
        <Link to="/privacy" className="hover:text-foreground transition-colors">
          Privacy Policy
        </Link>
        <Link to="/opt-out" className="hover:text-foreground transition-colors">
          Opt-Out Policy
        </Link>
      </footer>
    </div>
  );
}
