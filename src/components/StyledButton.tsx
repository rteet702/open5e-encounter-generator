const Button = ({ children, ...rest }: any) => {
    return (
        <button
            className="bg-cyan-500 w-full p-3 text-2xl rounded-lg shadow-lg hover:bg-cyan-400 transition-colors flex items-center justify-center"
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
