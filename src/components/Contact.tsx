"use client";

import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
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
import { sendContactFormEmail } from "../../email";
import SectionIntro from "@/components/SectionIntro";
import { contactCards, siteConfig } from "@/data/portfolio";

const Contact: React.FC = () => {
  const formStartedAt = React.useRef(Date.now());
  const lastSubmittedAt = React.useRef(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const FIELD_LIMITS = {
    name: 80,
    email: 254,
    subject: 120,
    message: 2000,
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const isValid = () =>
    formData.name.trim().length >= 2 &&
    formData.name.trim().length <= FIELD_LIMITS.name &&
    validateEmail(formData.email) &&
    formData.email.trim().length <= FIELD_LIMITS.email &&
    formData.subject.trim().length <= FIELD_LIMITS.subject &&
    formData.message.trim().length >= 10 &&
    formData.message.trim().length <= FIELD_LIMITS.message;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    const limit = FIELD_LIMITS[id as keyof typeof FIELD_LIMITS];

    setFormData((current) => ({
      ...current,
      [id]: limit ? value.slice(0, limit) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website.trim()) {
      setSubmitStatus({
        success: true,
        message: "Message sent successfully.",
      });
      return;
    }

    const now = Date.now();
    if (now - formStartedAt.current < 3000) {
      setSubmitStatus({
        success: false,
        message: "Please take a moment to review your message before sending.",
      });
      return;
    }

    if (now - lastSubmittedAt.current < 30000) {
      setSubmitStatus({
        success: false,
        message: "Please wait a bit before sending another message.",
      });
      return;
    }

    if (!isValid()) {
      setSubmitStatus({
        success: false,
        message: "Please complete the form with a valid email and a message of at least 10 characters.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendContactFormEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.success) {
        lastSubmittedAt.current = now;
        setSubmitStatus({ success: true, message: "Message sent successfully." });
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
        formStartedAt.current = Date.now();
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "Failed to send message.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container px-4">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-8">
            <SectionIntro
              eyebrow="Contact"
              title="Have a product idea, role, or collaboration in mind?"
              description="If the work needs clean frontend execution, full stack support, or thoughtful product implementation, send me a message."
            />

            <Card className="border-white/70 bg-slate-950 text-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
              <CardHeader>
                <CardTitle className="font-display text-3xl tracking-tight">
                  Let&apos;s build something useful.
                </CardTitle>
                <CardDescription className="text-slate-300">
                  I&apos;m based in Hyderabad and open to conversations around product engineering, frontend systems, and web platform work.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {contactCards.map((item) => (
                  <ContactInfo
                    key={item.label}
                    icon={
                      item.label === "Email" ? (
                        <Mail />
                      ) : item.label === "Phone" ? (
                        <Phone />
                      ) : (
                        <MapPin />
                      )
                    }
                    label={item.label}
                    value={item.value}
                    link={item.href}
                    dark
                  />
                ))}

                <div className="flex gap-3 pt-2">
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-200 transition-colors hover:bg-white/20 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-200 transition-colors hover:bg-white/20 hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-white/70 bg-white/82 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur">
            <CardHeader>
              <CardTitle className="font-display text-3xl tracking-tight text-slate-950">
                Send a message
              </CardTitle>
              <CardDescription className="text-slate-600">
                Share a brief outline and I&apos;ll get back to you.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus && (
                  <div
                    className={`rounded-2xl border p-3 text-sm ${
                      submitStatus.success
                        ? "border-green-500/30 bg-green-500/10 text-green-700"
                        : "border-red-500/30 bg-red-500/10 text-red-600"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    id="name"
                    label="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={FIELD_LIMITS.name}
                    autoComplete="name"
                  />
                  <FormField
                    id="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={FIELD_LIMITS.email}
                    autoComplete="email"
                  />
                </div>

                <FormField
                  id="subject"
                  label="Subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={FIELD_LIMITS.subject}
                />

                <div className="hidden" aria-hidden="true">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-32 rounded-2xl border-slate-200 bg-white"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={FIELD_LIMITS.message}
                  />
                  <p className="text-right text-xs text-slate-500">
                    {formData.message.length}/{FIELD_LIMITS.message}
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-slate-950 text-white hover:bg-slate-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const FormField: React.FC<{
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  maxLength?: number;
  autoComplete?: string;
}> = ({ id, label, type, value, onChange, maxLength, autoComplete }) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-slate-700">
      {label}
    </Label>
    <Input
      id={id}
      type={type}
      placeholder={label}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      autoComplete={autoComplete}
      className="rounded-2xl border-slate-200 bg-white"
    />
  </div>
);

const ContactInfo: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
  dark?: boolean;
}> = ({ icon, label, value, link, dark = false }) => (
  <div className="flex items-start gap-3">
    <div
      className={`mt-0.5 h-5 w-5 shrink-0 ${
        dark ? "text-slate-300" : "text-muted-foreground"
      }`}
    >
      {icon}
    </div>
    <div>
      <p className={`font-medium ${dark ? "text-white" : ""}`}>{label}</p>
      {link ? (
        <a
          href={link}
          className={`text-sm ${
            dark
              ? "text-slate-300 hover:text-white"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {value}
        </a>
      ) : (
        <p className={`text-sm ${dark ? "text-slate-300" : "text-muted-foreground"}`}>
          {value}
        </p>
      )}
    </div>
  </div>
);

export default Contact;
