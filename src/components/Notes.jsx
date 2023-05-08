import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux"
import {deleteNote} from "../actions"
const Notes = ({ allNotes, id }) => {
    const dispatch = useDispatch();
    return (
        <div className="">
            <div className='note p-3 rounded-lg shadow bg-yellow-200 m-auto'>
                <h4 className="title text-lg font-bold capitalize mb-3">
                    {allNotes.data.title}
                </h4>
                <p className="notes text-sm capitalize ">
                    {allNotes.data.contents}
                </p>
            </div>
            <div className='wrap-delete block m-auto'>
                <div className='delete-button p-2 flex w-10 rounded-full shadow cursor-pointer 
                m-1' onClick={() => { dispatch(deleteNote(id))}}>
                    <DeleteIcon />
                </div>
            </div>
        </div>
    )
}

export default Notes