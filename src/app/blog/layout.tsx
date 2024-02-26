
import { Metadata } from "next";
export const metadata: Metadata = {
    title: {
        absolute:"", // to ignore completely parent metadata --> use by yourself (see blog/first)
        default:"Next.js default metadata for products", // in case if child of current folder has no title this will be the fallback title
        template:"%s | Template Metadata"
    },
    description: "Profile page description",
};

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
