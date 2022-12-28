const StyledCard = ({ children, ...rest }: any) => {
    return (
        <div
            className="bg-neutral-50 p-3 rounded-lg shadow-lg text-center flex flex-col gap-3"
            {...rest}
        >
            {children}
        </div>
    );
};

export default StyledCard;
