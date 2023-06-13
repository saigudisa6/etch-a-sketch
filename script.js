function generateGrid(r, c) {

    let container = document.querySelector('.grid-container');
    container.style.height = '92vh';
    container.style.width = '95vw';
    container.style.display = 'flex';


    for(let k = 0; k < r; k++)
    {
        let column = document.createElement('div');
        for(let i = 0; i < c; i++)
        {
            let square = document.createElement('div');
            square.style.borderStyle = 'solid';
            square.style.filter = 'brightness(10%)';

            square.style.height = (container.offsetHeight - 4) / c + 'px';
            square.style.width = (container.offsetWidth - 4) / r + 'px';
            // div.style.width = container.style.width / 16;
            console.log(container.offsetHeight);
            // console.log(container.style.);
            column.appendChild(square);
            square.addEventListener('mouseenter', (e) => {
                enter(e);
            });
        container.appendChild(column);
    }
}

}

function enter(e){
    console.log(e.target.classList);
    let style = e.target.style;
    style.backgroundColor = 'red';
    // style.filter = 'brightness(50%)';
    let currentBrightness = parseInt(style.filter.substring(style.filter.indexOf('(') + 1, style.filter.indexOf(')')-1));
    if(currentBrightness < 100) currentBrightness += 10;
    style.filter = 'brightness(' + currentBrightness + '%)';
    e.target.classList.add('.visited');
}

function restart()
{
    let rows = prompt('enter num rows between 1 and 100');
    while(rows < 1 || rows > 100)
    {
        rows = prompt('please stay in bounds! [1,100]');
    }
    
    let cols = prompt('enter num cols between 1 and 100');

    while(cols < 1 || cols > 100)
    {
        cols = prompt('please stay in bounds! [1,100]');
    }

    console.log(rows);
    console.log(cols);
    
    document.querySelector('.grid-container').innerHTML = '';

    generateGrid(rows, cols);
}

function init() {
    document.querySelector('button').addEventListener('click', (e) =>{
        restart();
    });
}

init();
console.log('yoyo');