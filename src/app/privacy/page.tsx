import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Novara π",
  description: "How Novara π collects, uses, and protects your personal data.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-sans text-xs tracking-widest uppercase text-[#B07040] mb-3">{title}</h2>
      <div className="font-sans text-sm text-neutral-600 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-n-bg min-h-screen pt-32 pb-24 px-5 sm:px-8 md:px-16">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <p className="font-sans text-xs tracking-widest uppercase text-[#B07040] mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-n-dark mb-3">
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-neutral-500 mb-12">
            Last updated: June 2025
          </p>

          <div className="border-t border-neutral-200 pt-10">

            <Section title="Who we are">
              <p>
                Novara π (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a growth and revenue marketing agency
                serving aesthetics clinics, IVF centres, dental practices, and private clinics.
                Our contact email is{" "}
                <a href="mailto:hello@novara.com" className="text-[#B07040] hover:underline">
                  hello@novara.com
                </a>.
              </p>
            </Section>

            <Section title="What data we collect">
              <p>We may collect the following information when you interact with our website or contact us:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name and email address (via enquiry or booking forms)</li>
                <li>Business name and contact number</li>
                <li>Usage data such as pages visited, time on site, and referral source (via analytics)</li>
                <li>Any other information you voluntarily provide</li>
              </ul>
            </Section>

            <Section title="How we use your data">
              <p>We use your data to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond to your enquiries and schedule discovery calls</li>
                <li>Deliver our services to you as a client</li>
                <li>Send relevant marketing updates (only with your consent)</li>
                <li>Improve our website and understand how visitors use it</li>
              </ul>
            </Section>

            <Section title="Legal basis for processing">
              <p>
                We process your personal data under the following legal bases (UK GDPR):
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Consent</strong> — for marketing communications</li>
                <li><strong>Legitimate interests</strong> — for responding to enquiries and improving our services</li>
                <li><strong>Contract</strong> — for delivering services to clients</li>
              </ul>
            </Section>

            <Section title="Data sharing">
              <p>
                We do not sell your personal data. We may share it with trusted third-party tools
                (such as CRM, email, or analytics platforms) strictly to operate our business.
                All third parties are required to handle your data securely and in accordance with
                applicable law.
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                Our website may use cookies and similar tracking technologies to analyse traffic
                and improve your experience. You can control cookie settings through your browser.
              </p>
            </Section>

            <Section title="Data retention">
              <p>
                We retain your personal data only as long as necessary for the purposes outlined
                above, or as required by law.
              </p>
            </Section>

            <Section title="Your rights">
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a href="mailto:hello@novara.com" className="text-[#B07040] hover:underline">
                  hello@novara.com
                </a>.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. The date at the top of this
                page reflects when it was last revised.
              </p>
            </Section>

          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <Link
              href="/"
              className="font-sans text-xs tracking-widest uppercase text-[#B07040] hover:underline"
            >
              ← Back to home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
