import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Cancellation & Refund Policy
      </h1>
      <p className="mb-6">
        This Cancellation & Refund Policy (“Policy”) outlines the procedures and conditions under which cancellations and refunds are handled by <strong>BrickMason.in</strong>. By availing our services, you agree to the terms set out below.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-900">
        1. Cancellation by Customer
      </h2>
      <p className="mb-4">
        You may request to cancel your booking or project before the construction phase begins. However, certain charges may apply depending on the stage of work and resources allocated to your project. 
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Cancellations made within 3 days of booking — <strong>100% refund</strong> of the booking amount.</li>
        <li>Cancellations made after 3 days but before design finalization — <strong>10% deduction</strong> from the booking amount.</li>
        <li>Cancellations made after design approval or site mobilization — refund will be made <strong>after deducting applicable design and mobilization charges</strong>.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-900">
        2. Cancellation by BrickMason
      </h2>
      <p className="mb-4">
        BrickMason reserves the right to cancel or postpone a project in exceptional situations, such as lack of client approvals, legal restrictions, or unavoidable technical issues. In such cases, the client will receive a <strong>full refund of the unutilized amount</strong> within 15–30 business days.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-900">
        3. Refund Process
      </h2>
      <p className="mb-4">
        All eligible refunds will be processed through the same payment method used during booking. Refunds are typically credited to the customer's account within <strong>10–30 business days</strong> after approval.
      </p>
      <p className="mb-4">
        Please note that no <strong>cash refunds</strong> are made under any circumstances.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-900">
        4. Non-Refundable Charges
      </h2>
      <p className="mb-4">
        Certain charges are non-refundable, including:
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Design consultation and architect fees once design work has started.</li>
        <li>Site inspection or material testing costs already incurred.</li>
        <li>Government fees, taxes, or third-party charges (e.g., liaisoning, approvals).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-900">
        5. Changes to Project Scope
      </h2>
      <p className="mb-4">
        Any modifications requested after signing the contract may affect the project timeline and cost. Refunds in such cases will be adjusted as per the revised agreement mutually decided between the client and BrickMason.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-900">
        6. Contact Information
      </h2>
      <p>
        For any cancellation or refund-related queries, please reach out to our support team at:  
        <strong>brickmasonconstructions@gmail.com</strong>
      </p>
      <p className="mt-2">
        We’re here to help ensure a transparent and smooth experience throughout your construction journey.
      </p>
    </div>
  );
};

export default CancellationPolicy;
