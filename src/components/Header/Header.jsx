import './Header.css'

const Header = ({onCreate, onLogin}) => {
  return (
    <section className='header_container'>
        <h1 className='header_title'>ToDo List</h1>
        <div >
            <button onClick={onLogin} className='btn_login'>
                <i class='bx bx-log-in'></i>
            </button>
        </div>

        <div className="create_container">
            <button onClick={onCreate} className="btn_createTask">Create Task
                <i class='bx bx-task'></i>
            </button>
        </div>
    </section>
  )
}

export default Header
