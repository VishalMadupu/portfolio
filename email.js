import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
  });
}

const CONTACT_FIELD_LIMITS = {
  name: 80,
  email: 254,
  subject: 120,
  message: 2000,
};

function normalizeSingleLine(value, maxLength) {
  return value.replace(/[\r\n\t]+/g, " ").trim().slice(0, maxLength);
}

function normalizeMultiline(value, maxLength) {
  return value
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, maxLength);
}

function getEmailConfig() {
  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    return null;
  }

  return {
    publicKey: EMAILJS_PUBLIC_KEY,
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
  };
}

export async function sendEmail({ templateId, serviceId, params }) {
  const config = getEmailConfig();

  if (!config) {
    return {
      success: false,
      error: "Contact service is not configured right now. Please use direct email instead.",
    };
  }

  try {
    const result = await emailjs.send(
      serviceId || config.serviceId,
      templateId || config.templateId,
      params
    );

    return { success: true, messageId: result.text };
  } catch (error) {
    console.error('Email delivery failed', error);
    return {
      success: false,
      error: "Unable to send the message right now. Please try again later or email directly.",
    };
  }
}

export async function sendContactFormEmail({ name, email, subject = "", message }) {
  const safeName = normalizeSingleLine(name, CONTACT_FIELD_LIMITS.name);
  const safeEmail = normalizeSingleLine(email, CONTACT_FIELD_LIMITS.email).toLowerCase();
  const safeSubject = normalizeSingleLine(subject, CONTACT_FIELD_LIMITS.subject);
  const safeMessage = normalizeMultiline(message, CONTACT_FIELD_LIMITS.message);

  return sendEmail({
    params: {
      from_name: safeName,
      from_email: safeEmail,
      subject: safeSubject,
      message: safeMessage,
      email: "Vishalreddy354@gmail.com", // Recipient email for template
    },
  });
}

export default { sendEmail, sendContactFormEmail };
