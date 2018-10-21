import { AsyncStorage } from "react-native";

export default class Storage {
  static async getSession() {
    return this._get("SESSION");
  }
  static async setSession(session) {
    return this._set("SESSION", session);
  }
  static async _get(what) {
    try {
      const value = await AsyncStorage.getItem("@Storage:" + what);
      return value;
    } catch (error) {
      throw error;
    }
  }
  static async _set(what, value) {
    try {
      if (value === null) {
        await this._destroy(what);
      } else {
        await AsyncStorage.setItem("@Storage:" + what, value);
      }
    } catch (error) {
      throw error;
    }
  }
  static async _destroy(what) {
    try {
      await AsyncStorage.removeItem("@Storage:" + what);
    } catch (error) {
      throw error;
    }
  }
}
