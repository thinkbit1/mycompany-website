import Link from "next/link";

export default function Pricing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Pricing</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">
      Pricing - Flexible Plans for Every Business

At THINKBiT, we understand that every business has unique needs. That's why we offer a flexible pricing structure that adapts to your company's size, requirements, and level of service needed.

How Our Pricing Works
Small Businesses & Startups - Affordable entry plans designed for growing companies needing essential AI-powered tools.
Mid-Sized Companies - Customized pricing for businesses looking for full-scale automation and deeper analytics.
Enterprises & Large Corporations - Scalable solutions with enterprise-grade features, tailored for global operations.

Join Our Beta Testing Program
We are actively looking for beta testers to trial our AI-powered solutions.
✔ Exclusive Early Access - Get ahead of the competition by using our technology before public release.
✔ Special Discounts - As a beta tester, you'll enjoy discounted pricing on full product rollout.
✔ Direct Feedback Influence - Shape the future of THINKBiT's AI solutions by sharing your feedback.

Earn Commissions Through Our Referral Program
We value partnerships and believe in rewarding our customers for spreading the word.
✔ Refer a Business, Get Paid - When you recommend THINKBiT, you'll earn a commission on every business that signs up through your referral.
✔ No Limits - The more companies you refer, the more you earn!

Contact us today to learn more about pricing, beta testing, and our referral program.
      </p>

      <Link href="/" className="mt-8 text-blue-600 hover:underline">Back to Home</Link>
    </main>
  );
}
