import { projects } from "../lib/project_info"
import {useState} from "react"
import ReelDetail from "./ReelDetail"
import s from "../styles/Reel.module.css"
import { useEffect } from "react"

function Reel(){

    const [open, setOpen] = useState(false)
    const [proj, setProj] = useState("")
    const [indx, setIndx] = useState(0)
    const [grid, setGrid] = useState([])


    function handleClick(e, index){
        const cols= window.getComputedStyle(e.target.parentNode).gridTemplateColumns.split(" ").length
        const rows = window.getComputedStyle(e.target.parentNode).gridTemplateRows.split(" ").length
        const gridMeasurement = [cols, rows]
        setGrid(gridMeasurement)
        setIndx(index)
        if(!open){
            setOpen(true)
        }
        if(open && indx == index){
            setOpen(!open)
        }
        setProj(projects[index].name)
    }

    return(
        <div className={s.container}>
        {projects.map((project, index) => {
            return <div 
                    className={s.tile} 
                    key={`projectTile_${index}`} 
                    style={{
                        backgroundImage: `url("${project.image}")`
                    }}
                    onClick={(e)=>handleClick(e, index)}>
            </div>
            
       })}
       {open?
                <ReelDetail index={indx} project={projects[indx]} grid={grid == [] ? gridMeasurement : grid} />:null}
        </div>
    )
}

export default Reel