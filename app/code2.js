gdjs.input_32scene1Code = {};
gdjs.input_32scene1Code.GDTiledForestBackgroundObjects1= [];
gdjs.input_32scene1Code.GDTiledForestBackgroundObjects2= [];
gdjs.input_32scene1Code.GDTiledForestBackgroundObjects3= [];
gdjs.input_32scene1Code.GDWallMidObjects1= [];
gdjs.input_32scene1Code.GDWallMidObjects2= [];
gdjs.input_32scene1Code.GDWallMidObjects3= [];
gdjs.input_32scene1Code.GDCrate3Objects1= [];
gdjs.input_32scene1Code.GDCrate3Objects2= [];
gdjs.input_32scene1Code.GDCrate3Objects3= [];
gdjs.input_32scene1Code.GDPlatform1Objects1= [];
gdjs.input_32scene1Code.GDPlatform1Objects2= [];
gdjs.input_32scene1Code.GDPlatform1Objects3= [];
gdjs.input_32scene1Code.GDCrate1Objects1= [];
gdjs.input_32scene1Code.GDCrate1Objects2= [];
gdjs.input_32scene1Code.GDCrate1Objects3= [];
gdjs.input_32scene1Code.GDCrate2Objects1= [];
gdjs.input_32scene1Code.GDCrate2Objects2= [];
gdjs.input_32scene1Code.GDCrate2Objects3= [];
gdjs.input_32scene1Code.GDBlueButtonObjects1= [];
gdjs.input_32scene1Code.GDBlueButtonObjects2= [];
gdjs.input_32scene1Code.GDBlueButtonObjects3= [];
gdjs.input_32scene1Code.GDTitleObjects1= [];
gdjs.input_32scene1Code.GDTitleObjects2= [];
gdjs.input_32scene1Code.GDTitleObjects3= [];
gdjs.input_32scene1Code.GDfloorIcon3Objects1= [];
gdjs.input_32scene1Code.GDfloorIcon3Objects2= [];
gdjs.input_32scene1Code.GDfloorIcon3Objects3= [];
gdjs.input_32scene1Code.GDfloorIcon2Objects1= [];
gdjs.input_32scene1Code.GDfloorIcon2Objects2= [];
gdjs.input_32scene1Code.GDfloorIcon2Objects3= [];
gdjs.input_32scene1Code.GDfloorIcon1Objects1= [];
gdjs.input_32scene1Code.GDfloorIcon1Objects2= [];
gdjs.input_32scene1Code.GDfloorIcon1Objects3= [];
gdjs.input_32scene1Code.GDPlayerObjects1= [];
gdjs.input_32scene1Code.GDPlayerObjects2= [];
gdjs.input_32scene1Code.GDPlayerObjects3= [];
gdjs.input_32scene1Code.GDSmallMushroomObjects1= [];
gdjs.input_32scene1Code.GDSmallMushroomObjects2= [];
gdjs.input_32scene1Code.GDSmallMushroomObjects3= [];
gdjs.input_32scene1Code.GDBigMushroomObjects1= [];
gdjs.input_32scene1Code.GDBigMushroomObjects2= [];
gdjs.input_32scene1Code.GDBigMushroomObjects3= [];
gdjs.input_32scene1Code.GDGreyButtonObjects1= [];
gdjs.input_32scene1Code.GDGreyButtonObjects2= [];
gdjs.input_32scene1Code.GDGreyButtonObjects3= [];
gdjs.input_32scene1Code.GDYellowButtonObjects1= [];
gdjs.input_32scene1Code.GDYellowButtonObjects2= [];
gdjs.input_32scene1Code.GDYellowButtonObjects3= [];
gdjs.input_32scene1Code.GDPointObjects1= [];
gdjs.input_32scene1Code.GDPointObjects2= [];
gdjs.input_32scene1Code.GDPointObjects3= [];
gdjs.input_32scene1Code.GDBluePanelObjects1= [];
gdjs.input_32scene1Code.GDBluePanelObjects2= [];
gdjs.input_32scene1Code.GDBluePanelObjects3= [];
gdjs.input_32scene1Code.GDNextObjects1= [];
gdjs.input_32scene1Code.GDNextObjects2= [];
gdjs.input_32scene1Code.GDNextObjects3= [];
gdjs.input_32scene1Code.GDNewObjectObjects1= [];
gdjs.input_32scene1Code.GDNewObjectObjects2= [];
gdjs.input_32scene1Code.GDNewObjectObjects3= [];
gdjs.input_32scene1Code.GDCenterObjects1= [];
gdjs.input_32scene1Code.GDCenterObjects2= [];
gdjs.input_32scene1Code.GDCenterObjects3= [];

gdjs.input_32scene1Code.conditionTrue_0 = {val:false};
gdjs.input_32scene1Code.condition0IsTrue_0 = {val:false};
gdjs.input_32scene1Code.condition1IsTrue_0 = {val:false};
gdjs.input_32scene1Code.conditionTrue_1 = {val:false};
gdjs.input_32scene1Code.condition0IsTrue_1 = {val:false};
gdjs.input_32scene1Code.condition1IsTrue_1 = {val:false};


gdjs.input_32scene1Code.mapOfGDgdjs_46input_9532scene1Code_46GDBlueButtonObjects1ObjectsGDgdjs_46input_9532scene1Code_46GDGreyButtonObjects1ObjectsGDgdjs_46input_9532scene1Code_46GDYellowButtonObjects1Objects = Hashtable.newFrom({"BlueButton": gdjs.input_32scene1Code.GDBlueButtonObjects1, "GreyButton": gdjs.input_32scene1Code.GDGreyButtonObjects1, "YellowButton": gdjs.input_32scene1Code.GDYellowButtonObjects1});gdjs.input_32scene1Code.eventsList0 = function(runtimeScene) {

{


gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.input_32scene1Code.conditionTrue_1 = gdjs.input_32scene1Code.condition0IsTrue_0;
gdjs.input_32scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13362180);
}
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.input_32scene1Code.GDBlueButtonObjects1, gdjs.input_32scene1Code.GDBlueButtonObjects2);

gdjs.copyArray(gdjs.input_32scene1Code.GDGreyButtonObjects1, gdjs.input_32scene1Code.GDGreyButtonObjects2);

gdjs.copyArray(gdjs.input_32scene1Code.GDYellowButtonObjects1, gdjs.input_32scene1Code.GDYellowButtonObjects2);

{for(var i = 0, len = gdjs.input_32scene1Code.GDBlueButtonObjects2.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDBlueButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.05, 1.05, "bouncePast", 100, false, true);
}
for(var i = 0, len = gdjs.input_32scene1Code.GDGreyButtonObjects2.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDGreyButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.05, 1.05, "bouncePast", 100, false, true);
}
for(var i = 0, len = gdjs.input_32scene1Code.GDYellowButtonObjects2.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDYellowButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.05, 1.05, "bouncePast", 100, false, true);
}
}}

}


{


gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.input_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.input_32scene1Code.GDBlueButtonObjects1, gdjs.input_32scene1Code.GDBlueButtonObjects2);

gdjs.copyArray(gdjs.input_32scene1Code.GDGreyButtonObjects1, gdjs.input_32scene1Code.GDGreyButtonObjects2);

gdjs.copyArray(gdjs.input_32scene1Code.GDYellowButtonObjects1, gdjs.input_32scene1Code.GDYellowButtonObjects2);

{for(var i = 0, len = gdjs.input_32scene1Code.GDBlueButtonObjects2.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDBlueButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.95, 0.95, "easeOutQuad", 50, false, true);
}
for(var i = 0, len = gdjs.input_32scene1Code.GDGreyButtonObjects2.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDGreyButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.95, 0.95, "easeOutQuad", 50, false, true);
}
for(var i = 0, len = gdjs.input_32scene1Code.GDYellowButtonObjects2.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDYellowButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.95, 0.95, "easeOutQuad", 50, false, true);
}
}}

}


{


gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.input_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.input_32scene1Code.GDBlueButtonObjects1 */
/* Reuse gdjs.input_32scene1Code.GDGreyButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.input_32scene1Code.GDTitleObjects1);
/* Reuse gdjs.input_32scene1Code.GDYellowButtonObjects1 */
{for(var i = 0, len = gdjs.input_32scene1Code.GDBlueButtonObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDBlueButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.05, 1.05, "bouncePast", 100, false, true);
}
for(var i = 0, len = gdjs.input_32scene1Code.GDGreyButtonObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDGreyButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.05, 1.05, "bouncePast", 100, false, true);
}
for(var i = 0, len = gdjs.input_32scene1Code.GDYellowButtonObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDYellowButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.05, 1.05, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs.input_32scene1Code.GDTitleObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDTitleObjects1[i].setString("The Mass Of This Box : " + (gdjs.RuntimeObject.getVariableString(((gdjs.input_32scene1Code.GDYellowButtonObjects1.length === 0 ) ? ((gdjs.input_32scene1Code.GDGreyButtonObjects1.length === 0 ) ? ((gdjs.input_32scene1Code.GDBlueButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.input_32scene1Code.GDBlueButtonObjects1[0].getVariables()) : gdjs.input_32scene1Code.GDGreyButtonObjects1[0].getVariables()) : gdjs.input_32scene1Code.GDYellowButtonObjects1[0].getVariables()).get("value"))) + " Kg");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.input_32scene1Code.GDYellowButtonObjects1.length === 0 ) ? ((gdjs.input_32scene1Code.GDGreyButtonObjects1.length === 0 ) ? ((gdjs.input_32scene1Code.GDBlueButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.input_32scene1Code.GDBlueButtonObjects1[0].getVariables()) : gdjs.input_32scene1Code.GDGreyButtonObjects1[0].getVariables()) : gdjs.input_32scene1Code.GDYellowButtonObjects1[0].getVariables()).get("value"))));
}}

}


};gdjs.input_32scene1Code.mapOfGDgdjs_46input_9532scene1Code_46GDBlueButtonObjects1ObjectsGDgdjs_46input_9532scene1Code_46GDGreyButtonObjects1ObjectsGDgdjs_46input_9532scene1Code_46GDYellowButtonObjects1Objects = Hashtable.newFrom({"BlueButton": gdjs.input_32scene1Code.GDBlueButtonObjects1, "GreyButton": gdjs.input_32scene1Code.GDGreyButtonObjects1, "YellowButton": gdjs.input_32scene1Code.GDYellowButtonObjects1});gdjs.input_32scene1Code.mapOfGDgdjs_46input_9532scene1Code_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.input_32scene1Code.GDNextObjects1});gdjs.input_32scene1Code.eventsList1 = function(runtimeScene) {

{


gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.input_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "input scene2", false);
}}

}


};gdjs.input_32scene1Code.eventsList2 = function(runtimeScene) {

{


gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.input_32scene1Code.conditionTrue_1 = gdjs.input_32scene1Code.condition0IsTrue_0;
gdjs.input_32scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13368108);
}
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.input_32scene1Code.GDNextObjects1, gdjs.input_32scene1Code.GDNextObjects2);

{for(var i = 0, len = gdjs.input_32scene1Code.GDNextObjects2.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDNextObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.1, 1.1, "bouncePast", 100, false, true);
}
}}

}


{


gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.input_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.input_32scene1Code.GDNextObjects1, gdjs.input_32scene1Code.GDNextObjects2);

{for(var i = 0, len = gdjs.input_32scene1Code.GDNextObjects2.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDNextObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.95, 0.95, "easeOutQuad", 50, false, true);
}
}}

}


{


gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.input_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.input_32scene1Code.GDNextObjects1 */
{for(var i = 0, len = gdjs.input_32scene1Code.GDNextObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDNextObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.1, 1.1, "bouncePast", 100, false, true);
}
}
{ //Subevents
gdjs.input_32scene1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.input_32scene1Code.mapOfGDgdjs_46input_9532scene1Code_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.input_32scene1Code.GDNextObjects1});gdjs.input_32scene1Code.eventsList3 = function(runtimeScene) {

{


gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.input_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.input_32scene1Code.GDCenterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.input_32scene1Code.GDPointObjects1);
{for(var i = 0, len = gdjs.input_32scene1Code.GDPointObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDPointObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.input_32scene1Code.GDPointObjects1[i].getVariables().get("value")))) + "Kg");
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.input_32scene1Code.GDCenterObjects1.length === 0 ) ? 0 :gdjs.input_32scene1Code.GDCenterObjects1[0].getX()), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.input_32scene1Code.GDCenterObjects1.length === 0 ) ? 0 :gdjs.input_32scene1Code.GDCenterObjects1[0].getY()), "", 0);
}{for(var i = 0, len = gdjs.input_32scene1Code.GDCenterObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDCenterObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.input_32scene1Code.GDBlueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.input_32scene1Code.GDGreyButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.input_32scene1Code.GDYellowButtonObjects1);

gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.input_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.input_32scene1Code.mapOfGDgdjs_46input_9532scene1Code_46GDBlueButtonObjects1ObjectsGDgdjs_46input_9532scene1Code_46GDGreyButtonObjects1ObjectsGDgdjs_46input_9532scene1Code_46GDYellowButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.input_32scene1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.input_32scene1Code.GDBlueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.input_32scene1Code.GDGreyButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.input_32scene1Code.GDYellowButtonObjects1);

gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.input_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.input_32scene1Code.mapOfGDgdjs_46input_9532scene1Code_46GDBlueButtonObjects1ObjectsGDgdjs_46input_9532scene1Code_46GDGreyButtonObjects1ObjectsGDgdjs_46input_9532scene1Code_46GDYellowButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.input_32scene1Code.GDBlueButtonObjects1 */
/* Reuse gdjs.input_32scene1Code.GDGreyButtonObjects1 */
/* Reuse gdjs.input_32scene1Code.GDYellowButtonObjects1 */
{for(var i = 0, len = gdjs.input_32scene1Code.GDBlueButtonObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDBlueButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 1, 1, "bouncePast", 100, false, true);
}
for(var i = 0, len = gdjs.input_32scene1Code.GDGreyButtonObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDGreyButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 1, 1, "bouncePast", 100, false, true);
}
for(var i = 0, len = gdjs.input_32scene1Code.GDYellowButtonObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDYellowButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 1, 1, "bouncePast", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.input_32scene1Code.GDNextObjects1);

gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.input_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.input_32scene1Code.mapOfGDgdjs_46input_9532scene1Code_46GDNextObjects1Objects, runtimeScene, true, false);
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.input_32scene1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.input_32scene1Code.GDNextObjects1);

gdjs.input_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.input_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.input_32scene1Code.mapOfGDgdjs_46input_9532scene1Code_46GDNextObjects1Objects, runtimeScene, true, true);
}if (gdjs.input_32scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.input_32scene1Code.GDNextObjects1 */
{for(var i = 0, len = gdjs.input_32scene1Code.GDNextObjects1.length ;i < len;++i) {
    gdjs.input_32scene1Code.GDNextObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 1, 1, "bouncePast", 100, false, true);
}
}}

}


{


{
}

}


};

gdjs.input_32scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.input_32scene1Code.GDTiledForestBackgroundObjects1.length = 0;
gdjs.input_32scene1Code.GDTiledForestBackgroundObjects2.length = 0;
gdjs.input_32scene1Code.GDTiledForestBackgroundObjects3.length = 0;
gdjs.input_32scene1Code.GDWallMidObjects1.length = 0;
gdjs.input_32scene1Code.GDWallMidObjects2.length = 0;
gdjs.input_32scene1Code.GDWallMidObjects3.length = 0;
gdjs.input_32scene1Code.GDCrate3Objects1.length = 0;
gdjs.input_32scene1Code.GDCrate3Objects2.length = 0;
gdjs.input_32scene1Code.GDCrate3Objects3.length = 0;
gdjs.input_32scene1Code.GDPlatform1Objects1.length = 0;
gdjs.input_32scene1Code.GDPlatform1Objects2.length = 0;
gdjs.input_32scene1Code.GDPlatform1Objects3.length = 0;
gdjs.input_32scene1Code.GDCrate1Objects1.length = 0;
gdjs.input_32scene1Code.GDCrate1Objects2.length = 0;
gdjs.input_32scene1Code.GDCrate1Objects3.length = 0;
gdjs.input_32scene1Code.GDCrate2Objects1.length = 0;
gdjs.input_32scene1Code.GDCrate2Objects2.length = 0;
gdjs.input_32scene1Code.GDCrate2Objects3.length = 0;
gdjs.input_32scene1Code.GDBlueButtonObjects1.length = 0;
gdjs.input_32scene1Code.GDBlueButtonObjects2.length = 0;
gdjs.input_32scene1Code.GDBlueButtonObjects3.length = 0;
gdjs.input_32scene1Code.GDTitleObjects1.length = 0;
gdjs.input_32scene1Code.GDTitleObjects2.length = 0;
gdjs.input_32scene1Code.GDTitleObjects3.length = 0;
gdjs.input_32scene1Code.GDfloorIcon3Objects1.length = 0;
gdjs.input_32scene1Code.GDfloorIcon3Objects2.length = 0;
gdjs.input_32scene1Code.GDfloorIcon3Objects3.length = 0;
gdjs.input_32scene1Code.GDfloorIcon2Objects1.length = 0;
gdjs.input_32scene1Code.GDfloorIcon2Objects2.length = 0;
gdjs.input_32scene1Code.GDfloorIcon2Objects3.length = 0;
gdjs.input_32scene1Code.GDfloorIcon1Objects1.length = 0;
gdjs.input_32scene1Code.GDfloorIcon1Objects2.length = 0;
gdjs.input_32scene1Code.GDfloorIcon1Objects3.length = 0;
gdjs.input_32scene1Code.GDPlayerObjects1.length = 0;
gdjs.input_32scene1Code.GDPlayerObjects2.length = 0;
gdjs.input_32scene1Code.GDPlayerObjects3.length = 0;
gdjs.input_32scene1Code.GDSmallMushroomObjects1.length = 0;
gdjs.input_32scene1Code.GDSmallMushroomObjects2.length = 0;
gdjs.input_32scene1Code.GDSmallMushroomObjects3.length = 0;
gdjs.input_32scene1Code.GDBigMushroomObjects1.length = 0;
gdjs.input_32scene1Code.GDBigMushroomObjects2.length = 0;
gdjs.input_32scene1Code.GDBigMushroomObjects3.length = 0;
gdjs.input_32scene1Code.GDGreyButtonObjects1.length = 0;
gdjs.input_32scene1Code.GDGreyButtonObjects2.length = 0;
gdjs.input_32scene1Code.GDGreyButtonObjects3.length = 0;
gdjs.input_32scene1Code.GDYellowButtonObjects1.length = 0;
gdjs.input_32scene1Code.GDYellowButtonObjects2.length = 0;
gdjs.input_32scene1Code.GDYellowButtonObjects3.length = 0;
gdjs.input_32scene1Code.GDPointObjects1.length = 0;
gdjs.input_32scene1Code.GDPointObjects2.length = 0;
gdjs.input_32scene1Code.GDPointObjects3.length = 0;
gdjs.input_32scene1Code.GDBluePanelObjects1.length = 0;
gdjs.input_32scene1Code.GDBluePanelObjects2.length = 0;
gdjs.input_32scene1Code.GDBluePanelObjects3.length = 0;
gdjs.input_32scene1Code.GDNextObjects1.length = 0;
gdjs.input_32scene1Code.GDNextObjects2.length = 0;
gdjs.input_32scene1Code.GDNextObjects3.length = 0;
gdjs.input_32scene1Code.GDNewObjectObjects1.length = 0;
gdjs.input_32scene1Code.GDNewObjectObjects2.length = 0;
gdjs.input_32scene1Code.GDNewObjectObjects3.length = 0;
gdjs.input_32scene1Code.GDCenterObjects1.length = 0;
gdjs.input_32scene1Code.GDCenterObjects2.length = 0;
gdjs.input_32scene1Code.GDCenterObjects3.length = 0;

gdjs.input_32scene1Code.eventsList3(runtimeScene);
return;

}

gdjs['input_32scene1Code'] = gdjs.input_32scene1Code;
