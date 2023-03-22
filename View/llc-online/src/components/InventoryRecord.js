import React from "react";
import useFetch from "react-fetch-hook";

export default function UserTable(){
    const {data, isLoading, error } = useFetch('/inventory'); 
    if(isLoading) return <h2> Loading...</h2>;
    else if(error) return <h2> Error: {error.message} </h2>;
    else return (
        <div>
            {data}
        </div>
    );
}