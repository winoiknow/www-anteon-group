import { Link } from 'react-router';
import Navigation from './Navigation';

export default function OptOutPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light tracking-tight mb-4">Opt-Out Policy</h1>
            <div className="h-px w-24 mx-auto bg-foreground/20"></div>
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Your Right to Opt Out</h2>
              <p>
                Anteon Group respects your privacy and your right to control how we communicate
                with you. You may opt out of text (SMS) messages or request deletion of your
                personal information at any time, for any reason, without consequence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Opting Out of Text Messages</h2>
              <p className="mb-4">
                If you have opted in to receive SMS/text messages from Anteon Group and wish to stop:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-4 mb-4">
                <li>
                  Reply <strong className="text-foreground">STOP</strong> to any text message you
                  receive from us. You will receive a single confirmation message and no further
                  texts will be sent to that number.
                </li>
                <li>
                  Reply <strong className="text-foreground">HELP</strong> to any text message to
                  receive assistance or contact information.
                </li>
                <li>
                  Submit an opt-out request through our{' '}
                  <Link to="/contact" className="text-foreground underline hover:no-underline">
                    contact form
                  </Link>{' '}
                  — include "OPT OUT OF SMS" in your message along with the phone number you wish
                  to remove.
                </li>
              </ul>
              <p className="text-sm">
                Opt-out requests via STOP are effective immediately. Requests via the contact form
                are processed within 1 business day.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Opting Out of All Communications</h2>
              <p className="mb-4">
                To stop all communications from Anteon Group, including email and text:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Submit a request through our{' '}
                  <Link to="/contact" className="text-foreground underline hover:no-underline">
                    contact form
                  </Link>{' '}
                  with "OPT OUT" in your message
                </li>
                <li>Specify which communications or contact information you want removed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Requesting Deletion of Your Data</h2>
              <p className="mb-4">
                To request deletion of the personal information you provided through our contact
                form (name, email address, phone number, company, message):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>
                  Submit a deletion request via our{' '}
                  <Link to="/contact" className="text-foreground underline hover:no-underline">
                    contact form
                  </Link>{' '}
                  — include "DELETE MY DATA" in your message
                </li>
                <li>Provide the name and email address associated with your original inquiry</li>
              </ul>
              <p>
                We will confirm deletion within 10 business days. We may retain limited information
                required by law or for legitimate business purposes such as dispute resolution, but
                we will not use retained information to contact you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Re-Subscribing</h2>
              <p>
                If you have opted out of text messages and wish to re-subscribe, you may reply{' '}
                <strong className="text-foreground">START</strong> to a prior message from us, or
                indicate your consent on a new contact form submission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Message and Data Rates</h2>
              <p>
                Standard message and data rates may apply to any text messages you receive from
                Anteon Group. These charges are determined by your mobile carrier. Anteon Group
                does not charge for sending or receiving text messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">No Sharing of Your Number</h2>
              <p>
                Your phone number is used solely to communicate with you directly. We do not sell,
                share, or transfer your phone number to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Questions</h2>
              <p>
                For questions about this policy or assistance with an opt-out request, please{' '}
                <Link to="/contact" className="text-foreground underline hover:no-underline">
                  contact us
                </Link>
                . We are committed to honoring your preferences promptly.
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
