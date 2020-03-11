import React, {useState, useEffect} from "react"
import VehicleDetails from "./quoteFormComponents/VehicleDetails"
import PersonalDetails from "./quoteFormComponents/PersonalDetails"
import SnackBar from "./SnackBar"
import InsuranceDetails from "./quoteFormComponents/InsuranceDetails"
import "./MotorInsuranceQuoteForm.scss"

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
                                        first_name:"",
                                        last_name:"",
                                        email: "",
                                        phone: "",
                                        location: ""
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
            ){
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
                props.redirect("quotation-response")
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
        const newVehicle = vehicle
        newVehicle[event.target.id]=event.target.value

       setVehicle(newVehicle)
        
    }

    const insuranceChangeListener=(event)=>{
        const newVehicle = vehicle
        let name = event.target.name
        const value = event.target.value
        
        newVehicle[name]=value

        setVehicle(vehicle)
    }

    const userOnChangeListener=(event)=>{
        const newUser = user
        let value = event.target.value
        let name = event.target.id
       
        newUser[name]= value
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