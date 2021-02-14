// Add new skill and delete last

var athlete = {
    photo: 'Shoes.jpg',
    name: 'Long Distance Runner',
    text: 'Experienced and enthusiastic long distance runner with a passion for pursuing big goals.'
}

var submit = document.getElementById('submit');
var input = document.getElementById('input');
var container = document.getElementById('skillcontainer');

function remAndRep() {
    // Insert new skill
    container.insertAdjacentHTML('afterbegin', '<div class="skillcard"><img class="skillpicture" src="Images/' + athlete.photo + '" alt=""><div class="skillinfo"><h2 class="skilltitle">' + athlete.name + '</h2><p class="skilldescription">' + athlete.text + '</p></div></div>');
    // Delete the last skill
    container.removeChild(container.lastElementChild);
}

submit.addEventListener('click', function() {
    if(input.value === 'runner') {
        remAndRep();
    } else {
        alert('Please insert the word "runner"');
    }
});


// Show contact form data

function formData() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var comment = document.getElementById('comment').value;

    document.getElementById('formresult').innerHTML =
    '<p>' + firstName + '</p><p>' + lastName + '</p><p>' + gender + '</p><p>' + age + '</p><p>' + email + '</p><p>' + website + '</p><p>' + comment + '</p>';
}