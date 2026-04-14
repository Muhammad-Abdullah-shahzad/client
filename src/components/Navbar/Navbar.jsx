import UpperNav from "./UpperNav";
import Line from "./Line";
import LowerNav from "./LowerNav";
import Hamburger from "./Hamburger";
import Cross from "./Cross";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { getDataLocalStorage } from "../../Utils/LocalStorage";

export default function Navbar() {
    const [showSideBar, setShowSideBar] = useState(false);
    const [showCart, setShowCart] = useState(false);

    // grab userId from localStorage (set this wherever you handle auth/user session)
    const userId = getDataLocalStorage('ecom_user_Id');

    return (
        <>
            <UpperNav />
            <Line />
            {showSideBar ? (
                <Cross setDisplay={setShowSideBar} />
            ) : (
                <Hamburger setDisplay={setShowSideBar} />
            )}
            <LowerNav display={showSideBar} onCartClick={() => setShowCart(true)} />
            {showCart && (
                <Cart userId={userId} onClose={() => setShowCart(false)} />
            )}
        </>
    )
}