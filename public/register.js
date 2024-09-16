// public/register.js
import { auth, createUserWithEmailAndPassword } from './firebase-config.js';

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registro exitoso');
        window.location.href = 'home.html'; // Redirigir al usuario a la página de inicio
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
