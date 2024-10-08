export const convertData = (date: { nanoseconds: number, seconds: number }) => {
    // Convertimos los segundos a milisegundos y sumamos los nanosegundos divididos entre un millón
    const dateInMillis = (date.seconds * 1000) + (date.nanoseconds / 1000000);

    // Creamos un objeto Date con la fecha convertida
    const dateNow = new Date(dateInMillis);

    // Formateamos la fecha y la hora en español
    const formattedDate = dateNow.toLocaleDateString('es-ES', {
        weekday: 'long',  // Nombre del día (e.g., "lunes")
        year: 'numeric',  // Año completo (e.g., "2024")
        month: 'long',    // Nombre completo del mes (e.g., "octubre")
        day: 'numeric',   // Día del mes (e.g., "8")
    });

    const formattedTime = dateNow.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,  // Formato de 24 horas
    });

    // Retornamos la fecha y hora formateadas
    return `${formattedDate} a las ${formattedTime}`;
}