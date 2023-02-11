import LogoComponent from "@components/logo";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";


export default function nav() {
    return (
        <nav className="w-full mx-auto bg-white shadow">
            <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
                <div className="h-full flex items-center justify-between w-full">
                    <div className="mr-10 flex items-center">
                        <LogoComponent />
                        <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">The Zen Notes</h3>
                    </div>
                    <button className="flex gap-2 items-center justify-center text-gray-500 hover:text-gray-900"
                        onClick={() => {
                            signOut()
                                .then(() => {
                                    toast.success("Sesión cerrada correctamente")
                                })
                                .catch((err) => {
                                    toast.error("Recarga la pagina!")
                                    console.log(err)
                                })
                        }}
                    >
                        Sign Out <ArrowRightOnRectangleIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
