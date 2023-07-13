

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const enddate = document.querySelector('#endDateInput').value;
    const setDate = document.querySelector('#endDate');
    setDate.innerText = enddate;

    const inputs = document.querySelectorAll("input");

  function clock(){
    // Perform the calculation using the provided enddate
    const end = new Date(enddate);
    console.log(end);
    const now = new Date();
    const diff = (end - now) / 1000;
    if (diff < 0) return;
  
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600) % 24);
    inputs[2].value = Math.floor((diff / 60) % 60);
    inputs[3].value = Math.floor(diff % 60);
    }
  
setInterval(()=>{
    clock();
},1000)

  });

  
 
