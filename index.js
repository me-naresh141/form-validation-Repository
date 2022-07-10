let form = document.querySelector('form')
let submitInput = document.createElement('input')
submitInput.setAttribute('type', 'submit')
let heading = document.createElement('h1')
heading.innerText = 'Create Account'
form.append(heading)

let arr = [
  'username',
  'name',
  'email',
  'phonenumber',
  'password',
  'confirmpassword',
]

let userInfo = {}
for (let i = 0; i < arr.length; i++) {
  div = document.createElement('div')
  div.classList.add('div')
  label = document.createElement('label')
  label.classList.add('label')
  label.innerText = arr[i]
  let attribute = ['text', 'text', 'email', 'tel', 'password', 'password']
  for (let j = i; j <= i; j++) {
    input = document.createElement('input')
    small = document.createElement('small')
    input.setAttribute('type', attribute[j])
    input.setAttribute('name', arr[i])
    input.setAttribute('id', arr[i])
    input.setAttribute('placeholder', arr[i])
    // input.setAttribute('required', '')
  }
  div.append(label, input, small, submitInput)
  form.append(div)
}

function handler(event) {
  event.preventDefault()
  userInfo.username = event.target.elements.username.value

  username(event)
  nameHandler(event)
  email(event)
  pnumber(event)
  passwordhandler(event)
  confirmPassword(event)
  sucessful(event)
}
// user name//
function username(event) {
  if (
    event.target.elements.username.value.trim().length < 4 &&
    event.target.elements.username.value.length > 1
  ) {
    event.target.elements.username.classList.add('error')
    event.target.elements.username.classList.remove('sucess')
    event.target.elements.username.nextSibling.innerText =
      "Usernmae can't be less than 4 charecter"
    userInput = document.querySelector('#username')
    event.target.elements.username.nextSibling.classList.add('red')
  } else if (event.target.elements.username.value.length === 0) {
    event.target.elements.username.nextSibling.innerText =
      ' Username can not be empty'
    event.target.elements.username.nextSibling.classList.add('red')
    event.target.elements.username.classList.add('error')
  } else {
    event.target.elements.username.nextSibling.innerText = ''
    event.target.elements.username.classList.remove('error')
    event.target.elements.username.classList.add('sucess')
  }
}

// name function //
function nameHandler(event) {
  let string = event.target.elements.name.value.search(/[0-9]/g)
  userInfo.name = event.target.elements.name.value
  if (string >= 0) {
    event.target.elements.name.nextSibling.innerText = "Name can't be  number"
    event.target.elements.name.nextSibling.classList.add('red')
    event.target.elements.name.classList.add('error')
    event.target.elements.name.classList.remove('sucess')
  } else if (event.target.elements.name.value.trim().length === 0) {
    event.target.elements.name.nextSibling.innerText = 'Name can not be empty'
    event.target.elements.name.nextSibling.classList.add('red')
    event.target.elements.name.classList.add('error')
  } else {
    event.target.elements.name.nextSibling.innerText = ''
    event.target.elements.name.classList.add('sucess')
    event.target.elements.name.classList.remove('error')
  }
}

// email function //
function email(event) {
  userInfo.email = event.target.elements.email.value
  if (
    event.target.elements.email.value.length < 12 &&
    event.target.elements.email.value.length > 1
  ) {
    event.target.elements.email.nextSibling.innerText =
      'Email must be at least 12 charecter'
    event.target.elements.email.nextSibling.classList.add('red')
    event.target.elements.email.classList.add('error')
    event.target.elements.email.classList.remove('sucess')
  } else if (event.target.elements.email.value.length === 0) {
    event.target.elements.email.nextSibling.innerText = 'Email can not be empty'
    event.target.elements.email.nextSibling.classList.add('red')
    event.target.elements.email.classList.add('error')
  } else {
    event.target.elements.email.nextSibling.innerText = ''
    event.target.elements.email.classList.add('sucess')
    event.target.elements.email.classList.remove('error')
  }
}
// phone number //
function pnumber(event) {
  console.log(event.target)
  userInfo.phonenumber = event.target.elements.phonenumber.value
  let number = event.target.elements.phonenumber.value.search(/[a-z]/gi)
  if (number > 1) {
    event.target.elements.phonenumber.nextSibling.innerText = 'only number'
    event.target.elements.phonenumber.nextSibling.classList.add('red')
    event.target.elements.phonenumber.classList.add('error')
    event.target.elements.phonenumber.classList.remove('sucess')
  } else if (event.target.elements.phonenumber.value.length < 8) {
    event.target.elements.phonenumber.nextSibling.innerText = 'more than 8'
    event.target.elements.phonenumber.classList.add('error')
    event.target.elements.phonenumber.nextSibling.classList.add('red')
  } else if (event.target.elements.phonenumber.value.length > 8) {
    event.target.elements.phonenumber.classList.add('sucess')
    event.target.elements.phonenumber.classList.remove('error')
    event.target.elements.phonenumber.nextSibling.innerText = ''
  } else if (event.target.elements.phonenumber.value.length === 0) {
    event.target.elements.phonenumber.nextSibling.innerText =
      'please enter your number'
  } else {
    event.target.elements.phonenumber.nextSibling.innerText = ''
  }
}

// password //
function passwordhandler(event) {
  userInfo.password = event.target.elements.password.value
  passwordValue = event.target.elements.password.value
  if (passwordValue.length < 1) {
    event.target.elements.password.nextSibling.innerText =
      'please enter your password'
    event.target.elements.password.nextSibling.classList.add('red')
    event.target.elements.password.classList.add('error')
    event.target.elements.password.classList.remove('sucess')
  } else if (passwordValue.length == 1 || passwordValue.length < 4) {
    event.target.elements.password.nextSibling.innerText =
      'more than 3 carector'
    event.target.elements.password.nextSibling.classList.add('red')
    event.target.elements.password.classList.add('error')
    event.target.elements.password.classList.remove('sucess')
  } else {
    event.target.elements.password.nextSibling.innerText = ''
    event.target.elements.password.classList.add('sucess')
    event.target.elements.password.classList.remove('error')
  }
}
//confirm password //
function confirmPassword(event) {
  userInfo.confirmPassword = event.target.elements.confirmpassword.value
  let confPassword = event.target.elements.confirmpassword.value
  if (passwordValue !== confPassword) {
    event.target.elements.confirmpassword.nextSibling.innerText =
      ' password is not confirm'
    event.target.elements.confirmpassword.nextSibling.classList.add('red')
    event.target.elements.confirmpassword.classList.add('error')
    event.target.elements.confirmpassword.classList.remove('sucess')
  } else if (confPassword.length == 0) {
    event.target.elements.confirmpassword.nextSibling.innerText =
      'please enter your Confirm password '
    event.target.elements.confirmpassword.nextSibling.classList.add('red')
    event.target.elements.confirmpassword.classList.add('error')
    event.target.elements.confirmpassword.classList.remove('sucess')
  } else {
    event.target.elements.confirmpassword.nextSibling.innerText = ''
    event.target.elements.confirmpassword.classList.add('sucess')
    event.target.elements.confirmpassword.classList.remove('error')
  }
}

function sucessful(event) {
  if (
    event.target.elements.username.className === `sucess` &&
    event.target.elements.name.className === `sucess` &&
    event.target.elements.email.className === `sucess` &&
    event.target.elements.phonenumber.className === `sucess` &&
    event.target.elements.password.className === `sucess` &&
    event.target.elements.confirmpassword.className === `sucess`
  ) {
    alert('👍👍User Added Successfully! 👍👍')
  }
}

form.addEventListener('submit', handler)
