import "./globals.css";

export const metadata = {
  title: "SwapHub",
  description: "Eksamen WU12",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
