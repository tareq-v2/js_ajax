document.getElementById("add_btn").addEventListener("click", add_func);


// function for insert data in database
function add_func(e){
    e.preventDefault();
    // get input values
    let userName = document.getElementById("user_name").value;
    let Email = document.getElementById("user_mail").value;
    let Password = document.getElementById("user_password").value;
    let Phone = document.getElementById("user_phone").value;

    // create request
    const xhr = new XMLHttpRequest();

    // initalize response
    xhr.open("POST", "insert.php", true);

    xhr.setRequestHeader("Content-type", "application/json");

    // handle response
    xhr.onload = () => {
        if(xhr.status === 200) {
            console.log(xhr.responseText);
        }else{
            console.log('Probelm to connect XML');
        }
    }

    // js object
    const myData = { name: userName, email: Email, password: Password, phone: Phone }

    // convert javascript object to json object
    const data = JSON.stringify(myData);

    xhr.send(data);
}

// function for retrieve data from database
let tbody = document.getElementById("tbody");

function showData(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "showdata.php", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.status === 200) {
            if(xhr.response){
                x = xhr.response;
            }else{
                x= "";
            }
            for(i = 0; i < x.length; i++){
                tbody.innerHTML += 
                "<tr><td>" + x[i].id + "</td><td>"
                 + x[i].user_name + "</td><td>" + x[i].user_email + "</td><td>"
                + x[i].user_password + "</td><td>" + x[i].user_phone + "</td><td>" +
                "<button class='btn btn-sm btn-primary'>Edit</button><button class='btn btn-sm btn-danger' data-sid=" + x.[i].id + ">Edit</button></td><tr>";
            }
        }else{
            console.log("Problem to retrieve data");
        }
    };
    xhr.send();
}
showData();

