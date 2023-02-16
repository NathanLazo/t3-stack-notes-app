import Image from "next/image"
import Logo from '@images/the-zen-logo.png'
import GoogleLogo from '@images/google.png'
import { signIn } from "next-auth/react"
import { toast } from 'react-hot-toast';


const Auth = () => {

    return (
        <div className="h-screen bg-gradient-to-t from-zinc-800 to-indigo-900 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                <Image src={Logo} alt="logo" width={100} height={100} />
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login to your account</p>

                    <button aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
                        onClick={() => {
                            signIn('google').
                                then(() => {
                                    toast.success('Logged in successfully')
                                    console.log('Logged in successfully');

                                })
                                .catch((err) => {
                                    toast.error('Something went wrong')
                                    console.log(err);
                                })
                        }}
                    >
                        <Image src={GoogleLogo} alt="google" width={20} height={20} />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>

                </div>
            </div>
        </div>
    )

}


// In case I want more auth methods 
{/* <button aria-label="Continue with github" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg" alt="github" />
<p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
</button>
<button aria-label="Continue with twitter" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg" alt="twitter" />
<p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
</button> */}

export default Auth