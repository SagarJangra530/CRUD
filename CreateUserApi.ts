export class CreateUserApi{
      Create_data(data)
      {
        console.log(data);
     fetch("https://localhost:5001/api/assignment/"+(document.getElementById("uname")as HTMLInputElement).value, {
         method: "POST",
         headers: new Headers({'content-type': 'application/json'}),
         body: data,
     })
     } 
    }