import React from 'react';
import '../../../styles/ComponentStyles/ProfileImage.css'
import Skeleton from "react-loading-skeleton";
import Image from './../../../constants/images/prof-img.jpg'
const ProfileImage = (props) => {
   const data = true
    if(data){
        return <div><img className={"global-card-shadow"} style={{height:"300px",borderRadius:"10px"}} src={Image}  /></div>
    }else {
        return (
            <div style={{lineHeight:"2", fontSize:"20px"}}>
<Skeleton count={5} color={"black"}/>
            </div>
        );
    }
};

export default ProfileImage;