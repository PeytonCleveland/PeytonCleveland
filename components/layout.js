import Header from "./header";
import Footer from "./footer";
import Chat from "./chat";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Chat />
      <Footer />
    </>
  );
};

export default Layout;
