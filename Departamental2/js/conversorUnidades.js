function cambiarValor(){
    var valorInputlongitud_1 = document.getElementById("input_longitud_1");
    var valorInputlongitud_2 = document.getElementById("input_longitud_2");
    var valorSelectLongitud_1 = document.getElementById("select_longitud_1").value;
    var valorSelectLongitud_2 = document.getElementById("select_longitud_2").value;
    var span1 = document.getElementById("Span_longitud");
   

    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value*1000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros *1000";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value*100000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros *10000";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value*1000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros *100000";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value*1000000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros *10000000000";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value*1000000000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros *100000000000000";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value/1.6093;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros *1.6093";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value/0.0009144;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros /0.0009144";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value/0.0003048;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros /0.0003048";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value/0.0000254;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros /0.0000254";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value/1.852;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros /1.852";
    }


    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value/1000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Metros/1000";
    }
    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }
    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value*100;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Metros *100";
    }
    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value*1000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Metros *1000";
    }
    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value*1000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Metros *1000000";
    }
    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value*1000000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Metros *1000000000";
    }
    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value/1609.3;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros /1609.3";
    }
    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value/0.9144;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros /0.9144";
    }
    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value/0.3048;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros /0.3048";
    }
    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value/0.0254;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros /0.0254";
    }
    if(valorSelectLongitud_1=="Metro" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value/1852;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los kilometros /1852";
    }


    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value/100000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Centimetros/100000";
    }
    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value/100;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Centimetros/100";
    }
    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }
    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value*10;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Centimetros *10";
    }
    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value*10000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Centimetros *10000";
    }
    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value*10000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Centimetros *10000000";
    }
    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value/160930;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Centimetros /160930";
    }
    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value/91.44;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Centimetros /91.44";
    }
    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value/30.48;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Centimetros /30.48";
    }
    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value/2.54;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Centimetros /2.54";
    }
    if(valorSelectLongitud_1=="Centimetro" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value/185200;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Centimetros /185200";
    }


    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value/1000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros/1000000";
    }
    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value/1000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros/1000";
    }
    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value/10;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros /10";
    }
    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }
    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value*1000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros *1000";
    }
    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value*1000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros *1000000";
    }
    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value/1609300;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros /16093000";
    }
    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value/914.4;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros /914.4";
    }
    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value/304.8;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros /304.8";
    }
    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value/25.4;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros /25.4";
    }
    if(valorSelectLongitud_1=="Milimetro" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value/1852000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros /18520000";
    }


    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value/1000000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros/1000000000";
    }
    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value/1000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros/1000000";
    }
    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value/10000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros /1000";
    }
    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value/1000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Micrometros /1000";
    }
    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }
    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value*1000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros *1000";
    }
    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value/1609300000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Milimetros /1609300000";
    }
    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value/914400;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los micrometros /914400";
    }
    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value/304800;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Micrometros /304800";
    }
    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value/25400;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Micrometros /25400";
    }
    if(valorSelectLongitud_1=="Micrometro" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value/1852000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Micrometros /18520000000";
    }
    


    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value/1000000000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Nanometro/1000000000000";
    }
    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value/1000000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Nanometros/1000000000";
    }
    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value/10000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Nanometros /1000000";
    }
    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value/1000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Nanometros /1000000";
    }
    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value/1000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Nanometros /1000";
    }
    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }
    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value/1609300000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Nanometros /1609300000000";
    }
    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value/914400000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Nanometros /914400000";
    }
    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value/304800000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Nanometros /304800000";
    }
    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value/25400000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Nanometros /25400000";
    }
    if(valorSelectLongitud_1=="Nanometro" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value/1852000000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los nanometros /1852000000000";
    }



    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value*1.6093;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas*1.6093";
    }
    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value*1609.34;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas *1609.34";
    }
    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value*160934;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas *160934";
    }
    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value*1609340;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas *1609340";
    }
    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value*1609340000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las  Millas *1609340000";
    }
    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value*1609340000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas *1609340000000";
    }
    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }
    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value*1760;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas /*1760";
    }
    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value*5280;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas *5280";
    }
    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value*63360;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas *63360";
    }
    if(valorSelectLongitud_1=="Milla" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value/1.151;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas /1.151";
    }



    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value/1094;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Yardas/1904";
    }
    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value/1.094;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Yardas/1.094";
    }
    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value*91.44;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Yardas *91.44";
    }
    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value*914.4;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Yardas *914.4";
    }
    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value*914400;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Yardas *914400";
    }
    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value*914400000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Yardas *914400000";
    }
    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value/1760;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Yardas /1760";
    }
    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }
    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value*3;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Yardas *3";
    }
    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value*36;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Yardas*36";
    }
    if(valorSelectLongitud_1=="Yarda" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value/2025;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Yardas /2025";
    }



    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value/3281;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Pies/3281";
    }
    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value/3.281;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Pies/3.281";
    }
    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value*30.48;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Pies*30.48";
    }
    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value*304.8;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Pies *304.8";
    }
    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value*304800;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Pies *304800";
    }
    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value*304800000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Pies *304800000";
    }
    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value/5280;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Pies /5280";
    }
    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value/3;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Pies /3";
    }
    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }
    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value*12;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los Pies *12";
    }
    if(valorSelectLongitud_1=="Pie" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value/6076;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Los pies/6076";
    }


    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value/39370;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Pulgadas/39370";
    }
    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value/39.37;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Pulgadas/39.37";
    }
    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value*2.54;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Pulgadas*2.54";
    }
    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value*25.4;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Pulgadas * 25.4";
    }
    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value*25400;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Pulgadas*25400";
    }
    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value*25400000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Pulgadas *25400000";
    }
    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value/63360;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Pulgadas /63360";
    }
    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value/36;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Pulgadas /36";
    }
    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value/12;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Pulgadas /12";
    }
    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }
    if(valorSelectLongitud_1=="Pulgada" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value/72913;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Pulgadas /72913";
    }



    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Kilometro" ){
        var res = valorInputlongitud_1.value*1.852;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas Nauticas*1.852";
    }
    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Metro" ){
        var res = valorInputlongitud_1.value*1852;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas Nauticas*1852";
    }
    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Centimetro" ){
        var res = valorInputlongitud_1.value*185200;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas Nauticas*185200";
    }
    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Milimetro" ){
        var res = valorInputlongitud_1.value*1852000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas Nauticas*1852000";
    }
    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Micrometro" ){
        var res = valorInputlongitud_1.value*1852000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas Nauticas *1852000000";
    }
    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Nanometro" ){
        var res = valorInputlongitud_1.value*1852000000000;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas Nauticas*1852000000000";
    }
    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Milla" ){
        var res = valorInputlongitud_1.value*1.151;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas Nauticas*1.151";
    }
    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Yarda" ){
        var res = valorInputlongitud_1.value*2025;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas Nauticas*2025";
    }
    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Pie" ){
        var res = valorInputlongitud_1.value*6076;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas Nauticas*6076";
    }
    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Pulgada" ){
        var res = valorInputlongitud_1.value*72913;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Las Millas Nauticas*72913";
    }
    if(valorSelectLongitud_1=="Nautica" && valorSelectLongitud_2 == "Nautica" ){
        var res = valorInputlongitud_1.value;
        valorInputlongitud_2.value = res;
        span1.innerHTML = "Es igual";
    }

}

function cambiarMasa(){
    var valorInputmasa_1 = document.getElementById("input_masa_1");
    var valorInputmasa_2 = document.getElementById("input_masa_2");
    var valorSelectMasa_1 = document.getElementById("select_masa_1").value;
    var valorSelectMasa_2 = document.getElementById("select_masa_2").value;
    var formula = document.getElementById("Span_masa");
   


    if(valorSelectMasa_1=="Kilogramo" && valorSelectMasa_2 == "Kilogramo" ){
        var res = valorInputmasa_1.value;
        valorInputmasa_2.value = res;
        formula.innerHTML = "Es igual";
    }
    if(valorSelectMasa_1=="Kilogramo" && valorSelectMasa_2 == "Gramo" ){
        var res = valorInputmasa_1.value*1000;
        valorInputmasa_2.value = res;
        formula.innerHTML = "Los kilogramos*1000";
    }
    if(valorSelectMasa_1=="Kilogramo" && valorSelectMasa_2 == "Libra" ){
        var res = valorInputmasa_1.value*(2.2046/1);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Los kilogramos*2.2046";
    }
    if(valorSelectMasa_1=="Kilogramo" && valorSelectMasa_2 == "Onza" ){
        var res = (valorInputmasa_1.value*(1/0.45359))*(16);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Los kilogramos*(1/0.45359))*(16)";
    }
    if(valorSelectMasa_1=="Kilogramo" && valorSelectMasa_2 == "Tonelada" ){
        var res = valorInputmasa_1.value*(1/1000);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Los kilogramos/1000";
    }


    

    if(valorSelectMasa_1=="Gramo" && valorSelectMasa_2 == "Kilogramo" ){
        var res = valorInputmasa_1.value/1000;
        valorInputmasa_2.value = res;
        formula.innerHTML = "Los gramos/1000";
    }
    if(valorSelectMasa_1=="Gramo" && valorSelectMasa_2 == "Gramo" ){
        var res = valorInputmasa_1.value;
        valorInputmasa_2.value = res;
        formula.innerHTML = "Es igual";
    }
    if(valorSelectMasa_1=="Gramo" && valorSelectMasa_2 == "Libra" ){
        var res = valorInputmasa_1.value/453.59;
        valorInputmasa_2.value = res;
        formula.innerHTML = "Los gramos/453.59";
    }
    if(valorSelectMasa_1=="Gramo" && valorSelectMasa_2 == "Onza" ){
        var res = valorInputmasa_1.value/28.3495;
        valorInputmasa_2.value = res;
        formula.innerHTML = "Los gramos/28.3495";
    }
    if(valorSelectMasa_1=="Gramo" && valorSelectMasa_2 == "Tonelada" ){
        var res = (valorInputmasa_1.value*(1/1000))*(1/1000);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Los gramos *(1/1000))(1/1000)";
    }

    


    if(valorSelectMasa_1=="Libra" && valorSelectMasa_2 == "Kilogramo" ){
        var res = valorInputmasa_1.value*(1/2.2046);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las libras ";
    }
    if(valorSelectMasa_1=="Libra" && valorSelectMasa_2 == "Gramo" ){
        var res = valorInputmasa_1.value*(453.59/1);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las libras*(453.59/1)";
    }
    if(valorSelectMasa_1=="Libra" && valorSelectMasa_2 == "Libra" ){
        var res = valorInputmasa_1.value;
        valorInputmasa_2.value = res;
        formula.innerHTML = "Es igual";
    }
    if(valorSelectMasa_1=="Libra" && valorSelectMasa_2 == "Onza" ){
        var res = valorInputmasa_1.value*(16/1);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las libras";
    }
    if(valorSelectMasa_1=="Libra" && valorSelectMasa_2 == "Tonelada" ){
        var res = valorInputmasa_1.value *(1/2204.6);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las libras *(1/2204.6)";
    }


    

    if(valorSelectMasa_1=="Onza" && valorSelectMasa_2 == "Kilogramo" ){
        var res = (valorInputmasa_1.value*(1/16))*(0.45359/1);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las onzas*(1/16))*(0.45359/1)";
    }
    if(valorSelectMasa_1=="Onza" && valorSelectMasa_2 == "Gramo" ){
        var res = (valorInputmasa_1.value*(1/16))*(453.59/1);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las onzas*(1/16))*(453.59/1)";
    }
    if(valorSelectMasa_1=="Onza" && valorSelectMasa_2 == "Libra" ){
        var res = valorInputmasa_1.value*(1/16.0);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las onzas*(1/16.0)";
    }
    if(valorSelectMasa_1=="Onza" && valorSelectMasa_2 == "Onza" ){
        var res = valorInputmasa_1.value;
        valorInputmasa_2.value = res;
        formula.innerHTML = "Es igual ";
    }
    if(valorSelectMasa_1=="Onza" && valorSelectMasa_2 == "Tonelada" ){
        var res = (valorInputmasa_1.value* (1/35.274))*(1/1000);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las onzas*(1/35.274))*(1/1000)";
    }


    

    if(valorSelectMasa_1=="Tonelada" && valorSelectMasa_2 == "Kilogramo" ){
        var res = valorInputmasa_1.value*(1000/1);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las toneladas *(10000/1)";
    }
    if(valorSelectMasa_1=="Tonelada" && valorSelectMasa_2 == "Gramo" ){
        var res = (valorInputmasa_1.value*(1000/1))*(1000/1);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las toneladas (1000/1))(1000/1)";
    }
    if(valorSelectMasa_1=="Tonelada" && valorSelectMasa_2 == "Libra" ){
        var res = valorInputmasa_1.value*(2204.6/1);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las toneladas *(2204.6/1)";
    }
    if(valorSelectMasa_1=="Tonelada" && valorSelectMasa_2 == "Onza" ){
        var res = (valorInputmasa_1.value*(1000/1))*(35.274/1);
        valorInputmasa_2.value = res;
        formula.innerHTML = "Las toneladas (1000/1))(35.274/1)";
    }
    if(valorSelectMasa_1=="Tonelada" && valorSelectMasa_2 == "Tonelada" ){
        var res = valorInputmasa_1.value;
        valorInputmasa_2.value = res;
        formula.innerHTML = "Es igual";
    }
}



function cambiarTemperatura(){
    var valorInputTemperatura_1 = document.getElementById("input_Temperatura_1");
    var valorInputTemperatura_2 = document.getElementById("input_Temperatura_2");
    var valorSelectTemperatura_1 = document.getElementById("select_Temperatura_1").value;
    var valorSelectTemperatura_2 = document.getElementById("select_Temperatura_2").value;
    var formula = document.getElementById("Span_Temperatura");


    if(valorSelectTemperatura_1=="Fahrenheit" && valorSelectTemperatura_2 == "Fahrenheit" ){
        var res = valorInputTemperatura_1.value;
        valorInputTemperatura_2.value = res;
        formula.innerHTML = "Es igual";
    }
    if(valorSelectTemperatura_1=="Fahrenheit" && valorSelectTemperatura_2 == "Celsius" ){
        var res = (5 * (valorInputTemperatura_1.value - 32))/9 ;
        valorInputTemperatura_2.value = res;
        formula.innerHTML = "(5 * (Fahrenheit- 32))/9";
    }
    if(valorSelectTemperatura_1=="Fahrenheit" && valorSelectTemperatura_2 == "Kelvin" ){
        var res = ((5 * (valorInputTemperatura_1.value - 32))/9)+273.15;
        valorInputTemperatura_2.value = res;
        formula.innerHTML = "((5 * (Fahrenheit- 32))/9)+273.15";
    }
 


    if(valorSelectTemperatura_1=="Celsius" && valorSelectTemperatura_2 == "Fahrenheit" ){
        var res = ((9*valorInputTemperatura_1.value)/5)+32;
        valorInputTemperatura_2.value = res;
        formula.innerHTML = "((9*Celsius)/5)+32";
    }
    if(valorSelectTemperatura_1=="Celsius" && valorSelectTemperatura_2 == "Celsius" ){
        var res = valorInputTemperatura_1.value;
        valorInputTemperatura_2.value = res;
        formula.innerHTML = "Es igual";
    }
    if(valorSelectTemperatura_1=="Celsius" && valorSelectTemperatura_2 == "Kelvin" ){
        var res = (valorInputTemperatura_1.value*1)+273.15;
        valorInputTemperatura_2.value = res;
        formula.innerHTML = "(Celsius*1)+273.15";
    }
 

    
    if(valorSelectTemperatura_1=="Kelvin" && valorSelectTemperatura_2 == "Fahrenheit" ){
        var res = ((9*(valorInputTemperatura_1.value-273.15))/5)+32;
        valorInputTemperatura_2.value = res;
        formula.innerHTML = "((9*(Kelvin-273.15))/5)+32";
    }
    if(valorSelectTemperatura_1=="Kelvin" && valorSelectTemperatura_2 == "Celsius" ){
        var res = valorInputTemperatura_1.value-273.15;
        valorInputTemperatura_2.value = res;
        formula.innerHTML = "Kelvin-273.15";
    }
    if(valorSelectTemperatura_1=="Kelvin" && valorSelectTemperatura_2 == "Kelvin" ){
        var res = valorInputTemperatura_1.value;
        valorInputTemperatura_2.value = res;
        formula.innerHTML = "Es igual";
    }
}