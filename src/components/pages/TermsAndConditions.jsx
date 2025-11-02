import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-10 border border-gray-100">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center font-sans">
          Terms & Conditions
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
            Welcome to <span className="font-medium text-gray-800">BrickMason</span>! 
            By accessing or using our website, services, or platform, you agree to comply 
            with and be bound by the following Terms and Conditions. Please read them 
            carefully before using our services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Services Overview
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            BrickMason is a digital platform that connects property owners with 
            verified construction professionals. We facilitate transparent project 
            estimation, contract management, and progress tracking but do not directly 
            undertake construction work.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed font-light space-y-2">
            <li>Provide accurate and updated project and contact information.</li>
            <li>Comply with all legal and regulatory requirements applicable to the project.</li>
            <li>Refrain from misuse of the platform for fraudulent or misleading activities.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Payments and Refunds
          </h2>
          <p className="text-gray-600 leading-relaxed font-light mb-3">
            Payments for construction or design services are to be made as per 
            the mutually agreed schedule between the client and the assigned contractor. 
            BrickMason acts as a facilitator for safe payment flow and dispute resolution.
          </p>
          <p className="text-gray-600 leading-relaxed font-light">
            Refunds, if applicable, will follow the policies specified in individual 
            agreements or project contracts.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            All content, designs, logos, and trademarks displayed on this website 
            are the exclusive property of BrickMason unless otherwise stated. 
            Unauthorized copying or redistribution is strictly prohibited.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            BrickMason shall not be held liable for any indirect, incidental, or 
            consequential damages arising from the use or inability to use our services. 
            Our role is limited to facilitating connections between clients and 
            service providers.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Dispute Resolution
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            Any disputes related to projects, payments, or quality shall be 
            resolved in accordance with the contract terms agreed upon between 
            the client and the service provider. BrickMason may assist in 
            mediation but is not the final adjudicating body.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            We may modify these Terms periodically to reflect changes in our 
            business model or legal obligations. The latest version will always 
            be available on this page, and your continued use of our services 
            signifies acceptance of the updated terms.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Contact Information
          </h2>
          <p className="text-gray-600 leading-relaxed font-light">
            For any queries regarding these Terms and Conditions, please contact us at: <br />
            <span className="font-medium text-gray-800">
            brickmasonconstructions@gmail.com
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
