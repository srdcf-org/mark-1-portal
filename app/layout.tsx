export const metadata = {
  title: "SRDCF Mark 1 Portal",
  description: "Internal performance & reporting portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
