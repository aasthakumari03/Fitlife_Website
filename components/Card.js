export default function Card({ children, className = "" }) {
    return (
        <div className={`bg-white/10 backdrop-blur-md shadow-2xl rounded-xl p-6 border border-white/10 text-white ${className}`}>
            {children}
        </div>
    );
}
