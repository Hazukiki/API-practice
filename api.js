const key = 'abcd';
const url = 'http://reduxblog.herokuapp.com/api/posts?abcd/';

// ========================================================
// GET
// ========================================================

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
        data.forEach(get => {
            const eachGet = `
                <li class="clearfix">
                    <p>${get.title}</p>
                    <p>ID: &nbsp;${get.id}</p>
                    <p>Content: &nbsp;${get.content}</p>
                </li>
            `;
            postContainer.insertAdjacentHTML('beforeend', eachGet);
        }
    )
    })
    .catch(error => console.error(error))
}

document.querySelector('#get').addEventListener('click', get)

// ========================================================
// POST
// ========================================================

function post() {
    const method = 'POST';
    const postData = {
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

  const body = JSON.stringify(postData);

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  fetch(url, {method, headers, body}).then(function(response) {
    return response.json();
}).then(function(postData) {
     let sec = document.querySelector('.post-sec');
     const eachPost = `
         <li class="clearfix one">
             <p>${postData.title}</p>
             <p>ID: &nbsp;${postData.id}</p>
             <p>Content: &nbsp;${postData.content}</p>
         </li>
     `;
     sec.innerHTML = eachPost;
  }).catch(function(error) {
    console.log(error);
  });
}

document.querySelector('#post').addEventListener('click', post)


// ========================================================
// GET BY ID
// ========================================================
const idInput = document.getElementById('number');
let postID;
let url2;

idInput.addEventListener('input', (event) => {
    postID = event.target.value;
    url2= 'http://reduxblog.herokuapp.com/api/posts/' + postID + '?abcd/';
});


//getid
function getId() {
    let method = 'GET';

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    fetch(url2, {method}).then(response => {
        return response.json();
    })
    .then(getIdData => {

        const postContainer2 = document.querySelector('.getId-sec');
            const eachId = `
                <li class="clearfix one">
                    <p>${data3.title}</p>
                    <p>ID: &nbsp;${data3.id}</p>
                    <p>Content: &nbsp;${data3.content}</p>
                </li>
            `;
            postContainer2.insertAdjacentHTML('beforeend', eachId);
    })
    .catch(error => console.error(error))
}

document.querySelector('#get2').addEventListener('click', getId)

// ========================================================
// DELETE
// ========================================================
const idInput_del = document.getElementById('number2');
let postID2;
let url3;
idInput_del.addEventListener('input', (event) => {
    postID2 = event.target.value;
    url3= 'http://reduxblog.herokuapp.com/api/posts/' + postID2 + '?abcd/';
});

function del() {
    let method = 'DELETE';
    const delData = {
        title: 'hello',
        categories: 'foo',
        content: 'bar'
    };
    const requestBody = JSON.stringify(delData);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    fetch(url3, {method}).then(response => {
        return response.json();
    })
    .then(delData => {
        console.log("DELETE: ",delData);
        let result = document.getElementsByClassName('delete-sec');
        window.alert('削除しました!');
        console.log(result);
    })
    .catch(error => console.error(error))
}

document.querySelector('#delete').addEventListener('click', del)
