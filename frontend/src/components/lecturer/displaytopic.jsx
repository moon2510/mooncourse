import React from 'react'

export default function Display (props) {
    const refd = React.useRef(null)
    React.useEffect(() => {
        refd.current.innerHTML = props.content
    }, [props.content])
    return (
        <div ref={refd}>
        </div>
    )
}