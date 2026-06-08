import React from "react";
import { Metadata } from "next";
import ContactMessageForm from "@/components/Forms/ContactMessageForm";

export const metadata: Metadata = {
  title: "Contact | FK Collection",
  description:
    "Contact FK Collection for clothing orders, sizing support, delivery, pickup, and custom fashion requests.",
};

const supportItems = [
  {
    title: "Order Support",
    text: "Ask about product availability, prices, colors, and delivery before placing your order.",
  },
  {
    title: "Size Guidance",
    text: "Share your usual size or measurements and we will help you choose a comfortable fit.",
  },
  {
    title: "Custom Requests",
    text: "Send a style reference, occasion, color, or budget and we can help source the right piece.",
  },
];

const quickDetails = [
  ["Response time", "Same day support"],
  ["Pickup", "Available after confirmation"],
  ["Delivery", "Arrange by location"],
  ["Orders", "Clothes, shoes, bags, accessories"],
];

export default function ContactPage() {
  return (
    <main className="bg-[#fffaf4] pt-24 text-[#1d1a16]">
      <section className="relative overflow-hidden bg-[#15120f] py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=85')",
          }}
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 w-fit rounded-full bg-[#ead6bd] px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-[#5d3f29]">
              Contact the store
            </p>
            <h1 className="mb-5 text-[42px] font-bold leading-[1.08] text-white md:text-[58px]">
              Need clothes, sizing help, or a custom look?
            </h1>
            <p className="max-w-[560px] text-lg leading-8 text-[#eadfd2]">
              Message FK Collection for product availability, outfit requests,
              pickup, delivery, and fit support. Tell us what you want to wear
              and we will help you complete the order.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85"
              alt="Fashion model wearing a styled outfit"
              className="h-[360px] w-full rounded-lg object-cover sm:h-[460px]"
            />
            <div className="grid gap-4">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=85"
                alt="Fashion shoes available to order"
                className="h-[220px] w-full rounded-lg object-cover"
              />
              <div className="rounded-lg bg-[#d7a56f] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4b2e1f]">
                  Ready to help
                </p>
                <p className="mt-3 text-3xl font-bold text-[#15120f]">
                  Orders, sizing, delivery, and custom requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36f3c]">
                How we can help
              </p>
              <h2 className="text-[#1d1a16]">Fashion support that feels simple</h2>
            </div>
            <p className="max-w-[620px] leading-8 text-[#6f6257]">
              Use this page when you want to ask about an item, reserve a piece,
              request a specific outfit, or confirm how to receive your clothes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {supportItems.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#efe2d4] bg-white p-7 shadow-[0_18px_50px_rgba(29,26,22,0.08)]"
              >
                <h3 className="mb-3 text-2xl font-bold text-[#1d1a16]">
                  {item.title}
                </h3>
                <p className="leading-7 text-[#6f6257]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36f3c]">
              Send a message
            </p>
            <h2 className="mb-5 text-[#1d1a16]">Start your clothing order</h2>
            <p className="mb-8 leading-8 text-[#6f6257]">
              Include the item name, size, color, delivery preference, and any
              reference style you want. We can confirm details before payment.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {quickDetails.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-[#efe2d4] bg-[#fffaf4] p-5"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a36f3c]">
                    {label}
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#1d1a16]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <ContactMessageForm />
        </div>
      </section>
    </main>
  );
}
