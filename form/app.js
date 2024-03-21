const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const phonenumber= document.querySelector('#phonenumber')
const dateofbirth= document.querySelector('#dateofbirth')
const password = document.querySelector('#password')
const confirmpassword = document.querySelector('#confirmpassword')
const btn = document.getElementById('btn')

btn.disabled = true;

form.addEventListener('input',(e)=>{
    e.preventDefault();
    vaildateInputs();
});



form.addEventListener(`input`,isValid);

     

function vaildateInputs(){
    const usernameVal = username.value.trim();
    const nameRegex = /^[a-zA-Z]+$/ ;
    if(usernameVal ===''){
        setError(username,'username is required')
    }else if(!nameRegex.test(usernameVal)){
        setError(username,'Name Contain only alphabetic characters');
    }else if(usernameVal.length<3){
        setError(username,'name must contain atleast 3 characters');
    }else{
        setSuccess(username);
    }
}

form.addEventListener('input',(e)=>{
    e.preventDefault();
    vaildateemail();
});

function vaildateemail(){
    const emailVal = email.value.trim();
    const emailRegex= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if(emailVal ===''){
        setError(email,'email is required')
    }else if(!emailRegex.test(emailVal)){
        setError(email,'invaild email');
    }else{
        setSuccess(email);
    }
}

form.addEventListener('input',(e)=>{
    e.preventDefault();
    validatenumber();
});

function validatenumber(){
    const phonenumberVal= phonenumber.value.trim();
    const phonenumberRegex=/^(?=[6-9])[0-9]{10}$/;
    if(phonenumberVal ===''){
        setError(phonenumber,'phone number is required')
    }else if(!phonenumberRegex.test(phonenumberVal)){
        setError(phonenumber,'invaild phonenumber');
    }else{
        setSuccess(phonenumber);
    }
}

form.addEventListener('input',(e)=>{
    e.preventDefault();
    validatedate();
});

function validatedate(){
    const dateofbirthVal= dateofbirth.value.trim();
    const currentDate = new Date();
    const selectedDate = new Date(dateofbirthVal)
    const dateofbirthRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if(dateofbirthVal ===''){
        setError(dateofbirth,'date of birth is required')
    }else if(selectedDate > currentDate){
        setError(dateofbirth,'date of birth must not be in future');
    }else{
        setSuccess(dateofbirth);
    }
}

form.addEventListener('input',(e)=>{
    e.preventDefault();
    vaildatepas();
});

function vaildatepas(){
    const passwordVal = password.value.trim();
    let uppercaseRegex =/[A-Z]/g; 
    let lowercaseRegex = /[a-z]/g; 
    let numbericRegex  = /[0-9]/g; 
    var specialCharacterRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;


    if(passwordVal===''){
        setError(password,'Password must required');

      }else if(!uppercaseRegex.test(passwordVal)){
        setError(password,'password must have atleast one uppercase letter');

      }else if(!lowercaseRegex.test(passwordVal)){
        setError(password,'Password must have one lowercase letter');

      }else if(!numbericRegex.test(passwordVal)){
        setError(password,'Password must have atleast one number');

      }else if (!specialCharacterRegex.test(passwordVal)){
        setError (password,'Password must have atleast one special character');

      }else if(passwordVal.length<8){
        setError(password,'Password must be atleast 8 characters');

    }
    else{
        setSuccess(password);
        return true;
    }
}

form.addEventListener('input', (e) => {
    e.preventDefault();
    validateConfirmPassword();
});

function validateConfirmPassword() {
    const passwordVal = password.value.trim();
    const confirm = confirmpassword.value.trim();

    if(passwordVal != confirm){
        setError(confirmpassword,'password do not match');
    }
    else{
        setSuccess(confirmpassword);
        return true;
    }
    
   
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isValid()) {
        // Proceed with form submission
        console.log("Form submitted successfully!");
        // Add any other actions you want to perform after successful submission
    } else {
        // Prevent form submission if it's not valid
        console.log("Form validation failed. Please check the errors.");
    }
});

function isValid() {
    return (
        vaildateInputs() &&
        vaildateemail() &&
        validatedate() &&
        validatenumber() &&
        vaildatepas() &&
        validateConfirmPassword()
    )

}




const setError=(element,message)=>{
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
    
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

const setSuccess=(element,message)=>{
  
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = " ";
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');


}

 