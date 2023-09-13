import Image from "next/image";
import Openai from "./Sans/openai";


export default function Chat() {
    return (
        <div>
            <Openai />
            <Image src="/images/sans.gif" alt="Sans" width={500} height={500} />
        </div>
    )
}