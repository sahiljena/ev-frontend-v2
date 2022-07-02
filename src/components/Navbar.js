const Navbar = ({user, logout}) =>{
    //console.log(user);
    return(
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow-md">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        EV Portal
                    </span>
                </a>
                {user?<><p className="font-bold">👋, {(user.name)}</p>
                <button onClick={()=>logout()} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout </button>
                </>:null}
                
            </div>
        </nav>
    );
}

export default Navbar;