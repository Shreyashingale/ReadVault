
"use client"; // ✅ Required for useSession

import { useSession } from "next-auth/react";

export default function Dashboard (){
    const { data: session, status } = useSession();

    console.log("session : " , session);
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    )
}