
alert('Welcome to Zuhry Abdi Rahmani Portfolio');

// About Me Pop Out
let active1 = document.getElementById('active1');
let active2 = document.getElementById('active2');
let active3 = document.getElementById('active3');
let active4 = document.getElementById('active4');
let active5 = document.getElementById('active5');
let active6 = document.getElementById('active6');

let general = document.querySelector('.general');
let educations = document.querySelector('.educations');
let experiences = document.querySelector('.experiences');
let skills = document.querySelector('.skills');
let organizations = document.querySelector('.organizations');
let certifications = document.querySelector('.certifications');

act1 = () => {
    if(active1.classList.contains('active') === false) {
        active1.classList.add('active');
    }
    if(active2.classList.contains('active') === true || active3.classList.contains('active') === true || active4.classList.contains('active') === true || active5.classList.contains('active') === true || active6.classList.contains('active') === true) {
        active2.classList.remove('active');
        active3.classList.remove('active');
        active4.classList.remove('active');
        active5.classList.remove('active');
        active6.classList.remove('active');
    }

    if(general.style.display === 'none') {
        general.style.display = 'block';
    }
    if(educations.style.display === 'block' || experiences.style.display === 'block' || skills.style.display === 'block' || organizations.style.display === 'block' ||certifications.style.display === 'block') {
        educations.style.display = 'none';
        experiences.style.display = 'none';
        skills.style.display = 'none';
        organizations.style.display = 'none';
        certifications.style.display = 'none';
    }
}
act2 = () => {
    if(active2.classList.contains('active') === false) {
        active2.classList.add('active');
    }
    if(active1.classList.contains('active') === true || active3.classList.contains('active') === true || active4.classList.contains('active') === true || active5.classList.contains('active') === true || active6.classList.contains('active') === true) {
        active1.classList.remove('active');
        active3.classList.remove('active');
        active4.classList.remove('active');
        active5.classList.remove('active');
        active6.classList.remove('active');
    }

    if(educations.style.display === 'none') {
        educations.style.display = 'block';
    }
    if(general.style.display === 'block' || experiences.style.display === 'block' || skills.style.display === 'block' || organizations.style.display === 'block' ||certifications.style.display === 'block') {
        general.style.display = 'none';
        experiences.style.display = 'none';
        skills.style.display = 'none';
        organizations.style.display = 'none';
        certifications.style.display = 'none';
    }
}
act3 = () => {
    if(active3.classList.contains('active') === false) {
        active3.classList.add('active');
    }
    if(active1.classList.contains('active') === true || active2.classList.contains('active') === true || active4.classList.contains('active') === true || active5.classList.contains('active') === true || active6.classList.contains('active') === true) {
        active1.classList.remove('active');
        active2.classList.remove('active');
        active4.classList.remove('active');
        active5.classList.remove('active');
        active6.classList.remove('active');
    }

    if(experiences.style.display === 'none') {
        experiences.style.display = 'block';
    }
    if(educations.style.display === 'block' || general.style.display === 'block' || skills.style.display === 'block' || organizations.style.display === 'block' ||certifications.style.display === 'block') {
        educations.style.display = 'none';
        general.style.display = 'none';
        skills.style.display = 'none';
        organizations.style.display = 'none';
        certifications.style.display = 'none';
    }
}
act4 = () => {
    if(active4.classList.contains('active') === false) {
        active4.classList.add('active');
    }
    if(active1.classList.contains('active') === true || active2.classList.contains('active') === true || active3.classList.contains('active') === true || active5.classList.contains('active') === true || active6.classList.contains('active') === true) {
        active1.classList.remove('active');
        active2.classList.remove('active');
        active3.classList.remove('active');
        active5.classList.remove('active');
        active6.classList.remove('active');
    }

    if(skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    if(educations.style.display === 'block' || experiences.style.display === 'block' || general.style.display === 'block' || organizations.style.display === 'block' ||certifications.style.display === 'block') {
        educations.style.display = 'none';
        experiences.style.display = 'none';
        general.style.display = 'none';
        organizations.style.display = 'none';
        certifications.style.display = 'none';
    }
}
act5 = () => {
    if(active5.classList.contains('active') === false) {
        active5.classList.add('active');
    }
    if(active1.classList.contains('active') === true || active2.classList.contains('active') === true || active3.classList.contains('active') === true || active4.classList.contains('active') === true || active6.classList.contains('active') === true) {
        active1.classList.remove('active');
        active2.classList.remove('active');
        active3.classList.remove('active');
        active4.classList.remove('active');
        active6.classList.remove('active');
    }

    if(organizations.style.display === 'none') {
        organizations.style.display = 'block';
    }
    if(educations.style.display === 'block' || experiences.style.display === 'block' || skills.style.display === 'block' || general.style.display === 'block' ||certifications.style.display === 'block') {
        educations.style.display = 'none';
        experiences.style.display = 'none';
        skills.style.display = 'none';
        general.style.display = 'none';
        certifications.style.display = 'none';
    }
}
act6 = () => {
    if(active6.classList.contains('active') === false) {
        active6.classList.add('active');
    }
    if(active1.classList.contains('active') === true || active2.classList.contains('active') === true || active3.classList.contains('active') === true || active4.classList.contains('active') === true || active5.classList.contains('active') === true) {
        active1.classList.remove('active');
        active2.classList.remove('active');
        active3.classList.remove('active');
        active4.classList.remove('active');
        active5.classList.remove('active');
    }

    if(certifications.style.display === 'none') {
        certifications.style.display = 'block';
    }
    if(educations.style.display === 'block' || experiences.style.display === 'block' || skills.style.display === 'block' || organizations.style.display === 'block' ||general.style.display === 'block') {
        educations.style.display = 'none';
        experiences.style.display = 'none';
        skills.style.display = 'none';
        organizations.style.display = 'none';
        general.style.display = 'none';
    }
}


// Change Color Background
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
getRandom = () => {
    let index = Math.floor(Math.random() * hex.length);
    return hex[index];
}
changeColor = () => {
    let input = document.querySelector('#colorInput').value;
    if(input !== '') {
        document.body.style.backgroundColor = input;
    } else {
        let result = '#';
        for(let i = 0; i < 6; i++) {
            result += getRandom();
        }
        document.body.style.backgroundColor = result;
    }
}