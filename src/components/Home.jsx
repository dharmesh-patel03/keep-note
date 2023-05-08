import React from 'react'
import CreateNote from './CreateNote'
import Notes from './Notes';
import { useSelector } from 'react-redux';

const Home = () => {
    const myState = useSelector((state) => state.myNotes.notes)
    return (
        <div className="my-20 mx-10">
            <CreateNote />
            <div className='container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-3 gap-4'>
                {
                    myState.map((data, index) => {
                        return <Notes key={index} id={data.id} allNotes={data}  />
                    })
                }
            </div>
        </div>

    )
}

export default Home