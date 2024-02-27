"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";

const links = [
    {
        name: "Login",
        link: "/login"
    },
    {
        name: "Sign Up",
        link: "/signup"
    },
    {
        name: "Forgot Password",
        link: "/forgotPassword"
    }
]

// This is a Route Group Layout
export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {

    const pathname = usePathname();
    const [input, setInput] = useState("");


    return (
        <div className="bg-green-500 p-5">
            <p>This is a custom Auth layout.</p>
            {/* The below input state is not persisted on changing the childrens to avoid this remane "template.tsx" to  "layout.tsx" */}
            {/* Template is wrapped in Layout as well */}
            <div>
                <input type="text" placeholder="Template input" value={input} onChange={e => setInput(e.target.value)} />
            </div>
            {children}
        </div>
    )
}
