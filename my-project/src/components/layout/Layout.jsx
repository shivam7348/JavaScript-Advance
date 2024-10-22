import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Layout({ children }) {  // Use lowercase "children"
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}  {/* Render children here */}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
