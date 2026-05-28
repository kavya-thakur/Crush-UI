import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import API from "../../lib/axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // Logic & Error States
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const { setUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError(null);

    try {
      const res = await API.post("/auth/login", { email, password });
      console.log("Login Successful:", res.data);
      await API.post("/auth/login", {
        email,
        password,
      });

      const me = await API.get("/auth/me");

      setUser(me.data.user);
      navigate("/");
    } catch (error: any) {
      console.error(error);
      setAuthError(
        error.response?.data?.message ||
          "Invalid credentials. Please verify your email and password.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300 font-sans px-4 relative">
      {/* Main Login Card Wrapper */}
      <div className="w-full max-w-[440px] bg-white dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/60 rounded-2xl p-8 md:p-10 shadow-sm relative z-10 backdrop-blur-md">
        {/* Header Text */}
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-2xl font-medium  uppercase text-neutral-700 dark:text-neutral-100">
            Sign In
          </h1>
          <p className="text-[11px] tracking-wide text-neutral-400 dark:text-neutral-500 uppercase font-medium">
            Enter your keys to access your system terminal
          </p>
        </div>

        {/* Authentication Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            {/* Email Field Group */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Account Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@crushui.com"
                disabled={isLoading}
                className="w-full px-4 py-3 text-sm bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-200 dark:border-neutral-800/80 rounded-xl focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:bg-white dark:focus:bg-neutral-900 placeholder-neutral-300 dark:placeholder-neutral-700 transition-all duration-200 font-light disabled:opacity-50"
              />
            </div>

            {/* Password Field Group */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  Security Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled={isLoading}
                  className="w-full px-4 py-3 text-sm bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-200 dark:border-neutral-800/80 rounded-xl focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:bg-white dark:focus:bg-neutral-900 placeholder-neutral-300 dark:placeholder-neutral-700 transition-all duration-200 font-light disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff size={15} strokeWidth={1.5} />
                  ) : (
                    <Eye size={15} strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Fallback Static Error Banner */}
          {authError && (
            <div className="flex items-center gap-2.5 px-4 py-3 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-xs font-light">
              <AlertCircle size={14} className="shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          {/* Direct Submit Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 py-3.5 rounded-xl font-medium text-xs uppercase tracking-widest transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <div className="flex items-center gap-2">
                Authenticate <ArrowRight size={14} />
              </div>
            )}
          </button>
        </form>

        {/* Polished Footnote Navigation */}
        <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800/60 text-center text-[11px] text-neutral-400 dark:text-neutral-500 font-light">
          New to the platform?{" "}
          <Link
            to={`/register`}
            className="text-neutral-900 dark:text-neutral-100 font-medium underline underline-offset-4 hover:opacity-70 transition-opacity ml-1"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
