/* ============ firebase-config.js — conexión con tu proyecto de Firebase ============
 * Pega aquí la configuración de tu app web de Firebase (Consola de Firebase >
 * Configuración del proyecto > Tus apps > SDK setup and configuration > Config).
 * Los pasos completos están en docs/FIREBASE.md.
 *
 * Estos datos NO son secretos: Firebase los diseña para ir en la web. Lo que
 * protege las partidas son las reglas de Firestore (firestore.rules).
 *
 * Si se pone a null, el juego funciona en modo local (sólo en el navegador).
 */
// Fork propio: proyecto poke-survivors-clone (independiente del original).
G.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBFX4ZZacMg1XRoYFweZClzGfIKIvQ6EFo',
  authDomain: 'poke-survivors-clone.firebaseapp.com',
  projectId: 'poke-survivors-clone',
  storageBucket: 'poke-survivors-clone.firebasestorage.app',
  messagingSenderId: '873575143744',
  appId: '1:873575143744:web:8e296df110bd8d9f0902a5',
  databaseURL: 'https://poke-survivors-clone-default-rtdb.firebaseio.com'
};

/* Ejemplo de cómo debe quedar:
G.FIREBASE_CONFIG = {
  apiKey: 'AIza...',
  authDomain: 'tu-proyecto.firebaseapp.com',
  projectId: 'tu-proyecto',
  storageBucket: 'tu-proyecto.firebasestorage.app',
  messagingSenderId: '1234567890',
  appId: '1:1234567890:web:abc123'
};
*/
