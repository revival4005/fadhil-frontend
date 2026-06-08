"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { apiBaseUrl, apiRequest } from "@/lib/api";

export default function OrderRequestForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await apiRequest("/orders", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      toast.success("Order request sent");
      form.reset();
    } catch (error: any) {
      toast.error(error.message || "Could not send order request");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      action={`${apiBaseUrl}/orders`}
      method="post"
      onSubmit={handleSubmit}
      className="grid gap-4 bg-[#ead6bd] p-7 md:p-10 dark:bg-[#241d17]"
    >
      <div>
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#8a5b31] dark:text-[#d7a56f]">
          Order request
        </p>
        <h3 className="text-3xl font-bold text-[#1d1a16] dark:text-white">
          Send us the style you want
        </h3>
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-bold text-[#1d1a16] dark:text-white">
          Full name
        </label>
        <input
          type="text"
          name="fullName"
          required
          placeholder="Your name"
          className="rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c] dark:border-white/10 dark:bg-[#15120f] dark:text-white dark:placeholder:text-white/45"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-bold text-[#1d1a16] dark:text-white">
          Product or clothing request
        </label>
        <input
          type="text"
          name="productRequest"
          required
          placeholder="Dress, shirt, shoes, bag..."
          className="rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c] dark:border-white/10 dark:bg-[#15120f] dark:text-white dark:placeholder:text-white/45"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-bold text-[#1d1a16] dark:text-white">
            Size
          </label>
          <select
            name="size"
            className="rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c] dark:border-white/10 dark:bg-[#15120f] dark:text-white"
          >
            <option>Select size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Custom</option>
          </select>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-bold text-[#1d1a16] dark:text-white">
            Delivery
          </label>
          <select
            name="delivery"
            className="rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c] dark:border-white/10 dark:bg-[#15120f] dark:text-white"
          >
            <option>Pickup</option>
            <option>Delivery</option>
          </select>
        </div>
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-bold text-[#1d1a16] dark:text-white">
          Details
        </label>
        <textarea
          name="details"
          placeholder="Color, quantity, location, budget, or special request"
          rows={5}
          className="resize-none rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c] dark:border-white/10 dark:bg-[#15120f] dark:text-white dark:placeholder:text-white/45"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-[#1d1a16] px-7 py-4 font-bold text-white transition hover:bg-[#a36f3c] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-[#d7a56f] dark:text-[#15120f] dark:hover:bg-white"
      >
        {loading ? "Sending..." : "Submit order request"}
      </button>
    </form>
  );
}
