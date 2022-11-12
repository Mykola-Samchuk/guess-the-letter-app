import React from "react";

export default function random(arr){
    return arr.sort(() => Math.random() - 0.5);
}