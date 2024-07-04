import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            <Header/>

            <main className="flex-grow container mx-auto flex flex-col items-center py-8">
                <h1 className="text-3xl font-bold">
                    Welcome to the Task Management App
                </h1>

                <div className="text-center">

                </div>

            </main>

            <Footer/>
        </div>
    );
}
