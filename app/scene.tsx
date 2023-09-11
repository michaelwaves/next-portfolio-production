import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, } from "@react-three/drei";
import { Suspense, useEffect } from "react";

//3D models
import { Room } from '@/components/models/room/Room';
import Window from '@/components/drei/Window';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { Pikachu } from '@/components/models/Pikachu';
import { Sans } from '@/components/models/Sans';
import { Headphones } from "@/components/models/Headphones";
import { Passport as PassportModel } from "@/components/models/Passport";


import { AnimatePresence, motion } from "framer-motion"
import { Lilita_One, Audiowide, STIX_Two_Text, Indie_Flower, VT323, Press_Start_2P } from 'next/font/google'

const lilitaOne = Lilita_One({ subsets: ['latin'], weight: ["400"], variable: "--font-lilita" })
const audiowide = Audiowide({ subsets: ['latin'], weight: ["400"], variable: "--font-audiowide" })
const indie = Indie_Flower({ subsets: ['latin'], weight: ["400"], variable: "--font-indie" })
const stix = STIX_Two_Text({ subsets: ['latin'], weight: ["400"], variable: "--font-stix" })
const vt323 = VT323({ subsets: ['latin'], weight: ["400"], variable: "--font-vt323" })
const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"], variable: "--font-press" })

//pages
import Qhacks from '@/mypages/Qhacks';
import Lumigui2 from "@/mypages/Lumigui2";
import NEAR from "@/mypages/NEAR";
import Tailor from "@/mypages/Tailor";
import Vocalverse from "@/mypages/Vocalverse";
import CoverMeGPT from "@/mypages/CoverMeGPT";

import RiseDesk from "@/mypages/RiseDesk/RiseDesk";
import Book from "@/mypages/Books";
import BagPage from "@/mypages/BagPage";
import Skills from "@/mypages/Skills/Skills";
import MLH from "@/mypages/MLH";
import Ramuri from "@/mypages/Ramuri";
import Rotman from "@/mypages/Rotman";
import PrintingClub from "@/mypages/PrintingClub";
import Don from "@/mypages/Don";
import Utmist from "@/mypages/Utmist";
import WelcomeDesk from "@/mypages/WelcomeDesk";
import Badminton from "@/mypages/Badminton";
import PingPong from "@/mypages/PingPong";
import Piano from "@/mypages/Piano";
import Cloudbreak from "@/mypages/Cloudbreak";

import CustomMusic from "@/mypages/CustomMusic";

//notes
import Note from "@/components/popups/Note";
import Clock from "@/components/popups/Clock";
import Rug from "@/components/popups/Rug";
import Laptop from "@/components/popups/Laptop";
import Notebook from "@/components/popups/Notebook";
import Michael20 from "@/components/popups/Michael20";
import Music from "@/components/popups/Music";
import Discord from "@/components/popups/Discord";
import Chair from "@/components/popups/Chair";
import Blanket from "@/components/popups/Blanket";
import Slippers from "@/components/popups/Slippers";
import Passport from "@/components/popups/Passport";

//controls
import ControlPanel from "@/components/ControlPanel";
import Info from "@/mypages/Info";
import { toggleState, setLoading } from "@/redux/controlsSlice";

//sans
import SansChat2 from "@/mypages/Sans/SansChat2";

export default function Scene() {

    const DisableRender = () => useFrame(() => null, 1000)

    const deskState = useAppSelector((state: any) => state.desk)
    const closetState = useAppSelector((state: any) => state.closet)
    const controlsState = useAppSelector((state: any) => state.controls)


    //we put this in the suspense children to test if room loads
    const dispatch = useAppDispatch()
    const LoadTestComponent = () => {
        useEffect(() => {
            dispatch(setLoading(false))
        }, [])
        return null
    }


    const CameraRig2 = () => {
        const { camera } = useThree()
        useEffect(() => {
            if (controlsState.firstTime) {
                camera.position.set(0, 5, 2)
                camera.rotation.set(-1.1, -0.3, -0.6)
                dispatch(toggleState("firstTime"))
            }
        }, [controlsState.recenter])

        return null
    }
    return (
        <main className={`relative h-full w-full bg-black ${lilitaOne.variable} ${audiowide.variable} ${indie.variable} ${stix.variable} ${vt323.variable} ${pressStart2P.variable}`}>

            <div className={`${deskState.render ? "h-40" : "h-screen"}`}>
                <Canvas>
                    {deskState.render && <DisableRender />}
                    <OrbitControls />
                    <CameraRig2 />
                    <Stars />
                    <Suspense fallback={
                        null
                    }>
                        <LoadTestComponent />
                        <Room />
                        <Window />
                        {/* <Pikachu />*/}
                        <Sans />
                        <Headphones />
                        <PassportModel position={[3, 1.29, 0.65]} scale={0.8} rotation-y={Math.PI / 2} />
                    </Suspense>
                </Canvas>
            </div>
            <AnimatePresence>

                {deskState.riseDesk && <RiseDesk />}
                {deskState.mlh && <MLH />}
                {deskState.ramuri && <Ramuri />}
                {deskState.cloudbreak && <Cloudbreak />}
                {deskState.education && <Rotman />}
                {deskState.printingclub && <PrintingClub />}
                {deskState.don && <Don />}
                {deskState.utmist && <Utmist />}
                {deskState.welcomedesk && <WelcomeDesk />}
                {deskState.sports && <Badminton />}
                {deskState.sports2 && <PingPong />}
                {deskState.piano && <Piano />}

                {closetState.qhacks && <Qhacks />}
                {closetState.lumigui && <Lumigui2 />}
                {closetState.near && <NEAR />}
                {closetState.tailor && <Tailor />}
                {closetState.vocalverse && <Vocalverse />}
                {closetState.covermegpt && <CoverMeGPT />}

                {closetState.sansChat && <SansChat2 />}

                {deskState.book && <Book />}
                {deskState.bag && <BagPage />}
                {deskState.clock && <Clock key="clock" />}
                {deskState.lotion && <Note key="lotion" />}
                {deskState.rug && <Rug key="rug" />}
                {deskState.laptop && <Laptop key="laptop" />}
                {deskState.notebook && <Notebook key="notebook" />}
                {deskState.michael20 && <Michael20 key="michael20" />}
                {deskState.music && <Music key="music" />}
                {deskState.skills && <Skills />}
                {deskState.headphones && <CustomMusic />}
                {deskState.discord && <Discord />}
                {deskState.notebook && <Notebook />}
                {deskState.chair && <Chair />}
                {deskState.blanket && <Blanket />}
                {deskState.slippers && <Slippers />}
                {deskState.passport && <Passport />}

            </AnimatePresence>
            <ControlPanel />
            <Info />
        </main >
    )
}
