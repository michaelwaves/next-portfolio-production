import { getCookie } from "cookies-next"
import { useEffectOnce } from "react-use"

export default function DarkMode({ children }: { children: React.ReactNode }) {
    useEffectOnce(() => {
        if (getCookie("isDark") === "true") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    })
    return (
        <div className="">
            {children}
        </div>

    )
}