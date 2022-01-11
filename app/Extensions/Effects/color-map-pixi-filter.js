var gdjs;
(function(gdjs2) {
  gdjs2.PixiFiltersTools.registerFilterCreator("ColorMap", {
    makePIXIFilter: function(target, effectData) {
      const colorMapTexture = target.getRuntimeScene().getGame().getImageManager().getPIXITexture(effectData.stringParameters.colorMapTexture);
      const colorMapFilter = new PIXI.filters.ColorMapFilter(colorMapTexture, effectData.booleanParameters.nearest, gdjs2.PixiFiltersTools.clampValue(effectData.doubleParameters.mix / 100, 0, 1));
      return colorMapFilter;
    },
    updatePreRender: function(filter, target) {
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      const colorMapFilter = filter;
      if (parameterName === "mix") {
        colorMapFilter.mix = gdjs2.PixiFiltersTools.clampValue(value / 100, 0, 1);
      }
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
      const colorMapFilter = filter;
      if (parameterName === "nearest") {
        colorMapFilter.nearest = value;
      }
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=color-map-pixi-filter.js.map
