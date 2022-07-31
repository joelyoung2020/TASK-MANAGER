//Footer component,it meants to be on another js but i cant figure out how to import yet

const Footer = () => {
    return (
      <div className ="footer">
        <p>Version 1.0.0</p>
        <p>Copyright &copy; 2021</p>
        <p><a href="">About</a></p>
      </div>
    )
  }

//Btn component,it meants to be on another js but i cant figure out how to import yet
const Btn = ({bgcolor, color, text, onClick}) => {
    return (
      <button style= {{color: color, background: bgcolor}}className='btn' onClick={onClick}>{text}</button>
    )
  }

Btn.defaultProps = {
    // onClick: {onClick},
    color: "white",
    background: "black",
    text: "click"
}


//Tasks component,it meants to be on another js but i cant figure out how to import yet

const { useState } = React
const Task = ({tasks, onDelete, onToggle}) => {
  return (
    <div>
        <p></p>
        {tasks.map((task) =>(
        <Tasks key ={task.id} task={task} onDelete ={onDelete} onToggle={onToggle}/>
        ) )}
    </div>
  )
}

//Task component,it meants to be on another js but i cant figure out how to import yet


const Tasks = ({task, onDelete, onToggle}) => {
  return (
    <div onDoubleClick={() => onToggle(task.id)} className= {`task ${task.reminder ? "reminder" : ""}`}>
        <h3>
            {task.text}<i className="fa fa-trash" style={{color:"red", cursor:"pointer"}} onClick={() =>onDelete(task.id)}></i>
        </h3>
        <p>{task.date}</p>
    </div>
  )
}




//title components,it meants to be on another js but i cant figure out how to import yet
function Header({ title, onAdd, change }) {
    // const onClick = () => {
    //     console.log("click")
    // }
    return (
        <header className="header">
            <h1 style={{color:"white"}}>{title }</h1>
        <Btn  bgcolor={change ? "red" : "purple"} color="white" text={change ? "Close" : "Add"} onClick={onAdd} />
        </header>
    )
}

//form components, it meants to be on another js but i cant figure out how to import yet


const Addform = ({addOn}) => {
    const { useState } = React
    const [text,setText] = useState("")
    const [date,setDate] = useState("")
    const [reminder,setReminder] = useState(false)

    const onSubmit =(e) =>{
        e.preventDefault()

        if(!text){
            alert("No task added")
            return
        }
        addOn({ text, date, reminder})

        setText("")
        setDate("")
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit ={onSubmit}>
    <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add task" value ={text} onChange = {(e) => setText(e.target.value)}/>
    </div>
    <div className="form-control">
        <label>Date & time</label>
        <input type="text" placeholder="Add Date & time" value ={date} onChange = {(e) => setDate(e.target.value)}/>
    </div>
    <div className="form-control form-control-check ">
        <label>Set Reminder</label>
        <input type="checkbox" checked ={reminder} value ={reminder} onChange = {(e) => setReminder(e.currentTarget.checked)}/>
    </div>
    <input type="submit" value="Save Task" className="btn btn-block"/>
</form>
  )
}


//main funtion
function Hello() {
    // const { useState } = React
    const [showAddTask,setShowAddTask] = useState(false)

    const [lists, setTasks] = useState([
        {  id: 1,
            text : "Meeting with Chris",
        date: "6th August 5pm",
        reminder: true,
    }
    , 
     {   id: 2,
        text : "Clean up",
    date: "10th August 8am",
    reminder: true, }
    ,
    {   id: 3,
        text : "Back to gym",
    date: "18th August 8am",
    reminder: true,
}
    ])
    // add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 100000) + 1
        const newTasks = {id,...task}
        console.log(newTasks)
        setTasks([...lists,newTasks])
        localStorage.setItem("myTasks", JSON.stringify(lists))
    }


    //delete task
    const deleteTask = (id) => {
        setTasks(lists.filter((task) => (task.id != id)))
    }

    //togglereminder
    const toggleReminder = (id) => {
        setTasks(lists.map((task) => task.id ===id? {...task, reminder: !task.reminder}: task))
    }

    return( 
        <div className="container">
            <Header  change={showAddTask} onAdd = {() =>setShowAddTask(!showAddTask) }title="Task Manager"/>
            {showAddTask && <Addform addOn ={addTask}/>}
            {lists.length > 0 ?<Task  tasks ={lists} onDelete={deleteTask} onToggle ={toggleReminder}/>: "No Task To Show"}
            <Footer/>
        </div>  
    )  
    
    }
    // localStorage.setItem("myTask", JSON.stringify(lists))

    ReactDOM.render(<Hello/>, document.getElementById('mydiv'))