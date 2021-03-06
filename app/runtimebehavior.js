var gdjs;
(function(gdjs2) {
  class BehaviorRBushAABB {
    constructor(behavior) {
      this.minX = 0;
      this.minY = 0;
      this.maxX = 0;
      this.maxY = 0;
      this.behavior = behavior;
      this.updateAABBFromOwner();
    }
    updateAABBFromOwner() {
      this.minX = this.behavior.owner.getAABB().min[0];
      this.minY = this.behavior.owner.getAABB().min[1];
      this.maxX = this.behavior.owner.getAABB().max[0];
      this.maxY = this.behavior.owner.getAABB().max[1];
    }
  }
  gdjs2.BehaviorRBushAABB = BehaviorRBushAABB;
  class RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      this.owner = owner;
      this._activated = true;
      this.name = behaviorData.name || "";
      this.type = behaviorData.type || "";
      this._nameId = gdjs2.RuntimeObject.getNameIdentifier(this.name);
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      return false;
    }
    getName() {
      return this.name;
    }
    getNameId() {
      return this._nameId;
    }
    stepPreEvents(runtimeScene) {
      if (this._activated) {
        const profiler = runtimeScene.getProfiler();
        if (profiler) {
          profiler.begin(this.name);
        }
        this.doStepPreEvents(runtimeScene);
        if (profiler) {
          profiler.end(this.name);
        }
      }
    }
    stepPostEvents(runtimeScene) {
      if (this._activated) {
        const profiler = runtimeScene.getProfiler();
        if (profiler) {
          profiler.begin(this.name);
        }
        this.doStepPostEvents(runtimeScene);
        if (profiler) {
          profiler.end(this.name);
        }
      }
    }
    activate(enable) {
      if (enable === void 0) {
        enable = true;
      }
      if (!this._activated && enable) {
        this._activated = true;
        this.onActivate();
      } else {
        if (this._activated && !enable) {
          this._activated = false;
          this.onDeActivate();
        }
      }
    }
    onCreated() {
    }
    activated() {
      return this._activated;
    }
    onActivate() {
    }
    onDeActivate() {
    }
    doStepPreEvents(runtimeScene) {
    }
    doStepPostEvents(runtimeScene) {
    }
    onDestroy() {
    }
    onObjectHotReloaded() {
    }
  }
  gdjs2.RuntimeBehavior = RuntimeBehavior;
  gdjs2.registerBehavior("", gdjs2.RuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimebehavior.js.map
