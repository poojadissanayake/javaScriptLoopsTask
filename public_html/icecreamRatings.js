function submitRating() {

    let name = document.getElementById("nameInput").value;
    let rating = document.getElementById("ratingInput").value;
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    let ratingsList = [];

    if (rating < 0 || rating > 5) {
        window.alert("Rating must be between 0 and 5 !!");
        rating = 5;
    }

    ratingsList.push(name);

    console.log(ratingsList);

    let ul = document.getElementById("ratingsList");
    let star = "";
    let unfilled = "";

    for (let name of ratingsList) {
        let li = document.createElement('li');

        for (let i = 0; i < rating; i++) {
            star += "&#x2605";
        }
        for (let i = 0; i < (5 - rating); i++) {
            unfilled += "&#x2606";
        }

        li.innerHTML = "[" + date + " " + time + "] " + "<strong>" + name + "</strong>" + " gave a rating of rating " + star + unfilled;
        ul.appendChild(li);
    }


    document.getElementById("last-updated-date").innerHTML = date;
    document.getElementById("last-updated-time").innerHTML = time;

}