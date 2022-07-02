import { useState } from "react";

const Login = ({setCookie}) => {

    const handleLogin = async(e) =>{
        e.preventDefault();
        if(email && password){
            console.log(email, password);
            const response = await fetch('https://ev-backend-v1.herokuapp.com/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });

            if(response.status === 200){
                const data = await response.json();
                console.log(data.token);
                setCookie('auth',data.token,1);
            }else{
                setError(true);
            }
            return;
        }else{
            setError(true);
        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    return(<>


    <div className="p-4 max-w-sm m-auto mt-10 shadow-lg bg-white border-gray-400 rounded-lg border-2 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleLogin}>
            {error?<><div
                        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                    >
                        <span className="font-medium">Login Failed</span> Wrong email or password !!
                    </div></>:null}
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
            </h5>
            <div>
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                Your email
            </label>
            <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@email.com"
                required=""
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Your password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required=""
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className="flex items-start">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            defaultValue=""
                            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required=""
                        />
                    </div>
                    <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    Remember me
                    </label>
                </div>
                <a
                    href="#"
                    className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                    Lost Password?
                </a>
            </div>
            <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                    Create account
                </a>
            </div>
        </form>
    </div>

    
    
    </>);
}

export default Login;