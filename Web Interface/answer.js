//answer
	var chainAnswerHandlingStabilizer = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Stabilizer </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Apply Stabilizer </button>"+
								"</center></div></div><br/>";
	var answerHandlingStabilizer = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Apply fullset stabilizer on your car </h2><br/><img src='picture/stabilizer.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
						+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Stabilizer balance the body to sway much, it helps keeping traction on all side of tyre. </p>"
						+ "<h3>Drawbacks : </h3>"
						+" <p> Lower arm bar makes your car tend to hit sharp bumper.</p>"
						+ "<h3>Bonus : </h3>"
						+" <p> In road accident stabilizer gives you extra protection,its like you have another layer on the chassis.</p></div></div>";

var chainAnswerHandlingSteering ="<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Stabilizer </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Change steering </button>"+
								"</center></div></div><br/>";
var answerHandlingSteering = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your steering wheel to smaller size </h2><br/><img src='picture/steering.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
						+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Smaller steering make it easier tu turn and gives you more grip. </p>"
						+ " <p> it helps keeping traction on all side of tyre. </p>"
						+ "<h3>Drawbacks : </h3>"
						+" <p>Most of smaller steering wheel doesnt have frame cover on the centre,</p>"
						+" <p>the steel frame can be very hot during hot days.</p></div></div>";

var handlingTyre1= "<center><h2>Do you wamt to use your car for track ? </h2> "
			+ "<button class = 'normal' id ='hpYes'> Yes </button> + <button class = 'normal' id ='hpNo'> No </button>"
			+"</center>";

var handlingTyre2= " <center><h2> Do you use your car specifically on wet weather ? </h2> "
			+ "<button class = 'normal' id='wet-tyre-yes'> Yes </button> + <button class = 'normal' id='wet-tyre-no'> No </button>"
			+"</center>";
var handlingTyre3= "<div class ='level-handling-4' id = 'level-handling-4'> <center><h2> Do you use your car specifically on dry weather ? </h2> "
			+ "<button class = 'normal' id='dry-tyre-yes'> Yes </button> + <button class = 'normal' id='dry-tyre-no'> No </button>"
			+"</center></div>";

var chainAnswerHandlingTyreHP ="<div class = 'chain-container'><div><center>"+
								"<button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Tyre </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> High Performance Tyre [yes] </button>"+
								"</center></div></div><br/>";
var answerHandlingTyreHP = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change to high Performance tyre </h2><br/><img src='picture/hp-tyre.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
						+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> In handling , tyres play major roles in keeping traction on the road. </p>"
						+ " <p> High performance is best use for tracks. It has strong grip and durable for acceleration</p>"
						+ "<h3>Drawbacks : </h3>"
						+" <p>Very expensive and wear out easily if used on normal roads.</p></div></div>";

var chainAnswerHandlingTyreWet ="<div class = 'chain-container'><div><center>"+
								"<button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Tyre </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Track [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Wet Tyre [yes] </button>"+
								"</center></div></div><br/>";
var answerHandlingTyreWet = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your tyre to wet traction type</h2><br/><img src='picture/wet-tyre.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
						+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> In handling , tyres play major roles in keeping traction on the road. </p>"
						+ " <p> Wet type suits best if you dont use your car in dry road.</p>"
						+ "<h3>Drawbacks : </h3>"
						+" <p>Perform poorly in other weather.</p>";
var chainAnswerHandlingTyreDry ="<div class = 'chain-container'><div><center>"+
								"<button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Tyre </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Track [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Wet [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Dry Tyre [yes] </button>"+
								"</center></div></div><br/>";
var answerHandlingTyreDry = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your tyre to dry traction type</h2><br/><img src='picture/dry-tyre.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
						+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> In handling , tyres play major roles in keeping traction on the road. </p>"
						+ " <p>Dry type suits best if you dont use your car in wet road.</p>"
						+ "<h3>Drawbacks : </h3>"
						+" <p>Perform poorly in other weather.</p>";
var chainAnswerHandlingTyreAll ="<div class = 'chain-container'><div><center>"+
								"<button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Tyre </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Track [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Wet [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Dry [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> All season [yes] </button>"+
								"</center></div></div><br/>";
var answerHandlingTyreAll = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change tyre to all season type</h2><br/><img src='picture/all-season.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
						+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Since you dont have any specific area in use of your car,</p>"
						+ " <p>its best to have all season tyre type for daily use</p>";
var handlingSuspension1= "<center><h2>Do you have adjustable suspension ? </h2> "
			+ "<button class = 'normal' id ='handlingAdjustableYes'> Yes </button> + <button class = 'normal' id ='handlingAdjustableNo'> No </button>"
			+"</center>";
//answer
	var chainAnswerHandlingSuspensionAdj = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Suspension </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Adjustable [yes] </button>"+
								"</center></div></div><br/>";
	var answerHandlingSuspensionAdj = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Adjust your suspension to lower your car </h2><br/><img src='picture/no-adjustable.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
						+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Since your care already have adjustable suspension, </p>"
						+" <p> you only need the mechanic to lower it, minimal cost. Charges only for services </p>"
						+" <p> Lowered car are much more easy to handle.</p>"
						+" <p> The closer the car body to centre gravity, the less they sway. </p>"						
						+ "<h3>Drawbacks : </h3>"
						+" <p> Driving tend to be more stiff or bumpy.</p>";

	var chainAnswerHandlingSuspension = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Suspension </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Adjustable [no] </button>"+
								"</center></div></div><br/>";
	var answerHandlingSuspension= "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your suspension to adjustable and lower your car </h2><br/><img src='picture/adjustable-suspension.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Since you dont have adjustable suspension, you need to install one, </p>"
						+" <p> Adjustable suspension allows you to lower your car.</p>"
						+" <p> Lowered car are much more easy to handle.</p>"
						+" <p> The closer the car body to centre gravity, the less they sway. </p>"						
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Changing to adjustable can be a bit pricey.</p>"
						+" <p> Driving tend to be more stiff or bumpy.</p></div></div>";
//handling rim
var handlingRim1 = "<center><h2> Are you using factory rim ? </h2> "
			+ "<button class = 'normal' id ='handlingFacRimYes'> Yes </button> + <button class = 'normal' id ='handlingFacRimNo'> No </button>"
			+"</center>";
var handlingRim2 = "<center><h2> Is your rim original type ? </h2> "
			+ "<button class = 'normal' id ='handlingOriRimYes'> Yes </button> + <button class = 'normal' id ='handlingOriRimNo'> No </button>"
			+"</center>";
//answer
	var chainAnswerHandlingSport = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Rims </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Factory[yes] </button>"+
								"</center></div></div><br/>";
	var answerHandlingSport= "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your rim to sport rim </h2><br/><img src='picture/local-rim.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Factory rims are made to meet the budget. Most of it are heavy., </p>"
						+" <p> Changing to sport rim reduce the weight even the size increased. </p>"
						+" <p> Bigger size rim improve car's alignmen.</p>"					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Some cars need to adjust their fenders to fit sport rim</p></div></div>";

	var chainAnswerHandlingOri = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Rims </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Factory [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Local [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Lighter Rim [yes] </button>"+
								"</center></div></div><br/>";
	var answerHandlingOri= "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change  your rim to lighter one if available</h2><br/><img src='picture/light-rim.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Every rim has different weights, </p>"
						+" <p> If you have the money , you can get the best among the best. That is the lightest</p>"
						+" <p> It might be minimal but it does improve handling.</p>"					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Even finding original sport rim is hard, locating the lighter one can be challenging.</p></div></div>";
	var chainAnswerHandlingLocal = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Handling </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Rims </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Factory [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Local [yes]</button>"+
								"</center></div></div><br/>";
	var answerHandlingLocal= "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your rim to an original sport rim</h2><br/><img src='picture/ori-rim.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Local rims usually only gives you the looks. Orginal rim are way more lighter and durable. </p>"
						+" <p> It can be lift by only 2 finger.</p>"
						+" <p> It might be minimal but it does improve handling.</p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Orignal rim is hard to find and its a bit pricey.</p></div></div>";
//speed answer
	var chainSpeedAeroHB = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Aero Dynamic </button></center></div></div><br/>";
	var answerSpeedAeroHB= "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Modify chassis </h2><br/><img src='picture/chassis-mod.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Usually for hatchback mechanic will modify chassis by putting holes on the rear. </p>"
						+" <p> What it does is it allows air flow more efficiently through the lower parts of the car.</p>"
						+" <p> The effect will be significant in enhancing top speed. </p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Once you drill it , there is no turning back.</p></div></div>";
	var chainSpeedAeroSedan = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Aero Dynamic </button></center></div></div><br/>";
	var answerSpeedAeroSedan = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install a sport spoiler </h2><br/><img src='picture/sport-spoiler.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Sport spoiler makes your car able to cut the wind more effectively. </p>"
						+" <p> The effect will be significant in enhancing top speed. </p>"
						+" <p> It might be minimal but it does improve handling.</p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> For some people it doesnt look good . But that's only preferences.</p></div></div>";
var spdEngine1 = "<center><h2> Select ways to upgrade engine </h2> "
			+ "<button class = 'normal' id ='swap'> Swap </button>  <button class = 'normal' id ='upgrade'> Upgrade </button>"
			+"</center>";
var spdEngineSwap = "<center><h2> Do you want to swap halfcut ? </h2> "
			+ "<button class = 'normal' id ='HCYes'> Yes </button>  <button class = 'normal' id ='HCNo'> No </button>"

var spdEngine2 = "<center><h2> Do you want to install turbo ? </h2> "
			+ "<button class = 'normal' id ='spdTurboYes'> Yes </button>  <button class = 'normal' id ='spdTurboNo'> No </button>"
			+"</center>";
var spdEngine3 = "<center><h2> Do you want to install supercharger </h2> "
			+ "<button class = 'normal' id ='spdChgYes'> Yes </button>  <button class = 'normal' id ='spdChgNo'> No </button>"
			+"</center>";
var spdEngine4 = "<center><h2> Change your car setting using management tools ? </h2> "
			+ "<button class = 'normal' id ='spdMgtYes'> Yes </button>  <button class = 'normal' id ='spdMgtNo'> No </button>"
			+"</center>";

	var chainSpeedEngSwapHC = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Swap Halfcut [yes] </button></center></div></div><br/>";
	var answerSpeedEngSwapHC = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Swap halfcut set </h2><br/><img src='picture/halfcut.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Halfcut is the whole parts starting from the middle of the car till the end of the front. </p>"
						+" <p> In terms of speed it always depends on what engine you pick. </p>"
						+" <p> The good things about half cut is you dont have to worry about missing parts, it comes with complete set.</p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> If you try engine that no one ever done before, it can cause compatibility issues such as , exhaust system. </p></div></div>";
	var chainSpeedEngSwapEK = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Swap Engine Kite [no] </button></center></div></div><br/>";
	var answerSpeedEngSwapEK = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Swap engine only by engine kit </h2><br/><img src='picture/engine-kit.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Engine kit means you only swap the engine not including the wiring and stuff. </p>"
						+" <p> In terms of speed it always depends on what engine you pick. </p>"
						+" <p> Its more cheaper than halfcut but more jobs need to be done afterward.</p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> If you try engine that no one ever done before, it can cause compatibility issues such as , exhaust system</p>"+
						+" <p> And if the mechanic dont have the parts to assemble, its going to take some time.</p></div></div>";

	var chainSpeedTurbo = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Upgrade  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Turbo [Yes] </button></center></div></div><br/>";
	var answerSpeedTurbo = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install turbo on your engine </h2><br/><img src='picture/turbo.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Turbo is more efficient compare to supercharger. </p>"
						+" <p> It uses the exhaust gas to drive a turbine meaning more energy per second done. </p>"
						+" <p> More energy means more speed.</p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Consume alot of fuel. </p></div></div>";

	var chainSpeedSuper = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Upgrade  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Turbo [No]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Supercharger [Yes] </button></center></div></div><br/>";
	var answerSpeedSuper = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Equip supercharger on your engine </h2><br/><img src='picture/supercharger.png'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Supercharger attach to your engine and spins with the crankshaft. </p>"
						+" <p> It forces air into the motor thus improve the combustion. </p>"
						+" <p> More energy means more speed.</p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> It stress the engine, Long term usage can cause damage.</p></div></div>";

	var chainSpeedMgt = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Upgrade  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Turbo [No]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Supercharger [No]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Management Tools [Yes] </button></center></div></div><br/>";
	var answerSpeedMgt = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Optimize engine settings using management kit</h2><br/><img src='picture/management.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> With management kit mechanic can set the engine to be more optimal. </p>"
						+" <p> One thing can be done is optimizing the combustion that would enhance the speed dramatically.</p>"			
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Wrong settings can damage your engine.</p>"
						+" <p> Most mechanic wont do this especially to new car.</p></div></div>";
	var chainSpeedCarburetor = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Upgrade  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Turbo [No]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Supercharger [No]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Carburetor settings [Yes] </button></center></div></div><br/>";
	var answerSpeedCarburetor = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Equip supercharger on your engine </h2><br/><img src='picture/carburetor-settings.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Without management kit mechanic have to do settings manually. </p>"
						+" <p>Optimizing the combustion can enhance the speed dramatically/ </p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Wrong settings can damage your engine.</p>"
						+" <p> Most mechanic wont do this especially to new car.</p></div></div>";	

var spdTransm1 = "<center><h2> Select transmission you currently use. </h2>"
			+ "<button class = 'normal' id ='autoT'> Auto </button>  <button class = 'normal' id ='manualT'> Manual </button>"
			+"</center>";
var spdTransm2 = "<center><h2> Are you wearing factory transmission ? </h2> "
			+ "<button class = 'normal' id ='factTransYes'> Yes </button>  <button class = 'normal' id ='factTransNo'> No </button>"
			+"</center>";
var spdTransm3 = "<center><h2> Choose type of speed desire.</h2> "
			+ "<button class = 'normal' id ='shortgear'> Acceleration </button>  <button class = 'normal' id ='longgear'> Top speed </button>"
			+"</center>";
	var chainSpeedPerformanceT = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Transmission </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Manual [yes]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Factory [no]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Change to performance transmission </button></center></div></div><br/>";
	var answerSpeedPerformanceT = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your transmission type to high performance transimission </h2><br/><img src='picture/performance-transmission.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> High performance gives smoother gear transition and more horsepower </p>"	
	var chainSpeedManual = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Transmission </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Auto [yes]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Change to manual </button></center></div></div><br/>";
	var answerSpeedManual = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your transmission to manual </h2><br/><img src='picture/manual-gear.png'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Manual transimission gives more accelerations and top speed. </p>"	
						+" <p> It gives you the ability  to maximize speed in each gear. </p>"		
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Requires skill and can be very tiring in heavy traffic. </p></div></div>";		
	var chainSpeedLong = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Transmission </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Manual  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Factory [No]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Long gear [Yes] </button></center></div></div><br/>";
	var answerSpeedLong = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your transmission type to long-gear </h2><br/><img src='picture/long-gear.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Long gear gives you more speed in topspeed. </p>"			
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Reduce accelerations.</p></div></div>";	
	var chainSpeedShort = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Transmission </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Manual  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Factory [No]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Short gear [Yes] </button></center></div></div><br/>";
	
	var answerSpeedShort= "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your transmission type to short-gear </h2><br/><img src='picture/short-gear.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Short gear gives you more speed in accelerations. </p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Reduce topspeed. Consume lot of fuel</p></div></div>";	

var spdExhaust1 = "<center><h2> Do you have modified engine ? </h2> "
			+ "<button class = 'normal' id ='engModYes'> Yes </button>  <button class = 'normal' id ='engModNo'> No </button>"
			+"</center>";
	var chainSpeedTExhaust = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Exhaust </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Modified Engine [Yes]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Titanium Exhaust [Yes] </button></center></div></div><br/>";
	
	var answerSpeedTExhaust= "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install titanium exhaust </h2><br/><img src='picture/titanium-exhaust.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Titanium exhaust is needed for modified engine. </p>"
						+" <p> For example for boxxer type engine, if use normal exhaust can damage the engine and the exhaust. </p>"
						+" <p> Exhaust plays role in managing the outflow of air combustion from the engine </p>";

	var chainSpeedBExhaust = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Exhaust </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Modified Engine [No]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Bigger Exhaust [Yes] </button></center></div></div><br/>";
	
	var answerSpeedBExhaust= "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install titanium exhaust </h2><br/><img src='picture/bigger-exhaust.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Bigger exhaust means more efficient path for gases to escape. </p>"
						+" <p> This means your engine breathes better thus affects the speed </p>"
						+ "<h3>Drawbacks : </h3>"
						+" <p> It will become very noisy.</p></div></div>";
//suspension speed
var spdSusp1 = "<center><h2> Do you have adjustable suspension? </h2> "
			+ "<button class = 'normal' id ='speedAdjYes'> Yes </button>  <button class = 'normal' id ='speedAdjNo'> No </button>"
			+"</center>";
	var chainSpeedSusAdj= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Suspension </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Adjustable Suspension [Yes]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Lower Car </button></center></div></div><br/>";
	
	var answerSpeedSusAdj = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Adjust your suspension to lower your car </h2><br/><img src='picture/no-adjustable.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Since your care already have adjustable suspension, </p>"
						+" <p> you only need the mechanic to lower it, minimal cost. </p>"
						+" <p> Charges only for services </p>"
						+" <p> Lowered car are much more aero dynamic.</p>"
						+" <p> The closer the car body to centre gravity, the better they cut wind.</p>"
						+ "<h3>Drawbacks : </h3>"
						+" <p> Driving tend to be more stiff or bumpy.</p></div></div>";


	var chainSpeedSusAdjNo = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Suspension </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Adjustable Suspension [No]  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Install Adjustable and lower car </button></center></div></div><br/>";
	
	var answerSpeedSusAdjNo = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Adjust your suspension to lower your car </h2><br/><img src='picture/adjustable-suspension.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> SSince you dont have adjustable suspension, you need to install one </p>"
						+" <p> Adjustable suspension allows you to lower your car. </p>"
						+" <p> Lowered car are much more aero dynamic.</p>"
						+" <p> The closer the car body to centre gravity, the better they cut wind.</p>"
						+ "<h3>Drawbacks : </h3>"
						+" <p> Driving tend to be more stiff or bumpy.</p></div></div>";




var speedRim1 = "<center><h2> Are you using factory rim ? </h2> "
			+ "<button class = 'normal' id ='spdFacRimYes'> Yes </button> + <button class = 'normal' id ='spdFacRimNo'> No </button>"
			+"</center>";
var speedRim2 = "<center><h2> Is your rim original type ? </h2> "
			+ "<button class = 'normal' id ='spdOriRimYes'> Yes </button> + <button class = 'normal' id ='spdOriRimNo'> No </button>"
			+"</center>";
//answer
	var chainAnswerSpdSport = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Rims </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Factory[yes] </button>"+
								"</center></div></div><br/>";
	var answerSpdSport= "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your rim to sport rim </h2><br/><img src='picture/local-rim.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Factory rims are made to meet the budget. Most of it are heavy., </p>"
						+" <p> Changing to sport rim reduce the weight even the size increased. </p>"
						+" <p> Bigger size rim improve car's alignmen.</p>"					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Some cars need to adjust their fenders to fit sport rim</p></div></div>";

	var chainAnswerSpdOri = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Rims </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Factory [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Local [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Lighter Rim [yes] </button>"+
								"</center></div></div><br/>";
	var answerSpdOri= "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change  your rim to lighter one if available</h2><br/><img src='picture/light-rim.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Every rim has different weights, </p>"
						+" <p> If you have the money , you can get the best among the best. That is the lightest</p>"
						+" <p> It might be minimal but it does improve speed.</p>"					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Even finding original sport rim is hard, locating the lighter one can be challenging.</p></div></div>";
	var chainAnswerSpdLocal = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Speed </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Rims </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Factory [no] </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Local [yes]</button>"+
								"</center></div></div><br/>";
	var answerSpdLocal = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your rim to an original sport rim</h2><br/><img src='picture/ori-rim.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Local rims usually only gives you the looks. Orginal rim are way more lighter and durable. </p>"
						+" <p> It can be lift by only 2 finger.</p>"
						+" <p> It might be minimal but it does improve speed.</p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Orignal rim is hard to find and its a bit pricey.</p></div></div>";
	var chainAnswerSafeCarseat = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Safety </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Carseat </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Racing seat </button>"+
								"</center></div></div><br/>";
	var answersafetycarseat = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change to racing carseat </h2><br/><img src='picture/race-seat.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Racing car seat hold you body better with double seatbelt forming an X shape.</p>"			
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Most racing car seat are stiff and less comfortable.</p></div></div>";

	var chainAnswerSafeChassis = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Safety </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Carseat </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Rollcage </button>"+
								"</center></div></div><br/>";

	var answerSafeChassis = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install rollcage </h2><br/><img src='picture/rollcage.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Rollcage is usually used only for racing. </p>"
						+" <p> It prevent the body chassis from smashing your body during accident.</p>"			
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Highly uncomfortable , people only use it on special occasion.</p></div></div>";

var safetyWindow1 = "<center><h2> Do you want bulletproof safety ? </h2> "
			+ "<button class = 'normal' id ='safetyBulletYes'> Yes </button> + <button class = 'normal' id ='safetyBulletNo'> No </button>"
			+"</center>";

	var chainAnswerSafeBullet = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Safety </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Window </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Bulletproof Tinted </button>"+
								"</center></div></div><br/>";

	var answerSafeBullet = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Apply bulletproof tinted </h2><br/><img src='picture/tinted.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Bulletproof are special made tinted specifically design obviously for bullet proof.</p>"
						+" <p> It also function to hold the window from shatter during road accident.</p>"			
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Tinted are not reusable, it is best to get the one with UV protection to shade yourself from hot sun.</p></div></div>";

	var chainAnswerSafeThick = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Safety </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Window </button><img  class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Thick Tinted </button>"+
								"</center></div></div><br/>";

	var answerSafeThick = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Apply thick tinted </h2><br/><img src='picture/tinted.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Thick tinted is not as durable as bulletproof tinted , </p>"
						+" <p> But it should be enough to hold the window from shatter during road accident.</p>"			
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Tinted are not reusable, it is best to get the one with UV protection to shade yourself from hot sun.</p></div></div>";

	var chainAnswerSafeStabilizer = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Safety </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Stabilizer </button> "+
								"</center></div></div><br/>";

	var answerSafeStabilizer = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Apply fullset stabilizer to your car </h2><br/><img src='picture/fullset-stabilizer.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Stabilizer are steel bar bolted down on left and right of your car, </p>"
						+" <p> it function almost same as roll cage but less strength.</p>"	
						+" <p>If your car got hit (especially by side) it helps prevent your chassis from crash.</p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Lower arm bar makes your car tend to hit sharp bumper"
						+" <p>Bonus - It improves handling by keeping traction on all side of tyre.</p></div></div>";

var safetyLock1 = "<center><h2> Choose what you want to lock </h2> "
			+ "<button class = 'normal' id ='childLock'> Child </button> + <button class = 'normal' id ='gearLock'> Gear </button> + <button class = 'normal' id ='steeringLock'> Steering </button>"
			+"</center>";


	var chainAnswerSafeStabilizer = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Safety </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Stabilizer </button> "+
								"</center></div></div><br/>";

	var answerSafeStabilizer = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Apply fullset stabilizer to your car </h2><br/><img src='picture/fullset-stabilizer.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Stabilizer are steel bar bolted down on left and right of your car, </p>"
						+" <p> it function almost same as roll cage but less strength.</p>"	
						+" <p>If your car got hit (especially by side) it helps prevent your chassis from crash.</p>"				
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Lower arm bar makes your car tend to hit sharp bumper"
						+" <p>Bonus - It improves handling by keeping traction on all side of tyre.</p></div></div>";

	var chainAnswerChildLock = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Safety </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Lock </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Child Lock </button> "+
								"</center></div></div><br/>";

	var answerChildLock = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install child lock system </h2><br/><img src='picture/child-lock.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Child lock prevent kids from accidentally opening car door during driving.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Very annoying to grown ups passengers.</p></div></div>";
	
	var chainAnswerGearLock = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Safety </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Lock </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Gear Lock </button> "+
								"</center></div></div><br/>";

	var answerGearLock = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install gear lock system </h2><br/><img src='picture/gear-lock.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Gear lock prevent your car from being stole. </p>"
						+" <p> It prevents the gear stick movement.</p>"			
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Can cause hassle especially when you are in a hurry. It takes time to unlock.</p></div></div>";

	var chainSteeringLock = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Safety </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Lock </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Steering Lock </button> "+
								"</center></div></div><br/>";

	var answerSteeringLock = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install steering lock system </h2><br/><img src='picture/steering-lock.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Steering lock prevent your car from being stole.</p>"
						+" <p> It prevents the steering wheel movement.</p>"			
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Can cause hassle especially when you are in a hurry. It takes time to unlock.</p></div></div>";

var styleSporty = "<center><h2> Select parts to upgrade </h2> "
			+ "<button class = 'normal' id ='sporty-body'> Body Kit </button>" 
			+ "<button class = 'normal' id ='sporty-rim'> Rims </button>"
			+ "<button class = 'normal' id ='sporty-sticker'> Sticker </button>"
			+ "<button class = 'normal' id ='sporty-hood'> Car Hood </button>"
			+ "<button class = 'normal' id ='sporty-tint'> Window Tint </button>"
			+"</center>";
var sportyFullBody = "<center><h2> Do you want to buy fullset body kit ? </h2> "
			+ "<button class = 'normal' id ='fullbody-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='fullbody-no'> no </button>";
var sportyBody = "<center><h2> Select body part desire </h2> "
			+ "<button class = 'normal' id ='kit-front'> Front </button>" 
			+ "<button class = 'normal' id ='kit-rear'> Rear </button>"
			+ "<button class = 'normal' id ='kit-side'> Side </button>"
			+"</center>";
var styleAutoshow = "<center><h2> Select parts to upgrade </h2> "
			+ "<button class = 'normal' id ='autoshow-interior'> Interior decor </button>" 
			+ "<button class = 'normal' id ='autoshow-rim'> Rim </button>"
			+ "<button class = 'normal' id ='autoshow-lamp'> Body Lighting </button>"
			+ "<button class = 'normal' id ='autoshow-boot'> Car Boot </button>"
			+ "<button class = 'normal' id ='autoshow-engine'> Engine </button>"
			+ "<button class = 'normal' id ='autoshow-paint'> Paint </button>"
			+"</center>";

	var chainAnswerStyleFullBody = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Full </button> "+
								"</center></div></div><br/>";

	var answerStyleFullBody = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install full body-kit</h2><br/><img src='picture/fullbodykit.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>In sporty styling, body kit plays major role in giving cars the racing looks.</p>"
						+" <p>It is changes that been made by most people.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Some body kits require repaint.</p></div></div>";

    var chainAnswerStyleBodyFront= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Sporty </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit [no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Front Kit </button> "+
								"</center></div></div><br/>";

	var answerStyleBodyFront = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install front body-kit</h2><br/><img src='picture/front-kit.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>In sporty styling, body kit plays major role in giving cars the racing looks.</p>"
						+" <p>It is changes that been made by most people.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Some body kits require repaint.</p>"
						+" <p>Changing one part of body kit sometimes doesnt match the style.</p></div></div>";
	 var chainAnswerStyleBodySide= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Sporty </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit [no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Side Kit </button> "+
								"</center></div></div><br/>";

	var answerStyleBodySide = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install side body-kit</h2><br/><img src='picture/side-kit.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>In sporty styling, body kit plays major role in giving cars the racing looks.</p>"
						+" <p>It is changes that been made by most people.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Some body kits require repaint.</p>"
						+" <p>Changing one part of body kit sometimes doesnt match the style.</p></div></div>";				

	 var chainAnswerStyleBodyRear= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Sporty </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit [no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Rear Kit </button> "+
								"</center></div></div><br/>";

	var answerStyleBodyRear = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install rear body-kit</h2><br/><img src='picture/rear-kit.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>In sporty styling, body kit plays major role in giving cars the racing looks.</p>"
						+" <p>It is changes that been made by most people.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Some body kits require repaint.</p>"
						+" <p>Changing one part of body kit sometimes doesnt match the style.</p></div></div>";

	 var chainAnswerStyleRim= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Sporty </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Rims </button> "+
								"</center></div></div><br/>";

	var answerStyleRim = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install sport rim </h2><br/><img src='picture/light-rim.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Its called sport rim for a reason, for sure it gives you the sporty style.</p>"
						+" <p>Sporty rims have wider diameter , it tricks the eyes as if the car is lowered.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>If your tyre doesnt match the size , you have to change it too.</p></div></div>";

	var chainAnswerStyleSticker= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Sporty </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Sticker </button> "+
								"</center></div></div><br/>";

	var answerStyleSticker = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Apply sticker to your car </h2><br/><img src='picture/sticker.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Of course this is only preferences but applying stickers can make your looks as if it already been in a competition.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Some color doesnt match your car body paint, you have to be careful at picking up stickers colour</p></div></div>";

	var sportyHood = "<center><h2> Do you want to change your hood ? </h2>"
			+ "<button class = 'normal' id ='hood-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='hood-no'> No </button>";


	var chainAnswerStyleHood= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Sporty </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Hood Mod </button> "+
								"</center></div></div><br/>";

	var answerStyleHood = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change to modified car hood </h2><br/><img src='picture/hood.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Modified car hoods are the one with holes and curve. The holes are actually for turbo to breathe.</p>"
						+" <p>So having one tricks people on the looks. (even if you dont have a turbo)</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>It requires repaint if you prefer same colour as your car. </p></div></div>";

	var chainAnswerStyleWrap= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Sporty </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Hood Wrap </button> "+
								"</center></div></div><br/>";

	var answerStyleWrap = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Wrap your car hood </h2><br/><img src='picture/hoodwrap.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Wrapping your car hood gives you the style as if you are a street racer.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>You cant match the colour of your car, most wrap are black.</p>"
						+" <p>Bonus - It take cares of the colour quality.</p>"
						+"</div></div>";
	var chainAnswerStyleTint= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Sporty </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Tint </button> "+
								"</center></div></div><br/>";

	var answerStyleTint = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your car tint</h2><br/><img src='picture/colortint.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Tint your window (to any colour you like) gives you the style as if you are a street racer.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Rules and regulation on tint percentage change regularly.</p>"
						+" <p>Bonus - It gives you protection from the sun</p>"
						+"</div></div>";


var interior = "<center><h2> Select interior customization </h2> "
			+ "<button class = 'normal' id ='interior-lamp'> Interior Lamp </button>" 
			+ "<button class = 'normal' id ='interior-wrap'> Wrap </button>"
			+ "<button class = 'normal' id ='interior-seat'> Car seat </button>"
			+ "<button class = 'normal' id ='interior-steering'> Steering Wheel </button>"


	var chainAnswerInterioLamp= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Interior </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Lamp </button> "+
								"</center></div></div><br/>";

	var answerStyleInteriorLamp = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Add interior neon lamp </h2><br/><img src='picture/interiorlamp.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Autoshow styling for interior, neon usually installed on lower parts of the car.</p>"
						+" <pIt gives the glowy looks that attracts people to view inside the car.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>For some users the lights disturb them in driving.</p>"
						+"</div></div>";

	var chainAnswerInteriorWrap= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Interior </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Wrap </button> "+
								"</center></div></div><br/>";

	var answerStyleInteriorWrap = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Interior wrapping </h2><br/><img src='picture/interiorwrap.jpg'/>" +
									"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Wrapping your car interior according to your prefence can gives you wealthy rich boy look.</p>"
						+" <p>Ex : wrapping dashboard with tiger stripes cushion.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Cleaning will be troublesome.</p>"
						+"</div></div>";

	var chainAnswerInteriorSeat= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Interior </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Seat </button> "+
								"</center></div></div><br/>";

	var answerStyleInteriorSeat = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Wrap seat with leather </h2><br/><img src='picture/interiorseat.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>It gives you elegent look</p>"
		/*drawbacks*/	+ "<h3>Bonus : </h3>"
						+" <p>Easy to clean </p>"
						+"</div></div>";						

	var chainAnswerInteriorSteering= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Interior </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Tint </button> "+
								"</center></div></div><br/>";

	var answerStyleInteriorSteering = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change to fancy steering wheel </h2><br/><img src='picture/interiorsteering.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Some people prefer classic some people prefer colourful.</p>"
						+" <p>its always depends on you as long as it match the theme.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>Most of smaller steering wheel doesnt have frame cover on the centre,</p>"
						+" <p>the steel frame can be very hot during hot days.</p>"
						+"</div></div>";

	var chainAnswerAutoRim= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								
								"<button class = 'chain'> Rim </button> "+
								"</center></div></div><br/>";

	var answerStyleAutoRim = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change to shiny sport rims </h2><br/><img src='picture/goldrim.png'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Its necessary for it to be clean and shiny..</p>"
						+" <p>its makes your car look as if just came out from the garage.</p>"
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p>If the rim size doesnt fit the tyre you have to change the tyre to and it can be pricey.</p>"
		
						+"</div></div>";
	var chainAnswerAutoNeon= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								
								"<button class = 'chain'> Neon </button> "+
								"</center></div></div><br/>";

	var answerStyleAutoNeon = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Add exterior neon lamp </h2><br/><img src='picture/neon.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Autoshow styling for exterior, neon usually installed under the chassis of the car.</p>"
		
						+"</div></div>";

var autoBoot = "<center><h2> Select customization </h2> "
			+ "<button class = 'normal' id ='boot-speaker'> Speaker </button>" 
			+ "<button class = 'normal' id ='boot-neon'> Neon Lamp </button>";


	var chainAnswerExtNeon= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Boot </button><img class='arrow' src='picture/arrow.png'/> "+
								
								"<button class = 'chain'> Neon </button> "+
								"</center></div></div><br/>";

	var answerStyleExtNeon = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install boot neon </h2><br/><img src='picture/neon.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Autoshow styling for exterior, neon usually installed under the chassis of the car.</p>"
		
						+"</div></div>";

	var chainAnswerSpeaker = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Boot </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Speaker </button> "+
								"</center></div></div><br/>";

	var answerStyleSpeaker = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install boot speaker </h2><br/><img src='picture/bootspeaker.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Your car will look great as if its a moving club.</p>"
						+" <p>Boot speaker will be great tools to attract people during autoshow.</p>"
						+ "<h3>Drawbacks : </h3>"
						+" <p>If you turn it on during driving, it might disturb other drivers.</p>"
						+"</div></div>";



var autoEngine = "<center><h2> Is your engine dirty ? </h2> "
			+ "<button class = 'normal' id ='dirty-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='dirty-no'> No </button>";


	var chainAnswerEngClean= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/> "+
								
								"<button class = 'chain'> Dirty[yes] </button> "+
								"</center></div></div><br/>";

	var answerStyleEngClean = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Cleanup your engine </h2><br/><img src='picture/cleanengine.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Autoshow styling for exterior, neon usually installed under the chassis of the car.</p>"
						+ "<h3>Drawbacks : </h3>"
						+" <p>Chances wiring will be damaged is high.</p>"
						+"</div></div>";

	var chainAnswerEngWiring = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Dirty [no] </button> "+
								"</center></div></div><br/>";

	var answerStyleEngWiring = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Organize engine wiring </h2><br/><img src='picture/enginewiring.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Organizing engine wiring will make your engine looks simple and tidy.</p>"
						+" <p>It shows you care not only on the outside.</p>"
						+ "<h3>Bonus : </h3>"
						+" <p>It goods in preventing any short circuit.</p>"
						+"</div></div>";

var autoPaint = "<center><h2> Does your paint still looking good ? </h2> "
			+ "<button class = 'normal' id ='paint-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='paint-no'> No </button>";


	var chainAnswerNewPaint= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Paint </button><img class='arrow' src='picture/arrow.png'/> "+
								
								"<button class = 'chain'> Looking Good[no] </button> "+
								"</center></div></div><br/>";

	var answerStyleNewPaint = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Paint your car </h2><br/><img src='picture/carpaint.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Car paint is the first people will notice on your car.</p>"
						+" <p>It is mandatory to take care of it to make it looks new.</p>"
						+"</div></div>";

	var chainAnswerWrapPaint = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Style </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Autoshow </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Paint </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Looking Good [yes] </button> "+
								"</center></div></div><br/>";

	var answerStyleWrapPaint = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Wrap your car </h2><br/><img src='picture/carwrap.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p>Car wrap allows you to temporarily customize your car colour.</p>"
						+" <p>In case you wanted to change theme, car wrap is the quickest way.</p>"
						+ "<h3>Bonus : </h3>"
						+" <p>It take cares of the paint quality.</p>"
						+"</div></div>";
//offfrooooooooooooooooooooooooooooooooooooooooooooooooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
var askDiesel = "<center><h2> Is your engine diesel type ? </h2> "
			+ "<button class = 'normal' id ='diesel-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='diesel-no'> No </button>";
var askDieselUpgrade = "<center><h2> Select diesel upgrade  </h2> "
			+ "<button class = 'normal' id ='diesel-pc'> Performance Chip </button>"
			+ "<button class = 'normal' id ='diesel-exh'> Diesel Exhaust </button>"
			+ "<button class = 'normal' id ='diesel-inj'> Injection </button>"
			+"</center>";	
var askPetrolUpgrade = "<center><h2> Select petrol upgrade  </h2> "
			+ "<button class = 'normal' id ='petrol-pc'> Performance Chip </button>"
			+ "<button class = 'normal' id ='petrol-exh'> Exhaust </button>"
			+ "<button class = 'normal' id ='petrol-inj'> Injection </button>"
			+ "<button class = 'normal' id ='petrol-sb'> Sprint Booster </button>"
			+"</center>";

var offroadAsk = "<center><h2> Select parts to upgrade </h2> "
			+ "<button class = 'normal' id ='offroad-engine'> Engine </button>" 
			+ "<button class = 'normal' id ='offroad-susp'> Suspension </button>"
			+ "<button class = 'normal' id ='offroad-tyre'> Tyre </button>"
			+ "<button class = 'normal' id ='offroad-body'> Body Kit </button>"
			+ "<button class = 'normal' id ='offroad-attachment'> Attachment </button>"
			+"</center>";
/*offroad*/
/*engine*/
/*diesel*/
/*performance chip*/
	
	var answerOffEngDieChip = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install diesel performance chip </h2><br/><img src='picture/0209or-03-z+performance-chips+jet-chip.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Fitting a performance chip to the newer diesel engines will usually give a good increase in power. </p>"
						+" <p> This can alter the fuel consumption to a point that may even give better fuel economy than stock standard settings. </p>"
						+" <p> The chip basically bypasses the current CPU (stock computer chip) feeding the engine with a different program altering the power output. </p>"
									
		/*bonus*/	    + "<h3>Bonus : </h3>"
						+" <p> Most of these are “plug and play” with simple instructions. </p>"
						+" <p> Most can also be uninstalled / installed in your own garage/car port or even on the track if there should be a problem. </p></div></div>" ;
	var chainAnswerDieChip = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Diesel[yes] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Chip [yes]</button> "+
								"</center></div></div><br/>";						
/*exhaust*/

	var answerOffEngDieExhaust = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install diesel exhaust system </h2><br/><img src='picture/exhaust.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Exhaust systems will increase torque, power and economy from between 5-20%. </p>"
						+" <p> Exhaust pipes will generally be bigger (2.5inch to 3inch) in diameter to increase the flow. </p>"
									
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> A straight through exhaust pipe would be the best. </p>"
						+" <p> However by law every road vehicle must be fitted with a catalytic converter, these help prevent pollution. </p></div></div>" ;
	var chainAnswerDieExhaust = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Diesel[yes] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Exhaust [yes]</button> "+
								"</center></div></div><br/>";					
/*LPG injection*/

	var answerOffEngDieLPG = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install LPG injection </h2><br/><img src='picture/lpg injection.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> LPG gas into a diesel engine can increase fuel economy by about 10%. </p>"
						+" <p> This is because most diesel engines will not burn all of its fuel, </p>"
						+" <p> roughly about 10% of the fuel escapes through the exhaust without burning, </p>"
						+" <p> which means there is 10% power and fuel economy escaping. </p>"
									
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> This setup requires the vehicle to be fitted with a LPG tank. </p>"
						+" <p> Bonus - That 10% wasted diesel will add up over time so a system like this will pay for itself in the long run. </p></div></div>";
var chainAnswerDieLPG = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Diesel[yes] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> LPG Injection [yes]</button> "+
								"</center></div></div><br/>";						
/*petrol*/
/*performance chip*/

	var answerOffEngPetChip = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install performance chip </h2><br/><img src='picture/0209or-03-z+performance-chips+jet-chip.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Performance chip can alter the fuel consumption to a point that may even give better fuel economy than stock standard settings. </p>"
						+" <p> The chip basically bypasses the current CPU (stock computer chip) feeding the engine with a different program altering the power output. </p>"
									
		/*bonus*/	    + "<h3>Bonus : </h3>"
						+" <p> Most of these are “plug and play” with simple instructions. </p>"
						+" <p> Most can also be uninstalled / installed in your own garage/car port or even on the track if there should be a problem. </p></div></div>"; 
		var chainAnswerPetChip = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Diesel[no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Chip [yes]</button> "+
								"</center></div></div><br/>";				
/*exhaust*/

	var answerOffEngPetExhaust = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install petrol exhaust system </h2><br/><img src='picture/exhaust.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Exhaust systems will increase torque, power and economy from between 5-20%. </p>"
						+" <p> Exhaust pipes will generally be bigger (2.5inch to 3inch) in diameter to increase the flow. </p>"
									
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> A straight through exhaust pipe would be the best. </p>"
						+" <p> However by law every road vehicle must be fitted with a catalytic converter, these help prevent pollution. </p></div></div>" ;	
var chainAnswerPetExhaust = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Diesel[no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Exhaust [yes]</button> "+
								"</center></div></div><br/>";
/*super charger*/

	var answerOffEngPetCharger = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install supercharger </h2><br/><img src='picture/supercharger.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Supercharger is the best way to gain power from a petrol engine. </p>"
						+" <p> The benefit of a supercharger on petrol is the massive gain of low end torque which a turbo charger cannot provide. </p>"
						+" <p> Petrol engines lack this low end torque when 4 wheeling off road. </p>"
						+" <p> Superchargers provide the extra kick thou out the entire time, no matter the rpm (within the rpm red line). </p>"
									
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> Supercharger will increase fuel consumption. </p>"
						+" <p> Roughly 1-3 liters more per 100 km. </p></div></div>";
var chainAnswerPetCharger = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Diesel[no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Charger [yes]</button> "+
								"</center></div></div><br/>";
/*sprint booster*/

	var answerOffEngPetBooster = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install sprint booster </h2><br/><img src='picture/sprint booster.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Sprint booster comes in a kit with an actual accelerator pedal that replaces the existing one. </p>"
						+" <p> From the pedal a bunch of wires plug into the vehicles CPU. </p>"
						+" <p> So when accelerating the pedal itself sends signals to the vehicles CPU. </p>"
						+" <p> It also cuts the delay so from the time you give it some right boot the engine receives the message instantly. </p></div></div>";
	
		var chainAnswerPetbooster = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Engine </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Diesel[no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Booster [yes]</button> "+
								"</center></div></div><br/>";				
						
var askAirbags = "<center><h2> Does your 4x4 have airbags? </h2> "
			+ "<button class = 'normal' id ='airbag-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='airbag-no'> No </button>";

var askHeavyload = "<center><h2> Does your 4x4 always on heavy load? </h2> "
			+ "<button class = 'normal' id ='hvL-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='hvL-no'> No </button>";


/*offroad*/
/*suspension*/

	var answerOffSusHardcore = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install hardcore suspension </h2><br/><img src='picture/hardcore suspension.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> 4x4 lift kits consists of the entire parts required to complete the off road suspension. </p>"
						+" <p> Other parts available to add or change a lift kit to suit special needs, </p>"
						+" <p> for example on an IFS 4x4 fitting larger/wider tires may interfere with the 'upper control arm' </p></div></div>";
		var chainAnswerSusHardcore = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Suspension </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Airbags [yes]</button> "+
								"</center></div></div><br/>";				
/*airbags*/

	var answerOffSusAir = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install air bags </h2><br/><img src='picture/airbag suspension.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Suspension airbags simply add air (the same way as pumping tires up) until the ride height is raised to the desired level. </p>"
		
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> Off road suspension airbags must always have at least 5-10 PSI even when unloaded, otherwise they could suffer damage. </p>"
						+" <p> Airbags with too much air will cause the rear end to bounce everywhere, especially if unloaded and too much air. </p></div></div>" ;	
		var chainAnswerSusAir = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Suspension </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Airbags[no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Heavy Load [yes]</button> "+
								"</center></div></div><br/>";						
/*normal*/

	var answerOffSusNormal = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install normal offroad suspension </h2><br/><img src='picture/normal suspension.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Suspension on either side of the 4WD acts independent to the opposite side of the front of the vehicle. </p>"
						+" <p> It is way more comfortable on and off road compared to the live axle. </p>"
		
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> It is weaker and has less down travel than the live axle. </p></div></div>";	
						
   var chainAnswerSusAir = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Suspension </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Airbags[no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Heavy Load no</button> "+
								"</center></div></div><br/>";						

var askTerrain = "<center><h2> Select your terrain ocassion </h2> "
			+ "<button class = 'normal' id ='ter-mud'> Mud Dirt and Rock </button>" 
			+ "<button class = 'normal' id ='ter-all'> All </button>"
			+ "<button class = 'normal' id ='ter-high'> Highway and Sand </button>"
			+"</center>";


/*offroad*/
/*tyre*/
/*mud*/
	
	var answerOffTyreMud = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your tyres to mud tyres </h2><br/><img src='picture/mud tyres.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> The most aggressive tread pattern for a 4x4 is M/T tyres. </p>"
						+" <p> It is great for harsh outback tracks, rock crawling, clay based tracks, dirt tracks, forest tracks. </p>"
						+" <p> The tread pattern on any mud tyre is purely aggressive, </p>"
						+" <p> and the side walls are tough and hosts side biters that will assist in climbing in and out of ruts even if only using the side of the tyre. </p>"
									
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Taking off in the sand a bit too fast will cause the aggressive pattern to try and dig for traction which can result in bogging, </p>"
						+" <p> be sure to pay just a bit of extra attention if wheels start spinning whilst on the sand. </p>"
						+" <p> Bonus - mud tires are called 'Mud Terrain' or M/T they are not just great in the mud, </p>"
						+" <p> they are also very good on rocks, dirt tracks and hard clay terrain. </p></div></div>" ;
	
	var chainAnswerMud = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Tyre </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Mud [yes] </button>"+
								"</center></div></div><br/>";					
/*all*/
	
	var answerOffTyreAll = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your tyres to all terrain tyres </h2><br/><img src='picture/all terrain.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> A/T tyres have a stronger side wall some with shallow side biters and a deeper thread pattern than an L/T. </p>"
						+" <p> The tread blocks have a wider spacing between them allowing for a better grip on off road terrain, </p>"
						+" <p> yet still give good grip on highways/roads. </p>"
									
		/*bonus*/	    + "<h3>Bonus : </h3>"
						+" <p> Working stations and farmers use all terrain tyres due to their durability on and off road. </p>"
						+" <p> The reason for this is quite simply due to the fact that they have vast types of terrain. </p></div></div>" ;
	var chainAnswerOffAll = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Tyre </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> All [yes] </button>"+
								"</center></div></div><br/>";						
/*light*/

	var answerOffTyreLight = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Change your tyres to light truck tyres </h2><br/><img src='picture/light truck.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> L/T's are made for the black top or highway but handle very well on beach sand and are ok on gravel. </p>"
									
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> The side walls however are not meant for off roading and will be prone to sharp rocks and sticks. </p>"
						+" <p> L/T's will causing a dangerous loss of control if use it for mud terrain. </p>"
						+" <p> Bonus - Most 4x4 UTE’s and some wagons roll out of the factory on light truck rubber as these vehicles are most suited for it </p>"
						+" <p> L/T tyres are very quiet on the highways/roads and handle better. </p></div></div>" ;
	
var chainAnswerOffHigh = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Tyre </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Sandy [yes] </button>"+
								"</center></div></div><br/>";


var askBodykit = "<center><h2> Select your part to upgrade </h2> "
			+ "<button class = 'normal' id ='offb-bullbar'> Bullbar </button>" 
			+ "<button class = 'normal' id ='offb-rs'> Rock Slider </button>"
			+ "<button class = 'normal' id ='offb-plates'> Plates</button>"
			+ "<button class = 'normal' id ='offb-rc'> Rollcage </button>"
			+"</center>";

var askComp = "<center><h2> Do you do 4x4 competition ?</h2> "
			+ "<button class = 'normal' id ='offcomp-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='offcomp-no'> No </button>";


/*off road*/
/*bodykit*/

		var answerOffBodyBullYes = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install trail bullbar </h2><br/><img src='picture/trail bullbar.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Trail bullbar is a light weight bull bar with maximum approach angle but limited space for lights and aerial whips. </p>"
					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Protection against animals strikes is limited compared to the larger steel bull bars. </p>"
						+" <p> Bonus - These are great for hardcore 4WD. </p></div></div>";
		var chainAnswerOffBullYes = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Competition [no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Trail [yes] </button>"+
								"</center></div></div><br/>";				
		var answerOffBodyBullNo = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install winch bullbar </h2><br/><img src='picture/winch bullbar.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Winch bullbar was designed extra tough to handle the bashing they are going to receive on those hard 4WD tracks so you are less likely to damage your 4WD. </p></div></div>";

		var chainAnswerOffBullNo = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Competition [no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Winch [yes] </button>"+
								"</center></div></div><br/>";				
/*rock slider*/
	
	var answerOffBodyRockSlider = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install rock slider </h2><br/><img src='picture/rock slider.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Rock sliders are made so strong that the entire weight of the vehicle can rest on the rock sliders. </p>"
						+" <p> They are for literally slide over rocks and protecting the body of the 4WD from impact. </p>"
						+" <p> They are usually made to an angle and protrude out level with the tyres, </p>"
						+" <p> this construction will prevent damage to the side of the 4wd if it should slide sideway into the side of the track </p>"
						+" <p> They also improve the clearance and ramp over angles. </p></div></div>";
	var chainAnswerOffRS = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Rock Slider [yes] </button>"+
								"</center></div></div><br/>";					
/*bash plates*/

	var answerOffBodyBash = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install bash plates </h2><br/><img src='picture/bash plates.png'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Bash plates will help keep the 4wd safe in rocky remote areas. </p>"
					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> It is not really a requirement. </p>"
						+" <p> Without this simple care can be taken whilst navigating tuff areas can be just as good. </p></div></div>";
	var chainAnswerOffBB= "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Plate [yes] </button>"+
								"</center></div></div><br/>";					
/*roll cage*/

	var answerOffBodyCage = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install full set roll cage </h2><br/><img src='picture/roll cage.jpeg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> For full protection on the hard-core tracks, competition off roaders install roll-cages, these can be internal and even external. </p>"
						+" <p> They create a steel frame which wraps around the driver keeping him/her safe. </p>"
					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> The vehicle is not protected in rollovers. </p>"
						+" <p> Bonus - External roll cages on the other hand are made to wrap around the entire 4 wheel drive keeping the vehicle and the driver safer in the event of a rollover. </p></div></div>";

var chainAnswerOffBC = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Roll Cage [yes] </button>"+
								"</center></div></div><br/>";





/*off road*/
/*attachments*/



/*snorkel*/
	
	var answerOffAttSnorkel = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install snorkel </h2><br/><img src='picture/snorkel.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Snorkel helps prevent dust and will prevent water from entering the engine, </p>"
						+" <p> as long as the water level doesn't exceed the height of the 4x4s roof/snorkel height. </p>"
						+" <p> A diesel engine will be destroyed by just a small amount of water whereas a petrol motor could survive a small amount but it’s certainly not worth the risk. </p>"
					
		/*bonus*/		+ "<h3>Bonus : </h3>"
						+" <p> A special sock can be added to the top of a snorkel and these will act as a second air filter. </p>"
						+" <p> They are good for catching leaves from trees that may have come in contact with the snorkel, </p>"
						+" <p> also great for catching real fine dust particles (bull dust). </p></div></div>";
var chainAnswerOffSno   = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Snorkel [yes] </button>"+
								"</center></div></div><br/>";

/*tow point*/

var answerOffAttTowPoint = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install tow point </h2><br/><img src='picture/tow point.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Tow point/recovery point involves attaching a winch or a snatch strap to the recovery point. </p>"
						+" <p> Recovery points should be rated - that is, should say what load they are designed to take. </p>"
						+" <p> Using non-rated parts of a vehicle to recover it can be extremely dangerous. </p>"
						+" <p> Recovery points may be fitted by the manufacturer, or as an after-market modification. </p></div></div>";
var chainAnswerOffAttTP = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Tow Point [yes] </button>"+
								"</center></div></div><br/>";

var askAttachment = "<center><h2> Select your part to upgrade </h2> "
			+ "<button class = 'normal' id ='attach-light'> Lighting </button>" 
			+ "<button class = 'normal' id ='attach-snorkel'> Snorkel </button>"
			+ "<button class = 'normal' id ='attach-tow'> Tow Point</button>"
			+"</center>";

var askCamp = "<center><h2> Do you do 4x4 for camping ?</h2> "
			+ "<button class = 'normal' id ='offcamp-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='offcamp-no'> No </button>";


	var answerOffAttYesLED = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install LED type lighting </h2><br/><img src='picture/LED light.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Superb for night bush tracks and grave roads, </p>"
						+" <p> any wildlife on the edge of the track or road will be visible. </p>"
						+" <p> The LED light bars also really help lighting up the track ahead very well for 30-70m. </p>"
									
		/*bonus*/	    + "<h3>Bonus : </h3>"
						+" <p> it is very useful for camping.</p></div></div>" ;
var chainAnswerOffLED  = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Camp [yes] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> LED </button>"+
								"</center></div></div><br/>";
	var answerOffAttNoHID = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install HID type lighting </h2><br/><img src='picture/HID light.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> High Intensity Discharge light ( HID Lights ) globes are super bright compared to the regular halogen light globes. </p>"
						+" <p> A HID-light require fewer watts and produce more lumens than a conventional halogen light. </p>"
						+" <p> It can keep going for around 2000 hours. </p>"
						+" <p> It draw less power from the alternator and battery which will save power. </p>"
									
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> The cost of HID-light is more expensive compared to LED light and halogen </p></div></div>" ;					
var chainAnswerOffHid  = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Offroad </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> Camp [no] </button><img class='arrow' src='picture/arrow.png'/> "+
								"<button class = 'chain'> HID </button>"+
								"</center></div></div><br/>";				

	var answerTouAttSus = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install lift kit </h2><br/><img src='picture/lift kit.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> If your 4x4 having loads of weight, it will need to be lifted as well, </p>"
						+" <p> so a heavy duty suspension kit 2-4inch lift would be required to combat the extra weight </p>"
						+" <p> and to add some much craved ground clearance. </p>"
						+" <p> That is what the suspension taken care of. </p></div></div>";	

var chainAnswerTouAttSus = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Suspension "+
								"</center></div></div><br/>";

var askNav = "<center><h2> Do you want to install GPS ?</h2> "
			+ "<button class = 'normal' id ='gps-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='gps-no'> No </button>";
var askTouringTank = "<center><h2> Do you want to install long range fuel tank ?</h2> "
			+ "<button class = 'normal' id ='longtank-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='longtank-no'> No </button>";
var askTouringBody = "<center><h2> Do you want to add fleet bullbar ?</h2> "
			+ "<button class = 'normal' id ='fb-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='fb-no'> No </button>";

var askTouringAttach = "<center><h2> Choose part you want to attach ?</h2> "
			+ "<button class = 'normal' id ='tattach-rt'> Roof Tent </button>" 
			+ "<button class = 'normal' id ='tattach-aw'> Awning </button>"
			+ "<button class = 'normal' id ='tattach-freez'> Freezer </button>"
			+ "<button class = 'normal' id ='tattach-sp'> Solar Panel </button>"
			+ "<button class = 'normal' id ='tattach-snork'> Snorkel </button>"
			+ "<button class = 'normal' id ='tattach-2tyre'> Spare 2 Tyre </button>"
			+ "<button class = 'normal' id ='tattach-askute'> Roof/  Canopy </button>";
			
var askUte = "<center><h2> Is your 4x4 UTE model ?</h2> "
			+ "<button class = 'normal' id ='ute-yes'> Yes </button>" 
			+ "<button class = 'normal' id ='ute-no'> No </button>";

/*touring*/
/*navigation*/
	var answerTouNavYes = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install Off road GPS </h2><br/><img src='picture/offroad GPS.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> In navigation, Off road GPS is really important for the expedition 4X4. </p>"
						+" <p> It will assist so much in preventing you from getting lost.</p>"
									
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Sometimes it might not work due to the batery or system problem.</p>" 
						+" <p> To prevent this, bring paper maps and know how to read them.</p></div></div>";
	var chainAnswerTouNavYes = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Nav[yes] "+
								"</center></div></div><br/>";					
	var answerTouNavNo = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install HF radio </h2><br/><img src='picture/HF radio.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> There is guaranteed contact anywhere in the world at any time is the satellite phone and then there are distress beacons. </p>"
						+" <p> It is a long range and very handy on remote travelling.</p>"
									
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> HF radio requires a license in order to use legally</p></div></div>";
	var chainAnswerTouNavNo = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Nav[no] "+
								"</center></div></div><br/>";						
/*bodykit*/

	var answerTouBodyYes = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install fleet bullbar in front of your car </h2><br/><img src='picture/fleet bull bar.png'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> The most common is the 3 loop/hoop commercial bull bar, </p>"
						+" <p> black in color with hoops protecting the head lights and a couple of mounting points for aerials and lights.</p></div></div>";
	var chainAnswerTouBodyYes = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit [yes] "+
								"</center></div></div><br/>";									
	var answerTouBodyNo = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install bash plates </h2><br/><img src='picture/bash plates.png'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Bash plates will help keep the 4wd safe in rocky remote areas. </p>"
					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> It is not really a requirement. </p>"
						+" <p> Without this simple care can be taken whilst navigating tuff areas can be just as good. </p></div></div>";
	var chainAnswerTouBodyNo = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Body Kit [no] "+
								"</center></div></div><br/>";							
/*tank*/

	var answerTouTankYes = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install long range fuel tank </h2><br/><img src='picture/LongRange Fuel Tank .jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Most factory stock tanks are around 55-75 liters aftermarket long range tanks can vary anywhere from 100-150+ liters. </p>"
						+" <p> Dry type suits best if you dont use your car in wet road. </p>"
					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Keep in mind the bigger the capacity more weight is gained. </p></div></div>";
	var chainAnswerTouTank = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Tank [yes] "+
								"</center></div></div><br/>";							
	var answerTouTankNo = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install water tank </h2><br/><img src='picture/water tank.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Water tank will increase the distance of travel as much as fuel would. </p>"
					
		/*bonus*/		+ "<h3>Bonus : </h3>"
						+" <p> Also with extra water a shower could be used. </p></div></div>";
	var chainAnswerTouTankNo = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Tank [no] "+
								"</center></div></div><br/>";					
/*attachments*/
	
	var answerTouAttCanopy = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install canopy </h2><br/><img src='picture/canopy.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Canopy is constructed from either fiberglass or steel. </p>"
						+" <p> Most fiberglass canopy brands are rated to take about 50-100kg on top if adding a roof rack. </p>"
						+" <p> Steel/metal ones can handle above 100 kg depending on which brand of course. </p>"
						+" <p> Canopy increase storage space immensely. </p>"
					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> Canopies do lack the airtight tight seals that the 4WD wagons have, </p>"
						+" <p> but this problem can be overcome with a bit of clever DIY rubber or foam seals (trial and error is the only way to make sure) </p>"
						+" <p> Bonus - Side doors on a car canopy allow easier access and packing/storing. </p></div></div>";
		var chainAnswerTouAttCanopy = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> UTE [yes] </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Canopy "+
								"</center></div></div><br/>";				
	var answerTouAttRoofRack = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install roof rack </h2><br/><img src='picture/roof rack.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Roof racks are great for is storing a high lift jack, shovel and maxtrax, </p>"
						+" <p> this way the high lift jack, the shovel and the maxtrax are always easy to get to. </p>"
						+" <p> Roof racks are also a good place to mount flood lights or LED light bars for off roading at night. </p>"
					
		/*bonus*/		+ "<h3>Bonus : </h3>"
						+" <p> Make sure you consider all options before installing 4x4 roof rack lights. </p></div></div>";
		var chainAnswerTouAttRRoof = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> UTE [no] </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Roof Rack "+
								"</center></div></div><br/>";					
	var answerTouAttRoofTent = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install roof tent </h2><br/><img src='picture/roof tent.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> A roof top tent is always ready anytime anywhere, super convenient. </p>"
						+" <p> It is ready to use. </p>"
					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> The price is expensive. </p>"
						+" <p> It only fit 2 adults with comfort or 2 adults and a small child. </p></div></div>";
	var chainAnswerTouAttRoof = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Roof tent [yes] "+
								"</center></div></div><br/>";	
					
/*awning*/

	var answerTouAttAwning = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install awning </h2><br/><img src='picture/awning.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> An awning would be very useful for providing shade fast. </p>"
						+" <p> It is easy to pull out and fold back in place. </p>"
					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> The price is expensive. </p></div></div>";
	var chainAnswerTouAttAWn = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Awning [yes] "+
								"</center></div></div><br/>";	

/*freezer*/

	var answerTouAttFrez = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install freezer or fridge </h2><br/><img src='picture/fridge.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> The DC fridge or freezer only types can be setup and changed at any time by the push of a bottom to run as a fridge or freezer, </p>"
						+" <p> simply change the temperature according to your needs. </p>"
						+" <p> Sizes can range from the tiny 15liter to the big 90liters+. </p></div></div>";
	var chainAnswerTouAttFrez = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Freezer[yes] "+
								"</center></div></div><br/>";	
					
/*solar*/

	var answerTouAttSolar = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install solar panel </h2><br/><img src='picture/solar panel.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Solar panel can come in handy for extra charging. </p>"
						+" <p> It can be used at camp as a power source. </p>"
					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> It is not really necessary(more for creature comforts). </p></div></div>";
		var chainAnswerTouAttSolar = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Solar [yes] "+
								"</center></div></div><br/>";	
				
/*snorkel*/

	var answerTouAttSnorkel = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install snorkel </h2><br/><img src='picture/snorkel.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Snorkel helps prevent dust and will prevent water from entering the engine, </p>"
						+" <p> as long as the water level doesn't exceed the height of the 4x4s roof/snorkel height. </p>"
						+" <p> A diesel engine will be destroyed by just a small amount of water whereas a petrol motor could survive a small amount but it’s certainly not worth the risk. </p>"
					
		/*bonus*/		+ "<h3>Bonus : </h3>"
						+" <p> A special sock can be added to the top of a snorkel and these will act as a second air filter. </p>"
						+" <p> They are good for catching leaves from trees that may have come in contact with the snorkel, </p>"
						+" <p> also great for catching real fine dust particles (bull dust). </p></div></div>";
		var chainAnswerTouAttSnorkel = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Snorkel [yes] "+
								"</center></div></div><br/>";	
				
/*spare tyre*/

	var answerTouAttTyre = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Spare 2 tyres </h2><br/><img src='picture/2 spare tyres.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Having additional spare tyres are very important for the advanced expedition 4x4. </p>"
						+" <p> With extra spare tyres, the whole trip will be less stressful and safer. </p>"
					
		/*drawbacks*/	+ "<h3>Drawbacks : </h3>"
						+" <p> If all the tyres used, you have to be more careful along your journey. </p></div></div>";
	var chainAnswerTouAttTyre = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > 4x4 </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Touring </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Attachments </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Tyre [yes] "+
								"</center></div></div><br/>";	

/*car fuel efficiency*/
/*exhaust*/

	var answerCarFuelExh = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install smaller size exhaust to your car </h2><br/><img src='picture/exhaustcar.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Smaller exhaust pipes present a greater resistance to steady state flow. </p>"
						+" <p> It will increase the rpm. </p>"
									
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> In terms of speed, the performance is less. </p></div></div>" ;
	var chainAnswerCarfuelexh = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Fuel  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Exhaust </button>"+
								"</center></div></div><br/>";					
/*magnet*/

	var answerCarFuelMagnet = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Apply magnet to fuel tank </h2><br/><img src='picture/magnet.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Permanent magnets are claimed to be able to treat fuel such as gasoline, diesel, natural gas, liquid propane gas, and fuel oil. </p>"
									
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> When using magnets on fuel, there are many things that need to be taken into consideration such as: </p>"
						+" <p> magnetic polarity that is touching the fuel, geometrical relationship between the magnetic field and the fuel moving through a line, </p>"
						+" <p> the strength of the magnetic field as well as a few other subtleties that are generally completely unknown to the mainstream pseudo-scientists. </p></div></div>" ;
	var chainAnswerCarfuelmag = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Fuel  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Magnet </button>"+
								"</center></div></div><br/>";						
/*injection*/

	var answerCarFuelInject = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Install fuel injection </h2><br/><img src='picture/fuel injector.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Fuel Injection System is to calibrate and optimize the fuel/air ratio that enters your car’s engine. </p>"
						+" <p> The injection system consists of electronic components and sensors. </p>"
						+" <p> It must be kept clean and well calibrated in order to maximize the engine’s power and efficiency and to reduce gas consumption. </p>"
									
		/*drawbacks*/   + "<h3>Drawbacks : </h3>"
						+" <p> You could smell the fuel. </p></div></div>" ;
	var chainAnswerCarfuelInject = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Fuel  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Inject </button>"+
								"</center></div></div><br/>";						
/*carburator*/

	var answerCarFuelCarburator = "<div class= 'explainContainer'><div class = 'pictureAnswer'><h2 style ='margin-left:23px;'> Answer : Apply carburator settings </h2><br/><img src='picture/carburetor.jpg'/>" +
						"<img src='picture/batang.png'/></div>"
		/*explanation*/	+ "<div class = 'textAnswer'><h3>Explanation : </h3>"
						+" <p> Carburator in an ingenious air-fuel mixing devices. </p>"
						+" <p> It is a tube that allows air and fuel into the engine through valves, </p>"
						+" <p> mixing them together in different amounts to suit a wide range of different driving conditions. </p></div></div>";
var chainAnswerCarfuelCarb = "<div class = 'chain-container'><div><center>"+
								" <button class = 'chain' > Sedan or HatchBack </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Fuel  </button><img class='arrow' src='picture/arrow.png'/>"+
								"<button class = 'chain'> Carburator </button>"+
								"</center></div></div><br/>";	








