import React, { useState } from 'react'

export const NewRoomForm = (props) => {
    const [name, setName] = useState('')
    const [area, setArea] = useState('')

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10)
        setArea(int >= 0 ? int : '')
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (name && area) {
            props.addNewRoom({name, area})
            setName('')
            setArea('')
        } else {
            console.log('invalid input')
        }
    }

    return (
        <div>
            <h4>Add a New Room</h4>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
                value={name}>

                </input>
                <input
                type='text'
                placeholder='area'
                onChange={handleAreaInput}
                value={area}>
                </input>
                <button className='btn btn-success' type='submit'>Add room</button>
            </form>
        </div>
    )
}