import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-10 border border-gray-100">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center font-sans">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-500 mb-10 text-sm">
          Last updated: November 2025
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-sans">
            1. Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            BrickMason (“we”, “our”, or “us”) values your privacy and is committed
            to protecting your personal information. This Privacy Policy describes
            how we collect, use, and safeguard information obtained through our
            website, mobile application, and related services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed font-light mb-3">
            We collect personal and non-personal information to provide better
            service experiences. The types of information include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed font-light space-y-2">
            <li>
              <span className="font-medium text-gray-800">Personal Information:</span> 
              Name, email address, phone number, and project details you submit.
            </li>
            <li>
              <span className="font-medium text-gray-800">Usage Data:</span> 
              Browser type, device information, IP address, and pages visited.
            </li>
            <li>
              <span className="font-medium text-gray-800">Cookies & Tracking:</span> 
              We use cookies to improve site functionality and analyze usage trends.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed font-light space-y-2">
            <li>To deliver construction services and facilitate communication.</li>
            <li>To personalize user experience and improve our website.</li>
            <li>To send project updates, offers, or important notices.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Information Sharing & Disclosure
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            We do not sell or rent your personal information. Data may be shared
            only with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed font-light space-y-2 mt-3">
            <li>Trusted service providers assisting in operations.</li>
            <li>Legal authorities when required by law.</li>
            <li>Business partners involved in project execution (with your consent).</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Data Security
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            We use industry-standard encryption, secure servers, and restricted
            data access policies to protect your personal information. While we
            strive to ensure security, no system is completely immune to risks.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Your Rights
          </h2>
          <p className="text-gray-600 leading-relaxed font-light mb-3">
            Depending on your location, you may have rights to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed font-light space-y-2">
            <li>Access and review the personal data we hold about you.</li>
            <li>Request correction or deletion of inaccurate information.</li>
            <li>Withdraw consent for data processing where applicable.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Third-Party Links
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            Our website may include links to third-party websites. We are not
            responsible for the privacy practices or content of such external
            sites. We encourage you to review their policies before engaging with
            them.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Updates to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            We may update this Privacy Policy periodically to reflect changes in
            our operations or legal requirements. Any updates will be posted on
            this page with a revised effective date.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            For any privacy-related questions or requests, contact us at: <br />
            <span className="font-medium text-gray-800">
            brickmasonconstructions@gmail.com
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
