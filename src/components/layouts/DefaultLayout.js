import Footer from '../Footer';
import Header from '../Header';

export default function DefaultLayout({ handleLogin, children }) {
  return (
    <>
      {/* <Header handleLogin={handleLogin} /> */}
      <Header />
      <main className='max-w-7xl mx-auto mt-10'>{children}</main>
      {<Footer />}
    </>
  );
}
