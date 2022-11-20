import reactLogo from "../assets/react.svg";

interface TitleProps {
    title: string;
}

export function Title(props: TitleProps) {
    const { title } = props;
    if(typeof title !== "string") throw new Error("Title must be a s tring");

    return (
        <div className="App-title">
            <img src={reactLogo} className="App-logo" alt="React logo"/>
            <p>
                {title}
            </p>
        </div>);
}