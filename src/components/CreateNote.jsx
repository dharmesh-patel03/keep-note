import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions';

const CreateNote = () => {
    const dispatch = useDispatch();

    const [note, setNote] = useState({
        title: "",
        contents: ""
    })

    const changeInput = (e) => {
        const { value, name } = e.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return (

        <div className="container flex justify-center">
            <form action="" className='input-form shadow h-0'>
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder='Title'
                        value={note.title}
                        className='bg-yellow-200 placeholder-gray-500 h-10  rounded-lg focus:outline-none py-2 px-4 input-title'
                        onChange={changeInput} />
                </div>
                <div className={`input-area`}>
                    <textarea
                        name="contents"
                        id=""
                        cols="30"
                        rows="5"
                        value={note.contents}
                        className='bg-yellow-200 border-transparent outline-none input-area focus:outline-none p-3'
                        placeholder='Add Notes ...'
                        onChange={changeInput}
                    ></textarea>
                </div>
                <div className='wrap'>
                    <div className='button p-2 flex w-10 rounded-full shadow cursor-pointer hover:bg-red-200 ml-auto mr-4 mb-4' onClick={() =>
                    {
                        if (!note.title || !note.contents) {
                            toast.error('Please add something !!!', {
                                position: toast.POSITION.TOP_CENTER
                            });
                        }
                        else {
                            dispatch(addNote(note))
                            setNote({
                                title: "",
                                contents:""
                            })
                        }
                    }
                    }>
                        <AddIcon />
                    </div>
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}

export default CreateNote