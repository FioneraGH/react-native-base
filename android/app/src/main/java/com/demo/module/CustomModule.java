package com.demo.module;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by fionera on 16-12-26.
 */

public class CustomModule
        extends ReactContextBaseJavaModule {

    public CustomModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CustomModule";
    }

    @ReactMethod
    public void customMethod(String msg, Promise promise){
        promise.resolve(msg);
    }
}
