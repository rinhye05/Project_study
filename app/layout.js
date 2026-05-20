import './globals.css';

export const metadata = {
  title: 'Arirang Class - 한국어 토픽 전문 인강',
  description: '입문부터 6급까지, 체계적인 TOPIK 전문 한국어 인강 플랫폼',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
