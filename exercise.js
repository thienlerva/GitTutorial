$('#fiboSubmit').on('click', runFib);

function runFib() {
    var n = $('#fiboInput').val();
    $('#fiboOutput').html(fibonacci(n));
    
    var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
}

function fibonacci(n) {
    if (n==0 || n==1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}