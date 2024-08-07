// const register = () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     firebase.auth().createUserWithEmailAndPassword(email, password).then((credentials) => {
//         console.log("criado", credentials);
//         document.getElementById('message').innerText = 'Usuário criado com sucesso';
//     }).catch((error) => {
//         console.log("erro", error);
//         document.getElementById('message').innerText = 'ERRO';
//     });
// }