

export default function Config(){
    function calcularTempoRestante(anoAlvo, mesAlvo, diaAlvo) {
        // Cria um objeto Date para a data alvo
        const dataAlvo = new Date(anoAlvo, mesAlvo - 1, diaAlvo);
      
        // Obtém a data atual
        const dataAtual = new Date();
      
        // Calcula a diferença em milissegundos
        const diferencaEmMilissegundos = dataAlvo - dataAtual;
      
        // Calcula os dias, horas, minutos e segundos restantes
        const diasRestantes = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
        const horasRestantes = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutosRestantes = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
        const segundosRestantes = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);
        
        console.log(`${diasRestantes}${horasRestantes}${0}${0}`);
        return {
          dias: diasRestantes,
          horas: horasRestantes,
          minutos: minutosRestantes,
          segundos: segundosRestantes
        };
      }


    function a(){
        var valorData = document.getElementById("dataEscolhida").value;
      console.log(valorData)
      // Cria um objeto Date com a data escolhida
      var data = new Date(valorData + "T00:00:00"); // Adiciona o tempo para garantir a interpretação correta

      // Obtém ano, mês e dia
      var ano = data.getFullYear();
      var mes = ("0" + (data.getMonth() + 1)).slice(-2); // Adiciona 1 ao mês, pois os meses começam do zero
      var dia = ("0" + data.getDate()).slice(-2);

      // Exibe as partes da data no console
      console.log("Ano:", ano);
      console.log("Mês:", mes);
      console.log("Dia:", dia);

      calcularTempoRestante(ano, mes, dia);
    
    }

    return(
        <div className="projects">
           <input type="date"onChange={a} name="dataEscolhida"/>
        </div>
    )
}