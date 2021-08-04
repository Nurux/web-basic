function hora(){
    var res = document.getElementById('res')
    var txt = document.getElementById('X')
    var img = document.createElement('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    txt.innerHTML = `Hora atual: ${hora}hrs e ${min} minutos`
    img.setAttribute('id', 'foto')

    if (hora >=0 && hora < 5) {
        img.setAttribute('src', 'imgs/imgmadrugada.png')
        document.body.style.background = '#484D50'
    }else if(hora >= 5 && hora < 13){
        img.setAttribute('src', 'imgs/imgmanhã.png')
        document.body.style.background = '#ddd482'
    }else if (hora >= 12 && hora < 18){
        img.setAttribute('src', 'imgs/imgtarde.png')
        document.body.style.background = '#b27c6d'
    }else {
        img.setAttribute('src', 'imgs/imgnoite.png')
        document.body.style.background = '#0c3b42'
    }

    res.appendChild(img)
}

function menuidade(){
    var res = document.getElementById('res')
    var txt = document.getElementById('X')
    var menu = document.querySelector('div#com')

    txt.innerHTML = `Bem vindo ao identificador de idade`
    txt.innerHTML += `<div class="input-container">
                      <p>Ano de Nascimento: 
                        <input class="inputtxt" type="text" id="txtano" placeholder="Ano de Nascimento">
                        <label for="txtano" id="linput"><i class="far fa-envelope"></i></label> 
                      </p></div>`
    txt.innerHTML += `<p>Sexo 
                         <input type="radio" name="radsex" id="masc" checked> 
                         <label for="masc">Masculino</label>
                         <input type="radio" name="radsex" id="fem">
                         <label for="fem">Feminino</label>
                      </p>`
    txt.innerHTML += ` <input class="btn3" type="button" value="Verificar" onclick="idade()">`
    res.innerHTML = ``
    menu.innerHTML = ``
}

function idade(){
    var data = new Date()
    var anoat = data.getFullYear()
    var anonas = document.getElementById('txtano')

    if(anonas.value.length == 0 || Number(anonas.value > anoat)){
        alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = Number(anoat - anonas.value)
        var genero = ''
        var res = document.getElementById('res')
        var img = document.createElement('img')
        var txt = document.getElementById('X')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 12){
                img.setAttribute('src', 'imgs/img-kid-m.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imgs/img-jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imgs/img-adulto-m.png')
            }else{
                img.setAttribute('src', 'imgs/img-idoso-m.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 12){
                img.setAttribute('src', 'imgs/img-kid-f.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imgs/img-jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imgs/img-adulto-f.png')
            }else{
                img.setAttribute('src', 'imgs/img-idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com idade de ${idade} anos.`
        res.appendChild(img)
        txt.innerHTML = ``
    }  
}

function menucont(){
    var res = document.getElementById('res')
    var txt = document.getElementById('X')
    var menu = document.querySelector('div#com')

    txt.innerHTML = `Bem vindo ao Contador`
    txt.innerHTML +=`<p>Obs: contador só conta em ordem crescente</p>`
    txt.innerHTML += `<p>Numero Inicial: 
                        <input type="text" name="inputs" id="ni"> 
                      </p>`
    txt.innerHTML += `<p>Numero Final: 
                         <input type="text" name="inputs" id="nf"> 
                      </p>`
    txt.innerHTML += `<p>Numero de passos:
                        <input type="text" name="inputs" id="np">
                      </p>`
    txt.innerHTML += ` <input class="btn2" type="button" value="Verificar" onclick="contador()">`
    res.innerHTML = ``
    menu.innerHTML = ``
}

function contador(){
    var ni = document.getElementById('ni')
    var nf = Number(document.getElementById('nf').value)
    var np = document.getElementById('np')

    if(ni.value.length > nf || np.value.length == 0){
        alert('[ERRO] verfique os dados e tente novamente')
    }else{
        var cont = 0
        var i = Number(ni.value)
        var p = Number(np.value)
        var res = document.getElementById('res')

        res.innerHTML = "Contando: "

        for(cont=i;cont<=nf;cont+=p){
            res.innerHTML += `${cont} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }  

}

function menutab(){
    var res = document.getElementById('res')
    var txt = document.getElementById('X')
    var menu = document.querySelector('div#com')

    res.innerHTML = `Bem vindo a Tabuada`
    res.innerHTML += `<p>Digite um numero:
                        <input type="text" id="nt">
                      </p>`
    res.innerHTML +=`<input class="btn1" type="button" value="calcular" onclick="tabuada()"> <br>`
    res.innerHTML += `<br> <input class="btn3" type="button" value="limpar" onclick="limp()">`
    txt.innerHTML = ``
    menu.innerHTML = ``
}

function tabuada(){
    var nt = document.getElementById('nt')
    var res = document.getElementById('res')

    if(nt.value.length == 0 ){
       alert("[ERRO] verifique os dados e tente novamente")
    }else{
        var n = Number(nt.value)
        var s = 0

        for(var cont=0; cont<=10; cont++){

            s = n * cont
            res.innerHTML +=`<br>${n} X ${cont} = ${s}`
        }
    }
}

function limp(){
    var res = document.getElementById('res')
    res.innerHTML  = ``
    menutab()
}