export default function Showcase({
  children, id
}: Readonly<{
  children: React.ReactNode;
  id: string
}>) {
 return (
    <div id={id} className="showcase-grid snap-center scroll-mt-10">
        <div className="grid grid-cols-2 items-start max-w-[95%] w-fit gap-x-2 gap-y-4 m-auto mt-2 mb-10
        lg:max-w-[80%] lg:gap-x-12 lg:gap-y-8">
            {children}
        </div>
    </div>
 )
}