import { useEffect } from "react";

export const useDidmount = (effect: React.EffectCallback) =>
  useEffect(effect, []);

export const useUpdate = (effect: React.EffectCallback, deps: any) =>
  useEffect(effect, [deps]);
