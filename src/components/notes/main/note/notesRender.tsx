import { type User } from "@prisma/client";
import { api } from "@utils/api"
import DeleteNote from "./deleteNote";

const Note: React.FC<{
    userData: User
}> = ({
    userData
}) => {

        const { data: allNotesFromUser } = api.notes.getNotes.useQuery({
            userId: userData.id
        });

        return (
            <>
                {
                    allNotesFromUser?.map((note) => {
                        return (
                            <div className="flex justify-between gap-2 p-4 border-b border-gray-300 mx-8" key={note.id}>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-100">{note.title}</h2>
                                    <p className="text-gray-300">{note.content}</p>
                                </div>

                                <div className="flex justify-center items-center">

                                    <DeleteNote id={note.id} />
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }

export default Note
