import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { nom, prenom, email, message } = await request.json();

    // Validation des champs
    if (!nom || !prenom || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Options de l'email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'contact@vgil.fr',
      subject: `Nouveau message de ${prenom} ${nom}`,
      text: `
Nom: ${nom}
Prénom: ${prenom}
Email: ${email}

Message:
${message}
      `,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau message</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #121212; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 48px 40px 40px 40px;">
                      
                      <!-- Logo VG -->
                      <div style="text-align: center; margin-bottom: 40px;">
                        <img src="https://vgil.fr/vg.png" alt="Logo VG" style="width: 80px; height: auto;" />
                      </div>

                      <!-- Titre avec barre -->
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                        <tr>
                          <td style="vertical-align: bottom; padding-bottom: 8px;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 42px; font-weight: 700; white-space: nowrap; letter-spacing: -0.5px;">
                              Nouveau message
                            </h1>
                          </td>
                          <td style="width: 100%; vertical-align: bottom; padding-bottom: 12px; padding-left: 24px;">
                            <div style="height: 3px; background: rgba(255, 255, 255, 0.3); width: 100%;"></div>
                          </td>
                        </tr>
                      </table>

                      <!-- Informations expéditeur -->
                      <div style="background-color: #1a1a1a; padding: 24px; border-radius: 12px; margin-bottom: 30px;">
                        <div style="display: flex; align-items: center; gap: 24px;">
                          <!-- Photo de profil placeholder -->
                          <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%); flex-shrink: 0;"></div>
                          
                          <!-- Informations -->
                          <div style="flex: 1; margin-left: 16px;">
                            <h2 style="margin: 0 0 8px 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                              ${prenom} ${nom}
                            </h2>
                            <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; background-color: rgba(255, 255, 255, 0.1); border-radius: 20px;">
                              <img src="https://vgil.fr/envelope.png" alt="Email" style="width: 16px; height: 16px; flex-shrink: 0; display: block;" />
                              <span style="color: oklch(87.2% 0.01 258.338); font-size: 14px; font-weight: 500; display: inline-block; margin-left: 4px;">
                                <a href="mailto:${email}" style="color: inherit !important; text-decoration: none !important; border-bottom: none !important; box-shadow: none !important;">
                                  ${email}
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Message -->
                      <div style="margin-bottom: 30px;">
                        <h2 style="margin: 0 0 16px 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                          Message
                        </h2>
                        <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; color: #d0d0d0; font-size: 16px; line-height: 1.6;">
                          ${message.replace(/\n/g, '<br>')}
                        </div>
                      </div>

                      <!-- Bouton de réponse -->
                      <div style="text-align: center; margin-top: 32px;">
                        <a href="mailto:${email}" style="display: inline-flex; align-items: center; gap: 8px; background-color: #ffffff; color: #191919; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
                          <span style="transform: translateY(-1px); display: inline-block;">Répondre au message</span>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                          </svg>
                        </a>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #0f0f0f; padding: 24px 40px; text-align: center; border-top: 1px solid #2a2a2a;">
                      <p style="margin: 0; color: #999999; font-size: 13px; line-height: 1.5;">
                        Ce message a été envoyé depuis le formulaire de contact de 
                        <a href="https://vgil.fr" style="color: #ffffff; text-decoration: none; font-weight: 600;">vgil.fr</a>
                      </p>
                      <p style="margin: 8px 0 0 0; color: #666666; font-size: 12px;">
                        © ${new Date().getFullYear()} Valentin Gil. Tous droits réservés.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
