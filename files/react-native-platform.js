const Platform = {
	__constants: null,
	OS: "test",
	get Version() {
		return con;
	},
	get constants() {
		// Here either iOS or Android constants are imported.
		return {
			osVersion: "14",
		};
	},
	get isPad() {
		return this.constants.interfaceIdiom === "pad";
	},
	get isTV() {
		return this.constants.interfaceIdiom === "tv";
	},
	get isVision() {
		return this.constants.interfaceIdiom === "vision";
	},
	get isTesting() {
		if (__DEV__) {
			return this.constants.isTesting;
		}
		return false;
	},
	get isDisableAnimations() {
		return this.constants.isDisableAnimations ?? this.isTesting;
	},
	get isMacCatalyst() {
		return this.constants.isMacCatalyst ?? false;
	},
	select: (spec) =>
		"ios" in spec ? spec.ios : "native" in spec ? spec.native : spec.default,
};

export default Platform;
