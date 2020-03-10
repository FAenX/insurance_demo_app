import React, {useState, useEffect}from "react"
import imgPlaceholder from "../../assets/images/img_placeholder.png"
import {Paper} from "@material-ui/core"
import "./WhyUs.scss"
import clsx from "clsx"

const how = "Name Insurance inc makes use of cutting-edge technology to provide our" 
            +"customers with the best deal. Our web services are managed and run"
            +"by leading and experienced web developers, meaning that our customers"
                   
const how1 = "Once you buy the right policy after you’ve done the compare insurance "
            +"and compare policy drill to your satisfaction, the process of delivering "
            

const WhyUsChild =()=> {
    const [positionY, setPositionY] = useState(0)
    useEffect(()=>{
        window.addEventListener("scroll", watchScrolling);
    })

    const watchScrolling = () => {
        const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
        const winScroll = document.body.scrollTop || scrollTop;
        const winHeight = scrollHeight - clientHeight;
        const scrolled = (winScroll / winHeight) * 100;
        setPositionY(scrolled)
    };

    const transition={
        transition: "width .5s, height .5s"
    }
    return(
        <div className="why-us-text">
            <Paper style={transition} variant="outlined" className={clsx("why-us-child", {"show": positionY>35})}>
                <div className="svg"><img alt="" src={imgPlaceholder}/></div>
                <div className="step-header">Tailor Made Quotes</div>
                <div className="step-text">{how}</div>
            </Paper>
            <Paper style={transition} variant="outlined" className={clsx("why-us-child", {"show": positionY>35})}>
                <div className="svg"><img alt="" src={imgPlaceholder}/></div>
                <div className="step-header">Immediate Delivery</div>
                <div className="step-text">{how1}</div>
            </Paper>
        </div>
    )
    
}


const WhyUs =()=> {
    const pageHeaderStyle={
        margin: "1em",
        textAlign: "left",
        textTransform: "uppercase",
        paddingLeft: "1em",
        fontSize: "2em",
        color: "white",
    }
   
    return(
        <div className="why-us">
            <div style={pageHeaderStyle} className="page-header">
            WE ARE THE MOST TRUSTED INSURANCE MARKET PLACE ONLINE
            </div>
            <WhyUsChild />
        </div>
    )

}

export default WhyUs