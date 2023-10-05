const insertCharacterAtIndex = (originalString, index, character) => {
    return originalString.substring(0, index) + character + originalString.substring(index);
}

const showTime = () => {
    let now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    let timeString = hours + " : " + minutes + " : " + seconds;

    document.getElementById("myClock").innerHTML = timeString;
}

const showDate = () => {
    let nowDate = new Date();
    var day = nowDate.getDate();
    var month = nowDate.getMonth() + 1; // Adjust month to start from 1 (January is 0)
    var year = nowDate.getFullYear();
    
    let dayString = day + "." + month + "." + year;

    if (dayString[0] !== "0") {
        var modifiedDayString = insertCharacterAtIndex(dayString, 0, "0");
        document.getElementById("myClock").innerHTML = modifiedDayString;
    } else {
        document.getElementById("myClock").innerHTML = dayString;
    }
}

window.onload = function () {
    showDate();
};
