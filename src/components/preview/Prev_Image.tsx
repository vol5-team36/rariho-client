import React from 'react';
import pic from "../../Images/E.png"

const ErrorImage = (e: any) => {
    if (e == undefined) return pic;
    return URL.createObjectURL(e)
};

export default (p: any) =>{
    return(
            <div
            style={{
                position: "relative",
                width: "40%"
            }}
            >
            <img
                src={
                    URL.createObjectURL(p)
                    //ErrorImage(p)
                }
                style={{
                width: "100%"
                }}
            />
            </div>
    );
}