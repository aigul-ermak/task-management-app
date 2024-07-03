import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            <Header/>

            <main className="flex-grow container mx-auto py-8">
                <h1 className="text-3xl font-bold underline">
                    Welcome to the Task Management App
                </h1>
            </main>

            <Footer/>
        </div>
    );
}
