array = [[1,2,3],[4,5,6],[7,8,9]];

const elem = document.querySelector('#elem');

createTable(elem, array);

function createTable(parent, arr) {
    const table = document.createElement('table');

    for (let i = 0; i < arr.length; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < arr[i].length; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
}




