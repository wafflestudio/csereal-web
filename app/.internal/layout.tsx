import RootLayout from '../[locale]/layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout params={{ locale: 'ko' }}>{children}</RootLayout>;
}
