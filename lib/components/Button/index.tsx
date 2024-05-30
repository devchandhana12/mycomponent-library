import React from "react";
import '../../assets/button.module.css'
interface buttonProps{
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onPress:any
}
const Button: React.FC<buttonProps> = ({title, onPress}) => {
    return (
        <>
            <button title={title}  onClick={onPress} style={{backgroundColor:'cyan'}}/>
        </>
    )
}
export default Button;