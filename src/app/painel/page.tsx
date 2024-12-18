import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";

const PainelPage = async () => {

    const session = await auth()

    if(!session) {
        return redirect('/')
    }

    return ( 
        <div className="w-full h-screen bg-gray-100 flex items-center justify-center flex-col">
            <h1 className="text-2xl font-bold">Painel do usuario</h1>
            <div>
                <p>{session.user?.email}</p>
            </div>

            <form action={async () => {
                "use server"
                await signOut()
            }}>

            <button className="bg-red-400 p-2 rounded shadow-md flex">Logout</button>
            </form>
        </div>
     );
}
 
export default PainelPage;