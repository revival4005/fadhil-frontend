"use client";

import AuthDialogContext from "@/app/context/AuthDialogContext";
import Loader from "@/components/Common/Loader";
import { registerUser } from "@/lib/apiMock";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const inputClass =
  "w-full rounded-lg border border-[#ddd5cc] bg-white px-12 py-4 text-[#121212] outline-none transition placeholder:text-[#8b8178] focus:border-[#9b6b43] dark:border-white/10 dark:bg-[#252b35] dark:text-white dark:placeholder:text-white/55";

const SignUp = ({ signUpOpen }: { signUpOpen?: any }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());

    registerUser(value)
      .then(() => {
        toast.success("Account created");
        setLoading(false);
        authDialog?.setIsUserRegistered(true);
        setTimeout(() => authDialog?.setIsUserRegistered(false), 1200);
        setTimeout(() => signUpOpen?.(false), 800);
        router.push("/signin");
      })
      .catch((err: any) => {
        toast.error(err?.message || "Registration failed");
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#9b6b43]">
          Join FK Collection
        </p>
        <h1 className="mb-5 text-[38px] font-bold leading-tight text-[#121212] dark:text-white md:text-[46px]">
          Create your account
        </h1>
        <p className="max-w-[470px] text-lg leading-8 text-[#4e4843] dark:text-[#c9bbaa]">
          Save your details, request outfits faster, and keep your clothing
          orders easy to manage.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="grid gap-2">
          <label className="text-sm font-bold text-[#121212] dark:text-white">
            Full name
          </label>
          <div className="relative">
            <Icon
              icon="solar:user-linear"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[#6f6257] dark:text-[#c9bbaa]"
            />
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-bold text-[#121212] dark:text-white">
            Email
          </label>
          <div className="relative">
            <Icon
              icon="solar:letter-linear"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[#6f6257] dark:text-[#c9bbaa]"
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-bold text-[#121212] dark:text-white">
            Password
          </label>
          <div className="relative">
            <Icon
              icon="solar:lock-password-linear"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[#6f6257] dark:text-[#c9bbaa]"
            />
            <input
              type="password"
              placeholder="Create a password"
              name="password"
              autoComplete="new-password"
              required
              className={inputClass}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-1 flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#121212] px-5 py-4 text-base font-bold text-white transition hover:bg-[#9b6b43] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-[#d7a56f] dark:text-[#121212] dark:hover:bg-white"
        >
          Create account {loading && <Loader />}
        </button>
      </form>

      <div className="mt-8 border-t border-[#ead6bd] pt-7 dark:border-white/10">
        <p className="text-sm leading-6 text-[#6f6257] dark:text-[#c9bbaa]">
          By creating an account you agree with our{" "}
          <a href="#!" className="font-semibold text-[#9b6b43] hover:underline">
            Privacy
          </a>{" "}
          and{" "}
          <a href="#!" className="font-semibold text-[#9b6b43] hover:underline">
            Policy
          </a>
          .
        </p>
        <p className="mt-4 text-base text-[#121212] dark:text-white">
          Already have an account?
          <Link
            href="/signin"
            className="inline-flex items-center gap-3 pl-3 font-bold text-[#9b6b43] hover:underline"
          >
            Sign in
            <Icon icon="solar:arrow-right-linear" className="text-xl" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
