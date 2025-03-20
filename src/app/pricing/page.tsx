import Link from "next/link";

export default function Pricing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Pricing</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">
        Get in touch to find out more about our flexible pricing structure.  
        We are looking for **beta testers**, and companies that refer others  
        will receive a commission for each recommendation.
      </p>

      <h3 className="text-xl font-semibold mt-6">💡 How Our Pricing Works</h3>
      <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 text-center">
        <li>💼 <strong>Small Businesses & Startups</strong> – Affordable entry plans designed for growing companies.</li>
        <li>🏢 <strong>Mid-Sized Companies</strong> – Customized pricing for businesses looking for full-scale automation.</li>
        <li>🌍 <strong>Enterprises & Large Corporations</strong> – Scalable solutions with enterprise-grade features.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">🚀 Join Our Beta Testing Program</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
        We are actively looking for **beta testers** to trial our AI-powered solutions.  
        ✔ **Exclusive Early Access** – Get ahead of the competition by using our technology before public release.  
        ✔ **Special Discounts** – As a beta tester, you&apos;ll enjoy discounted pricing on full product rollout.  
        ✔ **Direct Feedback Influence** – Shape the future of THINKBiT&apos;s AI solutions by sharing your feedback.
      </p>

      <h3 className="text-xl font-semibold mt-6">💰 Earn Commissions Through Our Referral Program</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
        We value partnerships and believe in rewarding our customers for spreading the word.  
        ✔ **Refer a Business, Get Paid** – When you recommend THINKBiT, you&apos;ll earn **a commission on every business** that signs up through your referral.  
        ✔ **No Limits** – The more companies you refer, the more you earn!
      </p>

      <p className="text-gray-600 dark:text-gray-300 mt-4 text-center">
        📩 <strong>Contact us today</strong> to learn more about pricing, beta testing, and our referral program.
      </p>

      <Link href="/" className="mt-8 text-blue-600 hover:underline">Back to Home</Link>
    </main>
  );
}
