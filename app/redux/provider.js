"use client";

import Loading from "../components/loading";
import store from "./store";
import { Provider } from "react-redux";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <Loading>{children}</Loading>
    </Provider>
  );
}
