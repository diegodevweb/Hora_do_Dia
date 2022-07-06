function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    var minutos = data.getMinutes()
    msg.innerHTML = (`Agora são exatamente ${hora} horas e ${minutos} minutos.`)
    
    if (hora >= 0 && hora < 12) {
        img.src = 'midia/amanhecer.png'
        document.body.style.background = '#fef9ce'
    } else if (hora >= 12 && hora <19) {
        img.src = 'midia/entardecer.png'
        document.body.style.background = '#ffcd97'
    } else {
        img.src = 'midia/noite.png'
        document.body.style.background = '#977cb4'
    }
}