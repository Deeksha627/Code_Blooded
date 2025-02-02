function showDetails(exam) {
  switch (exam) {
    case "jee-main":
      alert(
        "JEE Main is conducted for admission to NITs, IIITs, and other engineering colleges. It tests Physics, Chemistry, and Mathematics."
      );
      break;
    case "jee-advanced":
      alert(
        "JEE Advanced is conducted for admission to IITs. It is the second stage of the JEE exam and tests advanced concepts in Physics, Chemistry, and Mathematics."
      );
      break;
    default:
      alert("Invalid exam selected.");
  }
}

function downloadPYQs(exam) {
  let url;
  switch (exam) {
    case "jee-main":
      url = "http://127.0.0.1:3000/jm.html"; // Replace with actual URL
      break;
    case "jee-advanced":
      url = "http://127.0.0.1:3000/ja.html"; // Replace with actual URL
      break;
    default:
      alert("Invalid exam selected.");
      return;
  }
  window.open(url, "_blank"); // Open the download link in a new tab
}
