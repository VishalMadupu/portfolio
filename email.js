import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

export async function sendEmail({ templateId, serviceId, params }) {
  try {
    const result = await emailjs.send(
      serviceId || import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      params
    );
    console.log('Email sent:', result.text);
    return { success: true, messageId: result.text };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.text || error.message };
  }
}

export async function sendContactFormEmail({ name, email, message }) {
  return sendEmail({
    params: {
      from_name: name,
      from_email: email,
      message: message,
      email: "Vishalreddy354@gmail.com", // Recipient email for template
    },
  });
}

export default { sendEmail, sendContactFormEmail };
