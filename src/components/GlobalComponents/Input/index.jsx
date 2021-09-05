import React from 'react';

function Index(props) {
    const [placeHolder,setplaceholder] =React.useState();
    const [width,setWidth] = React.useState();
    const [height,setHeight] = React.useState();

    React.useEffect(()=>{
        setplaceholder(props.placeholder);
        setHeight(props.height);
        setWidth(props.width);
    })
    return (
        <><input style={{height,width}} className={"global-input"} placeholder={props.placeholder} >{props.text}</input></>
    );
}

export default Index;