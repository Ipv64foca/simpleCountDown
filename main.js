window.onload = countDown();

function countDown(){
    let today = new Date().toDateString();
    let current = new Date().getTime();
    let dateEnd = new Date("Jul 29, 2023 04:37:52").getTime();
    let timeleft = dateEnd - current;

    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
     //days+" "+hours+" "+minutes+" "+seconds;
    let parrf = document.getElementById('timestamps');
    parrf.innerHTML = `<strong>${days}d ${hours}h ${minutes}m ${seconds}</strong>`
}
setInterval(countDown,1000);