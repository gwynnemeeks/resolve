import React from "react"
import { Intention } from "./intention/Intention"
import "./Resolve.scss"

// Resolve is the Parent Component
// Intention is the Child Comoponent
// Both will be rendered to the DOM

export const Resolve = () => (
    <>
        <h2>Resolve: Set your daily intention</h2>
        <small>and reflect on your journey</small>

        <h2>Set Your Intentions</h2>
        <article className="intentions">
            <Intention />
            <Intention />
            <Intention />
        </article>

    </>
)
