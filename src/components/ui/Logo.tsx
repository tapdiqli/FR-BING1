import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="AvisdesParis — retour à la page d'accueil"
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/reg/logo.png"
        alt="AvisdesParis"
        width={220}
        height={60}
        priority
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-11"
      />
    </Link>
  );
}
