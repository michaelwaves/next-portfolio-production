import Popup from "./Popup";

export default function Discord(){
    return(
        <Popup reduxProperty="discord">
            <div className="flex flex-col items-center justify-center w-full h-full p-4 space-y-4 text-center bg-gray-800 rounded-lg">
                <h1 className="text-2xl font-bold text-white">Discord</h1>
                <p className="text-white">My discord username is <span className="font-pixel2">puzzledpikachu</span>, feel free to add me</p>
            </div>
        </Popup>
    )
}