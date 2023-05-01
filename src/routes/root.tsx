import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/common/footer";
import Header from "../components/common/header";

export default function Root() {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <section className="flex-1">
                <Outlet />
            </section>
            <Footer/>
            <ScrollRestoration />
        </div>
    )
}