import { getCookie } from "cookies-next"
import { useEffectOnce } from "react-use"
import {useState} from "react"

export default function DarkMode({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useState<boolean|null>(null)//only render children if dark is not null
    useEffectOnce(() => {
        if (getCookie("isDark") === "true") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        setIsDark(getCookie("isDark") === "true")
    })
    return (
        <div className="">
            {isDark!=null&&children}
        </div>

    )
}