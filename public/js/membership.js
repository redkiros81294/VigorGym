function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
    function personalPage() {
        window.location.href = 'personal.html';
    }
    const stars = document.getElementsByClassName("star");
    const output = document.getElementById("output");

    function gfg(n) {

        remove();

        for (let i = 0; i < n; i++) {
            let cls = ["one", "two", "three", "four", "five"][n - 1];
            stars[i].className = "star " + cls;
        }

        output.innerText = "Rating is: " + n + "/5";
    }

    function remove() {
        for (let i = 0; i < 5; i++) {
            stars[i].className = "star";
        }
    }
function businessForm() {
        window.location.href = 'bm-form.html';
    }