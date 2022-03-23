window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sound');
    const squares = document.querySelectorAll('.squares div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#F0EA9A',
        '#E03867',
        '#D0BEE0',
        'rgb(139, 197, 139)',
        '#ED95F5',
        '#8579E0'
        
    ];


    //Sounds
    squares.forEach((square, index) => {
        square.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);

        });

    });
    //function for bubbles
    const createBubbles = (index)=>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump${index} 1s ease`;
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }

});