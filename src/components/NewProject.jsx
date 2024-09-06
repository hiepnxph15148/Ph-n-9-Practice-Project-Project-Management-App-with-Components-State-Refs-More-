import React, { useRef } from 'react'
import Input from './input'
import Modal from './Modal';

const NewProject = ({onAdd,onCancel}) => {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        //validate....
        if(enteredDescription.trim() === '' || 
        enteredTitle.trim()  === '' || 
        enteredTitle.trim() === ''
        ){
            modal.current.open();
            return; // stop the function execution here to prevent saving the project with invalid data.
            //show the error message
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }
    return (
        <>
        <Modal  ref={modal} buttonCaption={'Oke'}>
            <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
            <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value</p>
            <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className='w-[40%] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li>
                    <button className='text-stone-800 hover:text-stone-950'
                    onClick={onCancel}
                    >
                        Cannel
                    </button>
                </li>
                <li>
                    <button
                        onClick={handleSave}
                        className='px-6 py-2 rounded-md bg-stone-800 text-slate-50 hover:bg-stone-950'
                    >Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type='text' ref={title} label={'Title'} />
                <Input ref={description} label={'Description'} textarea />
                <Input type='date' ref={dueDate} label={'Due Date'} />
            </div>
        </div>
        </>
    )
}

export default NewProject