import React, { FC } from "react";
import Link from "next/link";

const footerLinks = [
  { label: "Shop", href: "/#shop" },
  { label: "Products", href: "/#products" },
  { label: "How to Order", href: "/#order" },
  { label: "Contact", href: "/contact" },
];

const Footer: FC = () => {
  return (
    <footer className="bg-[#1f2933] text-white">
      <div className="container">
        <div className="grid gap-10 border-b border-white/10 py-14 md:grid-cols-[1.1fr_0.9fr_1fr] md:py-16">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl font-bold text-[#1f2933]">
                FK
              </span>
              <span className="text-xl font-bold tracking-[0.12em]">
                FK COLLECTION
              </span>
            </Link>
            <p className="max-w-364 leading-7 text-white/70">
              A neat online clothing store for ordering stylish everyday wear,
              special outfits, shoes, and accessories.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Store</h3>
            <ul className="grid gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Order Support</h3>
            <p className="mb-5 leading-7 text-white/70">
              Get help with sizing, product availability, delivery, pickup, or
              custom clothing requests.
            </p>
            <form className="flex overflow-hidden rounded-lg bg-white">
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 px-4 py-3 text-[#1f2933] outline-none"
              />
              <button
                type="submit"
                className="bg-[#d2a679] px-5 py-3 font-semibold text-[#1f2933] transition hover:bg-[#c49462]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 py-6 text-sm text-white/60 md:flex-row">
          <p>© 2026 FK Collection. All rights reserved.</p>
          <p>Designed for online clothing orders and customer styling support.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
