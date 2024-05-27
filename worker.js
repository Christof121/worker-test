let timerId;
let interval = 1000; // Default interval in milliseconds

// Function to start the timer
function startTimer() {
    timerId = setInterval(() => {
        postMessage('tick');
    }, interval);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerId);
}

// Function to set the interval
function setIntervalTime(newInterval) {
    interval = newInterval;
    stopTimer();
    startTimer();
}

// Listen for messages from the main script
onmessage = function(e) {
    switch (e.data.command) {
        case 'start':
            startTimer();
            break;
        case 'stop':
            stopTimer();
            break;
        case 'setInterval':
            setIntervalTime(e.data.interval);
            break;
        default:
            console.log('Unknown command');
    }
};
