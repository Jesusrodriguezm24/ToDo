
import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header/Header'
import ModalView from './components/ModalView/ModalView';
import Task from './components/Task/Task'
import { getAllTasks } from './services/getAllTasks';
import CreateTask from './components/CreateTask/CreateTask';
import Login from './components/Login/Login';


function App() {
  const [tasks, setTasks] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [onCreate, setOnCreate] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const loadTasks = async () => {
    const tasksInfo = await getAllTasks();
    setTasks(tasksInfo);
  }

  const handleCloseModal = () => {
    setIsVisibleModal(false);
    setOnCreate(false);
    setIsLogin(false);
  }

  const handleOnCreate = () => {
    setOnCreate(true);
    setIsVisibleModal(true);  
  }

  const handleOnLogin = (userLogin) => {
    setIsLogin(true);
    setIsVisibleModal(true);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <Header onCreate={handleOnCreate} onLogin={handleOnLogin} />
      <Task/>
      <ModalView isVisible={isVisibleModal} >
        {isLogin && <Login onLoadin={handleOnLogin} onCloseModal={handleCloseModal}/>}
        {onCreate &&  <CreateTask onCloseModal={handleCloseModal}/>}

      </ModalView>
    </>
  )
}

export default App
