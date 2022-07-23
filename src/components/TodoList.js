import React, { useState } from 'react'
import ToListItem from './ToListItem';

const TodoList = () => {
    const [inputList, setInputlist] = useState("");
    const [items, setItems] = useState([]);


    const handleChange = (e) => {
        setInputlist(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems((oldItem) => {
            return [...oldItem, inputList]
        })
        setInputlist('');
    }

    return (

        <div className='todolist-conatiner'>
            <div className='todolist-input' >
                <input type="text" placeholder='Add Item' value={inputList} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {
                items.map((item, index) => {
                    return <ToListItem key={index} name={item} />
                })
            }
        </div>
    )
}

export default TodoList