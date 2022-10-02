container = document.querySelector('.text-primery')
btn = document.querySelector('.btnS')
bbkk = document.querySelector('.bikkk')
btnFunction = document.querySelector('.function')
massage = document.getElementsByName('Message')[0]
nameIn = document.getElementsByName('name')[0]

container.addEventListener('mouseenter', function () {
    container.textContent = 'Joyen';
})
container.addEventListener('mouseleave', function() {
    container.textContent = 'Enjoy';
})


btn.addEventListener('click', function() {
      bbkk.style.display = 'block'
})

btnFunction.addEventListener('click', function () {
    bbkk.style.display = 'none'
} )

nameIn.addEventListener('input', function() {
    massage.value = `Mening ismim ${nameIn.value} va men xoxlayman:`
})
