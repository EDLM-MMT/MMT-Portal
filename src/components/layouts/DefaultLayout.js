import Footer from '../common/Footer';
import Header from '../common/Header';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className='max-w-7xl mx-auto mt-10'>{children}</main>
      <div className="absolute inset-x-0 bottom-12 h-16">
        {<Footer />}
      </div>
    </>
  );
}
