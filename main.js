const clock = document.querySelector('.clock');

const tick = () => {
    const the_time = new Date();
    const h = the_time.getHours();
    const m = the_time.getMinutes();
    const s = the_time.getSeconds();

    const html = `<span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span> `;

    clock.innerHTML = html;
}

setInterval(tick, 1000);