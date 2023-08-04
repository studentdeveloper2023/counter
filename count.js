let count = 0;

function updateCount(){
    const countElement = document.getElementById('num');
    countElement.textContent = count;
}

document.getElementById('but1').addEventListener('click', function(){
    count--;
    updateCount();
}) 
document.getElementById('but2').addEventListener('click', function(){
    count++;
    updateCount();
}) 