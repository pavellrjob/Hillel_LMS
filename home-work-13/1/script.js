
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    const text = document.querySelector('.text').value;
    const Phone = document.querySelector('.Phone').value;
    const mail = document.querySelector('.mail').value;
    let newText = text.match(/[a-zA-Z]+/gi);
    let newPhone = Phone.match(/^\+380[0-9{9}]+/);
    let newmail = mail.match(/([a-zA-Z]+@[a-zA-Z0-9_.!]+)/gi);

    if (text == newText && Phone == newPhone && mail == newmail) {
        console.log('true');
    }
})


//=====================================================================

