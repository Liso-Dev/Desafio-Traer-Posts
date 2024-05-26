const getPost = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/photos');
        let data = await response.json();

        if (data !== null) {
            
            let postsInfo = data.map(i =>
                `
                <li class="mt-2">
                    <span class="mb-2"><strong>${i.title}</strong></span><br>
                    <span>${i.title}</span>
                </li>
                `
            ).join('');

            document.querySelector('#post-data').innerHTML = postsInfo;
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let boton = document.getElementById('myButton');

    boton.addEventListener('click', (e) => {
        e.preventDefault();
        getPost();
    });
});