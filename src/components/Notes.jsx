import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const Notes = ({ allNotes,handleDelete,id }) => {
    const onDelete = () => {
        handleDelete(id)
    }
    return (
        <div className="">
            <div className='note p-3 rounded-lg shadow bg-yellow-200 m-auto'>
                <h4 className="title text-lg font-bold capitalize ">
                    {allNotes.title}
                </h4>
                <p className="notes text-sm capitalize ">
                    {allNotes.contents}
                </p>
            </div>
            <div className='wrap-delete block m-auto'>
                <div className='delete-button p-2 flex w-10 rounded-full shadow cursor-pointer 
                m-1' onClick={onDelete}>
                    <DeleteIcon />
                </div>
            </div>
        </div>
    )
}

export default Notes