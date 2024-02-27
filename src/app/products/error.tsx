"use client";
import React from "react";
// wrap up all nested childrens
// To handle errors in layput use the error.tsx in parent folder of layput folder(i.e current folder's parent folder)
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