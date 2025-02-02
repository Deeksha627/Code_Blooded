function showDetails(board) {
  switch (board) {
    case "cbse":
      alert(
        "CBSE is a national-level education board in India, known for its comprehensive curriculum and standardized exams."
      );
      break;
    case "gseb":
      alert(
        "GSEB is the Gujarat state education board, responsible for conducting secondary and higher secondary exams in Gujarat."
      );
      break;
    default:
      alert("Invalid board selected.");
  }
}

function downloadResources(board) {
  let url;
  switch (board) {
    case "cbse":
      url = "http://127.0.0.1:3000/cbse.html"; // Replace with actual URL
      break;
    case "gseb":
      url = "http://127.0.0.1:3000/gseb.html"; // Replace with actual URL
      break;
    default:
      alert("Invalid board selected.");
      return;
  }
  window.open(url, "_blank"); // Open the download link in a new tab
}
