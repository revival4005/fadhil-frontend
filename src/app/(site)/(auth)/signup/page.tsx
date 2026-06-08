import SignUp from "@/components/Auth/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join | FK Collection",
  description: "Create an FK Collection account for clothing orders and style requests.",
};

const SignupPage = () => {
  return (
    <main className="bg-white pt-20 text-[#121212] dark:bg-[#0f0d0b] dark:text-white">
      <section className="grid !py-0 overflow-hidden bg-white dark:bg-[#0f0d0b] lg:min-h-[650px] lg:grid-cols-[48%_52%]">
        <div className="flex px-7 py-12 md:px-14 lg:justify-end lg:py-20 xl:px-24">
          <div className="w-full max-w-[620px]">
            <SignUp />
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden bg-[#15120f] lg:min-h-[650px]">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
            alt="FK Collection customer choosing fashion outfits"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-12 xl:p-16">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#d7a56f]">
              Member styling
            </p>
            <p className="max-w-[520px] text-3xl font-bold leading-tight md:text-4xl">
              Faster requests for clothes, shoes, bags, and custom looks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
