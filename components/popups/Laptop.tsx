import Popup from "./Popup";
import UnderLine from "../UnderLine";

export default function Laptop() {

    return (
        <Popup reduxProperty="laptop">
            <h1 className="">
                Laptop
            </h1>
            <div className="flex flex-row justify-around items-center">
                <p className="text-xl">
                    Here&#39;s how I built this place.
                </p>
                <button onClick={() => window.open("https://github.com/michaelwaves/next-portfolio-production", "_blank")} className="tldr-button">
                    Checkout Code
                </button>
            </div>
        </Popup>)

}