import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children: JSX.Element;
}

const Wrapper = ({children}:Props) => {
    return <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>;
}
export default Wrapper;