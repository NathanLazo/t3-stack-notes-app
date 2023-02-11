import Loader from "@components/addOns/loader";
import { useSession } from 'next-auth/react';
import { api } from "@utils/api";
import Error from "@components/addOns/error";
import Nav from "@components/nav";
import Main from "./main";


const NotesContainer: React.FC = () => {

    // gets the user email from the session
    const { data: sessionData } = useSession();
    const userEmail = sessionData?.user?.email;


    if (userEmail) {
        // gets the user data from the database
        const { data: userData } = api.user.getUserData.useQuery({ email: userEmail });

        // if the user data is loaded
        if (userData) {
            return (
                <>
                    <Nav />
                    <Main userData={userData} />
                </>
            );
        }

    }
    // if the user data is not loaded
    else {
        return (
            <>
                <Error />
            </>
        )
    }

    // if there is an error with component
    return (
        <>
            <Loader />
        </>
    )

}

export default NotesContainer;
