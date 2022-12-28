import { useState } from "react";

const Dropdown = ({ children, content, options, update, ...rest }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(`${content}`);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            className="bg-white cursor-pointer shadow-lg text-2xl flex flex-col gap-2 relative w-full"
            {...rest}
        >
            {
                <div
                    className="bg-white p-3 hover:bg-neutral-100 transition-colors"
                    onClick={toggleOpen}
                >
                    {selected}
                </div>
            }
            {isOpen && (
                <div className="">
                    {options.map((option: string, index: number) => {
                        return (
                            <div
                                className="hover:bg-cyan-300 transition-colors p-1"
                                key={index}
                                onClick={() => {
                                    setSelected(option);
                                    update(option);
                                    toggleOpen();
                                }}
                            >
                                {option}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
