import s from "../styles/Reel.module.css"
import Image from "next/image"
import Link from "next/link"
import LaunchIcon from '@mui/icons-material/Launch';

function ReelDetail(props){
    const fadeIn = props.fadeIn
    const gridCol = props.grid[0]
    const gridRow = props.grid[1] // This is not really used but fun to know anyways
    const site = props.project
    const index = props.index

    // Do not question the MATH for the MATH is absolute (MATHäus 69:420)
    const rowPosition = Math.floor(index/gridCol)+1
    const colPosition = (index%gridCol)+1 // This is not really used but fun to know anyways

    return(
        <div 
            className={`${s.bigScreen} ${fadeIn ? s.fadeIn : s.fadeOut}`}
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
                <Link href={site.url}>
                    <a target="_blank">
                        <h2>
                            <span className={s.span}>
                                {site.name}
                            </span>
                            <LaunchIcon />
                        </h2>
                    </a>
                </Link>
                <p>{site.description}</p>
                {site.detail.map((detail, index) =>{
                    return <p key={`detailParagraph_${index}`} className={s.bigTextP}>{detail}</p>
                })}
                <div className={s.tech}>
                {site.tech.map((stack, index) => {
                    if(stack.name == "woltlab"){
                        return <Link key={`techstack_${index}`} href={stack.link}>
                                <a target="_blank">
                                    <Image   
                                        src={`/${stack.name}.png`} 
                                        title={stack.nameDetail} 
                                        height={50} 
                                        width={100} 
                                    />
                                </a>
                            </Link>
                    } 
                    if(stack.name == "next"){
                        return <Link key={`techstack_${index}`} href={stack.link}>
                                <a target="_blank">
                                    <div className={s.wNext} >
                                        <Image 
                                            src={`/${stack.name}.svg`} 
                                            title={stack.nameDetail} 
                                            height={50} 
                                            width={50} 
                                        />
                                    </div>
                                </a>
                            </Link>
                    } else {
                        return <Link key={`techstack_${index}`} href={stack.link}>
                            <a target="_blank">
                                <Image 
                                    src={`/${stack.name}.svg`} 
                                    title={stack.nameDetail} 
                                    height={50} 
                                    width={50} 
                                />
                            </a>
                        </Link>
                    }
                })}
                </div>
            </div>
        </div>
    )
}

export default ReelDetail