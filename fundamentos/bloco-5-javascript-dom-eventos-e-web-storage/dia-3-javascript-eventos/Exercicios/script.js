function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Exercício 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  
  //Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
  
  //Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
  
  //Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
  function diasDoMes () {
    let daysList = document.querySelector('#days');
    
    for (let index = 0; index < dezDaysList.length; index += 1) {
      let dia = dezDaysList[index];
      let diaLista = document.createElement('li');
      if (dia === 24 || dia === 31) {
        diaLista.className = 'day holiday';
        diaLista.innerText = dia;
        daysList.appendChild(diaLista);
      } else if (dia === 4 || dia === 11 || dia === 18) {
        diaLista.className = 'day friday';
        diaLista.innerText = dia;
        daysList.appendChild(diaLista);
      } else if (dia === 25) {
        diaLista.className = 'day holiday friday';
        diaLista.innerText = dia;
        daysList.appendChild(diaLista);
      } else {
        diaLista.className = 'day'
        diaLista.innerHTML = dia;
        daysList.appendChild(diaLista);
      }
      }
    }
    diasDoMes();

    //Exercício 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
    //Adicione a este botão a ID "btn-holiday".
    //Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

    function criaBotao (nomeBotao) {
      let recebeBotao = document.querySelector('.buttons-container');
      let novoBotao = document.createElement('button');
      let nomeBotaoId = 'btn-holiday';
      novoBotao.innerHTML = nomeBotao;
      novoBotao.id = nomeBotaoId;
      recebeBotao.appendChild(novoBotao);
    };
    criaBotao('Feriados');

    //Exercício 3.Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
    //É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

    let clickB = document.getElementById('btn-holiday');
    clickB.addEventListener("click", recebeClick);
    
    function recebeClick () {
      let feriadoCor = document.querySelectorAll('.holiday');
      for (feriado of feriadoCor) {
        if ( feriado.style.backgroundColor == 'pink') {
          feriado.style.backgroundColor = 'rgb(238,238,238)'
        } else {
          feriado.style.backgroundColor = 'pink';
        };
      };
    };

    //4.Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
    //Adicione a este botão o ID "btn-friday".
    //Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

    function sextaFeira (parametro) {
      let botao = document.createElement('button');
      botao.id = 'btn-friday';
      botao.innerHTML = parametro;
      let buttonsContainer = document.querySelector('.buttons-container');
      buttonsContainer.appendChild(botao);
    }
    sextaFeira('Sexta-feira');

    //5.Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
    //É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

    let addClick = document.getElementById('btn-friday');
    addClick.addEventListener('click', adicionaBotao);
    
    let datas = [];

    function adicionaBotao () {
      let modificaTexto = document.querySelectorAll('.friday');
      for (let index = 0; index < modificaTexto.length; index += 1) {
        if (modificaTexto[index].innerText == 'SEXTOU O/') {
          modificaTexto[index].innerText = datas.shift();
        } else {
          datas.push(modificaTexto[index].innerText)
          modificaTexto[index].innerText = 'SEXTOU O/'
        };
      };      
    };

    //6.Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.


    let mouseDiaDoMes = document.querySelector('#days');     

    mouseDiaDoMes.addEventListener('mouseover', mouseEmCima);
    mouseDiaDoMes.addEventListener('mouseout', mouseSaiuDeCima);
    
    function mouseEmCima (mouseDiaDoMes) {
      mouseDiaDoMes.target.style.fontSize = '30px';
      mouseDiaDoMes.target.style.fontWeight = '600';
    };

    function mouseSaiuDeCima (mouseDiaDoMes) { 
      mouseDiaDoMes.target.style.fontSize = '20px';
      mouseDiaDoMes.target.style.fontWeight = '200';    
    };

    //7.Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
    //O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

       
    function adicionaTarefa (tarefa) {      
      let elementoTarefa = document.createElement('span');
      elementoTarefa.innerHTML = tarefa;
      let nomeDaTarefa = document.querySelector('.my-tasks');
      nomeDaTarefa.appendChild(elementoTarefa);
    }
    adicionaTarefa('Correr');

    //8.Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
    //O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
    //O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
  
  function adicionaLegendaComCor (color) {
    let elementoCor = document.createElement('div');
    elementoCor.className = 'task';       
    elementoCor.style.backgroundColor = color;
    let cor2 = document.querySelector('.my-tasks')
    cor2.appendChild(elementoCor);
  }
  adicionaLegendaComCor('salmon');

  //9.Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
  //Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

  
  
  let myTasks = document.querySelector('.my-tasks');
  
  function adicionaClick (event) {
    let selectElement = event.target
    let selectElementClass = selectElement.className
    if (selectElementClass === 'task-select') {
      return selectElement.setAttribute('class', 'task');
    }
    return selectElement.setAttribute('class', 'task-select');
  };
  myTasks.addEventListener('click', adicionaClick);

  //10.Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
  //Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
  
  let dias = document.querySelector('#days');

  function coloreDia (event) {
    let day = event.target;
      if ( day.style.color === 'salmon') {
        day.style.color = 'rgb(119,119,119)'
      } else {
        day.style.color = 'salmon';
      };
  };
  dias.addEventListener('click', coloreDia)

  //Bônus
  //Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR"
  //Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
  //Ao pressionar a tecla "enter" o evento também deverá ser disparado.

  let taskInput = document.getElementById('task-input');
  let btnAdd = document.getElementById('btn-add');
  let taskList = document.querySelector('.task-list');

  function addCompromisso () {
    if (!taskInput.value) {
      return alert ('ERRO! Campo vazio.')
    }
    const listaCompromissoItem = document.createElement('li');
    listaCompromissoItem.innerHTML = taskInput.value;
    taskList.appendChild(listaCompromissoItem);
    taskInput.value = ''
  }
  btnAdd.addEventListener('click', addCompromisso);

  // let limpar = document.getElementById('btn-remove');
  
  // function limpaCampo () {
  //   taskInput.value = ''
  // }
  // limpar.addEventListener('click', limpaCampo);