const ferien=document.getElementById("ferien");
    const kinderfest=document.getElementById("kinderfest");

    var kinderfestdate=new Date(2026, 5, 29);
    var feriendate=new Date(2026, 6, 4);

    function countdownupdate(){

        var now=new Date()
        var kinderfestdiff= kinderfestdate-now
        var feriendiff= feriendate-now
        const kinderfestdays = Math.ceil(kinderfestdiff / (1000 * 60 * 60 * 24));
        const feriendays = Math.ceil(feriendiff / (1000 * 60 * 60 * 24));       
        
        const kinderfesth = Math.ceil(kinderfestdiff / (1000 * 60 * 60 ));
        const ferienh = Math.ceil(feriendiff / (1000 * 60 * 60));

        const kinderfests = Math.ceil(kinderfestdiff / (1000 * 60 ));
        const feriens = Math.ceil(feriendiff / (1000 * 60));
        
        ferien.textContent = feriendays + " Tage, " + ferienh + " Stunden, "+ feriens + " Sekunden";
        kinderfest.textContent = kinderfestdays + " Tage, " + kinderfesth + " Stunden, "+ kinderfests + " Sekunden"; 
    }
    countdownupdate()
    setInterval(countdownupdate, 1000);
