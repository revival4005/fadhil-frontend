import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fadhil Fashion | Clothing Store",
  description:
    "Order stylish clothes, shoes, accessories, and custom fashion pieces from Fadhil Fashion.",
};

const categories = [
  {
    name: "Women",
    text: "Dresses, sets, blouses, skirts, and elegant everyday outfits.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Men",
    text: "Clean shirts, jackets, trousers, denim, and smart casual wear.",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Shoes",
    text: "Loafers, sneakers, heels, sandals, and polished footwear.",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Accessories",
    text: "Bags, watches, belts, glasses, jewelry, and finishing pieces.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85",
  },
];

const products = [
  {
    name: "Satin Evening Dress",
    tag: "Elegant",
    price: "TZS 95,000",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Smart Linen Shirt",
    tag: "Daily wear",
    price: "TZS 52,000",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Premium Denim Jacket",
    tag: "Best seller",
    price: "TZS 78,000",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Leather Crossbody Bag",
    tag: "Accessory",
    price: "TZS 68,000",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=85",
  },
];

const lookbook = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
];

const steps = [
  ["Choose", "Pick a ready item or request a custom style."],
  ["Size", "Send your size and fit preference before confirmation."],
  ["Pay", "Confirm the order and payment details."],
  ["Receive", "Collect your clothes by pickup or delivery."],
];

export default function Home() {
  return (
    <main className="bg-[#fffaf4] text-[#1d1a16] transition-colors dark:bg-[#0f0d0b] dark:text-white">
      <section id="home" className="pt-24">
        <div className="grid bg-[#15120f] lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex items-center px-7 py-16 md:px-16 lg:py-20 xl:pl-24 xl:pr-12">
            <div className="max-w-[720px]">
              <p className="mb-5 w-fit rounded-full bg-[#ead6bd] px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-[#5d3f29]">
                New collection online
              </p>
              <h1 className="mb-5 max-w-[760px] text-[40px] font-bold leading-[1.08] text-white md:text-[46px] xl:text-[50px]">
                Dress well. Order easily. Wear confidently.
              </h1>
              <p className="mb-7 max-w-[660px] text-lg leading-8 text-[#eadfd2]">
                Fadhil Fashion brings stylish clothes, shoes, bags, and
                accessories into one clean shopping experience. Browse the
                collection, choose your size, and send your order request.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="rounded-lg bg-white px-8 py-4 text-center font-bold text-[#15120f] transition hover:bg-[#ead6bd]"
                >
                  Shop products
                </a>
                <a
                  href="#order"
                  className="rounded-lg border border-white/35 px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#15120f]"
                >
                  Make an order
                </a>
              </div>
            </div>
          </div>

          <div className="grid w-full max-w-[620px] grid-cols-2 gap-6 justify-self-center p-5 lg:self-center">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=85"
              alt="Clothes hanging in a fashion boutique"
              className="aspect-square h-auto w-full rounded-full object-cover shadow-[0_18px_44px_rgba(0,0,0,0.24)]"
            />
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85"
              alt="Woman wearing a stylish dress"
              className="aspect-square h-auto w-full rounded-full object-cover shadow-[0_18px_44px_rgba(0,0,0,0.24)]"
            />
            <img
              src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=85"
              alt="Men fashion outfit"
              className="aspect-square h-auto w-full rounded-full object-cover shadow-[0_18px_44px_rgba(0,0,0,0.24)]"
            />
            <div className="flex aspect-square h-auto w-full flex-col items-center justify-center rounded-full bg-[#d7a56f] p-7 text-center shadow-[0_18px_44px_rgba(0,0,0,0.2)] dark:bg-[#b9824a]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4b2e1f] md:text-sm">
                Today picks
              </p>
              <p className="mt-3 text-xl font-bold leading-tight text-[#15120f] md:text-2xl">
                Fresh outfits ready to acquire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="py-16 md:py-24 dark:bg-[#0f0d0b]">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36f3c]">
                Browse by style
              </p>
              <h2 className="text-[#1d1a16] dark:text-white">Shop categories</h2>
            </div>
            <p className="max-w-[430px] text-base leading-7 text-[#6f6257] dark:text-[#c9bbaa]">
              Choose full outfits or individual pieces. Every category is built
              for clean styling, comfort, and easy ordering.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#products"
                className="group overflow-hidden rounded-[1.4rem] bg-white shadow-[0_18px_50px_rgba(29,26,22,0.1)] dark:bg-[#191511] dark:shadow-[0_18px_55px_rgba(0,0,0,0.38)]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={`${category.name} fashion category`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-2xl font-bold text-[#1d1a16] dark:text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm leading-6 text-[#6f6257] dark:text-[#c9bbaa]">
                    {category.text}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-white py-16 md:py-24 dark:bg-[#15120f]">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36f3c]">
                Popular now
              </p>
              <h2 className="text-[#1d1a16] dark:text-white">Featured clothing and accessories</h2>
            </div>
            <a
              href="#order"
              className="w-fit rounded-lg bg-[#1d1a16] px-7 py-4 font-bold text-white transition hover:bg-[#a36f3c] dark:bg-[#d7a56f] dark:text-[#15120f] dark:hover:bg-white"
            >
              Order a product
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-[1.4rem] border border-[#efe2d4] bg-[#fffaf4] dark:border-white/10 dark:bg-[#0f0d0b]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#8a5b31]">
                    {product.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-bold text-[#1d1a16] dark:text-white">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-bold text-[#a36f3c]">{product.price}</p>
                    <a
                      href="#order"
                      className="rounded-lg border border-[#1d1a16] px-4 py-2 text-sm font-bold transition hover:bg-[#1d1a16] hover:text-white dark:border-white/35 dark:text-white dark:hover:bg-white dark:hover:text-[#15120f]"
                    >
                      Order
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#15120f] py-16 text-white md:py-24">
        <div className="container">
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d7a56f]">
                Lookbook
              </p>
              <h2 className="text-white">Outfit inspiration</h2>
            </div>
            <p className="max-w-[430px] leading-7 text-white/70">
              Use these looks as a guide, then request similar pieces, colors,
              and sizes from the store.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lookbook.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Fadhil Fashion lookbook outfit ${index + 1}`}
                className="aspect-[3/4] w-full rounded-[1.4rem] object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="bg-[#f3e7d8] py-16 md:py-24 dark:bg-[#0f0d0b]">
        <div className="container">
          <div className="grid overflow-hidden rounded-[1.8rem] bg-[#fffaf4] shadow-[0_28px_80px_rgba(29,26,22,0.12)] dark:bg-[#15120f] dark:shadow-[0_28px_80px_rgba(0,0,0,0.42)] lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative flex flex-col justify-between bg-[#1d1a16] p-7 text-white md:p-10">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85')",
                }}
              />
              <div className="relative z-10">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d7a56f]">
                  Easy ordering
                </p>
                <h2 className="mb-5 text-white">How customers acquire clothes</h2>
                <p className="mb-8 leading-8 text-white/72">
                  Send your preferred product, size, color, and delivery method.
                  The store can confirm availability, help with sizing, and prepare
                  your clothes for pickup or delivery.
                </p>
                <div className="grid gap-4">
                  {steps.map(([title, text], index) => (
                    <div
                      key={title}
                      className="flex gap-4 rounded-[1.1rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d7a56f] font-bold text-[#15120f]">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{title}</h3>
                        <p className="text-sm leading-6 text-white/65">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          <form className="grid gap-4 bg-[#ead6bd] p-7 md:p-10 dark:bg-[#241d17]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#8a5b31] dark:text-[#d7a56f]">
                Order request
              </p>
              <h3 className="text-3xl font-bold text-[#1d1a16] dark:text-white">
                Send us the style you want
              </h3>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-bold text-[#1d1a16] dark:text-white">Full name</label>
              <input
                type="text"
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
                placeholder="Dress, shirt, shoes, bag..."
                className="rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c] dark:border-white/10 dark:bg-[#15120f] dark:text-white dark:placeholder:text-white/45"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-bold text-[#1d1a16] dark:text-white">Size</label>
                <select className="rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c] dark:border-white/10 dark:bg-[#15120f] dark:text-white">
                  <option>Select size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>Custom</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-bold text-[#1d1a16] dark:text-white">Delivery</label>
                <select className="rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c] dark:border-white/10 dark:bg-[#15120f] dark:text-white">
                  <option>Pickup</option>
                  <option>Delivery</option>
                </select>
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-bold text-[#1d1a16] dark:text-white">Details</label>
              <textarea
                placeholder="Color, quantity, location, budget, or special request"
                rows={5}
                className="resize-none rounded-lg border border-[#d7b995] bg-white px-4 py-3 text-[#1d1a16] outline-none focus:border-[#a36f3c] dark:border-white/10 dark:bg-[#15120f] dark:text-white dark:placeholder:text-white/45"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[#1d1a16] px-7 py-4 font-bold text-white transition hover:bg-[#a36f3c] dark:bg-[#d7a56f] dark:text-[#15120f] dark:hover:bg-white"
            >
              Submit order request
            </button>
          </form>
          </div>
        </div>
      </section>
    </main>
  );
}
