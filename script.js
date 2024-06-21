document.addEventListener('DOMContentLoaded', function() {
    const callScreen = document.getElementById('call-screen');
    const inCallScreen = document.getElementById('in-call-screen');
    const answerButton = document.getElementById('answer-button');
    const encryptButton = document.getElementById('encrypt-button');
    const status = document.getElementById('status');

    answerButton.addEventListener('click', function() {
        callScreen.classList.add('hidden');
        inCallScreen.classList.remove('hidden');
    });

    encryptButton.addEventListener('click', function() {
        status.textContent = 'Encrypted';
        status.style.color = 'green';
    });
});
