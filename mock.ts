// @ts-ignore Required for React Native
globalThis.__DEV__ = true
// @ts-ignore Required for React Native
// globalThis.__fbBatchedBridgeConfig = {};
global.__fbBatchedBridgeConfig = { remoteModuleConfig: [] } // Important

globalThis.__turboModuleProxy = (name: string) => {
  console.log('__turboModuleProxy', name)
  return {}
}
// // Enable new architecture.
// globalThis.RN$Bridgeless = true;
// globalThis.RN$TurboInterop = false;
// // NativeModules object.
// global.nativeModuleProxy = {}; // Has no effect
// global.nativeRequireModuleConfig = (name: string) => {
// 	console.log("nativeRequireModuleConfig", name);
// 	return {};
// };
