		//hiding le div
	$('#level1-sedan').hide();
	$('#level1-4x4').hide();
	$('#level2-handling').hide();
	$('#level2-fuel').hide();
	$('#level2-speed').hide();
	$('#level2-safety').hide();
	$('#level2-style').hide();
	$('#level2-offroad').hide();
	$('#level2-touring').hide();
	$('#answer').hide();
	$('#answer2').hide();
	$('#answer3').hide();
	$('#answer4').hide();
	
	var HB;

	$(document).ready(function(){
		//level 0
		$('#sedan').click(function(){
			$('#sedan').addClass('visited');
			// To disable:    
			$("#4x4,#hatchback").unbind('click');
			$('#level1-sedan').show("slow");
		});

		$('#hatchback').click(function(){
			$('#hatchback').addClass('visited');
			// To disable:    
			$("#4x4,#sedan").unbind('click');
			$('#level1-sedan').show("slow");
			HB = true;
		});
		
		$('#4x4').click(function() {
			$('#4x4').addClass('visited');
			$("#sedan").unbind('click');
			$('#level1-4x4').show("slow");
		});

		//level1
		//sedan or hatchback
		$('#handling').click(function() {
			$('#handling').addClass('visited');
			$("#speed, #fuel, #safety, #style").unbind('click');
			$('#level2-handling').show("slow");
		});
		$('#fuel').click(function() {
			$('#fuel').addClass('visited');
			$("#speed, #handling, #safety, #style").unbind('click');
			$('#level2-fuel').show("slow");
		});
		$('#speed').click(function() {
			$('#speed').addClass('visited');
			$("#handling, #fuel, #safety, #style").unbind('click');
			$('#level2-speed').show("slow");
		});
		$('#safety').click(function() {
			$('#safety').addClass('visited');
			$("#handling, #fuel, #speed, #style").unbind('click');
			$('#level2-safety').show("slow");
		});
		$('#style').click(function() {
			$('#style').addClass('visited');
			$("#handling, #fuel, #speed, #safety").unbind('click');
			$('#level2-style').show("slow");
		});

		//4x4
		$('#touring').click(function() {
			$('#touring').addClass('visited');
			$("#offroad").unbind('click');
			$('#level2-touring').show("slow");
		});
		$('#offroad').click(function() {
			$('#offroad').addClass('visited');
			$("#touring").unbind('click');
			$('#level2-offroad').show("slow");
		});
		//end of level 1
		//level 2 Touring
		$('#touring-nav').click(function() {
			$('#touring-nav').addClass('visited');
			$("#touring-body, #touring-tank, #touring-susp, #touring-attach, #touring-nav").unbind('click');
			$('#answer').append(askNav);
			$('#answer').show("slow");

		});
		$('#touring-body').click(function() {
			$('#touring-body').addClass('visited');
			$("#touring-nav, #touring-tank, #touring-susp, #touring-body, #touring-attach").unbind('click');
				$('#answer').append(askTouringBody);
			$('#answer').show("slow");
		});
		$('#touring-tank').click(function() {
			$('#touring-tank').addClass('visited');
			$("#touring-nav, #touring-body, #touring-susp, #touring-attach, #touring-tank").unbind('click');
			$('#answer').append(askTouringTank);
			$('#answer').show("slow");

		});
		$('#touring-attach').click(function() {
			$('#touring-attach').addClass('visited');
			$("#touring-nav, #touring-body, #touring-tank, #touring-susp, #touring-attach").unbind('click');
			$('#answer').append(askTouringAttach);
			$('#answer').show("slow");

		});
		$('#touring-susp').click(function() {
			$('#touring-susp').addClass('visited');
			$("#touring-nav, #touring-steering, #touring-tank, #touring-body,#touring-susp").unbind('click');
			$('#answer').append(chainAnswerTouAttSus + answerTouAttSus);
			$('#answer').show("slow");

		});
		//level 2 offroad
		$('#offroad-engine').click(function() {
			$('#offroad-engine').addClass('visited');
			$("#offroad-susp, #offroad-tyre, #offroad-attachment, #offroad-body, #offroad-engine").unbind('click');
			$('#answer').append(askDiesel);
			$('#answer').show("slow");

		});
		$('#offroad-susp').click(function() {
			$('#offroad-susp').addClass('visited');
			$("#offroad-engine, #offroad-tyre, #offroad-attachment, #offroad-body, #offroad-susp").unbind('click');
				$('#answer').append(askAirbags);
			$('#answer').show("slow");
		});
		$('#offroad-tyre').click(function() {
			$('#offroad-tyre').addClass('visited');
			$("#offroad-engine, #offroad-susp, #offroad-attachment, #offroad-body, #offroad-tyre").unbind('click');
			$('#answer').append(askTerrain);
			$('#answer').show("slow");

		});
		$('#offroad-body').click(function() {
			$('#offroad-body').addClass('visited');
			$("#offroad-engine, #offroad-susp, #offroad-tyre, #offroad-attachment, #offroad-body").unbind('click');
			$('#answer').append(askBodykit);
			$('#answer').show("slow");

		});
		$('#offroad-attachment').click(function() {
			$('#offroad-attachment').addClass('visited');
			$("#offroad-engine, #offroad-steering, #offroad-tyre, #offroad-body,#offroad-attachment").unbind('click');
			$('#answer').append(askAttachment);
			$('#answer').show("slow");

		});
		//level 2 handling
		$('#handling-stabilizer').click(function() {
			$('#handling-stabilizer').addClass('visited');
			$("#handling-steering, #handling-tyre, #handling-rim, #handling-suspension, #handling-stabilizer").unbind('click');
			$('#answer').append(chainAnswerHandlingStabilizer + answerHandlingStabilizer);
			$('#answer').show("slow");

		});
		$('#handling-steering').click(function() {
			$('#handling-steering').addClass('visited');
			$("#handling-stabilizer, #handling-tyre, #handling-rim, #handling-suspension, #handling-steering").unbind('click');
				$('#answer').append(chainAnswerHandlingSteering + answerHandlingSteering);
			$('#answer').show("slow");
		});
		$('#handling-tyre').click(function() {
			$('#handling-tyre').addClass('visited');
			$("#handling-stabilizer, #handling-steering, #handling-rim, #handling-suspension, #handling-tyre").unbind('click');
			$('#answer').append(handlingTyre1);
			$('#answer').show("slow");

		});
		$('#handling-suspension').click(function() {
			$('#handling-suspension').addClass('visited');
			$("#handling-stabilizer, #handling-steering, #handling-tyre, #handling-rim, #handling-suspension").unbind('click');
			$('#answer').append(handlingSuspension1);
			$('#answer').show("slow");

		});
		$('#handling-rim').click(function() {
			$('#handling-rim').addClass('visited');
			$("#handling-stabilizer, #handling-steering, #handling-tyre, #handling-suspension,#handling-rim").unbind('click');
			$('#answer').append(handlingRim1);
			$('#answer').show("slow");

		});
		//style
		$('#style-sporty').click(function() {
			$('#style-sporty').addClass('visited');
			$("#style-sporty, #style-autoshow").unbind('click');
			$('#answer').append(styleSporty);
			$('#answer').show("slow");
			
		});
		$('#style-autoshow').click(function() {
			$('#style-autoshow').addClass('visited');
			$("#style-sporty, #style-autoshow").unbind('click');
			$('#answer').append(styleAutoshow);
			$('#answer').show("slow");
			
		});
		//level 2 safety
		$('#safety-carseat').click(function() {
			$('#safety-carseat').addClass('visited');
			$("#safety-chassis, #safety-window, #safety-lock, #safety-stabilizer, #safety-carseat").unbind('click');
			$('#answer').append(chainAnswerSafeCarseat + answersafetycarseat);
			$('#answer').show("slow");
		});
		$('#safety-chassis').click(function() {
			$('#safety-chassis').addClass('visited');
			$("#safety-carseat, #safety-window, #safety-lock, #safety-stabilizer, #safety-chassis").unbind('click');
				$('#answer').append(chainAnswerSafeChassis + answerSafeChassis);
			$('#answer').show("slow");
		});
		$('#safety-window').click(function() {
			$('#safety-window').addClass('visited');
			$("#safety-carseat, #safety-chassis, #safety-lock, #safety-stabilizer, #safety-window").unbind('click');
			$('#answer').append(safetyWindow1);
			$('#answer').show("slow");

		});
		$('#safety-stabilizer').click(function() {
			$('#safety-stabilizer').addClass('visited');
			$("#safety-carseat, #safety-chassis, #safety-window, #safety-lock, #safety-stabilizer").unbind('click');
			$('#answer').append(chainAnswerSafeStabilizer + answerSafeStabilizer);
			$('#answer').show("slow");

		});
		$('#safety-lock').click(function() {
			$('#safety-lock').addClass('visited');
			$("#safety-carseat, #safety-chassis, #safety-window, #safety-stabilizer,#safety-lock").unbind('click');
			$('#answer').append(safetyLock1);
			$('#answer').show("slow");

		});
		//level 2 fuel

		$('#fuel-exhaust').click(function() {
			$('#fuel-exhaust').addClass('visited');
			$("#fuel-magnet, #fuel-injection, #fuel-rim, #fuel-carburetor, #fuel-exhaust").unbind('click');
			$('#answer').append(chainAnswerCarfuelexh + answerCarFuelExh);
			$('#answer').show("slow");

		});
		$('#fuel-magnet').click(function() {
			$('#fuel-magnet').addClass('visited');
			$("#fuel-exhaust, #fuel-injection, #fuel-rim, #fuel-carburetor, #fuel-magnet").unbind('click');
				$('#answer').append(chainAnswerCarfuelmag + answerCarFuelMagnet);
			$('#answer').show("slow");
		});
		$('#fuel-injection').click(function() {
			$('#fuel-injection').addClass('visited');
			$("#fuel-exhaust, #fuel-magnet, #fuel-rim, #fuel-carburetor, #fuel-injection").unbind('click');
			$('#answer').append(chainAnswerCarfuelInject + answerCarFuelInject);
			$('#answer').show("slow");

		});
		$('#fuel-carburetor').click(function() {
			$('#fuel-carburetor').addClass('visited');
			$("#fuel-exhaust, #fuel-magnet, #fuel-injection, #fuel-rim, #fuel-carburetor").unbind('click');
			$('#answer').append(hainAnswerCarfuelCarb + answerCarFuelCarburator);
			$('#answer').show("slow");

		});
		//level 2 speed
		$('#spd-aero').click(function() {
			$('#spd-aero').addClass('visited');
			$("#spd-engine, #spd-transm, #spd-rim, #spd-suspension, #spd-exhaust,#spd-aero").unbind('click');
			$('#answer').show("slow");
			if(HB){
				$('#answer').append(chainSpeedAeroHB + answerSpeedAeroHB);
			}
			else{
				$('#answer').append(chainSpeedAeroSedan + answerSpeedAeroSedan);
			}

			
		});
		$('#spd-engine').click(function() {
			$('#spd-engine').addClass('visited');
			$("#spd-aero, #spd-transm, #spd-rim, #spd-suspension, #spd-exhaust, #spd-engine").unbind('click');
			$('#answer').append(spdEngine1);
			$('#answer').show("slow");
			
		});
		$('#spd-transm').click(function() {
			$('#spd-transm').addClass('visited');
			$("#spd-engine, #spd-aero, #spd-rim, #spd-suspension, #spd-exhaust, #spd-transm").unbind('click');
			$('#answer').append(spdTransm1);
			$('#answer').show("slow");
			
		});
		$('#spd-exhaust').click(function() {
			$('#spd-exhaust').addClass('visited');
			$("#spd-aero, #spd-engine, #spd-transm, #spd-rim, #spd-suspension, #spd-exhaust").unbind('click');
			$('#answer').append(spdExhaust1);
			$('#answer').show("slow");
			
		});
		$('#spd-suspension').click(function() {
			$('#spd-suspension').addClass('visited');
			$("#spd-aero, #spd-engine, #spd-rim, #spd-transm, #spd-exhaust, #spd-suspension").unbind('click');
			$('#answer').append(spdSusp1);
			$('#answer').show("slow");
			
		});
		$('#spd-rim').click(function() {
			$('#spd-rim').addClass('visited');
			$("#spd-aero, #spd-engine, #spd-transm, #spd-suspension, #spd-exhaust, #spd-rim").unbind('click');
			$('#answer').append(speedRim1);
			$('#answer').show("slow");
			
		});
		//end of speed
			//ask wet
			$('#answer').on('click','#hpNo',function(){
				$('#hpNo').addClass('visited');
				$('#answer').off('click','#hpYes');	$('#answer').off('click','#hpNo');			
				$('#answer2').append(handlingTyre2);
				$('#answer2').show("slow");
				

			});
			$('#answer').on('click','#hpYes',function(){
				$('#hpYes').addClass('visited');
				$('#answer').off('click','#hpNo'); $('#answer').off('click','#hpYes');	
				$('#answer2').append(chainAnswerHandlingTyreHP + answerHandlingTyreHP);
				$('#answer2').show("slow");
				
			});
			//ask dry
			$('#answer2').on('click','#wet-tyre-no',function(){
				$('#wet-tyre-no').addClass('visited');
				$('#answer2').off('click','#wet-tyre-yes'); $('#answer2').off('click','#wet-tyre-no');
				$('#answer3').append(handlingTyre3);
				$('#answer3').show("slow");
				
			});
			$('#answer2').on('click','#wet-tyre-yes',function(){
				$('#wet-tyre-yes').addClass('visited');
				$('#answer2').off('click','#wet-tyre-no'); $('#answer2').off('click','#wet-tyre-yes');
				$('#answer3').append(chainAnswerHandlingTyreWet + answerHandlingTyreWet);
				$('#answer3').show("slow");
				
			});

			$('#answer3').on('click','#dry-tyre-no',function(){
				$('#dry-tyre-no').addClass('visited');
				$('#answer3').off('click','#dry-tyre-yes'); $('#answer3').off('click','#dry-tyre-no');
				$('#answer4').append(chainAnswerHandlingTyreAll + answerHandlingTyreAll);
				$('#answer4').show("slow");
				
			});
			$('#answer3').on('click','#dry-tyre-yes',function(){
				$('#dry-tyre-yes').addClass('visited');
				$('#answer3').off('click','#dry-tyre-no'); $('#answer3').off('click','#dry-tyre-yes');
				$('#answer4').append(chainAnswerHandlingTyreDry + answerHandlingTyreDry);
				$('#answer4').show("slow");
				
			});
			//suspension
			$('#answer').on('click','#handlingAdjustableNo',function(){
				$('#handlingAdjustableNo').addClass('visited');
				$('#answer').off('click','#handlingAdjustableYes');	$('#answer').off('click','#handlingAdjustableNo');			
				$('#answer2').append(chainAnswerHandlingSuspension + answerHandlingSuspension);
				$('#answer2').show("slow");
				
			});
			$('#answer').on('click','#handlingAdjustableYes',function(){
				$('#handlingAdjustableYes').addClass('visited');
				$('#answer').off('click','#handlingAdjustableNo'); $('#answer').off('click','#handlingAdjustableYes');	
				$('#answer2').append(chainAnswerHandlingSuspensionAdj + answerHandlingSuspensionAdj);
				$('#answer2').show("slow");
				
			});
			//rim
			$('#answer').on('click','#handlingFacRimNo',function(){
				$('#handlingFacRimNo').addClass('visited');
				$('#answer').off('click','#handlingFacRimYes');	$('#answer').off('click','#handlingFacRimNo');			
				$('#answer2').append(handlingRim2);
				$('#answer2').show("slow");
				

			});
			$('#answer').on('click','#handlingFacRimYes',function(){
				$('#handlingFacRimYes').addClass('visited');
				$('#answer').off('click','#handlingFacRimNo'); $('#answer').off('click','#handlingFacRimYes');	
				$('#answer2').append(chainAnswerHandlingSport + answerHandlingSport);
				$('#answer2').show("slow");
			
			});
			$('#answer2').on('click','#handlingOriRimNo',function(){
				$('#handlingOriRimNo').addClass('visited');
				$('#answer2').off('click','#handlingOriRimYes'); $('#answer2').off('click','#handlingOriRimNo');
				$('#answer3').append(chainAnswerHandlingLocal + answerHandlingLocal);
			$('#answer3').show("slow");
			});

			$('#answer2').on('click','#handlingOriRimYes',function(){
				$('#handlingOriRimYes').addClass('visited');
				$('#answer2').off('click','#handlingOriRimNo');	$('#answer2').off('click','#handlingOriRimYes');			
				$('#answer3').append(chainAnswerHandlingOri + answerHandlingOri);
				$('#answer3').show("slow");
			});
			//speed answer
			$('#answer').on('click','#swap',function(){
				$('#swap').addClass('visited');
				$('#answer').off('click','#upgrade'); $('#answer').off('click','#swap');				
				$('#answer2').append(spdEngineSwap);
				$('#answer2').show("slow");
			});			
			$('#answer').on('click','#upgrade',function(){
				$('#upgrade').addClass('visited');
				$('#answer').off('click','#swap'); $('#answer').off('click','#upgrade');
				$('#answer2').append(spdEngine2);
				$('#answer2').show("slow");
				
			});
			$('#answer2').on('click','#HCYes',function(){
				$('#HCYes').addClass('visited');
				$('#answer2').off('click','#HCYes'); $('#answer2').off('click','#HCNo');
				$('#answer3').append(chainSpeedEngSwapHC + answerSpeedEngSwapHC);
				$('#answer3').show("slow");
				
			});
			$('#answer2').on('click','#HCNo',function(){
				$('#HCNo').addClass('visited');
				$('#answer2').off('click','#HCYes'); $('#answer2').off('click','#HCNo');
				$('#answer3').append(chainSpeedEngSwapEK+ answerSpeedEngSwapEK);
				$('#answer3').show("slow");
				
			});

			$('#answer2').on('click','#spdTurboNo',function(){
				$('#spdTurboNo').addClass('visited');
				$('#answer2').off('click','#spdTurboNo'); $('#answer2').off('click','#spdTurboYes');
				$('#answer3').append(spdEngine3);
				$('#answer3').show("slow");
				
			});
			$('#answer2').on('click','#spdTurboYes',function(){
				$('#spdTurboYes').addClass('visited');
				$('#answer2').off('click','#spdTurboYes'); $('#answer2').off('click','#spdTurboNo');
				$('#answer3').append(chainSpeedTurbo + answerSpeedTurbo);
				$('#answer3').show("slow");
				
			});

			$('#answer3').on('click','#spdChgNo',function(){
				$('#spdChgNo').addClass('visited');
				$('#answer3').off('click','#spdChgNo');$('#answer3').off('click','#spdChgYes');
				$('#answer4').append(spdEngine4);
				$('#answer4').show("slow");
				
			});
			$('#answer3').on('click','#spdChgYes',function(){
				$('#spdChgYes').addClass('visited');
				$('#answer3').off('click','#spdChgYes');$('#answer3').off('click','#spdChgNo');
				$('#answer4').append(chainSpeedSuper + answerSpeedSuper);
				$('#answer4').show("slow");
				
			});
				$('#answer4').on('click','#spdMgtNo',function(){
				$('#spdMgtNo').addClass('visited');
				$('#answer4').off('click','#spdMgtNo');$('#answer4').off('click','#spdMgtYes');
				$('#answer5').append(chainSpeedCarburetor + answerSpeedCarburetor);
				$('#answer5').show("slow");
				
			});
			$('#answer4').on('click','#spdMgtYes',function(){
				$('#spdMgtYes').addClass('visited');
				$('#answer4').off('click','#spdMgtYes');$('#answer4').off('click','#spdMgtNo');
				$('#answer5').append(chainSpeedMgt + chainSpeedCarburetor);
				$('#answer5').show("slow");
				
			});
			//transmission
			$('#answer').on('click','#autoT',function(){
				$('#autoT').addClass('visited');
				$('#answer').off('click','#manualT'); $('#answer').off('click','#autoT');				
				$('#answer2').append(chainSpeedManual + answerSpeedManual);
				$('#answer2').show("slow");
			});			
			$('#answer').on('click','#manualT',function(){
				$('#manualT').addClass('visited');
				$('#answer').off('click','#autoT'); $('#answer').off('click','#manualT');
				$('#answer2').append(spdTransm2);
				$('#answer2').show("slow");
				
			});
			$('#answer2').on('click','#factTransYes',function(){
				$('#factTransYes').addClass('visited');
				$('#answer2').off('click','#factTransYes'); $('#answer2').off('click','#factTransNo');
				$('#answer3').append(chainSpeedPerformanceT + answerSpeedPerformanceT);
				$('#answer3').show("slow");
				
			});
			$('#answer2').on('click','#factTransNo',function(){
				$('#factTransNo').addClass('visited');
				$('#answer2').off('click','#factTransYes'); $('#answer2').off('click','#factTransNo');
				$('#answer3').append(spdTransm3);
				$('#answer3').show("slow");
				
			});

			$('#answer3').on('click','#shortgear',function(){
				$('#shortgear').addClass('visited');
				$('#answer3').off('click','#shortgear');$('#answer3').off('click','#longgear');
				$('#answer4').append(chainSpeedShort + answerSpeedShort);
				$('#answer4').show("slow");
				
			});
			$('#answer3').on('click','#longgear',function(){
				$('#longgear').addClass('visited');
				$('#answer3').off('click','#longgear');$('#answer3').off('click','#shortgear');
				$('#answer4').append(chainSpeedLong + answerSpeedLong);
				$('#answer4').show("slow");
			});
			//exhaust
			$('#answer').on('click','#engModYes',function(){
				$('#engModYes').addClass('visited');
				$('#answer').off('click','#engModNo'); $('#answer').off('click','#engModYes');				
				$('#answer2').append(chainSpeedTExhaust + answerSpeedTExhaust);
				$('#answer2').show("slow");
			});			
			$('#answer').on('click','#engModNo',function(){
				$('#engModNo').addClass('visited');
				$('#answer').off('click','#engModYes'); $('#answer').off('click','#engModNo');
				$('#answer2').append(chainSpeedBExhaust + answerSpeedBExhaust);
				$('#answer2').show("slow");
				
			});
			//suspension
			$('#answer').on('click','#speedAdjYes',function(){
				$('#speedAdjYes').addClass('visited');
				$('#answer').off('click','#speedAdjNo'); $('#answer').off('click','#speedAdjYes');				
				$('#answer2').append(chainSpeedSusAdj + answerSpeedSusAdj);
				$('#answer2').show("slow");
			});			
			$('#answer').on('click','#speedAdjNo',function(){
				$('#speedAdjNo').addClass('visited');
				$('#answer').off('click','#speedAdjYes'); $('#answer').off('click','#speedAdjNo');
				$('#answer2').append(chainSpeedSusAdjNo + answerSpeedSusAdjNo);
				$('#answer2').show("slow");
				
			});
			//rim speed
			$('#answer').on('click','#spdFacRimNo',function(){
				$('#spdFacRimNo').addClass('visited');
				$('#answer').off('click','#spdFacRimYes');	$('#answer').off('click','#spdFacRimNo');			
				$('#answer2').append(speedRim2);
				$('#answer2').show("slow");
				

			});
			$('#answer').on('click','#spdFacRimYes',function(){
				$('#spdFacRimYes').addClass('visited');
				$('#answer').off('click','#spdFacRimNo'); $('#answer').off('click','#spdFacRimYes');	
				$('#answer2').append(chainAnswerSpdSport + answerSpdSport);
				$('#answer2').show("slow");
			
			});
			$('#answer2').on('click','#spdOriRimNo',function(){
				$('#spdOriRimNo').addClass('visited');
				$('#answer2').off('click','#spdOriRimYes'); $('#answer2').off('click','#spdOriRimNo');
				$('#answer3').append(chainAnswerSpdLocal + answerSpdLocal);
			$('#answer3').show("slow");
			});

			$('#answer2').on('click','#spdOriRimYes',function(){
				$('#spdOriRimYes').addClass('visited');
				$('#answer2').off('click','#spdOriRimNo');	$('#answer2').off('click','#spdOriRimYes');			
				$('#answer3').append(chainAnswerSpdOri + answerSpdOri);
				$('#answer3').show("slow");
			});
				//safety window
			$('#answer').on('click','#safetyBulletYes',function(){
				$('#safetyBulletYes').addClass('visited');
				$('#answer').off('click','#safetyBulletNo'); $('#answer').off('click','#safetyBulletYes');				
				$('#answer2').append(chainAnswerSafeBullet + answerSafeBullet);
				$('#answer2').show("slow");
			});			
			$('#answer').on('click','#safetyBulletNo',function(){
				$('#safetyBulletNo').addClass('visited');
				$('#answer').off('click','#safetyBulletYes'); $('#answer').off('click','#safetyBulletNo');
				$('#answer2').append(chainAnswerSafeThick + answerSafeThick);
				$('#answer2').show("slow");				
			});
			//safety lock
			//safety window
			$('#answer').on('click','#childLock',function(){
				$('#childLock').addClass('visited');
				$('#answer').off('click','#childLock'); $('#answer').off('click','#steeringLock'); $('#answer').off('click','#gearLock');					
				$('#answer2').append(chainAnswerChildLock + answerChildLock);
				$('#answer2').show("slow");
			});			
			$('#answer').on('click','#gearLock',function(){
				$('#gearLock').addClass('visited');
				$('#answer').off('click','#childLock'); $('#answer').off('click','#steeringLock'); $('#answer').off('click','#gearLock');	
				$('#answer2').append(chainAnswerGearLock + answerGearLock);
				$('#answer2').show("slow");				
			});
			$('#answer').on('click','#steeringLock',function(){
				$('#steeringLock').addClass('visited');
				$('#answer').off('click','#childLock'); $('#answer').off('click','#steeringLock'); $('#answer').off('click','#gearLock');	
				$('#answer2').append(chainSteeringLock + answerSteeringLock);
				$('#answer2').show("slow");				
			});
		//style partsss
		//sporty
		$('#answer').on('click','#sporty-body',function(){
				$('#sporty-body').addClass('visited');
				$('#answer').off('click','#sporty-body'); $('#answer').off('click','#sporty-sticker'); $('#answer').off('click','#sporty-hood');
				$('#answer').off('click','#sporty-rim'); $('#answer').off('click','#sporty-tint'); 		
				$('#answer2').append(sportyFullBody);
				$('#answer2').show("slow");				
		});
			$('#answer2').on('click','#fullbody-yes',function(){
				$('#fullbody-yes').addClass('visited');
				$('#answer2').off('click','#fullbody-no'); $('#answer').off('click','#fullbody-yes'); 
				$('#answer3').append(chainAnswerStyleFullBody + answerStyleFullBody);
				$('#answer3').show("slow");				
			});
			$('#answer2').on('click','#fullbody-no',function(){
				$('#fullbody-no').addClass('visited');
				$('#answer2').off('click','#fullbody-no'); $('#answer').off('click','#fullbody-yes'); 
				$('#answer3').append(sportyBody);
				$('#answer3').show("slow");				
			});

				$('#answer3').on('click','#kit-front',function(){
					$('#kit-front').addClass('visited');
					$('#answer3').off('click','#kit-rear'); $('#answer').off('click','#kit-front'); $('#answer').off('click','#kit-side'); 
					$('#answer4').append(chainAnswerStyleBodyFront + answerStyleBodyFront);
					$('#answer4').show("slow");				
				});
				$('#answer3').on('click','#kit-side',function(){
					$('#kit-side').addClass('visited');
					$('#answer3').off('click','#kit-rear'); $('#answer').off('click','#kit-front'); $('#answer').off('click','#kit-side'); 
					$('#answer4').append(chainAnswerStyleBodySide + answerStyleBodySide);
					$('#answer4').show("slow");				
				});
				$('#answer3').on('click','#kit-rear',function(){
					$('#kit-rear').addClass('visited');
					$('#answer3').off('click','#kit-rear'); $('#answer').off('click','#kit-front'); $('#answer').off('click','#kit-side'); 
					$('#answer4').append(chainAnswerStyleBodyRear + answerStyleBodyRear);
					$('#answer4').show("slow");				
				});


		$('#answer').on('click','#sporty-rim',function(){
				$('#sporty-rim').addClass('visited');
				$('#answer').off('click','#sporty-body'); $('#answer').off('click','#sporty-sticker'); $('#answer').off('click','#sporty-hood');
				$('#answer').off('click','#sporty-rim'); $('#answer').off('click','#sporty-tint'); 	
				$('#answer2').append(chainAnswerStyleRim + answerStyleRim);
				$('#answer2').show("slow");				
		});
		$('#answer').on('click','#sporty-sticker',function(){
				$('#sporty-sticker').addClass('visited');
				$('#answer').off('click','#sporty-body'); $('#answer').off('click','#sporty-sticker'); $('#answer').off('click','#sporty-hood');
				$('#answer').off('click','#sporty-rim'); $('#answer').off('click','#sporty-tint'); 	
				$('#answer2').append(chainAnswerStyleSticker + answerStyleSticker);
				$('#answer2').show("slow");				
		});
		$('#answer').on('click','#sporty-hood',function(){
				$('#sporty-hood').addClass('visited');
				$('#answer').off('click','#sporty-body'); $('#answer').off('click','#sporty-sticker'); $('#answer').off('click','#sporty-hood');
				$('#answer').off('click','#sporty-rim'); $('#answer').off('click','#sporty-tint'); 		
				$('#answer2').append(sportyHood);
				$('#answer2').show("slow");				
		});
				$('#answer2').on('click','#hood-yes',function(){
					$('#hood-yes').addClass('visited');
					$('#answer2').off('click','#hood-no'); $('#answer').off('click','#hood-yes'); 
					$('#answer3').append(chainAnswerStyleHood + answerStyleHood);
					$('#answer3').show("slow");				
				});
				$('#answer2').on('click','#hood-no',function(){
					$('#hood-no').addClass('visited');
					$('#answer2').off('click','#hood-no'); $('#answer').off('click','#hood-yes'); 
					$('#answer3').append(chainAnswerStyleWrap + answerStyleWrap);
					$('#answer3').show("slow");				
				});
		$('#answer').on('click','#sporty-tint',function(){
				$('#sporty-tint').addClass('visited');
				$('#answer').off('click','#sporty-body'); $('#answer').off('click','#sporty-sticker'); $('#answer').off('click','#sporty-hood');
				$('#answer').off('click','#sporty-rim'); $('#answer').off('click','#sporty-tint');		
				$('#answer2').append(chainAnswerStyleTint + answerStyleTint);
				$('#answer2').show("slow");				
		});
		//autoshow
		$('#answer').on('click','#autoshow-interior',function(){
				$('#autoshow-interior').addClass('visited');
				$('#answer').off('click','#autoshow-interior'); $('#answer').off('click','#autoshow-lamp'); $('#answer').off('click','#autoshow-engine');
				$('#answer').off('click','#autoshow-rim'); $('#answer').off('click','#autoshow-boot'); $('#answer').off('click','#autoshow-paint');		
				$('#answer2').append(interior);
				$('#answer2').show("slow");				
		});
				$('#answer2').on('click','#interior-lamp',function(){
					$('#hood-lamp').addClass('visited');
					$('#answer2').off('click','#interior-wrap'); $('#answer').off('click','#interior-seat'); $('#answer').off('click','#interior-steering'); $('#answer').off('click','#interior-lamp'); 
					$('#answer3').append(chainAnswerInterioLamp + answerStyleInteriorLamp);
					$('#answer3').show("slow");				
				});
				$('#answer2').on('click','#interior-wrap',function(){
					$('#interior-wrap').addClass('visited');
					$('#answer2').off('click','#interior-wrap'); $('#answer').off('click','#interior-seat'); $('#answer').off('click','#interior-steering'); $('#answer').off('click','#interior-lamp'); 
					$('#answer3').append(chainAnswerInteriorWrap + answerStyleInteriorWrap);
					$('#answer3').show("slow");
				});		
				$('#answer2').on('click','#interior-seat',function(){
					$('#interior-seat').addClass('visited');
					$('#answer2').off('click','#interior-wrap'); $('#answer').off('click','#interior-seat'); $('#answer').off('click','#interior-steering'); $('#answer').off('click','#interior-lamp');  
					$('#answer3').append(chainAnswerInteriorSeat + answerStyleInteriorSeat);
					$('#answer3').show("slow");				
				});
				$('#answer2').on('click','#interior-steering',function(){
					$('#interior-steering').addClass('visited');
					$('#answer2').off('click','#interior-wrap'); $('#answer').off('click','#interior-seat'); $('#answer').off('click','#interior-steering'); $('#answer').off('click','#interior-lamp'); 
					$('#answer3').append(chainAnswerInteriorSteering + answerStyleInteriorSteering);
					$('#answer3').show("slow");
				});				
		$('#answer').on('click','#autoshow-rim',function(){
				$('#autoshow-rim').addClass('visited');
				$('#answer').off('click','#autoshow-interior'); $('#answer').off('click','#autoshow-lamp'); $('#answer').off('click','#autoshow-engine');
				$('#answer').off('click','#autoshow-rim'); $('#answer').off('click','#autoshow-boot'); $('#answer').off('click','#autoshow-paint');		
				$('#answer2').append(chainAnswerAutoRim + answerStyleAutoRim);
				$('#answer2').show("slow");				
		});
		$('#answer').on('click','#autoshow-lamp',function(){
				$('#autoshow-lamp').addClass('visited');
				$('#answer').off('click','#autoshow-interior'); $('#answer').off('click','#autoshow-lamp'); $('#answer').off('click','#autoshow-engine');
				$('#answer').off('click','#autoshow-rim'); $('#answer').off('click','#autoshow-boot'); $('#answer').off('click','#autoshow-paint');		
				$('#answer2').append(chainAnswerAutoNeon + answerStyleAutoNeon);
				$('#answer2').show("slow");				
		});
		$('#answer').on('click','#autoshow-boot',function(){
				$('#autoshow-boot').addClass('visited');
				$('#answer').off('click','#autoshow-interior'); $('#answer').off('click','#autoshow-lamp'); $('#answer').off('click','#autoshow-engine');
				$('#answer').off('click','#autoshow-rim'); $('#answer').off('click','#autoshow-boot'); $('#answer').off('click','#autoshow-paint');		
				$('#answer2').append(autoBoot);
				$('#answer2').show("slow");				
		});
				$('#answer2').on('click','#boot-speaker',function(){
					$('#boot-speaker').addClass('visited');
					$('#answer2').off('click','#boot-neon'); $('#answer').off('click','#boot-speaker');
					$('#answer3').append(chainAnswerSpeaker + answerStyleSpeaker);
					$('#answer3').show("slow");				
				});
				$('#answer2').on('click','#boot-neon',function(){
					$('#boot-neon').addClass('visited');
					$('#answer2').off('click','#boot-neon'); $('#answer').off('click','#boot-speaker'); 
					$('#answer3').append(chainAnswerExtNeon + answerStyleExtNeon);
					$('#answer3').show("slow");
					});
		$('#answer').on('click','#autoshow-engine',function(){
				$('#autoshow-engine').addClass('visited');
				$('#answer').off('click','#autoshow-interior'); $('#answer').off('click','#autoshow-lamp'); $('#answer').off('click','#autoshow-engine');
				$('#answer').off('click','#autoshow-rim'); $('#answer').off('click','#autoshow-boot'); $('#answer').off('click','#autoshow-paint');		
				$('#answer2').append(autoEngine);
				$('#answer2').show("slow");				
		});
				$('#answer2').on('click','#dirty-yes',function(){
					$('#dirty-yes').addClass('visited');
					$('#answer2').off('click','#dirty-no'); $('#answer').off('click','#dirty-yes');
					$('#answer3').append(chainAnswerEngClean + answerStyleEngClean);
					$('#answer3').show("slow");				
				});
				$('#answer2').on('click','#dirty-no',function(){
					$('#dirty-no').addClass('visited');
					$('#answer2').off('click','#dirty-no'); $('#answer').off('click','#dirty-yes'); 
					$('#answer3').append(chainAnswerEngWiring + answerStyleEngWiring);
					$('#answer3').show("slow");
					});
		$('#answer').on('click','#autoshow-paint',function(){
				$('#autoshow-body').addClass('visited');
				$('#answer').off('click','#autoshow-interior'); $('#answer').off('click','#autoshow-lamp'); $('#answer').off('click','#autoshow-engine');
				$('#answer').off('click','#autoshow-rim'); $('#answer').off('click','#autoshow-boot'); $('#answer').off('click','#autoshow-paint');		
				$('#answer2').append(autoPaint);
				$('#answer2').show("slow");				
		});
					$('#answer2').on('click','#paint-yes',function(){
						$('#paint-yes').addClass('visited');
						$('#answer2').off('click','#paint-no'); $('#answer').off('click','#paint-yes');
						$('#answer3').append(chainAnswerWrapPaint + answerStyleWrapPaint);
						$('#answer3').show("slow");				
					});
					$('#answer2').on('click','#paint-no',function(){
						$('#paint-no').addClass('visited');
						$('#answer2').off('click','#paint-no'); $('#answer').off('click','#paint-yes'); 
						$('#answer3').append(chainAnswerNewPaint + answerStyleNewPaint);
						$('#answer3').show("slow");
						});
		//Diesel
		$('#answer').on('click','#diesel-yes',function(){
				$('#diesel-yes').addClass('visited');
				$('#answer').off('click','#diesel-no');	$('#answer').off('click','#diesel-yes');			
				$('#answer2').append(askDieselUpgrade);
				$('#answer2').show("slow");

			});
					$('#answer2').on('click','#diesel-pc',function(){
						$('#diesel-pc').addClass('visited');
						$('#answer2').off('click','#diesel-pc'); $('#answer').off('click','#diesel-exh');$('#answer').off('click','#diesel-inj');
						$('#answer3').append(chainAnswerDieChip + answerOffEngDieChip);
						$('#answer3').show("slow");				
					});
					$('#answer2').on('click','#diesel-exh',function(){
						$('#diesel-exh').addClass('visited');
						$('#answer2').off('click','#diesel-pc'); $('#answer').off('click','#diesel-exh');$('#answer').off('click','#diesel-inj');
						$('#answer3').append(chainAnswerDieExhaust + answerOffEngDieExhaust);
						$('#answer3').show("slow");
						});
					$('#answer2').on('click','#diesel-inj',function(){
						$('#diesel-inj').addClass('visited');
						$('#answer2').off('click','#diesel-pc'); $('#answer').off('click','#diesel-exh');$('#answer').off('click','#diesel-inj');
						$('#answer3').append(chainAnswerDieLPG + answerOffEngDieLPG);
						$('#answer3').show("slow");				
					});

			$('#answer').on('click','#diesel-no',function(){
				$('#diesel-no').addClass('visited');
				$('#answer').off('click','#diesel-yes'); $('#answer').off('click','#diesel-no');	
				$('#answer2').append(askPetrolUpgrade);
				$('#answer2').show("slow");
				
			});
			$('#answer2').on('click','#petrol-pc',function(){
						$('#petrol-pc').addClass('visited');
						$('#answer2').off('click','#petrol-pc'); $('#answer').off('click','#petrol-exh');$('#answer2').off('click','#petrol-inj'); $('#answer').off('click','#petrol-sb');
						$('#answer3').append(chainAnswerPetChip + answerOffEngPetChip);
						$('#answer3').show("slow");				
					});
					$('#answer2').on('click','#petrol-exh',function(){
						$('#petrol-exh').addClass('visited');
						$('#answer2').off('click','#petrol-pc'); $('#answer').off('click','#petrol-exh');$('#answer2').off('click','#petrol-inj'); $('#answer').off('click','#petrol-sb');
						$('#answer3').append(chainAnswerPetExhaust + answerOffEngPetExhaust);
						$('#answer3').show("slow");
						});
					$('#answer2').on('click','#petrol-inj',function(){
						$('#petrol-inj').addClass('visited');
						$('#answer2').off('click','#petrol-pc'); $('#answer').off('click','#petrol-exh');$('#answer2').off('click','#petrol-inj'); $('#answer').off('click','#petrol-sb');
						$('#answer3').append(chainAnswerPetCharger + answerOffEngPetCharger);
						$('#answer3').show("slow");				
					});
					$('#answer2').on('click','#petrol-sb',function(){
						$('#petrol-sb').addClass('visited');
						$('#answer2').off('click','#petrol-pc'); $('#answer').off('click','#petrol-exh');$('#answer2').off('click','#petrol-inj'); $('#answer').off('click','#petrol-sb');
						$('#answer3').append(chainAnswerPetbooster + answerOffEngPetBooster);
						$('#answer3').show("slow");
						});		

	//suspension 4x4
	$('#answer').on('click','#airbag-yes',function(){
				$('#airbag-yes').addClass('visited');
				$('#answer').off('click','#airbag-no');	$('#answer').off('click','#airbag-yes');			
				$('#answer2').append(chainAnswerSusHardcore + answerOffSusHardcore);
				$('#answer2').show("slow");

			});
	$('#answer').on('click','#airbag-no',function(){
				$('#airbag-no').addClass('visited');
				$('#answer').off('click','#airbag-yes'); $('#answer').off('click','#airbag-no');	
				$('#answer2').append(askHeavyload);
				$('#answer2').show("slow");				
			});

					$('#answer2').on('click','#hvL-yes',function(){
						$('#hvL-yes').addClass('visited');
						$('#answer2').off('click','#hvL-no'); $('#answer').off('click','#hvL-yes');
						$('#answer3').append(chainAnswerSusAir + answerOffSusAir);
						$('#answer3').show("slow");				
					});
					$('#answer2').on('click','#hvL-no',function(){
						$('#hvL-no').addClass('visited');
						$('#answer2').off('click','#hvL-no'); $('#answer').off('click','#hvL-yes'); 
						$('#answer3').append(chainAnswerSusAir + answerOffSusNormal);
						$('#answer3').show("slow");
						});

			//tyre
			$('#answer').on('click','#ter-mud',function(){
				$('#ter-mud').addClass('visited');
				$('#answer').off('click','#ter-mud');	$('#answer').off('click','#ter-all');$('#answer').off('click','#ter-high');			
				$('#answer2').append(chainAnswerMud + answerOffTyreMud);
				$('#answer2').show("slow");

			});
			$('#answer').on('click','#ter-all',function(){
				$('#ter-all').addClass('visited');
				$('#answer').off('click','#ter-mud');	$('#answer').off('click','#ter-all');$('#answer').off('click','#ter-high');		
				$('#answer2').append(chainAnswerOffAll + answerOffTyreAll);
				$('#answer2').show("slow");				
			});				
			$('#answer').on('click','#ter-high',function(){
				$('#ter-high').addClass('visited');
				$('#answer').off('click','#ter-mud');	$('#answer').off('click','#ter-all');$('#answer').off('click','#ter-high');	
				$('#answer2').append(chainAnswerOffHigh + answerOffTyreLight);
				$('#answer2').show("slow");				
			});	

			//body kit 4x4 offroad
			$('#answer').on('click','#offb-bullbar',function(){
				$('#offb-bullbar').addClass('visited');
				$('#answer').off('click','#offb-bullbar');	$('#answer').off('click','#offb-rs');$('#answer').off('click','#offb-plates');	$('#answer').off('click','#offb-rc');				
				$('#answer2').append(askComp);
				$('#answer2').show("slow");

			});
					$('#answer2').on('click','#offcomp-yes',function(){
						$('#offcomp-yes').addClass('visited');
						$('#answer2').off('click','#offcomp-no'); $('#answer').off('click','#offcomp-yes');
						$('#answer3').append(chainAnswerOffBullYes + answerOffBodyBullYes);
						$('#answer3').show("slow");				
					});
					$('#answer2').on('click','#offcomp-no',function(){
						$('#offcomp-no').addClass('visited');
						$('#answer2').off('click','#offcomp-no'); $('#answer').off('click','#offcomp-yes'); 
						$('#answer3').append(chainAnswerOffBullNo + answerOffBodyBullNo);
						$('#answer3').show("slow");
						});

			$('#answer').on('click','#offb-rs',function(){
				$('#offb-rs').addClass('visited');
				$('#answer').off('click','#offb-bullbar');	$('#answer').off('click','#offb-rs');$('#answer').off('click','#offb-plates');	$('#answer').off('click','#offb-rc');		
				$('#answer2').append(chainAnswerOffRS + answerOffBodyRockSlider);
				$('#answer2').show("slow");

			});
			$('#answer').on('click','#offb-plates',function(){
				$('#offb-plates').addClass('visited');
				$('#answer').off('click','#offb-bullbar');	$('#answer').off('click','#offb-rs');$('#answer').off('click','#offb-plates');	$('#answer').off('click','#offb-rc');				
				$('#answer2').append(chainAnswerOffBB + answerOffBodyBash);
				$('#answer2').show("slow");

			});
			$('#answer').on('click','#offb-rc',function(){
				$('#offb-rc').addClass('visited');
				$('#answer').off('click','#offb-bullbar');	$('#answer').off('click','#offb-rs');$('#answer').off('click','#offb-plates');	$('#answer').off('click','#offb-rc');				
				$('#answer2').append(chainAnswerOffBC + answerOffBodyCage);
				$('#answer2').show("slow");

			});


			//attachy 4x4 offroad

			$('#answer').on('click','#attach-light',function(){
				$('#attach-light').addClass('visited');
				$('#answer').off('click','#attach-light');	$('#answer').off('click','#attach-snorkel');$('#answer').off('click','#attach-tow');		
				$('#answer2').append(askCamp);
				$('#answer2').show("slow");

			});
					$('#answer2').on('click','#offcamp-yes',function(){
						$('#offcamp-yes').addClass('visited');
						$('#answer2').off('click','#offcamp-no'); $('#answer').off('click','#offcamp-yes');
						$('#answer3').append(chainAnswerOffLED + answerOffAttYesLED);
						$('#answer3').show("slow");				
					});
					$('#answer2').on('click','#offcamp-no',function(){
						$('#offcamp-no').addClass('visited');
						$('#answer2').off('click','#offcamp-no'); $('#answer').off('click','#offcamp-yes'); 
						$('#answer3').append(chainAnswerOffHid + answerOffAttNoHID);
						$('#answer3').show("slow");
						});

			$('#answer').on('click','#attach-snorkel',function(){
				$('#attach-snorkel').addClass('visited');
				$('#answer').off('click','#attach-light');	$('#answer').off('click','#attach-snorkel');$('#answer').off('click','#attach-tow');	
				$('#answer2').append(chainAnswerOffSno + answerOffAttSnorkel);
				$('#answer2').show("slow");

			});
			$('#answer').on('click','#attach-tow',function(){
				$('#attach-tow').addClass('visited');
				$('#answer').off('click','#attach-light');	$('#answer').off('click','#attach-snorkel');$('#answer').off('click','#attach-tow');
				$('#answer2').append(chainAnswerOffAttTP + answerOffAttTowPoint);
				$('#answer2').show("slow");

			});

			//touring
	$('#answer').on('click','#gps-yes',function(){
				$('#gps-yes').addClass('visited');
				$('#answer').off('click','#gps-no');	$('#answer').off('click','#gps-yes');			
				$('#answer2').append(chainAnswerTouNavYes + answerTouNavYes);
				$('#answer2').show("slow");

			});
	$('#answer').on('click','#gps-no',function(){
				$('#gps-no').addClass('visited');
				$('#answer').off('click','#gps-yes'); $('#answer').off('click','#gps-no');	
				$('#answer2').append( chainAnswerTouNavNo + answerTouNavNo);
				$('#answer2').show("slow");				
			});


	$('#answer').on('click','#fb-yes',function(){
				$('#fb-yes').addClass('visited');
				$('#answer').off('click','#fb-no');	$('#answer').off('click','#fb-yes');			
				$('#answer2').append(chainAnswerTouBodyYes + answerTouBodyYes);
				$('#answer2').show("slow");

			});
	$('#answer').on('click','#fb-no',function(){
				$('#fb-no').addClass('visited');
				$('#answer').off('click','#fb-yes'); $('#answer').off('click','#fb-no');	
				$('#answer2').append(chainAnswerTouBodyNo + answerTouBodyNo);
				$('#answer2').show("slow");				
			});


	$('#answer').on('click','#longtank-yes',function(){
				$('#longtank-yes').addClass('visited');
				$('#answer').off('click','#longtank-no');	$('#answer').off('click','#longtank-yes');			
				$('#answer2').append(chainAnswerTouTank + answerTouTankYes);
				$('#answer2').show("slow");
			});
	$('#answer').on('click','#longtank-no',function(){
				$('#longtank-no').addClass('visited');
				$('#answer').off('click','#longtank-yes'); $('#answer').off('click','#longtank-no');	
				$('#answer2').append(chainAnswerTouTankNo + answerTouTankNo);
				$('#answer2').show("slow");				
			});

					$('#answer').on('click','#tattach-rt',function(){
						$('#tattach-rt').addClass('visited');
						$('#answer').off('click','#tattach-rt'); $('#answer').off('click','#tattach-aw');
						$('#answer').off('click','#tattach-askute'); $('#answer').off('click','#tattach-freez');
						$('#answer').off('click','#tattach-2tyre'); $('#answer').off('click','#tattach-sp');
						$('#answer').off('click','#tattach-snork');
						$('#answer3').append(chainAnswerTouAttRoof + answerTouAttRoofTent);
						$('#answer3').show("slow");				
					});
					$('#answer').on('click','#tattach-aw',function(){
						$('#tattach-aw').addClass('visited');
						$('#answer').off('click','#tattach-rt'); $('#answer').off('click','#tattach-aw');
						$('#answer').off('click','#tattach-askute'); $('#answer').off('click','#tattach-freez');
						$('#answer').off('click','#tattach-2tyre'); $('#answer').off('click','#tattach-sp');
						$('#answer').off('click','#tattach-snork');
						$('#answer3').append(chainAnswerTouAttAWn + answerTouAttAwning);
						$('#answer3').show("slow");
					});
					$('#answer').on('click','#tattach-freez',function(){
						$('#tattach-freez').addClass('visited');
						$('#answer').off('click','#tattach-rt'); $('#answer').off('click','#tattach-aw');
						$('#answer').off('click','#tattach-askute'); $('#answer').off('click','#tattach-freez');
						$('#answer').off('click','#tattach-2tyre'); $('#answer').off('click','#tattach-sp');
						$('#answer').off('click','#tattach-snork');
						$('#answer3').append(chainAnswerTouAttFrez + answerTouAttFrez);
						$('#answer3').show("slow");				
					});
					$('#answer').on('click','#tattach-sp',function(){
						$('#tattach-sp').addClass('visited');
						$('#answer').off('click','#tattach-rt'); $('#answer').off('click','#tattach-aw');
						$('#answer').off('click','#tattach-askute'); $('#answer').off('click','#tattach-freez');
						$('#answer').off('click','#tattach-2tyre'); $('#answer').off('click','#tattach-sp');
						$('#answer').off('click','#tattach-snork');
						$('#answer3').append(chainAnswerTouAttSolar + answerTouAttSolar);
						$('#answer3').show("slow");
					});
					$('#answer').on('click','#tattach-snork',function(){
						$('#tattach-snork').addClass('visited');
						$('#answer').off('click','#tattach-rt'); $('#answer').off('click','#tattach-aw');
						$('#answer').off('click','#tattach-askute'); $('#answer').off('click','#tattach-freez');
						$('#answer').off('click','#tattach-2tyre'); $('#answer').off('click','#tattach-sp');
						$('#answer').off('click','#tattach-snork');
						$('#answer3').append(chainAnswerTouAttSnorkel + answerTouAttSnorkel);
						$('#answer3').show("slow");				
					});
					$('#answer').on('click','#tattach-2tyre',function(){
						$('#tattach-2tyre').addClass('visited');
						$('#answer').off('click','#tattach-rt'); $('#answer').off('click','#tattach-aw');
						$('#answer').off('click','#tattach-askute'); $('#answer').off('click','#tattach-freez');
						$('#answer').off('click','#tattach-2tyre'); $('#answer').off('click','#tattach-sp');
						$('#answer').off('click','#tattach-snork');
						$('#answer3').append(chainAnswerTouAttTyre + answerTouAttTyre);
						$('#answer3').show("slow");
					});
					$('#answer').on('click','#tattach-askute',function(){
						$('#tattach-askute').addClass('visited');
						$('#answer').off('click','#tattach-rt'); $('#answer').off('click','#tattach-aw');
						$('#answer').off('click','#tattach-askute'); $('#answer').off('click','#tattach-freez');
						$('#answer').off('click','#tattach-2tyre'); $('#answer').off('click','#tattach-sp');
						$('#answer').off('click','#tattach-snork');
						$('#answer3').append(askUte);
						$('#answer3').show("slow");				
					});


					$('#answer3').on('click','#ute-yes',function(){
						$('#ute-yes').addClass('visited');
						$('#answer3').off('click','#ute-no'); $('#answer3').off('click','#ute-yes');
						$('#answer4').append(chainAnswerTouAttCanopy + answerTouAttCanopy);
						$('#answer4').show("slow");				
					});
					$('#answer3').on('click','#ute-no',function(){
						$('#ute-no').addClass('visited');
						$('#answer3').off('click','#ute-no'); $('#answer3').off('click','#ute-yes'); 
						$('#answer4').append(chainAnswerTouAttRRoof + answerTouAttRoofRack);
						$('#answer4').show("slow");
					});	
		//end of document
	});
