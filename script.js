const ferien=document.getElementById("ferien");
    const kinderfest=document.getElementById("kinderfest");

    var kinderfestdate=new Date(2026, 5, 29);
    var feriendate=new Date(2026, 6, 4);

    function countdownupdate(){

        var now=new Date()
        var kinderfestdiff= kinderfestdate-now
        var feriendiff= feriendate-now
        const kinderfestdays = Math.floor(kinderfestdiff / (1000 * 60 * 60*24));
        const feriendays = Math.floor(feriendiff / (1000 * 60 * 60*24 ));       
        
        const kinderfesth = Math.floor(kinderfestdiff % (1000 * 60 * 60 *24)/(1000*60*60));
        const ferienh = Math.floor(feriendiff % (1000 * 60 * 60*24)/(1000*60*60));

        const kinderfestm = Math.floor(kinderfestdiff % (1000 * 60*60)/(1000*60));
        const ferienm = Math.floor(feriendiff % (1000 * 60*60 )/(1000*60));

        const kinderfests = Math.floor(kinderfestdiff % (1000*60)/(1000));
        const feriens = Math.floor(feriendiff % (1000*60)/(1000));
        
        ferien.textContent = feriendays + "d, " + ferienh + "h, "+ ferienm + "m, "  + feriens + "s";
        kinderfest.textContent = kinderfestdays + "d, " + kinderfesth + "h, "+ kinderfestm+ "m,"+ kinderfests + "s"; 
    }
    countdownupdate()
    setInterval(countdownupdate, 1000);
