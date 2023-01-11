import Footer from '../Footer';
import Header from '../Header';

export default function DefaultLayout({ handleLogin, children }) {
  return (
    <>
      {/* <Header handleLogin={handleLogin} /> */}
      <Header />
      <main className='max-w-7xl mx-auto mt-10'>{children}</main>
      <div className="absolute inset-x-0 bottom-12 h-16">
        {<Footer />}
      </div>
    </>
  );
}
