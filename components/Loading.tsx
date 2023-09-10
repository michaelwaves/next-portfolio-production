import MoonLoader from "react-spinners/MoonLoader";

export default function Loading() {
    return (
        <div className="w-40 h-40 flex items-center justify-center mx-auto">
            <MoonLoader color="#fc7b35" size={150} />
        </div>
    )
}