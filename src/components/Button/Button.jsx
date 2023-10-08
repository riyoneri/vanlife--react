export default function Button({ children, color, style, selected }) {
  if (color === "simple") {
    return (
      <button
        className={`bg-[#E17654] rounded-md px-5 py-2 ${selected ? "" : "text-white"} ${style}`}
      >
        {children}
      </button>
    );
  } else if (color === "dark" || color === "luxury") {
    return (
      <button
        className={`bg-[#161616] rounded-md px-5 py-2 ${selected ? "" : "text-white"} ${style}`}
      >
        {children}
      </button>
    );
  } else if (color === "rugged") {
    return (
      <button
        className={`bg-[#115E59] rounded-md px-5 py-2 ${selected ? "" : "text-white"} ${style}`}
      >
        {children}
      </button>
    );
  } else if (color === "orange") {
    return (
      <button
        className={`bg-[#FF8C38] rounded-md px-5 py-2 ${selected ? "" : "text-white"} ${style}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button className={`bg-[#FFEAD0] rounded-md px-5 py-2 ${selected ? "text-white" : "text-black"} ${style}`}>
      {children}
    </button>
  );
}
