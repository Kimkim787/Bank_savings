function send_message(){
    const text_message = document.getElementById("message_text");
    
    if(text_message.value == ""){
        return
    }
    const message = document.createElement('div');
    message.textContent = text_message.value
    message.className = "user_message"

    const chat_contaienr = document.getElementById('chats_container')

    chat_contaienr.appendChild(message)

    text_message.value = ''

    const bot_reply = document.createElement('div');

    bot_reply.innerHTML = `Dear [Customer/Client],<br>
    Thank you for reaching out to <a href="./index.html">Bank Savings</a>.<br>We appreciate your interest and value your communication.<br>
    Our team is dedicated to providing excellent service, and we aim to respond to your inquiry as soon as possible. In the meantime, please find below the relevant contact information for immediate assistance:
    <br>Email: banksavings@gmail.com
    <br>Phone: 0917-899-4878
    <br>Physical Address
    Planet Earth<br>
    Please note that our office hours are 8am to 5 pm from 7am to 8pm on Monday to Friday.

    If your matter is urgent or requires immediate attention, please do not hesitate to contact us via phone.

    Once again, thank you for considering <a href="./index.html">Bank Savings</a>. We look forward to assisting you.`

    bot_reply.className = "bot_message"

    chat_contaienr.appendChild(bot_reply)
}