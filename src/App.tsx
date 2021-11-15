import Routes from "./Routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global";
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <>
            <GlobalStyle />
            <ToastContainer
                theme="colored"
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <AnimatePresence exitBeforeEnter>
                <Routes />
            </AnimatePresence>
        </>
    );
}

export default App;
