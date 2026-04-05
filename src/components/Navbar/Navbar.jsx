import UpperNav from "./UpperNav";
import Line from "./Line";
import LowerNav from "./LowerNav";
import Hamburger from "./Hamburger";
import Cross from "./Cross";
import { useState } from "react";

export default function Navbar() {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <>
            <UpperNav />
            <Line />
            {showSideBar ? (
                <Cross setDisplay={setShowSideBar} />
            ) : (
                <Hamburger setDisplay={setShowSideBar} />
            )}
            <LowerNav display={showSideBar} />
        </>
    )
}