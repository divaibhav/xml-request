function fetchUsers(){
    // create xml request
    const xmlRequest = new XMLHttpRequest();

    // call open on xml request
    xmlRequest.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    // add event handler
    xmlRequest.onload = function (){
            
            
        // when the response is ready, we will process it
        if( xmlRequest.readyState == 4 && xmlRequest.status === 200){
            const users = JSON.parse(xmlRequest.responseText);
            
            
            //console.log(users);
            console.log("testing");
            displayUsers(users);
        } else{
            showError('Cannot process request, Status:' + xmlRequest.status);
            console.log("Error status:", xmlRequest.status);
            
        }
    }

    //send the request to the server
    xmlRequest.send();

   
}
 // process the response
 function displayUsers(users){
    const userList = document.getElementById("userList");
    userList.innerHTML = '';
    console.log(typeof(users));
    //convert users from string to JSON

    users.forEach(element => {
        console.log(element.name);

        //dynamically generate content html
        

        // create a new div element
        const userCard = document.createElement('div');

        const userName = document.createElement('div');
        userName.textContent = element.name;

        const userEmail = document.createElement('div');
        userEmail.textContent = element.email;

        userCard.appendChild(userName);
        userCard.appendChild(userEmail);

        userList.appendChild(userCard);

       


        
    });

 }

 function showError(message){
    const errorDiv = document.getElementById("error");

    const errorMessage = document.createElement('div');

    errorMessage.style.color = "red";

    errorMessage.textContent = message;

    errorDiv.appendChild(errorMessage);
 }

    // process the error