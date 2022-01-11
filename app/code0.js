gdjs.start_32scene2Code = {};
gdjs.start_32scene2Code.GDTiledForestBackgroundObjects1= [];
gdjs.start_32scene2Code.GDTiledForestBackgroundObjects2= [];
gdjs.start_32scene2Code.GDTiledForestBackgroundObjects3= [];
gdjs.start_32scene2Code.GDWallMidObjects1= [];
gdjs.start_32scene2Code.GDWallMidObjects2= [];
gdjs.start_32scene2Code.GDWallMidObjects3= [];
gdjs.start_32scene2Code.GDCrate3Objects1= [];
gdjs.start_32scene2Code.GDCrate3Objects2= [];
gdjs.start_32scene2Code.GDCrate3Objects3= [];
gdjs.start_32scene2Code.GDPlatform1Objects1= [];
gdjs.start_32scene2Code.GDPlatform1Objects2= [];
gdjs.start_32scene2Code.GDPlatform1Objects3= [];
gdjs.start_32scene2Code.GDCrate1Objects1= [];
gdjs.start_32scene2Code.GDCrate1Objects2= [];
gdjs.start_32scene2Code.GDCrate1Objects3= [];
gdjs.start_32scene2Code.GDCrate2Objects1= [];
gdjs.start_32scene2Code.GDCrate2Objects2= [];
gdjs.start_32scene2Code.GDCrate2Objects3= [];
gdjs.start_32scene2Code.GDBlueButtonObjects1= [];
gdjs.start_32scene2Code.GDBlueButtonObjects2= [];
gdjs.start_32scene2Code.GDBlueButtonObjects3= [];
gdjs.start_32scene2Code.GDTitleObjects1= [];
gdjs.start_32scene2Code.GDTitleObjects2= [];
gdjs.start_32scene2Code.GDTitleObjects3= [];
gdjs.start_32scene2Code.GDfloorIcon3Objects1= [];
gdjs.start_32scene2Code.GDfloorIcon3Objects2= [];
gdjs.start_32scene2Code.GDfloorIcon3Objects3= [];
gdjs.start_32scene2Code.GDfloorIcon2Objects1= [];
gdjs.start_32scene2Code.GDfloorIcon2Objects2= [];
gdjs.start_32scene2Code.GDfloorIcon2Objects3= [];
gdjs.start_32scene2Code.GDfloorIcon1Objects1= [];
gdjs.start_32scene2Code.GDfloorIcon1Objects2= [];
gdjs.start_32scene2Code.GDfloorIcon1Objects3= [];
gdjs.start_32scene2Code.GDPlayerObjects1= [];
gdjs.start_32scene2Code.GDPlayerObjects2= [];
gdjs.start_32scene2Code.GDPlayerObjects3= [];
gdjs.start_32scene2Code.GDSmallMushroomObjects1= [];
gdjs.start_32scene2Code.GDSmallMushroomObjects2= [];
gdjs.start_32scene2Code.GDSmallMushroomObjects3= [];
gdjs.start_32scene2Code.GDBigMushroomObjects1= [];
gdjs.start_32scene2Code.GDBigMushroomObjects2= [];
gdjs.start_32scene2Code.GDBigMushroomObjects3= [];
gdjs.start_32scene2Code.GDGreyButtonObjects1= [];
gdjs.start_32scene2Code.GDGreyButtonObjects2= [];
gdjs.start_32scene2Code.GDGreyButtonObjects3= [];
gdjs.start_32scene2Code.GDYellowButtonObjects1= [];
gdjs.start_32scene2Code.GDYellowButtonObjects2= [];
gdjs.start_32scene2Code.GDYellowButtonObjects3= [];
gdjs.start_32scene2Code.GDPointObjects1= [];
gdjs.start_32scene2Code.GDPointObjects2= [];
gdjs.start_32scene2Code.GDPointObjects3= [];
gdjs.start_32scene2Code.GDBluePanelObjects1= [];
gdjs.start_32scene2Code.GDBluePanelObjects2= [];
gdjs.start_32scene2Code.GDBluePanelObjects3= [];
gdjs.start_32scene2Code.GDNextObjects1= [];
gdjs.start_32scene2Code.GDNextObjects2= [];
gdjs.start_32scene2Code.GDNextObjects3= [];
gdjs.start_32scene2Code.GDCenterObjects1= [];
gdjs.start_32scene2Code.GDCenterObjects2= [];
gdjs.start_32scene2Code.GDCenterObjects3= [];
gdjs.start_32scene2Code.GDPlayButtonObjects1= [];
gdjs.start_32scene2Code.GDPlayButtonObjects2= [];
gdjs.start_32scene2Code.GDPlayButtonObjects3= [];
gdjs.start_32scene2Code.GDPlayButton2Objects1= [];
gdjs.start_32scene2Code.GDPlayButton2Objects2= [];
gdjs.start_32scene2Code.GDPlayButton2Objects3= [];
gdjs.start_32scene2Code.GDMapObjects1= [];
gdjs.start_32scene2Code.GDMapObjects2= [];
gdjs.start_32scene2Code.GDMapObjects3= [];

gdjs.start_32scene2Code.conditionTrue_0 = {val:false};
gdjs.start_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.start_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.start_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.start_32scene2Code.GDPointObjects1, gdjs.start_32scene2Code.GDPointObjects2);


gdjs.start_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.start_32scene2Code.GDPointObjects2.length;i<l;++i) {
    if ( !(gdjs.start_32scene2Code.GDPointObjects2[i].getVariableString(gdjs.start_32scene2Code.GDPointObjects2[i].getVariables().get("value")) == "Play") ) {
        gdjs.start_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.start_32scene2Code.GDPointObjects2[k] = gdjs.start_32scene2Code.GDPointObjects2[i];
        ++k;
    }
}
gdjs.start_32scene2Code.GDPointObjects2.length = k;}if (gdjs.start_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.start_32scene2Code.GDPointObjects2 */
{for(var i = 0, len = gdjs.start_32scene2Code.GDPointObjects2.length ;i < len;++i) {
    gdjs.start_32scene2Code.GDPointObjects2[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.start_32scene2Code.GDPointObjects2.length ;i < len;++i) {
    gdjs.start_32scene2Code.GDPointObjects2[i].setCharacterSize(30);
}
}}

}


{

/* Reuse gdjs.start_32scene2Code.GDPointObjects1 */

gdjs.start_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.start_32scene2Code.GDPointObjects1.length;i<l;++i) {
    if ( gdjs.start_32scene2Code.GDPointObjects1[i].getVariableString(gdjs.start_32scene2Code.GDPointObjects1[i].getVariables().get("value")) == "Play" ) {
        gdjs.start_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.start_32scene2Code.GDPointObjects1[k] = gdjs.start_32scene2Code.GDPointObjects1[i];
        ++k;
    }
}
gdjs.start_32scene2Code.GDPointObjects1.length = k;}if (gdjs.start_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.start_32scene2Code.GDPointObjects1 */
{for(var i = 0, len = gdjs.start_32scene2Code.GDPointObjects1.length ;i < len;++i) {
    gdjs.start_32scene2Code.GDPointObjects1[i].setCharacterSize(50);
}
}{for(var i = 0, len = gdjs.start_32scene2Code.GDPointObjects1.length ;i < len;++i) {
    gdjs.start_32scene2Code.GDPointObjects1[i].showShadow(true);
}
}}

}


};gdjs.start_32scene2Code.mapOfGDgdjs_46start_9532scene2Code_46GDCrate1Objects1Objects = Hashtable.newFrom({"Crate1": gdjs.start_32scene2Code.GDCrate1Objects1});gdjs.start_32scene2Code.eventsList1 = function(runtimeScene) {

{


gdjs.start_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.start_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.start_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start scene", false);
}}

}


};gdjs.start_32scene2Code.eventsList2 = function(runtimeScene) {

{


gdjs.start_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.start_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.start_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.start_32scene2Code.GDCenterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.start_32scene2Code.GDPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.start_32scene2Code.GDTitleObjects1);
{for(var i = 0, len = gdjs.start_32scene2Code.GDPointObjects1.length ;i < len;++i) {
    gdjs.start_32scene2Code.GDPointObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.start_32scene2Code.GDPointObjects1[i].getVariables().get("value"))));
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.start_32scene2Code.GDCenterObjects1.length === 0 ) ? 0 :gdjs.start_32scene2Code.GDCenterObjects1[0].getX()), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.start_32scene2Code.GDCenterObjects1.length === 0 ) ? 0 :gdjs.start_32scene2Code.GDCenterObjects1[0].getY()), "", 0);
}{for(var i = 0, len = gdjs.start_32scene2Code.GDCenterObjects1.length ;i < len;++i) {
    gdjs.start_32scene2Code.GDCenterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.start_32scene2Code.GDTitleObjects1.length ;i < len;++i) {
    gdjs.start_32scene2Code.GDTitleObjects1[i].setString("Bridge Box");
}
}{for(var i = 0, len = gdjs.start_32scene2Code.GDTitleObjects1.length ;i < len;++i) {
    gdjs.start_32scene2Code.GDTitleObjects1[i].setCharacterSize(80);
}
}
{ //Subevents
gdjs.start_32scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crate1"), gdjs.start_32scene2Code.GDCrate1Objects1);

gdjs.start_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.start_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.start_32scene2Code.mapOfGDgdjs_46start_9532scene2Code_46GDCrate1Objects1Objects, runtimeScene, true, false);
}if (gdjs.start_32scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.start_32scene2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.start_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.start_32scene2Code.GDTiledForestBackgroundObjects1.length = 0;
gdjs.start_32scene2Code.GDTiledForestBackgroundObjects2.length = 0;
gdjs.start_32scene2Code.GDTiledForestBackgroundObjects3.length = 0;
gdjs.start_32scene2Code.GDWallMidObjects1.length = 0;
gdjs.start_32scene2Code.GDWallMidObjects2.length = 0;
gdjs.start_32scene2Code.GDWallMidObjects3.length = 0;
gdjs.start_32scene2Code.GDCrate3Objects1.length = 0;
gdjs.start_32scene2Code.GDCrate3Objects2.length = 0;
gdjs.start_32scene2Code.GDCrate3Objects3.length = 0;
gdjs.start_32scene2Code.GDPlatform1Objects1.length = 0;
gdjs.start_32scene2Code.GDPlatform1Objects2.length = 0;
gdjs.start_32scene2Code.GDPlatform1Objects3.length = 0;
gdjs.start_32scene2Code.GDCrate1Objects1.length = 0;
gdjs.start_32scene2Code.GDCrate1Objects2.length = 0;
gdjs.start_32scene2Code.GDCrate1Objects3.length = 0;
gdjs.start_32scene2Code.GDCrate2Objects1.length = 0;
gdjs.start_32scene2Code.GDCrate2Objects2.length = 0;
gdjs.start_32scene2Code.GDCrate2Objects3.length = 0;
gdjs.start_32scene2Code.GDBlueButtonObjects1.length = 0;
gdjs.start_32scene2Code.GDBlueButtonObjects2.length = 0;
gdjs.start_32scene2Code.GDBlueButtonObjects3.length = 0;
gdjs.start_32scene2Code.GDTitleObjects1.length = 0;
gdjs.start_32scene2Code.GDTitleObjects2.length = 0;
gdjs.start_32scene2Code.GDTitleObjects3.length = 0;
gdjs.start_32scene2Code.GDfloorIcon3Objects1.length = 0;
gdjs.start_32scene2Code.GDfloorIcon3Objects2.length = 0;
gdjs.start_32scene2Code.GDfloorIcon3Objects3.length = 0;
gdjs.start_32scene2Code.GDfloorIcon2Objects1.length = 0;
gdjs.start_32scene2Code.GDfloorIcon2Objects2.length = 0;
gdjs.start_32scene2Code.GDfloorIcon2Objects3.length = 0;
gdjs.start_32scene2Code.GDfloorIcon1Objects1.length = 0;
gdjs.start_32scene2Code.GDfloorIcon1Objects2.length = 0;
gdjs.start_32scene2Code.GDfloorIcon1Objects3.length = 0;
gdjs.start_32scene2Code.GDPlayerObjects1.length = 0;
gdjs.start_32scene2Code.GDPlayerObjects2.length = 0;
gdjs.start_32scene2Code.GDPlayerObjects3.length = 0;
gdjs.start_32scene2Code.GDSmallMushroomObjects1.length = 0;
gdjs.start_32scene2Code.GDSmallMushroomObjects2.length = 0;
gdjs.start_32scene2Code.GDSmallMushroomObjects3.length = 0;
gdjs.start_32scene2Code.GDBigMushroomObjects1.length = 0;
gdjs.start_32scene2Code.GDBigMushroomObjects2.length = 0;
gdjs.start_32scene2Code.GDBigMushroomObjects3.length = 0;
gdjs.start_32scene2Code.GDGreyButtonObjects1.length = 0;
gdjs.start_32scene2Code.GDGreyButtonObjects2.length = 0;
gdjs.start_32scene2Code.GDGreyButtonObjects3.length = 0;
gdjs.start_32scene2Code.GDYellowButtonObjects1.length = 0;
gdjs.start_32scene2Code.GDYellowButtonObjects2.length = 0;
gdjs.start_32scene2Code.GDYellowButtonObjects3.length = 0;
gdjs.start_32scene2Code.GDPointObjects1.length = 0;
gdjs.start_32scene2Code.GDPointObjects2.length = 0;
gdjs.start_32scene2Code.GDPointObjects3.length = 0;
gdjs.start_32scene2Code.GDBluePanelObjects1.length = 0;
gdjs.start_32scene2Code.GDBluePanelObjects2.length = 0;
gdjs.start_32scene2Code.GDBluePanelObjects3.length = 0;
gdjs.start_32scene2Code.GDNextObjects1.length = 0;
gdjs.start_32scene2Code.GDNextObjects2.length = 0;
gdjs.start_32scene2Code.GDNextObjects3.length = 0;
gdjs.start_32scene2Code.GDCenterObjects1.length = 0;
gdjs.start_32scene2Code.GDCenterObjects2.length = 0;
gdjs.start_32scene2Code.GDCenterObjects3.length = 0;
gdjs.start_32scene2Code.GDPlayButtonObjects1.length = 0;
gdjs.start_32scene2Code.GDPlayButtonObjects2.length = 0;
gdjs.start_32scene2Code.GDPlayButtonObjects3.length = 0;
gdjs.start_32scene2Code.GDPlayButton2Objects1.length = 0;
gdjs.start_32scene2Code.GDPlayButton2Objects2.length = 0;
gdjs.start_32scene2Code.GDPlayButton2Objects3.length = 0;
gdjs.start_32scene2Code.GDMapObjects1.length = 0;
gdjs.start_32scene2Code.GDMapObjects2.length = 0;
gdjs.start_32scene2Code.GDMapObjects3.length = 0;

gdjs.start_32scene2Code.eventsList2(runtimeScene);
return;

}

gdjs['start_32scene2Code'] = gdjs.start_32scene2Code;
