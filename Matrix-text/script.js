const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

var iteration = 0;
para.addEventListener("mouseenter", () => {
  // console.log("Entered...")
  setInterval(() => {
    const str = text
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return char;
        }
        return characters.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");

    para.innerText = str;
    iteration += 0.2;
    // console.log(str);
  }, 30);
});
