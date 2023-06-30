export const validate=(value)=>{
    const error={};
 
    if(!value.email){
        error.email="پست الکترونیکی نباید خالی باشد"
     }
     else if(!/\S+@\S+\.\S+/.test(value.email)){
       error.email="پست الکترونیکی نامعتبر است"
     }
     else{
         delete error.email
     }
 
     if(!value.password){
        error.password="گذرواژه نباید خالی باشد"
     }
     else if(value.password.length<8){
          error.password="گذرواژه نباید کمتر از 8 رقم باشد"
     }
     else{
        delete error.password
    }
 
    return error;
 }