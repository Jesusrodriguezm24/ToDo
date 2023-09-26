import './CreateTask.css'

const CreateTask = ({onCloseModal, onSubmit}) => {
  return (
    <section className='createTask_container'>
        <div>

            <h2 className='createTask_title'> New Task</h2>

            <form onSubmit={onSubmit} className='form_createTask'>
                <div>
                    <label htmlFor="titleTaskId">Title: </label>
                    <input type="text" name="titleTask" id="titleTaskId" />
                </div>

                <div>
                    <label htmlFor="DescriptionTaskId">Description: </label>
                    <input type="text" name="DescriptionTask" id="DescriptionTaskId" />
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
