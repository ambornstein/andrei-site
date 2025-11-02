'use client'
export default function PageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        <button onClick={() => history.go(-1)} className="button self-start">Back</button>
        <div className="column-view panel">
            {children}
        </div>
    </>
}