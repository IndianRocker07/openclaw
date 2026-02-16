import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">🦞 OpenClaw - Personal AI Assistant</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Multi-channel AI gateway with extensible messaging integrations
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/control"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">Control Panel</h2>
            <p className="text-gray-600 dark:text-gray-400">Access the gateway control interface</p>
          </Link>

          <Link
            href="/api/status"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">API Status</h2>
            <p className="text-gray-600 dark:text-gray-400">Check the gateway API status</p>
          </Link>

          <Link
            href="/docs"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">Documentation</h2>
            <p className="text-gray-600 dark:text-gray-400">View documentation and guides</p>
          </Link>
        </div>

        <section className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <div className="space-y-2 font-mono text-sm">
            <p>
              <span className="text-gray-600 dark:text-gray-400">$ </span>
              openclaw onboard --install-daemon
            </p>
            <p>
              <span className="text-gray-600 dark:text-gray-400">$ </span>
              openclaw gateway --port 18789 --verbose
            </p>
            <p>
              <span className="text-gray-600 dark:text-gray-400">$ </span>
              openclaw message send --to +1234567890 --message "Hello from OpenClaw"
            </p>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>
            <strong>EXFOLIATE! EXFOLIATE!</strong>
          </p>
          <p className="mt-2">
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
            {" · "}
            <a
              href="https://docs.openclaw.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Documentation
            </a>
            {" · "}
            <a
              href="https://discord.gg/clawd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Discord
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
