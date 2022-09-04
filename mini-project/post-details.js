let container = document.createElement('div');
container.classList.add('container3');
document.body.appendChild(container);

let key = 'key';

let post = JSON.parse(localStorage.getItem(key));
console.log(post);

let createPost = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            let divCommentt = document.createElement('div');
            divCommentt.classList.add('divCommentt');
            divCommentt.innerText = `${key} - ${obj[key]}`;
            container.appendChild(divCommentt);
        }else {
            createPost(obj[key]);

        }
    }



};

createPost(post);

let buttonComments = document.createElement('button');
buttonComments.classList.add('buttonComments');
buttonComments.innerText = 'clicl here';
container.appendChild(buttonComments);

let divComments = document.createElement('div');
divComments.classList.add('divCommentss');
document.body.appendChild(divComments);

buttonComments.onclick = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(response => response.json())
        .then(value => {
            for (comments of value) {

                let divComment = document.createElement('div');
                divComment.classList.add('divComment');
                divComment.innerText = `${comments.body}`;
                divComments.appendChild(divComment);
            }
        });
};