import Link from "next/link";

export default function Docs() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline inline-flex items-center">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">OpenClaw Documentation</h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="mb-4">
              OpenClaw is a personal AI assistant you run on your own devices. It provides a
              multi-channel gateway for interacting with AI assistants through various messaging
              platforms.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm space-y-2">
              <p>$ npm install -g openclaw@latest</p>
              <p>$ openclaw onboard --install-daemon</p>
              <p>$ openclaw gateway --port 18789 --verbose</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Supported Channels</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>WhatsApp (via web provider)</li>
              <li>Telegram</li>
              <li>Discord</li>
              <li>Slack</li>
              <li>Signal</li>
              <li>iMessage</li>
              <li>Google Chat</li>
              <li>Microsoft Teams</li>
              <li>Matrix</li>
              <li>Zalo</li>
              <li>BlueBubbles</li>
              <li>WebChat</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Multi-channel messaging support</li>
              <li>Voice capabilities on macOS/iOS/Android</li>
              <li>Live Canvas rendering</li>
              <li>Extensible plugin system</li>
              <li>OAuth and API key support for models</li>
              <li>Self-hosted and privacy-focused</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.openclaw.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Full Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/openclaw/openclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/clawd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Discord Community
                </a>
              </li>
              <li>
                <a
                  href="https://openclaw.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Official Website
                </a>
              </li>
            </ul>
          </section>

          <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Next.js Integration</h3>
            <p className="text-sm">
              This Next.js application provides a web interface for OpenClaw. The core gateway and
              CLI functionality remains unchanged, while this web app offers a modern React-based UI
              for monitoring and control.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
