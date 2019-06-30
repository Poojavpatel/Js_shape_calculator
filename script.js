const d1 = document.querySelector('.d1');
const d2 = document.querySelector('.d2');
const num2 = document.querySelector('.num2');

function getShape(){
    // if nothing selected alert select one
    const shape = document.getElementById("shapes").elements["shape"].value;
    document.querySelector('.spanshape').innerHTML = shape;
    document.querySelector('.resultshape').innerHTML = shape;
    document.querySelector('.movescreen').style.bottom = "100%";
    console.log(shape);
    switch (shape) {
        case "circle":
            d1.innerHTML="Radius";
            d2.classList.add("hideme");
            num2.classList.add("hideme");
            break;
        case "square":
            d1.innerHTML="Side";
            d2.classList.add("hideme");
            num2.classList.add("hideme");
            break;
        case "rectangle":
            d1.innerHTML="Height";
            d2.innerHTML="Width";
            break;
        case "ellipse":
            d1.innerHTML="Height";
            d2.innerHTML="Width";
            break;
        default:
            break;
    }
}

function getDimensions(){
    const shape = document.getElementById("shapes").elements["shape"].value;
    document.querySelector('.movescreen').style.bottom = "200%";
    a = document.getElementById("dimensions").elements["w"].value;
    b = document.getElementById("dimensions").elements["h"].value;
    console.log(`a: ${a} b:${b}`)
    let area=0;
    switch (shape) {
        case "circle":
            area=Math.PI*a*a;
            break;
        case "square":
            area=a*a;
            break;
        case "rectangle":
            area=a*b;
            break;
        case "ellipse":
            area=Math.PI*a*b;
            break;
        default:
            break;
    }
    displayArea(area);
}

function displayArea(area){
    area = area.toFixed(2);
    console.log(area);
    document.querySelector('.areaspan').innerHTML = area;
}

// on pressing cancel, go to homepage
function goHome(){
    document.querySelector('.movescreen').style.bottom = "0%";
}