import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changeDeskColor } from '@/redux/deskSlice';

interface ColorSelectorProps {
    colors: string[];
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const dispatch = useAppDispatch();
    const deskColor = useAppSelector((state) => state.desk.deskColor);

    const rowAnimation = useSpring({
        height: isOpen ? `${colors.length * 10}px` : '0px',
        opacity: isOpen ? 1 : 0,
    });

    const arrowAnimation = useSpring({
        opacity: isOpen ? 0 : 1,
        scale: isOpen ? 0 : 1,
    });

    const handleColorClick = (color: string) => {
        //setSelectedColor(color);
        dispatch(changeDeskColor(color));
    };

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };
    const handleArrowClick = () => {
        setIsOpen(true);
    };
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef}

            className=' bg-s-4 dark:bg-p-4 p-2 rounded-xl z-50 flex flex-col items-center justify-center fixed '>
            <button onClick={handleButtonClick} className="p-2 rounded-full bg-s-3 dark:bg-p-3 mb-4">Colors</button>
            <animated.span style={arrowAnimation}
                className="absolute bottom-4 w-12 h-12 z-10">
                <button onClick={handleArrowClick}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>

            </animated.span>
            <animated.div className={` flex flex-col gap-4`}>
                {colors.map((color) => (
                    <animated.button
                        key={color}
                        onClick={() => handleColorClick(color)}
                        style={{ backgroundColor: color, ...rowAnimation }}
                        className="rounded-full h-20 w-20 text-sm"
                    >
                        {color}
                    </animated.button>
                ))}
            </animated.div>

        </div>

    );
};

export default ColorSelector;