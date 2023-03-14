import "./globals.css";

export const metadata = {
  title: "My Movies Next 13",
  description: "Diving into Next 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
