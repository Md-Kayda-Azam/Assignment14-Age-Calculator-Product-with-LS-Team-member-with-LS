
const add_devs = document.getElementById('add_devs');
const sess = document.getElementById('sess');
const add_box = document.querySelector('.devs-add-box');


add_devs.addEventListener('click', function(){
    add_box.style.display = 'block';
});

sess.addEventListener('click', function(){
    add_box.style.display = 'none';
});



//REGULAR EXPRESSION

const np = document.getElementById('np');
const name = document.getElementById('name');
const lpppp = document.getElementById('lpppp');
const likedin = document.getElementById('likedin');
const twitter = document.getElementById('twitter');
const ttttttp = document.getElementById('ttttttp');
const image = document.getElementById('image');
const iiiiiiiip = document.getElementById('iiiiiiiip');
const gmail = document.getElementById('gmail');
const gggggp = document.getElementById('gggggp');



name.addEventListener('keyup', () => {

    const agename = name.value;

    const agepattern = /^[a-zA-Z][^0-9\.!@#$%&]*$/;

    if(name.value == ''){
        np.innerHTML = `<p class="alert-danger mt-1">*What's your name?*</p>`;
   

    } else if (agepattern.test(agename) == false) {
        np.innerHTML = `<p class="alert-danger mt-1">
        *Invalid username are not allowed*</p>`

    } else if (agepattern.test(agename) == true) {
        np.innerHTML = ` `;

    } else {

    };

});
gmail.addEventListener('keyup', () => {

    const agename = gmail.value;

    const agepattern = /^[a-z0-9\._]*@[a-z0-9]*\.[a-z]{2,}$/;

    if(gmail.value == ''){
        gggggp.innerHTML = `<p class="alert-danger mt-1">*type your gmail*</p>`;
   

    } else if (agepattern.test(agename) == false) {
        gggggp.innerHTML = `<p class="alert-danger mt-1">
        *Invalid username are not allowed*</p>`

    } else if (agepattern.test(agename) == true) {
        gggggp.innerHTML = ` `;

    } else {

    };

});

likedin.addEventListener('keyup' , () =>{

    if(likedin.value == ''){
        lpppp.innerHTML = `<p class="alert-danger mt-1">*plz type your LinkedIN URL*</p>`;
    }else{

    };

});
twitter.addEventListener('keyup' , () =>{

    if(twitter.value == ''){
        ttttttp.innerHTML = `<p class="alert-danger mt-1">*plz type your LinkedIN URL*</p>`;
    }else{

    };

});
image.addEventListener('keyup' , () =>{

    if(image.value == ''){
        iiiiiiiip.innerHTML = `<p class="alert-danger mt-1">*plz type your LinkedIN URL*</p>`;
    }else{

    };

});







const devs_form = document.querySelector('#devs_form');

devs_form.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = this.querySelector('input[name="name"]').value;
    let image = this.querySelector('input[name="image"]').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let skill = this.querySelectorAll('input[name="skill"]:checked');
    let likedin = this.querySelector('input[name="likedin"]').value;
    let twitter = this.querySelector('input[name="twitter"]').value;
    let gmail = this.querySelector('input[name="gmail"]').value;


  // SKILLS LOOP
    let skills = [];
    for (let i = 0; i < skill.length; i++) {
        skills.push(skill[i].value);
    }



  // LOCAL DATA ALL
    let data_arr = [];
    if (dataget('teamData')) {
        data_arr = dataget('teamData');
    } else {
        data_arr = [];
    }
    data_arr.unshift({
        name : name,
        image : image,
        gender : gender,
        skill : skills,
        likedin : likedin,
        twitter : twitter,
        gmail : gmail,
    })
    dataset("teamData" , data_arr)
    dataLoad()

})


dataLoad()
function dataLoad (){
    let localData = dataget('teamData');
    let outputLoad = "";

    localData.map((data) => {

        let lcDt = "";
        data.skill.map((k) => {
            lcDt += '<li class="list-group-item">' + k + '</li>'
        })
        outputLoad += `
            <div class="col-lg-4 mb-4">
                <div class="team my-5">
                    <div class="round"></div>
                    <div class="image">
                        <img src="${data.image}" alt="" class="team-img">
                    </div>
                    <h2>${data.name}</h2>
                    <small> <b>Gender :</b> ${data.gender}</small>
                    <hr class="mt-3 hr">
                    <ul class="list-group mt-3">
                        <li class="text-left mb-2"><b>Skill :</b></li>
                        ${lcDt}
                    </ul>
                    <ul class="linkIcon">
                        <li>${data.likedin == "" ? "" : '<a href="#"><i class="fab fa-linkedin"></i></a>' }</li>
                        <li>${data.gmail == ""  ? "" :  '<a href="#"><i class="far fa-envelope"></i></a>'}</li>
                        <li>${data.twitter == ""  ? "" :  '<a href="#"><i class="fab fa-twitter"></i></a>'}</li>
                    </ul>
                </div>
            </div>
        `
    })
    document.getElementById('output').innerHTML = outputLoad;
}