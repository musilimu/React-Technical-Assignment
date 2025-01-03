import { CalendarDaysIcon, StarIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import Users from "./Users"
import { useTranslation } from "react-i18next";

const OverView = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="flex justify-between mb-3">
                <h2 className="font-bold">{t("Project overview")}</h2>
                <Link to={'/'} className="text-gray-400 dark:text-gray-500">{t("See All")}</Link>
            </div>

            <div className="grid gap-3 bg-gray-200/40 dark:bg-gray-700 p-5 rounded-lg">
                <p className="text-gray-400 dark:text-gray-200 flex items-center gap-2" ><CalendarDaysIcon width={24} height={24} />{t("Timeline")}: <span className="text-gray-600 dark:text-gray-400">Oct 26 - Oct 30</span></p>
                <p className="text-gray-400 dark:text-gray-200 flex items-center gap-2" ><UserGroupIcon width={36} height={36} />{t("Team")}: <Users showAll={true} className="flex-wrap" /></p>
                <p className="text-gray-400 dark:text-gray-200 flex items-center gap-2" ><StarIcon width={24} height={24} />{t("In progress")}</p>
            </div>
        </div>
    )
}

export default OverView