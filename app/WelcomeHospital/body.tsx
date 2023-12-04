import Image from "next/image";

export default function WelcomeDoctor() {
    return (
        <main className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center border-b-4 border-blue-800 mt-28 mb-5">Welcome Hospital X
            </h1>
            <div className="flex items-center justify-center">
                <button
                    className="flex flex-col items-center justify-center w-500 h-500 border border-blue-600 text-blue font-bold px-10 py-10 m-10 rounded-md hover:bg-blue-200"
                >
                    <Image src="/consulting.png" alt="consulting" id="consulting" height={200} width={130} />
                    Patient EHR Access Authorization
                </button>
                <button
                    className="flex flex-col items-center justify-center w-400 h-400 border border-blue-600 text-blue font-bold px-20 py-10 m-10 rounded-md hover:bg-blue-200"
                >
                    <Image src="/doctor.png" alt="affilieddoc" id="affilieddoc" height={200} width={130} />
                    Affiliated Doctors
                </button>

                <button
                    className="flex flex-col items-center justify-center w-400 h-400 border border-blue-600 text-blue font-bold px-20 py-10 m-10 rounded-md hover:bg-blue-200"
                >
                    <Image src="/report.png" alt="report" id="report" height={200} width={130} />
                    EHR
                </button>
            </div>
        </main>
    )
}


