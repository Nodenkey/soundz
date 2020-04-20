console.log('here');
const myDiv = document.querySelector("div");
window.onscroll = function () {
    if(myDiv.childElementCount > 0){
        const myNav = myDiv.querySelector("nav")
        if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
        }
        else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
        }
    }
};

