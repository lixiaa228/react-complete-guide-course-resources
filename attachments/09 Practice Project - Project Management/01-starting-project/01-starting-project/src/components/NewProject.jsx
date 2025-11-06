import styled from 'styled-components'
import { useRef, useState } from 'react'

const BlockElems = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #615d5a;
    width: 800px;
    font-weight: bold;
  
    margin-bottom: 15px;

    label {
        color: #645f5e;
        margin-bottom: 5px;
    }

    input, textarea {
        background: #e1dfdd;
        border-bottom: 3px solid #c8c7c5;
        font-weight: initial;
        border-radius: 3px;
        padding-left: 5px;
        color: #51524f;
        font-size: 18px;
    }
    input {
        height: 35px;
    }

`

const date = new Date();
const readable = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
});

export default function NewProject( { onNoSelect, onCancel } ) {

    const [ values, setValues ] = useState( {
        title: "",
        description: "",
        date: readable,
    } )


    function updateValues(e) {
        setValues( (prevValue) => ({
                ...prevValue,
            [e.target.id]: e.target.value
        }))
    }


    return (
        <form>
            <div className="flex flex-row justify-end mb-[30px]">
                <button onClick={onCancel} className="bg-[#f9f9f9] text-[#1c1816] rounded-md font-medium w-[90px] h-[45px]">Cancel</button>
                <button onClick={() => onNoSelect(values)} className="bg-[#1c1816] text-[#f9f9f9] w-[90px] h-[45px] rounded-md font-medium">Save</button>
            </div>
            <BlockElems>
                <label htmlFor="title">TITLE</label>
                <input type="text" name="title" id="title" required value={values.title} onChange={updateValues}/>
            </BlockElems>
            <BlockElems>
                <label htmlFor="textarea">DESCRIPTION</label>
                <textarea name="textarea" id="description" value={values.description} onChange={updateValues}></textarea>
            </BlockElems>
            <BlockElems>
                <label htmlFor="date">DUE DATE</label>
                <input type="date" name="date" id="date" required value={values.date} onChange={updateValues}/>
            </BlockElems>
        </form>
    )
}