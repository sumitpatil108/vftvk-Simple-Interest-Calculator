function calculate() {
  p = document.getElementById("p").value;
  if (p<=0){
  alert("Amount shoud be positive")
  }
  
  n = document.getElementById("n").value;
  r = document.getElementById("years").value;
  console.log(r);
  result = document.getElementById("result-12");

  result.innerHTML = "The interest is " + (p * n * r / 100); 
}
