"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { apiBaseUrl, apiRequest } from "@/lib/api";

export default function ContactMessageForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await apiRequest("/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      toast.success("Message sent");
      form.reset();
    } catch (error: any) {
      toast.error(error.message || "Could not send message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      action={`${apiBaseUrl}/contact`}
      method="post"
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-lg bg-[#ead6bd] p-6 shadow-[0_24px_70px_rgba(29,26,22,0.14)] md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-bold text-[#1d1a16]">Full name</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Your name"
            className="rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c]"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-bold text-[#1d1a16]">
            Phone or email
          </label>
          <input
            type="text"
            name="phoneOrEmail"
            required
            placeholder="How should we reply?"
            className="rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c]"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-bold text-[#1d1a16]">
          What do you need?
        </label>
        <select
          name="topic"
          className="rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c]"
        >
          <option>Order an item</option>
          <option>Ask about sizing</option>
          <option>Request delivery</option>
          <option>Custom clothing request</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-bold text-[#1d1a16]">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us the clothing item, size, color, quantity, location, or reference style."
          className="resize-none rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c]"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-[#1d1a16] px-7 py-4 font-bold text-white transition hover:bg-[#a36f3c] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
