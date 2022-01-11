gdjs.finalCode = {};
gdjs.finalCode.GDTiledForestBackgroundObjects1= [];
gdjs.finalCode.GDTiledForestBackgroundObjects2= [];
gdjs.finalCode.GDTiledForestBackgroundObjects3= [];
gdjs.finalCode.GDWallMidObjects1= [];
gdjs.finalCode.GDWallMidObjects2= [];
gdjs.finalCode.GDWallMidObjects3= [];
gdjs.finalCode.GDCrate3Objects1= [];
gdjs.finalCode.GDCrate3Objects2= [];
gdjs.finalCode.GDCrate3Objects3= [];
gdjs.finalCode.GDPlatform1Objects1= [];
gdjs.finalCode.GDPlatform1Objects2= [];
gdjs.finalCode.GDPlatform1Objects3= [];
gdjs.finalCode.GDCrate1Objects1= [];
gdjs.finalCode.GDCrate1Objects2= [];
gdjs.finalCode.GDCrate1Objects3= [];
gdjs.finalCode.GDCrate2Objects1= [];
gdjs.finalCode.GDCrate2Objects2= [];
gdjs.finalCode.GDCrate2Objects3= [];
gdjs.finalCode.GDBlueButtonObjects1= [];
gdjs.finalCode.GDBlueButtonObjects2= [];
gdjs.finalCode.GDBlueButtonObjects3= [];
gdjs.finalCode.GDTitleObjects1= [];
gdjs.finalCode.GDTitleObjects2= [];
gdjs.finalCode.GDTitleObjects3= [];
gdjs.finalCode.GDfloorIcon3Objects1= [];
gdjs.finalCode.GDfloorIcon3Objects2= [];
gdjs.finalCode.GDfloorIcon3Objects3= [];
gdjs.finalCode.GDfloorIcon2Objects1= [];
gdjs.finalCode.GDfloorIcon2Objects2= [];
gdjs.finalCode.GDfloorIcon2Objects3= [];
gdjs.finalCode.GDfloorIcon1Objects1= [];
gdjs.finalCode.GDfloorIcon1Objects2= [];
gdjs.finalCode.GDfloorIcon1Objects3= [];
gdjs.finalCode.GDPlayerObjects1= [];
gdjs.finalCode.GDPlayerObjects2= [];
gdjs.finalCode.GDPlayerObjects3= [];
gdjs.finalCode.GDSmallMushroomObjects1= [];
gdjs.finalCode.GDSmallMushroomObjects2= [];
gdjs.finalCode.GDSmallMushroomObjects3= [];
gdjs.finalCode.GDBigMushroomObjects1= [];
gdjs.finalCode.GDBigMushroomObjects2= [];
gdjs.finalCode.GDBigMushroomObjects3= [];
gdjs.finalCode.GDstar2Objects1= [];
gdjs.finalCode.GDstar2Objects2= [];
gdjs.finalCode.GDstar2Objects3= [];
gdjs.finalCode.GDstarObjects1= [];
gdjs.finalCode.GDstarObjects2= [];
gdjs.finalCode.GDstarObjects3= [];
gdjs.finalCode.GDtitleObjects1= [];
gdjs.finalCode.GDtitleObjects2= [];
gdjs.finalCode.GDtitleObjects3= [];
gdjs.finalCode.GDTotalUsObjects1= [];
gdjs.finalCode.GDTotalUsObjects2= [];
gdjs.finalCode.GDTotalUsObjects3= [];
gdjs.finalCode.GDTotalMassObjects1= [];
gdjs.finalCode.GDTotalMassObjects2= [];
gdjs.finalCode.GDTotalMassObjects3= [];
gdjs.finalCode.GDnewGameObjects1= [];
gdjs.finalCode.GDnewGameObjects2= [];
gdjs.finalCode.GDnewGameObjects3= [];
gdjs.finalCode.GDGetAObjects1= [];
gdjs.finalCode.GDGetAObjects2= [];
gdjs.finalCode.GDGetAObjects3= [];
gdjs.finalCode.GDRedPanelObjects1= [];
gdjs.finalCode.GDRedPanelObjects2= [];
gdjs.finalCode.GDRedPanelObjects3= [];

gdjs.finalCode.conditionTrue_0 = {val:false};
gdjs.finalCode.condition0IsTrue_0 = {val:false};
gdjs.finalCode.condition1IsTrue_0 = {val:false};
gdjs.finalCode.conditionTrue_1 = {val:false};
gdjs.finalCode.condition0IsTrue_1 = {val:false};
gdjs.finalCode.condition1IsTrue_1 = {val:false};


gdjs.finalCode.eventsList0 = function(runtimeScene) {

{


gdjs.finalCode.condition0IsTrue_0.val = false;
{
{gdjs.finalCode.conditionTrue_1 = gdjs.finalCode.condition0IsTrue_0;
gdjs.finalCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > 1200);
}
}if (gdjs.finalCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.finalCode.GDstarObjects2);
{for(var i = 0, len = gdjs.finalCode.GDstarObjects2.length ;i < len;++i) {
    gdjs.finalCode.GDstarObjects2[i].setAnimationName("star");
}
}}

}


{


gdjs.finalCode.condition0IsTrue_0.val = false;
{
{gdjs.finalCode.conditionTrue_1 = gdjs.finalCode.condition0IsTrue_0;
gdjs.finalCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > 0.9);
}
}if (gdjs.finalCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.finalCode.GDstar2Objects1);
{for(var i = 0, len = gdjs.finalCode.GDstar2Objects1.length ;i < len;++i) {
    gdjs.finalCode.GDstar2Objects1[i].setAnimationName("star");
}
}}

}


};gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDBlueButtonObjects1Objects = Hashtable.newFrom({"BlueButton": gdjs.finalCode.GDBlueButtonObjects1});gdjs.finalCode.eventsList1 = function(runtimeScene) {

{


gdjs.finalCode.condition0IsTrue_0.val = false;
{
{gdjs.finalCode.conditionTrue_1 = gdjs.finalCode.condition0IsTrue_0;
gdjs.finalCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13830636);
}
}if (gdjs.finalCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.finalCode.GDBlueButtonObjects1, gdjs.finalCode.GDBlueButtonObjects2);

{for(var i = 0, len = gdjs.finalCode.GDBlueButtonObjects2.length ;i < len;++i) {
    gdjs.finalCode.GDBlueButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.95, 1.05, "bouncePast", 100, false, true);
}
}}

}


{


gdjs.finalCode.condition0IsTrue_0.val = false;
{
gdjs.finalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.finalCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.finalCode.GDBlueButtonObjects1, gdjs.finalCode.GDBlueButtonObjects2);

{for(var i = 0, len = gdjs.finalCode.GDBlueButtonObjects2.length ;i < len;++i) {
    gdjs.finalCode.GDBlueButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.85, 0.95, "easeOutQuad", 50, false, true);
}
}}

}


{


gdjs.finalCode.condition0IsTrue_0.val = false;
{
gdjs.finalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.finalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.finalCode.GDBlueButtonObjects1 */
{for(var i = 0, len = gdjs.finalCode.GDBlueButtonObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDBlueButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.95, 1.05, "bouncePast", 100, false, true);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start scene2", false);
}}

}


};gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDBlueButtonObjects1Objects = Hashtable.newFrom({"BlueButton": gdjs.finalCode.GDBlueButtonObjects1});gdjs.finalCode.eventsList2 = function(runtimeScene) {

{


gdjs.finalCode.condition0IsTrue_0.val = false;
{
gdjs.finalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.finalCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.finalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.finalCode.GDBlueButtonObjects1);

gdjs.finalCode.condition0IsTrue_0.val = false;
{
gdjs.finalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDBlueButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.finalCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.finalCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.finalCode.GDBlueButtonObjects1);

gdjs.finalCode.condition0IsTrue_0.val = false;
{
gdjs.finalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_46finalCode_46GDBlueButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.finalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.finalCode.GDBlueButtonObjects1 */
{for(var i = 0, len = gdjs.finalCode.GDBlueButtonObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDBlueButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 0.9, 1, "bouncePast", 100, false, true);
}
}}

}


};

gdjs.finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finalCode.GDTiledForestBackgroundObjects1.length = 0;
gdjs.finalCode.GDTiledForestBackgroundObjects2.length = 0;
gdjs.finalCode.GDTiledForestBackgroundObjects3.length = 0;
gdjs.finalCode.GDWallMidObjects1.length = 0;
gdjs.finalCode.GDWallMidObjects2.length = 0;
gdjs.finalCode.GDWallMidObjects3.length = 0;
gdjs.finalCode.GDCrate3Objects1.length = 0;
gdjs.finalCode.GDCrate3Objects2.length = 0;
gdjs.finalCode.GDCrate3Objects3.length = 0;
gdjs.finalCode.GDPlatform1Objects1.length = 0;
gdjs.finalCode.GDPlatform1Objects2.length = 0;
gdjs.finalCode.GDPlatform1Objects3.length = 0;
gdjs.finalCode.GDCrate1Objects1.length = 0;
gdjs.finalCode.GDCrate1Objects2.length = 0;
gdjs.finalCode.GDCrate1Objects3.length = 0;
gdjs.finalCode.GDCrate2Objects1.length = 0;
gdjs.finalCode.GDCrate2Objects2.length = 0;
gdjs.finalCode.GDCrate2Objects3.length = 0;
gdjs.finalCode.GDBlueButtonObjects1.length = 0;
gdjs.finalCode.GDBlueButtonObjects2.length = 0;
gdjs.finalCode.GDBlueButtonObjects3.length = 0;
gdjs.finalCode.GDTitleObjects1.length = 0;
gdjs.finalCode.GDTitleObjects2.length = 0;
gdjs.finalCode.GDTitleObjects3.length = 0;
gdjs.finalCode.GDfloorIcon3Objects1.length = 0;
gdjs.finalCode.GDfloorIcon3Objects2.length = 0;
gdjs.finalCode.GDfloorIcon3Objects3.length = 0;
gdjs.finalCode.GDfloorIcon2Objects1.length = 0;
gdjs.finalCode.GDfloorIcon2Objects2.length = 0;
gdjs.finalCode.GDfloorIcon2Objects3.length = 0;
gdjs.finalCode.GDfloorIcon1Objects1.length = 0;
gdjs.finalCode.GDfloorIcon1Objects2.length = 0;
gdjs.finalCode.GDfloorIcon1Objects3.length = 0;
gdjs.finalCode.GDPlayerObjects1.length = 0;
gdjs.finalCode.GDPlayerObjects2.length = 0;
gdjs.finalCode.GDPlayerObjects3.length = 0;
gdjs.finalCode.GDSmallMushroomObjects1.length = 0;
gdjs.finalCode.GDSmallMushroomObjects2.length = 0;
gdjs.finalCode.GDSmallMushroomObjects3.length = 0;
gdjs.finalCode.GDBigMushroomObjects1.length = 0;
gdjs.finalCode.GDBigMushroomObjects2.length = 0;
gdjs.finalCode.GDBigMushroomObjects3.length = 0;
gdjs.finalCode.GDstar2Objects1.length = 0;
gdjs.finalCode.GDstar2Objects2.length = 0;
gdjs.finalCode.GDstar2Objects3.length = 0;
gdjs.finalCode.GDstarObjects1.length = 0;
gdjs.finalCode.GDstarObjects2.length = 0;
gdjs.finalCode.GDstarObjects3.length = 0;
gdjs.finalCode.GDtitleObjects1.length = 0;
gdjs.finalCode.GDtitleObjects2.length = 0;
gdjs.finalCode.GDtitleObjects3.length = 0;
gdjs.finalCode.GDTotalUsObjects1.length = 0;
gdjs.finalCode.GDTotalUsObjects2.length = 0;
gdjs.finalCode.GDTotalUsObjects3.length = 0;
gdjs.finalCode.GDTotalMassObjects1.length = 0;
gdjs.finalCode.GDTotalMassObjects2.length = 0;
gdjs.finalCode.GDTotalMassObjects3.length = 0;
gdjs.finalCode.GDnewGameObjects1.length = 0;
gdjs.finalCode.GDnewGameObjects2.length = 0;
gdjs.finalCode.GDnewGameObjects3.length = 0;
gdjs.finalCode.GDGetAObjects1.length = 0;
gdjs.finalCode.GDGetAObjects2.length = 0;
gdjs.finalCode.GDGetAObjects3.length = 0;
gdjs.finalCode.GDRedPanelObjects1.length = 0;
gdjs.finalCode.GDRedPanelObjects2.length = 0;
gdjs.finalCode.GDRedPanelObjects3.length = 0;

gdjs.finalCode.eventsList2(runtimeScene);
return;

}

gdjs['finalCode'] = gdjs.finalCode;
