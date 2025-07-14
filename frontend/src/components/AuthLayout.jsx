// src/components/AuthLayout.jsx
export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
            {children}
        </div>
    );
}
