
// let sesiones = window.localStorage.getItem("usuarios");
// console.log(JSON.parse(sesiones));

// Esta función se llama cuando un usuario intenta iniciar sesión
export function localSesioness(usu, password) {
  // Obtener el listado de usuarios almacenados en localStorage
  let sesiones = window.localStorage.getItem("usuarios");
  
  // Si no hay usuarios guardados, retornar un mensaje de error
  if (!sesiones) {
    console.log("No hay usuarios almacenados.");
    agregarUsuario(usu, password);
    return false;
  }

  // Parsear el JSON para convertirlo en un array de objetos
  let usuarios = JSON.parse(sesiones);

  // Buscar el usuario que coincide con el nombre de usuario y contraseña proporcionados
  const usuarioEncontrado = usuarios.find(usuario => usuario.username === usu && usuario.password === password);

  // Si el usuario es encontrado, la sesión es válida
  if (usuarioEncontrado) {
    console.log("Sesión válida.");
    return true;
  } else {
    console.log("Credenciales incorrectas.");
    return false;
  }
}

// Para almacenar un usuario en localStorage (se puede usar esto cuando crees nuevos usuarios)
export function agregarUsuario(usuario, password) {
  let sesiones = window.localStorage.getItem("usuarios");

  // Si no hay usuarios, crear un array vacío
  if (!sesiones) {
    sesiones = [];
  } else {
    sesiones = JSON.parse(sesiones);
  }

  // Agregar el nuevo usuario
  sesiones.push({ usuario, password });

  // Guardar los usuarios nuevamente en localStorage
  window.localStorage.setItem("usuarios", JSON.stringify(sesiones));

  console.log("Usuario agregado correctamente.");
}

export function cerrarSesion(usuario,password){
    let sesiones = window.localStorage.getItem("usuarios");
    if(sesiones){

    }
}