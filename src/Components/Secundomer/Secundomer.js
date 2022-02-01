import React, {useState} from 'react';
import BtnComponent from "./BtnComponent";
import DisplayComponent from "./DisplayComponent";
import StyleSecundomer from "./Style";
import "bootstrap/dist/css/bootstrap.min.css";
import colors from "./Color";


const Secundomer = () =>{
    const [time,setTime] = useState({ms: 0, s: 0, m: 0, h: 0})
    const [interv,setInterv]=useState();
    const [status,setStatus] = useState(0);

    const start = ()=> {
        run();
        setStatus(1);
        setInterv(setInterval(run,10));
    }



    let updateMs =time.ms,updateS =time.s,updateM=time.m,updateH =time.h;

    const run = () =>{
        if (updateM===60){
            updateH++;
            updateM=0;
        }if (updateS===60){
            updateM++;
            updateS=0;
        }if (updateMs===99){
            updateS++;
            updateMs=0;
        }updateMs++;
        return setTime({ms: updateMs, s: updateS, m: updateM, h: updateH});
    }

    const stop = ()=> {
        clearInterval(interv);
        setStatus(2);
    }
    const reset = ()=> {
        clearInterval(interv);
        setStatus(0);
        setTime({ms: 0, s: 0, m: 0, h: 0})
    }
    const resume = ()=> start();

    return(
        <>
            <div className="main-section py-3 px-4 d-flex justify-content-center align-items-center">
                <div className="clock-holder card py-3 px-4 bg-dark" sx={{backgroundColor:`${colors.bgColor}`,color:`${colors.textColor}`}}>


                            <DisplayComponent time={time} />

                            <div className={"w-100 d-flex justify-content-between align-items-center"}>
                                <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start }/>
                            </div>

                </div>
            </div>

        </>
    )
}

export default Secundomer;