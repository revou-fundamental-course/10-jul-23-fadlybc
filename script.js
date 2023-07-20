function calculateBMI() {
  let berat = document.getElementById('berat').value
  let tinggi = document.getElementById('tinggi').value

  let bmi = (berat / (tinggi*tinggi) *703)

  console.log(bmi)

  document.getElementById('heading').innerHTML = 'berat badan lebih'
  document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)

  if (bmi <= 18.5) {
    document.getElementById('massage').innerHTML = "kamu kekurangan berat badan"
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('massage').innerHTML = "Normal"
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById("massage").innerHTML = "kelebihan berat badan"
  } else {
    document.getElementById("massage").innerHTML = "obesitas"
  }
}

function reload() {
  window.location.reload()
}