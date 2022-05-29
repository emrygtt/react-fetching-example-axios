import React from 'react'
// size can be values or strings as "large" or "medium"
// weight can be "regular", "bold", "medium"
// also custom styles can be given

const Text = ({ children, size, weight, family, style, color, className, display, onMouseOver, onMouseOut, hoverable=false}) => {
    const styles = {
        fontSize: size || 12,
        fontWeight: weight || 'regular',
        fontFamily: family || "-apple-system,BlinkMacSystemFont,Segoe UI",
        display: display || 'inline',
    }

    if (typeof size === 'string') {
        if (size === 'large') {
            styles.fontSize = 16
        }
        if (size === 'medium') {
            styles.fontSize = 12
        }
    } else {
        styles.fontSize = size
    }

    return (
        <p className={className} style={{ ...styles, ...style }} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            {children}
        </p>
    )
}

export default Text