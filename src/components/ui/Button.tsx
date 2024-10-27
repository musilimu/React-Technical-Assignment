import React, { ButtonHTMLAttributes, PropsWithChildren } from "react"

export const Button: React.FC<{} & ButtonHTMLAttributes<unknown> & PropsWithChildren> = ({ children, disabled }) => {
    return (
        <button disabled={disabled} className='flex items-center justify-between gap-2  py-2 px-4 rounded-md bg-blue-400'>{children}</button>
    )
}
