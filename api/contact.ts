import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const SENDER = process.env.SES_SENDER_EMAIL || "info@nanfylab.com";

const getAdminTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
    .header { background-color: #f59e0b; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #666; }
    .value { font-size: 1.1em; }
    .footer { text-align: center; padding: 20px; font-size: 0.8em; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nuova Richiesta di Contatto</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nome:</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${data.email}</div>
      </div>
      <div class="field">
        <div class="label">Telefono:</div>
        <div class="value">${data.phone || 'Non specificato'}</div>
      </div>
      <div class="field">
        <div class="label">Corso di interesse:</div>
        <div class="value">${data.course || 'Non specificato'}</div>
      </div>
      <div class="field">
        <div class="label">Messaggio:</div>
        <div class="value" style="white-space: pre-wrap;">${data.message}</div>
      </div>
    </div>
    <div class="footer">
      Inviato dal sito nanfylab.com
    </div>
  </div>
</body>
</html>
`;

const getUserTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
    .header { background-color: #f59e0b; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { padding: 20px; text-align: center; }
    .button { display: inline-block; padding: 12px 24px; background-color: #f59e0b; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px; }
    .footer { text-align: center; padding: 20px; font-size: 0.8em; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Grazie ${name}!</h1>
    </div>
    <div class="content">
      <p>Abbiamo ricevuto la tua richiesta di contatto per Nanfy Lab.</p>
      <p>Il nostro team ti risponderà il prima possibile per darti tutte le informazioni sui nostri corsi e servizi.</p>
      <p>A presto!</p>
      <a href="https://nanfylab.com" class="button">Torna al sito</a>
    </div>
    <div class="footer">
      Nanfy Lab - Convivialità & Cucina<br>
      info@nanfylab.com
    </div>
  </div>
</body>
</html>
`;

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, course, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Nome, email e messaggio sono richiesti." });
  }

  try {
    // 1. Send Email to Admin
    const adminCommand = new SendEmailCommand({
      Source: SENDER,
      Destination: { ToAddresses: [SENDER] },
      Message: {
        Subject: { Data: `Nuovo contatto da ${name} - Nanfy Lab` },
        Body: {
          Html: { Data: getAdminTemplate({ name, email, phone, course, message }) },
        },
      },
    });

    // 2. Send Confirmation Email to User
    const userCommand = new SendEmailCommand({
      Source: SENDER,
      Destination: { ToAddresses: [email] },
      Message: {
        Subject: { Data: "Grazie per aver contattato Nanfy Lab!" },
        Body: {
          Html: { Data: getUserTemplate(name) },
        },
      },
      ReplyToAddresses: [SENDER],
    });

    await Promise.all([
      ses.send(adminCommand),
      ses.send(userCommand),
    ]);

    return res.status(200).json({ message: "Messaggio inviato con successo!" });
  } catch (error: any) {
    console.error("SES Error:", error);
    return res.status(500).json({ message: "Errore durante l'invio del messaggio. Riprova più tardi.", error: error.message });
  }
}
