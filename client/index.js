const usersCards = document.getElementById('users');

async function fetchUsers() {
  try{
    const response = await fetch(`http://localhost:3333/users`);
    const users = await response.json();

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card bg-white rounded-lg shadow-lg mb-4';

        const image = document.createElement('img')
        image.className = 'w-full h-32 sm:h-48 object-cover rounded-t-lg'
        image.src = user.image
        image.alt = 'User Image';
        card.appendChild(image)

        const cardBody = document.createElement('div')
        cardBody.className = 'p-4'

        const name = document.createElement('h2');
        name.className = 'text-lg font-semibold';
        name.innerText = `${user.firstName} ${user.lastName}`;
        cardBody.appendChild(name);
        
        const gender = document.createElement('p')
        gender.clasName = 'text-sm mt-2'
        gender.innerHTML = `<span class="font-semibold">Gender:</span> ${user.gender}`
        cardBody.appendChild(name);

        const email = document.createElement('p');
        email.className = 'text-sm mt-1'
        email.innerHTML = `<span class="font-semibold">Email:</span> ${user.email}`
        cardBody.appendChild(email);

        const phone = document.createElement('p');
        phone.className = 'text-sm mt-1'
        phone.innerHTML = `<span class="font-semibold">Phone:</span> ${user.phone}`
        cardBody.appendChild(phone);

        card.appendChild(cardBody);
      usersCards.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchUsers();
