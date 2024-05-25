function calculateEquivalentAngles() {
    // Input angles (replace with actual values)
    const a = parseFloat(document.getElementById('angleA').value);
    const b = parseFloat(document.getElementById('angleB').value);
    const c = parseFloat(document.getElementById('angleC').value);
    const d = parseFloat(document.getElementById('angleD').value);
    const e = parseFloat(document.getElementById('angleE').value);
    const f = parseFloat(document.getElementById('angleF').value);
  
    // Calculate equivalent angles
    const g = Math.sqrt(a * a + d * d);
    const h = Math.sqrt(b * b + e * e);
    const i = Math.sqrt(c * c + f * f);
    const angle1 = Math.sqrt(Math.abs(g * g - h * h + i * i));
    const angle2 = Math.sqrt(Math.abs(g * g + h * h - i * i));
  
    const minEquivalentAngle = Math.min(angle1, angle2);
  
    // Display equivalent angles
    document.getElementById('result').innerHTML = `
  <div class="box">
       1.Angle on side view, Equivalent angle of 1st UJ: ${g.toFixed(2)}
  </div><br>
  <div class="box">
       2.Angle on side view, Equivalent angle of 2nd UJ: ${h.toFixed(2)}
  </div><br>
  <div class="box">
       3.Angle on side view, Equivalent angle of 3rd UJ: ${i.toFixed(2)}
  </div><br>
  <div class="box">
       4.Angle on Top view, Equivalent angle of 1st UJ: ${(g * g).toFixed(2)}
  </div><br>
  <div class="box">
       5.Angle on Top view, Equivalent angle of 2nd UJ: ${(h * h).toFixed(2)}
  </div><br>
  <div class="box">
       6.Angle on Top view, Equivalent angle of 3rd UJ: ${(i * i).toFixed(2)}
  </div><br><br>
  <div class="box1">
        1.Angle on Side view, Equivalent angle 1(+-+): ${(Math.sqrt(Math.abs(g * g - h * h + i * i))).toFixed(2)}
  </div><br> 
  <div class="box1">
        2.Angle on Side view, Equivalent angle 1(++-): ${(Math.sqrt(Math.abs(g * g + h * h - i * i))).toFixed(2)}
  </div><br><br>
  <span class="highlighted"> The Selected angle: ${minEquivalentAngle.toFixed(2)}</span>
    `;
  }