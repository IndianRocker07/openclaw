"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface StatusData {
  status: string;
  app: string;
  version: string;
  timestamp: string;
}

export default function ControlPanel() {
  const [status, setStatus] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/status")
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch status:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline inline-flex items-center">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">OpenClaw Control Panel</h1>

        <div className="grid gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Gateway Status</h2>
            {loading ? (
              <p className="text-gray-600 dark:text-gray-400">Loading...</p>
            ) : status ? (
              <div className="space-y-2">
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="text-green-600 dark:text-green-400">{status.status}</span>
                </p>
                <p>
                  <strong>App:</strong> {status.app}
                </p>
                <p>
                  <strong>Version:</strong> {status.version}
                </p>
                <p>
                  <strong>Timestamp:</strong> {status.timestamp}
                </p>
              </div>
            ) : (
              <p className="text-red-600 dark:text-red-400">Failed to fetch status</p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Available Channels</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "WhatsApp",
                "Telegram",
                "Discord",
                "Slack",
                "Signal",
                "iMessage",
                "Google Chat",
                "Microsoft Teams",
                "Matrix",
                "Zalo",
                "BlueBubbles",
                "WebChat",
              ].map((channel) => (
                <div
                  key={channel}
                  className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center text-sm"
                >
                  {channel}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Restart Gateway
              </button>
              <button className="w-full p-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                View Logs
              </button>
              <button className="w-full p-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
                Run Diagnostics
              </button>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Note:</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            This is a Next.js-based control panel for OpenClaw. The actual gateway functionality
            continues to run via the CLI and existing services. This web interface provides
            monitoring and control capabilities.
          </p>
        </div>
      </div>
    </div>
  );
}
