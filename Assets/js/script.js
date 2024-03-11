let hide_div = document.querySelector('.hide');
let show_div = document.querySelector('.no_show');
// console.log(hide);
function no(){
    hide_div.style.display = "none"
    show_div.style.display = "flex"
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
    hide_div.style.display = "none";
    run_confetti();
}
