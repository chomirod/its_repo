
// Resistencia
const calcularResistencia = () => {
    const r1 = document.querySelector("#rintensidad").value;
    const r2 = document.querySelector("#rvolteos").value;
    const rp = r2 /r1;
    document.querySelector("#resultado").value = rp.toFixed(2);
}

const btn_res = document.querySelector ("#resis");
btn_res.addEventListener("click", calcularResistencia);


// Intensidad

const calcularIntensidad = () => {
    const i1 = document.querySelector("#rresistencia").value;
    const i2 = document.querySelector("#rvolteos").value;
    const irp = i2 /i1;
    document.querySelector("#resultado").value = irp.toFixed(2);
}

const btn_inten = document.querySelector ("#inten");
btn_inten.addEventListener("click", calcularIntensidad);


//Voltaje

const calcularVoltaje = () => {
    const v1 = document.querySelector("#rintensidad").value;
    const v2 = document.querySelector("#rresistencia").value;
    const vrp = v1 * v2;
    document.querySelector("resultado").value = vrp.toFixed(2);
}

const btn_vol = document.querySelector ("#vol");
btn_vol.addEventListener("click", calcularVoltaje);

//Boton Reset
function myFunction() {
    document.getElementById("myForm").reset();
}
