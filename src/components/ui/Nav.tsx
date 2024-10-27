import { Button, Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon, MoonIcon, BellIcon } from '@heroicons/react/24/outline'
import i18n, { languages } from '../../i18n'

export default function Nav() {
    return (
        <Disclosure as="nav" className="bg-white">
            <div className="px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <form action="" className='flex'>
                                    <input
                                        type='text'
                                        placeholder='Search'
                                        className='p-2 rounded-sm border-none outline-none bg-gray-100'
                                    />
                                    <button className='ml-[-2rem]'><MagnifyingGlassIcon width={24} height={24} aria-hidden="false" className='text-gray-400' /></button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
                        <button
                            type="button"
                            className="relative rounded-lg p-1 text-gray-400 bg-gray-200/50"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Togge theme</span>
                            <MoonIcon width={24} height={24} />
                        </button>
                        <button
                            type="button"
                            className="relative rounded-lg p-1 text-gray-400 bg-gray-200/50"
                        >
                            <span className="absolute bg-red-600 w-2 h-2 rounded-full right-3/2 top-3/2" />
                            <span className="sr-only">Notifications</span>
                            <BellIcon width={24} height={24} />
                        </button>
                        <Menu >
                            {/* @ts-ignore */}
                            <MenuButton>{languages[i18n.language]}</MenuButton>
                            <MenuItems anchor="bottom" className="bg-white p-4">
                                {Object.keys(languages).map(lang => <MenuItem
                                    // @ts-ignore
                                    onClick={() => i18n.changeLanguage(lang)}>
                                    <Button className="block data-[focus]:bg-blue-100">
                                        {/* @ts-ignore */}
                                        {languages[lang]}
                                    </Button>
                                </MenuItem>)}

                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}
