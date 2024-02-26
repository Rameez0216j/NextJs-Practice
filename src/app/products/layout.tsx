// This is a nested layout
export default function ProductLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-gray-500 p-5">
            <p>This is a custom Product layout.</p>
            {children}
        </div>
    )
}
