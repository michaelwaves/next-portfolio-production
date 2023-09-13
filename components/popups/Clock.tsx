import Popup from "./Popup";

export default function Clock() {

    return (
        <Popup reduxProperty="clock">
            <h1 className="">
                Clock
            </h1>
            <p className="text-xl">
                Slow comes the hour, its passing speed how great!
            </p>
        </Popup>)

}