const quizQuestions = [ //array med quizspørgsmål(q), svarmuligheder(a), det rigtige svar (correct)og point(point)
    {//første plads i arrayet, plads 0
        q: "HVAD HEDDER MARAVELOS LEASINGMODEL?",
        a: ["Marvelo365", "Lease&Go", "Ride&Smile", "EasyRide"],
        correct: "Ride&Smile",
        point: 0
    }, 

    {//anden plads i arrayet, plads 1
        q: "HVOR MEGET KOSTER DET AT OPRETTE ET RIDE&SMILE LEASINGABONNEMENT HOS MARAVELO?",
        a: ["899kr", "1099kr", "1499kr", "1799kr"],
        correct: "899kr",
        point: 0

    }, 

    {//tredje plads arrayet, plads 2
        q: "HVILKEN AF DISSE ER IKKE NAVNET PÅ EN MARAVELO-CYKEL?",
        a: ["Sporter", "Speedster", "Urban", "Crosser"],
        correct: "Speedster",
        point: 0
        
    },
    {//fjerde plads arrayet, plads 3
        q: "HVOR LANGT KAN MARAVELOS CROSSER GEN II KØRE PÅ ÉN OPLADNING?",
        a: ["Cirka 30 kilometer", "Cirka 50 kilometer", "Cirka 80 kilometer", "Cirka 100 kilometer"],
        correct: "Cirka 100 kilometer",
        point: 0
    },
     {//femte plads arrayet, plads 4
       
        q: "HVILKET LAND ER EL-CYKLERNES DESIGN INSPIRERET AF?",
        a: ["Frankrig", "Spanien", "Italien", "Portugal"],
        correct: "Italien",
        point: 0
    },
     {//sjette plads arrayet, plads 5
        q: "HVOR MEGET KOSTER DET PR. MÅNED AT LEASE EN MARAVELO EL-CYKEL?",
        a: ["Under 1000kr/md", "Cirka 1500kr/md", "Cirka 2500kr/md", "Over 3000kr/md"],
        correct: "Under 1000kr/md",
        point: 0
    },
]; 


var count = 0;
var qElement = document.querySelector(".quiz-h4"); //vælger "quiz-h4"-h4'eren fra HTML-dokumentet
var optionsElement = document.querySelector(".svarmuligheder"); //vælger "svarmuligheder"-div'en fra HTML-dokumentet

function runProgram(){

    qElement.innerHTML = quizQuestions[count].q //displayer spørgsmålene(q) fra arrayet

    var aElements = "<form>" //form-tag bruges til at indsamle input fra brugeren

    quizQuestions[count].a.forEach(answer => {
        aElements += '<input type="radio" name="answer" value="'+ answer +'"> <label for="male">' + answer + '</label><br>' //addition assignment operator(+=) tildeler en value til variabel(aElements) - svarmulighederne får radiobuttons som input
    })

    optionsElement.innerHTML = aElements + ' <br><input type="submit" value="SVAR" id="svar"> </form>' //knap der registrerer svar

    checkAnswer(); 
 }

 function checkAnswer(){ //funktion tjekker svar

    answerElement = document.querySelector("#svar")  //#svar kommer fra ID'et i knappen der registrerer svar
  
    answerElement.addEventListener("click", function(e){ //"click event for svar, function(e) er en funktion der behandler events"
  
      e.preventDefault();
  
      var answer = document.querySelector('input[name="answer"]:checked').value //variabel answer, "værdien" af svaret/brugerens input

      if(answer == quizQuestions[count].correct){
        quizQuestions[count].point = 1;
      }//hvis svaret på spørgsmålet fra arrayet er rigtigt får man 1 point

      count = count +1; 
        //conditional statements, if bruges til at udføre kode, hvis en betingelse er true - else bruges til at udføre kode, hvis den samme betingelse er false
      if(quizQuestions.length == count) {
        status();
      } else {
          runProgram();
      }
  
    })
  
   }

   function status() { //funktion der displayer pointstatus når quizzen er ovre

    qElement.innerHTML = "Pointstatus" //"overskriften" når pointstatussen kommer frem

    optionsElement.innerHTML = "";

    var samletPoint = 0;

    quizQuestions.forEach(answer => {
        samletPoint += answer.point //endnu en addition assignment operator(+=) - samletPoint er ét point pr. rigtige svar
    })

    optionsElement.innerHTML = "Tillykke! Du fik " + samletPoint + " ud af " + quizQuestions.length + " spørgsmål rigtige!" //displayer besked der fortæller hvor mange point man fik(samletPoint) ud af mængden af spørgsmål(length af "pladser" i arrayet) 

   }

   
   runProgram();
