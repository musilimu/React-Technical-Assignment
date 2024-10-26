import { EllipsisVerticalIcon, MicrophoneIcon, } from "@heroicons/react/24/outline"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import User from "./User"

const TEAM_CHAT = [
    {
        user: "Alice",
        message: "Hey everyone! Just a reminder that we have our stand-up in 15 minutes. What’s everyone working on?",
        timestamp: "09:00 AM"
    },
    {
        user: "Bob",
        message: "I’m finishing up the feature for user authentication. Just need to push a few changes and submit the PR.",
        timestamp: "09:00 AM"
    },
    {
        user: "Charlie",
        message: "Nice! I just submitted my PR for the new dashboard layout. Can you review it, Alice?",
        timestamp: "09:00 AM"
    },
    {
        user: "Alice",
        message: "Absolutely, I’ll take a look right after the stand-up. How’s the feedback been on your PRs, everyone?",
        timestamp: "09:00 AM"
    },
    {
        user: "Bob",
        message: "I got a couple of comments on mine about the API endpoints. I’m working on addressing them now.",
        timestamp: "09:00 AM"
    }]


const TeamChat = () => {
    const currentUser = "Bob"

    return (
        <div className="relative">
            <div className="flex justify-between items-center my-5"><p>Team Chat <span className="text-gray-400 ml-8">26 Oct 2024</span></p> <EllipsisVerticalIcon width={24} height={24} /></div>
            <div className="grid gap-3">
                {TEAM_CHAT.map(({ message, timestamp, user }) => (
                    <div>
                        <div className={`flex gap-2 ${currentUser === user ? "" : "flex-row-reverse"}`}>
                            <User id={1} username="Muslim uwi" image={`https://dummyjson.com/icon/${user}/128`} /> <span>{user}</span> <span className="text-gray-400">{timestamp}</span>
                        </div>
                        <p className={`p-3 rounded-md rounded-tl-none ${currentUser === user ? "ml-12 bg-green-50" : "mr-12 bg-gray-100"}`}>{message}</p>
                    </div>
                ))}
            </div>
            <form className="flex flex-1 items-center my-4 fixed bottom-0 right-8 w-full max-w-lg">
                <input
                    type='text'
                    placeholder='Your message...'
                    className='p-2 rounded-sm border-none outline-none bg-gray-100 flex-1'
                />
                <div className="text-gray-500 flex gap-3 -ml-8">
                    <button><MicrophoneIcon width={24} height={24} /></button>
                    <button><PaperAirplaneIcon width={24} height={24} fill="blue" /></button>
                </div>
            </form>
        </div>
    )
}

export default TeamChat