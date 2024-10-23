/* eslint-disable react/prop-types */
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
