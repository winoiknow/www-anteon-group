import { Link } from 'react-router';
import Navigation from './Navigation';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light tracking-tight mb-4">Privacy Policy</h1>
            <div className="h-px w-24 mx-auto bg-foreground/20"></div>
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Overview</h2>
              <p>
                Anteon Group ("we," "us," or "our") is committed to protecting your personal
                information. This Privacy Policy explains what information we collect, how we use
                it, and your rights regarding that information. By using our website or contacting
                us, you agree to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Information We Collect</h2>
              <p className="mb-4">
                When you submit our contact form, we collect only the information you voluntarily
                provide:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name (optional)</li>
                <li>Message content</li>
                <li>Your consent preferences, including whether you have opted in to receive text messages</li>
              </ul>
              <p>
                We do not collect information automatically through cookies, analytics trackers,
                or similar technologies beyond what is necessary to serve this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">How We Use Your Information</h2>
              <p className="mb-4">Information you provide is used solely to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiry via email or phone</li>
                <li>Send you text (SMS) messages if you have explicitly opted in to receive them</li>
                <li>Maintain records of communications as required for legitimate business purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Text Messaging (SMS)</h2>
              <p className="mb-4">
                If you provide your phone number and check the SMS consent box on our contact form,
                you agree to receive text messages from Anteon Group at the number provided.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Message frequency may vary based on your inquiry</li>
                <li>Message and data rates may apply</li>
                <li>
                  To stop receiving text messages at any time, reply{' '}
                  <strong className="text-foreground">STOP</strong> to any message we send. You
                  will receive a single confirmation and no further messages will be sent
                </li>
                <li>
                  For help, reply <strong className="text-foreground">HELP</strong> or contact us
                  through the contact form
                </li>
              </ul>
              <p className="text-sm">
                SMS consent is not a condition of any purchase or service. You may withdraw consent
                at any time without consequence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">How We Share Your Information</h2>
              <p className="mb-4">
                We do not sell, rent, or trade your personal information. We do not share your
                information with third parties for their own marketing purposes.
              </p>
              <p className="mb-4 text-foreground font-light">
                Your phone number will never be shared with third parties for marketing purposes.
              </p>
              <p>
                We use Supabase (a cloud infrastructure provider) to process contact form
                submissions and Resend (an email delivery service) to route messages to our inbox.
                These services process your data solely to deliver your message to us and are bound
                by their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Data Retention</h2>
              <p>
                We retain your contact information only as long as necessary to respond to your
                inquiry and for a reasonable period thereafter for potential follow-up. If you
                request deletion of your data, we will remove it from our active systems within
                10 business days, subject to any legal retention obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Data Security</h2>
              <p>
                We implement reasonable technical and administrative safeguards to protect your
                personal information. Contact form data is transmitted over encrypted HTTPS
                connections. No method of transmission over the internet is completely secure;
                we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for text message communications at any time</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us through our{' '}
                <Link to="/contact" className="text-foreground underline hover:no-underline">
                  contact form
                </Link>{' '}
                or review our{' '}
                <Link to="/opt-out" className="text-foreground underline hover:no-underline">
                  Opt-Out Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Children's Privacy</h2>
              <p>
                Our website is not directed to individuals under the age of 18. We do not
                knowingly collect personal information from minors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Any material changes will be
                reflected on this page with a revised effective date. Continued use of our website
                after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Contact</h2>
              <p>
                For privacy-related questions or requests, please reach us through our{' '}
                <Link to="/contact" className="text-foreground underline hover:no-underline">
                  contact form
                </Link>
                .
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-sm">Effective date: May 19, 2026</p>
            </section>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/"
              className="inline-block px-12 py-4 border border-foreground text-sm tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
            >
              RETURN HOME
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
