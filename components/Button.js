export default function Button({ children, variant = "primary", onClick }) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-blue-600 text-blue-600 hover:bg-blue-50";

  return (
    <button
      onClick={onClick}
      className={`${styles} px-4 py-2 rounded-md transition font-medium text-sm`}
    >
      {children}
    </button>
  );
}