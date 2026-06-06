import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Novara π",
  description: "Terms and conditions governing the use of Novara π services.",
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

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-n-bg min-h-screen pt-32 pb-24 px-5 sm:px-8 md:px-16">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <p className="font-sans text-xs tracking-widest uppercase text-[#B07040] mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-n-dark mb-3">
            Terms of Service
          </h1>
          <p className="font-sans text-sm text-neutral-500 mb-12">
            Last updated: June 2025
          </p>

          <div className="border-t border-neutral-200 pt-10">

            <Section title="Agreement to terms">
              <p>
                By accessing or using the Novara π website and services, you agree to be bound
                by these Terms of Service. If you do not agree, please do not use our website
                or engage our services.
              </p>
            </Section>

            <Section title="Our services">
              <p>
                Novara π provides growth marketing services including paid advertising, SEO and AEO,
                website design and development, and related digital marketing services — primarily
                for aesthetics clinics, IVF centres, dental practices, and private clinics.
              </p>
              <p>
                The specific scope, deliverables, and fees for client engagements are set out in
                individual service agreements or proposals provided to you separately.
              </p>
            </Section>

            <Section title="Use of our website">
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to any part of the website</li>
                <li>Reproduce, duplicate, or copy any content without permission</li>
                <li>Use automated tools to scrape or extract data from the website</li>
              </ul>
            </Section>

            <Section title="Intellectual property">
              <p>
                All content on this website — including text, graphics, logos, and design — is the
                property of Novara π and is protected by applicable intellectual property laws.
                You may not use our content without prior written consent.
              </p>
            </Section>

            <Section title="Client work and deliverables">
              <p>
                Ownership and licensing of creative work, ad assets, and other deliverables produced
                for clients are governed by the terms of the relevant client agreement. In the absence
                of a separate agreement, all deliverables remain the property of Novara π until full
                payment has been received.
              </p>
            </Section>

            <Section title="Results and guarantees">
              <p>
                Marketing results depend on many factors outside our direct control, including market
                conditions, platform algorithms, and client-side variables. While we work hard to
                achieve strong results, we make no guarantees of specific outcomes unless expressly
                stated in a written agreement.
              </p>
            </Section>

            <Section title="Limitation of liability">
              <p>
                To the fullest extent permitted by law, Novara π shall not be liable for any indirect,
                incidental, or consequential damages arising from your use of our website or services.
                Our total liability for any claim shall not exceed the fees paid by you in the three
                months preceding the claim.
              </p>
            </Section>

            <Section title="Governing law">
              <p>
                These Terms are governed by the laws of England and Wales. Any disputes shall be
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </Section>

            <Section title="Changes to these terms">
              <p>
                We may update these Terms from time to time. Continued use of our website after
                changes are published constitutes acceptance of the updated Terms.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                For any questions about these Terms, please contact us at{" "}
                <a href="mailto:hello@novara.com" className="text-[#B07040] hover:underline">
                  hello@novara.com
                </a>.
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
