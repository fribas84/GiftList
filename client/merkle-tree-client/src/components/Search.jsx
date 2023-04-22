import React from 'react'

const Search = () => {
    return (
        <div className="items-center mx-auto mt-10">
            <div className="flex border border-indigo-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Enter your name to claim a prize ..."


                />
                    <button className="px-4 text-white bg-indigo-600 border-l rounded-lg ml-2">
                        Claim
                    </button>
            

            </div>
        </div>
    )
}

export default Search