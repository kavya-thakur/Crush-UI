export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base =
    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200";

  const styles = {
    primary: "bg-black text-white hover:bg-neutral-800 active:scale-[0.98]",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:scale-[0.98]",
    ghost: "text-neutral-700 hover:bg-neutral-100 active:scale-[0.98]",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
