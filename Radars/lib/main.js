$loginPage = document.querySelector('#loginpage');
$landingpageFormateur = document.querySelector('#landingpageformateur')
$loginpageForm = document.querySelector('#loginpageform')
$loginformButton = document.querySelector('.signin');
$mainPage = document.querySelector('.mainPage');
$userBox = document.querySelector('.userdata')
$createsessionBtn = document.querySelector('#createsessionbtn')
$sessioncreationPage = document.querySelector('.creationPage')
$candidatsInput = document.querySelector('#candidats')
$candidatsBtn = document.querySelector('#candidatsbtn')
$candidatsUl = document.querySelector('.candidatsul')
$userdataUrl = 'https://cepegra-frontend.xyz/wf11-4/wp-json/wp/v2/utilisateur'

fetch($userdataUrl)
.then((user) => user.json())
.then((user) => {
console.log(user[0].acf)
let template = ``;
template = `
<li><a href="#">Éditer mon profil</a></li>
<li>${user[0].acf.userfirstname}</li>
<li>${user[0].acf.userlastname}</li>
<li>${user[0].acf.userrole}</li>
<li>${user[0].acf.userlocation}</li>
`;

$userBox.innerHTML = template
})

$loginformButton.addEventListener('click', (e) => {
  $loginPage.classList.add('is-hidden');
  $landingpageFormateur.classList.remove('is-hidden');
});
$createsessionBtn.addEventListener('click', (e) => {
  $mainPage.classList.add('is-hidden')
  $sessioncreationPage.classList.remove('is-hidden')
})
$candidatsBtn.addEventListener('click', (e) => {
  let cible = $candidatsInput.value
  let matcher = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
  //console.log(cible)
  let template = ``
  template = `<li>${$candidatsInput.value}</li>`
  //console.log(matcher.test(cible))
  if($candidatsInput.match() === true){
    $candidatsUl.insertAdjacentHTML('beforebegin', template)
  }
  else {
    console.log("somn ain workn")
  }
})



