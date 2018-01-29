const submitForm = (wallHeights) => {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let formData = new FormData();
    formData.append('wallHeights', wallHeights);

    return fetch('/process', {
        method: 'POST',
        headers,
        body: formData
    });
}

let formEl = document.getElementById('form');
formEl.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let response = submitForm(formEl[0].value);
    
    response
        .then((resp) => {
            return resp.json();
        })
        .then(data => {
            let boardEl = document.getElementById('board');

            while (boardEl.firstChild) {
                boardEl.removeChild(boardEl.firstChild);
            }

            data.waterLevels.forEach((column, index) => {
                let col = document.createElement("div");
                col.className = 'column';
                for (let i = 0; i < column[0]; i++) {
                    let cell = document.createElement("div");
                    cell.className = (index+1 === data.largestPuddle[0] || index+1 === data.largestPuddle[1]) ? 'cell black' : 'cell wall';
                    col.appendChild(cell);
                }
                for (let i = 0; i < column[1]; i++) {
                    let cell = document.createElement("div");
                    cell.className = 'cell water';
                    col.appendChild(cell);
                }
                for (let i = 0; i < (10 - column[0] - column[1]); i++) {
                    let cell = document.createElement("div");
                    cell.className = 'cell empty';
                    col.appendChild(cell);
                }

                boardEl.appendChild(col);
            })
        })
});


