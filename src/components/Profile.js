const Profile = ({bills}) =>{
    return(<>
    <div className="m-auto p-2 mt-10 flex justify-center gap-10 flex-wrap">
        <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >       
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Current Billing
                </h5>
                <div className="p-3">
                    
                {
                    bills.map((bill)=>{
                        if(bill.pay_status === -1){
                            return <>
                            <div className="text-left text-xl"><b>Could be Rs. {bill.units*100}</b></div>
                            <div className="flex justify-between">
                                <p className="text-md mt-1 font-semibold">Units Consumed Till Now </p>
                                <p className="text-xl font-bold">{bill.units}</p>
                            </div>
                            <div className="mt-5">
                                <p className="text-md mt-1">
                                    <span className="font-semibold">Billing Start Date </span>
                                    <br/>
                                    {bill.startDate}
                                </p>
                                <p className="text-md mt-1">
                                    <span className="font-semibold">Billing End Date </span>
                                    <br/>
                                    {bill.endDate}
                                </p>
                                
                            </div>
                            <div
                                className="mt-10 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                                role="alert"
                            >
                                <span className="font-medium">Will be due By : </span> {bill.dueBy}
                            </div>
                        </>
                        }
                    })
                }
                </div>
                

            </div>
        </a>
        <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >       
            <div className="flex flex-col justify-between p-1 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Latest Billing
                </h5>
                <div className="p-2">
                    
                {
                    bills.map((bill)=>{
                        if(bill.pay_status === 0){
                            return <>
                            <span className="font-semibold">Bill Number : {(bill._id).toUpperCase()}</span>
                            <div className="text-left text-xl"><b>Rs. {bill.units*100}</b></div>
                            <div className="flex justify-between">
                                <p className="text-md mt-1 font-semibold">Units Consumed</p>
                                <p className="text-xl font-bold">{bill.units}</p>
                            </div>
                            <div className="mt-5">
                                <p className="text-md mt-1">
                                    <span className="font-semibold">Billing Start Date </span>
                                    <br/>
                                    {bill.startDate}
                                </p>
                                <p className="text-md mt-1">
                                    <span className="font-semibold">Billing End Date </span>
                                    <br/>
                                    {bill.endDate}
                                </p>
                                
                            </div>
                            <div
                                className="mt-10 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                                role="alert"
                            >
                                <span className="font-medium">Due By : </span> {bill.dueBy}
                            </div>
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                Pay Now
                            </button>
                        </>
                        }
                    })
                }
                </div>
                

            </div>
        </a>

    </div>
    <br/>
    <br/>
    </>);
}

export default Profile;