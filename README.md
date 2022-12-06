**TAGS**
**React Native**
**Android**
**iOS**
**Encrypted**
**Encrypted FS**
**FS**

# React Native Encrypted FS


## Why ?

[React Native FS](https://github.com/itinance/react-native-fs) is great but it lacks security. This is less than ideal when storing sensitive data such as access tokens, payment information and so on. This module aims to solve this problem by providing a wrapper around `Crypto`, complete with support for TypeScript.

## Version Requirements

- Android API 21+ (5.0)
- iOS 2.0

## Installation

### Via `yarn`

```bash
$ yarn add react-native-encrypted-fs
```

### Via `npm`

```bash
$ npm install react-native-encrypted-fs
```

## Linking

- React Native 0.60+

Since version 0.60, React Native supports auto linking. This means no additional step is needed on your end.

- React Native <= 0.59

```bash
$ react-native link react-native-encrypted-fs
```

Special note for iOS using `cocoapods`, run:

```bash
$ npx pod-install
```

## Usage

This module exposes two (2) native functions to store, retrieve. They can be used like so:

### Import

```js
import {
  writeFile,
  readFile,
} from "react-native-encrypted-fs";
```

### Storing a value

```js
// type either "text" or "object" depend on type of data
// data either text or object based on type
// encryptionKey key for encryption or decryption process
// filename (unique filename for each data)

async function storeUserSession() {
  try {
    await writeFile(type, data, encryptionKey, filename);

    // Congrats! You've just stored your first value!
  } catch (error) {
    // There was an error on the native side
  }
}
```

### Retrieving a value

```js
// type either "text" or "object"
// encryptionKey key for encryption or decryption process
// filename (unique filename for each data)

async function getUserSession() {
  await readFile(type, encryptionKey, filename).then(
    (response) => {
      // console.log(response)
      // getting data on response
    }
  );
}
```

Removes item for a key, invokes (optional) callback once completed.
