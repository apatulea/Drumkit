
window.addEventListener("keydown",function(e)
    {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // selecting the corresponding audio file for each key
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // selecting the actual key
        if (!audio)
        {
            return;
        } // stop the function if there is no audio corresponding hey
        audio.currentTime = 0; // rewind the sound (no brakes)
        audio.play();
        key.classList.add("playing"); //change the key class 
    });

        const keys = Array.from(document.querySelectorAll(".key"));
        console.log(keys);

    function removeTransition()
    {
        this.classList.remove("playing");  // "this" is necessary
    }

    keys.forEach(element => {
        element.addEventListener("transitionend", removeTransition); // no () at the end of removeTransition
    });

