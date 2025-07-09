export default function ProjectPage({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="mobile-op mx-auto py-12 space-y-8 min-h-screen h-fit">
            <a className="panel-link" href="../">Back</a>
            {children}
        </div>
    )
}