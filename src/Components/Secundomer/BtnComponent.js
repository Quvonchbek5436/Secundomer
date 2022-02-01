import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "@mui/material";
import BtnStyle from "./BtnStyle";



 const BtnComponent = (props) =>{
     return(
         <>
                <BtnStyle>
                    <div className={"py-2 "}>
                        {(props.status===0)?
                            <Button className="stopwatch-btn w-50"   onClick={props.start}>Start</Button>:""

                        }
                        {(props.status===1)?
                            <div>
                                <Button className="stopwatch-btn w-50"    onClick={props.stop}>Stop</Button>
                                <Button className="stopwatch-btn w-50"   onClick={props.reset}>Reset</Button>
                            </div>:""

                        }
                        {(props.status===2)?
                            <div>
                                <Button className="stopwatch-btn w-50"   onClick={props.resume}>Resume</Button>
                                <Button className="stopwatch-btn w-50"  onClick={props.reset}>Reset</Button>
                            </div>:""

                        }
                    </div>
                </BtnStyle>
         </>
     )
 }

export default BtnComponent