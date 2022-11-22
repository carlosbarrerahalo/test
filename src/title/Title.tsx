import React from 'react';
import reactLogo from "../assets/react.svg";

interface TitleProps {
    title: string;
}

class Person {
    title;
    constructor(props: TitleProps) {
        this.title = props.title;
    }

}
type Text = string;

const example = "3";

export function Title(props: TitleProps) {
    const { title } = props;
    if(typeof title !== "string") throw new Error("Title mustf be a s tring");

    return (
        <div className="App-title">
            <img src={reactLogo} className="App-logo" alt="React logo"/>
            <p>
                <h1 className="">{title} urgent</h1>
            </p>
        </div>);
}