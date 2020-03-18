export class CreateUserApi{
      Create_data(data)
      {
        console.log(data);
     fetch("http://localhost:5000/api/user/add", {
         method: "POST",
         headers: {'Content-Type': 'application/json'},
         mode : "no-cors",
         body: data,
     }).catch(Error=>console.log(Error));
     } 
    }






