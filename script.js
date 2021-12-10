// Function to get current time and start the clock
const startTime = () =>
{
    const secondsStick = document.getElementById('seconds-stick'),
          minutesStick = document.getElementById('minutes-stick'),
          hoursStick = document.getElementById('hours-stick')

    const today = new Date(),
          hours = today.getHours(),
          minutes = today.getMinutes(),
          seconds = today.getSeconds()
          console.log(hours, minutes, seconds)

    // Add class transform on all grabbed divs
    // Find and rotate seconds stick to degree for current seconds
    secondsStick.style.transform = `rotate(${ seconds * 6 }deg)`
    // Find and rotate minutes stick to degree for current minutes
    minutesStick.style.transform = `rotate(${ minutes * 6 + seconds / 10 }deg)`
    // Find and rotate hours stick to degree for current hours
    hoursStick.style.transform = `rotate(${ hours * 30 + minutes / 2 }deg)`
}

// Function to create clock border sticks
const rotateString = () =>
{
    const secondString = document.querySelectorAll('span')

    // Clock border sticks for minutes
    for (let i = 0; i < secondString.length; i++)
    {
        secondString[i].style.transform = `rotate(${ i * 6 }deg)`
        secondString[i].style.height = '2px'
    }

    // Clock border sticks for hours
    for (let i = 0; i < secondString.length; i = i + 5)
    {
        secondString[i].style.height = '10px'
    }
}

// Start function every 1000 milliseconds
setInterval(startTime, 1000)
startTime()
rotateString()