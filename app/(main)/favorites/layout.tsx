import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Favorites",
  description: "View shows you have saved.",
};

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
