const googlelang = document.getElementsByClassName("z4hgWe")[0];

function check() {
  let index = 0;
  for (let i = 0; i < googlelang.children.length; i++) {
    // console.log(googlelang.childNodes[i]);
    if (googlelang.children[i].tagName === "A") {
      if (index % 2 === 0) {
        googlelang.removeChild(googlelang.children[i]);
      }

      //   console.log(googlelang.childNodes[i]);
    }
    index++;
  }
}
