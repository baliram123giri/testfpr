import InfiniteLoader from "../LoadingSpinner/InfiniteLoader";
import "./modal.css"
export const Modal = ({ isOpen, onClose, children, title = "", width, isLoading }) => {
    if (!isOpen) return null;

    return (
        <div className="modal p-0">
            {isLoading ? <div className="justify-center items-center flex w-full h-full"><InfiniteLoader /> </div> : <div style={{ width: `${width}%` || "auto" }} className="modal-content">
                <div className="py-2 shadow-sm border-b">
                    <h6 className="ms-4 text-[16px] font-semibold">{title}</h6>
                    <span className="close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="p-4 py-2">
                    {children}
                </div>
            </div>}
        </div>
    );
};

