const noop = (_: any) => _;

export type TBeforeHook = (...args: any) => void;
export type TAfterHook = (...args: any) => void;
export type TDataHook = (...args: any) => void;
export type TErrorHook = (...args: any) => void;

class RequestConfig {
  $beforeHook: TBeforeHook = noop;
  $afterHook: TAfterHook = noop;
  $dataHook: TDataHook = noop;
  $errorHook: TErrorHook = noop;

  before(hook: TBeforeHook) {
    this.$beforeHook = hook;
    return this;
  }
  after(hook: TAfterHook) {
    this.$afterHook = hook;
    return this;
  }
  data(hook: TDataHook) {
    this.$dataHook = hook;
    return this;
  }
  error(hook: TErrorHook) {
    this.$errorHook = hook;
    return this;
  }
}

export default RequestConfig;