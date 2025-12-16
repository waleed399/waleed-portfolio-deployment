"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    from_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // EmailJS configuration
    // You'll need to set these up in your .env.local file:
    // NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    // NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    // NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: "error",
        message:
          "Email service not configured. Please set up EmailJS environment variables.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          to_email: "waleedali324@icloud.com", // Your email
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ from_email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly at waleedali324@icloud.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col gap-12 pt-8">
      <div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Get in Touch
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Have a question or want to work together? Send me a message below!
        </p>
      </div>

      {/* Main Email Form */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Sender Email */}
          <div>
            <label
              htmlFor="from_email"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-blue-400"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-blue-400"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell me about your project, question, or just say hello..."
              className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-zinc-900"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`rounded-lg p-4 ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                  : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>

      {/* Secondary Contact Links */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Or connect with me on:
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="https://www.linkedin.com/in/waleed-ali99/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-600 dark:hover:bg-blue-950/30 dark:hover:shadow-blue-900/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <svg
                className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-50 dark:group-hover:text-blue-400">
                LinkedIn
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Connect with me
              </p>
            </div>
          </a>

          <a
            href="tel:+972535254506"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-green-300 hover:bg-green-50 hover:shadow-lg hover:shadow-green-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-green-700 dark:hover:bg-green-950/30 dark:hover:shadow-green-900/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
              <svg
                className="h-6 w-6 text-green-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-green-700 dark:text-zinc-50 dark:group-hover:text-green-400">
                Phone
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                +972 53 525 4506
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
