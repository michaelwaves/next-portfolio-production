import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

//3D models
import { Room } from '@/components/models/room/Room';
import Window from '@/components/drei/Window';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { Pikachu } from '@/components/models/Pikachu';
import { Sans } from '@/components/models/Sans';
import { Headphones } from "@/components/models/Headphones";


import { AnimatePresence, motion } from "framer-motion"
import { Lilita_One, Audiowide, STIX_Two_Text, Indie_Flower, VT323, Press_Start_2P } from 'next/font/google'

const lilitaOne = Lilita_One({ subsets: ['latin'], weight: ["400"], variable: "--font-lilita" })
const audiowide = Audiowide({ subsets: ['latin'], weight: ["400"], variable: "--font-audiowide" })
const indie = Indie_Flower({ subsets: ['latin'], weight: ["400"], variable: "--font-indie" })
const stix = STIX_Two_Text({ subsets: ['latin'], weight: ["400"], variable: "--font-stix" })
const vt323 = VT323({ subsets: ['latin'], weight: ["400"], variable: "--font-vt323" })
const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ["400"], variable: "--font-press" })

//pages
import Qhacks from '@/pages/Qhacks';
import Lumigui2 from "@/pages/Lumigui2";
import NEAR from "@/pages/NEAR";
import Tailor from "@/pages/Tailor";
import Vocalverse from "@/pages/Vocalverse";
import CoverMeGPT from "@/pages/CoverMeGPT";

import RiseDesk from "@/pages/RiseDesk/RiseDesk";
import Book from "@/pages/Books";
import BagPage from "@/pages/BagPage";
import Skills from "@/pages/Skills/Skills";
import MLH from "@/pages/MLH";
import Ramuri from "@/pages/Ramuri";
import Rotman from "@/pages/Rotman";
import PrintingClub from "@/pages/PrintingClub";
import Don from "@/pages/Don";
import Utmist from "@/pages/Utmist";
import WelcomeDesk from "@/pages/WelcomeDesk";
import Badminton from "@/pages/Badminton";
import PingPong from "@/pages/PingPong";
import Piano from "@/pages/Piano";
import Cloudbreak from "@/pages/Cloudbreak";

import CustomMusic from "@/pages/CustomMusic";

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

//controls
import ControlPanel from "@/components/ControlPanel";
import Info from "@/pages/Info";
import { toggleState, setLoading } from "@/redux/controlsSlice";

//sans
import SansChat from "@/pages/SansChat";
import SansChat2 from "@/pages/Sans/SansChat2";

export default function Scene() {

    const DisableRender = () => useFrame(() => null, 1000)

    const deskState = useAppSelector((state) => state.desk)
    const closetState = useAppSelector((state) => state.closet)
    const controlsState = useAppSelector((state) => state.controls)

    const position = controlsState.position
    //debug
    /* useEffect(() => {
        console.log("deskstate.lotion", deskState.lotion)
        console.log("deskstate.clock", deskState.clock)
        console.log("deskState", deskState.render)
    }, [deskState]) */

    //we put this in the suspense children to test if room loads
    const dispatch = useAppDispatch()
    const LoadTestComponent = () => {
        useEffect(() => {
            dispatch(setLoading(false))
        }, [])
        return null
    }

    //camera with default postition
    const positions = [
        {
            lookAt: [1, 2, 0],
            position: [0, 5, 2]
        },
        {
            lookAt: [-0.6, -0.79, -0.45],
            position: [-2.9, 3, 2.9]
        },
        {
            lookAt: [2, 2, 0.5],
            position: [-2.9, 2, 2.9]
        }
    ]

    const CameraRig2 = () => {
        const { camera } = useThree()
        useEffect(() => {
            if (controlsState.firstTime) {
                camera.position.set(0, 5, 2)
                camera.rotation.set(-1.1, -0.3, -0.6)
                dispatch(toggleState("firstTime"))
            }
        }, [controlsState.recenter])


        //debug
        /* useEffect(() => {
            console.log(
                "camera position",
                camera.position.x,
                camera.position.y,
                camera.position.z
            )
            console.log(
                "camera lookAt",
                camera.rotation.x,
                camera.rotation.y,
                camera.rotation.z
            )
        }, [camera]) */



        return null
    }

    useEffect(() => {
        console.log(closetState.sansChat)
    }, [closetState.sansChat])

    return (
        <main className={`relative h-full w-full bg-black ${lilitaOne.variable} ${audiowide.variable} ${indie.variable} ${stix.variable} ${vt323.variable} ${pressStart2P.variable}`}>

            <div className={`${deskState.render ? "h-40" : "h-screen"}`}>
                <Canvas>
                    {deskState.render && <DisableRender />}
                    <OrbitControls />
                    {/*  <CameraRig position={position} /> */}
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

            </AnimatePresence>
            <ControlPanel />
            <Info />
        </main >
    )
}
