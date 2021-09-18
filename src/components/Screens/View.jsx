import React from 'react'
import './../../styles/Views.css'
import Button from "./../GlobalComponents/Button/"
import Input from './../GlobalComponents/Input'
import ProfileImage from './../ViewsComponent/ProfileImage/ProfileImage'
import Skeleton from "react-loading-skeleton";

const View = () => {
    const [data, setData] = React.useState()
    React.useEffect(() => {
        let dummy = {
            name: 'John Dow',
            grade: 11,
            aggscore: 89,
            contactNo: 909090909
        }
        setData(dummy)
        console.log(data)
    }, [])

    return (
        <div className={"views-outer"}>

            <div className={"grid-outer"}>
                <div className={"grid-childs"}>
                    <div>
                        <span>
                        <input
                            className={"global-input input-view"}
                            style={{height: "5vh", width: "20vw", marginBottom: "-30px"}} text={"Roll"}
                            placeholder={"1234XXXXXXX"}/>
                        </span>
                    </div>

                </div>
                <div className={"grid-childs"}>
                    <Button height={"5vh"} width={"10vw"} text={"Look for Roll No."}/>
                </div>
                <div className={"grid-childs profile-card-outer global-card-shadow"}>

                    <div className={"profile-card-inner image-div"}>
                        <ProfileImage data/>
                    </div>
                    <div className={"profile-card-inner detail"}>

                        <div className={"detail-child"}>Name :</div>

                        <div style={{width: "35%"}}>{data ? data.name : <Skeleton count={1}/>}</div>

                    </div>

                    <div className={"profile-card-inner detail"}>

                        <div className={"detail-child"}>Current Grade</div>

                        <div style={{width: "20%"}}>{data ? data.grade : <Skeleton count={1}/>}</div>

                    </div>

                    <div className={"profile-card-inner detail"}>

                        <div className={"detail-child"}>Aggregated Score:</div>

                        <div style={{width: "20%"}}>{data ? data.aggscore : <Skeleton count={1}/>}</div>

                    </div>

                    <div className={"profile-card-inner detail"}>

                        <div className={"detail-child"}>Contact No.:</div>

                        <div style={{width: "20%"}}>{data ? data.contactNo : <Skeleton count={1}/>}</div>

                    </div>


                </div>
                <div className={"grid-childs child-grid"}>
                    <div>
                        <Button height={"5vh"} width={"10vw"} text={"Analyse"}/>
                    </div>
                    <div>
                        <Button height={"5vh"} width={"10vw"} text={"Evaluate"}/>

                    </div>
                </div>


            </div>


        </div>
    )
}

export default View
