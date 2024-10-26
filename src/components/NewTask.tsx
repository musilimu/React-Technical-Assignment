import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { PlusIcon } from "@heroicons/react/24/outline";

const NewTask = () => {
    return (
        <div>
            <h2 className="text-gray-500 font-semibold text-xl">Add New Task</h2>
            <form>
                <SimpleMDE />
                <button className='flex items-center justify-between gap-2  py-2 px-4 rounded-md bg-blue-400'>save <PlusIcon width={16} height={16} /></button>
            </form>
        </div>
    )
}

export default NewTask