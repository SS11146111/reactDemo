import { TaskCard } from "./TaskCard";
import { useState } from "react";
import { BoxCard } from "./BoxCard";
import "./Task.css"


export default function Task({title, info}) {

    const [tasks, setTasks] = useState([
                                            {id: 5271, name: "Record React Lectures", completed: true}, 
                                            {id: 7825, name: "Edit React Lectures", completed: false}, 
                                            {id: 8391, name: "Watch Lectures", completed: false}
                                        ])
    const [show, setShow] = useState(true)

    function handleDelete(id)
    {
        setTasks(tasks.filter(task => task.id!==id));
    }
  
    return (
    
        <div className="main">
            <h1>{title} to Task List</h1>
            <ul>
                <button className="toggle" onClick={()=>setShow(!show)}>Toggle</button>
                { show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
                ))      
                }
            </ul>
            <BoxCard result="success" info={info}>
                <p className="title">Lorem, ipsum.</p>
                <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, vel.</p>
            </BoxCard>
            <BoxCard result="alert" info={info}>
                <p className="title">Lorem, ipsum.</p>
                <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, vel.</p>
            </BoxCard>
        </div>
    )
}
