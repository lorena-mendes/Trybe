// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const data = new FormData(form);
//   for (const [name, value] of data) {
//     if (name === 'nome' || name === 'email') {
//       if (value.length < 10) {
//         return alert('Dados Inválidos')
//       }
//     }
//     switch (name) {
//       case 'nome':
//         if (value.length > 40) {
//           return alert('Dados Inválidos')
//         }
//         break;
//       case 'email':
//         if (value.length > 50) {
//           return alert('Dados Inválidos')
//         }
//         break;
//       case 'texto':
//         if (value.length > 500) {
//           return alert('Dados Inválidos')
//         }
//         break;
//       default:
//         break;
//     }
//   }
//   return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
// })  

document.getElementById('date').DatePickerX.init();