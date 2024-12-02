
export default function NewsLetter() {
    return (
        <>
            <div className="flex justify-center h-[400px] rounded-xl px-2 my-[20%] bg-gray-800">
                <div className="max-w-2xl mt-[60px] px-3 py-5 rounded-2xl md:px-8 md:py-7">
                    <h4 className="text-[40px] font-normal text-center tracking-wide text-white">
                    An enterprise template to ramp <br /> up your company website
                    </h4>
                    <div className="my-4 sm:flex sm:flex-row sm:justify-evenly">
                        <input 
                        className=" block w-full px-4 py-3 mt-3 text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded-full appearance-none sm:max-w-xs focus:outline-none focus:ring focus:ring-blue-50 focus:border-blue-300"
                        type="email" 
                        placeholder="Enter your email" 
                        value="" />
                        <button className="bg-green-400 hover:bg-green-500 block w-full py-3 mt-3 font-bold tracking-wide rounded-full shadow sm:ml-3 md:w-52 text-gray-900 focus transition duration-300">
                            <span className="block ">Start now</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}