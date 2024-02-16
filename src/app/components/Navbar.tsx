import React from 'react'
import type { Session } from 'next-auth'


export default function Navbar({ user }: { user: Session }) {
    return (
        <div className='w-full h-24 bg-slate-300'>
            <div className='float-right'>
                {(user == undefined) ? "not signed in" :
                    <p>{user.user?.email}</p>
                }
            </div>
        </div>
    )
}