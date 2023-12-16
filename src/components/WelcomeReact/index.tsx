import { ReactNode } from "react"
import "./style.scss";

interface IProps {
    initNumber: number | string;
    props1?: string;
    props2?: number;
    checkEmit: (a: string) => void;
    children?: ReactNode;
}
interface IObj {
    a: string;
    b: number;
    c: boolean;
}
export default function WelcomeReact(props: IProps) {
    // const { initNumber } = props;
    const { checkEmit, children } = props;
    const emit: string = 'Emitted';
    const pureObj: IObj = {
        a: '1',
        b: 2,
        c: true
    }
    const pureArray: IObj[] = [
        {
            a: '1',
            b: 2,
            c: true
        },
        {
            a: '2',
            b: 3,
            c: true
        }
    ]
    console.log(pureObj);
    console.log(props);
    console.log(pureArray);
    return (
        // <div>WelcomeReact{initNumber}</div>
        <div className="welcome-container">
            <div>{children}</div>
            <button onClick={() => checkEmit(emit)}> Click</button>
        </div>
    )
}
