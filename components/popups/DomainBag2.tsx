import UnderLine from "../UnderLine";
import PopupCloset from "./PopupCloset";

export default function DomainBag2() {

    return (
        <PopupCloset reduxProperty="domainbag2">
            <h1 className="">
                Domain.com Bag #2
            </h1>
            <div className="flex flex-row">
                <p className="text-xl">
                    I won this bag from<UnderLine text="UOttaHack" href="https://devpost.com/software/tailor-s529oy" />for tailorswift.tech
                </p>
            </div>
        </PopupCloset>)

}