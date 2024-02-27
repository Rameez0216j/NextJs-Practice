"use client";
import React from "react";
// wrap up all nested childrens
export default function ErrorBoundary({ error }: {
    error: Error
}) {
    return (
        <div>
            <h1>Error in Review Id</h1>
            <h2>Error : {error.message}</h2>
        </div>
    );
};