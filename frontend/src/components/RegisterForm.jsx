import { useState } from "react";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
        security_answer: "",
    });

    const normalizePhone = (input) => {
        let phone = input.replace(/\D/g, ""); // Remove non-digit characters

        if (phone.startsWith("0")) {
            phone = "+254" + phone.substring(1);
        } else if (phone.startsWith("7") || phone.startsWith("1")) {
            phone = "+254" + phone;
        } else if (phone.startsWith("254")) {
            phone = "+" + phone;
        } else if (phone.startsWith("+254")) {
            // already normalized
        } else {
            phone = "+254" + phone; // fallback
        }

        return phone;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const normalizedPhone = normalizePhone(formData.phone);
        const dataToSubmit = {
            ...formData,
            phone: normalizedPhone,
        };

        console.log("Submitting: ", dataToSubmit);
        // Add your API POST here
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                    Create Account
                </h2>

                <form>
                    <input type="hidden" name="csrf_token" value="dummy_token_here" />

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm mb-2">Username</label>
                        <input
                            type="text"
                            name="username"
                            required
                            placeholder="Choose a username"
                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your email address"
                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            required
                            placeholder="0712345678"
                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                minLength={8}
                                placeholder="At least 8 characters"
                                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                            />
                            <i
                                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-3.5 text-gray-400 hover:text-yellow-400 cursor-pointer`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm mb-2">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirm_password"
                                required
                                minLength={8}
                                placeholder="Confirm your password"
                                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                            />
                            <i
                                className={`fas ${showConfirm ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-3.5 text-gray-400 hover:text-yellow-400 cursor-pointer`}
                                onClick={() => setShowConfirm(!showConfirm)}
                            ></i>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm mb-2">Security Answer</label>
                        <input
                            type="text"
                            name="security_answer"
                            required
                            placeholder="Answer to security question"
                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                        />
                        <p className="mt-1 text-xs text-gray-400">
                            Security question: What is your favourite colour?
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-4 rounded-lg transition duration-200"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <span className="text-gray-400">Already have an account? </span>
                    <a href="/login" className="text-yellow-400 hover:text-yellow-300 font-medium">
                        Login here
                    </a>
                </div>
            </div>
        </div>
    );
}
