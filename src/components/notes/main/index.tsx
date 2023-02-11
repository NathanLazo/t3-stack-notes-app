
import { type User } from "@prisma/client";
import Title from "./title";
import NotesRender from "./note/notesRender";


const Notes: React.FC<{ userData: User }> = ({
    userData
}) => {
    return (
        <>
            <Title
                userData={userData}
            />
            <NotesRender userData={userData} />
        </>
    )
}

export default Notes;