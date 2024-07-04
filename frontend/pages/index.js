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
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
                        <Link href="/tasks" className="bg-blue-500 text-white px-4 py-2 rounded">View All Tasks </Link>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Projects</h2>
                        <Link href="/projects" className="bg-blue-500 text-white px-4 py-2 rounded">View All
                            Projects </Link>
                    </section>

                </div>

            </main>

            <Footer/>
        </div>
    );
}
