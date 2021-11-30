import helpers from './helpers.js';
// import rtc from './rtc';


window.addEventListener('load', () => {

    let chatElem = document.querySelector('#chat-pane');
    let mainSecElem = document.querySelector('#main-section');
  
    //remove the 'New' badge on chat icon (if any) once chat is opened.
    

    let roomName = "chat";
    let yourName = "ibrahim" ;
    // console.log("responseUserData",responseUserData);
    // socket.on("connect" , ()=>{
    //     socket.on("username", (user) => {
    //         console.log("From DataBase" , user);
    //     })
    // })



    if (roomName && yourName) {


        //save the user's name in sessionStorage
        sessionStorage.setItem('username', yourName);

        //create room link
        let roomLink = `${location.origin}?room=${roomName}_1`;

        document.getElementById("create-room").innerHTML = `<a href='${roomLink}'>start chat</a>`

    }


    //When the 'Enter room' button is clicked.
    document.getElementById('enter-room').addEventListener('click', (e) => {
        e.preventDefault();

        let name = "mariam";

        if (name) {

            //save the user's name in sessionStorage
            sessionStorage.setItem('username', name);

            //reload room
            location.reload();
        }


    });



});
