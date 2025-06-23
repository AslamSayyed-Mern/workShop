function handleSubmit(event){
    event.preventDefault()
    let std_name=document.getElementById("name").value
    let std_email=document.getElementById("email").value
    let std_age=document.getElementById("age").value
    let std_phno=document.getElementById("phoneno").value
    let std_adress=document.getElementById("address").value
    console.log(std_name,std_email,std_age,std_phno,std_adress)


    let std_details={
        name:std_name,
        email:std_email,
        age:std_age,
        phno:std_phno,
        address:std_adress
    }



    let student_details=window.localStorage.getItem("student")
    student_details=JSON.parse(student_details)
    // student_details.forEach((v,i,a)=>{
    //     if(std_name==v.name){

    //         alert("user already exists")
            
    //     }
    // })

    
    let s_name=document.createElement("p")
    let s_email=document.createElement("p")
    let s_age=document.createElement("p")
    let s_phno=document.createElement("p")
    let s_address=document.createElement("p")


    student_details.forEach((v,i,a) => {
        console.log(v)
        s_name.innerText=`name:${v.name}`
        s_email.innerText=`email:${v.email}`
        s_age.innerText=`age:${v.age}`
        s_phno.innerText=`phno:${v.phno}`
        s_address.innerText=`address:${v.address}`
        
        let std_container=document.createElement("div")
        std_container.style.backgroundColor="lightblue"
        std_container.style.textAlign="center"


        std_container.append(s_name,s_email,s_age,s_phno,s_address)
        document.body.append(std_container)
    });
  

   

   


    console.log(student_details,typeof(student_details))
    
    student_details.push(std_details)

    student_details=JSON.stringify(student_details)

    window.localStorage.setItem("student",student_details)
    


}
