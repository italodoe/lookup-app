import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function initials(name: string | undefined | null) {
  if (name)
    return name
      ?.split(" ")
      .map((n) => n[0].toUpperCase())
      .join("");
  return "";
}
