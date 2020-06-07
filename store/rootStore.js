import { useStaticRendering } from "mobx-react";
import TodoStore from "./todoStore";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

let store = null;

export default function initializeStore() {
  if (isServer) {
    return {
      todoStore: new TodoStore(this),
    };
  }
  if (store === null) {
    store = {
      todoStore: new TodoStore(this),
    };
  }

  return store;
}
