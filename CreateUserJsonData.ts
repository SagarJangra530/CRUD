import * as abc from "./CreateUserModel";
import { CreateUserApi } from "./CreateUserApi";

  const form = document.querySelector('.contact-form');
 
   form.addEventListener('submit', function(e){
       e.preventDefault();
       console.log(toJSONString(  ));
       new CreateUserApi().Create_data(toJSONString(  ));
   });


function toJSONString(  ) {

    var obj = new abc.CreateUserModel();
    obj.Salutation= (document.getElementById('sal')as HTMLInputElement).value;
    obj.FirstName = (document.getElementById('fname')as HTMLInputElement).value ;
    obj.MiddleName= (document.getElementById('mname')as HTMLInputElement).value;
    obj.LastName =(document.getElementById('lname')as HTMLInputElement).value;
    obj.DepartmentName =(document.getElementById('dname')as HTMLInputElement).value;
    obj.DesignationName =(document.getElementById('desname')as HTMLInputElement).value;
    obj.Email =(document.getElementById('email')as HTMLInputElement).value;
    obj.AltEmail =(document.getElementById('altemail')as HTMLInputElement).value;
    obj.UserName =(document.getElementById('uname')as HTMLInputElement).value;
    obj.Password =(document.getElementById('pass')as HTMLInputElement).value;
    obj.DOB =(document.getElementById('dob')as HTMLInputElement).value;
    obj.Gender =(document.getElementById('gender')as HTMLInputElement).value;
    obj.DOJ =(document.getElementById('doj')as HTMLInputElement).value;
    obj.Phones.push(new abc.phones(ContactNumberType,Number,CountryCode,AreaCode));
    obj.Phones.push(new abc.phones(ContactNumberType1,Number1,CountryCode1,AreaCode1));
    obj.Phones.push(new abc.phones(ContactNumberType2,Number2,CountryCode2,AreaCode2));
   
    var ContactNumberType = (document.getElementById('contacttype')as HTMLInputElement).value;
    var Number = (document.getElementById('contactnumber')as HTMLInputElement).value;
    var CountryCode = (document.getElementById('contactnumber')as HTMLInputElement).value;
    var AreaCode = (document.getElementById('areacode')as HTMLInputElement).value;
  
    var ContactNumberType1 = (document.getElementById('contacttype')as HTMLInputElement).value;
    var Number1 = (document.getElementById('contactnumber')as HTMLInputElement).value;
    var CountryCode1 = (document.getElementById('contactnumber')as HTMLInputElement).value;
    var AreaCode1 = (document.getElementById('areacode')as HTMLInputElement).value;
 
    var ContactNumberType2 = (document.getElementById('contacttype')as HTMLInputElement).value;
    var Number2 = (document.getElementById('contactnumber')as HTMLInputElement).value;
    var CountryCode2 = (document.getElementById('contactnumber')as HTMLInputElement).value;
    var AreaCode2 = (document.getElementById('areacode')as HTMLInputElement).value;
   
    obj.Addresses.push(new abc.addresses(AddressType,AddressLine,city,state,country,pin));
    obj.Addresses.push(new abc.addresses(AddressType1,AddressLine1,city1,state1,country1,pin1));
   
    var AddressType =(document.getElementById('addresstype')as HTMLInputElement).value;
    var AddressLine=(document.getElementById('address')as HTMLInputElement).value;
    var city=(document.getElementById('city')as HTMLInputElement).value;
    var state=(document.getElementById('state')as HTMLInputElement).value;
    var country=(document.getElementById('country')as HTMLInputElement).value;
    var pin=(document.getElementById('pincode')as HTMLInputElement).value;
   
    var AddressType1 =(document.getElementById('addresstype1')as HTMLInputElement).value;
    var AddressLine1=(document.getElementById('address1')as HTMLInputElement).value;
    var city1=(document.getElementById('city1')as HTMLInputElement).value;
    var state1=(document.getElementById('state1')as HTMLInputElement).value;
    var country1=(document.getElementById('country1')as HTMLInputElement).value;
    var pin1=(document.getElementById('pincode1')as HTMLInputElement).value;

    return JSON.stringify( obj );
}