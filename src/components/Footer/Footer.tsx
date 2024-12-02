import NewsLetter from "./NewsLetter";


export default function Footer() {
  return (
    <>
    <div className="-mt-10 mx-[60px]">
    <NewsLetter/>
    <div className="px-4 pt-16 -mt-[130px] sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
        <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
        </svg>
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
      </a>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-sm text-gray-600"
        >Social media validation business model <br /> canvas graphical user interface launch <br /> party creative facebook iPad twitter.</p>
      </div>
    </div>
    <div className="space-y-6 text-sm">
      <h1 className="text-[20px] font-bold tracking-wide text-gray-900">Landing Page</h1>
      <div className="flex">
        <p className="mr-1 text-[15px] font-medium text-gray-600">Home</p>
      </div>
      <div className="flex">
        <p className="mr-1 text-[15px] font-medium text-gray-600">Products</p>
      </div>
      <div className="flex">
        <p className="mr-1 text-[15px] font-medium text-gray-600">Services</p>
      </div>
    </div>
    <div className="space-y-6 text-sm">
      <h1 className="text-[20px] font-bold tracking-wide text-gray-900">Ressources</h1>
      <div className="flex">
        <p className="mr-1 text-[15px] font-medium text-gray-600">Blog</p>
      </div>
      <div className="flex">
        <p className="mr-1 text-[15px] font-medium text-gray-600">Products</p>
      </div>
      <div className="flex">
        <p className="mr-1 text-[15px] font-medium text-gray-600">Services</p>
      </div>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row">
    <p className="text-sm text-gray-600">
      All Right Reserved.
    </p>
  </div>
</div>
</div>
    </>
  )
}