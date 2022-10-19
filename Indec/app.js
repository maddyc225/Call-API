// const apiUrl="https://reqres.in/api/users?page=1";

// async function getUsers(url) {
//     const response=await fetch(url);

//     var data=await response.json();
//     console.log(data);
     
//     show(data.data);
    
// }

// getUsers(apiUrl);

// function show(data){
// let tab=`<tr>
// 					<th>Id</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Photo</th>
// 						</tr>`
//      for(let x of data){
//      		tab +=`<tr>
//         				<td>${x.id}</td>
//                 <td>${x.first_name}
//                 ${x.last_name}</td>
//                 <td>${x.email}</td>
//                 <td><img src=${x.avatar}>
//                 </td>
//                 </tr>`
//      }
//      document.getElementById("employees").innerHTML=tab;
// }


fetch("https://reqres.in/api/users?page=1")
    .then((res)=>res.json())
    .then((data)=>{
        data.map((value)=>{
            const ele = document.createElement("h1");
            ele.innerText = value;
            document.getElementById("employees").appendChild(ele);
        })  
    })
