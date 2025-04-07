import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h1>

      <div className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center">
        <p>If you have any questions, would like to schedule a demo, or want to learn more about our solutions, feel free to reach out to us:</p>
        
        <p className="mt-6 font-semibold">
          📧 Email: <a href="mailto:thinkbitsystems@gmail.com" className="text-blue-600 hover:underline">thinkbitsystems@gmail.com</a>
        </p>
      </div>

      <Link href="/" className="mt-10 text-blue-600 hover:underline">Back to Home</Link>
    </main>
  );
}
