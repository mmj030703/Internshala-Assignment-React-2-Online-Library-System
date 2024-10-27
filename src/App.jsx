import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import { Provider } from "react-redux";
import bookStore from "./utils/store/bookStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={bookStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App
