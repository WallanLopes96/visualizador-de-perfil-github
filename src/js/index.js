const inputSearch = document.getElementById('input-search')
const btnSearch = document.getElementById('btn-search');
const BASE_URL = 'https://api.github.com';
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        profileResults.innerHTML = `<p class="loading-message">Carregando perfil...</p>`;
        btnSearch.disabled = true;
        inputSearch.disabled = true;

        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`);
            const data = await response.json();
            console.log(data);
            profileResults.innerHTML = `<div class="profile-card">
                <img src="${data.avatar_url}" alt="Avatar de ${data.name}" class="profile-avatar">
                <h2>${data.name}</h2>
                <p>${data.bio || 'Este usuário não possui bio😒'}</p>
            </div>`;
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            alert('Erro ao buscar usuário. Por favor, tente novamente.');
            profileResults.innerHTML = '';
        } finally {
            btnSearch.disabled = false;
            inputSearch.disabled = false;
        }
    } else {
        alert('Por favor, digite um nome de usuário do GitHub.');
    }
});








