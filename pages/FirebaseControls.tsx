import { getDocs, addDoc, query, collection, setDoc, doc, deleteDoc } from "firebase/firestore/lite";
import { db } from "@/components/Firebase";

export default function FirebaseControls(){
    const handleFilterChats = async() =>{
        const collectionRef = collection(db, "chats");
        const querySnapshot = await getDocs(collectionRef);

        const filteredChatsRef = collection(db, "filteredChats");
        querySnapshot.forEach((document) => {
            let data = document.data();
            let id = document.id;
        if(data.messages){
            if(data.messages.length > 0){
                console.log(document.data().messages);
                try{
                setDoc(doc(filteredChatsRef,id), document.data());
                }catch(error){
                    console.log(error);
                }
            }
        }
        });
    }
    const clearCollection = async() =>{
        const collectionRef = collection(db, "filteredChats");
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((document) => {
            let id = document.id;
            try{
                deleteDoc(doc(collectionRef, id));
            }catch(error){
                console.log(error);
            }
        });
    }
    return(
        <div>
            <h1>Filtered Firebase Chat</h1>
            <button onClick={handleFilterChats} className="bg-s-3 p-2 rounded-xl">Filter Chats</button>
            <button onClick={clearCollection} className="bg-s-3 p-2 rounded-xl">Clear Collection</button>
        </div>
    )
}