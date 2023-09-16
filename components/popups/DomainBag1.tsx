import UnderLine from "../UnderLine";
import PopupCloset from "./PopupCloset";

export default function DomainBag1() {

    return (
        <PopupCloset reduxProperty="domainbag1">
            <h1 className="">
                Domain.com Bag #1
            </h1>
            <div className="flex flex-row ">
                <p className="text-xl">
                    I won this bag from<UnderLine text="Hack Princeton" href="https://devpost.com/software/gloob" />for gloobyglobe.vercel.app
                </p>
            </div>
        </PopupCloset>)

}