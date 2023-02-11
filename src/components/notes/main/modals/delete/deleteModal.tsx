import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { DocumentMinusIcon } from '@heroicons/react/24/outline'
import { api } from "@utils/api";
import { useRouter } from "next/router";

const Modal: React.FC<{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    id: string
}> = ({
    open,
    setOpen,
    id
}) => {

        const router = useRouter();
        const mutation = api.notes.deleteNote.useMutation();


        return (
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white h-full px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                            <DocumentMinusIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                Are you sure you want to delete this note?
                                            </Dialog.Title>
                                            <div className="mt-8 flex justify-between mx-10">
                                                <button
                                                    className='bg-red-200 px-4 py-1 rounded-xl hover:bg-red-300'
                                                    onClick={() => {
                                                        setOpen(false)
                                                    }}
                                                >
                                                    No
                                                </button>
                                                <button
                                                    className='bg-green-200 px-4 py-1 rounded-xl hover:bg-green-300'
                                                    onClick={() => {
                                                        mutation.mutate({ id: id });
                                                        router.reload();
                                                    }}
                                                >
                                                    Yes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        )
    }

export default Modal
