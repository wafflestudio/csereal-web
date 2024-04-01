export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={params.locale}
      className="bg-neutral-900 font-normal text-neutral-950 sm:min-w-[1000px]"
    >
      <body>{children}</body>
    </html>
  );
}
