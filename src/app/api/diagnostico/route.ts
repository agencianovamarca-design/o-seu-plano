import { NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwSWDV-rRQX3zoPTciJ86PmWBDezm3PQYbpjJmo8V2N8ULMH3NA3QsT4ECDbSfHGDA9/exec";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || GOOGLE_SHEET_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          nome: data.nome,
          wa: data.wa,
          nicho: data.nicho,
          cidade: data.cidade,
          email: data.email,
          redes: data.redes,
          site: data.site,
          gmn: data.gmn,
          dores: Array.isArray(data.dores) ? data.dores.join(", ") : "",
          urgencia: data.urgencia,
          budget: data.budget,
          origem: data.origem,
        }),
      }).catch((err) => console.error("[diagnostico] sheets webhook error:", err));
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
