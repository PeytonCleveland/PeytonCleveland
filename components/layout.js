import Header from "./header";
import Chat from "./chat";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Chat />
    </>
  );
};

export default Layout;
