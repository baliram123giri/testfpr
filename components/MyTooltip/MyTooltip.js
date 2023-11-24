import React from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";
const MyTooltip = ({
    children,
    title,
    disabled = false,
    palcement = "bottom"
}) => {
    return (
        <div data-tooltip-id={title}>
            {children}
            {!disabled && <ReactTooltip
                closeOnResize
                closeOnScroll
                id={title}
                place={palcement}
                variant="dark"
                style={{ padding: 5, fontSize: 10, zIndex: 454545415 }}
                content={title}
            />}
        </div>

    )
}

export default MyTooltip