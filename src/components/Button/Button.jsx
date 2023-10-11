export default function Button({ children, color, style, selected, disabled }) {
  if (color === "simple") {
    return (
      <button
        disabled={disabled}
        className={`bg-[#E17654] rounded-md px-5 py-2 ${
          selected ? "" : "text-white"
        } ${style}`}
      >
        {children}
      </button>
    );
  } else if (color === "dark" || color === "luxury") {
    return (
      <button
        disabled={disabled}
        className={`bg-[#161616] rounded-md px-5 py-2 ${
          selected ? "" : "text-white"
        } ${style}`}
      >
        {children}
      </button>
    );
  } else if (color === "rugged") {
    return (
      <button
        disabled={disabled}
        className={`bg-[#115E59] rounded-md px-5 py-2 ${
          selected ? "" : "text-white"
        } ${style}`}
      >
        {children}
      </button>
    );
  } else if (color === "orange") {
    return (
      <button
        disabled={disabled}
        className={`bg-[#FF8C38] rounded-md px-5 py-2 ${
          selected ? "" : "text-white"
        } ${style}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      disabled={disabled}
      className={`bg-[#FFEAD0] rounded-md px-5 py-2 ${
        selected ? "text-white" : "text-black"
      } ${style}`}
    >
      {children}
    </button>
  );
}
