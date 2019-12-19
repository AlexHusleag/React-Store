import React from 'react'

const TV = (props) => (
    <div className="TV">
        <span>{props.brandName ? props.brandName : "Nu exista"}</span>
        <span>{props.model ? props.model : "Nu exista"}</span>
        <span>{props.resolution ? props.resolution : "Nu exista"}</span>
        <span>{props.price ? props.price : "Nu exista"}</span>
    </div>
)

export default TV;