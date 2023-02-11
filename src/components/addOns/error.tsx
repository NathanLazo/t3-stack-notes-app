import { XCircleIcon } from '@heroicons/react/20/solid'

export default function Error() {
    return (
        <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                        There was an error with your request
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                        <ul role="list" className="list-disc space-y-1 pl-5">
                            <li>
                                Try refreshing the page.
                            </li>
                            <li>
                                If the problem persists, contact support.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
