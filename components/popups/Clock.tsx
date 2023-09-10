import Popup from "./Popup";

export default function Clock() {

    return (
        <Popup reduxProperty="clock">
            <h1 className="">
                Clock
            </h1>
            <p className="text-xl">
                Time flies when you have two jobs and a portfolio to build
            </p>
        </Popup>)

}