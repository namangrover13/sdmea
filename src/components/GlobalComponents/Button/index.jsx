import React from 'react';

import './../../../styles/Global.css'
function Index(props) {
   const [height, setheight] = React.useState();
   const [width,setwith ] = React.useState();
   React.useEffect(()=>{
       setheight(props.height);
       setwith(props.width);
   })
    return (
        <>
        <button className={"global-button"} style={{height,width}}>{props.text}</button>
        </>
    );
}

export default Index;