$(".info-item .btn").click(function(){
    $(".container").toggleClass("log-in");
  });
  $(".container-form .btn").click(function(){
    $(".container").addClass("active");
  })

  function login(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let secret = document.getElementById("Secret").value


    let username_u = "zara"
    let password_p = "2005"
    let secret_code = "batman"

    if (username_u == username && password_p == password || secret_code == secret){
        alert("welcome")
    }else{
        alert('username or password is wrong')
    }
  }

