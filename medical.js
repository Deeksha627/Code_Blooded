function showDetails(exam) {
  switch (exam) {
    case "neet":
      alert(
        "NEET is a national-level medical entrance exam for admission to MBBS, BDS, and other medical courses."
      );
      break;
    case "aiims":
      alert(
        "AIIMS is a prestigious medical entrance exam for admission to AIIMS institutions."
      );
      break;
    default:
      alert("Invalid exam selected.");
  }
}

function downloadPYQs(exam) {
  let url;
  switch (exam) {
    case "neet":
      url = "http://127.0.0.1:3000/gate.html"; // Replace with actual URL
      break;
    case "iit-jee":
      url = "http://127.0.0.1:3000/iitjee.html"; // Replace with actual URL
      break;
    case "neet":
      url = "http://127.0.0.1:3000/medical.html"; // Replace with actual URL
      break;
    case "boards":
      url = "https://example.com/pyqs/boards.pdf"; // Replace with actual URL
      break;
    default:
      alert("Invalid exam selected.");
      return;
  }
  window.open(url, "_blank"); // Open the download link in a new tab
}
