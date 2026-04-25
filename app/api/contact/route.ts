import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  if (!resendApiKey || !toEmail) {
    // 環境変数未設定の場合はローカル開発用として成功扱い
    console.log("Contact form submission (no Resend config):", {
      name,
      email,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "portfolio@[yourdomain.com]",
      to: toEmail,
      subject: `【ポートフォリオ】${name}様よりお問い合わせ`,
      text: `名前: ${name}\nメール: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Mail send failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
