import React from "react";

interface badgeProps{
    title:string
}
const Badge:React.FC<badgeProps> = ({ title }) => {
    return (
      <div style={{padding:10, backgroundColor:'green' }}>
        <p style={{color:'white', fontSize:30}}>{title}</p>
      </div>
    );
    
}
export default Badge;