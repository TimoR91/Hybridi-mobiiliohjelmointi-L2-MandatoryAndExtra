import appNavigator from "./appNavigator";
import { systemInfo } from "./systemInfo";
import plusMinusNumber from "./plusMinusNumber";
import effectHook from "./effectHook";

export const screens = [
    {
        name: "Navigate App",
        component: appNavigator
    }, 
    {
        name: "System Info",
        component: systemInfo
    },
    {
        name: "Add or decrease number using StateHook",
        component: plusMinusNumber
    },
    ,
    {
        name: "Add or decrease number using EffectHook",
        component: effectHook
    }
]