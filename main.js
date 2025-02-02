<<<<<<< HEAD
function showDetails(exam) {
  switch (exam) {
    case "gate":
      alert(
        "GATE is a national-level exam conducted for admission to postgraduate programs in engineering and science."
      );
      break;
    case "iit-jee":
      alert(
        "IIT-JEE is an engineering entrance exam for admission to various engineering colleges in India, including the IITs."
      );
      break;
    case "neet":
      alert(
        "NEET is a national-level medical entrance exam for admission to MBBS, BDS, and other medical courses."
      );
      break;
    case "boards":
      alert(
        "Board exams are conducted at the end of class 10th and 12th by various educational boards in India."
      );
      break;
    default:
      alert("Invalid exam selected.");
  }
}

function downloadPYQs(exam) {
  let url;
  switch (exam) {
    case "gate":
      url = "https://example.com/pyqs/gate.pdf"; // Replace with actual URL
      break;
    case "iit-jee":
      url = "https://example.com/pyqs/iit-jee.pdf"; // Replace with actual URL
      break;
    case "neet":
      url = "https://example.com/pyqs/neet.pdf"; // Replace with actual URL
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
=======
function showDetails(exam) {
  switch (exam) {
    case "gate":
      alert(
        "GATE is a national-level exam conducted for admission to postgraduate programs in engineering and science."
      );
      break;
    case "iit-jee":
      alert(
        "IIT-JEE is an engineering entrance exam for admission to various engineering colleges in India, including the IITs."
      );
      break;
    case "neet":
      alert(
        "NEET is a national-level medical entrance exam for admission to MBBS, BDS, and other medical courses."
      );
      break;
    case "boards":
      alert(
        "Board exams are conducted at the end of class 10th and 12th by various educational boards in India."
      );
      break;
    default:
      alert("Invalid exam selected.");
  }
}

function downloadPYQs(exam) {
  let url;
  switch (exam) {
    case "gate":
      url = "http://127.0.0.1:3000/gate.html"; // Replace with actual URL
      break;
    case "iit-jee":
      url = "http://127.0.0.1:3000/iitjee.html"; // Replace with actual URL
      break;
    case "neet":
      url = "http://127.0.0.1:3000/medical.html"; // Replace with actual URL
      break;
    case "boards":
      url = "http://127.0.0.1:3000/boards.html"; // Replace with actual URL
      break;
    default:
      alert("Invalid exam selected.");
      return;
  }
  window.open(url, "_blank"); // Open the download link in a new tab
}
>>>>>>> 516c143 (last commit)
