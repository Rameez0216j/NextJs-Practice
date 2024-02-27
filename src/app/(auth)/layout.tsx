"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

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
    

    return (
        <div className="bg-green-500 p-5">
            <p>This is a custom Auth layout.</p>

            {/* <ul className="flex gap-2 bg-slate-500">
                <li className="p-2 bg-red-400"><Link href="/login">Login</Link></li>
                <li className="p-2 bg-red-400"><Link href="/signup">Sign Up</Link></li>
                <li className="p-2 bg-red-400"><Link href="/forgotPassword">Forgot Password</Link></li>
            </ul> */}

            <ul className="flex gap-2 bg-slate-500 mb-4">
                {
                    links.map((link, index) => {

                        const isActive=pathname.startsWith(link.link);
                        return(
                            <li className={isActive ? "p-2 bg-red-600" : "p-2 bg-red-400"} key={index}><Link href={link.link}>{link.name}</Link></li>
                        )
                    })
                }
            </ul>
            {children}
        </div>
    )
}
