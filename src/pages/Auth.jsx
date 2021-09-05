import React from 'react';
import './../styles/authPage.css'
import Button from './../components/GlobalComponents/Button'
import Input from './../components/GlobalComponents/Input'
import firebase from  'firebase';
import firebaseConfig from './../firebaseConfig';
import Slide from 'react-reveal/Slide';
import {useHistory} from 'react-router-dom'

function Auth() {
    const history = useHistory();
    const [auth, setAuth] = React.useState(false)
    const [details , setdetails  ]=  React.useState({
        email:"",
        password:""
    })

    function handleData(e){
        e.preventDefault();
        setdetails({...details,[e.target.name]:e.target.value})

    }
    const signIn = () => {
        const {email, password} = details;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(userCredential => {
history.push("/dashboard")
            })
            .catch(error => {
              alert(error.message);
            });
    };
    const signUp = () => {
        const {email, password} = details;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(usercreds => {

                localStorage.setItem("user", usercreds.user.$.D.a);
                window.location.reload();
            })
            .catch(error => {
               alert(error.message)
            });
    };

    React.useEffect(()=>{
        if(window.localStorage.getItem("user")){
            setAuth(true)
        }

    },[Auth])

    if(auth){
    return (

        <div className={"auth-outer"}>
            <Slide bottom>
            <h1 style={{color: "blue"}}>Let's log you In</h1>
            </Slide>

            <Slide left>
            <div className={"auth-inner"}>

                <div className={"comp-1 comp"}> <h3>Username </h3> </div>
                <div className={"comp-2 comp"}>
                    <input className={"global-input"} type={"email"} name={"email"} onChange={handleData} height={"30px"} width={"100%"} placeholder={"john@doe.com"} />
                </div>
                <div className={"comp-3 comp"}><h3>Password</h3></div>
                <div className={"comp-4 comp"}>
                    <input className={"global-input"} height={"30px"} width={"100%"} type={"password"} name={"password"} onChange={handleData} placeholder={"********"}/>

                </div>
                <div className={"comp-5 comp"}>
                    <button className={"global-button"} onClick={()=>signIn()} style={{height:"30px", width:"100px"}} text={"Login"} >Login </button>


                </div>


            </div>

            </Slide>
        </div>)}
    else{
        return(

        <div className={"auth-outer"}>
            <Slide bottom>
            <h1 style={{color: "blue"}}>Hey , Let's do a quick Signup</h1>
            </Slide>
            <Slide right>
            <div className={"auth-inner"}>

                <div className={"comp-1 comp"}><h3>Username </h3></div>
                <div className={"comp-2 comp"}>
                    <input className={"global-input"} type={"email"} name={"email"} onChange={handleData}
                           height={"30px"} width={"100%"} placeholder={"john@doe.com"}/>
                </div>
                <div className={"comp-3 comp"}><h3>Password</h3></div>
                <div className={"comp-4 comp"}>
                    <input className={"global-input"} height={"30px"} width={"100%"} type={"password"} name={"password"}
                           onChange={handleData} placeholder={"********"}/>

                </div>
                <div className={"comp-5 comp"}>
                    <button className={"global-button"} onClick={() => signUp()} style={{height:"30px", width:"100px"}}
                            text={"SignUp"}>SignUp
                    </button>


                </div>


            </div>

            </Slide>
        </div>
           ) }
        }




export default Auth;