import AccessibilityInfo from './Libraries/Components/AccessibilityInfo/AccessibilityInfo'
import ActivityIndicator from './Libraries/Components/ActivityIndicator/ActivityIndicator'
import Button from './Libraries/Components/Button'
import DrawerLayoutAndroid from './Libraries/Components/DrawerAndroid/DrawerLayoutAndroid'
import KeyboardAvoidingView from './Libraries/Components/Keyboard/KeyboardAvoidingView'
import Pressable from './Libraries/Components/Pressable/Pressable'
// import ProgressBarAndroid from './Libraries/Components/ProgressBarAndroid/ProgressBarAndroid'; Deprecated!
import RefreshControl from './Libraries/Components/RefreshControl/RefreshControl'
import SafeAreaView from './Libraries/Components/SafeAreaView/SafeAreaView'
import ScrollView from './Libraries/Components/ScrollView/ScrollView'
import StatusBar from './Libraries/Components/StatusBar/StatusBar'
import Switch from './Libraries/Components/Switch/Switch'
import InputAccessoryView from './Libraries/Components/TextInput/InputAccessoryView'
import TextInput from './Libraries/Components/TextInput/TextInput'
import Touchable from './Libraries/Components/Touchable/Touchable'
import TouchableHighlight from './Libraries/Components/Touchable/TouchableHighlight'
import TouchableNativeFeedback from './Libraries/Components/Touchable/TouchableNativeFeedback'
import TouchableOpacity from './Libraries/Components/Touchable/TouchableOpacity'
import TouchableWithoutFeedback from './Libraries/Components/Touchable/TouchableWithoutFeedback'
import View from './Libraries/Components/View/View'
// Components
import registerCallableModule from './Libraries/Core/registerCallableModule'
import { Image } from './Libraries/Image/Image'
import ImageBackground from './Libraries/Image/ImageBackground'
import FlatList from './Libraries/Lists/FlatList'
import SectionList from './Libraries/Lists/SectionList'
import VirtualizedList from './Libraries/Lists/VirtualizedList'
import VirtualizedSectionList from './Libraries/Lists/VirtualizedSectionList'
import Modal from './Libraries/Modal/Modal'
import Text from './Libraries/Text/Text'

// APIs
import ActionSheetIOS from './Libraries/ActionSheetIOS/ActionSheetIOS'
import Alert from './Libraries/Alert/Alert'
import Animated from './Libraries/Animated/Animated'
import Easing from './Libraries/Animated/Easing'
import useAnimatedValue from './Libraries/Animated/useAnimatedValue'
import AppState from './Libraries/AppState/AppState'
import Keyboard from './Libraries/Components/Keyboard/Keyboard'
import ToastAndroid from './Libraries/Components/ToastAndroid/ToastAndroid'
import NativeEventEmitter from './Libraries/EventEmitter/NativeEventEmitter'
import InteractionManager from './Libraries/Interaction/InteractionManager'
import PanResponder from './Libraries/Interaction/PanResponder'
import LayoutAnimation from './Libraries/LayoutAnimation/LayoutAnimation'
import Linking from './Libraries/Linking/Linking'
import LogBox from './Libraries/LogBox/LogBox'
import NativeDialogManagerAndroid from './Libraries/NativeModules/specs/NativeDialogManagerAndroid'
import Networking from './Libraries/Network/RCTNetworking'
import Systrace from './Libraries/Performance/Systrace'
import PermissionsAndroid from './Libraries/PermissionsAndroid/PermissionsAndroid'
import AppRegistry from './Libraries/ReactNative/AppRegistry'
import I18nManager from './Libraries/ReactNative/I18nManager'
import { findNodeHandle } from './Libraries/ReactNative/RendererProxy'
import { unstable_batchedUpdates } from './Libraries/ReactNative/RendererProxy'
import UIManager from './Libraries/ReactNative/UIManager'
// import PushNotificationIOS from './Libraries/PushNotificationIOS/PushNotificationIOS'; Deprecated!
import Settings from './Libraries/Settings/Settings'
import Share from './Libraries/Share/Share'
import StyleSheet from './Libraries/StyleSheet/StyleSheet'
import TurboModuleRegistry from './Libraries/TurboModule/TurboModuleRegistry'
import UTFSequence from './Libraries/UTFSequence'
import Appearance from './Libraries/Utilities/Appearance'
import BackHandler from './Libraries/Utilities/BackHandler'
import DevSettings from './Libraries/Utilities/DevSettings'
// import Clipboard from './Libraries/Components/Clipboard/Clipboard'; Deprecated!
import DeviceInfo from './Libraries/Utilities/DeviceInfo'
import Dimensions from './Libraries/Utilities/Dimensions'
import PixelRatio from './Libraries/Utilities/PixelRatio'
import useColorScheme from './Libraries/Utilities/useColorScheme'
import useWindowDimensions from './Libraries/Utilities/useWindowDimensions'
import Vibration from './Libraries/Vibration/Vibration'
import YellowBox from './Libraries/YellowBox/YellowBoxDeprecated'

import NativeModules from './Libraries/BatchedBridge/NativeModules'
// Plugins
import DeviceEventEmitter from './Libraries/EventEmitter/RCTDeviceEventEmitter'
import NativeAppEventEmitter from './Libraries/EventEmitter/RCTNativeAppEventEmitter'
import { RootTagContext } from './Libraries/ReactNative/RootTag'
import requireNativeComponent from './Libraries/ReactNative/requireNativeComponent'
import { PlatformColor } from './Libraries/StyleSheet/PlatformColorValueTypes'
import { DynamicColorIOS } from './Libraries/StyleSheet/PlatformColorValueTypesIOS'
import processColor from './Libraries/StyleSheet/processColor'
import Platform from './Libraries/Utilities/Platform'

// Utility function
function unstable_enableLogBox() {
  console.warn(
    'LogBox is enabled by default so there is no need to call unstable_enableLogBox() anymore. This is a no op and will be removed in the next version.',
  )
}

export {
  registerCallableModule,
  AccessibilityInfo,
  ActivityIndicator,
  Button,
  DrawerLayoutAndroid,
  FlatList,
  Image,
  ImageBackground,
  InputAccessoryView,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  Switch,
  Text,
  TextInput,
  Touchable,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  VirtualizedList,
  VirtualizedSectionList,
  ActionSheetIOS,
  Alert,
  Animated,
  Appearance,
  AppRegistry,
  AppState,
  BackHandler,
  DeviceInfo,
  DevSettings,
  Dimensions,
  Easing,
  findNodeHandle,
  I18nManager,
  InteractionManager,
  Keyboard,
  LayoutAnimation,
  Linking,
  LogBox,
  NativeDialogManagerAndroid,
  NativeEventEmitter,
  Networking,
  PanResponder,
  PermissionsAndroid,
  PixelRatio,
  Settings,
  Share,
  StyleSheet,
  Systrace,
  ToastAndroid,
  TurboModuleRegistry,
  UIManager,
  unstable_batchedUpdates,
  useAnimatedValue,
  useColorScheme,
  useWindowDimensions,
  UTFSequence,
  Vibration,
  YellowBox,
  DeviceEventEmitter,
  DynamicColorIOS,
  NativeAppEventEmitter,
  NativeModules,
  Platform,
  PlatformColor,
  processColor,
  requireNativeComponent,
  RootTagContext,
  unstable_enableLogBox,
}
