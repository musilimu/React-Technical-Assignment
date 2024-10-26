import { CalendarDaysIcon, StarIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import Users from "./Users"

const OverView = () => {
    return (
        <div>
            <div className="flex justify-between mb-3">
                <h2 className="font-bold">Project overview</h2>
                <Link to={'/'} className="text-gray-400">See All</Link>
            </div>

            <div className="grid gap-3 bg-gray-200/40 p-5 rounded-lg">
                <p className="text-gray-400 flex items-center gap-2" ><CalendarDaysIcon width={24} height={24} />Timeline: <span className="text-gray-600">Oct 26 - Oct 30</span></p>
                <p className="text-gray-400 flex items-center gap-2" ><UserGroupIcon width={36} height={36} />Team: <Users showAll={true} className="flex-wrap" /></p>
                <p className="text-gray-400 flex items-center gap-2" ><StarIcon width={24} height={24} />In progress</p>
            </div>
        </div>
    )
}

export default OverView