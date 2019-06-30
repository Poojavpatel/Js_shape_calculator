const d1 = document.querySelector('.d1');
const d2 = document.querySelector('.d2');
const num2 = document.querySelector('.num2');

function getShape(){
    // if nothing selected alert select one
    const shape = document.getElementById("shapes").elements["shape"].value;
    document.querySelector('.spanshape').innerHTML = shape;
    console.log(shape);
    if(shape=="circle"){
        d1.innerHTML="Radius";
        d2.classList.add("hideme");
        num2.classList.add("hideme");
    }else if(shape=="square"){
        d1.innerHTML="Side";
        d2.classList.add("hideme");
        num2.classList.add("hideme");
    }else if(shape=="rectangle"){
        d1.innerHTML="Height";
        d2.innerHTML="Width";
    }else if(shape=="ellipse"){
        d1.innerHTML="Height";
        d2.innerHTML="Width";
    }
}

function getDimensions(){
    a = document.getElementById("dimensions").elements["w"].value;
    b = document.getElementById("dimensions").elements["h"].value;
    console.log(`a: ${a} b:${b}`)
}

function displayArea(area){

}