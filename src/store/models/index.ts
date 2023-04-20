import { Models } from "@rematch/core";

import globalModel from "./global";
import loginModel from "./login";

export interface RootModel extends Models<RootModel> {
  login: typeof loginModel;
  // @ts-ignore
  global: typeof globalModel;
}

export const models: RootModel = { login: loginModel, global: globalModel };
