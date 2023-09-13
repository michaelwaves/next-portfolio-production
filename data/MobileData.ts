import { MdWork } from "react-icons/md"
import { FaUserGraduate } from "react-icons/fa"
import { MdOutlineSportsEsports } from "react-icons/md"
import { BsFillAwardFill } from "react-icons/bs"

export const pageCategories = [
    {
        icon: MdWork,
        title: "Work",
    },
    {
        icon: FaUserGraduate,
        title: "Education",
    },
    {
        icon: BsFillAwardFill,
        title: "Projects"
    },
    {
        icons: MdOutlineSportsEsports,
        title: "Hobbies",
    },
]

export const workExperiences = [
    {
        title: "MLH Fellow",
        company: "Major League Hacking",
        date: "August 2023 - Present",
        description: "Building a patent marketplace on the NEAR Blockchain",
        href: "/MLH"
    },
    {
        title: "Management Trainee",
        company: "Cloudbreak Pharma",
        date: "August 2023 - Present",
        description: "Helping IPO a unicorn on the HKEX",
        href: "/Cloudbreak"
    },
    {
        title: "3D Engineer",
        company: "Rise Desk",
        date: "August 2021 - August 2022",
        description: "Making 3D desks for an ecommerce startup"
    }
]