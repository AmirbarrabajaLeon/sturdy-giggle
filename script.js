function actualizarHoraFecha() {
    const ahora = new Date();

    // Obtener hora, minutos y segundos
    const hora = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');

    // Formato de hora
    const horaFormateada = `${hora}:${minutos}:${segundos}`;
    document.getElementById('hora').textContent = horaFormateada;

    // Obtener día, número del día, mes y año
    const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const mesesAbreviados = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

    const diaSemana = diasSemana[ahora.getDay()]; // Nombre del día en minúsculas
    const diaMes = ahora.getDate(); // Número del día
    const mes = mesesAbreviados[ahora.getMonth()]; // Mes abreviado sin punto
    const año = ahora.getFullYear(); // Año

    // Formato de fecha
    const fechaFormateada = `${diaSemana}, ${diaMes} ${mes} ${año}`;
    document.getElementById('fecha').textContent = fechaFormateada;
}

// Llamar a la función inicialmente y luego cada segundo
actualizarHoraFecha();
setInterval(actualizarHoraFecha, 1000);
