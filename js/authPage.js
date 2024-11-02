document.addEventListener("DOMContentLoaded", function () {
    const authTitle = document.getElementById("auth-title");
    const toggleLink = document.getElementById("toggle-link");

    let isLogin = true;

    // Toggle between login and signup
    toggleLink.addEventListener("click", function (event) {
        event.preventDefault();
        isLogin = !isLogin;

        authTitle.textContent = isLogin ? "Login" : "Sign Up";
        toggleLink.innerHTML = isLogin 
            ? "<br>Don't have an account?  Sign up" 
            : "<br>Already have an account?  Login";
    });
});
