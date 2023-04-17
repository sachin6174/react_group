

// class
class User {

    constructor(user_name, password) {
        this.user_name = user_name
        this.password = password
        this.topic = [];
        this.description = [];
    }


};



// login btn
let current_user_name = "";
let login_button = document.getElementById('login_btn');
login_button.addEventListener('click', () => {
    let username = document.getElementById('login_username').value;
    let password = document.getElementById('login_password').value;
    if (JSON.parse(localStorage.getItem(`${username}`))) {
        current_user_name = username
        let current_user = JSON.parse(localStorage.getItem(`${username}`))
        if (current_user.user_name === username && current_user.password === password) {
            // console.log(current_user)
            document.getElementById("to_show").style.visibility = "visible"

            // setup username dispaly
            
            document.getElementById("user-display").innerHTML = `Hello ${current_user_name}`

            // populating older
            if (localStorage.getItem(`${current_user_name}`)) {

                let current_user = JSON.parse(localStorage.getItem(`${current_user_name}`))
                console.log(current_user)
                let cnt = current_user.topic.length;
                console.log(cnt)
                for (let i = 0; i < cnt; i++) {
                    let topic = current_user.topic[i];
                    let description = current_user.description[i]
                    let para = document.getElementById("main");
                    para.innerHTML += `<div id="${i}_${current_user_name}_div" >topic is :  ${topic} <br/> description is :  ${description} <br/> <button class="del" id="${i}">Delete</button><div><hr/>`;
                }
            }

            // alert("signed in sucessfully");
            // current_user_name = username
            document.getElementById("to_hide").remove();


            

        } else {
            alert("password wrong")
        }
    } else {
        alert("not a user signup");
    }
})

//signup btn
let signup_btn = document.getElementById('signup_btn')
signup_btn.addEventListener('click', () => {
    let username = document.getElementById('sign-up_username').value;
    let password = document.getElementById('sign-up_password').value;

    if (username && password) {
        if (localStorage.getItem(username) === null) {
            let user1 = new User(username, password);
            localStorage.setItem(`${username}`, JSON.stringify(user1))
            alert('signed-up successfuly');

        } else if (localStorage.getItem(username) !== null) {
            alert('this username already exits')
        }
    }
    document.getElementById('sign-up_username').value = "";
    document.getElementById('sign-up_password').value = "";

})


// add new 

let btn = document.getElementById("add");
btn.addEventListener("click", () => {
    // console.log(current_user_name)
    let current_user = JSON.parse(localStorage.getItem(`${current_user_name}`))
    let para = document.getElementById("main");
    let topic = document.getElementById("topic-value").value;
    let description = document.getElementById("description-value").value;
    
    let i= current_user.topic.length;
    para.innerHTML += `<div id="${i}_${current_user_name}_div" >topic is :  ${topic} <br/> description is :  ${description} <br/> <button class="del" id="${i}">Delete</button><div><hr/>`;
    current_user.topic.push(topic)
    current_user.description.push(description)
    
    localStorage.setItem(`${current_user.user_name}`, JSON.stringify(current_user))
    
    document.getElementById("topic-value").value = "";
    document.getElementById("description-value").value = "";
});


//clear btn
// dont clear the object just clear their notes
let delete_btn = document.getElementById("dele");
delete_btn.addEventListener("click", () => {
    
});



// delete
// delete click
setInterval(()=>{
    const deletenote = document.querySelectorAll('.del');// 
    // console.log(deletenote, "collected btns");
    deletenote.forEach((button) => {
        button.addEventListener("click", (e) => {
            console.log()
            current_user = JSON.parse(localStorage.getItem(`${current_user_name}`))
            current_user.topic.splice(e.target.id,1);
            current_user.description.splice(e.target.id,1);
            if(document.getElementById(`${e.target.id}_${current_user_name}_div`)){
                document.getElementById(`${e.target.id}_${current_user_name}_div`).remove()
            }
            
            localStorage.setItem(`${current_user.user_name}`, JSON.stringify(current_user))
        })
    });
},500)

//    const deletenote = document.getElementsByClassName("del");
//    console.log(deletenote);
//     Array(deletenote).forEach((button) => {
//         console.log(button);
//         button.addEventListener('click', (e) => {
//             console.log(`Button ${e.id} was clicked.`);
//         });
//     });

//logout btn
let logoutbtn = document.getElementById("logout");
logoutbtn.addEventListener("click",()=>{
    location.reload()
})
