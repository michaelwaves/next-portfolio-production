import { useAppSelector } from "@/redux/hooks";
import { getState } from "@/redux/controlsSlice";

export default function DarkMode({ children }: { children: React.ReactNode }) {
    const controlsState = useAppSelector(getState)
    return (
        <div className={`${controlsState.lamps == 1 ? "dark" : ""}`}>
            {children}
        </div>

    )
}