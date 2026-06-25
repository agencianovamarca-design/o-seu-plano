const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwSWDV-rRQX3zoPTciJ86PmWBDezm3PQYbpjJmo8V2N8ULMH3NA3QsT4ECDbSfHGDA9/exec";

export async function saveLead(data: {
  nome: string;
  whatsapp: string;
  email?: string;
  origem: string;
  assunto?: string;
  mensagem?: string;
}) {
  try {
    const payload = {
      ...data,
      data: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    };
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // silently fail — WhatsApp is the primary channel
  }
}
