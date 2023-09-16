import UnderLine from "../UnderLine";
import PopupCloset from "./PopupCloset";

export default function DomainBag3() {

    return (
        <PopupCloset reduxProperty="domainbag3">
            <h1 className="">
                Domain.com Bag #3
            </h1>
            <div className="flex flex-row">
                <p className="text-xl">
                    I won this bag from<UnderLine text="QHacks" href="https://devpost.com/software/kingsley-3qtkf1" />for kingsleyneverlies.tech
                </p>
            </div>
        </PopupCloset>)

}