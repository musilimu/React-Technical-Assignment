import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../api/users"
import { useUserStore } from "../../state"
import User from "../User"
import { PlusIcon, UserIcon, Cog6ToothIcon, HomeIcon, EnvelopeIcon, FolderMinusIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline"
import React, { ReactNode } from "react"
import { Tab, TabGroup, TabList } from "@headlessui/react"


const SidebarControl: React.FC<{ icon: ReactNode, className?: string }> = ({ icon, className }) => {
    return <div className={`flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-500 cursor-pointer ${className}`}>
        {icon}
    </div>
}

const Sidebar = () => {
    const filters = useUserStore(state => state.filters)
    const { isPending, error, data } = useQuery({
        queryKey: ['users', filters],
        queryFn: () => getUsers(filters)
    })

    if (isPending) return <p>Loading</p>
    if (error) return <p>{error?.message}</p>
    return (
        <div className="sidebar flex flex-col border-r-2 gap-3 items-center justify-between h-screen fixed bg-white z-10">
            <div className="flex flex-col p-5 gap-4">
                <User {...data.users[0]} className="mb-12" />
                <TabGroup className="w-full">
                    <TabList className="flex flex-col gap-4 bg-white rounded-xl w-full relative">
                        <Tab
                            key={'home'}
                            className="relative text-sm/6 font-semibold focus:outline-none data-[selected]:text-blue-600"
                        >
                            <SidebarControl icon={<HomeIcon width={24} height={24} />} />
                            <span className="absolute bottom-0 rounded-r-md -left-5 h-full bg-blue-600 transition-all duration-300 ease-in-out transform scale-y-0 w-1"></span>
                        </Tab>
                        <Tab
                            key={'Messages'}
                            className="relative text-sm/6 font-semibold focus:outline-none data-[selected]:text-blue-600"
                        >
                            <SidebarControl icon={<>
                                <button
                                    type="button"
                                    className="relative rounded-lg p-1"
                                >
                                    <span className="absolute bg-red-600 w-2 h-2 rounded-full right-1 top-3/2 red-dot" />
                                    <span className="sr-only">Messages</span>
                                    <EnvelopeIcon width={24} height={24} />
                                </button>
                            </>} />
                            <span className="absolute bottom-0 rounded-r-md -left-5 h-full bg-blue-600 transition-all duration-300 ease-in-out transform scale-y-0 w-1"></span>
                        </Tab>
                        <Tab
                            key={'FolderMinusIcon'}
                            className="relative text-sm/6 font-semibold focus:outline-none data-[selected]:text-blue-600"
                        >
                            <SidebarControl icon={<FolderMinusIcon width={24} height={24} />} />
                            <span className="absolute bottom-0 rounded-r-md -left-5 h-full bg-blue-600 transition-all duration-300 ease-in-out transform scale-y-0 w-1"></span>
                        </Tab>
                        <Tab
                            key={'PresentationChartLineIcon'}
                            className="relative text-sm/6 font-semibold focus:outline-none data-[selected]:text-blue-600"
                        >
                            <SidebarControl icon={<PresentationChartLineIcon width={24} height={24} />} />
                            <span className="absolute bottom-0 rounded-r-md -left-5 h-full bg-blue-600 transition-all duration-300 ease-in-out transform scale-y-0 w-1"></span>
                        </Tab>
                    </TabList>

                </TabGroup>
            </div>
            <div className="flex flex-col p-5 gap-3">
                {data.users.slice(0, 3).map(user => <User key={user.id} {...user} />)}
                <SidebarControl icon={<PlusIcon width={24} height={24} />} className="ring-1 ring-gray-100" />
            </div>
            <div className="mb-4">
                <SidebarControl icon={<Cog6ToothIcon width={24} height={24} />} />
                <SidebarControl icon={<UserIcon width={24} height={24} />} />
            </div>
        </div>
    )
}

export default Sidebar