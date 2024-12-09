import React, { useState } from "react";

const Login = () => {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        username_email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Example validation (replace with API call)
        if (!formData.username_email || !formData.password) {
            setError("Please fill in all fields.");
            return;
        }

        // Simulate login logic (replace with API call)
        console.log("Form Data:", formData);

        setError(""); // Clear error on success
        alert("Logged in successfully!");
    };

    return (
        <div className="bg-dark dark:bg-[#121317] min-h-screen flex flex-col">
            <div className="flex items-center px-4 h-[80vh]">
                <form
                    onSubmit={handleSubmit}
                    className="login-form mx-auto w-96"
                >
                    {/* Logo */}
                    <div className="logo flex items-center justify-center mb-6">
                        {/* Replace with dynamic logo paths */}
                        <img
                            className="dark:block hidden"
                            src="/static/img/logo/logo_dark.png"
                            alt="Site Logo"
                        />
                        <img
                            className="dark:hidden block"
                            src="/static/img/logo/logo_light.png"
                            alt="Site Logo"
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="text-center bg-red-600 rounded-lg py-3 text-white mb-7">
                            <h1 className="text-lg font-normal capitalize">{error}</h1>
                        </div>
                    )}

                    {/* Username / Email */}
                    <div className="input-group flex flex-col mb-6">
                        <label className="select-none uppercase text-gray-500 text-xs mb-1 dark:text-gray-300">
                            Username / Email
                        </label>
                        <input
                            required
                            name="username_email"
                            className="border-2 transition dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 duration-300 border-gray-200 px-2 py-4 outline-none rounded-lg focus:border-orange-700"
                            type="text"
                            value={formData.username_email}
                            onChange={handleChange}
                            placeholder="Email or Username"
                        />
                    </div>

                    {/* Password */}
                    <div className="input-group flex flex-col">
                        <label className="select-none uppercase text-gray-500 text-xs mb-1 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            required
                            name="password"
                            className="border-2 transition dark:text-gray-300 duration-300 dark:border-zinc-700 dark:bg-zinc-800 border-gray-200 px-2 py-4 outline-none rounded-lg focus:border-orange-700"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full text-sm h-12 bg-orange-500 mt-4 text-white uppercase font-bold rounded-lg"
                    >
                        Login
                    </button>

                    {/* Other Actions */}
                    <div className="flex justify-between mt-4">
                        <a href="#" className="text-gray-500 text-xs">
                            Forgot Password?
                        </a>
                        <a href="/register" className="text-gray-500 text-xs">
                            Create New
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
