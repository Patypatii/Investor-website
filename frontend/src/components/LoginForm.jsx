import { useState } from "react";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full max-w-md bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-700">
            <div className="bg-yellow-500 py-5 px-6 text-center">
                <h1 className="text-black text-2xl font-bold">
                    <i className="fas fa-chart-line mr-2"></i>
                    Swiftxchange
                </h1>
            </div>

            <div className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-yellow-400 text-center">
                    Welcome Back
                </h2>

                <form>
                    <input type="hidden" name="csrf_token" value="dummy_token_here" />

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm mb-2">Email or Username</label>
                        <input
                            type="text"
                            name="identifier"
                            required
                            placeholder="Enter email or username"
                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                minLength={8}
                                placeholder="Your password"
                                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                            />
                            <i
                                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-3.5 text-gray-400 hover:text-yellow-400 cursor-pointer`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-4 rounded-lg transition duration-200"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <span className="text-gray-400">Don't have an account? </span>
                    <a href="/register" className="text-yellow-400 hover:text-yellow-300 font-medium">
                        Register here
                    </a>
                </div>
            </div>
        </div>
    );
}
