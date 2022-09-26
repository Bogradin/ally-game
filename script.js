var counterAliados = 0;
var counterEstagiarios = 0;
var preçoEstagiario = 10;
var counterDevs = 0;
var preçoDevs = 100;
var counterDouglas = 0;
var preçoDouglas = 500;
var aliadosSegundo = 0;
setInterval(updateCounters, 5);
setInterval(updateSegundo, 1000);

window.onload = initPage;

function initPage()
{
    desbloquearDevs()
    desbloquearDouglas()
}

function updateCounters()
{
    document.getElementById("preçoEstagiario").innerHTML=preçoEstagiario;
    document.getElementById("preçoDevs").innerHTML=preçoDevs;
    document.getElementById("preçoDouglas").innerHTML=preçoDouglas;
 
    aliados="Aliados: " + counterAliados;
    document.getElementById("aliados").innerHTML=aliados;

    aliadosPorSegundo ="Aliados por segundo: " + aliadosSegundo;
    document.getElementById("aliadosPorSegundo").innerHTML=aliadosPorSegundo;
        
    if (counterEstagiarios > 0)
        document.getElementById("estagiarios").innerHTML=estagiarios;

    if (counterDevs > 0)
        document.getElementById("devs").innerHTML=devs;

    if (counterDouglas > 0)
        document.getElementById("douglas").innerHTML=douglasdesc;

}

function updateSegundo()
{
    aliadosSegundo = (counterEstagiarios * 0.8) + (counterDevs * 3.5) + (counterDouglas * 15)
    counterAliados = counterAliados + aliadosSegundo;
    counterAliados = parseFloat(counterAliados.toFixed(2));
}


function allyClick()
{
    counterAliados++;
}

function estagiario()
{
    if (counterAliados >= preçoEstagiario)
    {
        counterAliados = counterAliados - preçoEstagiario
        counterEstagiarios++;
        preçoEstagiario = Math.round(preçoEstagiario * 1.2)

        estagiarios ="Você tem: " + counterEstagiarios + " estagiários cadastrando prices agora!";
        
        if (counterEstagiarios === 1)
        {
            desbloquearDevs();
        }
    }
}

function dev()
{
    if (counterAliados >= preçoDevs)
    {
        counterAliados = counterAliados - preçoDevs
        counterDevs++;
        preçoDevs = Math.round(preçoDevs * 1.2)

        devs ="Você tem: " + counterDevs + " devs trabalhando na sprint atual!";

        if (counterDevs === 1)
        {
            desbloquearDouglas();
        }
    }
}

function douglas()
{
    if (counterAliados >= preçoDouglas)
    {
        counterAliados = counterAliados - preçoDouglas
        counterDouglas++;
        preçoDouglas = Math.round(preçoDouglas * 1.2)

        douglasdesc ="Você tem: " + counterDouglas + " Douglas pagando seus boletos!";
    }

    if (counterDouglas === 1)
    {
        desbloquearBrenno();
    }
}

function desbloquearDevs() 
{
    var x = document.getElementById("devUnlock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function desbloquearDouglas() 
{
    var x = document.getElementById("douglasUnlock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
