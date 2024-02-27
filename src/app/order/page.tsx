"use client";
import React from "react";
import { useRouter } from "next/navigation"; // This should be "next/navigation" not "next/router"

const Button = () => {
    // Programatically routing
    const router = useRouter();
    const handleClick = () => {
        console.log("Button clicked")


        // router.push("/");  // we can use any valid route here
        // router.replace("/");
        router.back();
        // router.forward();

    }

    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick} className="bg-black text-white font-bold shadow-md p-2 m-2 rounded-md">Place Order</button>
        </div>
    );
};

export default Button;



