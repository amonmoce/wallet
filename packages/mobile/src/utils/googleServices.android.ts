import ReactNative from 'react-native'

const { GooglePlayServicesAvailabilityModule } = ReactNative.NativeModules

export enum GooglePlayServicesAvailability {
  IOS = -1,
  SUCCESS = 0,
  SERVICE_MISSING = 1,
  SERVICE_VERSION_UPDATE_REQUIRED = 2,
  SERVICE_DISABLED = 3,
  SIGN_IN_REQUIRED = 4,
  INVALID_ACCOUNT = 5,
  RESOLUTION_REQUIRED = 6,
  NETWORK_ERROR = 7,
  INTERNAL_ERROR = 8,
  SERVICE_INVALID = 9,
  DEVELOPER_ERROR = 10,
  LICENSE_CHECK_FAILED = 11,
  CANCELED = 13,
  TIMEOUT = 14,
  INTERRUPTED = 15,
  API_UNAVAILABLE = 16,
  SIGN_IN_FAILED = 17,
  SERVICE_UPDATING = 18,
  SERVICE_MISSING_PERMISSION = 19,
  RESTRICTED_PROFILE = 20,
  RESOLUTION_ACTIVITY_NOT_FOUND = 22,
  API_DISABLED = 23,
  API_DISABLED_FOR_CONNECTION = 24,
}

export async function isGooglePlayServicesAvailable(): Promise<GooglePlayServicesAvailability> {
  return await GooglePlayServicesAvailabilityModule.isGooglePlayServicesAvailable()
}
