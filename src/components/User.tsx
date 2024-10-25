import React from "react"
import { IUser } from "../api/users"

const User: React.FC<IUser> = ({ image, username }) => {
    return (
        <div>
            <img src={image} width={40} height={40} alt={`${username}'s profile picture`} />
            <p>{username}</p>
        </div>
    )
}

export default User