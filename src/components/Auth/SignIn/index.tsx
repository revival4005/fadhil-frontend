"use client";

import AuthDialogContext from "@/app/context/AuthDialogContext";
import { signIn } from "@/lib/authMock";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useContext, useState } from "react";

const inputClass =
  "w-full rounded-lg border border-[#ddd5cc] bg-white px-12 py-4 text-[#121212] outline-none transition placeholder:text-[#8b8178] focus:border-[#9b6b43] dark:border-white/10 dark:bg-[#252b35] dark:text-white dark:placeholder:text-white/55";

const Signin = ({ signInOpen }: { signInOpen?: any }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    setLoading(false);

    if (result?.status === 200) {
      setTimeout(() => signInOpen?.(false), 800);
      authDialog?.setIsSuccessDialogOpen(true);
      setTimeout(() => authDialog?.setIsSuccessDialogOpen(false), 1200);
      return;
    }

    setError(result?.error || "Invalid email or password.");
    authDialog?.setIsFailedDialogOpen(true);
    setTimeout(() => authDialog?.setIsFailedDialogOpen(false), 1200);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#9b6b43]">
          Welcome back
        </p>
        <h1 className="mb-5 text-[38px] font-bold leading-tight text-[#121212] dark:text-white md:text-[46px]">
          Sign in to your account
        </h1>
        <p className="max-w-[470px] text-lg leading-8 text-[#4e4843] dark:text-[#c9bbaa]">
          Sign in to follow your clothing requests, update account details, and
          order new styles faster.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="grid gap-2">
          <label className="text-sm font-bold text-[#121212] dark:text-white">
            Email or username
          </label>
          <div className="relative">
            <Icon
              icon="solar:user-linear"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[#6f6257] dark:text-[#c9bbaa]"
            />
            <input
              type="text"
              placeholder="Enter your email or username"
              required
              value={username}
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm font-bold text-[#121212] dark:text-white">
              Password
            </label>
            <Link
              href="/signin"
              className="text-sm font-semibold text-[#9b6b43] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Icon
              icon="solar:lock-password-linear"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[#6f6257] dark:text-[#c9bbaa]"
            />
            <input
              type="password"
              required
              value={password}
              placeholder="Enter your password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              className={`${inputClass} pr-12`}
            />
            <Icon
              icon="solar:eye-linear"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-[#6f6257] dark:text-[#c9bbaa]"
            />
          </div>
        </div>

        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-1 rounded-lg bg-[#121212] px-5 py-4 text-base font-bold text-white transition hover:bg-[#9b6b43] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-[#d7a56f] dark:text-[#121212] dark:hover:bg-white"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-5">
        <span className="h-px flex-1 bg-[#ead6bd] dark:bg-white/10" />
        <span className="text-sm text-[#6f6257] dark:text-[#c9bbaa]">or</span>
        <span className="h-px flex-1 bg-[#ead6bd] dark:bg-white/10" />
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#ddd5cc] bg-white px-5 py-4 text-base font-bold text-[#121212] transition hover:border-[#9b6b43] dark:border-white/10 dark:bg-[#15120f] dark:text-white"
      >
        <Icon icon="flat-color-icons:google" className="text-2xl" />
        Continue with Google
      </button>

      <div className="mt-8">
        <p className="text-base text-[#121212] dark:text-white">
          New to FK Collection?
          <Link
            href="/signup"
            className="inline-flex items-center gap-3 pl-3 font-bold text-[#9b6b43] hover:underline"
          >
            Create an account
            <Icon icon="solar:arrow-right-linear" className="text-xl" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
