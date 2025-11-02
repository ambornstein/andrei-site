export default function Showcase({
  children, id
}: Readonly<{
  children: React.ReactNode;
  id: string
}>) {
 return (
    <div id={id} className="showcase-grid snap-center scroll-mt-10">
        <div className="grid grid-cols-1 items-start max-w-[55%] w-fit gap-x-2 gap-y-4 m-auto mt-2 mb-10
         lg:gap-x-12 lg:gap-y-8 lg:grid-cols-2 lg:max-w-[80%]">
            {children}
        </div>
    </div>
 )
}