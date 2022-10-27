import s from "../styles/Reel.module.css"
import Image from "next/image"
import Link from "next/link"
import LaunchIcon from '@mui/icons-material/Launch';

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
            {/*<div 
                className={s.bigImage}
                style={{
                    backgroundImage: `url("${site.image}")`
                }}
            ></div> */}
            <div className={s.bigText}>
                <Link href={site.url}><a target="_blank"><h2><span className={s.span}>{site.name}</span><LaunchIcon /></h2></a></Link>
                <p>{site.description}</p>
                <p>{site.detail.map(detail =>{
                    return <p className={s.bigTextP}>{detail}</p>
                })}</p>
                <div className={s.tech}>
                {site.tech.map((stack, index) => {
                    if(stack == "woltlab"){
                        return <Image src={`/${stack}.png`} height={50} width={100} />
                    } 
                    if(stack == "next"){
                        return <div className={s.wNext}><Image src={`/${stack}.svg`} height={50} width={50} /></div>
                    } else {
                    return <Image src={`/${stack}.svg`} height={50} width={50} />
                    }
                })}
                </div>
            </div>
        </div>
    )
}

export default ReelDetail