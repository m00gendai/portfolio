import s from "../styles/Reel.module.css"

function ReelDetail(props){
    const gridCol = props.grid[0]
    const gridRow = props.grid[1] // This is not really used but fun to know anyways
    const site = props.project
    const index = props.index

    // Do not question the MATH for the MATH is absolute (MATHäus 69:420)
    const rowPosition = Math.floor(index/gridCol)+1
    const colPosition = (index%gridCol)+1 // This is not really used but fun to know anyways


    return(
        <div 
            className={s.bigScreen}
            style={{
                gridRowStart: rowPosition+1,
                gridRowEnd: rowPosition+2,
                gridColumnStart: 1,
                gridColumnEnd: gridCol+1
            }}
        >
            {site.name}
        </div>
    )
}

export default ReelDetail