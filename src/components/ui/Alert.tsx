const alertTypeStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
};

const Alert: React.FC<{ message: string, type: keyof typeof alertTypeStyles, onClose: () => void }> = ({ message, type, onClose }) => {
    return (
        <div className={`flex items-center p-4 border-l-4 rounded ${alertTypeStyles[type]}`} role="alert">
            <div className="flex-grow">{message}</div>
            <button
                className="ml-4 text-gray-500 hover:text-gray-700"
                onClick={onClose}
            >
                &times;
            </button>
        </div>
    );
};

export default Alert;