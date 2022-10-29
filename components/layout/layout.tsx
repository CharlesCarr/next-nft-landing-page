// app/layout.tsx
import { Space_Grotesk } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const space = Space_Grotesk();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={space.className}>
      <body>{children}</body>
    </html>
  );
}
