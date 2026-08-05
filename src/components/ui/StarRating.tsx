type StarRatingProps = {
  value: number;
  className?: string;
};

export function StarRating({ value, className = "" }: StarRatingProps) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Note de ${value} sur 5`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-4 w-4 ${index < value ? "text-gold-500" : "text-mist-200"}`}
          fill="currentColor"
        >
          <path d="M10 1.6l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.6Z" />
        </svg>
      ))}
    </div>
  );
}
