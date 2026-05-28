import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import API from "../../lib/axios";
import { Link, useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();
  // Syncing with Mongoose model keys: username instead of name
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setValidationError(null);

    if (password !== confirmPassword) {
      setValidationError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      // Matches your schema keys exactly. role and plan default automatically on the backend.
      const res = await API.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/");
      console.log("Account Creation Successful:", res.data);
    } catch (error: any) {
      console.error(error);
      setValidationError(
        error.response?.data?.message ||
          "Failed to create account. Please check your inputs or try another email.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300 font-sans px-4 py-12 relative">
      {/* Main Registration Card */}
      <div className="w-full max-w-[460px] bg-white dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/60 rounded-2xl p-8 md:p-10 shadow-sm relative z-10 backdrop-blur-md">
        {/* Header Text */}
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-2xl font-medium uppercase text-neutral-700 dark:text-neutral-100">
            Create Account
          </h1>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            {/* Username Field - Updated to map to your Mongoose model */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="kavya thakur"
                disabled={isLoading}
                className="w-full px-4 py-3 text-sm bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-200 dark:border-neutral-800/80 rounded-xl focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:bg-white dark:focus:bg-neutral-900 placeholder-neutral-300 dark:placeholder-neutral-700 transition-all duration-200 font-light disabled:opacity-50"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@crushui.com"
                disabled={isLoading}
                className="w-full px-4 py-3 text-sm bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-200 dark:border-neutral-800/80 rounded-xl focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:bg-white dark:focus:bg-neutral-900 placeholder-neutral-300 dark:placeholder-neutral-700 transition-all duration-200 font-light disabled:opacity-50"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Choose Password
              </label>
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

            {/* Confirm Password Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled={isLoading}
                  className="w-full px-4 py-3 text-sm bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-200 dark:border-neutral-800/80 rounded-xl focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:bg-white dark:focus:bg-neutral-900 placeholder-neutral-300 dark:placeholder-neutral-700 transition-all duration-200 font-light disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={15} strokeWidth={1.5} />
                  ) : (
                    <Eye size={15} strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Static Error Banner */}
          {validationError && (
            <div className="flex items-center gap-2.5 px-4 py-3 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-xs font-light">
              <AlertCircle size={14} className="shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Registration Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 py-3.5 rounded-xl font-medium text-xs uppercase tracking-widest transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <div className="flex items-center gap-2">
                Register Platform <ArrowRight size={14} />
              </div>
            )}
          </button>
        </form>

        {/* Footnote Link */}
        <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800/60 text-center text-[11px] text-neutral-400 dark:text-neutral-500 font-light">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-neutral-900 dark:text-neutral-100 font-medium underline underline-offset-4 hover:opacity-70 transition-opacity ml-1"
          >
            Sign in instead
          </Link>
        </div>
      </div>
    </div>
  );
}
