import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid';


const SearchNotes: React.FC<{
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({
    setFilter
}) => {
        return (
            <div>
                <div className="mt-1 flex rounded-md shadow-sm">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <DocumentMagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Note name..."
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Buscar</span>
                    </button>
                </div>
            </div>
        )
    }

export default SearchNotes;