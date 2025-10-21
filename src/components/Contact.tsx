"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const isValid = () =>
    formData.name.trim().length > 1 &&
    validateEmail(formData.email) &&
    formData.message.trim().length > 5;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((s) => ({ ...s, [e.target.id]: e.target.value }));
  };

  // Build Gmail compose URL
  const buildGmailUrl = (to: string, subject: string, body: string) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open Gmail compose with form details
  const openGmailCompose = () => {
    const recipient = "Vishalreddy354@gmail.com";
    const subjectLine = `Portfolio Contact: ${formData.subject || "No subject"}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const gmailUrl = buildGmailUrl(recipient, subjectLine, body);

    try {
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("Failed to open Gmail:", err);
      // Fallback to mailto if Gmail fails to open
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid()) {
      alert("Please complete the form with a valid email and message (min 6 chars).");
      return;
    }

    openGmailCompose();
    
    // Reset form after opening Gmail
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ContactInfo icon={<MapPin />} label="Address" value="Hyderabad, 500010" />
              <ContactInfo
                icon={<Mail />}
                label="Email"
                value="Vishalreddy354@gmail.com"
                link="mailto:Vishalreddy354@gmail.com"
              />
              <ContactInfo
                icon={<Phone />}
                label="Phone"
                value="+91 9553852963"
                link="tel:+919553852963"
              />
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>Your details will be pre-filled in a new Gmail compose window</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField id="name" label="Name" type="text" value={formData.name} onChange={handleChange} />
                  <FormField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
                </div>

                <FormField id="subject" label="Subject" type="text" value={formData.subject} onChange={handleChange} />

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-32"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Open Gmail Compose
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Reusable form field
const FormField: React.FC<{
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}> = ({ id, label, type, value, onChange }) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} placeholder={label} value={value} onChange={onChange} />
  </div>
);

// Reusable contact info item
const ContactInfo: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}> = ({ icon, label, value, link }) => (
  <div className="flex items-start gap-3">
    <div className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5">{icon}</div>
    <div>
      <p className="font-medium">{label}</p>
      {link ? (
        <a href={link} className="text-sm text-muted-foreground hover:text-primary">
          {value}
        </a>
      ) : (
        <p className="text-sm text-muted-foreground">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;
