This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Firebase Add in my project.
helpping youtube video is: 
### `build.gradle` File change.
`android\build.gradle` Add Full code in this File.
- Only chenge
```gradle
// Add Dependencies
dependencies {
    classpath('com.google.gms:google-services:4.3.15')
}

// New code fully add
allprojects {
    repositories {
        google() 
        mavenCentral() 
    }
}
```
- Full code
```gradle
buildscript {
    ext {
        buildToolsVersion = "35.0.0"
        minSdkVersion = 24
        compileSdkVersion = 35
        targetSdkVersion = 35
        ndkVersion = "27.1.12297006"
        kotlinVersion = "2.0.21"
    }
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle")
        classpath("com.facebook.react:react-native-gradle-plugin")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin")
        classpath('com.google.gms:google-services:4.3.15')
    }
}

apply plugin: "com.facebook.react.rootproject"

allprojects {
    repositories {
        google() 
        mavenCentral() 
    }
}
```

### `android\app\build.gradle` File change.
`android\app\build.gradle` file cange full code.
- only chenge
```gradle
// Add Plugin
apply plugin: "com.google.gms.google-services"


// Add Dependencies
dependencies {
    implementation platform('com.google.firebase:firebase-bom:33.11.0')
    implementation 'com.google.firebase:firebase-analytics'
}
```
- full code
```gradle
apply plugin: "com.android.application"
apply plugin: "org.jetbrains.kotlin.android"
apply plugin: "com.facebook.react"
apply plugin: "com.google.gms.google-services"



react {
    autolinkLibrariesWithApp()
}


def enableProguardInReleaseBuilds = false


def jscFlavor = 'io.github.react-native-community:jsc-android:2026004.+'

android {
    ndkVersion rootProject.ext.ndkVersion
    buildToolsVersion rootProject.ext.buildToolsVersion
    compileSdk rootProject.ext.compileSdkVersion

    namespace "com.firebaseauth"
    defaultConfig {
        applicationId "com.firebaseauth"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
    }
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }
    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {            
            signingConfig signingConfigs.debug
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }
}

dependencies {
    implementation("com.facebook.react:react-android")
    implementation platform('com.google.firebase:firebase-bom:33.11.0')
    implementation 'com.google.firebase:firebase-analytics'

    if (hermesEnabled.toBoolean()) {
        implementation("com.facebook.react:hermes-android")
    } else {
        implementation jscFlavor
    }
}

```

## Just Email Signup

```SignUpScreen.js``` All code Add this file.

```javascript
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};


// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Correct initialization with persistence using AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage), // Use AsyncStorage for persistence
});

// SignUpScreen Component
const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert(`User account created & signed in! \n \n ${userCredential.user.email}`);
      })
      .catch((error) => {
        Alert.alert(`Error: ${error.message} \n Please check email and password.`);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up Screen</Text>
      <TextInput
        placeholder="Email"
        style={styles.inputBox}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputBox}
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry
      />
      <TouchableOpacity onPress={onRegister} style={styles.register}>
        <Text style={styles.registerTitle}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 12,
    borderRadius: 5,
    width: '90%',
    marginTop: 20,
  },
  register: {
    width: '90%',
    backgroundColor: '#FCAF03',
    padding: 12,
    borderRadius: 30,
    borderWidth: 1.1,
    borderColor: '#d9a002',
    alignItems: 'center',
    marginTop: 40,
  },
  registerTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  signup: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 80,
  },
});

```

## Old wey vs New Wey.
To help you understand the difference between the **old version** and the **new version** of Firebase Authentication (especially for React Native), I'll summarize the changes and how things are handled differently between the two versions.

### **Old Version of Firebase Authentication for React Native**

In the older versions of Firebase Authentication (before Firebase v9 and v10), React Native used to rely on the Firebase SDK directly with no modular imports. Here's how things were typically set up in the past:

1. **Initialization**:
   - Firebase was initialized using the `firebase` object directly without splitting the modules into different parts.
   
2. **Persistence**:
   - In the old way, persistence was handled by default, with Firebase using memory persistence for authentication state. You could optionally set persistence manually by using `@react-native-firebase/auth`, but it was less modular, and it wasn’t as configurable as in the newer versions.

3. **Firebase Authentication Setup**:
   - The code used the Firebase package directly, like this:

   ```javascript
   import firebase from 'firebase/app';
   import 'firebase/auth';
   
   // Firebase config and app initialization
   const firebaseConfig = {
     apiKey: 'your-api-key',
     authDomain: 'your-auth-domain',
     projectId: 'your-project-id',
     storageBucket: 'your-storage-bucket',
     messagingSenderId: 'your-messaging-sender-id',
     appId: 'your-app-id',
   };

   if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
   } else {
     firebase.app(); // Use the default app
   }
   ```

4. **Error Handling**:
   - Errors were caught in a `.catch()` method and handled directly.

### **New Version of Firebase Authentication (Firebase SDK v9 and above)**

In the new Firebase SDK versions (v9 and later, including Firebase 11.5.0), Firebase moved to a **modular** approach. This means you import only the parts of Firebase that you need, making the SDK smaller and more efficient, especially for React Native.

Here’s a summary of the changes:

1. **Modular Imports**:
   - You no longer import everything from `firebase`. Instead, you import only the functions that you need. This helps reduce the size of the application.
   
   Example of Firebase Authentication initialization with modular imports:

   ```javascript
   import { initializeApp } from 'firebase/app';
   import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
   
   const firebaseConfig = {
     apiKey: 'your-api-key',
     authDomain: 'your-auth-domain',
     projectId: 'your-project-id',
     storageBucket: 'your-storage-bucket',
     messagingSenderId: 'your-messaging-sender-id',
     appId: 'your-app-id',
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
   ```

2. **Persistence Configuration**:
   - Firebase SDK v9+ introduced explicit persistence handling. To persist user authentication across sessions, you need to configure it explicitly, and it now uses **AsyncStorage** or other persistence options.
   
   Example of configuring persistence:

   ```javascript
   import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
   import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
   import { getReactNativePersistence } from 'firebase/auth';
   
   const auth = getAuth(app);

   // Setting persistence
   setPersistence(auth, getReactNativePersistence(ReactNativeAsyncStorage))
     .then(() => {
       console.log('Persistence set!');
     })
     .catch((error) => {
       console.error('Error setting persistence:', error);
     });
   ```

   **In the new version**:
   - You need to call `setPersistence` explicitly to store the authentication state in **AsyncStorage** or in a browser-like local storage on mobile.
   - Firebase Authentication will default to memory persistence if you don't configure it.

3. **Authentication Methods**:
   - In the new version, authentication methods like `createUserWithEmailAndPassword` are available through modular functions, not directly under the `firebase` object.

   ```javascript
   import { createUserWithEmailAndPassword } from 'firebase/auth';
   
   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       console.log('User created:', userCredential.user);
     })
     .catch((error) => {
       console.error('Error:', error.message);
     });
   ```

4. **Error Handling**:
   - Error handling remains largely the same, but since the new version uses promises and `async/await`, you can handle errors more cleanly with `try/catch` in async functions.

   ```javascript
   try {
     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
     console.log('User created:', userCredential.user);
   } catch (error) {
     console.error('Error:', error.message);
   }
   ```

### **Key Differences Between the Old and New Versions**:

| **Aspect**              | **Old Version**                                         | **New Version**                                              |
|-------------------------|---------------------------------------------------------|-------------------------------------------------------------|
| **Imports**             | `import firebase from 'firebase/app';`                 | Modular imports: `import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';` |
| **Firebase Initialization** | `firebase.initializeApp(config)`                    | `initializeApp(config)`                                     |
| **Authentication Setup** | Uses `firebase.auth()`                                 | `getAuth(app)`                                              |
| **Persistence Handling**  | Default memory persistence (optional configuration)    | Explicit persistence configuration with `setPersistence` and `getReactNativePersistence` |
| **Size**                 | Includes entire Firebase SDK by default               | Smaller app size since only required parts are imported    |
| **Error Handling**      | `.catch()` for handling errors                        | `async/await` and `try/catch` are used for error handling   |

### **Conclusion**:

- **Old Version**: Firebase was initialized with a single import and persistence was either default or configured in a less modular way.
- **New Version**: Firebase has moved to a modular architecture, requiring you to import only the necessary parts. Persistence is more explicitly handled, and Firebase Authentication can be more efficiently set up for React Native apps.

For the best performance and to keep up with new features, it's recommended to use the **new modular SDK (v9 and above)** for Firebase in React Native.

Let me know if you have more questions or need further clarification!
