import React from "react";
import data from '../data';
import Header from './Header';
import Usercard from './Usercard';



const Main = () => {
    return (
        <>
        <Header />
        <Usercard data={data} />
        </>
    )
}

export default Main;