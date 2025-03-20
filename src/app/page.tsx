import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Welcome to <span className="text-blue-600">THINKBiT</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Your Trusted Software Solutions Provider, Innovating with AI-Powered Insights.
        </p>
      </div>

      {/* Logo - Large & High Quality */}
      <div className="mt-8">
        <Image
          className="relative"
          src="/logo.png"
          alt="THINKBiT Logo"
          width={400}
          height={100}
          priority
        />
      </div>

      {/* Navigation Section */}
      <div className="mt-12 grid text-center lg:w-full lg:max-w-6xl lg:grid-cols-4 lg:text-left">
        {/* Our Services */}
        <Link href="/services">
          <div className="group cursor-pointer rounded-lg border border-transparent px-6 py-5 transition hover:border-blue-500 hover:bg-gray-100 hover:dark:border-blue-400 hover:dark:bg-neutral-800">
            <h2 className="text-2xl font-semibold">Our Services</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Discover our flagship SaaS system:  
              <strong> FREIGHTRiX</strong> - Transport & Logistics SaaS
            </p>
          </div>
        </Link>

        {/* About Us */}
        <Link href="/about">
          <div className="group cursor-pointer rounded-lg border border-transparent px-6 py-5 transition hover:border-blue-500 hover:bg-gray-100 hover:dark:border-blue-400 hover:dark:bg-neutral-800">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Learn about THINKBiT and how we help businesses streamline operations with AI-driven automation.
            </p>
          </div>
        </Link>

        {/* Contact Us */}
        <Link href="/contact">
          <div className="group cursor-pointer rounded-lg border border-transparent px-6 py-5 transition hover:border-blue-500 hover:bg-gray-100 hover:dark:border-blue-400 hover:dark:bg-neutral-800">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Get in touch with us for inquiries, partnerships, or support.
            </p>
          </div>
        </Link>

        {/* Pricing */}
        <Link href="/pricing">
          <div className="group cursor-pointer rounded-lg border border-transparent px-6 py-5 transition hover:border-blue-500 hover:bg-gray-100 hover:dark:border-blue-400 hover:dark:bg-neutral-800">
            <h2 className="text-2xl font-semibold">Pricing</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Get in touch to learn about our flexible pricing. We offer commissions for referrals!
            </p>
          </div>
        </Link>
      </div>

      {/* Login Section */}
      <div className="mt-12 text-center">
        <Link href="/login">
          <div className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg cursor-pointer hover:bg-blue-700">
            Login to Your Account
          </div>
        </Link>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Access your THINKBiT SaaS systems, including <strong>FREIGHTRiX</strong>.
        </p>
      </div>
    </main>
  );
}
