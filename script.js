function calculate(){
    //Need to determine the constant of some id functions.
      var bmi;
      var result = document.getElementById("result");
    //The value of the height slider
      var height = parseInt(document.getElementById("height-val").value);
    //The value of the weight slider
      var weight = parseInt(document.getElementById("weight-val").value);
    
    // Onclick button
      document.getElementById("finalRes").onclick = function (){
            bmi = weight / (height * height) * 10000; //Now I have added the formula for calculating BMI in "bmi"
            result.textContent = bmi.toFixed(1);   //With the help of "textContent" we have arranged to display in the result page of BMI

            if(bmi < 18.5){
              category = "Underweight 😒";
              result.style.color = "#ffc44d";
          }

          else if( bmi >= 18.5 && bmi <= 24.9 ){
              category = "Normal Weight 😍";
              result.style.color = "#0be881";
          }
        
          else if( bmi >= 25 && bmi <= 29.9 ){
              category = "Overweight 😮";
              result.style.color = "#ff884d";
          }
        
          else{
              category = "Obese 😱";
              result.style.color = "#ff5e57";
          }

          document.getElementById("category").textContent = category;
          };

      
  }