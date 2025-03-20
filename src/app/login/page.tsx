import Image from "next/image";

export default function Login() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12">
      <Image src="/logo.png" alt="THINKBiT Logo" width={250} height={100} />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-4">Login</h1>

      <div className="mt-8 w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </div>
    </main>
  );
}
