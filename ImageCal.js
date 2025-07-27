<!DOCTYPE html>
<html>
<head>
  <title>Facebook Photo Upload Checker</title>
</head>
<body style="font-family: Arial, sans-serif;">
  <h2>Facebook Photo Upload Checker</h2>

  <label>Enter minimum dimension (L): </label>
  <input type="number" id="minDimension" /><br><br>

  <label>Enter number of photos (N): </label>
  <input type="number" id="numPhotos" /><br><br>

  <div id="photoInputs"></div>

  <button onclick="generateInputs()">Generate Photo Inputs</button>
  <button onclick="checkPhotos()">Check Photos</button>

  <h3>Results:</h3>
  <pre id="output"></pre>

  <script>
    function generateInputs() {
      const n = parseInt(document.getElementById("numPhotos").value);
      const container = document.getElementById("photoInputs");
      container.innerHTML = "";

      for (let i = 0; i < n; i++) {
        const label = document.createElement("label");
        label.textContent = `Photo ${i + 1} (W H): `;

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "e.g. 640 480";
        input.id = `photo-${i}`;

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
      }
    }

    function checkPhotos() {
      const L = parseInt(document.getElementById("minDimension").value);
      const N = parseInt(document.getElementById("numPhotos").value);
      const output = document.getElementById("output");
      output.textContent = "";

      for (let i = 0; i < N; i++) {
        const val = document.getElementById(`photo-${i}`).value.trim();
        const [W, H] = val.split(" ").map(Number);

        if (W < L || H < L) {
          output.textContent += "UPLOAD ANOTHER\n";
        } else if (W === H) {
          output.textContent += "ACCEPTED\n";
        } else {
          output.textContent += "CROP IT\n";
        }
      }
    }
  </script>
</body>
</html>
