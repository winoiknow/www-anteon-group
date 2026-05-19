import { useState } from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    smsConsent: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-fd9224b8/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const error = await response.text();
        console.error('Contact form error:', error);
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '', smsConsent: false });
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
      setErrorMessage('Unable to send message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light tracking-tight mb-4">Contact Us</h1>
            <div className="h-px w-24 mx-auto bg-foreground/20"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm tracking-wide mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm tracking-wide mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm tracking-wide mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm tracking-wide mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-wide mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors resize-none"
                />
              </div>

              {/* SMS Consent — separate opt-in required for 10DLC compliance */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="smsConsent"
                  name="smsConsent"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 shrink-0 border border-border bg-transparent accent-foreground cursor-pointer"
                />
                <label htmlFor="smsConsent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  I consent to receive text (SMS) messages from Anteon Group at the phone number
                  provided above. Message and data rates may apply. Message frequency may vary.
                  Reply <strong className="text-foreground">STOP</strong> to opt out at any time,{' '}
                  <strong className="text-foreground">HELP</strong> for assistance. This consent
                  is not a condition of any service.
                </label>
              </div>
            </div>

            {status === 'success' && (
              <div className="p-4 bg-accent text-center text-sm tracking-wide">
                Thank you for your message. We will be in touch soon.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-destructive/10 text-destructive text-center text-sm tracking-wide">
                {errorMessage}
              </div>
            )}

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-12 py-4 border border-foreground text-sm tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>

            <p className="text-xs text-center text-muted-foreground tracking-wide">
              By submitting this form, you agree to our{' '}
              <Link to="/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </Link>
              . You can opt out at any time by visiting our{' '}
              <Link to="/opt-out" className="underline hover:text-foreground">
                Opt-Out Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
