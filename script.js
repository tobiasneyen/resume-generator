function generateResume() {
    // Obtener datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const photoInput = document.getElementById('photo').files[0];
    let photoURL = '';

    // Crear una URL para la foto si existe
    if (photoInput) {
        photoURL = URL.createObjectURL(photoInput);
    }

    // Crear contenido del currículum
    const resumeContent = `
        ${photoURL ? `<img src="${photoURL}" alt="Foto">` : ''}
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <h4>Experiencia</h4>
        <p>${experience}</p>
        <h4>Educación</h4>
        <p>${education}</p>
    `;

    // Mostrar el currículum y ocultar el formulario
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resume').style.display = 'block';
    document.getElementById('resumeForm').style.display = 'none';
}

function downloadResume() {
    // Crear un Blob con el contenido del currículum
    const resumeContent = document.getElementById('resumeContent').innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Crear un enlace para la descarga
    const link = document.createElement('a');
    link.href = url;
    link.download = 'curriculum.html';
    link.click();
}

