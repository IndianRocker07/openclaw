import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "OpenClaw",
    version: "2026.2.15",
    timestamp: new Date().toISOString(),
  });
}
