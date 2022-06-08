const btn = document.querySelector('#minimize-small')
const skills = document.querySelector('.all-skills')

btn.addEventListener('click', function(){
    if(skills.style.display === 'none') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
})

const btn2 = document.querySelector('#minimize-small2')
const container = document.querySelector('.container-projects')

btn2.addEventListener('click', function() {
    if(container.style.display === 'none') {
        container.style.display = 'flex'
    } else {
        container.style.display = 'none'
    }
})