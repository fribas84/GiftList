import React from 'react';
import { useState,useEffect } from 'react'

import ErrorHandler from './ErrorHandler';

const Search = ({setName,name}) => {
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("the input name cannot be empty, please type a name below");

    useEffect(()=>{
        setError(false);
    },[name])


    const handleSearch = () => {
        console.log("handlesearch");
        console.log("name ",name);
        if([name].includes('')){
            console.log("inside includes");
            setError(true);
        }
    }    
    return (
        <div className="items-center mx-auto mt-10">
           
            {error && (
                    <ErrorHandler errorText = {errorText}/>
                )}
             <div className="flex border border-indigo-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Enter your name to claim a prize ..."
                />
                    <button
                        onClick={handleSearch}
                        className="px-4 text-white bg-indigo-600 border-l rounded-lg ml-2">
                            Claim
                    </button>
               </div>
        </div>
    )
}

export default Search