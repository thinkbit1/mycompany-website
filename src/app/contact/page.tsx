import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        (Please follow us on our social media pages - Further information coming soon)
      </p>

      <Link href="/" className="mt-8 text-blue-600 hover:underline">Back to Home</Link>
    </main>
  );
}
