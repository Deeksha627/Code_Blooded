# Code_Blooded
Hackathon Feb'25
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Wizard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #121212; /* Dark background */
            color: white;
            padding: 20px;
        }
        .container {
            width: 50%;
            background: #1e1e1e; /* Dark grey */
            padding: 20px;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            text-align: center;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 10px;
        }
        .section {
            padding: 20px;
            border: 1px solid #444;
            border-radius: 5px;
            background: #2c2c2c; /* Grey background */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
        }
        .section h2 {
            margin-bottom: 5px;
            color: #ffffff;
        }
        .section p {
            color: #bbbbbb;
        }
        /* Hover Effect */
        .section:hover {
            background: #444;
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }
    </style>
</head>
<body>
    <h1>Welcome to Book Wizard!</h1>
    <div class="container">
        <div class="section">
            <h2>Competitive Exam</h2>
            <p>Find study materials, mock tests, and reference books for various competitive exams.</p>
        </div>
        <div class="section">
            <h2>Casual Read</h2>
            <p>Enjoy fiction, non-fiction, short stories, and more for leisure reading.</p>
        </div>
        <div class="section">
            <h2>Podcast</h2>
            <p>Listen to educational and entertaining podcasts on various topics.</p>
        </div>
        <div class="section">
            <h2>Video Lectures</h2>
            <p>Clear your doubts using video lectures and one-on-one mentoring.</p>
        </div>
    </div>
</body>
</html>
