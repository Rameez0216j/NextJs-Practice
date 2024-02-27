// import NotificationAnalyticsPage from "./@notifications/page"
// import RevenueAnalyticsPage from "./@revenue/page"
// import UserAnalyticsPage from "./@users/page"

// export default function ProductLayout({
//     children
// }: {
//     children: React.ReactNode
// }) {
//     return (
//         <div className="bg-gray-200 p-5">
//             {children}
//             <NotificationAnalyticsPage/>
//             <RevenueAnalyticsPage/>
//             <UserAnalyticsPage/>
//         </div>
//     )
// }





// Below is about parallel routes (Slots)
// Every slots are independent of each other (you can show loading specifically for a slot and others being renderd and much more)
// We can do sub-navigation as well
// Simultaneous loading for different slots/pages
export default function ProductLayout({
    children,
    users,
    revenue,
    notifications
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode
}) {
    return (
        <div>
            {children}
            <div className="flex">
                <div className="flex flex-col">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex flex-1">{notifications}</div>
            </div>

        </div>
    )
}
