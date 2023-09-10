import Popup from "./Popup";
import UnderLine from "../UnderLine";

export default function Notebook() {

    return (
        <Popup reduxProperty="notebook">
            <h1 className="">
                Notebook
            </h1>
            <div className="flex flex-row justify-around items-center gap-4">
                <p className="text-xl">
                    My sketches for this room.
                </p>
                <button onClick={() => window.open("https://www.figma.com/file/BWZL4vZKrZBWe8IjghYyMu/Next-Portfolio?type=design&mode=design&t=lw7xdWp38FcTGxvp-0", "_blank")} className="tldr-button">
                    Checkout Figma
                </button>
            </div>
        </Popup>)

}