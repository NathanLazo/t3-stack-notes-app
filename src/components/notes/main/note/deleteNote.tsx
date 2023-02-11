import { XMarkIcon } from "@heroicons/react/24/solid";
import DeleteModal from "../modals/delete/deleteModal";
import { useState } from "react";

const DeleteNote: React.FC<{
    id: string;
}> = ({ id }) => {

    const [openDeleteModal, setOpenDeleteModal] = useState(false);



    return (
        <>
            <DeleteModal
                open={openDeleteModal}
                setOpen={setOpenDeleteModal}
                id={id}
            />
            <button
                type="button"
                className="relative inline-flex items-center rounded-md border border-red-300 bg-red-50 px-2 h-10 text-sm font-medium text-red-700 hover:bg-red-100"
                onClick={() => {
                    setOpenDeleteModal(true);
                }}
            >
                <XMarkIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                <span>Eliminar</span>
            </button>
        </>
    )
}

export default DeleteNote;