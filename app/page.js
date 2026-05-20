import Header from './components/Header';
import Hero from './components/Hero';
import NoticeBar from './components/NoticeBar';
import CategoryNav from './components/CategoryNav';
import InstructorSection from './components/InstructorSection';
import CourseSection from './components/CourseSection';
import StatsBar from './components/StatsBar';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <NoticeBar />
      <CategoryNav />
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 32px 80px' }}>
        <InstructorSection />
        <CourseSection />
      </main>
      <StatsBar />
      <Footer />
      <Modal />
    </>
  );
}
