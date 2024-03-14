let hide_div = document.querySelector('.hide');
let no_div = document.querySelector('.no_show');
let wrapper = document.querySelector('.wrapper');
let yes_div = document.querySelector('.yes_show');
// console.log(hide);
function no(){
    hide_div.style.display = "none"
    no_div.style.display = "flex"
    confetti();
    run_confetti();
}

function run_confetti(){
    let canvas = document.createElement("canvas");
        let container = document.getElementsByClassName("btn-group")[0];
        canvas.width = 600;
        canvas.height = 600;

        container.appendChild(canvas);

        let confetti_button = confetti.create(canvas);
        confetti_button({
            particleCount: 1000,
          spread: 200,
          startVelocity: 15,
          scalar: 0.9,
          ticks: 90
        }).then(() => container.removeChild(canvas));
}

function yes(){
    wrapper.style.display = "none";
    yes_div.style.display = "flex";
    run_confetti();
}
