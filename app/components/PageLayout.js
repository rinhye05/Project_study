import Header from './Header';
import Footer from './Footer';

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <div style={{ marginTop: 'var(--header-height)', minHeight: '70vh' }}>
        {children}
      </div>
      <Footer />
    </>
  );
}