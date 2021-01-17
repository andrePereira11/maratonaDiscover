# Projeto Maratona Discover

Este projeto segue o tutorial da maratona Discover realizado pela Rocketseat. A idéia do projeto é realizar um app (apenas Front-End) financeiro.

## Links das aulas da Maratona

[Aula01 - A Base de Tudo](https://youtu.be/NlDr6JX3VvA)

## Outros Links

Estes links abaixo se referem à tutoriais complementares para se fazer o dark-mode do projeto. O primeiro é também do Maik Brito, professor responsavel pela maratona discover. Os demais utilizei apenas para complementar meus estudos e deixar do modo que mais me agradou.

[Dark Mode raiz com CSS e JavaScript | Code/Drops #24](https://youtu.be/BvhYm0BOLvA)
[Dark Mode com CSS: Simples, Rápido e Preciso](https://youtu.be/rnkdLX6mOD4)
[Light/Dark Theme Toggle with CSS and JavaScript](https://youtu.be/xodD0nw2veQ)

## Explicação do dark mode deste projeto

### HTML

Primeiro, acima da logo dev.finance$ (dentro da tag `<header>`), foi acrescentado um checkbox. Este fará com que seja verificado se esta selecionado ou não, assim disparando o modo dark-mode ou deixando no light-mode.

```
<div class="container">
  <input type="checkbox" class="checkbox" id="checkbox">
  <label for="checkbox" class="label">
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
    <div class="ball"></div>
  </label>
</div>
```

Depois importei dentro da tag `<head></head>` o link para o font-awesome. Você pode pegar esse link fazendo os seguintes passos:

1.Acessar o site [Font-Awesome](https://fontawesome.com/start/)
2.Colocar seu email no campo de email. hehehehe
3.Clicar no botão ao lado do campo de email
4.Ir na sua caixa de email e confirmar sua conta

Clicando no link do email enviado, ele irá te redirecionar para o criar uma conta, assim que criada, te dará um código `<script src="htt......"></script>`. Tendo esse código, copie e cole ele dentro da tag `<head></head>`. Pronto, sua importação de fontes está feita.


### CSS

No Css, seguindo o modelo de cascata, foi colocado depois do `header{}` as seguintes propriedades:

```
.checkbox{
  opacity: 0;
  position: absolute;
}

.label{
  background: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  height: 26px;
  width: 50px;
}

.ball{
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball{
  transform: translateX(24px);
}

.fa-moon{
  color: #f1c40f;
}

.fa-sun{
  color: #f39c12;
}
```

Assim, testando, temos um checkboz que intercala entre os modos de dark-mode e light-mode. Porém, sem efetivamente concretizar a ação de troca.
Para toda interatividade, precisamos do querido javascript, então faremos as mudanças abaixo.

### JavaScript

Crie na raiz um arquivo `script.js` e depois no html, referencie esse arquivo.
Dentro das tags `<head></head>` novamente coloque a importação do javascript da seguinte maneira:

```
<script src="./script.js"></script>
```

Dentro do arquivo script.js coloque os seguintes códigos:

```
window.onload = () => {
  const html = document.querySelector('html');
  const check = document.getElementById('checkbox');

  check.addEventListener('change', () => {
    html.classList.toggle('dark-mode')
  });
}
```

Está parte de dark-mode entra apenas como um complemento da aula 01 dada até agora. Apenas uma brincadeirinha.

Espero que curtam e quem souber mais de teoria de cores, depois da uma ajudada em como saber como escolher uma paleta de cores, porque sou horrivel com essa parte hehehehe.