function showDetails(branch) {
  const details = {
    ae: "GATE Aerospace Engineering (AE) focuses on aerodynamics, propulsion, and aircraft structures.",
    ag: "GATE Agricultural Engineering (AG) covers farm machinery, soil and water conservation, and irrigation.",
    ar: "GATE Architecture and Planning (AR) deals with urban planning, design, and construction management.",
    bt: "GATE Biotechnology (BT) includes molecular biology, genetics, and bioprocess engineering.",
    ce: "GATE Civil Engineering (CE) focuses on structural analysis, geotechnical engineering, and transportation.",
    ch: "GATE Chemical Engineering (CH) covers chemical processes, thermodynamics, and reactor design.",
    cs: "GATE Computer Science (CS) focuses on programming, algorithms, data structures, and computer networks.",
    cy: "GATE Chemistry (CY) includes organic, inorganic, and physical chemistry.",
    ec: "GATE Electronics and Communication (EC) focuses on analog and digital circuits, signals, and communication systems.",
    ee: "GATE Electrical Engineering (EE) covers power systems, control systems, and electrical machines.",
    es: "GATE Environmental Science (ES) deals with pollution control, waste management, and environmental impact assessment.",
    gg: "GATE Geology and Geophysics (GG) includes earth sciences, mineralogy, and geophysical methods.",
    in: "GATE Instrumentation Engineering (IN) focuses on sensors, control systems, and measurement techniques.",
    ma: "GATE Mathematics (MA) covers linear algebra, calculus, and differential equations.",
    me: "GATE Mechanical Engineering (ME) includes thermodynamics, fluid mechanics, and manufacturing processes.",
    mn: "GATE Mining Engineering (MN) deals with mining methods, mineral processing, and mine safety.",
    mt: "GATE Metallurgical Engineering (MT) focuses on extraction, refining, and properties of metals.",
    pe: "GATE Petroleum Engineering (PE) covers drilling, reservoir engineering, and production techniques.",
    ph: "GATE Physics (PH) includes quantum mechanics, electromagnetism, and solid-state physics.",
    pi: "GATE Production and Industrial Engineering (PI) focuses on manufacturing processes and operations management.",
    tf: "GATE Textile Engineering (TF) deals with textile fibers, yarn production, and fabric manufacturing.",
    xe: "GATE Engineering Sciences (XE) covers fluid mechanics, materials science, and thermodynamics.",
    xl: "GATE Life Sciences (XL) includes biochemistry, microbiology, and molecular biology.",
  };
  alert(details[branch] || "Invalid branch selected.");
}

function downloadPYQs(branch) {
  const urls = {
    ae: "http://127.0.0.1:3000/Aerospace.html",
    ag: "http://127.0.0.1:3000/architechture.html",
    ar: "http://127.0.0.1:3000/agriculture.html",
    bt: "https://example.com/pyqs/gate-bt.pdf",
    ce: "https://example.com/pyqs/gate-ce.pdf",
    ch: "https://example.com/pyqs/gate-ch.pdf",
    cs: "https://example.com/pyqs/gate-cs.pdf",
    cy: "https://example.com/pyqs/gate-cy.pdf",
    ec: "https://example.com/pyqs/gate-ec.pdf",
    ee: "https://example.com/pyqs/gate-ee.pdf",
    es: "https://example.com/pyqs/gate-es.pdf",
    gg: "https://example.com/pyqs/gate-gg.pdf",
    in: "https://example.com/pyqs/gate-in.pdf",
    ma: "https://example.com/pyqs/gate-ma.pdf",
    me: "https://example.com/pyqs/gate-me.pdf",
    mn: "https://example.com/pyqs/gate-mn.pdf",
    mt: "https://example.com/pyqs/gate-mt.pdf",
    pe: "https://example.com/pyqs/gate-pe.pdf",
    ph: "https://example.com/pyqs/gate-ph.pdf",
    pi: "https://example.com/pyqs/gate-pi.pdf",
    tf: "https://example.com/pyqs/gate-tf.pdf",
    xe: "https://example.com/pyqs/gate-xe.pdf",
    xl: "https://example.com/pyqs/gate-xl.pdf",
  };
  const url = urls[branch];
  if (url) {
    window.open(url, "_blank");
  } else {
    alert("Invalid branch selected.");
  }
}
