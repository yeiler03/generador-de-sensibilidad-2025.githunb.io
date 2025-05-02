document.getElementById('simular').addEventListener('click', () => {
  const modelo = document.getElementById('modelo').value.trim();
  const resultadoDiv = document.getElementById('resultado');

  if (!modelo) {
    alert('Por favor, escribe el modelo de tu celular.');
    return;
  }

  const configuraciones = {
    general: () => Math.floor(Math.random() * 101),
    rojo: () => Math.floor(Math.random() * 101),
    dosX: () => Math.floor(Math.random() * 101),
    cuatroX: () => Math.floor(Math.random() * 101),
    awm: () => Math.floor(Math.random() * 101),
  };

  const mensajeSimulacion = document.createElement('div');
  mensajeSimulacion.id = 'cargando';
  mensajeSimulacion.style.position = 'fixed';
  mensajeSimulacion.style.top = '50%';
  mensajeSimulacion.style.left = '50%';
  mensajeSimulacion.style.transform = 'translate(-50%, -50%)';
  mensajeSimulacion.style.backgroundColor = '#000';
  mensajeSimulacion.style.color = '#fff';
  mensajeSimulacion.style.padding = '20px';
  mensajeSimulacion.style.borderRadius = '10px';
  mensajeSimulacion.style.textAlign = 'center';
  mensajeSimulacion.textContent = 'Buscando configuración completa para el modelo...';
  document.body.appendChild(mensajeSimulacion);

  const tiempoCarga = 5000;

  resultadoDiv.hidden = true;

  setTimeout(() => {
    document.getElementById('general').textContent = configuraciones.general();
    document.getElementById('rojo').textContent = configuraciones.rojo();
    document.getElementById('dosX').textContent = configuraciones.dosX();
    document.getElementById('cuatroX').textContent = configuraciones.cuatroX();
    document.getElementById('awm').textContent = configuraciones.awm();

    resultadoDiv.hidden = false;
    document.body.removeChild(mensajeSimulacion); // Elimina el mensaje de carga
  }, tiempoCarga);
});
