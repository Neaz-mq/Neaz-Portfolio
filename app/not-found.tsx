import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-ink">404</h1>
        <p className="mt-4 text-ink/60">Page not found.</p>
        <Link href="/" className="mt-6 inline-block text-lime underline">
          Go home
        </Link>
      </div>
    </main>
  );
}
