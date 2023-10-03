export default function Button({ children, label, style }) {
  if (label === "red") {
    return (
      <button className={`bg-[#E17654] text-white ${style}`}>{children}</button>
    );
  } else if (label === "black") {
    return (
      <button className={`bg-[#161616] text-white ${style}`}>{children}</button>
    );
  } else if (label === "green") {
    return (
      <button className={`bg-[#115E59] text-white ${style}`}>{children}</button>
    );
  } else if (label === "orange") {
    return (
      <button className={`bg-[#FF8C38] text-white ${style}`}>{children}</button>
    );
  }
  return <button className={`bg-[#FFEAD0] ${style}`}>{children}</button>;
}
