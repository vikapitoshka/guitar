var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-300);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}

function content1(){
	var content = document.getElementById("din_text"); 
	content.innerHTML = "<h2>Электрогитары</h2>\
	<h3>Бас-гитара</h3>\
	<p>Бас-гитара (также называемая электрической бас-гитарой или просто басом) — струнно-щипковый музыкальный инструмент, предназначенный для игры в басовом диапазоне. На нём играют преимущественно пальцами, но допустима и игра медиатором. В сочетании с ударной установкой создаёт ритм-секцию.</p>\
	<p>Бас-гитара является подвидом контрабаса, но имеет менее массивный корпус и гриф, а также меньшую мензуру. В основном на бас-гитаре используют 4 струны, но существуют варианты и c бо́льшим количеством. 4-струнная бас-гитара настраивается по квартам от ми контроктавы, в унисон с контрабасом, и на одну октаву ниже, чем строй 4 верхних струн электрогитары. Как в случае с электрогитарой, для бас-гитары требуется подключение к усилителю для игры.</p>\
	<p>Начиная со своего появления в 1950-х годах, бас-гитара практически полностью заменила контрабас в поп-музыке как инструмент ритм-секции. Помимо этого, бас-гитара стала важным элементом большинства современных музыкальных жанров, причём в каждом из них может быть отдельная техника исполнения, строй и количество струн.</p>\
	<p>Так же существуют безладовые басы, они обладают особенным звучанием, потому что из-за отсутствия ладов струну приходится прижимать прямо к поверхности накладки. Струна, касаясь грифа, издает дребезжащий звук «муа», напоминая звучание контрабаса с использованием техники пиццикато.</p>\
	<p>Безладовый бас позволяет басисту использовать такие музыкальные приемы, как глиссандо, вибрато, а также игру в неравномерной темперации и микротоновые интервалы. Некоторые бас-гитаристы используют на своих выступлениях как ладовый, так и безладовый басы в соответствии с композициями, которые они исполняют. Несмотря на то, что безладовый бас чаще используется в джазе и его разновидностях, на нём также играют и музыканты других направлений.</p>\
	<p class='center'><img src = '../images/11.jpg'; /></p>\
	<h3>Stratocaster</h3>\
	<p>конфигурация, разработанная фирмой Fender, являющаяся наиболее популярной. Округлая дека с двумя «рогами» в ее начале, колки на головке грифа в форме «пера» расположены в один ряд.</p>\
	<p class='center'><img src = '../images/1.jpg'; /></p>\
	<h3>Les Paul</h3>\
	<p>это форма гитары, предложенная фирмой Gibson. Они также выполнены округлыми, но с одним «рогом», находящимся под грифом, где также находится вырез. Их колки, как и у акустических гитар, расположены в два ряда.</p>\
	<p class='center'><img src = '../images/2.jpg'; /></p>\
	<h3>Telecaster</h3>\
	<p>также разработана фирмой Fender и похожа на Stratocaster, но с одним «рогом» под грифом. В остальном напоминает его.</p>\
	<p class='center'><img src = '../images/3.jpg'; /></p>\
	<h3>Flying V</h3>\
	<p>– «летящая V», форма деки – перевернутая буква V. Весьма популярна среди рок-музыкантов.</p>\
	<p class='center'><img src = '../images/4.jpg'; /></p>";	
	
}

function content2(){
	var content = document.getElementById("din_text"); 
	content.innerHTML = "<h2>Акустические гитары</h2> \
	<p>Акусти́ческая гита́ра — струнный щипковый музыкальный инструмент (в большинстве разновидностей с шестью струнами) из семейства гитар, звучание которого осуществляется благодаря колебанию струн, усиливаемому за счет резонирования полого корпуса. Современные акустические гитары могут иметь встроенные звукосниматели: магнитные или пьезоэлектрические, с эквалайзером и регулятором громкости.</p>\
	<p>Акустическая гитара является основным инструментом таких жанров, как авторская песня, фолк, занимает важное место в цыганской и кубинской народной музыке, роке, блюзе и других жанрах.</p><p>Название «Акустическая» может трактоваться двояко: с одной стороны, оно означает способ звукоусиления резонирующим корпусом инструмента, без использования электричества; с другой — отдельный класс гитар с металлическими струнами и корпусами типа Дредноут, Фолк и Джамбо.</p>\
	<h3>Классическая гитара</h3>\
	<p>Классическая (испанская, шестистру́нная) гита́ра — струнный щипковый музыкальный инструмент. Основной представитель семейства гитар вообще и акустических гитар в частности. В современном виде существует со второй половины XVIII века, используется как сольный, ансамблевый и аккомпанирующий инструмент. Гитара обладает большими художественно-исполнительскими возможностями и широким разнообразием тембров.</p>\
	<p class='center'><img src = '../images/7.jpeg'; /></p>\
	<h3>Русская семиструнная гитара</h3>\
	<p>Была распространена в России в XIX—XX веках. Широко использовалась в качестве аккомпанирующего инструмента при исполнении русских романсов. В конце XX века началось её активное вытеснение шестиструнной гитарой и в настоящее время семиструнная гитара не имеет прежней популярности.</p>\
	<p class='center'><img src = '../images/8.png'; /></p>\
	<h3>Дредноут</h3>\
	<p>Дредноут (англ. dreadnought) — вид акустических гитар, отличающийся увеличенным корпусом характерной «прямоугольной» формы. По сравнению с классическим корпусом обладает повышенной громкостью и преобладанием низких частот в тембре. Разработан в 1920-х годах фирмой «Мартин» и до сих пор считается стандартом в гитаростроении.</p>\
	<p class='center'><img src = '../images/9.jpg'; /></p>\
	<h3>Джамбо</h3>\
	<p>Джа́мбо (англ. Jumbo — громадина, великан; от имени знаменитого циркового слона) — тип акустической или электроакустической гитары: инструмент со стальными струнами, большим корпусом, плоской верхней декой и округлыми линиями обвода. Гитары типа джамбо широко распространены среди кантри-гитаристов. Джамбо вместе с дредноутами образуют класс так называемых вестерн-гитар. Одна из наиболее известных гитар джамбо — модель Gibson J-200[en], выпускаемая с 1937 года.</p>\
	<p class='center'><img src = '../images/10.jpg'; /></p>";
}

function content3(){
	var content = document.getElementById("din_text"); 
	content.innerHTML = "<h2>Электроакустические гитары</h2>\
	<p>Данная разновидность акустической гитары, дополненная пьезоэлектрическим звукоснимателем внутри корпуса, позволяет усилить воспроизведение звука и добавить к нему постэффекты при подключении к звукоусиливающему прибору.</p>\
	<p>Конструкция отличается от полуакустической электрогитары, которая является видом электрической гитары с добавлением акустического резонатора внутри полого корпуса гитары. Как правило, электроакустические гитары оснащены пьезо-датчиками, и следовательно, требуют предусилитель, впаянный в тело гитары для усиления сигнала, прежде чем он идёт в главный гитарный усилитель. Эти предусилители могут также поставляются с регуляторами тембра различного типа, однако обычно используется эквалайзер, использующий до шести полос разных частот.</p>";	
<<<<<<< HEAD:scripts/script.js
}
=======
}




>>>>>>> origin/gh-pages:script.js
