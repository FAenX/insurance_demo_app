import React, {useState, useEffect} from "react"
import VehicleDetails from "./quoteFormComponents/VehicleDetails"
import PersonalDetails from "./quoteFormComponents/PersonalDetails"
import SnackBar from "../../components/SnackBar"
import InsuranceDetails from "./quoteFormComponents/InsuranceDetails"
import "./MotorInsuranceQuoteForm.scss"
import {useHistory} from "react-router-dom"

const MotorInsuranceQuoteForm =props=>{
    const[snackbar, setSnackbar ] = useState(false)
    const[vehicle, setVehicle ] = useState({
                                    cover: "privatethirdpartyonly",
                                    vehicleUse: "private",
                                    vehicleMake: "Tesla",
                                    vehicleModel: "Model Y",
                                    yearOfManufacture: "2020",
                                    vehicleValue: "1400000",
                                    regNo: "kbk 100",
                                    coverStartDate: "today",
                                    tonnes: "",})
    const[user, setUser] = useState({
                                        first_name:"First Name",
                                        last_name:"Last Name",
                                        email: "example@email.com",
                                        phone: "+*** **** ***",
                                        location: "location"
                                    })
    const[response, setResponse] = useState({
                                                premium: "",
                                                status: "",
                                                message: ""
                                            })

           
    useEffect(()=>{
        let user = JSON.parse(sessionStorage.getItem("user"))
        if (
            user !== null&&
            user !== undefined &&
            Object.keys(user).length > 1
            )
        {
          setUser(user)
        }
    }, [])

    const requestQuotation=async()=>{
        const url = "api/v1/quotes/quote/";
        const request =await fetch(url, {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            body: JSON.stringify(vehicle),
        })

        if(request.status===200){
            const data = await request.json()
           
            let res = response
            res["premium"]=data.data
            res["status"]="success"
            res["message"]="Request was sucessfull"
            sessionStorage.setItem("temp_user", JSON.stringify(user))
            sessionStorage.setItem("vehicle", JSON.stringify(vehicle))
            sessionStorage.setItem("response", JSON.stringify(data))
            setSnackbar(true)

            
            
            setTimeout(()=>{
                props.history.push("/quotation")
            }, 1000)
            
        }else if(response.status!==200){
            let res = response
            res["premium"]=response.data
            res["status"]="error"
            res["message"]=`error ${response.error}`
            setResponse(res)
            setSnackbar(true)
        }
    }

    const vehicleOnChangeListener=(event)=>{
        const value=event.target.value
        const name = event.target.name

        let newVehicle = vehicle
        newVehicle[name]=value

        console.log(newVehicle)
        setVehicle(newVehicle)
        
    }

    const insuranceChangeListener=(event)=>{
        let newVehicle = vehicle

        const value=event.target.value
        const name = event.target.name

        newVehicle[name]=value
        console.log(newVehicle)

        setVehicle(vehicle)
    }

    const userOnChangeListener=(event)=>{
        let newUser = user

        const value=event.target.value
        const name = event.target.name
        
        newUser[name]= value
        console.log(newUser)

        setUser(newUser)
        
    }
   
        let alert = <SnackBar 
                        status={response.status}
                        message={response.message}
                        show={snackbar}
                        onClose={()=>{setSnackbar(false)}}
                    />
        
        
        return(
                    <>
                    {alert}
                    <div className="form">
                    <PersonalDetails 
                        user={user}
                        userOnChangeListener={userOnChangeListener}
                        loggedIn={props.loggedIn}
                    />
                    <VehicleDetails 
                        vehicle={vehicle}
                        vehicleOnChangeListener={vehicleOnChangeListener}
                    />
                    <InsuranceDetails 
                        vehicle={vehicle}
                        insuranceChangeListener={insuranceChangeListener}
                        handleSubmit={requestQuotation}
                    />
                    </div>
                    </>
                       
             
        )
   
}

export default MotorInsuranceQuoteForm