function showDetails(subject) {
  switch (subject) {
    case "physics":
      alert(
        "Physics covers topics like mechanics, thermodynamics, electromagnetism, and modern physics."
      );
      break;
    case "chemistry":
      alert(
        "Chemistry includes organic, inorganic, and physical chemistry with a focus on reactions, equations, and periodic trends."
      );
      break;
    case "maths":
      alert(
        "Maths includes calculus, algebra, coordinate geometry, and probability."
      );
      break;
    default:
      alert("Invalid subject selected.");
  }
}

function downloadPYQs(subject) {
  let url;
  switch (subject) {
    case "physics":
      url = "https://example.com/pyqs/physics.zip"; // Replace with actual URL
      break;
    case "chemistry":
      url = "https://example.com/pyqs/chemistry.zip"; // Replace with actual URL
      break;
    case "maths":
      url = "https://example.com/pyqs/maths.zip"; // Replace with actual URL
      break;
    default:
      alert("Invalid subject selected.");
      return;
  }
  window.open(url, "_blank"); // Open the download link in a new tab
}
