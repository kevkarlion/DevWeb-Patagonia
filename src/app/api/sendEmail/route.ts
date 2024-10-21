import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Usa el servicio que prefieras
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    // Enviar el correo
    await transporter.sendMail({
      from: email, // Remitente
      to: process.env.EMAIL_USER, // Destinatario
      subject: `Nuevo mensaje de ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
