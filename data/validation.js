//Validations   
async function validString(str) {
    if (!str || typeof str !== 'string' || !str.trim()) return false;
    return true;
}

// Takes in a single argument.
// Return true if the argument is a boolean; otherwise return false.
async  function validBoolean(bool) {
    if (typeof bool !== 'boolean') return false;
    return true;
}



async function checkUserName(username) {
    let usernameregex=/^[a-z0-9_]+$/i;
    if (username===undefined ||  username === "") {
        throw "username required!";
    }
    if (!usernameregex.test(username)) {
        throw "username not valid!";
    }
    if (username.length < 4) {
        throw "username must be 4 characters!";
    }
   
}
async function checkPassword(password) {
   var checkspecialChar=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password===undefined || password=="") {
        throw "password required!";
    }
    if(!checkspecialChar.test(password)|| password.length<6)
    {
        throw "password must have special character and 6 character long!"
    }
}
async function checkzipcode(zipCode){
    var checkziplength= /^\d{5}$/;
    if (zipCode===undefined || zipCode=="") {
        throw "zipCode required!";
    }
    if(!checkziplength.test(zipCode)|| typeof zipCode !=='string')
    {
        throw "zipCode is not valid";
    }
}
async function checkhotelname(name){
    if (name===undefined || name=="") {
        throw "name required!";
    }
    if (typeof name !=='string') {
        throw "name must be a string";
    }
}
async function checkhoteladdress(address){
    if (address===undefined || address=="") {
        throw "address required!";
    }
    if (typeof address !=='string') {
        throw "address must be a string";
    }
}
async function checkcityname(city){
    if (city===undefined || city=="") {
        throw "city required!";
    }
    if(typeof city !=='string')
    {
        throw "city is not valid";
    }
}
async function checkstatename(state){
    if (state===undefined || state=="") {
        throw "state required!";
    }
    if(typeof state !=='string')
    {
        throw "state is not valid";
    }
}
async function checkcategory(category){
    
    if (category===undefined || category=="") {
        throw "city required!";
    }
}
async function checkpriceRange(priceRange){
    var priceRangeregex=/^[$]{1,5}$/;
    if (priceRange===undefined || priceRange=="") {
        throw "priceRange required!";
    }
    if(!priceRangeregex.test(priceRange)|| typeof priceRange !=='string')
    {
        throw "priceRange is not valid";
    }
}
async function checkonSiteServices(onSiteServices){
    if (onSiteServices===undefined) {
        throw "onSiteServices required!";
    }
    if(!Array.isArray(onSiteServices))
    {
        throw "onSiteServices is not valid";
    }
    if(onSiteServices.length<1)
    {
        throw "onSiteServices should not be less than one";
    }
}
async function checklatitude(latitude){
    var latituderegex=/^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/;
    if (latitude===undefined || latitude=="") {
        throw "latitude required!";
    }
    // if(!latituderegex.test(latitude)|| typeof latitude !=='string')
    // {
    //     throw "latitude is not valid";
    // }
}
async function checklongtitude(longtitude){
    var longtituderegex=/^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/;
    if (longtitude===undefined || longtitude=="") {
        throw "longtitude required!";
    }
    // if(!longtituderegex.test(longtitude)|| typeof longtitude !=='string')
    // {
    //     throw "longtitude is not valid";
    // }
}
async function checkimage(images){
    if (images.length>5) {
            throw "Max 5 images are allowed to be uplaoded";
      }
}
async function checkrating(rating){
    var ratingregx=/^([1-5])$/
    if(!ratingregx.test(rating)|| typeof rating !=='string')
    {
        throw "rating is not valid";
    }
}
async function checkphoneNumber(phoneNumber){
    var phonenumberregx= /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    if(!phonenumberregx.test(phoneNumber)|| typeof phoneNumber !=='string')
    {
        throw "Please enter the phone number in the format XXX-XXX-XXXX";
    }
}
async function checkemail(email){
    var emailregx= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    if(!emailregx.test(email)|| typeof email !=='string')
    {
        throw "email is not valid";
    }
}
async function checkage(age){
    var checkageregx= /^([0-9]{2})$/
    if(!checkageregx.test(age)|| typeof age !=='string')
    {
        throw "age is not valid";
    }
}


module.exports = {
    validString,
    checkUserName,
    checkPassword,
    checkzipcode,
    checkhotelname,
    checkhoteladdress,
    checkcityname,
    checkcategory,
    checkstatename,
    checkpriceRange,
    checkonSiteServices,
    checklatitude,
    checklongtitude,
    checkimage,
    checkrating,
    checkphoneNumber,
    checkemail,
    checkage
    
};