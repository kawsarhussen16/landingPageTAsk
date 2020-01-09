function myFunction() {
    var x = document.getElementsByClassName("mask");
    x = x[0]
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  