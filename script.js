const checkCre = () => {

const username = document.querySelector('#username').value.trim();
const password = document.querySelector("#password").value.trim();
const mssg = document.querySelector('#mssg');

if (username.toLowerCase() === 'pearson karen' && password.toLowerCase() === 'pearson333') {
    window.location.href= 'third.html';
    mssg.style.display = 'none';
}
else if (username.toLowerCase() === 'laishram debeswar' && password.toLowerCase() === 'singh222') {
    window.location.href= 'fouth.html';
    mssg.style.display = 'none';
}
// else if (username.toLowerCase() === 'isaac' && password.toLowerCase() === 'isaacwinner222') {
//     window.location.href= 'third.html';
//     mssg.style.display = 'none';
// }
else {
    mssg.style.display = 'block';
    
}


}

const withBtn = document.querySelector('#btn');
const notify = document.querySelector('.notify');
const showNoti = () => {
notify.style.display = "block";
withBtn.style.display = "none";
}