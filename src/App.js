import {Route, Routes} from "react-router-dom";
import Page from "./Layout/Page/Page";
import "./App.css"
import ProductDetails from "./Conpoments/Page/ProductDetail/ProductDetails";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
        <Routes>

            <Route index path="/" element={<Page><ProductDetails/></Page>}/>

        </Routes>
        <ToastContainer  position="top-right" />
    </>
  );
}

export default App;
