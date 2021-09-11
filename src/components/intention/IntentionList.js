import React, { useContext, useEffect } from "react"
import { IntentionContext } from "./IntentionProvider"
import "./Intention.scss"

export const IntentionList = () => {
    // This state changes when `getIntentions()` is invoked below
    // useContext hook allows you to use data structures and functions that the parent provider exposes 
    const { intentions, getIntentions } = useContext(IntentionContext)

    // useEffect - reach out to the world for something
    // [] tells the useEffect when to run; here it is empty, so it runs on page load
    useEffect(() => {
        getIntentions()
    }, [])

    return (

        <section className="intentions">
            {
                intentions.map(intention => {
                    return (
                        <div className="intention" id={`intention--${intention.id}`}>
                            <div className="intention__word">
                                <h3>Anchor: {intention.anchor} </h3>
                            </div>
                        </div>
                    )
                })
            }
        </section >
    )
}