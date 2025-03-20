import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Us</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">
      About Us - THINKBiT: Innovating Business Through AI

Who We Are
THINKBiT is a software solutions company dedicated to helping businesses automate, optimize, and scale using AI-powered technology. Our mission is to eliminate mundane manual tasks, enhance operational efficiency, and provide powerful insights that drive business success.

What We Do
Build AI-Powered SaaS Solutions - We create intelligent, data-driven platforms tailored for industries like transport, logistics, and risk management.
Enable Smarter Business Decisions - Our AI tools provide deep analytics and performance tracking for total operational visibility.
Automate Repetitive Processes - We replace outdated, manual workflows with seamless automation for higher productivity and cost savings.

Our Vision
🔹 Efficiency at Scale - We envision a world where businesses can do more with less effort, using AI to enhance efficiency and decision-making.
🔹 Transparency & Accountability - We believe in data-driven decision-making, ensuring businesses have access to real-time performance insights.
🔹 Innovation Through AI - We are committed to pioneering new ways to leverage AI for automation, predictive analytics, and strategic growth.
🔹 Customer-Centric Solutions - We prioritize intuitive, easy-to-use systems that solve real business challenges without unnecessary complexity.

Why THINKBiT?
✔ AI-Driven Solutions - We leverage artificial intelligence to drive better, faster, and smarter decision-making.
✔ Industry Expertise - Our team understands the challenges businesses face and builds solutions that deliver real results.
✔ Scalable & Adaptable - Whether you're a startup or an enterprise, our technology grows with your business.

🔹 Join Us in Shaping the Future of Business Automation!

Let's innovate, automate, and scale together.

Get in touch to learn more about THINKBiT and our AI-powered solutions.
      </p>

      <Link href="/" className="mt-8 text-blue-600 hover:underline">Back to Home</Link>
    </main>
  );
}
