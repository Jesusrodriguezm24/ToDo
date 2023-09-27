import { useState } from 'react';
import './CreateTask.css'

const CreateTask = ({onCloseModal, onSubmit}) => {

    const [formData, setFormData] = useState({title: "", description: ""});
   
    const handleChange = (e) => {
         const { name, value } = e.target;
         const newFormData = { ...formData, [name]: value }
         setFormData(newFormData);   
     }
 
    const handleSubmit = async (e) => {
         e.preventDefault();
        //  if (!formData.email || !formData.password) return;
         
        //  const user = await login(formData);
     }



  return (
    <section className='createTask_container'>
        <div>

            <h2 className='createTask_title'> New Task</h2>

            <form onSubmit={handleSubmit} className='form_createTask'>
                <div className='dv_form_createTask_title'>
                    <label htmlFor="titleTaskId">Title: </label>
                    <input type="text" name="titleTask" className='form_createTask_input' onChange={handleChange} id="titleTaskId" required/>
                </div>

                <div className='dv_form_createTask_textarea'>
                    <label htmlFor="descriptionTaskId">Description: </label>
                    <textarea type="text" className='form_createTask_textarea' name="descriptionTask" onChange={handleChange} id="descriptionTaskId" required></textarea>
                </div>
            </form>


            <div className='btn_cancel_create'>
                <button> Add </button>
                <button onClick={()=>onCloseModal()}> Cancel </button>
            </div>
            
          

        </div>
    </section>
  )
}

export default CreateTask
