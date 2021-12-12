import React, {useState} from 'react'
import './../../styles/Views.css'
import Button from "./../GlobalComponents/Button/"
import ProfileImage from './../ViewsComponent/ProfileImage/ProfileImage'
import Skeleton from "react-loading-skeleton";
import {STUDENTS} from '../../constants/data/Students';

const View = () => {
    const [data, setData] = useState()
    const [name, setName] = useState('');
    const [rawData, setrawData] = useState([])
    React.useEffect(() => {
        setrawData(STUDENTS);
    }, [])


    function handleClick() {
        const _name = name;
        const _newData = rawData.find(data => data.name.toUpperCase() === _name.toUpperCase());
        if (_newData === undefined) alert('No student with this name');
        setData(_newData);
    }

    return (
        <div className={"views-outer"}>

            <div className={"grid-outer"}>
                <div className={"grid-childs"}>
                    <div>
                        <span>
                        <input
                            className={"global-input input-view"}
                            style={{height: "5vh", width: "20vw", marginBottom: "-30px"}}
                             onChange={(e) => setName(e.target.value)}/>
                        </span>
                    </div>

                </div>
                <div className={"grid-childs"}>
                    <button className={'global-button'} onClick={() => handleClick()}>Search</button>
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
                        <div style={{width: "20%"}}>{data ? data.standard : <Skeleton count={1}/>}</div>
                    </div>
                    <div className={"profile-card-inner detail"}>
                        <div className={"detail-child"}>% in 10:</div>
                        <div style={{width: "20%"}}>{data ? data.tenthPercent : <Skeleton count={1}/>}</div>
                    </div>
                    <div className={"profile-card-inner detail"}>
                        <div style={{display: 'flex'}}>
                            {data?.isOptedBio && <div className={'_subjectTag _subBi'}>Science & Biology</div>}
                            {data?.isOptedMaths &&
                                <div className={'_subjectTag _subMa'}>Science & Math</div>}
                        </div>
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
