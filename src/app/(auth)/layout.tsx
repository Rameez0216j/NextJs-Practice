// This is a nested layout
export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-green-500 p-5">
            <p>This is a custom Auth layout.</p>
            {children}
        </div>
    )
}
