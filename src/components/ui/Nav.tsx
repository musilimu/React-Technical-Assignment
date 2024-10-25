import { Disclosure} from '@headlessui/react'
import { MagnifyingGlassIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function Nav() {
    return (
        <Disclosure as="nav" className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <form action="" className='flex'>
                                    <input
                                        type='text'
                                        className='p-2 rounded-sm border-none outline-none bg-gray-100'
                                    />
                                    <button className='ml-[-2rem]'><MagnifyingGlassIcon width={24} height={24} aria-hidden="false"  className='text-gray-400'/></button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full p-1 text-gray-400 "
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Togge theme</span>
                            <MoonIcon width={24} height={24}/>
                        </button>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}
