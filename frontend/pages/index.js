import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div>

            <Header/>

            <main>
                <h1 className="text-3xl font-bold underline">
                    Welcome to the Task Management App
                </h1>
            </main>

            <Footer/>
        </div>
    );
}
