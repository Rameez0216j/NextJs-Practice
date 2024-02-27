"use client";
import React from "react";

export default function ErrorBoundary({ error, reset }: {
    error: Error,
    reset: () => void;
}) {
    return (
        <div>
            <h1>Error in Review Id</h1>
            <h2>Error Message : {error.message}</h2>
            <button className="p-3 bg-black text-white" onClick={reset}>Reset</button>
        </div>
    );
};