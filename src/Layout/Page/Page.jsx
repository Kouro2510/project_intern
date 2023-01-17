import Header from "../../Conpoments/Page/Header/Header";
import Footer from "../../Conpoments/Page/Footer";
import "./Page.css"
const Page = ({children}) => {
    return(
        <div className="custompage">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default Page