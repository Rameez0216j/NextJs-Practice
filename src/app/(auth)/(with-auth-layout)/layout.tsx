// This is a Route Group Layout
export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-slate-200 p-5">
            <p>This is a with auth layout.</p>
            {children}
        </div>
    )
}
