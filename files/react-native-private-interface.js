// Import statements using ESM syntax
import BatchedBridge from '../BatchedBridge/BatchedBridge'
import legacySendAccessibilityEvent from '../Components/AccessibilityInfo/legacySendAccessibilityEvent'
import TextInputState from '../Components/TextInput/TextInputState'
import ExceptionsManager from '../Core/ExceptionsManager'
import RawEventEmitter from '../Core/RawEventEmitter'
import ReactFiberErrorDialog from '../Core/ReactFiberErrorDialog'
import RCTEventEmitter from '../EventEmitter/RCTEventEmitter'
import CustomEvent from '../Events/CustomEvent'
import UIManager from '../ReactNative/UIManager'
import ReactNativeViewConfigRegistry from '../Renderer/shims/ReactNativeViewConfigRegistry'
import flattenStyle from '../StyleSheet/flattenStyle'
import Platform from '../Utilities/Platform'
import deepFreezeAndThrowOnMutationInDev from '../Utilities/deepFreezeAndThrowOnMutationInDev'
import deepDiffer from '../Utilities/differ/deepDiffer'

// Importing specific named exports
import {
  create as createAttributePayload,
  diff as diffAttributePayloads,
} from '../ReactNative/ReactFabricPublicInstance/ReactNativeAttributePayload'

import {
  createPublicInstance,
  createPublicTextInstance,
  getInternalInstanceHandleFromPublicInstance,
  getNativeTagFromPublicInstance,
  getNodeFromPublicInstance,
} from '../ReactNative/ReactFabricPublicInstance/ReactFabricPublicInstance'

// Exporting the imported modules
export {
  BatchedBridge,
  ExceptionsManager,
  Platform,
  RCTEventEmitter,
  ReactNativeViewConfigRegistry,
  TextInputState,
  UIManager,
  deepDiffer,
  deepFreezeAndThrowOnMutationInDev,
  flattenStyle,
  ReactFiberErrorDialog,
  legacySendAccessibilityEvent,
  RawEventEmitter,
  CustomEvent,
  createAttributePayload,
  diffAttributePayloads,
  createPublicInstance,
  createPublicTextInstance,
  getNativeTagFromPublicInstance,
  getNodeFromPublicInstance,
  getInternalInstanceHandleFromPublicInstance,
}
