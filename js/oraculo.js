

//modalFunction//
const modalButtonGroup1 = document.getElementById('group1-button');
const modalContainerGroup1 = document.getElementById('modal-container-oracle-1');
const closeContainerGroup1 = document.getElementById('close-icon-oracle-1');

modalButtonGroup1.addEventListener('click', ()=>{
    modalContainerGroup1.classList.toggle('active');
});

closeContainerGroup1.addEventListener('click',()=>{
    modalContainerGroup1.classList.remove('active');
});


const modalButtonGroup2 = document.getElementById('group2-button');
const modalContainerGroup2 = document.getElementById('modal-container-oracle-2');
const closeContainerGroup2 = document.getElementById('close-icon-oracle-2');

modalButtonGroup2.addEventListener('click', ()=>{
    modalContainerGroup2.classList.toggle('active');
});


closeContainerGroup2.addEventListener('click',()=>{
    modalContainerGroup2.classList.remove('active');
});


const modalButtonGroup3 = document.getElementById('group3-button');
const modalContainerGroup3 = document.getElementById('modal-container-oracle-3');
const closeContainerGroup3 = document.getElementById('close-icon-oracle-3');

modalButtonGroup3.addEventListener('click', ()=>{
    modalContainerGroup3.classList.toggle('active');
});


closeContainerGroup3.addEventListener('click',()=>{
    modalContainerGroup3.classList.remove('active');
});

const randomFunction1 = (cardTitle,cardBody)=>{
    let card1={
        1: {
            title: "CESARE-PAVESE",
            body: '<br><i>"Nos nos liberamos<br>de una cosa evitándola,<br>sino solo<br>atravesándola"</i>',
        },
        2: {
            title: "DEMÓCRITO-DE-ABDERA",
            body: '<br><i>"Todo<br>está hecho<br>de azar<br>y necesidad.<br></i>',
        },
        3: {
            title: "JUANA-LUJÁN",
            body: '<br><i>"Prohibido fumar<br>prohibido escupir.<br>Prohibido charlar<br>con el chofer.<br>Prohibido subir o bajar<br>con el cuore<br>en movimiento."<br>',
        },
        4: {
            title: "MARY-OLIVER",
            body: '<br><i>"Dime,<br>¿qué piensas hacer<br>con tu única,salvaje,<br>preciosa vida?"<br></i>',
        },
        5: {
            title: "WIESLAWA-SZYMBORSKA",
            body: '<br><i>"Todo principio<br>no es más que<br>una continuación,<br>y el libro de los<br>acontecimientos<br>se encuentra<br>siempre abierto.<br></i>',
        },
        6: {
            title: "El-LOCO",
            body: '',
        },
        7: {
            title: "LA EMPERATRIZ",
            body: '',
        },
        8: {
            title: "LA RUEDA DE LA FORTUNA",
            body: '',
        },
        9: {
            title: "LA ESTRELLA",
            body: '',
        },
        10: {
            title: "EL MUNDO",
            body: '',
        },
    }
 

    let numero = Math.random() * 10;
    numero = Math.round(numero);
    let res = card1[numero]; 
    cardTitle.innerHTML = res.title;    
    cardBody.innerHTML = res.body; 
}

const randomFunction2 = (cardTitle,cardBody)=>{
    let card2={
        1: {
            title: "NO-VAYAS<br>EN-NOVIEMBRE",
            body: "No vayas a esa tierra de álamos.<br>Los manzanares viejos no tienen brotes,<br>les ha bordado el viento a la noche.<br><i>(fragmento)</i>",
        },
        2: {
            title: "AHORA-QUE-VIENE-EL-TIEMPO-DE-LOS-PÁJAROS",
            body: "Ahora que viene el tiempo de los pájaros<br>y de los brotes en las ramas<br>y la blancura del almendro,<br> ahora que salgo al aire por las tardes<br>y riego plantas y veo cómo la tierra bebe<br>el agua,<br>(...)<br>yo miro a cada instante hacia el Oeste, <br>hacia tu casa<br><i>(fragmento)</i>",
        },
        3: {
            title: "LA-PATAIA/94",
            body: "Somos nosotros los que vamos<br>bajo la lluvia, pero parece<br>que nadie fuera,<br>que nos hubiéramos hecho de aire<br>entre las lengas.<br><i>(fragmento)</i>",
        },
        4: {
            title: "PAVESE",
            body: "Alguna vez dirá<br>no escribo más, el lápiz cruzado<br>sobre el diario, y acabará el oficio<br>de vivir.<br>(...)<br>No escribas más y ella vendrá,<br>por esta calle<br>hasta el hotel mañana, ella vendrá<br> y tendrá tus ojos.<br><i>(fragmento)</i>",
        },
        5: {
            title: "ENTRE<br>LOS-RAMOS",
            body: "Es domingo y no tengo dónde verte.<br>Sólo esta palabra como un fruto<br>entre los ramos y este olor salvaje<br>que regresa, desde chicos ajenos<br>y mujeres gordas<br>con pañuelos.<br><i>(fragmento)</i>",
        },
        6: {
            title: "EXTRAVÍO",
            body: "Lleva un papel escrito<br>(en el hueco de la mano<br>lleva la letra de su madre).<br><i>(fragmento)</i>",
        },
        7: {
            title: "EXTRAVÍO",
            body: "Le han ordenado:<br><i>No te pierdas</i>, y va mirándose<br>los pies, cuenta<br>los pasos.<br><i>(fragmento)</i>",
        },
        8: {
            title: "EXTRAVÍO",
            body: "Cree<br>(..pero es una instuición<br>oscura)que quien se mira<br>los pies no se extravía.<br><i>(fragmento)</i>",
        },
        9: {
            title: "EXTRAVÍO",
            body: "Cuenta los pasos<br><i>(y después las sílabas,<br>los cuentos, las monedas).<br></i>con los ojos fijos en los zapatos,<br>pero lo mismo se pierde<br>en el recuento.<br><i>(fragmento)</i>",
        },
        10: {
            title: "PAISAJE",
            body: "En el camino<br>se largó un aguacero,<br>¡y ella estaba bajo un toldo<br>con su vestido nuevo!<br><i>(cuando la lluvia acabó<br>             ya era tarde,<br>no encontró pájaritos ni sauces<br>y el agua corría por todas<br>partes).<br><i>(fragmento)</i>",
        },
        11: {
            title: "LUNES",
            body: "Los lunes mi padre llegaba tarde<br>y traía chocolates amargos.<br>En la cama grande, mamá nos leía<br>La Cabaña del Tío Tom.<br>A nosotras nos gustaban los lunes,<br>nos gustaba llorar por tristezas<br>de cuento, sufrir por los negros<br>mientras comíamos chocolates<br>Suchard.",
        },
        12: {
            title: "TENDEDERO",
            body: "A veces se queda mirando la espuma<br>y en el fondo de su corazón<br>grita una niña.<br><br>Ella le friega, la estruja,<br>(...y la niña tiembla<br>en la tarde limpia).<br><i>(fragmento)</i>",
        },
        13: {
            title: "KODAK",
            body: "Yo miraba,<br>tras la lente de una Kodak<br>con la que él sacó fotos de la guerra,<br>antes que la muerte disolviera<br>sus pupilas y delegara en mis ojos<br>el dolor de mirarme devastada<br>por la ausencia.<br>",
        },
        14: {
            title: "CASA-CON<br>PALMERAS",
            body: "Bajo las plantas y los racimos<br>de flores blancas, dos niñas juegan<br><br><i>(al gallo ciego).</i><br><br>Después la madre<br>ofrece flores de calabaza,<br>      semillas secas,<br>y las dos niñas<br>se van por el senderito<br>sin dejar huella.",
        },
        15: {
            title: "VÍSPERA",
            body: "Se va la tarde.Decís, a este sitio<br>vendremos: escribirás, sembraré,<br>pasaremos los días de viejos.<br>Sobre la casa que nace, cruzó<br>una torcaza.Más allá hay un halcón<br>y unas loras. La luz moja la falda<br>del Mogote, aviva los manchoes<br>amarillos.Todo es hermoso, digo,<br>y sin embargo, hay una nota<br>de tristeza sobre talas y espinillos.<br>Será porque es invierno, decís,<br>será porque es domingo.",
        },
        16: {
            title: "EL-OLIVO<br>DE-LA-PERLA",
            body: "En ochos minutos<br>suceden muchas cosas,<br>sale el sol, hay viento o<br>hay llovizna; alguien cruza<br>el campo y un fantasma<br>impregna la toma<br>con su sombra.<br><i>(fragmento)</i>",
        },
        17: {
            title: "UNA-NIETA<br>A-SU-ABUELA",
            body: "De los regalitos que te traje, <br>uno es una pricesa <i>(una ñusta)</i><br>de un lugar que ya no me acuerdo<br>cómo se llama, pero queda en Cuzco.<br>El otro es una semilla que encontré<br>en Humahuaca y el otro una piedrita<br>del lago Titicaca, para que sepas<br>que en cada lugar en el que estuve,<br>estuve pensando en vos.",
        },
        18: {
            title: "EL-PESO<br>DE-TU-BOCA",
            body: "¿Qué esperabas? El peso de tu boca,<br>espejo de tu ropa, un gigante<br>que hace viento con su aliento, con su<br>                          [sangre<br>hace ríos y hace hombres con las<br>                          [pulgas<br>de su cuerpo, <i>con nosotros, madre mía,</i><br>y completa su tarea de gigante.<br><i>(fragmento)</i>",
        },
        19: {
            title: "PARA<br>QUE-FLUYA",
            body: "Por el Monte de las Ánimas, va<br>una madre con sus hijas, llevando<br>las cenizas de su madre. La que ha muerto<br>amaba las cascadas, las flores amarillas,<br>las retamas. Hacia allá la llevan<br>las tres, hacia el nacimiento<br>del agua, la esparcen<br>para que fluya.",
        },
        20: {
            title: "EL-ORDEN<br>NATURAL",
            body: "<i>La nena no sabía hablar, pero la madre<br>dijo es esto y esto y le enseño a la nena<br>y la nena aprendió<br></i>¿Sabe ahora?<br><i>Sí, sabe.</i><br><i>(fragmento)</i>",
        },
        21: {
            title: "EL-ORDEN<br>NATURAL",
            body: "<i>La madre dice ésta es la cosa<br>donde se hacía el guiso, la casa donde<br>estábamos de fiesta. Y ésta es la belleza<br>de la casa. La belleza es nomás eso,<br>nadie sabe para qué sirve,<br>pero ni a nonna ni a figlia<br>se le olvida.<br>(fragmento)</i>",
        },
        22: {
            title: "EL-ORDEN<br>NATURAL",
            body: "La hija se pregunta cómo fue<br>que pasó todo<br>, la rueda del tiempo,<br>la vida sin fin y sin principio.<br><br><i>¿Sabe ahora la nena?</i><br>Si, sabe.<br><i>(fragmento)</i>",
        },
        23: {
            title: "DIGO-DICE",
            body: "Digo: ¿es una canción?<br>Dice:<i>Es una paloma, una palabra<br>hecha mía.</i>",
        },
        24: {
            title: "MÚSICA",
            body: "Es una zamba, ¿te gusta la música?<br><i>Me gusta todo lo humano que tiene.</i>",
        },
        25: {
            title: "YA-ESTÁ<br>DICHA-LA-PENA",
            body: "<i>Ya está dicha la pena. Es dura.</i><br>Si, es dura.<br><i>Cuando veo llorar lloro, <br> pero no me dejo ver.<br></i>¿Quéres un poco de agua?<br><i>No quiero agua, ni plata ni nada,<br>quiero amor.<br><i>(fragmento)</i>",
        },
        26: {
            title: "AUTORETRATO<br>ANTE-EL-CABALLETE-1",
            body: "Esto es lo que queda<br>de un hombre que se muere:<br>un pincel y la mano agrietada<br>que sostiene el pardo, el rojo,<br>el amarillo..la mano que va,<br>que se desvela, desde el charco<br>de luz hacia la tela.",
        },
        27: {
            title: "AUTORETRATO<br>ANTE-EL-CABALLETE-2",
            body: "Lenta la pincelada oscura,<br>el hijo del molinero<br>tantea con ojos ciegos<br>           la espesura<br>hasta dar con la luz.",
        },
        28: {
            title: "AUTORETRATO<br>ANTE-EL-CABALLETE-5",
            body: "Otros buscarán la nota pura,<br>la imagen que persiste, la tersura,<br>como buscan sus ojos en la tela<br><i>(es la mirada lo que abruma,<br>lo que desvela)",
        },
        29: {
            title: "AYER-I",
            body: "Detrás del cerco de flores,<br>la mariposa en la pared de cal<br>y el grito de los teros<br><br>      <i>(hila lumbre, Amor,<br>           y amanece)<br><i>(fragmento)</i>",
        },
        30: {
            title: "AYER-I",
            body: "Celia<br>me guió por el jardín,<br>entre las cañas<br><br>        <i>(¿hasta cuándo este ayer?)</i><br><br>había retablos en la mesa<br>y ese poema que habla de la luz<br>y las naranjas.<br><i>(fragmento)</i>",
        },
        31: {
            title: "AYER-I",
            body: "En la puerta, ella barió el Ubujay.<br><br>sentémonos aquí, dijo,<br>         <i>de orilla a orilla,</i><br>que está buena la luz para ver.<br><i>(fragmento)</i>",
        },
        32: {
            title: "HOY-II",
            body: "Si el tren pasa, si la vida pasa...<br><i>        (¿no ha pasado ya?)</i><br>es porque <i>el río</i> lleva hacia<br>tu casa.<br><br>Los camalotes van hacia el olvido<br>por encima del silencio van<br>     señalan nuestros pasos,<br>         mi paso igual al tuyo.<br>Van.<br><i>(fragmento)</i>",
        },
        33: {
            title: "HOY-III",
            body: "Un corderito tenías<br><i>en el idioma de las gárgaras del rocío,<br>y en el idioma del pan</i><br><br>       ¿hay un idioma del pan?<br><br><i>tu pelo es blanco<br>como la nieve.<br>(fragmento)</i>",
        },
        34: {
            title: "HOY-VIII",
            body: "Árbol de la esperanza<br>manteneme firme:<br>sobre esta palabra que sostiene,<br>mantenme firme.<br>",
        },
        35: {
            title: "HOY-IX",
            body: "Levantamos los vasos:<br>        <i>una ceremonia<br>de olvido.</i><br><br>Anudo<br>mi palabra a la suya, como un collar<br>de arena. Escribe, digo,<br>escribo.<br><br>Todavía.<br><i>(fragmento)</i>",
        },
        36: {
            title: "HERENCIA",
            body: "Años buscando<br>palabras, queriendo decir de otro modo,<br>pero no encontré nada, así que vuelvo<br>a casa. ¡No voy a quedarme parada<br>sobre las tumbas de esta gente!<br><i>(fragmento)</i>",
        },
        37: {
            title: "INTERIOR<br>CON-NARANJAS",
            body: "En el auto habló de unas naranjas,<br>dijo algo que no entendí. Después,<br>bajo la noche diáfana, pasando<br>el Bermejo, esa niña desnuda<br>sobre el puente. Una luz melosa<br>atravesaba el agua y en el cielo<br>negro la luna encendida<br>como una naranja.<br><i>(fragmento)</i>",
        },
        38: {
            title: "POLAROID",
            body: "Los pueblos primitivos<br>temen que las fotos los despojen<br>de su identidad. También yo tengo<br>un vago temor a la cámara.<br>        No tanto a la kodak<br>que tarda en revelarme, más a la<br>polaroid que despide tu imagen<br>de mí en segundos.",
        },
        39: {
            title: "NON-FICTION",
            body: "Capas infinitas envueltas en películas,<br>exposición que magnifica detalles<br>         [hasta que,<br>liberados de cualquier confinamiento,<br>reducimos la distancia entre mirar y<br>             [dejar<br>que una mano nos toque.<br><i>(fragmento)</i>",
        },
        40: {
            title: "NON-FICTION",
            body: "Se trata de un cambio en la experiencia.<br>Mapas detallados de lo real, para apresar<br>una verdad, en la que un resto de magia<br>permanezca.<br><i>(fragmento)</i>",
        },
        41:
        {
            title: "Pagarle a C.B.",
            body: "<br>Debo depositar<br>en la calva cuenta bancaria<br>liquidez extraordinaria<br>en el CBU de CB.<br><k>(Subliminal imperativo)</k>",
        },
        42:
        {
            title: "¡Quee calooooor!",
            body: "<br>Oh ehhhh ohhhhhh<br>que levanten las manos<br>(como yo))<br> el que quiera un vino en cartón.<k>(Fragmento)</k>",
        },
        43:
        {
            title: "Yaniré aprobanos",
            body: "<br>Que con carácter de bulería<br>nazca la creencia<br>con fundamento de epistemologíaa<br>que merecemos<br>más que un 6, más que un 10.<br>Una torta prometida y jamás cumplida.<k><br>(Subliminal Imperativo)</k>",
        },
        44:
        {
            title: "MESSI",
            body: "",
        },
        45:
        {
            title: "L.P.",
            body: "<br>Dispuso las cartas<br>las arrojo a un caos ordenado<br>llamado azar secuenciado<br>o también taller literario<br>Así que gracías LuLu.<br>Te regalaremos un tutu<br>(que haga rrum rrum).<k>(Fragmento)</k>",
        }, 
        
    }
 

    let numero = Math.random() * 45;
    numero = Math.round(numero);
    let res = card2[numero]; 
    cardTitle.innerHTML = res.title;    
    cardBody.innerHTML = res.body; 
}

// Consulta//
const getVal1 = ()=>{
    let val = document.getElementById('input-oracle-1').value;
    let printVal = document.getElementById('oracle-consult-1'); 
    printVal.innerHTML = val;
    
}


const buttonOracle1 = document.getElementById('oracle-start-1');
buttonOracle1.addEventListener('click',()=>{

    getVal1();

    let oracleCardTitle1 = document.getElementById('titleText1-1');
    let oracleCardBody1 = document.getElementById('bodyText1-1'); 
    oracleCardTitle1.classList.toggle('active');
    oracleCardBody1.classList.toggle('active');
    randomFunction1(oracleCardTitle1,oracleCardBody1);


    let oracleCardTitle2 = document.getElementById('titleText2-1');
    let oracleCardBody2 = document.getElementById('bodyText2-1'); 
    oracleCardTitle2.classList.toggle('active');
    oracleCardBody2.classList.toggle('active');
    randomFunction2(oracleCardTitle2,oracleCardBody2);

    let sprite3 = document.querySelector('sprite3');
    sprite3.classList.toggle('active');
});



const randomFunction3 = (cardTitle,cardBody)=>{
    let card1 = {
        1: {
            title: "lo creativo",
            body: "",
            },
        2:
            {
                title: "la espera",
                body: "",
            },
        3:
            {
                title: "el estancamiento",
                body: "",
            },
        4:
            {
                title: "el entusiasmo",
                body: "",
            },
        4:
            {
                title: "la retirada",
                body: "",
            },
        5:
            {
                title: "el impedimento",
                body: "",
            },   
        6:
            {
                title: "la liberación",
                body: "",
            },
        7:
            {
                title: "el ir al encuentro",
                body: "",
            },
        8:
            {
                title: "la plenitud",
                body: "",
            },
        9:
            {
                title: "la disolución",
                body: "",
            },
    }

    let numero = Math.random() * 9;
    numero = Math.round(numero);
    let res = card1[numero]; 
    cardTitle.innerHTML = res.title;    
    cardBody.innerHTML = res.body; 
}

const randomFunction4 = (cardTitle,cardBody)=>{
    let card2 = {

        1: {
            title: "No se llama Morgana",
            body: "<br>(...) ella espía <br/> busca su nombre <br/> en las axilas de las hojas <br/> espía <br> a través de los ojalillos de las letras <br> de las palabras <br> espía <br> <k>(fragmento)</k>",
        },
        2:
        {
            title: "La señora de la calle Cangallo",
            body: "<br>(...) guarda en los dedos <br> relámpagos agazapados<br> y en ocasiones<br> es pararrayos del niverso.(...)<br><k>(Fragmento)</k>",
        },
        3:
        {
            title: "Mordió la oscuridad",
            body: "<br>Mordió la oscuridad<br>Mordió la oscuridad<br>bebió a sorbos<br>el misterio de los helechos<br>el brocal la sostuvo<br>y en el fondo<br>la moneda de agua<br>con el eco de su rostro<br><k>(Fragmento)</k>",
        },
        4:
        {
            title: "Llegada",
            body: "<br>A contrapelo le llegó la vida<br>nació junto al aljibe<br>y para más<br>ese día inaugural<br>llovía<k>(Fragmento)</k>",
        },

        5:
        {
            title: "Andares I",
            body: "En ciertos<br>momentos<br>suelta el hilo<br>y la cara se arrodilla<br>la espalda pierde alas<br> las manos del cuerpo se cierran<br> y ya no hay dádivas<br>ni pedidos<br>ni regateos <k>(Fragmento)</k>",
        },
        6:
        {
            title: "Andares II",
            body: "<br>Anda por las cornisas<br>camina por los cables<br>se cuelga de las babas del diablo<br>vuela después<br>a cobijarse en el abrazo.<k>(Fragmento)</k>",
        },
        7:
        {
            title: "Líneas",
            body: "<br>Los ojos laten<br>las manos se ponen de pie<br>con el talón acaricia el ombligo<br>que escucha.<br>Ningún lápiz podría<br>encerrar todo su cuerpo<br>en una sola línea. <k>(Fragmento)</k>",
        },
        8:
        {
            title: "Celebra el invierno<",
            body: "<br>Celebra el invierno<br>porque puede cerrar las puertas<br>sin excusas<br>dejarse llevar por el aire espeso<br>que atesora<br>por los sueños<br>y la siesta<br><k>(Fragmento)</k>",
        },
        9:
        {
            title: "Ausencias",
            body: "<br>Empieza a deshojarse<br>unos días antes de la ausencia<br>hasta quedar reducida<br>al mínimo dibujo<br>a las líneasde sostén<br>las únicas<br>después<br>se pone de flores<br>solamente de flores<br>cada uno de los días de los regresos<br><k>(Fragmento)</k>",
        },
        10:
        {
            title: "Otro día",
            body: "<br>(...) no quiere nombrar a su corazón<br>por ser palabra tan gastada<br>y entonces<br>cómo nombrar el común lugar<br>de la pena que está clavada<br>en su corazón<br><k>(Fragmento)</k>",
        },
        11:
        {
            title: "La red",
            body: "<br>En ocasiones<br>algo le camina por el lado derecho<br>le desmaya los labios<br>le mastica detrás de la clavícula<br>crepita en el oído<br>entonces ella<br>trata de atar los cabos sueltos<br>teje<br>se encierra<br>en una red sin orificios<br><k>(Fragmento)</k>",
        },
        12:
        {
            title: "Andares III",
            body: "<br>La presencia y administra<br>la pauta<br>tira de todos los hilos<br>ese dolor<br>que la define.<k>(Fragmento)</k>",
        },
        13:
        {
            title: "Regalo",
            body: "<br>Se reserva<br>se guarda en el bolsillo<br>hasta que llega el momento<br>en que siente apenas<br>asomar al otro<br>se pone entonces<br>en la palma de la mano<br>y se da.<k>(Fragmento)</k>",
        },
        14:
        {
            title: "Andares V",
            body: "<br>Anda detrás de sí<br>escarba<br>perra impaciente<br>en pequeños lugares infructuosos<br>escarba<br>debajo del reloj<br>de la cuchara<br>escarba<br>y el instante del poema se filtra<br>como un hilo<br>de agua.<br><k>(Fragmento)</k>",
        },
        15:
        {
            title: "Ella quisiera",
            body: "<br>Ella quisiera<br>dibujarse<br>y dibujarlo<br>entrelazados<br>música curva<br>como el curvo salto<br>del venado.<br><k>(Fragmento)</k>",
        },
        16:
        {
            title: "Alquimia",
            body: "<br>Los dedos deben ser<br>leves<br>retráctiles<br>deben rozar<br>con ni siquiera un roce<br>la lengua ha de tener<br>la humedad a punto<br>el aliento<br>levedad<br>después debe olvidarse<br>cualquier otro detalle<br>en el preciso<br>exacto<br>vértice del beso.<k>(Fragmento)</k>",
        },
        17:
        {
            title: "Trazos",
            body: "<br>Las cejas<br>los dedos que tamborilean<br>sacándose el azúcar<br>el amor que ella le tiene.<k>(Fragmento)</k>",
        },
        18:
        {
            title: "Silencio",
            body: "<br>Moldea los labios del otro<br>con un dedo<br>con un acto todopoderoso<br>dice<br>hágase la luz<br>habla,boca<br>y por viejos<br>milenarios caminos<br>sólo llega la respuesta de la arena.<br><k>(Fragmento)</k>",
        },
        19:
        {
            title: "Pedido",
            body: "<br>Vamos<br>mueváse<br>no se amontone sin hacer nada<br>como una piedra gris<br>como una piedra bola<br>fuera de su lugar<br>no mire con cara de tajeta repetida<br>mueva un dedo<br>mueva aunque sea<br>la más chica de sus lágrimasv<k>(Fragmento)</k>",
        },
        20:
        {
            title: "Enigma de la naranja",
            body: "<br>Indescifragble<br>el enigma<br>de las nalgas de la naranja<br>del corazón del alcaucil<br>El enigma<br>del así<br>del es<br>de la vida<k>(Fragmento)</k>",
        },
        21:
        {
            title: "Seres",
            body: "<br>La regocijan los pequeños seres<br>que viven en los pliegues<br>pasan por el ojo de las cerraduras<br>se esconden detrás de las letras<br>en el laberinto de las orejas(...)<br>La regocijan y la espantan<br>estos pequeños<br>a los que nunca pudo verles<br>el color de los ojos<br><k>(Fragmento)</k>",
        },
        22:
        {
            title: "Dolores Castillo",
            body: "<br>Hoy murió la linda<br>la de las manos y los ojos de reir<br>la de un siempre lugar<br>entre los brazos<br>la del hombre.<br>(...)<br><k>(Fragmento)</k>",
        },
        23:
        {
            title: "Equilibrio",
            body: "<br>En el vibrante equilibrio <br> el estambre de una flor<br>sobre el castillo de naipes<br>hace estallar<br>el universo<br><k>(Fragmento)</k>",
        },
        24:
        {
            title: "Rostro",
            body: "<br>Este rostro caminado por cabras<br>por cerdos y palomas<br>reptado por lombrices<br>por camello<br>vaquitas de San Antonio<br>por virutas<br>por huellas que fascinan<br>en qué lengua<br>estará escrito<br>este rostro.<k>(Fragmento)</k>",
        },
        25:
        {
            title: "Leyenda",
            body: "<br>Dicen<br>que quien busca en el pajar<br>al fin encuentra la aguja<br>la de hacer dobladillos<br>al pañuelo de llorar<br>la enhebrada con el hilo<br>que se corta por lo más fino.<br>(...)<k>(Fragmento)</k>",
        },
        26:
        {
            title: "No es tan malo",
            body: "<br>No es tan malo el mundo<br>Manuela.<br>Sólo sucede que a veces<br>quién sabe cómo usarlo.<br><k>(Fragmento)</k>",
        },
        27:
        {
            title: "Tengo sed",
            body: "<br>Tengo sed<br>y me ahogo<br>en cada vaso de agua.<k>(Fragmento)</k>",
        },
        28:
        {
            title: "Afirmaciones I",
            body: "<br>El mordisco de la nieble<br>es el olvido.<br><k>(Fragmento)</k>",
        },
        29:
        {
            title: "Afirmaciones II",
            body: "<br>A más de uno<br>hay que quererlo<br>sin que se dé cuenta.<br><k>(Fragmento)</k>",
        },
        30:
        {
            title: "Sorbo de pájaros",
            body: "<br>Tomó un sorbo de pájaros.<br>Con suma delicadeza<br>se abrieron paso<br>hasta muy adentro.<br>Quién lo diriía<br>salieron de una pequeña taza<br>y allá van<br>sin que nadie se dé cuenta<br>de que ella va volando<br>con una banda<br>de sorbos<br>de pájaros.<k>(Fragmento)</k>",
        },
        31:
        {
            title: "Lugares comunes",
            body: "<br>Todos los lugares comunes<br>de la vida<br>están tocados<br>menos el común lugar del amor<br>que también.<br><k>(Fragmento)</k>",
        },
        32:
        {
            title: "Pequeñas bocas de pez",
            body: "<br>Pequeñas bocas de pez<br>tocan<br>exploran cada tibio milímetro<br>se doblan<br>se trenazan<br>para que los labios lleguen.<br>Tantean<br>rozan<br>y finalmente<br>muerden el anzuelo de tu piel.<k>(Fragmento)</k>",
        },
        33:
        {
            title: "Pequeño pez",
            body: "<br>Pequeño pez<br>por la boca muere<br>prendido<br>a mi pelo envenenado. <k>(Fragmento)</k>",
        },
        34:
        {
            title: "Cómo hablar del amor",
            body: "<br>El mundo es demasiado grande<br>y queda lejos.<br>Cómo hablar del amor<br>por los seres<br>a los que se aborrece.<br><k>(Fragmento)</k>",
        },
        35:
        {
            title: "Cejas",
            body: "<br>Tus cejas<br>hacen un dibujo<br>de pájaro volando.<br>Ya no puedo bajar de lo alto.<br> <k>(Fragmento)</k>",
        },
        36:
        {
            title: "Oración del sorbo de agua",
            body: "<br>(...)Ella bebe sorbos de agua<br>con todos los que ama<br>y nadie lo sospecha.<br>Cuando el mundo tiembla<br>procura consuelos<br>que son para casi todos.<br>Y dice <k>Así sea</k><br><k>(Fragmento)</k>",
        },
        37:
        {
            title: "Bendiciones",
            body: "<br>Una piedra<br>sobre el tablero de ajedrez<br>los peones se van<br>los reyes mueren<br>y el tablero inestable<br>mezcla los casilleros.<br>Quién hizo<br>las reglas de este juego<br>quién no nos dio todavía<br>su bendición.<br><k>(Fragmento)</k>",
        },
        38:
        {
            title: "Maldiciones de la cansada",
            body: "<br>(...) Que los dientes se les conviertan<br>en dientes de ajo.<br>Que tenga que escupir silencios<br>cuando esté lleno de palabras.<br>Y si alguna vez se encierra en el dolor<br>como dentro de una uva.<br>Señor<br>no permitas<br>que encuentre<br>fácilmente una ranura.<br> <k>(Fragmento)</k>",
        },
        39:
        {
            title: "Parpadeo",
            body: "<br>(...) pensó que pasaban solamente<br>las ovejas contadas<br>las monedas<br>las palabras<br>hasta que un cristal cualquiera<br>en su reflejo<br><k>(yo adivino el parpadeo)</k><br>le dió el aviso urgen<br>del tiempo<br>del tiempo<br>que pasaba.<br><k>(Fragmento)</k>",
        },
        40:
        {
            title: "Morgana la de Cangallo",
            body: "<br>(...) no se llama Morgana.<br>Pero sus alquimias siguen<br>buscando ojos manos<br>abrazos que la amparen<br>de los hechiceros<br>de juegos y calles tan ajenos<br>rondas que diluyan<br>toda soledad.<br><k>(Fragmento)</k>",
        },
        41:
        {
            title: "Pagarle a C.B.",
            body: "<br>Debo depositar<br>en la calva cuenta bancaria<br>liquidez extraordinaria<br>en el CBU de CB.<br><k>(Subliminal imperativo)</k>",
        },
        42:
        {
            title: "¡Quee calooooor!",
            body: "<br>Oh ehhhh ohhhhhh<br>que levanten las manos<br>(como yo))<br> el que quiera un vino en cartón.<k>(Fragmento)</k>",
        },
        43:
        {
            title: "Yaniré aprobanos",
            body: "<br>Que con carácter de bulería<br>nazca la creencia<br>con fundamento de epistemologíaa<br>que merecemos<br>más que un 6, más que un 10.<br>Una torta prometida y jamás cumplida.<k><br>(Subliminal Imperativo)</k>",
        },
        44:
        {
            title: "MESSI",
            body: "",
        },
        45:
        {
            title: "L.P.",
            body: "<br>Dispuso las cartas<br>las arrojo a un caos ordenado<br>llamado azar secuenciado<br>o también taller literario<br>Así que gracías LuLu.<br>Te regalaremos un tutu<br>(que haga rrum rrum).<k>(Fragmento)</k>",
        }, 
    };
    
    let numero = Math.random() * 45;
    numero = Math.round(numero);
    let res = card2[numero]; 
    cardTitle.innerHTML = res.title;    
    cardBody.innerHTML = res.body; 

}

// Consulta//
const getVal2 = ()=>{
    let val = document.getElementById('input-oracle-2').value;
    let printVal = document.getElementById('oracle-consult-2'); 
    printVal.innerHTML = val;
    
}


const buttonOracle2 = document.getElementById('oracle-start-2');
buttonOracle2.addEventListener('click',()=>{

    getVal2();

    let oracleCardTitle1 = document.getElementById('titleText1-2');
    let oracleCardBody1 = document.getElementById('bodyText1-2'); 
    oracleCardTitle1.classList.toggle('active');
    oracleCardBody1.classList.toggle('active');
    randomFunction3(oracleCardTitle1,oracleCardBody1);


    let oracleCardTitle2 = document.getElementById('titleText2-2');
    let oracleCardBody2 = document.getElementById('bodyText2-2'); 
    oracleCardTitle2.classList.toggle('active');
    oracleCardBody2.classList.toggle('active');
    randomFunction4(oracleCardTitle2,oracleCardBody2);
});


const randomFunction5 = (cardTitle,cardBody)=>{
    let card1={
        1: {
            title: "araca",
            body: "¡CUIDADO!<br>VOZ DE ALARMA.",
        },
        2: {
            title: "batacazo",
            body: "ÉXITO INESPERADO.<br>ACIERTO POR CASUALIDAD.",
        },
        3: {
            title: "batifondo",
            body: "ALBOROTO, DESORDEN.<br>ESCÁNDOLO, GRITERÍO, TUMULTO.",
        },
        4: {
            title: "bacán",
            body: "PERSONA QUE SE<br>DA BUENA VIDA.",
        },
        5: {
            title: "berretín",
            body: "ANTOJO, CAPRICHO. <br>DESEO VEHEMENTE.<br>",
        },
        6: {
            title: "camelo",
            body: "ENGAÑO, FARSA.<br>MENTIRA, TRAMPA.",
        },
        7: {
            title: "chamuyo",
            body: "TRATAR DE CONVENCER CON <br>PALABRAS A OTRA PERSONA.",
        },
        8: {
            title: "farabute",
            body: "PERSONA PÍCARA, OSTENTOSA.<br>FANFARRÓN, DESCARADO.",
        },
        9: {
            title: "garufa",
            body: "DIVERSIÓN, JARANA.<br>PERSONA ALEGRE O DIVERTIDA.",
        },
        10: {
            title: "mangazo",
            body: "PEDIDO, SOLICITUD.<br>HÁBITO EXAGERADO DE PEDIR.",
        },
    }
 

    let numero = Math.random() * 10;
    numero = Math.round(numero);
    let res = card1[numero]; 
    cardTitle.innerHTML = res.title;    
    cardBody.innerHTML = res.body; 
}

const randomFunction6 = (cardTitle,cardBody)=>{
    let card2={
        1: {
            title: "Entonces en Estambul",
            body: "Entonces en Estambul<br>era un joven<br>de largas piernas fuertes<br>y de boca sonriente<br>hacia un futuro<br>abierto sin promesas.(...)<br><i>(Fragmento)</i>",
        },
        2: {
            title: "Entonces en Estambul",
            body: "(...)Recorrí las calles empedradas<br>las antiguas iglesias<br>templos del diablo o de dios<br>las tabernas con marineros<br>y bebidas ásperas<br>las breves noches a tu lado<br>y las enormes horas de vacío.<br>Para decirlo en una palabra<br>quiero estar otra vez en Estambul.<br><i>(Fragmento)</i>",
        },
        3: {
            title: "Un joven moreno de ojos tristes",
            body: "Un joven moreno de ojos tristes<br>dispuesto al amor y la pelea<br>callado lento y agresivo<br>como la navaja guardadaen el bolsillo(...)<i>(Fragmento)</i>",
        },
        4: {
            title: "Un joven moreno de ojos tristes",
            body: "(...) mirando sole al atardecer<br>esperandoomo en un poema de Tuñon<br>que venga Blanca luz y me ame.<br>Pero Moscú<br>es demasiado solemne<br>con tanta historia tan cercana<br>y yo sigo esperando.<br><i>(Fragmento)</i>",
        },
        5: {
            title: "En Praga son tan cortos los días",
            body: "En praga son tan cortos los días<br>pero el calor brota<br>de las chimeneas<br>del encierro y la música<br>y ya no tengo veinte años<br>para enfrentar la nieve (...)<br><i>(Fragmento)</i>",
        },
        6: {
            title: "En Praga son tan cortos los días",
            body: "(...)y mis ojos tan negros<br>y tus ojos tan verdes<br>y tu capricho<br>de regalarme un durazno<br>y el mío de darte<br>la flor más roja de la plaza<br>mi dios qué dulce<br>es el amor en Praga<br>cuando cae la nieve.<br><i>(Fragmento)</i>",
        },
        7: {
            title: "Fue todo de sorpresa",
            body: "Fue todo de sorpresa<br>yo creía<br>que nada me hacía falta<br>por tener los bolsillos vacíos<br>la cabeza vacía<br>pero los ojos pardos<br>capaces de mirar  con amor<br>y hacer que se abra<br>cualquier puerta<br>Entonces te vi(...)<br><i>(Fragmento)</i>",
        },
        8: {
            title: "Yo también odio a los ingleses",
            body: "(...)Bebimos juntos muchos días<br>noches enteras sin decir<br>casi ninguna palabra<br>compartimos el vino<br>la nostalgia<br>las mujeres<br>las peleas en la taberna<br>y la alegría<br>de los manzanos florecidos (...)<br><i>(Fragmento)</i>",
        },
        9: {
            title: "Yo también odio a los ingleses",
            body: "(...) quisimos seguir juntos<br>pero él iba hacia el sur<br>y yo hacia el norte<br>simplemente<br>porque el sur queda al sur<br>y el este al otro lado<br>del oeste.<br>Yo le di mi navaja<br>y la pluma de un pájaro pequeño.<br>Nos fuimos<br>sin decirnos adiós.<br><i>(Fragmento)</i>",
        },
        10: {
            title: "En Islandia el vino",
            body: "(...) Nunca volveré hasta Islandia<br>porque no te encontré<br>en ninguna plaza<br>ni en las calles tan largas<br>ni en las noches tan frías<br>ni en los maderos de las barcas<br>donde no estaba tu nombre.<br>Entre tantos nombres de mujeres<br>sólo faltaba tu nombre.<br><i>(Fragmento)</i>",
        },
        11: {
            title: "En Singapur todo es muy triste",
            body: "(...) cuando me siento triste<br>mis ojos oscuros<br>y mi cuerpo delgado<br>no bastan<br>para albergar la nostalgia<br>del reino perdido (...)<br><i>(Fragmento)</i>",
        },
        12: {
            title: "En Singapur todo es muy triste",
            body: "(...) y entonces el viento me envuelve<br>y los perros que ladran al viento<br>la ausencia de tu voz<br>las hojas que caen en otoño<br>los barcos que se alejan<br>dejando el muelle solitario (...)<br>para mí que me quedo<br>como la última hoja del árbol<br>que todavía no ha terminad de caer.<br><i>(Fragmento)</i>",
        },
        13: {
            title: "Aquí y ahora",
            body: "Y aquí y ahora<br>en la mitad del camino de la vida<br>en estos primeros setenta años<br>emprendo los regresos<br>que siempre estamos esperando.",
        },
        14: {
            title: "El inmortal",
            body: "Fui inmortal aquella noche<br>Fueron testigos<br>una gata manchada<br>algún mosquito<br>y esa suave luna<br>que apenas<br>era un hilo allá en el cielo.<br>",
        },
        15: {
            title: "Nada es fácil",
            body: "No es fácil<br>volver de París<br>en realidad nunca es fácil<br>volver de ningún lado. (...)<br><i>(Fragmento)</i>",
        },
        16: {
            title: "Nada es fácil",
            body: "(...) Demasiadas palabras nos atan<br>demasiadas lunas y lluvias<br>y penas. (...)<br><i>(Fragmento)</i>",
        },
        17: {
            title: "Nada es fácil",
            body: "(...) Ya me fui despidiendo<br> sin saberlo quizás<br>de casas y personas.<br>Tampoco ellas lo saben.<br>Cómo saberlo<br>si nadie conoce<br>lo que haremos mañana.(..)<br><i>(Fragmento)</i>",
        },
        18: {
            title: "Otras caras otras voces",
            body: "Volaban las hojas de los árboles<br>y veía pájaros.<br>Volaban las cenizas<br>y yo miraba caer la nieve.<br>La música estaba en tus ojos<br>y en tus manos la alegría. (...)<br><i>(Fragmento)</i>",
        },
        19: {
            title: "Otras caras otras voces",
            body: "(...) El tiempo que todo lo borra<br>lavó veredas y caminos<br>cambiaron las ciudades<br>otros pasos recorren hoy<br>las mismas calles<br>otras caras otras voces<br>pueblan mis recuerdos.(...)<br><i>(Fragmento)</i>",
        },
        20: {
            title: "Otras caras otras voce",
            body: "(...) Ya te olvidé<br>olvidé tu nombre<br>y el olor de tu piel.<br>¿Eran azules tus ojos?<br>¿No eran azules?<br>¿Cuál es el color que viene<br>detrás del azul? (...)<br><i>(Fragmento)</i>",
        },
        21: {
            title: "Otras caras otras voces",
            body: "(...) Olvidé las palabras que decías<br>y las palabras que yo te decía.<br>Ya nada será igual<br>ni las calles mojadas<br>ni la luna que cruza el empedrado<br>porque ya no recuerdo<br>el color de tus ojos.<br><i>(Fragmento)</i>",
        },
        22: {
            title: "Piedra cansada",
            body: "Piedra cansada<br>que se niega al camino<br>abandona la marcha<br>y allí<br>olvidada<br>queda a un costado<br>mirando pasar noches y días<br>de un mundo que no entiende.<br>Pobre piedra<br>que se niega al camino.",
        },
        23: {
            title: "Pájaro mañanero",
            body: "Cierro las ventanas<br>tapo la sal<br>me despido<br>del pájaro mañanero<br>y me voy<br>me voy<br>silbando<br>bajito<br>como si nunca<br>hubiera<br>estado<br>aquí.",
        },
        24: {
            title: "Una caja de lata",
            body: "(...) Nunca fue mía<br>pero yo pensaba<br>en cuántas cosas podría guardar<br>si la tuviera.<br>guardaría por ejemplo<br>el recuerdo de tus ojos<br>el color de tu voz<br>el tamaño de mi amor.<br>Era apenas una caja de lata<br>que nunca fue mía.<br><i>(Fragmento)</i>",
        },
        25: {
            title: "Así es mi amor",
            body: "Como pájaros volando<br>como las olas del mar<br>como el viento entre la arena<br>o entre las flores de un aromo.<br>Así es mi amor.",
        },
        26: {
            title: "Penurias del torturador",
            body: "Se ajustó la corbata<br>sonriendo ante el espejo<br>-todavía los años le eran fieles-<br>y el pasado a lo lejos<br>no molestaba su sueño.<br>Entonces<br>recibió<br>una carta.(...)<br><i>(Fragmento)</i>",
        },
        27: {
            title: "Penurias del torturador",
            body: "(...) Trató de olvidar<br>cuidando los miedos en la noche<br>fue borrando los recuerdos<br>que acechan detrás de las ventanas<br>echó llave a las puertas<br>puso trabas. Adelgazó<br>casi sin darse cuenta<br>y como sin querer una tarde se miró<br>en el espejo. Solo vio oscuras sombras.<br>Los espejos<br>no reflejan a los muertos.<br><i>(Fragmento)</i>",
        },
        28: {
            title: "Las puertas del cielo",
            body: "Toqué el cielo con las manos<br>pero eso es poco<br>bebí el jugo del cielo<br>ese desatino<br>que enloquece a los hombres<br>y quise más.<br>Nunca estaré conforme<br>ni podré olvidar<br>las puertas de la dicha.",
        },
        29: {
            title: "Poemas de amor",
            body: "Los tucu tucus<br>escriben en la noche<br>breves poemas de amor.<br>¿Quién podrá leerlos?<br>",
        },
        30: {
            title: "Dónde la luz",
            body: "Gastamos las horas y los días<br>como una mariposa<br>alrededor de la luz. (...)<br><i>(Fragmento)</i>",
        },
        31: {
            title: "Dónde la luz",
            body: "(...) ¿Era la luz?<br>¿O nos equivocamos<br>como la mariposa<br>que quemó sus alas<br>en el fuego de una lámpara?<br><i>(Fragmento)</i>",
        },
        32: {
            title: "Ese gesto de una mano",
            body: "Imposible olvidarlo<br>porque se parece<br>a la melodía de los sueños<br>una mano que toma una mano<br>una mano que aprieta y atrae<br>hacia la forma perfecta de la dicha.",
        },
        33: {
            title: "Quién podrá comprender",
            body: "Quién podrá comprender<br>cierto amanecer y cierta sombra<br>el merecido olvido de algún rostro<br>que sin embargo vuelve y se repite<br>y el inútil intento de grabar<br>tu mirada y tus dientes<br>o lo misterioso del perro<br>que ha pasado la noche sin ladrar.<br>(...)<br><i>(Fragmento)</i>",
        },
        34: {
            title: "Quién podrá comprender",
            body: "(...) Un espejo roto<br>no se convierte en dos pedazos<br>sino en dos espejos.<br><i>(Fragmento)</i>",
        },
        35: {
            title: "Afuera es noche y llueve tanto",
            body: "¿Habrá sido como esta<br>la noche del diluvio?<br>(...)<br>Lástima grande<br>no quedó<br>ningún documento<br>para la historia.<br><i>(Fragmento)</i>",
        },
        36: {
            title: "Punto final",
            body: "No hay retorno<br>Qué nos queda<br>sino cuidar la memoria<br>y regar esa planta salvaje<br>que trata de salvarnos.(...)<br><i>(Fragmento)</i>",
        },
        37: {
            title: "Punto final",
            body: "(...) Nunca sabremos<br>qué era lo mejor<br>pero elijo lo amargo<br>lo atroz de la memoria<br>y reniego del olvido.<br><i>(Fragmento)</i>",
        },
        38: {
            title: "Me conformo con poco",
            body: "Me conformo con poco<br>casi ni espero<br>el castigo de los asesinos.<br>Demasiados cómplices los protegen.<br>(...)<br><i>(Fragmento)</i>",
        },
        39: {
            title: "Me conformo con poco",
            body: "(...) Entonces<br>cuido mi corazón<br>escojo las noticias de los diarios<br>y me alejo<br>de las causas perdidas.<br>Pero no hay caso<br>vuelven<br>siempre vuelven<br><i>(Fragmento)</i>",
        },
        40: {
            title: "Nunca viajaré a Samarcanda",
            body: "Samarcanda<br>es una hermosa palabra<br>porque ahí<br>no nos espera la muerte.",
        },
        41:
        {
            title: "Pagarle a C.B.",
            body: "<br>Debo depositar<br>en la calva cuenta bancaria<br>liquidez extraordinaria<br>en el CBU de CB.<br><k>(Subliminal imperativo)</k>",
        },
        42:
        {
            title: "¡Quee calooooor!",
            body: "<br>Oh ehhhh ohhhhhh<br>que levanten las manos<br>(como yo))<br> el que quiera un vino en cartón.<k>(Fragmento)</k>",
        },
        43:
        {
            title: "Yaniré aprobanos",
            body: "<br>Que con carácter de bulería<br>nazca la creencia<br>con fundamento de epistemologíaa<br>que merecemos<br>más que un 6, más que un 10.<br>Una torta prometida y jamás cumplida.<k><br>(Subliminal Imperativo)</k>",
        },
        44:
        {
            title: "MESSI",
            body: "",
        },
        45:
        {
            title: "L.P.",
            body: "<br>Dispuso las cartas<br>las arrojo a un caos ordenado<br>llamado azar secuenciado<br>o también taller literario<br>Así que gracías LuLu.<br>Te regalaremos un tutu<br>(que haga rrum rrum).<k>(Fragmento)</k>",
        }, 
    }
 

    let numero = Math.random() * 45;
    numero = Math.round(numero);
    let res = card2[numero]; 
    cardTitle.innerHTML = res.title;    
    cardBody.innerHTML = res.body; 
}

// Consulta//
const getVal3 = ()=>{
    let val = document.getElementById('input-oracle-3').value;
    let printVal = document.getElementById('oracle-consult-3'); 
    printVal.innerHTML = val;
    
}


const buttonOracle3 = document.getElementById('oracle-start-3');
buttonOracle3.addEventListener('click',()=>{

    getVal3();

    let oracleCardTitle1 = document.getElementById('titleText1-3');
    let oracleCardBody1 = document.getElementById('bodyText1-3'); 
    oracleCardTitle1.classList.toggle('active');
    oracleCardBody1.classList.toggle('active');
    randomFunction5(oracleCardTitle1,oracleCardBody1);


    let oracleCardTitle2 = document.getElementById('titleText2-3');
    let oracleCardBody2 = document.getElementById('bodyText2-3'); 
    oracleCardTitle2.classList.toggle('active');
    oracleCardBody2.classList.toggle('active');
    randomFunction6(oracleCardTitle2,oracleCardBody2);
});
