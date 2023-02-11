import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CalendarIcon } from '@heroicons/react/20/solid'

// Form validation
import { useForm } from "react-hook-form";
import { type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from '@utils/api';

// Router
import { useRouter } from 'next/router'

import { type User } from '@prisma/client';

const dueDates = [
    { name: 'No due date', value: null },
    { name: 'Today', value: 'today' },
]

const Form: React.FC<{
    userData: User | null | undefined
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
    userData,
    setOpen
}) => {


        // Form validation starts
        const validationSchema = z.object({
            title: z.string().min(1).max(100),
            description: z.string().min(1).max(1000),
            dueDate: z.string().optional(),
        })

        type ValidationSchema = z.infer<typeof validationSchema>;

        const { register, handleSubmit } = useForm<ValidationSchema>({
            resolver: zodResolver(validationSchema),
        });
        // Form validation ends


        // Note creation starts
        const mutation = api.notes.createNote.useMutation();

        const router = useRouter();
        const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
            if (userData?.id) {
                mutation.mutate({
                    title: data.title,
                    content: data.description,
                    userId: userData.id,
                });
                setOpen(false);
                router.reload();
            }
        };
        // Note creation ends



        return (
            <form className="relative" onSubmit={handleSubmit(onSubmit)} >
                <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                    <label htmlFor="title" className="sr-only">
                        Title
                    </label>
                    <input
                        type="text"
                        {...register("title")}
                        id="title"
                        className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0 focus:outline-0 pl-2"
                        placeholder="Titulo de la nota"
                    />
                    <label htmlFor="description" className="sr-only">
                        Description
                    </label>
                    <textarea
                        rows={2}
                        {...register("description")}
                        id="description"
                        className="block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 focus:outline-0 sm:text-sm pl-2"
                        placeholder="Escribe una descripción..."
                        defaultValue={''}
                    />

                    {/* Spacer element to match the height of the toolbar */}
                    <div aria-hidden="true">
                        <div className="py-2">
                            <div className="h-9" />
                        </div>
                        <div className="h-px" />
                        <div className="py-2">
                            <div className="py-px">
                                <div className="h-9" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="absolute inset-x-px bottom-0">
                    {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
                    <div className="flex flex-nowrap justify-end space-x-2 py-2 px-2 sm:px-3">
                        {/* <Listbox as="div" value={dated} onChange={setDated} className="flex-shrink-0">
                        {({ open }) => (
                            <>
                                <Listbox.Label className="sr-only"> Add a due date </Listbox.Label>
                                <div className="relative">
                                    <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 py-2 px-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                                        <CalendarIcon
                                            className={'h-5 w-5 flex-shrink-0 sm:-ml-1 text-gray-300'}
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={'hidden truncate sm:ml-2 sm:block'}
                                        >
                                            Due date
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute right-0 z-50 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {dueDates.map((dueDate) => (
                                                <Listbox.Option
                                                    key={dueDate.value}
                                                    className={'relative cursor-default select-none py-2 px-3 z-50  hover:bg-gray-100'}
                                                    value={dueDate}
                                                >
                                                    <div className="flex items-center">
                                                        <span className="block truncate font-medium">{dueDate.name}</span>
                                                    </div>
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox> */}
                    </div>
                    <div className="flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
                        <div className="flex-shrink-0">
                            <button
                                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                type="submit"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }


export default Form;

