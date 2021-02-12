import { Injectable } from '@angular/core';
import * as application from 'tns-core-modules/application';
import { isIOS, isAndroid } from 'tns-core-modules/platform';
import * as utils from 'tns-core-modules/utils/utils';
import { Color } from 'tns-core-modules/color';
import * as frame from 'tns-core-modules/ui/frame';
import { Globals } from '../globals';

var loaderView;

declare var android, UIApplication, UIView, CGRectMake, CGPointMake,
    UIActivityIndicatorView, UIActivityIndicatorViewStyle;

@Injectable({
    providedIn: 'root'
  })
export class ProgressSpinner {

    constructor( private globals: Globals ) {
    }

    showLoader (message: string = 'Loading...') {
        var __this = this;
        if (loaderView) {
            return;
        }
    
        if (isAndroid) {
            console.log("AYA SPINNER");
            loaderView = android.app.ProgressDialog.show(application.android.foregroundActivity, '', message);
            setTimeout(function() {
                console.log("AYA DISMISS 1");
                if (loaderView != null) {
                    loaderView.dismiss();
                    console.log("AYA HIDE SPINNER");
                }
            }, this.globals.spinnerDelay);
        }
    
        if (isIOS) {
            // utils.ios.getter(UIApplication, UIApplication.sharedApplication).beginIgnoringInteractionEvents();
    
            // const currentView = frame.topmost().ios.controller.view;
            // loaderView = UIView.alloc().initWithFrame(CGRectMake(0, 0, 90, 90));
            // loaderView.center = currentView.center;
            // loaderView.layer.cornerRadius = 4;
            // loaderView.backgroundColor = new Color("#CC000000").ios;
    
            // const indicator = UIActivityIndicatorView.alloc().initWithActivityIndicatorStyle(UIActivityIndicatorViewStyle.WhiteLarge);
            // indicator.center = CGPointMake(45, 45);
    
            // loaderView.addSubview(indicator);
            // currentView.addSubview(loaderView);
    
            // indicator.startAnimating();
        }
    }

    hideLoader() {
        if (!loaderView) {
            return;
        }

        if (isAndroid) {
            console.log("AYA DISMISS 2");
            loaderView.dismiss();
        }

        if (isIOS) {
            // loaderView.removeFromSuperview();
            // utils.ios.getter(UIApplication, UIApplication.sharedApplication).endIgnoringInteractionEvents();
        }

        loaderView = null;
    }
}
