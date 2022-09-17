const children = document.getElementsByClassName("children")[0];

const newelement = document.createElement("div");
newelement.className = "child";

const linkelment = document.createElement("a");
linkelment.className = "topic-link";
linkelment.innerText = "My New FAQ";

newelement.appendChild(linkelment);

children.appendChild(newelement);
