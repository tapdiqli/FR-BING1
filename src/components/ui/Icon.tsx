type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, React.ReactNode> = {
  shield: (
    <path d="M12 3 4.5 6v6c0 4.2 3.1 7.6 7.5 9 4.4-1.4 7.5-4.8 7.5-9V6L12 3Zm-1 11.6-2.8-2.8 1.4-1.4L11 11.8l3.4-3.4 1.4 1.4-4.8 4.8Z" />
  ),
  chart: (
    <path d="M4 20V4h2v14h14v2H4Zm4-3V11h2.5v6H8Zm4.5 0V7H15v10h-2.5Zm4.5 0v-4h2.5v4H17Z" />
  ),
  compass: (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm3.8-11.8-6 2.4-2.4 6 6-2.4 2.4-6ZM12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
  ),
  age: (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM9.6 15H7.4l-.9-2.6H9V8h1.6v7Zm7 0h-4.2V8h4.2v1.6h-2.6v1.1h2.6V15Zm-2.6-1.6h1V12.3h-1v1.1Z" />
  ),
  check: <path d="m9.6 16.2-3.8-3.8 1.4-1.4 2.4 2.4 6.8-6.8 1.4 1.4-8.2 8.2Z" />,
  arrow: <path d="M13.2 5.6 11.8 7l4 4H4v2h11.8l-4 4 1.4 1.4L20 12l-6.8-6.4Z" />,
  chevron: <path d="M12 15.4 5.6 9l1.4-1.4 5 5 5-5L18.4 9 12 15.4Z" />,
  menu: <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />,
  close: (
    <path d="M18.3 7.1 16.9 5.7 12 10.6 7.1 5.7 5.7 7.1l4.9 4.9-4.9 4.9 1.4 1.4 4.9-4.9 4.9 4.9 1.4-1.4-4.9-4.9 4.9-4.9Z" />
  ),
  mail: (
    <path d="M3 5h18v14H3V5Zm2 2v.5l7 4.4 7-4.4V7H5Zm14 10V9.9l-7 4.4-7-4.4V17h14Z" />
  ),
  phone: (
    <path d="M6.6 3h3.1l1.6 4-2.1 1.4a12.4 12.4 0 0 0 5.4 5.4L16 11.7l4 1.6v3.1c0 .9-.7 1.6-1.6 1.6A15.4 15.4 0 0 1 3 4.6C3 3.7 3.7 3 4.6 3h2Z" />
  ),
  pin: (
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  ),
  scale: (
    <path d="M12 2.5 13.5 6H20v2h-1.3l2.8 6.2c0 1.9-1.7 3.3-3.5 3.3s-3.5-1.4-3.5-3.3L17.3 8H13v11h3v2H8v-2h3V8H6.7l2.8 6.2c0 1.9-1.7 3.3-3.5 3.3S2.5 16.1 2.5 14.2L5.3 8H4V6h6.5L12 2.5Z" />
  ),
  spark: (
    <path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9l2-6.5Zm6.5 10.5.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6Z" />
  ),
  book: (
    <path d="M5 3h11a3 3 0 0 1 3 3v15H8a3 3 0 0 1-3-3V3Zm2 2v13c0 .6.4 1 1 1h9V6a1 1 0 0 0-1-1H7Zm2 2h7v2H9V7Zm0 4h7v2H9v-2Z" />
  ),
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
