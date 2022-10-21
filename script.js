
const numeroRomano = {
    //Unidade
    0: [
        ''		//0
        , 'I' 	//1
        , 'II'	//2
        , 'III'	//3
        , 'IV'	//4
        , 'V'	//5
        , 'VI'	//6
        , 'VII'	//7
        , 'VIII'	//8
        , 'IX'	//9				
    ]
    //Dezena
    , 1: [
        ''		//10
        , 'X'	//10
        , 'XX'   //20
        , 'XXX'  //30
        , 'XL'   //40
        , 'L'    //50
        , 'LX'   //60
        , 'LXX'  //70
        , 'LXXX' //80
        , 'XC'   //90
    ]
    // Centena
    , 2: [
        ''
        , 'C'	//100
        , 'CC'   //200
        , 'CCC'  //300				
        , 'CD'   //400
        , 'D'    //500
        , 'DC'   //600
        , 'DCC'  //700
        , 'DCCC' //800
        , 'CM' 	//900
    ]
    // Milhar
    , 3: [
        ''
        , 'M' //1000
    ]
};


const numeroArabico = {
    //Unidade
    0: [
        ''	
        , '1' 	//I
        , '2'	//II
        , '3'	//III
        , '4'	//IV
        , '5'	//V
        , '6'	//VI
        , '7'	//VII
        , '8'	//VIII
        , '9'	//IX				
    ]
    //Dezena
    , 1: [
        ''		
        , '10'	//X
        , '20'   //XX
        , '30'  //XXX
        , '40'   //XL
        , '50'    //L
        , '60'   //LX
        , '70'  //LXX
        , '80' //LXXX
        , '90'   //XC
    ]
    // Centena
    , 2: [
        ''
        , '100'	//C
        , '200'   //CC
        , '300'  //CCC				
        , '400'   //CD
        , '500'    //D
        , '600'   //DC
        , '700'  //DCC
        , '800' //DCCC
        , '900' 	//CM
    ]
    // Milhar
    , 3: [
        ''
        , '1000' //M
    ]
};

function decimalRomano(input) {

    input = input.replace(/[^0-9]/, "");
    if (input == '') return '';

    var number = parseInt(input);

    if (number > 1999) {
        return "número maximo '1999'";
    }


    //Descobre se é Unidade, Dezena, Centana, Milhar
    var orderNumber = Number(input).toString();
    var orderLength = orderNumber.length;


    var unidadeDezenaCentena = orderLength - 1;


    var newOrder = '';
    for (var i = unidadeDezenaCentena; i >= 0; i--) {
        newOrder = newOrder + orderNumber.charAt(i);
    }

    var finalCast = '';
    for (var i = unidadeDezenaCentena; i >= 0; i--) {
        var auxVar = parseInt(newOrder.charAt(i));
        finalCast = finalCast + numeroRomano[i][auxVar];
    }

    return finalCast;

    
}

document.getElementById("decimal").addEventListener('keyup', function () {
    var romanNumber = decimalRomano(this.value);

    document.getElementById("roman").value = romanNumber;

    var numberCheck = this.value.replace(/[^0-9]/, "");
    if (numberCheck == '') return false;
});




function romanoDecimal(input) {

    input = input.toUpperCase();
    input = input.replace(/[0-9]/g, '');
    
    const algarismos = input.split("");
    
    var sum = 0;
    
    const convertionRomanToDecimal = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    
    algarismos.forEach((key, index) => {
      algarismos[index] = convertionRomanToDecimal[key];
      if (algarismos[index - 1] < algarismos[index]) {
        sum -= convertionRomanToDecimal[key];
      } else sum += convertionRomanToDecimal[key];
    });
    console.log(sum);

}

document.getElementById("romano").addEventListener('keyup', function () {
    var decimalNumber = romanoDecimal(this.value);
    

    document.getElementById("arabico").value = decimalNumber;
    console.log(decimalNumber);

    var numberCheck = this.value.replace(/[^0-9]/, g, '');
    if (numberCheck == '') return false;
});



//var numberToCast = 100;
//var result = romanJs(numberToCast);






