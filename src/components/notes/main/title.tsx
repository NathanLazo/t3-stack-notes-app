// import SearchNotes from './searchNotes';
import { useState } from 'react';
import CreateModal from './modals/create/createModal';
import { type User } from '@prisma/client';

const Title: React.FC<{
    userData: User
}> = ({
    userData
}) => {

        const [openCreateNote, setOpenCreateNote] = useState(false);


        return (
            <>
                <CreateModal
                    open={openCreateNote}
                    setOpen={setOpenCreateNote}
                    userData={userData}
                />
                <div className="my-6 lg:my-12 container px-6 mx-auto flex items-center justify-between pb-4 border-b border-gray-300">
                    <div>
                        <h4 className="text-2xl font-bold leading-tight text-gray-50">My notes</h4>
                    </div>
                    <div className="flex justify-center items-center gap-4 my-6 lg:mt-0">
                        {/* Search bar */}
                        {/* <SearchNotes  /> */}
                        <button className="transition duration-150 ease-in-out bg-[#604E99] focus:outline-none border hover:bg-[#493b75] rounded text-white px-8 py-2 text-sm"
                            onClick={() => setOpenCreateNote(true)}
                        >
                            Create note
                        </button>
                    </div>
                </div>
            </>
        )
    }

export default Title;
