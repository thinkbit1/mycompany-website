import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Us</h1>

      <div className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">
        <strong>THINKBiT: Innovating Business Through AI</strong>
        <br /><br />

        <strong>Who We Are</strong> <br />
        THINKBiT is a software solutions company dedicated to helping businesses **automate, optimize, and scale** using AI-powered technology. 
        Our mission is to eliminate mundane manual tasks, enhance operational efficiency, and provide powerful insights that drive business success.
        <br /><br />

        <strong>What We Do</strong> <br />
        ✅ Build AI-Powered SaaS Solutions – We create intelligent, data-driven platforms tailored for industries like transport, logistics, and risk management. <br />
        ✅ Enable Smarter Business Decisions – Our AI tools provide deep analytics and performance tracking for total operational visibility. <br />
        ✅ Automate Repetitive Processes – We replace outdated, manual workflows with seamless automation for **higher productivity and cost savings**. <br /><br />

        <strong>Our Vision</strong> <br />
        🔹 Efficiency at Scale – We envision a world where businesses can **do more with less effort**, using AI to enhance efficiency and decision-making. <br />
        🔹 Transparency & Accountability – We believe in **data-driven decision-making**, ensuring businesses have access to real-time performance insights. <br />
        🔹 Innovation Through AI – We are committed to **pioneering new ways to leverage AI** for automation, predictive analytics, and strategic growth. <br />
        🔹 Customer-Centric Solutions – We prioritize intuitive, easy-to-use systems that solve real business challenges without unnecessary complexity. <br /><br />

        <strong>Why THINKBiT?</strong> <br />
        ✔ AI-Driven Solutions – We leverage artificial intelligence to drive **better, faster, and smarter** decision-making. <br />
        ✔ Industry Expertise – Our team understands the challenges businesses face and builds solutions that **deliver real results**. <br />
        ✔ Scalable & Adaptable – Whether you&apos;re a startup or an enterprise, our technology **grows with your business**. <br /><br />

        <strong>🚀 Join Us in Shaping the Future of Business Automation!</strong> <br />
        Let&apos;s **innovate, automate, and scale together.** <br /><br />

        📩 <strong>Get in touch</strong> to learn more about THINKBiT and our AI-powered solutions.
      </div>

      <Link href="/" className="mt-8 text-blue-600 hover:underline">Back to Home</Link>
    </main>
  );
}

