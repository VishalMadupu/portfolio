

"use client";
import React, { useState } from "react";
import axios from "axios";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:10000";
const API_BASE_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:10000"; // for Vite

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/contact`, formData);
      alert(data.success ? "Message sent successfully!" : "Failed to send message.");
      if (data.success) setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ContactInfo icon={<MapPin />} label="Address" value="Hyderabad, 500010" link/>
              <ContactInfo icon={<Mail />} label="Email" value="Vishalreddy354@gmail.com" link="mailto:Vishalreddy354@gmail.com" />
              <ContactInfo icon={<Phone />} label="Phone" value="+91 9553852963" link="tel:+919553852963" />
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
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
                  <Textarea id="message" placeholder="Your message" className="min-h-32" value={formData.message} onChange={handleChange} />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Reusable Form Field Component
const FormField = ({ id, label, type, value, onChange }) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} placeholder={label} value={value} onChange={onChange} />
  </div>
);

// Reusable Contact Info Component
const ContactInfo = ({ icon, label, value, link }) => (
  <div className="flex items-start gap-3">
    <div className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5">{icon}</div>
    <div>
      <p className="font-medium">{label}</p>
      {link ? (
        <a href={link} className="text-sm text-muted-foreground hover:text-primary">{value}</a>
      ) : (
        <p className="text-sm text-muted-foreground">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;
