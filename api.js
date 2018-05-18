const key = 'abcd';
const url = 'http://reduxblog.herokuapp.com/api/posts?abcd/';
function get() {
    let method = 'GET';
    const data = {
        title: 'example',
        categories: 'Computer',
        content: 'sample'
    };

    const requestBody = JSON.stringify(data);

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const postContainer = document.querySelector('.getSection');
    fetch(url, {method}).then(response => {
        return response.json();
    })
    .then(data => {
        console.log("GET: ",data);
        data.forEach(post => {
            const eachPost = `
                <li>
                    <h2>${post.title}</h2>
                    <p>ID: &nbsp;${post.id}</p>
                    <p>Content: &nbsp;${post.content}</p>
                </li>
            `;
            postContainer.insertAdjacentHTML('beforeend', eachPost);
        }
    )
    })
    .catch(error => console.error(error))
}

document.querySelector('#get').addEventListener('click', get)

//POST
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let name = document.getElementById('title');
        console.log(name.value);
    }, false)
}, false);

function post() {
    const method = 'POST';
    const data = {
        title: title.value,
        categories: categories.value,
        content: content.value
    };
    // console.log(data);
    // const requestBody = JSON.stringify(data);
    //
    // const headers = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // }
    // fetch(url, {method, headers, requestBody}).then(function(response) {
    //     return response.json();
    // })
    // .then(function(data){
    //     console.log("POT: ", data);
    // })
    // .catch(function(error) {console.error(error)})

  const body = JSON.stringify(data);

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  fetch(url, {method, headers, body}).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);

  }).catch(function(error) {
    console.log(error);
  });
}

document.querySelector('#post').addEventListener('click', post)

console.log(document.querySelector('#title').value);


const url2= 'http://reduxblog.herokuapp.com/api/posts/237275?abcd/';

//getid
function getId() {
    let method = 'GET';
    const data3 = {
        title: 'hello',
        categories: 'foo',
        content: 'bar'
    };
    const requestBody = JSON.stringify(data3);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    fetch(url2, {method}).then(response => {
        return response.json();
    })
    .then(data3 => {
        console.log("GETID: ",data3);
    })
    .catch(error => console.error(error))
}

document.querySelector('#get2').addEventListener('click', getId)


// DELETE
const url3= 'http://reduxblog.herokuapp.com/api/posts/237237?abcd/';

function del() {
    let method = 'DELETE';
    const data3 = {
        title: 'hello',
        categories: 'foo',
        content: 'bar'
    };
    const requestBody = JSON.stringify(data3);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    fetch(url2, {method}).then(response => {
        return response.json();
    })
    .then(data3 => {
        console.log("DELETE: ",data3);
    })
    .catch(error => console.error(error))
}

document.querySelector('#delete').addEventListener('click', del)
