import React, { useState, useEffect } from 'react';
import Button from "../Button/Button";
import './ItemCount.css'
import LabelWithCounter from "../LabelWithCounter/LabelWithCounter";

export default function ItemCount() {

    return (
            <div className='itemCountContainer'>
                <div className='itemCountContent'>
                    <h4>{"Camisa negra"}</h4>
                    <div className='countContent'>
                        <LabelWithCounter/>
                    </div>
                    <Button text={"Agregar al carrito"}></Button>
                </div>

            </div>
    );
}