/*
 * @Author: Rishav Goswami
 * @Date: 2019-05-24 00:09:43
 * @Last Modified by: Rishav
 * @Last Modified time: 2019-05-24 00:09:43
 */

import { AppRegistry } from "react-native";
import Entry from "./src/app/Entry";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Entry);
