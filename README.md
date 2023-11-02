Funcion throttle:
=>Es una funcion que reduce el numero de veces que una funcion 
se ejecutara dentro de un intervalo de tiempo.
=>Nuestra funcion throttle tiene una funcion callback y un delay.
Este delay moderara la llamada a nuestra funcion. Igualmente, hemos
colocado una variable llamada 'lastCheck' que se inicializa en 0, y una 
variable 'id' que a la cual asignamos el valor de 0. Esta ultima 
la utilizaremos para cuantificar el numero de eventos que sucederan durante el delay.
al llamar a la funcion callback, registraremos el tiempo de inicio y sumaremos un evento
a la variable id. Esto sucedera hasta que la diferencia entre now y lastCheck
sea superior al delay. Cuando esto suceda, capturaremos los 'eventos' (en
este caso clicks) que han sucedido en este periodo de tiempo como parametro en una
funcion llamada mensaje. El contador de eventos se reinciara, y nuestra
variable lastCheck asumira el tiempo en el cual se ha inicializado la funcion
callback. EL proceso se repetira invocando de nuevo a la funcion.
Los resultados los pasaremos a un elemento HTML para que sean vistos por el usuario
(elemento HTML 'resultado').
=>El tiempo de delay establecido es de 2000ms, y el mensaje que 
vera el usuario es 'El delay contiene ${id} clicks'.
=>Enlazaremos esta funcionalidad con los 'clicks' que se generen (eventos)
mientras el usuario hace clicks en el boton mostrado por pantalla.
=>En cada ciclo (delay), el mensaje cambiara en funcion de los clicks
que el usuario haya obtenido en el tiempo de delay.


Commands:
    ->tsc: compilacion TS 
    ->npm run test: TDD
    ->node index.cli.js: CLI 

Test:
->Se definen 3 test para esta funcion:
    ->Se debe llamar a la funcion inmediatamente.
    ->No se debe llamar a la funcion nuevamente dentro
    del intervalo de tiempo.
    ->Se debe llamar a la funcion nuevamente despues del
    intervalo de tiempo.

CLI:
->Calcula el numero de eventos, en este caso pulsaciones de teclado,
que se ejecutan en el tiempo dado por el delay.

Front-end:
->Se muestra la funcionalidad del ejercicio a traves de los
clicks que el usuario hace a traves del boton visualizado.

