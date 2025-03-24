import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Our Services</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center">
        Explore our cutting-edge SaaS solutions:
      </p>

      <div className="mt-8 space-y-6 max-w-3xl">
        <div className="p-6 rounded-lg border border-gray-300 shadow-md">
          <h2 className="text-2xl font-semibold">FREIGHTRiX</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            <strong>Revolutionizing Transport & Logistics with AI</strong>
            <br /><br />
            At <strong>THINKBiT</strong>, we are redefining the transport and logistics industry with **FREIGHTRiX** – a cutting-edge, AI-powered **Software as a Service (SaaS) platform. 
            Designed for efficiency, automation, and data-driven decision-making**, FREIGHTRiX empowers logistics businesses to **streamline their operations and maximize performance**.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Whether you&apos;re managing a **small fleet** or overseeing a **global logistics operation**, **FREIGHTRiX** provides the intelligent automation and deep insights you need to run a high-performance business.
          </p>

          <h3 className="text-xl font-semibold mt-6">🚀 Transform Your Logistics Today!</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Discover how **FREIGHTRiX** can help your company **operate more efficiently, improve transparency, and reduce costs**.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mt-4">
            📩 <strong>Contact Us</strong> to book a demo or learn more.
          </p>
        </div>
      </div>

      <Link href="/" className="mt-8 text-blue-600 hover:underline">Back to Home</Link>
    </main>
  );
}
