import { animate, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

function AnimatedText({ from, to }: { from: number, to: number }) {
    const nodeRef = useRef<any>();

    useEffect(() => {
        const node = nodeRef.current;

        const controls = animate(from, to, {
            duration: 10,
            onUpdate(value) {
                node.textContent = value.toFixed(1) + "%";
            },
        });

        return () => controls.stop();
    }, [from, to]);

    return <h1 className="title w-full text-end pr-4" ref={nodeRef} />;
}

export default function Counter() {

    return (<AnimatedText from={0} to={100} />)
}