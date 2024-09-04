const $usersContainer = document.getElementById('users-container')

fetch('http://localhost:3000/users')
  .then((res) => {
    if (!res.ok) {
      throw new Error('Error en la solicitud: ' + response.status)
    }
    return res.json()
  })
  .then((users) => {
    renderUsers(users)
  })
  .catch((error) => {
    console.error('Hubo un problema con la solicitud:', error)
    $usersContainer.innerHTML = `<h1>Hubo un problema con la solicitud de usuarios</h1>`
  })

function renderUsers(users) {
  let $users = ''
  users.forEach((user) => {
    $users += `
        <div class="user-item">
            <span class="">Name: ${user.name}</span>
            <span class="">Email: ${user.email}</span>
        </div>
    `
  })
  $usersContainer.innerHTML = $users
}
