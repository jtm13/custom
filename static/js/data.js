fetch("https://randomuser.me/api?results=10").then((data) => {
    let mainSection = document.body.getElementsByTagName("main")[0];

    if (data.ok) {
        data.json().then( (results) => {
            results.results.forEach(user => {
                let divNode = document.createElement("div");
                divNode.className = "card"
                let name = document.createElement("h4");
                name.innerText = `${user.name.title}. ${user.name.first} ${user.name.last}`;
                let genderAndCell = document.createElement("span");
                genderAndCell.innerHTML = `${user.gender} | <b>Cell:</b> ${user.cell}`;
                let image = document.createElement("img");
                image.setAttribute("src", user.picture.large);
                image.setAttribute("alt", `Picture of ${user.name.first}`);
                divNode.appendChild(image);
                divNode.appendChild(name);
                divNode.appendChild(genderAndCell);
                mainSection.appendChild(divNode);
            });
        }, () => {});
    }
    
    console.log(data);
});