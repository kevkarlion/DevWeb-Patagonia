import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  console.log(email)
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
      from: process.env.EMAIL_USER, // Remitente que debe ser tu correo verificado
      to: process.env.EMAIL_USER, // Destinatario, que también puede ser tu correo
      subject: `Nuevo mensaje desde DevWeb ${name}`,
      text: message,
      replyTo: email, // Este será el correo del usuario que envía el mensaje
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
