let mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer')
document.body.appendChild(mainContainer)


let container = document.createElement('div');
container.classList.add('container2');
mainContainer.appendChild(container);

let key = 'key';

let user = JSON.parse(localStorage.getItem(key));
console.log(user);

let createUser = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            let div = document.createElement('div');
            div.classList.add('user')
            div.innerText = `${key} - ${obj[key]}`;
            container.appendChild(div);
        }else {
            createUser(obj[key]);
        }
    }
};

createUser(user);

let postsButton = document.createElement('button');
postsButton.innerText = 'post of current user';
postsButton.classList.add('postsButton')
container.appendChild(postsButton);

let postsDiv = document.createElement('div');
postsDiv.classList.add('postsDiv');
mainContainer.appendChild(postsDiv);

postsButton.onclick = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(data => {

            for (let post of data) {

                let postDiv = document.createElement('div');
                postDiv.classList.add('postDiv')
                postDiv.innerText = `${post.id} - ${post.title}`;
                postsDiv.appendChild(postDiv);

                let postButton = document.createElement('button');
                postButton.classList.add('postButton');
                postButton.innerText = 'click here';
                postDiv.appendChild(postButton);

                postButton.onclick = (e )=> {
                    e.preventDefault();

                    localStorage.setItem(key, JSON.stringify(post));

                    location.href = `post-details.html`;

                };
            }
        });
};

