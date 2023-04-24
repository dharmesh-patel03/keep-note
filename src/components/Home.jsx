import React, { useState } from 'react'
import CreateNote from './CreateNote'
import Notes from './Notes'

const Home = () => {
    const [allNotes, setAllNotes] = useState([]);

    const handleNotes = (note) => {
        setAllNotes((prevData) => {
            return [...prevData,note]
        })
    }
    const handleDelete = (id) => {
        setAllNotes((oldData) => {
            return oldData.filter((data, indx) => {
                return indx !== id;
            })
        })
    }
    return (
        <div className="my-20 mx-10">
            <CreateNote handleNotes={handleNotes}/>
            <div className='container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-3 gap-4'>
                {
                    allNotes.map((data, index) => {
                        return <Notes key={index} id={index} allNotes={data} handleDelete={ handleDelete} />
                    })
                }
            </div>
        </div>

    )
}

export default Home