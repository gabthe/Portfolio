const btn = document.querySelector('#minimize-small')
const skills = document.querySelector('.all-skills')

btn.addEventListener('click', function(){
    if(skills.style.display === 'block') {
        skills.style.display = 'none';
    } else {
        skills.style.display = 'block';
    }
})

const btn2 = document.querySelector('#minimize-small2')
const container = document.querySelector('.container-projects')

btn2.addEventListener('click', function() {
    if(container.style.display === 'flex') {
        container.style.display = 'none'
    } else {
        container.style.display = 'flex'
    }
})