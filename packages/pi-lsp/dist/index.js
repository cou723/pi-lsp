import { createRequire as __bundleCreateRequire } from "node:module"; const require = __bundleCreateRequire(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/is.js
var require_is = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boolean = boolean;
    exports.string = string;
    exports.number = number;
    exports.error = error;
    exports.func = func;
    exports.array = array;
    exports.stringArray = stringArray;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messages.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Message = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType = exports.RequestType0 = exports.AbstractMessageSignature = exports.ParameterStructures = exports.ResponseError = exports.ErrorCodes = void 0;
    var is = __importStar(require_is());
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
    var ResponseError = class _ResponseError extends Error {
      code;
      data;
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, _ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    };
    exports.ResponseError = ResponseError;
    var ParameterStructures = class _ParameterStructures {
      kind;
      /**
       * The parameter structure is automatically inferred on the number of parameters
       * and the parameter type in case of a single param.
       */
      static auto = new _ParameterStructures("auto");
      /**
       * Forces `byPosition` parameter structure. This is useful if you have a single
       * parameter which has a literal type.
       */
      static byPosition = new _ParameterStructures("byPosition");
      /**
       * Forces `byName` parameter structure. This is only useful when having a single
       * parameter. The library will report errors if used with a different number of
       * parameters.
       */
      static byName = new _ParameterStructures("byName");
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === _ParameterStructures.auto || value === _ParameterStructures.byName || value === _ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports.ParameterStructures = ParameterStructures;
    var AbstractMessageSignature = class {
      method;
      numberOfParams;
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 0);
      }
    };
    exports.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 2);
      }
    };
    exports.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 3);
      }
    };
    exports.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 4);
      }
    };
    exports.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 5);
      }
    };
    exports.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 6);
      }
    };
    exports.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 7);
      }
    };
    exports.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 8);
      }
    };
    exports.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 9);
      }
    };
    exports.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 0);
      }
    };
    exports.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 2);
      }
    };
    exports.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 3);
      }
    };
    exports.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 4);
      }
    };
    exports.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 5);
      }
    };
    exports.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 6);
      }
    };
    exports.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 7);
      }
    };
    exports.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 8);
      }
    };
    exports.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 9);
      }
    };
    exports.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message || (exports.Message = Message = {}));
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LRUCache = exports.LinkedMap = exports.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch || (exports.Touch = Touch = {}));
    var LinkedMap = class {
      [Symbol.toStringTag] = "LinkedMap";
      _map;
      _head;
      _tail;
      _size;
      _state;
      constructor() {
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      before(key) {
        const item = this._map.get(key);
        return item ? item.previous?.value : void 0;
      }
      after(key) {
        const item = this._map.get(key);
        return item ? item.next?.value : void 0;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      _limit;
      _ratio;
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports.LRUCache = LRUCache;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Disposable = void 0;
    var Disposable;
    (function(Disposable2) {
      function create(func) {
        return {
          dispose: func
        };
      }
      Disposable2.create = create;
    })(Disposable || (exports.Disposable = Disposable = {}));
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/ral.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports.default = RAL;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/events.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emitter = exports.Event = void 0;
    var ral_1 = __importDefault(require_ral());
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports.Event = Event = {}));
    var CallbackList = class {
      _callbacks;
      _contexts;
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter = class _Emitter {
      _options;
      static _noop = function() {
      };
      _event;
      _callbacks;
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports.Emitter = Emitter;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CancellationTokenSource = exports.CancellationToken = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is());
    var events_1 = require_events();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is2.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is;
    })(CancellationToken || (exports.CancellationToken = CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    var MutableToken = class {
      _isCancelled = false;
      _emitter;
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource2 = class {
      _token;
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports.CancellationTokenSource = CancellationTokenSource2;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = void 0;
    var cancellation_1 = require_cancellation();
    var CancellationState;
    (function(CancellationState2) {
      CancellationState2.Continue = 0;
      CancellationState2.Cancelled = 1;
    })(CancellationState || (CancellationState = {}));
    var SharedArraySenderStrategy = class {
      buffers;
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(request) {
        if (request.id === null) {
          return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
      }
      async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === void 0) {
          return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
      }
      cleanup(id) {
        this.buffers.delete(id);
      }
      dispose() {
        this.buffers.clear();
      }
    };
    exports.SharedArraySenderStrategy = SharedArraySenderStrategy;
    var SharedArrayBufferCancellationToken = class {
      data;
      constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
      }
    };
    var SharedArrayBufferCancellationTokenSource = class {
      token;
      constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
      }
      cancel() {
      }
      dispose() {
      }
    };
    var SharedArrayReceiverStrategy = class {
      kind = "request";
      createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === void 0) {
          return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
      }
    };
    exports.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Semaphore = void 0;
    var ral_1 = __importDefault(require_ral());
    var Semaphore = class {
      _capacity;
      _active;
      _waiting;
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve7, reject) => {
          this._waiting.push({ thunk, resolve: resolve7, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`Too many thunks active`);
        }
        try {
          const result = next.thunk();
          if (result instanceof Promise) {
            result.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err) => {
              this._active--;
              next.reject(err);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result);
            this.runNext();
          }
        } catch (err) {
          this._active--;
          next.reject(err);
          this.runNext();
        }
      }
    };
    exports.Semaphore = Semaphore;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is());
    var events_1 = require_events();
    var semaphore_1 = require_semaphore();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.listen) && Is2.func(candidate.dispose) && Is2.func(candidate.onError) && Is2.func(candidate.onClose) && Is2.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader || (exports.MessageReader = MessageReader = {}));
    var AbstractMessageReader = class {
      errorEmitter;
      closeEmitter;
      partialMessageEmitter;
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
        this.partialMessageEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is2.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      readable;
      options;
      callback;
      nextMessageLength;
      messageToken;
      buffer;
      partialMessageTimer;
      _partialMessageTimeout;
      readSemaphore;
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        try {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders(true);
              if (!headers) {
                return;
              }
              const contentLength = headers.get("content-length");
              if (!contentLength) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
                return;
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                return;
              }
              this.nextMessageLength = length;
            }
            const body = this.buffer.tryReadBody(this.nextMessageLength);
            if (body === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore.lock(async () => {
              const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body) : body;
              const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
              this.callback(message);
            }).catch((error) => {
              this.fireError(error);
            });
          }
        } catch (error) {
          this.fireError(error);
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is());
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.dispose) && Is2.func(candidate.onClose) && Is2.func(candidate.onError) && Is2.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter || (exports.MessageWriter = MessageWriter = {}));
    var AbstractMessageWriter = class {
      errorEmitter;
      closeEmitter;
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is2.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      writable;
      options;
      errorCount;
      writeSemaphore;
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      _encoding;
      _chunks;
      _totalLength;
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result;
        }
        for (let i = 0; i < headers.length - 2; i++) {
          const header = headers[i];
          const index = header.indexOf(":");
          if (index === -1) {
            throw new Error(`Message header must separate key and value using ':'
${header}`);
          }
          const key = header.substr(0, index);
          const value = header.substr(index + 1).trim();
          result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result2 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result2;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        const chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result;
      }
    };
    exports.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/connection.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConnectionOptions = exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.RequestCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy = exports.ConnectionStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.TraceValue = exports.Trace = exports.NullLogger = exports.ProgressType = exports.ProgressToken = void 0;
    exports.createMessageConnection = createMessageConnection;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is());
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken || (exports.ProgressToken = ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      /**
       * Clients must not use these properties. They are here to ensure correct typing.
       * in TypeScript
       */
      __;
      _pr;
      constructor() {
      }
    };
    exports.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is2.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace || (exports.Trace = Trace = {}));
    var TraceValue;
    (function(TraceValue2) {
      TraceValue2.Off = "off";
      TraceValue2.Messages = "messages";
      TraceValue2.Compact = "compact";
      TraceValue2.Verbose = "verbose";
    })(TraceValue || (exports.TraceValue = TraceValue = {}));
    exports.TraceValues = TraceValue;
    (function(Trace2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace || (exports.Trace = Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification || (exports.SetTraceNotification = SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification || (exports.LogTraceNotification = LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors || (exports.ConnectionErrors = ConnectionErrors = {}));
    var ConnectionError = class _ConnectionError extends Error {
      code;
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ConnectionError.prototype);
      }
    };
    exports.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy || (exports.ConnectionStrategy = ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is2.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is2.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is;
    })(IdCancellationReceiverStrategy || (exports.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is2.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is2.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is;
    })(RequestCancellationReceiverStrategy || (exports.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy || (exports.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.sendCancellation) && Is2.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy || (exports.CancellationSenderStrategy = CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy || (exports.CancellationStrategy = CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is;
    })(MessageStrategy || (exports.MessageStrategy = MessageStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy) || Is2.number(candidate.maxParallelism));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions || (exports.ConnectionOptions = ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader, messageWriter, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      const maxParallelism = options?.maxParallelism ?? -1;
      let inFlight = 0;
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          if (maxParallelism === -1) {
            queue.set(createResponseQueueKey(message.id), message);
          } else {
            handleResponse(message);
          }
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        if (maxParallelism !== -1 && inFlight >= maxParallelism) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(async () => {
          timer = void 0;
          if (messageQueue.size === 0) {
            return;
          }
          if (maxParallelism !== -1 && inFlight >= maxParallelism) {
            return;
          }
          const message = messageQueue.shift();
          let result;
          try {
            inFlight++;
            const messageStrategy = options?.messageStrategy;
            if (MessageStrategy.is(messageStrategy)) {
              result = messageStrategy.handleMessage(message, handleMessage);
            } else {
              result = handleMessage(message);
            }
          } catch (error) {
            logger.error(`Processing message queue failed: ${error.toString()}`);
          } finally {
            if (result instanceof Promise) {
              result.then(() => {
                inFlight--;
                triggerMessageQueue();
              }).catch((error) => {
                logger.error(`Processing message queue failed: ${error.toString()}`);
              });
            } else {
              inFlight--;
            }
            triggerMessageQueue();
          }
        });
      }
      async function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          return handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          return handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          return handleResponse(message);
        } else {
          return handleInvalidMessage(message);
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options?.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      async function handleRequest(requestMessage) {
        if (isDisposed()) {
          return Promise.resolve();
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          return messageWriter.write(message);
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          return messageWriter.write(message);
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const resultOrError = await handlerResult;
            await reply(resultOrError, requestMessage.method, startTime);
          } catch (error) {
            if (error instanceof messages_1.ResponseError) {
              await reply(error, requestMessage.method, startTime);
            } else if (error && Is2.string(error.message)) {
              await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          } finally {
            requestTokens.delete(tokenKey);
          }
        } else {
          await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      async function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                await notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  await notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  await notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                await notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              await starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is2.string(responseMessage.id) || Is2.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}`;
            } else {
              data = "No parameters provided.";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}`;
              } else if (message.error === void 0) {
                data = "No result returned.";
              }
            }
          }
          const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms.${error}`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}`;
            } else {
              data = "No parameters provided.";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}`;
              } else if (message.error === void 0) {
                data = "No result returned.";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i = 0; i < params.length && i < numberOfParams; i++) {
              result.push(undefinedToNull(params[i]));
            }
            if (params.length < numberOfParams) {
              for (let i = params.length; i < numberOfParams; i++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection = {
        sendNotification: (type, ...args) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is2.string(type)) {
            method = type;
            const first = args[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            const paramEnd = args.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch((error) => {
            logger.error(`Sending notification failed.`);
            throw error;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is2.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is2.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                if (notificationHandlers.get(method)?.handler === handler) {
                  notificationHandlers.delete(method);
                }
              } else if (starNotificationHandler === type) {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              if (progressHandlers.get(token) === handler) {
                progressHandlers.delete(token);
              }
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          function sendCancellation(connection2, id2) {
            const p = cancellationStrategy.sender.sendCancellation(connection2, id2);
            if (p === void 0) {
              logger.log(`Received no promise from cancellation strategy when cancelling id ${id2}`);
            } else {
              p.catch(() => {
                logger.log(`Sending cancellation messages for id ${id2} failed.`);
              });
            }
          }
          let method;
          let messageParams;
          let token = void 0;
          if (Is2.string(type)) {
            method = type;
            const first = args[0];
            const last = args[args.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          let tokenWasCancelled = false;
          if (token !== void 0) {
            if (token.isCancellationRequested) {
              tokenWasCancelled = true;
            } else {
              disposable = token.onCancellationRequested(() => {
                sendCancellation(connection, id);
              });
            }
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve7, reject) => {
            const resolveWithCleanup = (r) => {
              resolve7(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              responsePromises.set(id, responsePromise);
              await messageWriter.write(requestMessage);
              if (tokenWasCancelled) {
                sendCancellation(connection, id);
              }
            } catch (error) {
              responsePromises.delete(id);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
              logger.error(`Sending request failed.`);
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is2.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                if (requestHandlers.get(method)?.handler === handler) {
                  requestHandlers.delete(method);
                }
              } else if (starRequestHandler === type) {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is2.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is2.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is2.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection.onNotification(ProgressNotification.type, async (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          await handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection;
    }
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/api.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProgressType = exports.ProgressToken = exports.createMessageConnection = exports.NullLogger = exports.ConnectionOptions = exports.ConnectionStrategy = exports.AbstractMessageBuffer = exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = exports.CancellationToken = exports.CancellationTokenSource = exports.Emitter = exports.Event = exports.Disposable = exports.LRUCache = exports.Touch = exports.LinkedMap = exports.ParameterStructures = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.ErrorCodes = exports.ResponseError = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType0 = exports.RequestType = exports.Message = exports.RAL = void 0;
    exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.RequestCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy = exports.CancellationReceiverStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.TraceValue = exports.Trace = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var sharedArrayCancellation_1 = require_sharedArrayCancellation();
    Object.defineProperty(exports, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var messageBuffer_1 = require_messageBuffer();
    Object.defineProperty(exports, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports, "TraceValue", { enumerable: true, get: function() {
      return connection_1.TraceValue;
    } });
    Object.defineProperty(exports, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports, "IdCancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.IdCancellationReceiverStrategy;
    } });
    Object.defineProperty(exports, "RequestCancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.RequestCancellationReceiverStrategy;
    } });
    Object.defineProperty(exports, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    Object.defineProperty(exports, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    var ral_1 = __importDefault(require_ral());
    exports.RAL = ral_1.default;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/node/ril.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = __require("util");
    var api_1 = require_api();
    var MessageBuffer = class _MessageBuffer extends api_1.AbstractMessageBuffer {
      static emptyBuffer = Buffer.allocUnsafe(0);
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return _MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    var ReadableStreamWrapper = class {
      stream;
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return api_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      stream;
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve7, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve7();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
            } catch (err) {
              return Promise.reject(err);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
              }
            } catch (err) {
              return Promise.reject(err);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
          const handle = setTimeout(callback, ms, ...args);
          return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
          const handle = setImmediate(callback, ...args);
          return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
          const handle = setInterval(callback, ms, ...args);
          return { dispose: () => clearInterval(handle) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        api_1.RAL.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports.default = RIL;
  }
});

// ../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS({
  "../../node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/node/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StreamMessageWriter = exports.StreamMessageReader = exports.SocketMessageWriter = exports.SocketMessageReader = exports.PortMessageWriter = exports.PortMessageReader = exports.IPCMessageWriter = exports.IPCMessageReader = void 0;
    exports.generateRandomPipeName = generateRandomPipeName;
    exports.createClientPipeTransport = createClientPipeTransport;
    exports.createServerPipeTransport = createServerPipeTransport;
    exports.createClientSocketTransport = createClientSocketTransport;
    exports.createServerSocketTransport = createServerSocketTransport;
    exports.createMessageConnection = createMessageConnection;
    var ril_1 = __importDefault(require_ril());
    ril_1.default.install();
    var path = __importStar(__require("path"));
    var os = __importStar(__require("os"));
    var fs = __importStar(__require("fs"));
    var crypto_1 = __require("crypto");
    var net_1 = __require("net");
    var api_1 = require_api();
    __exportStar(require_api(), exports);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      process;
      constructor(process2) {
        super();
        this.process = process2;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      process;
      errorCount;
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose);
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports.IPCMessageWriter = IPCMessageWriter;
    var PortMessageReader = class extends api_1.AbstractMessageReader {
      onData;
      constructor(port) {
        super();
        this.onData = new api_1.Emitter();
        port.on("close", () => this.fireClose);
        port.on("error", (error) => this.fireError(error));
        port.on("message", (message) => {
          this.onData.fire(message);
        });
      }
      listen(callback) {
        return this.onData.event(callback);
      }
    };
    exports.PortMessageReader = PortMessageReader;
    var PortMessageWriter = class extends api_1.AbstractMessageWriter {
      port;
      errorCount;
      constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
      }
      write(msg) {
        try {
          this.port.postMessage(msg);
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports.PortMessageWriter = PortMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      socket;
      constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
      }
    };
    exports.StreamMessageReader = StreamMessageReader;
    var StreamMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
      }
    };
    exports.StreamMessageWriter = StreamMessageWriter;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 102]
    ]);
    function generateRandomPipeName() {
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\lsp-${(0, crypto_1.randomBytes)(16).toString("hex")}-sock`;
      }
      let randomLength = 32;
      const fixedLength = "/lsp-.sock".length;
      const tmpDir = fs.realpathSync(XDG_RUNTIME_DIR ?? os.tmpdir());
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0) {
        randomLength = Math.min(limit - tmpDir.length - fixedLength, randomLength);
      }
      if (randomLength < 16) {
        throw new Error(`Unable to generate a random pipe name with ${randomLength} characters.`);
      }
      const randomSuffix = (0, crypto_1.randomBytes)(Math.floor(randomLength / 2)).toString("hex");
      return path.join(tmpDir, `lsp-${randomSuffix}.sock`);
    }
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve7, _reject) => {
        connectResolve = resolve7;
      });
      return new Promise((resolve7, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve7({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve7, _reject) => {
        connectResolve = resolve7;
      });
      return new Promise((resolve7, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          const address = server.address();
          if (address === null || typeof address === "string") {
            reject(new Error(`Unexpected server address: ${address}`));
            return;
          }
          const boundPort = address.port;
          resolve7({
            port: () => boundPort,
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection(input, output, logger, options) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
      if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options);
    }
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-types@3.18.4/node_modules/vscode-languageserver-types/lib/esm/main.js
var main_exports = {};
__export(main_exports, {
  AnnotatedTextEdit: () => AnnotatedTextEdit,
  ApplyKind: () => ApplyKind,
  ChangeAnnotation: () => ChangeAnnotation,
  ChangeAnnotationIdentifier: () => ChangeAnnotationIdentifier,
  CodeAction: () => CodeAction,
  CodeActionContext: () => CodeActionContext,
  CodeActionKind: () => CodeActionKind,
  CodeActionTag: () => CodeActionTag,
  CodeActionTriggerKind: () => CodeActionTriggerKind,
  CodeDescription: () => CodeDescription,
  CodeLens: () => CodeLens,
  Color: () => Color,
  ColorInformation: () => ColorInformation,
  ColorPresentation: () => ColorPresentation,
  Command: () => Command,
  CompletionItem: () => CompletionItem,
  CompletionItemKind: () => CompletionItemKind,
  CompletionItemLabelDetails: () => CompletionItemLabelDetails,
  CompletionItemTag: () => CompletionItemTag,
  CompletionList: () => CompletionList,
  CreateFile: () => CreateFile,
  DeleteFile: () => DeleteFile,
  Diagnostic: () => Diagnostic,
  DiagnosticRelatedInformation: () => DiagnosticRelatedInformation,
  DiagnosticSeverity: () => DiagnosticSeverity,
  DiagnosticTag: () => DiagnosticTag,
  DocumentHighlight: () => DocumentHighlight,
  DocumentHighlightKind: () => DocumentHighlightKind,
  DocumentLink: () => DocumentLink,
  DocumentSymbol: () => DocumentSymbol,
  DocumentUri: () => DocumentUri,
  EOL: () => EOL,
  FoldingRange: () => FoldingRange,
  FoldingRangeKind: () => FoldingRangeKind,
  FormattingOptions: () => FormattingOptions,
  Hover: () => Hover,
  InlayHint: () => InlayHint,
  InlayHintKind: () => InlayHintKind,
  InlayHintLabelPart: () => InlayHintLabelPart,
  InlineCompletionContext: () => InlineCompletionContext,
  InlineCompletionItem: () => InlineCompletionItem,
  InlineCompletionList: () => InlineCompletionList,
  InlineCompletionTriggerKind: () => InlineCompletionTriggerKind,
  InlineValueContext: () => InlineValueContext,
  InlineValueEvaluatableExpression: () => InlineValueEvaluatableExpression,
  InlineValueText: () => InlineValueText,
  InlineValueVariableLookup: () => InlineValueVariableLookup,
  InsertReplaceEdit: () => InsertReplaceEdit,
  InsertTextFormat: () => InsertTextFormat,
  InsertTextMode: () => InsertTextMode,
  LanguageKind: () => LanguageKind,
  Location: () => Location,
  LocationLink: () => LocationLink,
  MarkedString: () => MarkedString,
  MarkupContent: () => MarkupContent,
  MarkupKind: () => MarkupKind,
  OptionalVersionedTextDocumentIdentifier: () => OptionalVersionedTextDocumentIdentifier,
  ParameterInformation: () => ParameterInformation,
  Position: () => Position,
  Range: () => Range,
  RenameFile: () => RenameFile,
  SelectedCompletionInfo: () => SelectedCompletionInfo,
  SelectionRange: () => SelectionRange,
  SemanticTokenModifiers: () => SemanticTokenModifiers,
  SemanticTokenTypes: () => SemanticTokenTypes,
  SemanticTokens: () => SemanticTokens,
  SignatureInformation: () => SignatureInformation,
  SnippetTextEdit: () => SnippetTextEdit,
  StringValue: () => StringValue,
  SymbolInformation: () => SymbolInformation,
  SymbolKind: () => SymbolKind,
  SymbolTag: () => SymbolTag,
  TextDocument: () => TextDocument,
  TextDocumentEdit: () => TextDocumentEdit,
  TextDocumentIdentifier: () => TextDocumentIdentifier,
  TextDocumentItem: () => TextDocumentItem,
  TextEdit: () => TextEdit,
  URI: () => URI,
  VersionedTextDocumentIdentifier: () => VersionedTextDocumentIdentifier,
  WorkspaceChange: () => WorkspaceChange,
  WorkspaceEdit: () => WorkspaceEdit,
  WorkspaceFolder: () => WorkspaceFolder,
  WorkspaceSymbol: () => WorkspaceSymbol,
  integer: () => integer,
  uinteger: () => uinteger
});
var DocumentUri, URI, integer, uinteger, Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, DiagnosticTag, CodeDescription, Diagnostic, Command, TextEdit, ChangeAnnotation, ChangeAnnotationIdentifier, AnnotatedTextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, TextEditChangeImpl, SnippetTextEdit, ChangeAnnotations, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, OptionalVersionedTextDocumentIdentifier, LanguageKind, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItemTag, InsertReplaceEdit, InsertTextMode, ApplyKind, CompletionItemLabelDetails, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolTag, SymbolInformation, WorkspaceSymbol, DocumentSymbol, CodeActionKind, CodeActionTriggerKind, CodeActionContext, CodeActionTag, CodeAction, CodeLens, FormattingOptions, DocumentLink, SelectionRange, SemanticTokenTypes, SemanticTokenModifiers, SemanticTokens, InlineValueText, InlineValueVariableLookup, InlineValueEvaluatableExpression, InlineValueContext, InlayHintKind, InlayHintLabelPart, InlayHint, StringValue, InlineCompletionItem, InlineCompletionList, InlineCompletionTriggerKind, SelectedCompletionInfo, InlineCompletionContext, WorkspaceFolder, EOL, TextDocument, FullTextDocument, Is;
var init_main = __esm({
  "../../node_modules/.pnpm/vscode-languageserver-types@3.18.4/node_modules/vscode-languageserver-types/lib/esm/main.js"() {
    "use strict";
    (function(DocumentUri2) {
      function is(value) {
        return typeof value === "string";
      }
      DocumentUri2.is = is;
    })(DocumentUri || (DocumentUri = {}));
    (function(URI2) {
      function is(value) {
        return typeof value === "string";
      }
      URI2.is = is;
    })(URI || (URI = {}));
    (function(integer2) {
      integer2.MIN_VALUE = -2147483648;
      integer2.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
      }
      integer2.is = is;
    })(integer || (integer = {}));
    (function(uinteger2) {
      uinteger2.MIN_VALUE = 0;
      uinteger2.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
      }
      uinteger2.is = is;
    })(uinteger || (uinteger = {}));
    (function(Position4) {
      function create(line, character) {
        if (line === Number.MAX_VALUE) {
          line = uinteger.MAX_VALUE;
        }
        if (character === Number.MAX_VALUE) {
          character = uinteger.MAX_VALUE;
        }
        return { line, character };
      }
      Position4.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
      }
      Position4.is = is;
    })(Position || (Position = {}));
    (function(Range2) {
      function create(one, two, three, four) {
        if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
          return { start: Position.create(one, two), end: Position.create(three, four) };
        } else if (Position.is(one) && Position.is(two)) {
          return { start: one, end: two };
        } else {
          throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
        }
      }
      Range2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
      }
      Range2.is = is;
    })(Range || (Range = {}));
    (function(Location2) {
      function create(uri, range) {
        return { uri, range };
      }
      Location2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
      }
      Location2.is = is;
    })(Location || (Location = {}));
    (function(LocationLink2) {
      function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
      }
      LocationLink2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
      }
      LocationLink2.is = is;
    })(LocationLink || (LocationLink = {}));
    (function(Color2) {
      function create(red, green, blue, alpha) {
        return {
          red,
          green,
          blue,
          alpha
        };
      }
      Color2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
      }
      Color2.is = is;
    })(Color || (Color = {}));
    (function(ColorInformation2) {
      function create(range, color) {
        return {
          range,
          color
        };
      }
      ColorInformation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
      }
      ColorInformation2.is = is;
    })(ColorInformation || (ColorInformation = {}));
    (function(ColorPresentation2) {
      function create(label, textEdit, additionalTextEdits) {
        return {
          label,
          textEdit,
          additionalTextEdits
        };
      }
      ColorPresentation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
      }
      ColorPresentation2.is = is;
    })(ColorPresentation || (ColorPresentation = {}));
    (function(FoldingRangeKind2) {
      FoldingRangeKind2.Comment = "comment";
      FoldingRangeKind2.Imports = "imports";
      FoldingRangeKind2.Region = "region";
    })(FoldingRangeKind || (FoldingRangeKind = {}));
    (function(FoldingRange2) {
      function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
        const result = {
          startLine,
          endLine
        };
        if (Is.defined(startCharacter)) {
          result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
          result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
          result.kind = kind;
        }
        if (Is.defined(collapsedText)) {
          result.collapsedText = collapsedText;
        }
        return result;
      }
      FoldingRange2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
      }
      FoldingRange2.is = is;
    })(FoldingRange || (FoldingRange = {}));
    (function(DiagnosticRelatedInformation2) {
      function create(location, message) {
        return {
          location,
          message
        };
      }
      DiagnosticRelatedInformation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
      }
      DiagnosticRelatedInformation2.is = is;
    })(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
    (function(DiagnosticSeverity2) {
      DiagnosticSeverity2.Error = 1;
      DiagnosticSeverity2.Warning = 2;
      DiagnosticSeverity2.Information = 3;
      DiagnosticSeverity2.Hint = 4;
    })(DiagnosticSeverity || (DiagnosticSeverity = {}));
    (function(DiagnosticTag2) {
      DiagnosticTag2.Unnecessary = 1;
      DiagnosticTag2.Deprecated = 2;
    })(DiagnosticTag || (DiagnosticTag = {}));
    (function(CodeDescription2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.href);
      }
      CodeDescription2.is = is;
    })(CodeDescription || (CodeDescription = {}));
    (function(Diagnostic2) {
      function create(range, message, severity, code, source, relatedInformation) {
        const result = { range, message };
        if (Is.defined(severity)) {
          result.severity = severity;
        }
        if (Is.defined(code)) {
          result.code = code;
        }
        if (Is.defined(source)) {
          result.source = source;
        }
        if (Is.defined(relatedInformation)) {
          result.relatedInformation = relatedInformation;
        }
        return result;
      }
      Diagnostic2.create = create;
      function is(value) {
        var _a;
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.message) || MarkupContent.is(candidate.message)) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
      }
      Diagnostic2.is = is;
      function is3_17(value) {
        return Is.string(value.message);
      }
      Diagnostic2.is3_17 = is3_17;
      function getMessageString(diagnostic) {
        if (Is.string(diagnostic.message)) {
          return diagnostic.message;
        } else if (MarkupContent.is(diagnostic.message)) {
          return diagnostic.message.value;
        } else {
          throw new Error(`Unknown message type ${typeof diagnostic.message}`);
        }
      }
      Diagnostic2.getMessageString = getMessageString;
    })(Diagnostic || (Diagnostic = {}));
    (function(Command2) {
      function create(title, command, ...args) {
        const result = { title, command };
        if (Is.defined(args) && args.length > 0) {
          result.arguments = args;
        }
        return result;
      }
      Command2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip)) && Is.string(candidate.command);
      }
      Command2.is = is;
    })(Command || (Command = {}));
    (function(TextEdit2) {
      function replace(range, newText) {
        return { range, newText };
      }
      TextEdit2.replace = replace;
      function insert(position, newText) {
        return { range: { start: position, end: position }, newText };
      }
      TextEdit2.insert = insert;
      function del(range) {
        return { range, newText: "" };
      }
      TextEdit2.del = del;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
      }
      TextEdit2.is = is;
    })(TextEdit || (TextEdit = {}));
    (function(ChangeAnnotation2) {
      function create(label, needsConfirmation, description) {
        const result = { label };
        if (needsConfirmation !== void 0) {
          result.needsConfirmation = needsConfirmation;
        }
        if (description !== void 0) {
          result.description = description;
        }
        return result;
      }
      ChangeAnnotation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
      }
      ChangeAnnotation2.is = is;
    })(ChangeAnnotation || (ChangeAnnotation = {}));
    (function(ChangeAnnotationIdentifier2) {
      function is(value) {
        const candidate = value;
        return Is.string(candidate);
      }
      ChangeAnnotationIdentifier2.is = is;
    })(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
    (function(AnnotatedTextEdit2) {
      function replace(range, newText, annotation) {
        return { range, newText, annotationId: annotation };
      }
      AnnotatedTextEdit2.replace = replace;
      function insert(position, newText, annotation) {
        return { range: { start: position, end: position }, newText, annotationId: annotation };
      }
      AnnotatedTextEdit2.insert = insert;
      function del(range, annotation) {
        return { range, newText: "", annotationId: annotation };
      }
      AnnotatedTextEdit2.del = del;
      function is(value) {
        const candidate = value;
        return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      AnnotatedTextEdit2.is = is;
    })(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
    (function(TextDocumentEdit2) {
      function create(textDocument, edits) {
        return { textDocument, edits };
      }
      TextDocumentEdit2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
      }
      TextDocumentEdit2.is = is;
    })(TextDocumentEdit || (TextDocumentEdit = {}));
    (function(CreateFile2) {
      function create(uri, options, annotation) {
        const result = {
          kind: "create",
          uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      CreateFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      CreateFile2.is = is;
    })(CreateFile || (CreateFile = {}));
    (function(RenameFile2) {
      function create(oldUri, newUri, options, annotation) {
        const result = {
          kind: "rename",
          oldUri,
          newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      RenameFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      RenameFile2.is = is;
    })(RenameFile || (RenameFile = {}));
    (function(DeleteFile2) {
      function create(uri, options, annotation) {
        const result = {
          kind: "delete",
          uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      DeleteFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      DeleteFile2.is = is;
    })(DeleteFile || (DeleteFile = {}));
    (function(WorkspaceEdit2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every((change) => {
          if (Is.string(change.kind)) {
            return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
          } else {
            return TextDocumentEdit.is(change);
          }
        }));
      }
      WorkspaceEdit2.is = is;
    })(WorkspaceEdit || (WorkspaceEdit = {}));
    TextEditChangeImpl = class {
      constructor(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
      }
      insert(position, newText, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.insert(position, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      replace(range, newText, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.replace(range, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      delete(range, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.del(range);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.del(range, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      add(edit) {
        this.edits.push(edit);
      }
      all() {
        return this.edits;
      }
      clear() {
        this.edits.splice(0, this.edits.length);
      }
      assertChangeAnnotations(value) {
        if (value === void 0) {
          throw new Error(`Text edit change is not configured to manage change annotations.`);
        }
      }
    };
    (function(SnippetTextEdit2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && StringValue.isSnippet(candidate.snippet) && (candidate.annotationId === void 0 || (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId)));
      }
      SnippetTextEdit2.is = is;
    })(SnippetTextEdit || (SnippetTextEdit = {}));
    ChangeAnnotations = class {
      constructor(annotations) {
        this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
      }
      all() {
        return this._annotations;
      }
      get size() {
        return this._size;
      }
      manage(idOrAnnotation, annotation) {
        let id;
        if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
          id = idOrAnnotation;
        } else {
          id = this.nextId();
          annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== void 0) {
          throw new Error(`Id ${id} is already in use.`);
        }
        if (annotation === void 0) {
          throw new Error(`No annotation provided for id ${id}`);
        }
        this._annotations[id] = annotation;
        this._size++;
        return id;
      }
      nextId() {
        this._counter++;
        return this._counter.toString();
      }
    };
    WorkspaceChange = class {
      constructor(workspaceEdit) {
        this._textEditChanges = /* @__PURE__ */ Object.create(null);
        if (workspaceEdit !== void 0) {
          this._workspaceEdit = workspaceEdit;
          if (workspaceEdit.documentChanges) {
            this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
            workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            workspaceEdit.documentChanges.forEach((change) => {
              if (TextDocumentEdit.is(change)) {
                const textEditChange = new TextEditChangeImpl(change.edits, this._changeAnnotations);
                this._textEditChanges[change.textDocument.uri] = textEditChange;
              }
            });
          } else if (workspaceEdit.changes) {
            Object.keys(workspaceEdit.changes).forEach((key) => {
              const textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
              this._textEditChanges[key] = textEditChange;
            });
          }
        } else {
          this._workspaceEdit = {};
        }
      }
      /**
       * Returns the underlying {@link WorkspaceEdit} literal
       * use to be returned from a workspace edit operation like rename.
       */
      get edit() {
        this.initDocumentChanges();
        if (this._changeAnnotations !== void 0) {
          if (this._changeAnnotations.size === 0) {
            this._workspaceEdit.changeAnnotations = void 0;
          } else {
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
          }
        }
        return this._workspaceEdit;
      }
      getTextEditChange(key) {
        if (OptionalVersionedTextDocumentIdentifier.is(key)) {
          this.initDocumentChanges();
          if (this._workspaceEdit.documentChanges === void 0) {
            throw new Error("Workspace edit is not configured for document changes.");
          }
          const textDocument = { uri: key.uri, version: key.version };
          let result = this._textEditChanges[textDocument.uri];
          if (!result) {
            const edits = [];
            const textDocumentEdit = {
              textDocument,
              edits
            };
            this._workspaceEdit.documentChanges.push(textDocumentEdit);
            result = new TextEditChangeImpl(edits, this._changeAnnotations);
            this._textEditChanges[textDocument.uri] = result;
          }
          return result;
        } else {
          this.initChanges();
          if (this._workspaceEdit.changes === void 0) {
            throw new Error("Workspace edit is not configured for normal text edit changes.");
          }
          let result = this._textEditChanges[key];
          if (!result) {
            const edits = [];
            this._workspaceEdit.changes[key] = edits;
            result = new TextEditChangeImpl(edits);
            this._textEditChanges[key] = result;
          }
          return result;
        }
      }
      initDocumentChanges() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
          this._changeAnnotations = new ChangeAnnotations();
          this._workspaceEdit.documentChanges = [];
          this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
      }
      initChanges() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
          this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
        }
      }
      createFile(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = CreateFile.create(uri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
      renameFile(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = RenameFile.create(oldUri, newUri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
      deleteFile(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = DeleteFile.create(uri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
    };
    (function(TextDocumentIdentifier2) {
      function create(uri) {
        return { uri };
      }
      TextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
      }
      TextDocumentIdentifier2.is = is;
    })(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
    (function(VersionedTextDocumentIdentifier2) {
      function create(uri, version) {
        return { uri, version };
      }
      VersionedTextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
      }
      VersionedTextDocumentIdentifier2.is = is;
    })(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
    (function(OptionalVersionedTextDocumentIdentifier2) {
      function create(uri, version) {
        return { uri, version };
      }
      OptionalVersionedTextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
      }
      OptionalVersionedTextDocumentIdentifier2.is = is;
    })(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
    (function(LanguageKind2) {
      LanguageKind2.ABAP = "abap";
      LanguageKind2.WindowsBat = "bat";
      LanguageKind2.BibTeX = "bibtex";
      LanguageKind2.Clojure = "clojure";
      LanguageKind2.Coffeescript = "coffeescript";
      LanguageKind2.C = "c";
      LanguageKind2.CPP = "cpp";
      LanguageKind2.CSharp = "csharp";
      LanguageKind2.CSS = "css";
      LanguageKind2.D = "d";
      LanguageKind2.Delphi = "pascal";
      LanguageKind2.Diff = "diff";
      LanguageKind2.Dart = "dart";
      LanguageKind2.Dockerfile = "dockerfile";
      LanguageKind2.Elixir = "elixir";
      LanguageKind2.Erlang = "erlang";
      LanguageKind2.FSharp = "fsharp";
      LanguageKind2.GitCommit = "git-commit";
      LanguageKind2.GitRebase = "git-rebase";
      LanguageKind2.Go = "go";
      LanguageKind2.Groovy = "groovy";
      LanguageKind2.Handlebars = "handlebars";
      LanguageKind2.Haskell = "haskell";
      LanguageKind2.HTML = "html";
      LanguageKind2.Ini = "ini";
      LanguageKind2.Java = "java";
      LanguageKind2.JavaScript = "javascript";
      LanguageKind2.JavaScriptReact = "javascriptreact";
      LanguageKind2.JSON = "json";
      LanguageKind2.LaTeX = "latex";
      LanguageKind2.Less = "less";
      LanguageKind2.Lua = "lua";
      LanguageKind2.Makefile = "makefile";
      LanguageKind2.Markdown = "markdown";
      LanguageKind2.ObjectiveC = "objective-c";
      LanguageKind2.ObjectiveCPP = "objective-cpp";
      LanguageKind2.Pascal = "pascal";
      LanguageKind2.Perl = "perl";
      LanguageKind2.Perl6 = "perl6";
      LanguageKind2.PHP = "php";
      LanguageKind2.Plaintext = "plaintext";
      LanguageKind2.Powershell = "powershell";
      LanguageKind2.Pug = "jade";
      LanguageKind2.Python = "python";
      LanguageKind2.R = "r";
      LanguageKind2.Razor = "razor";
      LanguageKind2.Ruby = "ruby";
      LanguageKind2.Rust = "rust";
      LanguageKind2.SCSS = "scss";
      LanguageKind2.SASS = "sass";
      LanguageKind2.Scala = "scala";
      LanguageKind2.ShaderLab = "shaderlab";
      LanguageKind2.ShellScript = "shellscript";
      LanguageKind2.SQL = "sql";
      LanguageKind2.Swift = "swift";
      LanguageKind2.TypeScript = "typescript";
      LanguageKind2.TypeScriptReact = "typescriptreact";
      LanguageKind2.TeX = "tex";
      LanguageKind2.VisualBasic = "vb";
      LanguageKind2.XML = "xml";
      LanguageKind2.XSL = "xsl";
      LanguageKind2.YAML = "yaml";
    })(LanguageKind || (LanguageKind = {}));
    (function(TextDocumentItem2) {
      function create(uri, languageId, version, text) {
        return { uri, languageId, version, text };
      }
      TextDocumentItem2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
      }
      TextDocumentItem2.is = is;
    })(TextDocumentItem || (TextDocumentItem = {}));
    (function(MarkupKind3) {
      MarkupKind3.PlainText = "plaintext";
      MarkupKind3.Markdown = "markdown";
      function is(value) {
        const candidate = value;
        return candidate === MarkupKind3.PlainText || candidate === MarkupKind3.Markdown;
      }
      MarkupKind3.is = is;
    })(MarkupKind || (MarkupKind = {}));
    (function(MarkupContent2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
      }
      MarkupContent2.is = is;
    })(MarkupContent || (MarkupContent = {}));
    (function(CompletionItemKind2) {
      CompletionItemKind2.Text = 1;
      CompletionItemKind2.Method = 2;
      CompletionItemKind2.Function = 3;
      CompletionItemKind2.Constructor = 4;
      CompletionItemKind2.Field = 5;
      CompletionItemKind2.Variable = 6;
      CompletionItemKind2.Class = 7;
      CompletionItemKind2.Interface = 8;
      CompletionItemKind2.Module = 9;
      CompletionItemKind2.Property = 10;
      CompletionItemKind2.Unit = 11;
      CompletionItemKind2.Value = 12;
      CompletionItemKind2.Enum = 13;
      CompletionItemKind2.Keyword = 14;
      CompletionItemKind2.Snippet = 15;
      CompletionItemKind2.Color = 16;
      CompletionItemKind2.File = 17;
      CompletionItemKind2.Reference = 18;
      CompletionItemKind2.Folder = 19;
      CompletionItemKind2.EnumMember = 20;
      CompletionItemKind2.Constant = 21;
      CompletionItemKind2.Struct = 22;
      CompletionItemKind2.Event = 23;
      CompletionItemKind2.Operator = 24;
      CompletionItemKind2.TypeParameter = 25;
    })(CompletionItemKind || (CompletionItemKind = {}));
    (function(InsertTextFormat2) {
      InsertTextFormat2.PlainText = 1;
      InsertTextFormat2.Snippet = 2;
    })(InsertTextFormat || (InsertTextFormat = {}));
    (function(CompletionItemTag2) {
      CompletionItemTag2.Deprecated = 1;
    })(CompletionItemTag || (CompletionItemTag = {}));
    (function(InsertReplaceEdit2) {
      function create(newText, insert, replace) {
        return { newText, insert, replace };
      }
      InsertReplaceEdit2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
      }
      InsertReplaceEdit2.is = is;
    })(InsertReplaceEdit || (InsertReplaceEdit = {}));
    (function(InsertTextMode2) {
      InsertTextMode2.asIs = 1;
      InsertTextMode2.adjustIndentation = 2;
    })(InsertTextMode || (InsertTextMode = {}));
    (function(ApplyKind2) {
      ApplyKind2.Replace = 1;
      ApplyKind2.Merge = 2;
    })(ApplyKind || (ApplyKind = {}));
    (function(CompletionItemLabelDetails2) {
      function is(value) {
        const candidate = value;
        return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
      }
      CompletionItemLabelDetails2.is = is;
    })(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
    (function(CompletionItem2) {
      function create(label) {
        return { label };
      }
      CompletionItem2.create = create;
    })(CompletionItem || (CompletionItem = {}));
    (function(CompletionList2) {
      function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
      }
      CompletionList2.create = create;
    })(CompletionList || (CompletionList = {}));
    (function(MarkedString2) {
      function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }
      MarkedString2.fromPlainText = fromPlainText;
      function is(value) {
        const candidate = value;
        return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
      }
      MarkedString2.is = is;
    })(MarkedString || (MarkedString = {}));
    (function(Hover2) {
      function is(value) {
        const candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
      }
      Hover2.is = is;
    })(Hover || (Hover = {}));
    (function(ParameterInformation2) {
      function create(label, documentation) {
        return documentation ? { label, documentation } : { label };
      }
      ParameterInformation2.create = create;
    })(ParameterInformation || (ParameterInformation = {}));
    (function(SignatureInformation2) {
      function create(label, documentation, ...parameters) {
        const result = { label };
        if (Is.defined(documentation)) {
          result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
          result.parameters = parameters;
        } else {
          result.parameters = [];
        }
        return result;
      }
      SignatureInformation2.create = create;
    })(SignatureInformation || (SignatureInformation = {}));
    (function(DocumentHighlightKind2) {
      DocumentHighlightKind2.Text = 1;
      DocumentHighlightKind2.Read = 2;
      DocumentHighlightKind2.Write = 3;
    })(DocumentHighlightKind || (DocumentHighlightKind = {}));
    (function(DocumentHighlight2) {
      function create(range, kind) {
        const result = { range };
        if (Is.number(kind)) {
          result.kind = kind;
        }
        return result;
      }
      DocumentHighlight2.create = create;
    })(DocumentHighlight || (DocumentHighlight = {}));
    (function(SymbolKind2) {
      SymbolKind2.File = 1;
      SymbolKind2.Module = 2;
      SymbolKind2.Namespace = 3;
      SymbolKind2.Package = 4;
      SymbolKind2.Class = 5;
      SymbolKind2.Method = 6;
      SymbolKind2.Property = 7;
      SymbolKind2.Field = 8;
      SymbolKind2.Constructor = 9;
      SymbolKind2.Enum = 10;
      SymbolKind2.Interface = 11;
      SymbolKind2.Function = 12;
      SymbolKind2.Variable = 13;
      SymbolKind2.Constant = 14;
      SymbolKind2.String = 15;
      SymbolKind2.Number = 16;
      SymbolKind2.Boolean = 17;
      SymbolKind2.Array = 18;
      SymbolKind2.Object = 19;
      SymbolKind2.Key = 20;
      SymbolKind2.Null = 21;
      SymbolKind2.EnumMember = 22;
      SymbolKind2.Struct = 23;
      SymbolKind2.Event = 24;
      SymbolKind2.Operator = 25;
      SymbolKind2.TypeParameter = 26;
    })(SymbolKind || (SymbolKind = {}));
    (function(SymbolTag2) {
      SymbolTag2.Deprecated = 1;
    })(SymbolTag || (SymbolTag = {}));
    (function(SymbolInformation2) {
      function create(name, kind, range, uri, containerName) {
        const result = {
          name,
          kind,
          location: { uri, range }
        };
        if (containerName) {
          result.containerName = containerName;
        }
        return result;
      }
      SymbolInformation2.create = create;
    })(SymbolInformation || (SymbolInformation = {}));
    (function(WorkspaceSymbol2) {
      function create(name, kind, uri, range) {
        return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
      }
      WorkspaceSymbol2.create = create;
    })(WorkspaceSymbol || (WorkspaceSymbol = {}));
    (function(DocumentSymbol2) {
      function create(name, detail, kind, range, selectionRange, children) {
        const result = {
          name,
          detail,
          kind,
          range,
          selectionRange
        };
        if (children !== void 0) {
          result.children = children;
        }
        return result;
      }
      DocumentSymbol2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
      }
      DocumentSymbol2.is = is;
    })(DocumentSymbol || (DocumentSymbol = {}));
    (function(CodeActionKind2) {
      CodeActionKind2.Empty = "";
      CodeActionKind2.QuickFix = "quickfix";
      CodeActionKind2.Refactor = "refactor";
      CodeActionKind2.RefactorExtract = "refactor.extract";
      CodeActionKind2.RefactorInline = "refactor.inline";
      CodeActionKind2.RefactorMove = "refactor.move";
      CodeActionKind2.RefactorRewrite = "refactor.rewrite";
      CodeActionKind2.Source = "source";
      CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
      CodeActionKind2.SourceFixAll = "source.fixAll";
      CodeActionKind2.Notebook = "notebook";
    })(CodeActionKind || (CodeActionKind = {}));
    (function(CodeActionTriggerKind2) {
      CodeActionTriggerKind2.Invoked = 1;
      CodeActionTriggerKind2.Automatic = 2;
    })(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
    (function(CodeActionContext2) {
      function create(diagnostics, only, triggerKind) {
        const result = { diagnostics };
        if (only !== void 0 && only !== null) {
          result.only = only;
        }
        if (triggerKind !== void 0 && triggerKind !== null) {
          result.triggerKind = triggerKind;
        }
        return result;
      }
      CodeActionContext2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
      }
      CodeActionContext2.is = is;
    })(CodeActionContext || (CodeActionContext = {}));
    (function(CodeActionTag2) {
      CodeActionTag2.LLMGenerated = 1;
      function is(value) {
        return Is.defined(value) && value === CodeActionTag2.LLMGenerated;
      }
      CodeActionTag2.is = is;
    })(CodeActionTag || (CodeActionTag = {}));
    (function(CodeAction2) {
      function create(title, kindOrCommandOrEdit, kind) {
        const result = { title };
        let checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
          checkKind = false;
          result.kind = kindOrCommandOrEdit;
        } else if (Command.is(kindOrCommandOrEdit)) {
          result.command = kindOrCommandOrEdit;
        } else {
          result.edit = kindOrCommandOrEdit;
        }
        if (checkKind && kind !== void 0) {
          result.kind = kind;
        }
        return result;
      }
      CodeAction2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit)) && (candidate.tags === void 0 || Is.typedArray(candidate.tags, CodeActionTag.is));
      }
      CodeAction2.is = is;
    })(CodeAction || (CodeAction = {}));
    (function(CodeLens2) {
      function create(range, data) {
        const result = { range };
        if (Is.defined(data)) {
          result.data = data;
        }
        return result;
      }
      CodeLens2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
      }
      CodeLens2.is = is;
    })(CodeLens || (CodeLens = {}));
    (function(FormattingOptions2) {
      function create(tabSize, insertSpaces) {
        return { tabSize, insertSpaces };
      }
      FormattingOptions2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
      }
      FormattingOptions2.is = is;
    })(FormattingOptions || (FormattingOptions = {}));
    (function(DocumentLink2) {
      function create(range, target, data) {
        return { range, target, data };
      }
      DocumentLink2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
      }
      DocumentLink2.is = is;
    })(DocumentLink || (DocumentLink = {}));
    (function(SelectionRange2) {
      function create(range, parent) {
        return { range, parent };
      }
      SelectionRange2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
      }
      SelectionRange2.is = is;
    })(SelectionRange || (SelectionRange = {}));
    (function(SemanticTokenTypes2) {
      SemanticTokenTypes2["namespace"] = "namespace";
      SemanticTokenTypes2["type"] = "type";
      SemanticTokenTypes2["class"] = "class";
      SemanticTokenTypes2["enum"] = "enum";
      SemanticTokenTypes2["interface"] = "interface";
      SemanticTokenTypes2["struct"] = "struct";
      SemanticTokenTypes2["typeParameter"] = "typeParameter";
      SemanticTokenTypes2["parameter"] = "parameter";
      SemanticTokenTypes2["variable"] = "variable";
      SemanticTokenTypes2["property"] = "property";
      SemanticTokenTypes2["enumMember"] = "enumMember";
      SemanticTokenTypes2["event"] = "event";
      SemanticTokenTypes2["function"] = "function";
      SemanticTokenTypes2["method"] = "method";
      SemanticTokenTypes2["macro"] = "macro";
      SemanticTokenTypes2["keyword"] = "keyword";
      SemanticTokenTypes2["modifier"] = "modifier";
      SemanticTokenTypes2["comment"] = "comment";
      SemanticTokenTypes2["string"] = "string";
      SemanticTokenTypes2["number"] = "number";
      SemanticTokenTypes2["regexp"] = "regexp";
      SemanticTokenTypes2["operator"] = "operator";
      SemanticTokenTypes2["decorator"] = "decorator";
      SemanticTokenTypes2["label"] = "label";
    })(SemanticTokenTypes || (SemanticTokenTypes = {}));
    (function(SemanticTokenModifiers2) {
      SemanticTokenModifiers2["declaration"] = "declaration";
      SemanticTokenModifiers2["definition"] = "definition";
      SemanticTokenModifiers2["readonly"] = "readonly";
      SemanticTokenModifiers2["static"] = "static";
      SemanticTokenModifiers2["deprecated"] = "deprecated";
      SemanticTokenModifiers2["abstract"] = "abstract";
      SemanticTokenModifiers2["async"] = "async";
      SemanticTokenModifiers2["modification"] = "modification";
      SemanticTokenModifiers2["documentation"] = "documentation";
      SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
    })(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
    (function(SemanticTokens2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
      }
      SemanticTokens2.is = is;
    })(SemanticTokens || (SemanticTokens = {}));
    (function(InlineValueText2) {
      function create(range, text) {
        return { range, text };
      }
      InlineValueText2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
      }
      InlineValueText2.is = is;
    })(InlineValueText || (InlineValueText = {}));
    (function(InlineValueVariableLookup2) {
      function create(range, variableName, caseSensitiveLookup) {
        return { range, variableName, caseSensitiveLookup };
      }
      InlineValueVariableLookup2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
      }
      InlineValueVariableLookup2.is = is;
    })(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
    (function(InlineValueEvaluatableExpression2) {
      function create(range, expression) {
        return { range, expression };
      }
      InlineValueEvaluatableExpression2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
      }
      InlineValueEvaluatableExpression2.is = is;
    })(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
    (function(InlineValueContext2) {
      function create(frameId, stoppedLocation) {
        return { frameId, stoppedLocation };
      }
      InlineValueContext2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(value.stoppedLocation);
      }
      InlineValueContext2.is = is;
    })(InlineValueContext || (InlineValueContext = {}));
    (function(InlayHintKind2) {
      InlayHintKind2.Type = 1;
      InlayHintKind2.Parameter = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      InlayHintKind2.is = is;
    })(InlayHintKind || (InlayHintKind = {}));
    (function(InlayHintLabelPart2) {
      function create(value) {
        return { value };
      }
      InlayHintLabelPart2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
      }
      InlayHintLabelPart2.is = is;
    })(InlayHintLabelPart || (InlayHintLabelPart = {}));
    (function(InlayHint2) {
      function create(position, label, kind) {
        const result = { position, label };
        if (kind !== void 0) {
          result.kind = kind;
        }
        return result;
      }
      InlayHint2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
      }
      InlayHint2.is = is;
    })(InlayHint || (InlayHint = {}));
    (function(StringValue2) {
      function createSnippet(value) {
        return { kind: "snippet", value };
      }
      StringValue2.createSnippet = createSnippet;
      function isSnippet(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && candidate.kind === "snippet" && Is.string(candidate.value);
      }
      StringValue2.isSnippet = isSnippet;
    })(StringValue || (StringValue = {}));
    (function(InlineCompletionItem2) {
      function create(insertText, filterText, range, command) {
        return { insertText, filterText, range, command };
      }
      InlineCompletionItem2.create = create;
    })(InlineCompletionItem || (InlineCompletionItem = {}));
    (function(InlineCompletionList2) {
      function create(items) {
        return { items };
      }
      InlineCompletionList2.create = create;
    })(InlineCompletionList || (InlineCompletionList = {}));
    (function(InlineCompletionTriggerKind2) {
      InlineCompletionTriggerKind2.Invoked = 1;
      InlineCompletionTriggerKind2.Automatic = 2;
    })(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
    (function(SelectedCompletionInfo2) {
      function create(range, text) {
        return { range, text };
      }
      SelectedCompletionInfo2.create = create;
    })(SelectedCompletionInfo || (SelectedCompletionInfo = {}));
    (function(InlineCompletionContext2) {
      function create(triggerKind, selectedCompletionInfo) {
        return { triggerKind, selectedCompletionInfo };
      }
      InlineCompletionContext2.create = create;
    })(InlineCompletionContext || (InlineCompletionContext = {}));
    (function(WorkspaceFolder2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
      }
      WorkspaceFolder2.is = is;
    })(WorkspaceFolder || (WorkspaceFolder = {}));
    EOL = ["\n", "\r\n", "\r"];
    (function(TextDocument2) {
      function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
      }
      TextDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
      }
      TextDocument2.is = is;
      function applyEdits(document, edits) {
        let text = document.getText();
        const sortedEdits = mergeSort(edits, (a, b) => {
          const diff = a.range.start.line - b.range.start.line;
          if (diff === 0) {
            return a.range.start.character - b.range.start.character;
          }
          return diff;
        });
        let lastModifiedOffset = text.length;
        for (let i = sortedEdits.length - 1; i >= 0; i--) {
          const e = sortedEdits[i];
          const startOffset = document.offsetAt(e.range.start);
          const endOffset = document.offsetAt(e.range.end);
          if (endOffset <= lastModifiedOffset) {
            text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
          } else {
            throw new Error("Overlapping edit");
          }
          lastModifiedOffset = startOffset;
        }
        return text;
      }
      TextDocument2.applyEdits = applyEdits;
      function mergeSort(data, compare) {
        if (data.length <= 1) {
          return data;
        }
        const p = data.length / 2 | 0;
        const left = data.slice(0, p);
        const right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        let leftIdx = 0;
        let rightIdx = 0;
        let i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
          const ret = compare(left[leftIdx], right[rightIdx]);
          if (ret <= 0) {
            data[i++] = left[leftIdx++];
          } else {
            data[i++] = right[rightIdx++];
          }
        }
        while (leftIdx < left.length) {
          data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
          data[i++] = right[rightIdx++];
        }
        return data;
      }
    })(TextDocument || (TextDocument = {}));
    FullTextDocument = class {
      constructor(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(range) {
        if (range) {
          const start = this.offsetAt(range.start);
          const end = this.offsetAt(range.end);
          return this._content.substring(start, end);
        }
        return this._content;
      }
      update(event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = void 0;
      }
      getLineOffsets() {
        if (this._lineOffsets === void 0) {
          const lineOffsets = [];
          const text = this._content;
          let isLineStart = true;
          for (let i = 0; i < text.length; i++) {
            if (isLineStart) {
              lineOffsets.push(i);
              isLineStart = false;
            }
            const ch = text.charAt(i);
            isLineStart = ch === "\r" || ch === "\n";
            if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
              i++;
            }
          }
          if (isLineStart && text.length > 0) {
            lineOffsets.push(text.length);
          }
          this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
      }
      positionAt(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        const lineOffsets = this.getLineOffsets();
        let low = 0, high = lineOffsets.length;
        if (high === 0) {
          return Position.create(0, offset);
        }
        while (low < high) {
          const mid = Math.floor((low + high) / 2);
          if (lineOffsets[mid] > offset) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        const line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
      }
      offsetAt(position) {
        const lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
          return this._content.length;
        } else if (position.line < 0) {
          return 0;
        }
        const lineOffset = lineOffsets[position.line];
        const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
    };
    (function(Is2) {
      const toString = Object.prototype.toString;
      function defined(value) {
        return typeof value !== "undefined";
      }
      Is2.defined = defined;
      function undefined2(value) {
        return typeof value === "undefined";
      }
      Is2.undefined = undefined2;
      function boolean(value) {
        return value === true || value === false;
      }
      Is2.boolean = boolean;
      function string(value) {
        return toString.call(value) === "[object String]";
      }
      Is2.string = string;
      function number(value) {
        return toString.call(value) === "[object Number]";
      }
      Is2.number = number;
      function numberRange(value, min, max) {
        return toString.call(value) === "[object Number]" && min <= value && value <= max;
      }
      Is2.numberRange = numberRange;
      function integer2(value) {
        return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
      }
      Is2.integer = integer2;
      function uinteger2(value) {
        return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
      }
      Is2.uinteger = uinteger2;
      function func(value) {
        return toString.call(value) === "[object Function]";
      }
      Is2.func = func;
      function objectLiteral(value) {
        return value !== null && typeof value === "object";
      }
      Is2.objectLiteral = objectLiteral;
      function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
      }
      Is2.typedArray = typedArray;
    })(Is || (Is = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CM = exports.ProtocolNotificationType = exports.ProtocolNotificationType0 = exports.ProtocolRequestType = exports.ProtocolRequestType0 = exports.RegistrationType = exports.MessageDirection = void 0;
    var vscode_jsonrpc_1 = require_api();
    var MessageDirection;
    (function(MessageDirection2) {
      MessageDirection2["clientToServer"] = "clientToServer";
      MessageDirection2["serverToClient"] = "serverToClient";
      MessageDirection2["both"] = "both";
    })(MessageDirection || (exports.MessageDirection = MessageDirection = {}));
    var RegistrationType = class {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ____;
      method;
      constructor(method) {
        this.method = method;
      }
    };
    exports.RegistrationType = RegistrationType;
    var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
      /**
       * Clients must not use these properties. They are here to ensure correct typing.
       * in TypeScript
       */
      __;
      ___;
      ____;
      _pr;
      constructor(method) {
        super(method);
      }
    };
    exports.ProtocolRequestType0 = ProtocolRequestType0;
    var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      __;
      ___;
      ____;
      _pr;
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports.ProtocolRequestType = ProtocolRequestType;
    var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ___;
      ____;
      constructor(method) {
        super(method);
      }
    };
    exports.ProtocolNotificationType0 = ProtocolNotificationType0;
    var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ___;
      ____;
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports.ProtocolNotificationType = ProtocolNotificationType;
    var CM;
    (function(CM2) {
      function create(client, server) {
        return { client, server };
      }
      CM2.create = create;
    })(CM || (exports.CM = CM = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is2 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boolean = boolean;
    exports.string = string;
    exports.number = number;
    exports.error = error;
    exports.func = func;
    exports.array = array;
    exports.stringArray = stringArray;
    exports.typedArray = typedArray;
    exports.objectLiteral = objectLiteral;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImplementationRequest = void 0;
    var messages_1 = require_messages2();
    var ImplementationRequest2;
    (function(ImplementationRequest3) {
      ImplementationRequest3.method = "textDocument/implementation";
      ImplementationRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      ImplementationRequest3.type = new messages_1.ProtocolRequestType(ImplementationRequest3.method);
      ImplementationRequest3.capabilities = messages_1.CM.create("textDocument.implementation", "implementationProvider");
    })(ImplementationRequest2 || (exports.ImplementationRequest = ImplementationRequest2 = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeDefinitionRequest = void 0;
    var messages_1 = require_messages2();
    var TypeDefinitionRequest2;
    (function(TypeDefinitionRequest3) {
      TypeDefinitionRequest3.method = "textDocument/typeDefinition";
      TypeDefinitionRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeDefinitionRequest3.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest3.method);
      TypeDefinitionRequest3.capabilities = messages_1.CM.create("textDocument.typeDefinition", "typeDefinitionProvider");
    })(TypeDefinitionRequest2 || (exports.TypeDefinitionRequest = TypeDefinitionRequest2 = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = void 0;
    var messages_1 = require_messages2();
    var WorkspaceFoldersRequest2;
    (function(WorkspaceFoldersRequest3) {
      WorkspaceFoldersRequest3.method = "workspace/workspaceFolders";
      WorkspaceFoldersRequest3.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkspaceFoldersRequest3.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest3.method);
      WorkspaceFoldersRequest3.capabilities = messages_1.CM.create("workspace.workspaceFolders", "workspace.workspaceFolders");
    })(WorkspaceFoldersRequest2 || (exports.WorkspaceFoldersRequest = WorkspaceFoldersRequest2 = {}));
    var DidChangeWorkspaceFoldersNotification;
    (function(DidChangeWorkspaceFoldersNotification2) {
      DidChangeWorkspaceFoldersNotification2.method = "workspace/didChangeWorkspaceFolders";
      DidChangeWorkspaceFoldersNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification2.method);
      DidChangeWorkspaceFoldersNotification2.capabilities = messages_1.CM.create(void 0, "workspace.workspaceFolders.changeNotifications");
    })(DidChangeWorkspaceFoldersNotification || (exports.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigurationRequest = void 0;
    var messages_1 = require_messages2();
    var ConfigurationRequest2;
    (function(ConfigurationRequest3) {
      ConfigurationRequest3.method = "workspace/configuration";
      ConfigurationRequest3.messageDirection = messages_1.MessageDirection.serverToClient;
      ConfigurationRequest3.type = new messages_1.ProtocolRequestType(ConfigurationRequest3.method);
      ConfigurationRequest3.capabilities = messages_1.CM.create("workspace.configuration", void 0);
    })(ConfigurationRequest2 || (exports.ConfigurationRequest = ConfigurationRequest2 = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColorPresentationRequest = exports.DocumentColorRequest = void 0;
    var messages_1 = require_messages2();
    var DocumentColorRequest2;
    (function(DocumentColorRequest3) {
      DocumentColorRequest3.method = "textDocument/documentColor";
      DocumentColorRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentColorRequest3.type = new messages_1.ProtocolRequestType(DocumentColorRequest3.method);
      DocumentColorRequest3.capabilities = messages_1.CM.create("textDocument.colorProvider", "colorProvider");
    })(DocumentColorRequest2 || (exports.DocumentColorRequest = DocumentColorRequest2 = {}));
    var ColorPresentationRequest;
    (function(ColorPresentationRequest2) {
      ColorPresentationRequest2.method = "textDocument/colorPresentation";
      ColorPresentationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ColorPresentationRequest2.type = new messages_1.ProtocolRequestType(ColorPresentationRequest2.method);
      ColorPresentationRequest2.capabilities = messages_1.CM.create("textDocument.colorProvider", "colorProvider");
    })(ColorPresentationRequest || (exports.ColorPresentationRequest = ColorPresentationRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var FoldingRangeRequest2;
    (function(FoldingRangeRequest3) {
      FoldingRangeRequest3.method = "textDocument/foldingRange";
      FoldingRangeRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      FoldingRangeRequest3.type = new messages_1.ProtocolRequestType(FoldingRangeRequest3.method);
      FoldingRangeRequest3.capabilities = messages_1.CM.create("textDocument.foldingRange", "foldingRangeProvider");
    })(FoldingRangeRequest2 || (exports.FoldingRangeRequest = FoldingRangeRequest2 = {}));
    var FoldingRangeRefreshRequest;
    (function(FoldingRangeRefreshRequest2) {
      FoldingRangeRefreshRequest2.method = `workspace/foldingRange/refresh`;
      FoldingRangeRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      FoldingRangeRefreshRequest2.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest2.method);
      FoldingRangeRefreshRequest2.capabilities = messages_1.CM.create("workspace.foldingRange.refreshSupport", void 0);
    })(FoldingRangeRefreshRequest || (exports.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeclarationRequest = void 0;
    var messages_1 = require_messages2();
    var DeclarationRequest2;
    (function(DeclarationRequest3) {
      DeclarationRequest3.method = "textDocument/declaration";
      DeclarationRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      DeclarationRequest3.type = new messages_1.ProtocolRequestType(DeclarationRequest3.method);
      DeclarationRequest3.capabilities = messages_1.CM.create("textDocument.declaration", "declarationProvider");
    })(DeclarationRequest2 || (exports.DeclarationRequest = DeclarationRequest2 = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SelectionRangeRequest = void 0;
    var messages_1 = require_messages2();
    var SelectionRangeRequest2;
    (function(SelectionRangeRequest3) {
      SelectionRangeRequest3.method = "textDocument/selectionRange";
      SelectionRangeRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      SelectionRangeRequest3.type = new messages_1.ProtocolRequestType(SelectionRangeRequest3.method);
      SelectionRangeRequest3.capabilities = messages_1.CM.create("textDocument.selectionRange", "selectionRangeProvider");
    })(SelectionRangeRequest2 || (exports.SelectionRangeRequest = SelectionRangeRequest2 = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = void 0;
    var vscode_jsonrpc_1 = require_api();
    var messages_1 = require_messages2();
    var WorkDoneProgress;
    (function(WorkDoneProgress2) {
      WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
      function is(value) {
        return value === WorkDoneProgress2.type;
      }
      WorkDoneProgress2.is = is;
    })(WorkDoneProgress || (exports.WorkDoneProgress = WorkDoneProgress = {}));
    var WorkDoneProgressCreateRequest2;
    (function(WorkDoneProgressCreateRequest3) {
      WorkDoneProgressCreateRequest3.method = "window/workDoneProgress/create";
      WorkDoneProgressCreateRequest3.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkDoneProgressCreateRequest3.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest3.method);
      WorkDoneProgressCreateRequest3.capabilities = messages_1.CM.create("window.workDoneProgress", void 0);
    })(WorkDoneProgressCreateRequest2 || (exports.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest2 = {}));
    var WorkDoneProgressCancelNotification;
    (function(WorkDoneProgressCancelNotification2) {
      WorkDoneProgressCancelNotification2.method = "window/workDoneProgress/cancel";
      WorkDoneProgressCancelNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification2.method);
    })(WorkDoneProgressCancelNotification || (exports.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.CallHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var CallHierarchyPrepareRequest2;
    (function(CallHierarchyPrepareRequest3) {
      CallHierarchyPrepareRequest3.method = "textDocument/prepareCallHierarchy";
      CallHierarchyPrepareRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyPrepareRequest3.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest3.method);
      CallHierarchyPrepareRequest3.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyPrepareRequest2 || (exports.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest2 = {}));
    var CallHierarchyIncomingCallsRequest2;
    (function(CallHierarchyIncomingCallsRequest3) {
      CallHierarchyIncomingCallsRequest3.method = "callHierarchy/incomingCalls";
      CallHierarchyIncomingCallsRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyIncomingCallsRequest3.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest3.method);
      CallHierarchyIncomingCallsRequest3.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyIncomingCallsRequest2 || (exports.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest2 = {}));
    var CallHierarchyOutgoingCallsRequest2;
    (function(CallHierarchyOutgoingCallsRequest3) {
      CallHierarchyOutgoingCallsRequest3.method = "callHierarchy/outgoingCalls";
      CallHierarchyOutgoingCallsRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyOutgoingCallsRequest3.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest3.method);
      CallHierarchyOutgoingCallsRequest3.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyOutgoingCallsRequest2 || (exports.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest2 = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.SemanticTokensRegistrationType = exports.TokenFormat = void 0;
    var messages_1 = require_messages2();
    var TokenFormat;
    (function(TokenFormat2) {
      TokenFormat2.Relative = "relative";
    })(TokenFormat || (exports.TokenFormat = TokenFormat = {}));
    var SemanticTokensRegistrationType;
    (function(SemanticTokensRegistrationType2) {
      SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
      SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
    })(SemanticTokensRegistrationType || (exports.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
    var SemanticTokensRequest;
    (function(SemanticTokensRequest2) {
      SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
      SemanticTokensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      SemanticTokensRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens", "semanticTokensProvider");
    })(SemanticTokensRequest || (exports.SemanticTokensRequest = SemanticTokensRequest = {}));
    var SemanticTokensDeltaRequest;
    (function(SemanticTokensDeltaRequest2) {
      SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
      SemanticTokensDeltaRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      SemanticTokensDeltaRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensDeltaRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens.requests.full.delta", "semanticTokensProvider.full.delta");
    })(SemanticTokensDeltaRequest || (exports.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
    var SemanticTokensRangeRequest;
    (function(SemanticTokensRangeRequest2) {
      SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
      SemanticTokensRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      SemanticTokensRangeRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensRangeRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens.requests.range", "semanticTokensProvider.range");
    })(SemanticTokensRangeRequest || (exports.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
    var SemanticTokensRefreshRequest;
    (function(SemanticTokensRefreshRequest2) {
      SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
      SemanticTokensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
      SemanticTokensRefreshRequest2.capabilities = messages_1.CM.create("workspace.semanticTokens.refreshSupport", void 0);
    })(SemanticTokensRefreshRequest || (exports.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShowDocumentRequest = void 0;
    var messages_1 = require_messages2();
    var ShowDocumentRequest;
    (function(ShowDocumentRequest2) {
      ShowDocumentRequest2.method = "window/showDocument";
      ShowDocumentRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
      ShowDocumentRequest2.capabilities = messages_1.CM.create("window.showDocument.support", void 0);
    })(ShowDocumentRequest || (exports.ShowDocumentRequest = ShowDocumentRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkedEditingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var LinkedEditingRangeRequest;
    (function(LinkedEditingRangeRequest2) {
      LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
      LinkedEditingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
      LinkedEditingRangeRequest2.capabilities = messages_1.CM.create("textDocument.linkedEditingRange", "linkedEditingRangeProvider");
    })(LinkedEditingRangeRequest || (exports.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.DidRenameFilesNotification = exports.WillRenameFilesRequest = exports.DidCreateFilesNotification = exports.WillCreateFilesRequest = exports.FileOperationPatternKind = void 0;
    var messages_1 = require_messages2();
    var FileOperationPatternKind;
    (function(FileOperationPatternKind2) {
      FileOperationPatternKind2.file = "file";
      FileOperationPatternKind2.folder = "folder";
    })(FileOperationPatternKind || (exports.FileOperationPatternKind = FileOperationPatternKind = {}));
    var WillCreateFilesRequest;
    (function(WillCreateFilesRequest2) {
      WillCreateFilesRequest2.method = "workspace/willCreateFiles";
      WillCreateFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
      WillCreateFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willCreate", "workspace.fileOperations.willCreate");
    })(WillCreateFilesRequest || (exports.WillCreateFilesRequest = WillCreateFilesRequest = {}));
    var DidCreateFilesNotification;
    (function(DidCreateFilesNotification2) {
      DidCreateFilesNotification2.method = "workspace/didCreateFiles";
      DidCreateFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
      DidCreateFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didCreate", "workspace.fileOperations.didCreate");
    })(DidCreateFilesNotification || (exports.DidCreateFilesNotification = DidCreateFilesNotification = {}));
    var WillRenameFilesRequest;
    (function(WillRenameFilesRequest2) {
      WillRenameFilesRequest2.method = "workspace/willRenameFiles";
      WillRenameFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
      WillRenameFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willRename", "workspace.fileOperations.willRename");
    })(WillRenameFilesRequest || (exports.WillRenameFilesRequest = WillRenameFilesRequest = {}));
    var DidRenameFilesNotification;
    (function(DidRenameFilesNotification2) {
      DidRenameFilesNotification2.method = "workspace/didRenameFiles";
      DidRenameFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
      DidRenameFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didRename", "workspace.fileOperations.didRename");
    })(DidRenameFilesNotification || (exports.DidRenameFilesNotification = DidRenameFilesNotification = {}));
    var DidDeleteFilesNotification;
    (function(DidDeleteFilesNotification2) {
      DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
      DidDeleteFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
      DidDeleteFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didDelete", "workspace.fileOperations.didDelete");
    })(DidDeleteFilesNotification || (exports.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
    var WillDeleteFilesRequest;
    (function(WillDeleteFilesRequest2) {
      WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
      WillDeleteFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
      WillDeleteFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willDelete", "workspace.fileOperations.willDelete");
    })(WillDeleteFilesRequest || (exports.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = void 0;
    var messages_1 = require_messages2();
    var UniquenessLevel;
    (function(UniquenessLevel2) {
      UniquenessLevel2.document = "document";
      UniquenessLevel2.project = "project";
      UniquenessLevel2.group = "group";
      UniquenessLevel2.scheme = "scheme";
      UniquenessLevel2.global = "global";
    })(UniquenessLevel || (exports.UniquenessLevel = UniquenessLevel = {}));
    var MonikerKind;
    (function(MonikerKind2) {
      MonikerKind2.$import = "import";
      MonikerKind2.$export = "export";
      MonikerKind2.local = "local";
    })(MonikerKind || (exports.MonikerKind = MonikerKind = {}));
    var MonikerRequest;
    (function(MonikerRequest2) {
      MonikerRequest2.method = "textDocument/moniker";
      MonikerRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
      MonikerRequest2.capabilities = messages_1.CM.create("textDocument.moniker", "monikerProvider");
    })(MonikerRequest || (exports.MonikerRequest = MonikerRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHierarchySubtypesRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var TypeHierarchyPrepareRequest2;
    (function(TypeHierarchyPrepareRequest3) {
      TypeHierarchyPrepareRequest3.method = "textDocument/prepareTypeHierarchy";
      TypeHierarchyPrepareRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchyPrepareRequest3.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest3.method);
      TypeHierarchyPrepareRequest3.capabilities = messages_1.CM.create("textDocument.typeHierarchy", "typeHierarchyProvider");
    })(TypeHierarchyPrepareRequest2 || (exports.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest2 = {}));
    var TypeHierarchySupertypesRequest2;
    (function(TypeHierarchySupertypesRequest3) {
      TypeHierarchySupertypesRequest3.method = "typeHierarchy/supertypes";
      TypeHierarchySupertypesRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySupertypesRequest3.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest3.method);
    })(TypeHierarchySupertypesRequest2 || (exports.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest2 = {}));
    var TypeHierarchySubtypesRequest2;
    (function(TypeHierarchySubtypesRequest3) {
      TypeHierarchySubtypesRequest3.method = "typeHierarchy/subtypes";
      TypeHierarchySubtypesRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySubtypesRequest3.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest3.method);
    })(TypeHierarchySubtypesRequest2 || (exports.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest2 = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineValueRefreshRequest = exports.InlineValueRequest = void 0;
    var messages_1 = require_messages2();
    var InlineValueRequest;
    (function(InlineValueRequest2) {
      InlineValueRequest2.method = "textDocument/inlineValue";
      InlineValueRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRequest2.type = new messages_1.ProtocolRequestType(InlineValueRequest2.method);
      InlineValueRequest2.capabilities = messages_1.CM.create("textDocument.inlineValue", "inlineValueProvider");
    })(InlineValueRequest || (exports.InlineValueRequest = InlineValueRequest = {}));
    var InlineValueRefreshRequest;
    (function(InlineValueRefreshRequest2) {
      InlineValueRefreshRequest2.method = `workspace/inlineValue/refresh`;
      InlineValueRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlineValueRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest2.method);
      InlineValueRefreshRequest2.capabilities = messages_1.CM.create("workspace.inlineValue.refreshSupport", void 0);
    })(InlineValueRefreshRequest || (exports.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = void 0;
    var messages_1 = require_messages2();
    var InlayHintRequest2;
    (function(InlayHintRequest3) {
      InlayHintRequest3.method = "textDocument/inlayHint";
      InlayHintRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRequest3.type = new messages_1.ProtocolRequestType(InlayHintRequest3.method);
      InlayHintRequest3.capabilities = messages_1.CM.create("textDocument.inlayHint", "inlayHintProvider");
    })(InlayHintRequest2 || (exports.InlayHintRequest = InlayHintRequest2 = {}));
    var InlayHintResolveRequest2;
    (function(InlayHintResolveRequest3) {
      InlayHintResolveRequest3.method = "inlayHint/resolve";
      InlayHintResolveRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintResolveRequest3.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest3.method);
      InlayHintResolveRequest3.capabilities = messages_1.CM.create("textDocument.inlayHint.resolveSupport", "inlayHintProvider.resolveProvider");
    })(InlayHintResolveRequest2 || (exports.InlayHintResolveRequest = InlayHintResolveRequest2 = {}));
    var InlayHintRefreshRequest;
    (function(InlayHintRefreshRequest2) {
      InlayHintRefreshRequest2.method = `workspace/inlayHint/refresh`;
      InlayHintRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlayHintRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest2.method);
      InlayHintRefreshRequest2.capabilities = messages_1.CM.create("workspace.inlayHint.refreshSupport", void 0);
    })(InlayHintRefreshRequest || (exports.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = void 0;
    var vscode_jsonrpc_1 = require_api();
    var Is2 = __importStar(require_is2());
    var messages_1 = require_messages2();
    var DiagnosticServerCancellationData;
    (function(DiagnosticServerCancellationData2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.boolean(candidate.retriggerRequest);
      }
      DiagnosticServerCancellationData2.is = is;
    })(DiagnosticServerCancellationData || (exports.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
    var DocumentDiagnosticReportKind2;
    (function(DocumentDiagnosticReportKind3) {
      DocumentDiagnosticReportKind3.Full = "full";
      DocumentDiagnosticReportKind3.Unchanged = "unchanged";
    })(DocumentDiagnosticReportKind2 || (exports.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind2 = {}));
    var DocumentDiagnosticRequest4;
    (function(DocumentDiagnosticRequest5) {
      DocumentDiagnosticRequest5.method = "textDocument/diagnostic";
      DocumentDiagnosticRequest5.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentDiagnosticRequest5.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest5.method);
      DocumentDiagnosticRequest5.partialResult = new vscode_jsonrpc_1.ProgressType();
      DocumentDiagnosticRequest5.capabilities = messages_1.CM.create("textDocument.diagnostic", "diagnosticProvider");
    })(DocumentDiagnosticRequest4 || (exports.DocumentDiagnosticRequest = DocumentDiagnosticRequest4 = {}));
    var WorkspaceDiagnosticRequest3;
    (function(WorkspaceDiagnosticRequest4) {
      WorkspaceDiagnosticRequest4.method = "workspace/diagnostic";
      WorkspaceDiagnosticRequest4.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceDiagnosticRequest4.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest4.method);
      WorkspaceDiagnosticRequest4.partialResult = new vscode_jsonrpc_1.ProgressType();
      WorkspaceDiagnosticRequest4.capabilities = messages_1.CM.create("workspace.diagnostics", "diagnosticProvider.workspaceDiagnostics");
    })(WorkspaceDiagnosticRequest3 || (exports.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest3 = {}));
    var DiagnosticRefreshRequest2;
    (function(DiagnosticRefreshRequest3) {
      DiagnosticRefreshRequest3.method = `workspace/diagnostic/refresh`;
      DiagnosticRefreshRequest3.messageDirection = messages_1.MessageDirection.serverToClient;
      DiagnosticRefreshRequest3.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest3.method);
      DiagnosticRefreshRequest3.capabilities = messages_1.CM.create("workspace.diagnostics.refreshSupport", void 0);
    })(DiagnosticRefreshRequest2 || (exports.DiagnosticRefreshRequest = DiagnosticRefreshRequest2 = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = void 0;
    var vscode_languageserver_types_1 = (init_main(), __toCommonJS(main_exports));
    var Is2 = __importStar(require_is2());
    var messages_1 = require_messages2();
    var NotebookCellKind;
    (function(NotebookCellKind2) {
      NotebookCellKind2.Markup = 1;
      NotebookCellKind2.Code = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      NotebookCellKind2.is = is;
    })(NotebookCellKind || (exports.NotebookCellKind = NotebookCellKind = {}));
    var ExecutionSummary;
    (function(ExecutionSummary2) {
      function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
          result.success = success;
        }
        return result;
      }
      ExecutionSummary2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is2.boolean(candidate.success));
      }
      ExecutionSummary2.is = is;
      function equals(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
      }
      ExecutionSummary2.equals = equals;
    })(ExecutionSummary || (exports.ExecutionSummary = ExecutionSummary = {}));
    var NotebookCell;
    (function(NotebookCell2) {
      function create(kind, document) {
        return { kind, document };
      }
      NotebookCell2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is2.objectLiteral(candidate.metadata));
      }
      NotebookCell2.is = is;
      function diff(one, two) {
        const result = /* @__PURE__ */ new Set();
        if (one.document !== two.document) {
          result.add("document");
        }
        if (one.kind !== two.kind) {
          result.add("kind");
        }
        if (one.executionSummary !== two.executionSummary) {
          result.add("executionSummary");
        }
        if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
          result.add("metadata");
        }
        if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
          result.add("executionSummary");
        }
        return result;
      }
      NotebookCell2.diff = diff;
      function equalsMetadata(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        if (typeof one !== typeof other) {
          return false;
        }
        if (typeof one !== "object") {
          return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
          return false;
        }
        if (oneArray && otherArray) {
          if (one.length !== other.length) {
            return false;
          }
          for (let i = 0; i < one.length; i++) {
            if (!equalsMetadata(one[i], other[i])) {
              return false;
            }
          }
        }
        if (Is2.objectLiteral(one) && Is2.objectLiteral(other)) {
          const oneKeys = Object.keys(one);
          const otherKeys = Object.keys(other);
          if (oneKeys.length !== otherKeys.length) {
            return false;
          }
          oneKeys.sort();
          otherKeys.sort();
          if (!equalsMetadata(oneKeys, otherKeys)) {
            return false;
          }
          for (let i = 0; i < oneKeys.length; i++) {
            const prop = oneKeys[i];
            if (!equalsMetadata(one[prop], other[prop])) {
              return false;
            }
          }
        }
        return true;
      }
    })(NotebookCell || (exports.NotebookCell = NotebookCell = {}));
    var NotebookDocument;
    (function(NotebookDocument2) {
      function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
      }
      NotebookDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && Is2.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is2.typedArray(candidate.cells, NotebookCell.is);
      }
      NotebookDocument2.is = is;
    })(NotebookDocument || (exports.NotebookDocument = NotebookDocument = {}));
    var NotebookDocumentSyncRegistrationType;
    (function(NotebookDocumentSyncRegistrationType2) {
      NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
      NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
      NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
    })(NotebookDocumentSyncRegistrationType || (exports.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
    var DidOpenNotebookDocumentNotification;
    (function(DidOpenNotebookDocumentNotification2) {
      DidOpenNotebookDocumentNotification2.method = "notebookDocument/didOpen";
      DidOpenNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification2.method);
      DidOpenNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidOpenNotebookDocumentNotification || (exports.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
    var NotebookCellArrayChange;
    (function(NotebookCellArrayChange2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is2.typedArray(candidate.cells, NotebookCell.is));
      }
      NotebookCellArrayChange2.is = is;
      function create(start, deleteCount, cells) {
        const result = { start, deleteCount };
        if (cells !== void 0) {
          result.cells = cells;
        }
        return result;
      }
      NotebookCellArrayChange2.create = create;
    })(NotebookCellArrayChange || (exports.NotebookCellArrayChange = NotebookCellArrayChange = {}));
    var DidChangeNotebookDocumentNotification;
    (function(DidChangeNotebookDocumentNotification2) {
      DidChangeNotebookDocumentNotification2.method = "notebookDocument/didChange";
      DidChangeNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification2.method);
      DidChangeNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidChangeNotebookDocumentNotification || (exports.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
    var DidSaveNotebookDocumentNotification;
    (function(DidSaveNotebookDocumentNotification2) {
      DidSaveNotebookDocumentNotification2.method = "notebookDocument/didSave";
      DidSaveNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification2.method);
      DidSaveNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidSaveNotebookDocumentNotification || (exports.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
    var DidCloseNotebookDocumentNotification;
    (function(DidCloseNotebookDocumentNotification2) {
      DidCloseNotebookDocumentNotification2.method = "notebookDocument/didClose";
      DidCloseNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification2.method);
      DidCloseNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidCloseNotebookDocumentNotification || (exports.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineCompletionRequest = void 0;
    var messages_1 = require_messages2();
    var InlineCompletionRequest;
    (function(InlineCompletionRequest2) {
      InlineCompletionRequest2.method = "textDocument/inlineCompletion";
      InlineCompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineCompletionRequest2.type = new messages_1.ProtocolRequestType(InlineCompletionRequest2.method);
      InlineCompletionRequest2.capabilities = messages_1.CM.create("textDocument.inlineCompletion", "inlineCompletionProvider");
    })(InlineCompletionRequest || (exports.InlineCompletionRequest = InlineCompletionRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.textDocumentContent.js
var require_protocol_textDocumentContent = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.textDocumentContent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextDocumentContentRefreshRequest = exports.TextDocumentContentRequest = void 0;
    var messages_1 = require_messages2();
    var TextDocumentContentRequest;
    (function(TextDocumentContentRequest2) {
      TextDocumentContentRequest2.method = "workspace/textDocumentContent";
      TextDocumentContentRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TextDocumentContentRequest2.type = new messages_1.ProtocolRequestType(TextDocumentContentRequest2.method);
      TextDocumentContentRequest2.capabilities = messages_1.CM.create("workspace.textDocumentContent", "workspace.textDocumentContent");
    })(TextDocumentContentRequest || (exports.TextDocumentContentRequest = TextDocumentContentRequest = {}));
    var TextDocumentContentRefreshRequest;
    (function(TextDocumentContentRefreshRequest2) {
      TextDocumentContentRefreshRequest2.method = `workspace/textDocumentContent/refresh`;
      TextDocumentContentRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      TextDocumentContentRefreshRequest2.type = new messages_1.ProtocolRequestType(TextDocumentContentRefreshRequest2.method);
    })(TextDocumentContentRefreshRequest || (exports.TextDocumentContentRefreshRequest = TextDocumentContentRefreshRequest = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CodeActionRequest = exports.DocumentSymbolRequest = exports.DocumentHighlightRequest = exports.ReferencesRequest = exports.DefinitionRequest = exports.SignatureHelpRequest = exports.SignatureHelpTriggerKind = exports.HoverRequest = exports.CompletionResolveRequest = exports.CompletionRequest = exports.CompletionTriggerKind = exports.PublishDiagnosticsNotification = exports.WatchKind = exports.GlobPattern = exports.RelativePattern = exports.FileChangeType = exports.DidChangeWatchedFilesNotification = exports.WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentNotification = exports.TextDocumentSaveReason = exports.DidSaveTextDocumentNotification = exports.DidCloseTextDocumentNotification = exports.DidChangeTextDocumentNotification = exports.TextDocumentContentChangeEvent = exports.DidOpenTextDocumentNotification = exports.TextDocumentSyncKind = exports.TelemetryEventNotification = exports.LogMessageNotification = exports.ShowMessageRequest = exports.ShowMessageNotification = exports.MessageType = exports.DidChangeConfigurationNotification = exports.ExitNotification = exports.ShutdownRequest = exports.InitializedNotification = exports.InitializeErrorCodes = exports.InitializeRequest = exports.WorkDoneProgressOptions = exports.TextDocumentRegistrationOptions = exports.StaticRegistrationOptions = exports.PositionEncodingKind = exports.RegularExpressionEngineKind = exports.FailureHandlingKind = exports.ResourceOperationKind = exports.UnregistrationRequest = exports.RegistrationRequest = exports.DocumentSelector = exports.NotebookCellTextDocumentFilter = exports.NotebookDocumentFilter = exports.TextDocumentFilter = void 0;
    exports.UniquenessLevel = exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.WillRenameFilesRequest = exports.DidRenameFilesNotification = exports.WillCreateFilesRequest = exports.DidCreateFilesNotification = exports.FileOperationPatternKind = exports.LinkedEditingRangeRequest = exports.ShowDocumentRequest = exports.SemanticTokensRegistrationType = exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.TokenFormat = exports.CallHierarchyPrepareRequest = exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = exports.SelectionRangeRequest = exports.DeclarationRequest = exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = exports.ColorPresentationRequest = exports.DocumentColorRequest = exports.ConfigurationRequest = exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = exports.TypeDefinitionRequest = exports.ImplementationRequest = exports.ApplyWorkspaceEditRequest = exports.ExecuteCommandRequest = exports.PrepareRenameRequest = exports.RenameRequest = exports.PrepareSupportDefaultBehavior = exports.DocumentOnTypeFormattingRequest = exports.DocumentRangesFormattingRequest = exports.DocumentRangeFormattingRequest = exports.DocumentFormattingRequest = exports.DocumentLinkResolveRequest = exports.DocumentLinkRequest = exports.CodeLensRefreshRequest = exports.CodeLensResolveRequest = exports.CodeLensRequest = exports.WorkspaceSymbolResolveRequest = exports.WorkspaceSymbolRequest = exports.CodeActionResolveRequest = void 0;
    exports.TextDocumentContentRefreshRequest = exports.TextDocumentContentRequest = exports.InlineCompletionRequest = exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = exports.InlineValueRefreshRequest = exports.InlineValueRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchySubtypesRequest = exports.TypeHierarchyPrepareRequest = exports.MonikerRequest = exports.MonikerKind = void 0;
    var messages_1 = require_messages2();
    var vscode_languageserver_types_1 = (init_main(), __toCommonJS(main_exports));
    var Is2 = __importStar(require_is2());
    var protocol_implementation_1 = require_protocol_implementation();
    Object.defineProperty(exports, "ImplementationRequest", { enumerable: true, get: function() {
      return protocol_implementation_1.ImplementationRequest;
    } });
    var protocol_typeDefinition_1 = require_protocol_typeDefinition();
    Object.defineProperty(exports, "TypeDefinitionRequest", { enumerable: true, get: function() {
      return protocol_typeDefinition_1.TypeDefinitionRequest;
    } });
    var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
    Object.defineProperty(exports, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
    } });
    Object.defineProperty(exports, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
    } });
    var protocol_configuration_1 = require_protocol_configuration();
    Object.defineProperty(exports, "ConfigurationRequest", { enumerable: true, get: function() {
      return protocol_configuration_1.ConfigurationRequest;
    } });
    var protocol_colorProvider_1 = require_protocol_colorProvider();
    Object.defineProperty(exports, "DocumentColorRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.DocumentColorRequest;
    } });
    Object.defineProperty(exports, "ColorPresentationRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.ColorPresentationRequest;
    } });
    var protocol_foldingRange_1 = require_protocol_foldingRange();
    Object.defineProperty(exports, "FoldingRangeRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRequest;
    } });
    Object.defineProperty(exports, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRefreshRequest;
    } });
    var protocol_declaration_1 = require_protocol_declaration();
    Object.defineProperty(exports, "DeclarationRequest", { enumerable: true, get: function() {
      return protocol_declaration_1.DeclarationRequest;
    } });
    var protocol_selectionRange_1 = require_protocol_selectionRange();
    Object.defineProperty(exports, "SelectionRangeRequest", { enumerable: true, get: function() {
      return protocol_selectionRange_1.SelectionRangeRequest;
    } });
    var protocol_progress_1 = require_protocol_progress();
    Object.defineProperty(exports, "WorkDoneProgress", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgress;
    } });
    Object.defineProperty(exports, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCreateRequest;
    } });
    Object.defineProperty(exports, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCancelNotification;
    } });
    var protocol_callHierarchy_1 = require_protocol_callHierarchy();
    Object.defineProperty(exports, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
    } });
    Object.defineProperty(exports, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
    } });
    Object.defineProperty(exports, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
    } });
    var protocol_semanticTokens_1 = require_protocol_semanticTokens();
    Object.defineProperty(exports, "TokenFormat", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.TokenFormat;
    } });
    Object.defineProperty(exports, "SemanticTokensRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRangeRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRegistrationType;
    } });
    var protocol_showDocument_1 = require_protocol_showDocument();
    Object.defineProperty(exports, "ShowDocumentRequest", { enumerable: true, get: function() {
      return protocol_showDocument_1.ShowDocumentRequest;
    } });
    var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
    Object.defineProperty(exports, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
      return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
    } });
    var protocol_fileOperations_1 = require_protocol_fileOperations();
    Object.defineProperty(exports, "FileOperationPatternKind", { enumerable: true, get: function() {
      return protocol_fileOperations_1.FileOperationPatternKind;
    } });
    Object.defineProperty(exports, "DidCreateFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidCreateFilesNotification;
    } });
    Object.defineProperty(exports, "WillCreateFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillCreateFilesRequest;
    } });
    Object.defineProperty(exports, "DidRenameFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidRenameFilesNotification;
    } });
    Object.defineProperty(exports, "WillRenameFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillRenameFilesRequest;
    } });
    Object.defineProperty(exports, "DidDeleteFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidDeleteFilesNotification;
    } });
    Object.defineProperty(exports, "WillDeleteFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillDeleteFilesRequest;
    } });
    var protocol_moniker_1 = require_protocol_moniker();
    Object.defineProperty(exports, "UniquenessLevel", { enumerable: true, get: function() {
      return protocol_moniker_1.UniquenessLevel;
    } });
    Object.defineProperty(exports, "MonikerKind", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerKind;
    } });
    Object.defineProperty(exports, "MonikerRequest", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerRequest;
    } });
    var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
    Object.defineProperty(exports, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
    } });
    Object.defineProperty(exports, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
    } });
    Object.defineProperty(exports, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
    } });
    var protocol_inlineValue_1 = require_protocol_inlineValue();
    Object.defineProperty(exports, "InlineValueRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRequest;
    } });
    Object.defineProperty(exports, "InlineValueRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRefreshRequest;
    } });
    var protocol_inlayHint_1 = require_protocol_inlayHint();
    Object.defineProperty(exports, "InlayHintRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRequest;
    } });
    Object.defineProperty(exports, "InlayHintResolveRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintResolveRequest;
    } });
    Object.defineProperty(exports, "InlayHintRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRefreshRequest;
    } });
    var protocol_diagnostic_1 = require_protocol_diagnostic();
    Object.defineProperty(exports, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticServerCancellationData;
    } });
    Object.defineProperty(exports, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticReportKind;
    } });
    Object.defineProperty(exports, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticRequest;
    } });
    Object.defineProperty(exports, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
    } });
    Object.defineProperty(exports, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticRefreshRequest;
    } });
    var protocol_notebook_1 = require_protocol_notebook();
    Object.defineProperty(exports, "NotebookCellKind", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellKind;
    } });
    Object.defineProperty(exports, "ExecutionSummary", { enumerable: true, get: function() {
      return protocol_notebook_1.ExecutionSummary;
    } });
    Object.defineProperty(exports, "NotebookCell", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCell;
    } });
    Object.defineProperty(exports, "NotebookDocument", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocument;
    } });
    Object.defineProperty(exports, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
    } });
    Object.defineProperty(exports, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidOpenNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "NotebookCellArrayChange", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellArrayChange;
    } });
    Object.defineProperty(exports, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidChangeNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidSaveNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidCloseNotebookDocumentNotification;
    } });
    var protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
    Object.defineProperty(exports, "InlineCompletionRequest", { enumerable: true, get: function() {
      return protocol_inlineCompletion_1.InlineCompletionRequest;
    } });
    var protocol_textDocumentContent_1 = require_protocol_textDocumentContent();
    Object.defineProperty(exports, "TextDocumentContentRequest", { enumerable: true, get: function() {
      return protocol_textDocumentContent_1.TextDocumentContentRequest;
    } });
    Object.defineProperty(exports, "TextDocumentContentRefreshRequest", { enumerable: true, get: function() {
      return protocol_textDocumentContent_1.TextDocumentContentRefreshRequest;
    } });
    var TextDocumentFilter;
    (function(TextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.string(candidate) || (Is2.string(candidate.language) || Is2.string(candidate.scheme) || GlobPattern.is(candidate.pattern));
      }
      TextDocumentFilter2.is = is;
    })(TextDocumentFilter || (exports.TextDocumentFilter = TextDocumentFilter = {}));
    var NotebookDocumentFilter;
    (function(NotebookDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebookType) || Is2.string(candidate.scheme) || Is2.string(candidate.pattern));
      }
      NotebookDocumentFilter2.is = is;
    })(NotebookDocumentFilter || (exports.NotebookDocumentFilter = NotebookDocumentFilter = {}));
    var NotebookCellTextDocumentFilter;
    (function(NotebookCellTextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is2.string(candidate.language));
      }
      NotebookCellTextDocumentFilter2.is = is;
    })(NotebookCellTextDocumentFilter || (exports.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
    var DocumentSelector;
    (function(DocumentSelector2) {
      function is(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        for (const elem of value) {
          if (!Is2.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
            return false;
          }
        }
        return true;
      }
      DocumentSelector2.is = is;
    })(DocumentSelector || (exports.DocumentSelector = DocumentSelector = {}));
    var RegistrationRequest2;
    (function(RegistrationRequest3) {
      RegistrationRequest3.method = "client/registerCapability";
      RegistrationRequest3.messageDirection = messages_1.MessageDirection.serverToClient;
      RegistrationRequest3.type = new messages_1.ProtocolRequestType(RegistrationRequest3.method);
    })(RegistrationRequest2 || (exports.RegistrationRequest = RegistrationRequest2 = {}));
    var UnregistrationRequest2;
    (function(UnregistrationRequest3) {
      UnregistrationRequest3.method = "client/unregisterCapability";
      UnregistrationRequest3.messageDirection = messages_1.MessageDirection.serverToClient;
      UnregistrationRequest3.type = new messages_1.ProtocolRequestType(UnregistrationRequest3.method);
    })(UnregistrationRequest2 || (exports.UnregistrationRequest = UnregistrationRequest2 = {}));
    var ResourceOperationKind;
    (function(ResourceOperationKind2) {
      ResourceOperationKind2.Create = "create";
      ResourceOperationKind2.Rename = "rename";
      ResourceOperationKind2.Delete = "delete";
    })(ResourceOperationKind || (exports.ResourceOperationKind = ResourceOperationKind = {}));
    var FailureHandlingKind;
    (function(FailureHandlingKind2) {
      FailureHandlingKind2.Abort = "abort";
      FailureHandlingKind2.Transactional = "transactional";
      FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
      FailureHandlingKind2.Undo = "undo";
    })(FailureHandlingKind || (exports.FailureHandlingKind = FailureHandlingKind = {}));
    var RegularExpressionEngineKind;
    (function(RegularExpressionEngineKind2) {
      RegularExpressionEngineKind2.ES2020 = "ES2020";
    })(RegularExpressionEngineKind || (exports.RegularExpressionEngineKind = RegularExpressionEngineKind = {}));
    var PositionEncodingKind3;
    (function(PositionEncodingKind4) {
      PositionEncodingKind4.UTF8 = "utf-8";
      PositionEncodingKind4.UTF16 = "utf-16";
      PositionEncodingKind4.UTF32 = "utf-32";
    })(PositionEncodingKind3 || (exports.PositionEncodingKind = PositionEncodingKind3 = {}));
    var StaticRegistrationOptions;
    (function(StaticRegistrationOptions2) {
      function hasId(value) {
        const candidate = value;
        return candidate && Is2.string(candidate.id) && candidate.id.length > 0;
      }
      StaticRegistrationOptions2.hasId = hasId;
    })(StaticRegistrationOptions || (exports.StaticRegistrationOptions = StaticRegistrationOptions = {}));
    var TextDocumentRegistrationOptions;
    (function(TextDocumentRegistrationOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
      }
      TextDocumentRegistrationOptions2.is = is;
    })(TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
    var WorkDoneProgressOptions;
    (function(WorkDoneProgressOptions2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is2.boolean(candidate.workDoneProgress));
      }
      WorkDoneProgressOptions2.is = is;
      function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is2.boolean(candidate.workDoneProgress);
      }
      WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
    })(WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
    var InitializeRequest2;
    (function(InitializeRequest3) {
      InitializeRequest3.method = "initialize";
      InitializeRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializeRequest3.type = new messages_1.ProtocolRequestType(InitializeRequest3.method);
    })(InitializeRequest2 || (exports.InitializeRequest = InitializeRequest2 = {}));
    var InitializeErrorCodes;
    (function(InitializeErrorCodes2) {
      InitializeErrorCodes2.unknownProtocolVersion = 1;
    })(InitializeErrorCodes || (exports.InitializeErrorCodes = InitializeErrorCodes = {}));
    var InitializedNotification2;
    (function(InitializedNotification3) {
      InitializedNotification3.method = "initialized";
      InitializedNotification3.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializedNotification3.type = new messages_1.ProtocolNotificationType(InitializedNotification3.method);
    })(InitializedNotification2 || (exports.InitializedNotification = InitializedNotification2 = {}));
    var ShutdownRequest2;
    (function(ShutdownRequest3) {
      ShutdownRequest3.method = "shutdown";
      ShutdownRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      ShutdownRequest3.type = new messages_1.ProtocolRequestType0(ShutdownRequest3.method);
    })(ShutdownRequest2 || (exports.ShutdownRequest = ShutdownRequest2 = {}));
    var ExitNotification2;
    (function(ExitNotification3) {
      ExitNotification3.method = "exit";
      ExitNotification3.messageDirection = messages_1.MessageDirection.clientToServer;
      ExitNotification3.type = new messages_1.ProtocolNotificationType0(ExitNotification3.method);
    })(ExitNotification2 || (exports.ExitNotification = ExitNotification2 = {}));
    var DidChangeConfigurationNotification2;
    (function(DidChangeConfigurationNotification3) {
      DidChangeConfigurationNotification3.method = "workspace/didChangeConfiguration";
      DidChangeConfigurationNotification3.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeConfigurationNotification3.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification3.method);
      DidChangeConfigurationNotification3.capabilities = messages_1.CM.create("workspace.didChangeConfiguration", void 0);
    })(DidChangeConfigurationNotification2 || (exports.DidChangeConfigurationNotification = DidChangeConfigurationNotification2 = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2.Error = 1;
      MessageType2.Warning = 2;
      MessageType2.Info = 3;
      MessageType2.Log = 4;
      MessageType2.Debug = 5;
    })(MessageType || (exports.MessageType = MessageType = {}));
    var ShowMessageNotification2;
    (function(ShowMessageNotification3) {
      ShowMessageNotification3.method = "window/showMessage";
      ShowMessageNotification3.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageNotification3.type = new messages_1.ProtocolNotificationType(ShowMessageNotification3.method);
      ShowMessageNotification3.capabilities = messages_1.CM.create("window.showMessage", void 0);
    })(ShowMessageNotification2 || (exports.ShowMessageNotification = ShowMessageNotification2 = {}));
    var ShowMessageRequest2;
    (function(ShowMessageRequest3) {
      ShowMessageRequest3.method = "window/showMessageRequest";
      ShowMessageRequest3.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageRequest3.type = new messages_1.ProtocolRequestType(ShowMessageRequest3.method);
      ShowMessageRequest3.capabilities = messages_1.CM.create("window.showMessage", void 0);
    })(ShowMessageRequest2 || (exports.ShowMessageRequest = ShowMessageRequest2 = {}));
    var LogMessageNotification2;
    (function(LogMessageNotification3) {
      LogMessageNotification3.method = "window/logMessage";
      LogMessageNotification3.messageDirection = messages_1.MessageDirection.serverToClient;
      LogMessageNotification3.type = new messages_1.ProtocolNotificationType(LogMessageNotification3.method);
    })(LogMessageNotification2 || (exports.LogMessageNotification = LogMessageNotification2 = {}));
    var TelemetryEventNotification;
    (function(TelemetryEventNotification2) {
      TelemetryEventNotification2.method = "telemetry/event";
      TelemetryEventNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification2.method);
    })(TelemetryEventNotification || (exports.TelemetryEventNotification = TelemetryEventNotification = {}));
    var TextDocumentSyncKind2;
    (function(TextDocumentSyncKind3) {
      TextDocumentSyncKind3.None = 0;
      TextDocumentSyncKind3.Full = 1;
      TextDocumentSyncKind3.Incremental = 2;
    })(TextDocumentSyncKind2 || (exports.TextDocumentSyncKind = TextDocumentSyncKind2 = {}));
    var DidOpenTextDocumentNotification2;
    (function(DidOpenTextDocumentNotification3) {
      DidOpenTextDocumentNotification3.method = "textDocument/didOpen";
      DidOpenTextDocumentNotification3.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenTextDocumentNotification3.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification3.method);
      DidOpenTextDocumentNotification3.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
    })(DidOpenTextDocumentNotification2 || (exports.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification2 = {}));
    var TextDocumentContentChangeEvent;
    (function(TextDocumentContentChangeEvent2) {
      function isIncremental(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      TextDocumentContentChangeEvent2.isIncremental = isIncremental;
      function isFull(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
      TextDocumentContentChangeEvent2.isFull = isFull;
    })(TextDocumentContentChangeEvent || (exports.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
    var DidChangeTextDocumentNotification2;
    (function(DidChangeTextDocumentNotification3) {
      DidChangeTextDocumentNotification3.method = "textDocument/didChange";
      DidChangeTextDocumentNotification3.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeTextDocumentNotification3.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification3.method);
      DidChangeTextDocumentNotification3.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync");
    })(DidChangeTextDocumentNotification2 || (exports.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification2 = {}));
    var DidCloseTextDocumentNotification2;
    (function(DidCloseTextDocumentNotification3) {
      DidCloseTextDocumentNotification3.method = "textDocument/didClose";
      DidCloseTextDocumentNotification3.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseTextDocumentNotification3.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification3.method);
      DidCloseTextDocumentNotification3.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
    })(DidCloseTextDocumentNotification2 || (exports.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification2 = {}));
    var DidSaveTextDocumentNotification2;
    (function(DidSaveTextDocumentNotification3) {
      DidSaveTextDocumentNotification3.method = "textDocument/didSave";
      DidSaveTextDocumentNotification3.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveTextDocumentNotification3.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification3.method);
      DidSaveTextDocumentNotification3.capabilities = messages_1.CM.create("textDocument.synchronization.didSave", "textDocumentSync.save");
    })(DidSaveTextDocumentNotification2 || (exports.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification2 = {}));
    var TextDocumentSaveReason;
    (function(TextDocumentSaveReason2) {
      TextDocumentSaveReason2.Manual = 1;
      TextDocumentSaveReason2.AfterDelay = 2;
      TextDocumentSaveReason2.FocusOut = 3;
    })(TextDocumentSaveReason || (exports.TextDocumentSaveReason = TextDocumentSaveReason = {}));
    var WillSaveTextDocumentNotification;
    (function(WillSaveTextDocumentNotification2) {
      WillSaveTextDocumentNotification2.method = "textDocument/willSave";
      WillSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
      WillSaveTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization.willSave", "textDocumentSync.willSave");
    })(WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
    var WillSaveTextDocumentWaitUntilRequest;
    (function(WillSaveTextDocumentWaitUntilRequest2) {
      WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
      WillSaveTextDocumentWaitUntilRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
      WillSaveTextDocumentWaitUntilRequest2.capabilities = messages_1.CM.create("textDocument.synchronization.willSaveWaitUntil", "textDocumentSync.willSaveWaitUntil");
    })(WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
    var DidChangeWatchedFilesNotification;
    (function(DidChangeWatchedFilesNotification2) {
      DidChangeWatchedFilesNotification2.method = "workspace/didChangeWatchedFiles";
      DidChangeWatchedFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWatchedFilesNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification2.method);
      DidChangeWatchedFilesNotification2.capabilities = messages_1.CM.create("workspace.didChangeWatchedFiles", void 0);
    })(DidChangeWatchedFilesNotification || (exports.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
    var FileChangeType;
    (function(FileChangeType2) {
      FileChangeType2.Created = 1;
      FileChangeType2.Changed = 2;
      FileChangeType2.Deleted = 3;
    })(FileChangeType || (exports.FileChangeType = FileChangeType = {}));
    var RelativePattern;
    (function(RelativePattern2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is2.string(candidate.pattern);
      }
      RelativePattern2.is = is;
    })(RelativePattern || (exports.RelativePattern = RelativePattern = {}));
    var GlobPattern;
    (function(GlobPattern2) {
      function is(value) {
        const candidate = value;
        return Is2.string(candidate) || RelativePattern.is(candidate);
      }
      GlobPattern2.is = is;
    })(GlobPattern || (exports.GlobPattern = GlobPattern = {}));
    var WatchKind;
    (function(WatchKind2) {
      WatchKind2.Create = 1;
      WatchKind2.Change = 2;
      WatchKind2.Delete = 4;
    })(WatchKind || (exports.WatchKind = WatchKind = {}));
    var PublishDiagnosticsNotification2;
    (function(PublishDiagnosticsNotification3) {
      PublishDiagnosticsNotification3.method = "textDocument/publishDiagnostics";
      PublishDiagnosticsNotification3.messageDirection = messages_1.MessageDirection.serverToClient;
      PublishDiagnosticsNotification3.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification3.method);
      PublishDiagnosticsNotification3.capabilities = messages_1.CM.create("textDocument.publishDiagnostics", void 0);
    })(PublishDiagnosticsNotification2 || (exports.PublishDiagnosticsNotification = PublishDiagnosticsNotification2 = {}));
    var CompletionTriggerKind;
    (function(CompletionTriggerKind2) {
      CompletionTriggerKind2.Invoked = 1;
      CompletionTriggerKind2.TriggerCharacter = 2;
      CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
    })(CompletionTriggerKind || (exports.CompletionTriggerKind = CompletionTriggerKind = {}));
    var CompletionRequest2;
    (function(CompletionRequest3) {
      CompletionRequest3.method = "textDocument/completion";
      CompletionRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionRequest3.type = new messages_1.ProtocolRequestType(CompletionRequest3.method);
      CompletionRequest3.capabilities = messages_1.CM.create("textDocument.completion", "completionProvider");
    })(CompletionRequest2 || (exports.CompletionRequest = CompletionRequest2 = {}));
    var CompletionResolveRequest2;
    (function(CompletionResolveRequest3) {
      CompletionResolveRequest3.method = "completionItem/resolve";
      CompletionResolveRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionResolveRequest3.type = new messages_1.ProtocolRequestType(CompletionResolveRequest3.method);
      CompletionResolveRequest3.capabilities = messages_1.CM.create("textDocument.completion.completionItem.resolveSupport", "completionProvider.resolveProvider");
    })(CompletionResolveRequest2 || (exports.CompletionResolveRequest = CompletionResolveRequest2 = {}));
    var HoverRequest2;
    (function(HoverRequest3) {
      HoverRequest3.method = "textDocument/hover";
      HoverRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      HoverRequest3.type = new messages_1.ProtocolRequestType(HoverRequest3.method);
      HoverRequest3.capabilities = messages_1.CM.create("textDocument.hover", "hoverProvider");
    })(HoverRequest2 || (exports.HoverRequest = HoverRequest2 = {}));
    var SignatureHelpTriggerKind;
    (function(SignatureHelpTriggerKind2) {
      SignatureHelpTriggerKind2.Invoked = 1;
      SignatureHelpTriggerKind2.TriggerCharacter = 2;
      SignatureHelpTriggerKind2.ContentChange = 3;
    })(SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
    var SignatureHelpRequest2;
    (function(SignatureHelpRequest3) {
      SignatureHelpRequest3.method = "textDocument/signatureHelp";
      SignatureHelpRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      SignatureHelpRequest3.type = new messages_1.ProtocolRequestType(SignatureHelpRequest3.method);
      SignatureHelpRequest3.capabilities = messages_1.CM.create("textDocument.signatureHelp", "signatureHelpProvider");
    })(SignatureHelpRequest2 || (exports.SignatureHelpRequest = SignatureHelpRequest2 = {}));
    var DefinitionRequest2;
    (function(DefinitionRequest3) {
      DefinitionRequest3.method = "textDocument/definition";
      DefinitionRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      DefinitionRequest3.type = new messages_1.ProtocolRequestType(DefinitionRequest3.method);
      DefinitionRequest3.capabilities = messages_1.CM.create("textDocument.definition", "definitionProvider");
    })(DefinitionRequest2 || (exports.DefinitionRequest = DefinitionRequest2 = {}));
    var ReferencesRequest3;
    (function(ReferencesRequest4) {
      ReferencesRequest4.method = "textDocument/references";
      ReferencesRequest4.messageDirection = messages_1.MessageDirection.clientToServer;
      ReferencesRequest4.type = new messages_1.ProtocolRequestType(ReferencesRequest4.method);
      ReferencesRequest4.capabilities = messages_1.CM.create("textDocument.references", "referencesProvider");
    })(ReferencesRequest3 || (exports.ReferencesRequest = ReferencesRequest3 = {}));
    var DocumentHighlightRequest2;
    (function(DocumentHighlightRequest3) {
      DocumentHighlightRequest3.method = "textDocument/documentHighlight";
      DocumentHighlightRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentHighlightRequest3.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest3.method);
      DocumentHighlightRequest3.capabilities = messages_1.CM.create("textDocument.documentHighlight", "documentHighlightProvider");
    })(DocumentHighlightRequest2 || (exports.DocumentHighlightRequest = DocumentHighlightRequest2 = {}));
    var DocumentSymbolRequest3;
    (function(DocumentSymbolRequest4) {
      DocumentSymbolRequest4.method = "textDocument/documentSymbol";
      DocumentSymbolRequest4.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentSymbolRequest4.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest4.method);
      DocumentSymbolRequest4.capabilities = messages_1.CM.create("textDocument.documentSymbol", "documentSymbolProvider");
    })(DocumentSymbolRequest3 || (exports.DocumentSymbolRequest = DocumentSymbolRequest3 = {}));
    var CodeActionRequest2;
    (function(CodeActionRequest3) {
      CodeActionRequest3.method = "textDocument/codeAction";
      CodeActionRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionRequest3.type = new messages_1.ProtocolRequestType(CodeActionRequest3.method);
      CodeActionRequest3.capabilities = messages_1.CM.create("textDocument.codeAction", "codeActionProvider");
    })(CodeActionRequest2 || (exports.CodeActionRequest = CodeActionRequest2 = {}));
    var CodeActionResolveRequest2;
    (function(CodeActionResolveRequest3) {
      CodeActionResolveRequest3.method = "codeAction/resolve";
      CodeActionResolveRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionResolveRequest3.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest3.method);
      CodeActionResolveRequest3.capabilities = messages_1.CM.create("textDocument.codeAction.resolveSupport", "codeActionProvider.resolveProvider");
    })(CodeActionResolveRequest2 || (exports.CodeActionResolveRequest = CodeActionResolveRequest2 = {}));
    var WorkspaceSymbolRequest2;
    (function(WorkspaceSymbolRequest3) {
      WorkspaceSymbolRequest3.method = "workspace/symbol";
      WorkspaceSymbolRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolRequest3.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest3.method);
      WorkspaceSymbolRequest3.capabilities = messages_1.CM.create("workspace.symbol", "workspaceSymbolProvider");
    })(WorkspaceSymbolRequest2 || (exports.WorkspaceSymbolRequest = WorkspaceSymbolRequest2 = {}));
    var WorkspaceSymbolResolveRequest2;
    (function(WorkspaceSymbolResolveRequest3) {
      WorkspaceSymbolResolveRequest3.method = "workspaceSymbol/resolve";
      WorkspaceSymbolResolveRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolResolveRequest3.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest3.method);
      WorkspaceSymbolResolveRequest3.capabilities = messages_1.CM.create("workspace.symbol.resolveSupport", "workspaceSymbolProvider.resolveProvider");
    })(WorkspaceSymbolResolveRequest2 || (exports.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest2 = {}));
    var CodeLensRequest2;
    (function(CodeLensRequest3) {
      CodeLensRequest3.method = "textDocument/codeLens";
      CodeLensRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensRequest3.type = new messages_1.ProtocolRequestType(CodeLensRequest3.method);
      CodeLensRequest3.capabilities = messages_1.CM.create("textDocument.codeLens", "codeLensProvider");
    })(CodeLensRequest2 || (exports.CodeLensRequest = CodeLensRequest2 = {}));
    var CodeLensResolveRequest2;
    (function(CodeLensResolveRequest3) {
      CodeLensResolveRequest3.method = "codeLens/resolve";
      CodeLensResolveRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensResolveRequest3.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest3.method);
      CodeLensResolveRequest3.capabilities = messages_1.CM.create("textDocument.codeLens.resolveSupport", "codeLensProvider.resolveProvider");
    })(CodeLensResolveRequest2 || (exports.CodeLensResolveRequest = CodeLensResolveRequest2 = {}));
    var CodeLensRefreshRequest;
    (function(CodeLensRefreshRequest2) {
      CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
      CodeLensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
      CodeLensRefreshRequest2.capabilities = messages_1.CM.create("workspace.codeLens", void 0);
    })(CodeLensRefreshRequest || (exports.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
    var DocumentLinkRequest2;
    (function(DocumentLinkRequest3) {
      DocumentLinkRequest3.method = "textDocument/documentLink";
      DocumentLinkRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkRequest3.type = new messages_1.ProtocolRequestType(DocumentLinkRequest3.method);
      DocumentLinkRequest3.capabilities = messages_1.CM.create("textDocument.documentLink", "documentLinkProvider");
    })(DocumentLinkRequest2 || (exports.DocumentLinkRequest = DocumentLinkRequest2 = {}));
    var DocumentLinkResolveRequest2;
    (function(DocumentLinkResolveRequest3) {
      DocumentLinkResolveRequest3.method = "documentLink/resolve";
      DocumentLinkResolveRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkResolveRequest3.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest3.method);
      DocumentLinkResolveRequest3.capabilities = messages_1.CM.create("textDocument.documentLink", "documentLinkProvider.resolveProvider");
    })(DocumentLinkResolveRequest2 || (exports.DocumentLinkResolveRequest = DocumentLinkResolveRequest2 = {}));
    var DocumentFormattingRequest2;
    (function(DocumentFormattingRequest3) {
      DocumentFormattingRequest3.method = "textDocument/formatting";
      DocumentFormattingRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentFormattingRequest3.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest3.method);
      DocumentFormattingRequest3.capabilities = messages_1.CM.create("textDocument.formatting", "documentFormattingProvider");
    })(DocumentFormattingRequest2 || (exports.DocumentFormattingRequest = DocumentFormattingRequest2 = {}));
    var DocumentRangeFormattingRequest2;
    (function(DocumentRangeFormattingRequest3) {
      DocumentRangeFormattingRequest3.method = "textDocument/rangeFormatting";
      DocumentRangeFormattingRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangeFormattingRequest3.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest3.method);
      DocumentRangeFormattingRequest3.capabilities = messages_1.CM.create("textDocument.rangeFormatting", "documentRangeFormattingProvider");
    })(DocumentRangeFormattingRequest2 || (exports.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest2 = {}));
    var DocumentRangesFormattingRequest;
    (function(DocumentRangesFormattingRequest2) {
      DocumentRangesFormattingRequest2.method = "textDocument/rangesFormatting";
      DocumentRangesFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangesFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest2.method);
      DocumentRangesFormattingRequest2.capabilities = messages_1.CM.create("textDocument.rangeFormatting.rangesSupport", "documentRangeFormattingProvider.rangesSupport");
    })(DocumentRangesFormattingRequest || (exports.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
    var DocumentOnTypeFormattingRequest2;
    (function(DocumentOnTypeFormattingRequest3) {
      DocumentOnTypeFormattingRequest3.method = "textDocument/onTypeFormatting";
      DocumentOnTypeFormattingRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentOnTypeFormattingRequest3.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest3.method);
      DocumentOnTypeFormattingRequest3.capabilities = messages_1.CM.create("textDocument.onTypeFormatting", "documentOnTypeFormattingProvider");
    })(DocumentOnTypeFormattingRequest2 || (exports.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest2 = {}));
    var PrepareSupportDefaultBehavior;
    (function(PrepareSupportDefaultBehavior2) {
      PrepareSupportDefaultBehavior2.Identifier = 1;
    })(PrepareSupportDefaultBehavior || (exports.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
    var RenameRequest2;
    (function(RenameRequest3) {
      RenameRequest3.method = "textDocument/rename";
      RenameRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      RenameRequest3.type = new messages_1.ProtocolRequestType(RenameRequest3.method);
      RenameRequest3.capabilities = messages_1.CM.create("textDocument.rename", "renameProvider");
    })(RenameRequest2 || (exports.RenameRequest = RenameRequest2 = {}));
    var PrepareRenameRequest2;
    (function(PrepareRenameRequest3) {
      PrepareRenameRequest3.method = "textDocument/prepareRename";
      PrepareRenameRequest3.messageDirection = messages_1.MessageDirection.clientToServer;
      PrepareRenameRequest3.type = new messages_1.ProtocolRequestType(PrepareRenameRequest3.method);
      PrepareRenameRequest3.capabilities = messages_1.CM.create("textDocument.rename.prepareSupport", "renameProvider.prepareProvider");
    })(PrepareRenameRequest2 || (exports.PrepareRenameRequest = PrepareRenameRequest2 = {}));
    var ExecuteCommandRequest;
    (function(ExecuteCommandRequest2) {
      ExecuteCommandRequest2.method = "workspace/executeCommand";
      ExecuteCommandRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest2.method);
      ExecuteCommandRequest2.capabilities = messages_1.CM.create("workspace.executeCommand", "executeCommandProvider");
    })(ExecuteCommandRequest || (exports.ExecuteCommandRequest = ExecuteCommandRequest = {}));
    var ApplyWorkspaceEditRequest2;
    (function(ApplyWorkspaceEditRequest3) {
      ApplyWorkspaceEditRequest3.method = "workspace/applyEdit";
      ApplyWorkspaceEditRequest3.messageDirection = messages_1.MessageDirection.serverToClient;
      ApplyWorkspaceEditRequest3.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
      ApplyWorkspaceEditRequest3.capabilities = messages_1.CM.create("workspace.applyEdit", void 0);
    })(ApplyWorkspaceEditRequest2 || (exports.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest2 = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createProtocolConnection = createProtocolConnection2;
    var vscode_jsonrpc_1 = require_api();
    function createProtocolConnection2(input, output, logger, options) {
      if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
    }
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LSPErrorCodes = exports.createProtocolConnection = void 0;
    __exportStar(require_api(), exports);
    __exportStar((init_main(), __toCommonJS(main_exports)), exports);
    __exportStar(require_messages2(), exports);
    __exportStar(require_protocol(), exports);
    var connection_1 = require_connection2();
    Object.defineProperty(exports, "createProtocolConnection", { enumerable: true, get: function() {
      return connection_1.createProtocolConnection;
    } });
    var LSPErrorCodes;
    (function(LSPErrorCodes2) {
      LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
      LSPErrorCodes2.RequestFailed = -32803;
      LSPErrorCodes2.ServerCancelled = -32802;
      LSPErrorCodes2.ContentModified = -32801;
      LSPErrorCodes2.RequestCancelled = -32800;
      LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
    })(LSPErrorCodes || (exports.LSPErrorCodes = LSPErrorCodes = {}));
  }
});

// ../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main2 = __commonJS({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.18.4/node_modules/vscode-languageserver-protocol/lib/node/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createProtocolConnection = createProtocolConnection2;
    var node_1 = require_main();
    __exportStar(require_main(), exports);
    __exportStar(require_api2(), exports);
    function createProtocolConnection2(input, output, logger, options) {
      return (0, node_1.createMessageConnection)(input, output, logger, options);
    }
  }
});

// ../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js
var require_windows = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js"(exports, module) {
    module.exports = isexe;
    isexe.sync = sync;
    var fs = __require("fs");
    function checkPathExt(path, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat3, path, options) {
      if (!stat3.isSymbolicLink() && !stat3.isFile()) {
        return false;
      }
      return checkPathExt(path, options);
    }
    function isexe(path, options, cb) {
      fs.stat(path, function(er, stat3) {
        cb(er, er ? false : checkStat(stat3, path, options));
      });
    }
    function sync(path, options) {
      return checkStat(fs.statSync(path), path, options);
    }
  }
});

// ../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js
var require_mode = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js"(exports, module) {
    module.exports = isexe;
    isexe.sync = sync;
    var fs = __require("fs");
    function isexe(path, options, cb) {
      fs.stat(path, function(er, stat3) {
        cb(er, er ? false : checkStat(stat3, options));
      });
    }
    function sync(path, options) {
      return checkStat(fs.statSync(path), options);
    }
    function checkStat(stat3, options) {
      return stat3.isFile() && checkMode(stat3, options);
    }
    function checkMode(stat3, options) {
      var mod = stat3.mode;
      var uid = stat3.uid;
      var gid = stat3.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o = parseInt("001", 8);
      var ug = u | g;
      var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});

// ../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js
var require_isexe = __commonJS({
  "../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js"(exports, module) {
    var fs = __require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module.exports = isexe;
    isexe.sync = sync;
    function isexe(path, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve7, reject) {
          isexe(path, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve7(is);
            }
          });
        });
      }
      core(path, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path, options) {
      try {
        return core.sync(path, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});

// ../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js
var require_which = __commonJS({
  "../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js"(exports, module) {
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path = __require("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        // windows always checks the cwd first
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
        "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i) => new Promise((resolve7, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve7(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve7(subStep(p, i, 0));
      });
      const subStep = (p, i, ii) => new Promise((resolve7, reject) => {
        if (ii === pathExt.length)
          return resolve7(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve7(p + ext);
          }
          return resolve7(subStep(p, i, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i = 0; i < pathEnv.length; i++) {
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module.exports = which;
    which.sync = whichSync;
  }
});

// ../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js
var require_path_key = __commonJS({
  "../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js"(exports, module) {
    "use strict";
    var pathKey = (options = {}) => {
      const environment = options.env || process.env;
      const platform = options.platform || process.platform;
      if (platform !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module.exports = pathKey;
    module.exports.default = pathKey;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/resolveCommand.js
var require_resolveCommand = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/resolveCommand.js"(exports, module) {
    "use strict";
    var path = __require("path");
    var which = require_which();
    var getPathKey = require_path_key();
    function resolveCommandAttempt(parsed, withoutPathExt) {
      const env = parsed.options.env || process.env;
      const cwd = process.cwd();
      const hasCustomCwd = parsed.options.cwd != null;
      const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
      if (shouldSwitchCwd) {
        try {
          process.chdir(parsed.options.cwd);
        } catch (err) {
        }
      }
      let resolved;
      try {
        resolved = which.sync(parsed.command, {
          path: env[getPathKey({ env })],
          pathExt: withoutPathExt ? path.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module.exports = resolveCommand;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/escape.js
var require_escape = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/escape.js"(exports, module) {
    "use strict";
    var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
    function escapeCommand(arg) {
      arg = arg.replace(metaCharsRegExp, "^$1");
      return arg;
    }
    function escapeArgument(arg, doubleEscapeMetaChars) {
      arg = `${arg}`;
      arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');
      arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
      arg = `"${arg}"`;
      arg = arg.replace(metaCharsRegExp, "^$1");
      if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, "^$1");
      }
      return arg;
    }
    module.exports.command = escapeCommand;
    module.exports.argument = escapeArgument;
  }
});

// ../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js
var require_shebang_regex = __commonJS({
  "../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js"(exports, module) {
    "use strict";
    module.exports = /^#!(.*)/;
  }
});

// ../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js
var require_shebang_command = __commonJS({
  "../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js"(exports, module) {
    "use strict";
    var shebangRegex = require_shebang_regex();
    module.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/readShebang.js
var require_readShebang = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/readShebang.js"(exports, module) {
    "use strict";
    var fs = __require("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs.openSync(command, "r");
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module.exports = readShebang;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/parse.js"(exports, module) {
    "use strict";
    var path = __require("path");
    var resolveCommand = require_resolveCommand();
    var escape = require_escape();
    var readShebang = require_readShebang();
    var isWin = process.platform === "win32";
    var isExecutableRegExp = /\.(?:com|exe)$/i;
    var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function detectShebang(parsed) {
      parsed.file = resolveCommand(parsed);
      const shebang = parsed.file && readShebang(parsed.file);
      if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return resolveCommand(parsed);
      }
      return parsed.file;
    }
    function parseNonShell(parsed) {
      if (!isWin) {
        return parsed;
      }
      const commandFile = detectShebang(parsed);
      const needsShell = !isExecutableRegExp.test(commandFile);
      if (parsed.options.forceShell || needsShell) {
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
        parsed.command = path.normalize(parsed.command);
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [parsed.command].concat(parsed.args).join(" ");
        parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
      }
      return parsed;
    }
    function parse(command, args, options) {
      if (args && !Array.isArray(args)) {
        options = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options = Object.assign({}, options);
      const parsed = {
        command,
        args,
        options,
        file: void 0,
        original: {
          command,
          args
        }
      };
      return options.shell ? parsed : parseNonShell(parsed);
    }
    module.exports = parse;
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/enoent.js
var require_enoent = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/lib/enoent.js"(exports, module) {
    "use strict";
    var isWin = process.platform === "win32";
    function notFoundError(original, syscall) {
      return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
      });
    }
    function hookChildProcess(cp, parsed) {
      if (!isWin) {
        return;
      }
      const originalEmit = cp.emit;
      cp.emit = function(name, arg1) {
        if (name === "exit") {
          const err = verifyENOENT(arg1, parsed);
          if (err) {
            return originalEmit.call(cp, "error", err);
          }
        }
        return originalEmit.apply(cp, arguments);
      };
    }
    function verifyENOENT(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawn");
      }
      return null;
    }
    function verifyENOENTSync(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawnSync");
      }
      return null;
    }
    module.exports = {
      hookChildProcess,
      verifyENOENT,
      verifyENOENTSync,
      notFoundError
    };
  }
});

// ../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js
var require_cross_spawn = __commonJS({
  "../../node_modules/.pnpm/cross-spawn@7.0.6/node_modules/cross-spawn/index.js"(exports, module) {
    "use strict";
    var cp = __require("child_process");
    var parse = require_parse();
    var enoent = require_enoent();
    function spawn2(command, args, options) {
      const parsed = parse(command, args, options);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    function spawnSync(command, args, options) {
      const parsed = parse(command, args, options);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    module.exports = spawn2;
    module.exports.spawn = spawn2;
    module.exports.sync = spawnSync;
    module.exports._parse = parse;
    module.exports._enoent = enoent;
  }
});

// ../../node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/polyfills.js
var require_polyfills = __commonJS({
  "../../node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/polyfills.js"(exports, module) {
    var constants = __require("constants");
    var origCwd = process.cwd;
    var cwd = null;
    var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
      if (!cwd)
        cwd = origCwd.call(process);
      return cwd;
    };
    try {
      process.cwd();
    } catch (er) {
    }
    if (typeof process.chdir === "function") {
      chdir = process.chdir;
      process.chdir = function(d) {
        cwd = null;
        chdir.call(process, d);
      };
      if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
    }
    var chdir;
    module.exports = patch;
    function patch(fs) {
      if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
        patchLchmod(fs);
      }
      if (!fs.lutimes) {
        patchLutimes(fs);
      }
      fs.chown = chownFix(fs.chown);
      fs.fchown = chownFix(fs.fchown);
      fs.lchown = chownFix(fs.lchown);
      fs.chmod = chmodFix(fs.chmod);
      fs.fchmod = chmodFix(fs.fchmod);
      fs.lchmod = chmodFix(fs.lchmod);
      fs.chownSync = chownFixSync(fs.chownSync);
      fs.fchownSync = chownFixSync(fs.fchownSync);
      fs.lchownSync = chownFixSync(fs.lchownSync);
      fs.chmodSync = chmodFixSync(fs.chmodSync);
      fs.fchmodSync = chmodFixSync(fs.fchmodSync);
      fs.lchmodSync = chmodFixSync(fs.lchmodSync);
      fs.stat = statFix(fs.stat);
      fs.fstat = statFix(fs.fstat);
      fs.lstat = statFix(fs.lstat);
      fs.statSync = statFixSync(fs.statSync);
      fs.fstatSync = statFixSync(fs.fstatSync);
      fs.lstatSync = statFixSync(fs.lstatSync);
      if (fs.chmod && !fs.lchmod) {
        fs.lchmod = function(path, mode, cb) {
          if (cb) process.nextTick(cb);
        };
        fs.lchmodSync = function() {
        };
      }
      if (fs.chown && !fs.lchown) {
        fs.lchown = function(path, uid, gid, cb) {
          if (cb) process.nextTick(cb);
        };
        fs.lchownSync = function() {
        };
      }
      if (platform === "win32") {
        fs.rename = typeof fs.rename !== "function" ? fs.rename : (function(fs$rename) {
          function rename2(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
              if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 6e4) {
                setTimeout(function() {
                  fs.stat(to, function(stater, st) {
                    if (stater && stater.code === "ENOENT")
                      fs$rename(from, to, CB);
                    else
                      cb(er);
                  });
                }, backoff);
                if (backoff < 100)
                  backoff += 10;
                return;
              }
              if (cb) cb(er);
            });
          }
          if (Object.setPrototypeOf) Object.setPrototypeOf(rename2, fs$rename);
          return rename2;
        })(fs.rename);
      }
      fs.read = typeof fs.read !== "function" ? fs.read : (function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
          var callback;
          if (callback_ && typeof callback_ === "function") {
            var eagCounter = 0;
            callback = function(er, _, __) {
              if (er && er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                return fs$read.call(fs, fd, buffer, offset, length, position, callback);
              }
              callback_.apply(this, arguments);
            };
          }
          return fs$read.call(fs, fd, buffer, offset, length, position, callback);
        }
        if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
        return read;
      })(fs.read);
      fs.readSync = typeof fs.readSync !== "function" ? fs.readSync : /* @__PURE__ */ (function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
          var eagCounter = 0;
          while (true) {
            try {
              return fs$readSync.call(fs, fd, buffer, offset, length, position);
            } catch (er) {
              if (er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                continue;
              }
              throw er;
            }
          }
        };
      })(fs.readSync);
      function patchLchmod(fs2) {
        fs2.lchmod = function(path, mode, callback) {
          fs2.open(
            path,
            constants.O_WRONLY | constants.O_SYMLINK,
            mode,
            function(err, fd) {
              if (err) {
                if (callback) callback(err);
                return;
              }
              fs2.fchmod(fd, mode, function(err2) {
                fs2.close(fd, function(err22) {
                  if (callback) callback(err2 || err22);
                });
              });
            }
          );
        };
        fs2.lchmodSync = function(path, mode) {
          var fd = fs2.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
          var threw = true;
          var ret;
          try {
            ret = fs2.fchmodSync(fd, mode);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs2.closeSync(fd);
              } catch (er) {
              }
            } else {
              fs2.closeSync(fd);
            }
          }
          return ret;
        };
      }
      function patchLutimes(fs2) {
        if (constants.hasOwnProperty("O_SYMLINK") && fs2.futimes) {
          fs2.lutimes = function(path, at, mt, cb) {
            fs2.open(path, constants.O_SYMLINK, function(er, fd) {
              if (er) {
                if (cb) cb(er);
                return;
              }
              fs2.futimes(fd, at, mt, function(er2) {
                fs2.close(fd, function(er22) {
                  if (cb) cb(er2 || er22);
                });
              });
            });
          };
          fs2.lutimesSync = function(path, at, mt) {
            var fd = fs2.openSync(path, constants.O_SYMLINK);
            var ret;
            var threw = true;
            try {
              ret = fs2.futimesSync(fd, at, mt);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs2.closeSync(fd);
                } catch (er) {
                }
              } else {
                fs2.closeSync(fd);
              }
            }
            return ret;
          };
        } else if (fs2.futimes) {
          fs2.lutimes = function(_a, _b, _c, cb) {
            if (cb) process.nextTick(cb);
          };
          fs2.lutimesSync = function() {
          };
        }
      }
      function chmodFix(orig) {
        if (!orig) return orig;
        return function(target, mode, cb) {
          return orig.call(fs, target, mode, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chmodFixSync(orig) {
        if (!orig) return orig;
        return function(target, mode) {
          try {
            return orig.call(fs, target, mode);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function chownFix(orig) {
        if (!orig) return orig;
        return function(target, uid, gid, cb) {
          return orig.call(fs, target, uid, gid, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chownFixSync(orig) {
        if (!orig) return orig;
        return function(target, uid, gid) {
          try {
            return orig.call(fs, target, uid, gid);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function statFix(orig) {
        if (!orig) return orig;
        return function(target, options, cb) {
          if (typeof options === "function") {
            cb = options;
            options = null;
          }
          function callback(er, stats) {
            if (stats) {
              if (stats.uid < 0) stats.uid += 4294967296;
              if (stats.gid < 0) stats.gid += 4294967296;
            }
            if (cb) cb.apply(this, arguments);
          }
          return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
        };
      }
      function statFixSync(orig) {
        if (!orig) return orig;
        return function(target, options) {
          var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
          if (stats) {
            if (stats.uid < 0) stats.uid += 4294967296;
            if (stats.gid < 0) stats.gid += 4294967296;
          }
          return stats;
        };
      }
      function chownErOk(er) {
        if (!er)
          return true;
        if (er.code === "ENOSYS")
          return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
          if (er.code === "EINVAL" || er.code === "EPERM")
            return true;
        }
        return false;
      }
    }
  }
});

// ../../node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/legacy-streams.js
var require_legacy_streams = __commonJS({
  "../../node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/legacy-streams.js"(exports, module) {
    var Stream = __require("stream").Stream;
    module.exports = legacy;
    function legacy(fs) {
      return {
        ReadStream,
        WriteStream
      };
      function ReadStream(path, options) {
        if (!(this instanceof ReadStream)) return new ReadStream(path, options);
        Stream.call(this);
        var self = this;
        this.path = path;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = "r";
        this.mode = 438;
        this.bufferSize = 64 * 1024;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.encoding) this.setEncoding(this.encoding);
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.end === void 0) {
            this.end = Infinity;
          } else if ("number" !== typeof this.end) {
            throw TypeError("end must be a Number");
          }
          if (this.start > this.end) {
            throw new Error("start must be <= end");
          }
          this.pos = this.start;
        }
        if (this.fd !== null) {
          process.nextTick(function() {
            self._read();
          });
          return;
        }
        fs.open(this.path, this.flags, this.mode, function(err, fd) {
          if (err) {
            self.emit("error", err);
            self.readable = false;
            return;
          }
          self.fd = fd;
          self.emit("open", fd);
          self._read();
        });
      }
      function WriteStream(path, options) {
        if (!(this instanceof WriteStream)) return new WriteStream(path, options);
        Stream.call(this);
        this.path = path;
        this.fd = null;
        this.writable = true;
        this.flags = "w";
        this.encoding = "binary";
        this.mode = 438;
        this.bytesWritten = 0;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.start < 0) {
            throw new Error("start must be >= zero");
          }
          this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
          this._open = fs.open;
          this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
          this.flush();
        }
      }
    }
  }
});

// ../../node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/clone.js
var require_clone = __commonJS({
  "../../node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/clone.js"(exports, module) {
    "use strict";
    module.exports = clone;
    var getPrototypeOf = Object.getPrototypeOf || function(obj) {
      return obj.__proto__;
    };
    function clone(obj) {
      if (obj === null || typeof obj !== "object")
        return obj;
      if (obj instanceof Object)
        var copy = { __proto__: getPrototypeOf(obj) };
      else
        var copy = /* @__PURE__ */ Object.create(null);
      Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
      });
      return copy;
    }
  }
});

// ../../node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/graceful-fs.js
var require_graceful_fs = __commonJS({
  "../../node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/graceful-fs.js"(exports, module) {
    var fs = __require("fs");
    var polyfills = require_polyfills();
    var legacy = require_legacy_streams();
    var clone = require_clone();
    var util = __require("util");
    var gracefulQueue;
    var previousSymbol;
    if (typeof Symbol === "function" && typeof Symbol.for === "function") {
      gracefulQueue = /* @__PURE__ */ Symbol.for("graceful-fs.queue");
      previousSymbol = /* @__PURE__ */ Symbol.for("graceful-fs.previous");
    } else {
      gracefulQueue = "___graceful-fs.queue";
      previousSymbol = "___graceful-fs.previous";
    }
    function noop() {
    }
    function publishQueue(context, queue2) {
      Object.defineProperty(context, gracefulQueue, {
        get: function() {
          return queue2;
        }
      });
    }
    var debug = noop;
    if (util.debuglog)
      debug = util.debuglog("gfs4");
    else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
      debug = function() {
        var m = util.format.apply(util, arguments);
        m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
        console.error(m);
      };
    if (!fs[gracefulQueue]) {
      queue = global[gracefulQueue] || [];
      publishQueue(fs, queue);
      fs.close = (function(fs$close) {
        function close(fd, cb) {
          return fs$close.call(fs, fd, function(err) {
            if (!err) {
              resetQueue();
            }
            if (typeof cb === "function")
              cb.apply(this, arguments);
          });
        }
        Object.defineProperty(close, previousSymbol, {
          value: fs$close
        });
        return close;
      })(fs.close);
      fs.closeSync = (function(fs$closeSync) {
        function closeSync2(fd) {
          fs$closeSync.apply(fs, arguments);
          resetQueue();
        }
        Object.defineProperty(closeSync2, previousSymbol, {
          value: fs$closeSync
        });
        return closeSync2;
      })(fs.closeSync);
      if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
        process.on("exit", function() {
          debug(fs[gracefulQueue]);
          __require("assert").equal(fs[gracefulQueue].length, 0);
        });
      }
    }
    var queue;
    if (!global[gracefulQueue]) {
      publishQueue(global, fs[gracefulQueue]);
    }
    module.exports = patch(clone(fs));
    if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
      module.exports = patch(fs);
      fs.__patched = true;
    }
    function patch(fs2) {
      polyfills(fs2);
      fs2.gracefulify = patch;
      fs2.createReadStream = createReadStream;
      fs2.createWriteStream = createWriteStream;
      var fs$readFile = fs2.readFile;
      fs2.readFile = readFile6;
      function readFile6(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$readFile(path, options, cb);
        function go$readFile(path2, options2, cb2, startTime) {
          return fs$readFile(path2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$readFile, [path2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$writeFile = fs2.writeFile;
      fs2.writeFile = writeFile4;
      function writeFile4(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$writeFile(path, data, options, cb);
        function go$writeFile(path2, data2, options2, cb2, startTime) {
          return fs$writeFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$writeFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$appendFile = fs2.appendFile;
      if (fs$appendFile)
        fs2.appendFile = appendFile;
      function appendFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$appendFile(path, data, options, cb);
        function go$appendFile(path2, data2, options2, cb2, startTime) {
          return fs$appendFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$appendFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$copyFile = fs2.copyFile;
      if (fs$copyFile)
        fs2.copyFile = copyFile;
      function copyFile(src, dest, flags, cb) {
        if (typeof flags === "function") {
          cb = flags;
          flags = 0;
        }
        return go$copyFile(src, dest, flags, cb);
        function go$copyFile(src2, dest2, flags2, cb2, startTime) {
          return fs$copyFile(src2, dest2, flags2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$readdir = fs2.readdir;
      fs2.readdir = readdir3;
      var noReaddirOptionVersions = /^v[0-5]\./;
      function readdir3(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path2, options2, cb2, startTime) {
          return fs$readdir(path2, fs$readdirCallback(
            path2,
            options2,
            cb2,
            startTime
          ));
        } : function go$readdir2(path2, options2, cb2, startTime) {
          return fs$readdir(path2, options2, fs$readdirCallback(
            path2,
            options2,
            cb2,
            startTime
          ));
        };
        return go$readdir(path, options, cb);
        function fs$readdirCallback(path2, options2, cb2, startTime) {
          return function(err, files) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([
                go$readdir,
                [path2, options2, cb2],
                err,
                startTime || Date.now(),
                Date.now()
              ]);
            else {
              if (files && files.sort)
                files.sort();
              if (typeof cb2 === "function")
                cb2.call(this, err, files);
            }
          };
        }
      }
      if (process.version.substr(0, 4) === "v0.8") {
        var legStreams = legacy(fs2);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
      }
      var fs$ReadStream = fs2.ReadStream;
      if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
      }
      var fs$WriteStream = fs2.WriteStream;
      if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
      }
      Object.defineProperty(fs2, "ReadStream", {
        get: function() {
          return ReadStream;
        },
        set: function(val) {
          ReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(fs2, "WriteStream", {
        get: function() {
          return WriteStream;
        },
        set: function(val) {
          WriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileReadStream = ReadStream;
      Object.defineProperty(fs2, "FileReadStream", {
        get: function() {
          return FileReadStream;
        },
        set: function(val) {
          FileReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileWriteStream = WriteStream;
      Object.defineProperty(fs2, "FileWriteStream", {
        get: function() {
          return FileWriteStream;
        },
        set: function(val) {
          FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      function ReadStream(path, options) {
        if (this instanceof ReadStream)
          return fs$ReadStream.apply(this, arguments), this;
        else
          return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
      }
      function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            if (that.autoClose)
              that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
            that.read();
          }
        });
      }
      function WriteStream(path, options) {
        if (this instanceof WriteStream)
          return fs$WriteStream.apply(this, arguments), this;
        else
          return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
      }
      function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
          }
        });
      }
      function createReadStream(path, options) {
        return new fs2.ReadStream(path, options);
      }
      function createWriteStream(path, options) {
        return new fs2.WriteStream(path, options);
      }
      var fs$open = fs2.open;
      fs2.open = open;
      function open(path, flags, mode, cb) {
        if (typeof mode === "function")
          cb = mode, mode = null;
        return go$open(path, flags, mode, cb);
        function go$open(path2, flags2, mode2, cb2, startTime) {
          return fs$open(path2, flags2, mode2, function(err, fd) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$open, [path2, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      return fs2;
    }
    function enqueue(elem) {
      debug("ENQUEUE", elem[0].name, elem[1]);
      fs[gracefulQueue].push(elem);
      retry();
    }
    var retryTimer;
    function resetQueue() {
      var now = Date.now();
      for (var i = 0; i < fs[gracefulQueue].length; ++i) {
        if (fs[gracefulQueue][i].length > 2) {
          fs[gracefulQueue][i][3] = now;
          fs[gracefulQueue][i][4] = now;
        }
      }
      retry();
    }
    function retry() {
      clearTimeout(retryTimer);
      retryTimer = void 0;
      if (fs[gracefulQueue].length === 0)
        return;
      var elem = fs[gracefulQueue].shift();
      var fn = elem[0];
      var args = elem[1];
      var err = elem[2];
      var startTime = elem[3];
      var lastTime = elem[4];
      if (startTime === void 0) {
        debug("RETRY", fn.name, args);
        fn.apply(null, args);
      } else if (Date.now() - startTime >= 6e4) {
        debug("TIMEOUT", fn.name, args);
        var cb = args.pop();
        if (typeof cb === "function")
          cb.call(null, err);
      } else {
        var sinceAttempt = Date.now() - lastTime;
        var sinceStart = Math.max(lastTime - startTime, 1);
        var desiredDelay = Math.min(sinceStart * 1.2, 100);
        if (sinceAttempt >= desiredDelay) {
          debug("RETRY", fn.name, args);
          fn.apply(null, args.concat([startTime]));
        } else {
          fs[gracefulQueue].push(elem);
        }
      }
      if (retryTimer === void 0) {
        retryTimer = setTimeout(retry, 0);
      }
    }
  }
});

// ../../node_modules/.pnpm/retry@0.12.0/node_modules/retry/lib/retry_operation.js
var require_retry_operation = __commonJS({
  "../../node_modules/.pnpm/retry@0.12.0/node_modules/retry/lib/retry_operation.js"(exports, module) {
    function RetryOperation(timeouts, options) {
      if (typeof options === "boolean") {
        options = { forever: options };
      }
      this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
      this._timeouts = timeouts;
      this._options = options || {};
      this._maxRetryTime = options && options.maxRetryTime || Infinity;
      this._fn = null;
      this._errors = [];
      this._attempts = 1;
      this._operationTimeout = null;
      this._operationTimeoutCb = null;
      this._timeout = null;
      this._operationStart = null;
      if (this._options.forever) {
        this._cachedTimeouts = this._timeouts.slice(0);
      }
    }
    module.exports = RetryOperation;
    RetryOperation.prototype.reset = function() {
      this._attempts = 1;
      this._timeouts = this._originalTimeouts;
    };
    RetryOperation.prototype.stop = function() {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      this._timeouts = [];
      this._cachedTimeouts = null;
    };
    RetryOperation.prototype.retry = function(err) {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      if (!err) {
        return false;
      }
      var currentTime = (/* @__PURE__ */ new Date()).getTime();
      if (err && currentTime - this._operationStart >= this._maxRetryTime) {
        this._errors.unshift(new Error("RetryOperation timeout occurred"));
        return false;
      }
      this._errors.push(err);
      var timeout = this._timeouts.shift();
      if (timeout === void 0) {
        if (this._cachedTimeouts) {
          this._errors.splice(this._errors.length - 1, this._errors.length);
          this._timeouts = this._cachedTimeouts.slice(0);
          timeout = this._timeouts.shift();
        } else {
          return false;
        }
      }
      var self = this;
      var timer = setTimeout(function() {
        self._attempts++;
        if (self._operationTimeoutCb) {
          self._timeout = setTimeout(function() {
            self._operationTimeoutCb(self._attempts);
          }, self._operationTimeout);
          if (self._options.unref) {
            self._timeout.unref();
          }
        }
        self._fn(self._attempts);
      }, timeout);
      if (this._options.unref) {
        timer.unref();
      }
      return true;
    };
    RetryOperation.prototype.attempt = function(fn, timeoutOps) {
      this._fn = fn;
      if (timeoutOps) {
        if (timeoutOps.timeout) {
          this._operationTimeout = timeoutOps.timeout;
        }
        if (timeoutOps.cb) {
          this._operationTimeoutCb = timeoutOps.cb;
        }
      }
      var self = this;
      if (this._operationTimeoutCb) {
        this._timeout = setTimeout(function() {
          self._operationTimeoutCb();
        }, self._operationTimeout);
      }
      this._operationStart = (/* @__PURE__ */ new Date()).getTime();
      this._fn(this._attempts);
    };
    RetryOperation.prototype.try = function(fn) {
      console.log("Using RetryOperation.try() is deprecated");
      this.attempt(fn);
    };
    RetryOperation.prototype.start = function(fn) {
      console.log("Using RetryOperation.start() is deprecated");
      this.attempt(fn);
    };
    RetryOperation.prototype.start = RetryOperation.prototype.try;
    RetryOperation.prototype.errors = function() {
      return this._errors;
    };
    RetryOperation.prototype.attempts = function() {
      return this._attempts;
    };
    RetryOperation.prototype.mainError = function() {
      if (this._errors.length === 0) {
        return null;
      }
      var counts = {};
      var mainError = null;
      var mainErrorCount = 0;
      for (var i = 0; i < this._errors.length; i++) {
        var error = this._errors[i];
        var message = error.message;
        var count = (counts[message] || 0) + 1;
        counts[message] = count;
        if (count >= mainErrorCount) {
          mainError = error;
          mainErrorCount = count;
        }
      }
      return mainError;
    };
  }
});

// ../../node_modules/.pnpm/retry@0.12.0/node_modules/retry/lib/retry.js
var require_retry = __commonJS({
  "../../node_modules/.pnpm/retry@0.12.0/node_modules/retry/lib/retry.js"(exports) {
    var RetryOperation = require_retry_operation();
    exports.operation = function(options) {
      var timeouts = exports.timeouts(options);
      return new RetryOperation(timeouts, {
        forever: options && options.forever,
        unref: options && options.unref,
        maxRetryTime: options && options.maxRetryTime
      });
    };
    exports.timeouts = function(options) {
      if (options instanceof Array) {
        return [].concat(options);
      }
      var opts = {
        retries: 10,
        factor: 2,
        minTimeout: 1 * 1e3,
        maxTimeout: Infinity,
        randomize: false
      };
      for (var key in options) {
        opts[key] = options[key];
      }
      if (opts.minTimeout > opts.maxTimeout) {
        throw new Error("minTimeout is greater than maxTimeout");
      }
      var timeouts = [];
      for (var i = 0; i < opts.retries; i++) {
        timeouts.push(this.createTimeout(i, opts));
      }
      if (options && options.forever && !timeouts.length) {
        timeouts.push(this.createTimeout(i, opts));
      }
      timeouts.sort(function(a, b) {
        return a - b;
      });
      return timeouts;
    };
    exports.createTimeout = function(attempt, opts) {
      var random = opts.randomize ? Math.random() + 1 : 1;
      var timeout = Math.round(random * opts.minTimeout * Math.pow(opts.factor, attempt));
      timeout = Math.min(timeout, opts.maxTimeout);
      return timeout;
    };
    exports.wrap = function(obj, options, methods) {
      if (options instanceof Array) {
        methods = options;
        options = null;
      }
      if (!methods) {
        methods = [];
        for (var key in obj) {
          if (typeof obj[key] === "function") {
            methods.push(key);
          }
        }
      }
      for (var i = 0; i < methods.length; i++) {
        var method = methods[i];
        var original = obj[method];
        obj[method] = function retryWrapper(original2) {
          var op = exports.operation(options);
          var args = Array.prototype.slice.call(arguments, 1);
          var callback = args.pop();
          args.push(function(err) {
            if (op.retry(err)) {
              return;
            }
            if (err) {
              arguments[0] = op.mainError();
            }
            callback.apply(this, arguments);
          });
          op.attempt(function() {
            original2.apply(obj, args);
          });
        }.bind(obj, original);
        obj[method].options = options;
      }
    };
  }
});

// ../../node_modules/.pnpm/retry@0.12.0/node_modules/retry/index.js
var require_retry2 = __commonJS({
  "../../node_modules/.pnpm/retry@0.12.0/node_modules/retry/index.js"(exports, module) {
    module.exports = require_retry();
  }
});

// ../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/signals.js
var require_signals = __commonJS({
  "../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/signals.js"(exports, module) {
    module.exports = [
      "SIGABRT",
      "SIGALRM",
      "SIGHUP",
      "SIGINT",
      "SIGTERM"
    ];
    if (process.platform !== "win32") {
      module.exports.push(
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT"
        // should detect profiler and enable/disable accordingly.
        // see #21
        // 'SIGPROF'
      );
    }
    if (process.platform === "linux") {
      module.exports.push(
        "SIGIO",
        "SIGPOLL",
        "SIGPWR",
        "SIGSTKFLT",
        "SIGUNUSED"
      );
    }
  }
});

// ../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/index.js
var require_signal_exit = __commonJS({
  "../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/index.js"(exports, module) {
    var process2 = global.process;
    var processOk = function(process3) {
      return process3 && typeof process3 === "object" && typeof process3.removeListener === "function" && typeof process3.emit === "function" && typeof process3.reallyExit === "function" && typeof process3.listeners === "function" && typeof process3.kill === "function" && typeof process3.pid === "number" && typeof process3.on === "function";
    };
    if (!processOk(process2)) {
      module.exports = function() {
        return function() {
        };
      };
    } else {
      assert = __require("assert");
      signals = require_signals();
      isWin = /^win/i.test(process2.platform);
      EE = __require("events");
      if (typeof EE !== "function") {
        EE = EE.EventEmitter;
      }
      if (process2.__signal_exit_emitter__) {
        emitter = process2.__signal_exit_emitter__;
      } else {
        emitter = process2.__signal_exit_emitter__ = new EE();
        emitter.count = 0;
        emitter.emitted = {};
      }
      if (!emitter.infinite) {
        emitter.setMaxListeners(Infinity);
        emitter.infinite = true;
      }
      module.exports = function(cb, opts) {
        if (!processOk(global.process)) {
          return function() {
          };
        }
        assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
        if (loaded === false) {
          load();
        }
        var ev = "exit";
        if (opts && opts.alwaysLast) {
          ev = "afterexit";
        }
        var remove = function() {
          emitter.removeListener(ev, cb);
          if (emitter.listeners("exit").length === 0 && emitter.listeners("afterexit").length === 0) {
            unload();
          }
        };
        emitter.on(ev, cb);
        return remove;
      };
      unload = function unload2() {
        if (!loaded || !processOk(global.process)) {
          return;
        }
        loaded = false;
        signals.forEach(function(sig) {
          try {
            process2.removeListener(sig, sigListeners[sig]);
          } catch (er) {
          }
        });
        process2.emit = originalProcessEmit;
        process2.reallyExit = originalProcessReallyExit;
        emitter.count -= 1;
      };
      module.exports.unload = unload;
      emit = function emit2(event, code, signal) {
        if (emitter.emitted[event]) {
          return;
        }
        emitter.emitted[event] = true;
        emitter.emit(event, code, signal);
      };
      sigListeners = {};
      signals.forEach(function(sig) {
        sigListeners[sig] = function listener() {
          if (!processOk(global.process)) {
            return;
          }
          var listeners = process2.listeners(sig);
          if (listeners.length === emitter.count) {
            unload();
            emit("exit", null, sig);
            emit("afterexit", null, sig);
            if (isWin && sig === "SIGHUP") {
              sig = "SIGINT";
            }
            process2.kill(process2.pid, sig);
          }
        };
      });
      module.exports.signals = function() {
        return signals;
      };
      loaded = false;
      load = function load2() {
        if (loaded || !processOk(global.process)) {
          return;
        }
        loaded = true;
        emitter.count += 1;
        signals = signals.filter(function(sig) {
          try {
            process2.on(sig, sigListeners[sig]);
            return true;
          } catch (er) {
            return false;
          }
        });
        process2.emit = processEmit;
        process2.reallyExit = processReallyExit;
      };
      module.exports.load = load;
      originalProcessReallyExit = process2.reallyExit;
      processReallyExit = function processReallyExit2(code) {
        if (!processOk(global.process)) {
          return;
        }
        process2.exitCode = code || /* istanbul ignore next */
        0;
        emit("exit", process2.exitCode, null);
        emit("afterexit", process2.exitCode, null);
        originalProcessReallyExit.call(process2, process2.exitCode);
      };
      originalProcessEmit = process2.emit;
      processEmit = function processEmit2(ev, arg) {
        if (ev === "exit" && processOk(global.process)) {
          if (arg !== void 0) {
            process2.exitCode = arg;
          }
          var ret = originalProcessEmit.apply(this, arguments);
          emit("exit", process2.exitCode, null);
          emit("afterexit", process2.exitCode, null);
          return ret;
        } else {
          return originalProcessEmit.apply(this, arguments);
        }
      };
    }
    var assert;
    var signals;
    var isWin;
    var EE;
    var emitter;
    var unload;
    var emit;
    var sigListeners;
    var loaded;
    var load;
    var originalProcessReallyExit;
    var processReallyExit;
    var originalProcessEmit;
    var processEmit;
  }
});

// ../../node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/mtime-precision.js
var require_mtime_precision = __commonJS({
  "../../node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/mtime-precision.js"(exports, module) {
    "use strict";
    var cacheSymbol = /* @__PURE__ */ Symbol();
    function probe(file, fs, callback) {
      const cachedPrecision = fs[cacheSymbol];
      if (cachedPrecision) {
        return fs.stat(file, (err, stat3) => {
          if (err) {
            return callback(err);
          }
          callback(null, stat3.mtime, cachedPrecision);
        });
      }
      const mtime = new Date(Math.ceil(Date.now() / 1e3) * 1e3 + 5);
      fs.utimes(file, mtime, mtime, (err) => {
        if (err) {
          return callback(err);
        }
        fs.stat(file, (err2, stat3) => {
          if (err2) {
            return callback(err2);
          }
          const precision = stat3.mtime.getTime() % 1e3 === 0 ? "s" : "ms";
          Object.defineProperty(fs, cacheSymbol, { value: precision });
          callback(null, stat3.mtime, precision);
        });
      });
    }
    function getMtime(precision) {
      let now = Date.now();
      if (precision === "s") {
        now = Math.ceil(now / 1e3) * 1e3;
      }
      return new Date(now);
    }
    module.exports.probe = probe;
    module.exports.getMtime = getMtime;
  }
});

// ../../node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/lockfile.js
var require_lockfile = __commonJS({
  "../../node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/lockfile.js"(exports, module) {
    "use strict";
    var path = __require("path");
    var fs = require_graceful_fs();
    var retry = require_retry2();
    var onExit = require_signal_exit();
    var mtimePrecision = require_mtime_precision();
    var locks = {};
    function getLockFile(file, options) {
      return options.lockfilePath || `${file}.lock`;
    }
    function resolveCanonicalPath(file, options, callback) {
      if (!options.realpath) {
        return callback(null, path.resolve(file));
      }
      options.fs.realpath(file, callback);
    }
    function acquireLock2(file, options, callback) {
      const lockfilePath = getLockFile(file, options);
      options.fs.mkdir(lockfilePath, (err) => {
        if (!err) {
          return mtimePrecision.probe(lockfilePath, options.fs, (err2, mtime, mtimePrecision2) => {
            if (err2) {
              options.fs.rmdir(lockfilePath, () => {
              });
              return callback(err2);
            }
            callback(null, mtime, mtimePrecision2);
          });
        }
        if (err.code !== "EEXIST") {
          return callback(err);
        }
        if (options.stale <= 0) {
          return callback(Object.assign(new Error("Lock file is already being held"), { code: "ELOCKED", file }));
        }
        options.fs.stat(lockfilePath, (err2, stat3) => {
          if (err2) {
            if (err2.code === "ENOENT") {
              return acquireLock2(file, { ...options, stale: 0 }, callback);
            }
            return callback(err2);
          }
          if (!isLockStale(stat3, options)) {
            return callback(Object.assign(new Error("Lock file is already being held"), { code: "ELOCKED", file }));
          }
          removeLock(file, options, (err3) => {
            if (err3) {
              return callback(err3);
            }
            acquireLock2(file, { ...options, stale: 0 }, callback);
          });
        });
      });
    }
    function isLockStale(stat3, options) {
      return stat3.mtime.getTime() < Date.now() - options.stale;
    }
    function removeLock(file, options, callback) {
      options.fs.rmdir(getLockFile(file, options), (err) => {
        if (err && err.code !== "ENOENT") {
          return callback(err);
        }
        callback();
      });
    }
    function updateLock(file, options) {
      const lock2 = locks[file];
      if (lock2.updateTimeout) {
        return;
      }
      lock2.updateDelay = lock2.updateDelay || options.update;
      lock2.updateTimeout = setTimeout(() => {
        lock2.updateTimeout = null;
        options.fs.stat(lock2.lockfilePath, (err, stat3) => {
          const isOverThreshold = lock2.lastUpdate + options.stale < Date.now();
          if (err) {
            if (err.code === "ENOENT" || isOverThreshold) {
              return setLockAsCompromised(file, lock2, Object.assign(err, { code: "ECOMPROMISED" }));
            }
            lock2.updateDelay = 1e3;
            return updateLock(file, options);
          }
          const isMtimeOurs = lock2.mtime.getTime() === stat3.mtime.getTime();
          if (!isMtimeOurs) {
            return setLockAsCompromised(
              file,
              lock2,
              Object.assign(
                new Error("Unable to update lock within the stale threshold"),
                { code: "ECOMPROMISED" }
              )
            );
          }
          const mtime = mtimePrecision.getMtime(lock2.mtimePrecision);
          options.fs.utimes(lock2.lockfilePath, mtime, mtime, (err2) => {
            const isOverThreshold2 = lock2.lastUpdate + options.stale < Date.now();
            if (lock2.released) {
              return;
            }
            if (err2) {
              if (err2.code === "ENOENT" || isOverThreshold2) {
                return setLockAsCompromised(file, lock2, Object.assign(err2, { code: "ECOMPROMISED" }));
              }
              lock2.updateDelay = 1e3;
              return updateLock(file, options);
            }
            lock2.mtime = mtime;
            lock2.lastUpdate = Date.now();
            lock2.updateDelay = null;
            updateLock(file, options);
          });
        });
      }, lock2.updateDelay);
      if (lock2.updateTimeout.unref) {
        lock2.updateTimeout.unref();
      }
    }
    function setLockAsCompromised(file, lock2, err) {
      lock2.released = true;
      if (lock2.updateTimeout) {
        clearTimeout(lock2.updateTimeout);
      }
      if (locks[file] === lock2) {
        delete locks[file];
      }
      lock2.options.onCompromised(err);
    }
    function lock(file, options, callback) {
      options = {
        stale: 1e4,
        update: null,
        realpath: true,
        retries: 0,
        fs,
        onCompromised: (err) => {
          throw err;
        },
        ...options
      };
      options.retries = options.retries || 0;
      options.retries = typeof options.retries === "number" ? { retries: options.retries } : options.retries;
      options.stale = Math.max(options.stale || 0, 2e3);
      options.update = options.update == null ? options.stale / 2 : options.update || 0;
      options.update = Math.max(Math.min(options.update, options.stale / 2), 1e3);
      resolveCanonicalPath(file, options, (err, file2) => {
        if (err) {
          return callback(err);
        }
        const operation = retry.operation(options.retries);
        operation.attempt(() => {
          acquireLock2(file2, options, (err2, mtime, mtimePrecision2) => {
            if (operation.retry(err2)) {
              return;
            }
            if (err2) {
              return callback(operation.mainError());
            }
            const lock2 = locks[file2] = {
              lockfilePath: getLockFile(file2, options),
              mtime,
              mtimePrecision: mtimePrecision2,
              options,
              lastUpdate: Date.now()
            };
            updateLock(file2, options);
            callback(null, (releasedCallback) => {
              if (lock2.released) {
                return releasedCallback && releasedCallback(Object.assign(new Error("Lock is already released"), { code: "ERELEASED" }));
              }
              unlock(file2, { ...options, realpath: false }, releasedCallback);
            });
          });
        });
      });
    }
    function unlock(file, options, callback) {
      options = {
        fs,
        realpath: true,
        ...options
      };
      resolveCanonicalPath(file, options, (err, file2) => {
        if (err) {
          return callback(err);
        }
        const lock2 = locks[file2];
        if (!lock2) {
          return callback(Object.assign(new Error("Lock is not acquired/owned by you"), { code: "ENOTACQUIRED" }));
        }
        lock2.updateTimeout && clearTimeout(lock2.updateTimeout);
        lock2.released = true;
        delete locks[file2];
        removeLock(file2, options, callback);
      });
    }
    function check(file, options, callback) {
      options = {
        stale: 1e4,
        realpath: true,
        fs,
        ...options
      };
      options.stale = Math.max(options.stale || 0, 2e3);
      resolveCanonicalPath(file, options, (err, file2) => {
        if (err) {
          return callback(err);
        }
        options.fs.stat(getLockFile(file2, options), (err2, stat3) => {
          if (err2) {
            return err2.code === "ENOENT" ? callback(null, false) : callback(err2);
          }
          return callback(null, !isLockStale(stat3, options));
        });
      });
    }
    function getLocks() {
      return locks;
    }
    onExit(() => {
      for (const file in locks) {
        const options = locks[file].options;
        try {
          options.fs.rmdirSync(getLockFile(file, options));
        } catch (e) {
        }
      }
    });
    module.exports.lock = lock;
    module.exports.unlock = unlock;
    module.exports.check = check;
    module.exports.getLocks = getLocks;
  }
});

// ../../node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/adapter.js
var require_adapter = __commonJS({
  "../../node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/adapter.js"(exports, module) {
    "use strict";
    var fs = require_graceful_fs();
    function createSyncFs(fs2) {
      const methods = ["mkdir", "realpath", "stat", "rmdir", "utimes"];
      const newFs = { ...fs2 };
      methods.forEach((method) => {
        newFs[method] = (...args) => {
          const callback = args.pop();
          let ret;
          try {
            ret = fs2[`${method}Sync`](...args);
          } catch (err) {
            return callback(err);
          }
          callback(null, ret);
        };
      });
      return newFs;
    }
    function toPromise(method) {
      return (...args) => new Promise((resolve7, reject) => {
        args.push((err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve7(result);
          }
        });
        method(...args);
      });
    }
    function toSync(method) {
      return (...args) => {
        let err;
        let result;
        args.push((_err, _result) => {
          err = _err;
          result = _result;
        });
        method(...args);
        if (err) {
          throw err;
        }
        return result;
      };
    }
    function toSyncOptions(options) {
      options = { ...options };
      options.fs = createSyncFs(options.fs || fs);
      if (typeof options.retries === "number" && options.retries > 0 || options.retries && typeof options.retries.retries === "number" && options.retries.retries > 0) {
        throw Object.assign(new Error("Cannot use retries with the sync api"), { code: "ESYNC" });
      }
      return options;
    }
    module.exports = {
      toPromise,
      toSync,
      toSyncOptions
    };
  }
});

// ../../node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/index.js
var require_proper_lockfile = __commonJS({
  "../../node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/index.js"(exports, module) {
    "use strict";
    var lockfile = require_lockfile();
    var { toPromise, toSync, toSyncOptions } = require_adapter();
    async function lock(file, options) {
      const release = await toPromise(lockfile.lock)(file, options);
      return toPromise(release);
    }
    function lockSync2(file, options) {
      const release = toSync(lockfile.lock)(file, toSyncOptions(options));
      return toSync(release);
    }
    function unlock(file, options) {
      return toPromise(lockfile.unlock)(file, options);
    }
    function unlockSync(file, options) {
      return toSync(lockfile.unlock)(file, toSyncOptions(options));
    }
    function check(file, options) {
      return toPromise(lockfile.check)(file, options);
    }
    function checkSync(file, options) {
      return toSync(lockfile.check)(file, toSyncOptions(options));
    }
    module.exports = lock;
    module.exports.lock = lock;
    module.exports.unlock = unlock;
    module.exports.lockSync = lockSync2;
    module.exports.unlockSync = unlockSync;
    module.exports.check = check;
    module.exports.checkSync = checkSync;
  }
});

// src/pi-lsp-extension.ts
import { readFile as readFile5 } from "node:fs/promises";
import { resolve as resolve6 } from "node:path";
import {
  getAgentDir,
  SettingsManager
} from "@earendil-works/pi-coding-agent";

// ../pi-utils/src/ui.ts
import {
  keyText
} from "@earendil-works/pi-coding-agent";
import {
  Box,
  MouseRegion,
  Spacer,
  Text,
  truncateToWidth
} from "@earendil-works/pi-tui";
var COLLAPSED_LINES = { fallback: 10, terminal: 5, search: 15, list: 20 };
var SEPARATOR = " \xB7 ";
function joinInline(theme, parts) {
  return parts.filter((part) => Boolean(part)).join(theme.fg("dim", SEPARATOR));
}
function toolHeader(theme, name, target, args) {
  return [
    theme.fg("toolTitle", theme.bold(name)),
    target ? theme.fg("accent", target) : void 0,
    args ? theme.fg("muted", args) : void 0
  ].filter((part) => part !== void 0).join(" ");
}
function expandHint(theme, hidden, direction = "more") {
  const key = theme.fg("dim", keyText("app.tools.expand"));
  return `${theme.fg("muted", `... (${hidden} ${direction} lines,`)} ${key}${theme.fg("muted", " to expand")}${theme.fg("muted", ")")}`;
}
function previewBody(theme, lines, options) {
  const color = options.color ?? "toolOutput";
  const styled = lines.map((line) => theme.fg(color, line));
  const hidden = lines.length - options.limit;
  if (options.expanded || hidden <= 0) return styled;
  if (options.keep === "end") {
    return [expandHint(theme, hidden, "earlier"), ...styled.slice(hidden)];
  }
  return [...styled.slice(0, options.limit), expandHint(theme, hidden)];
}
var CollapsedPreview = class {
  constructor(theme, child, options) {
    this.theme = theme;
    this.child = child;
    this.options = options;
  }
  theme;
  child;
  options;
  render(width) {
    const lines = this.child.render(width);
    const hidden = lines.length - this.options.limit;
    if (this.options.expanded || hidden <= 0) return lines;
    const keepEnd = this.options.keep === "end";
    const hint = new Text(
      expandHint(this.theme, hidden, keepEnd ? "earlier" : "more"),
      0,
      0
    ).render(width);
    return keepEnd ? [...hint, ...lines.slice(hidden)] : [...lines.slice(0, this.options.limit), ...hint];
  }
  invalidate() {
    this.child.invalidate();
  }
};
var clickedViews = /* @__PURE__ */ new WeakMap();
function viewFor(item, global2) {
  const clicked = clickedViews.get(item);
  if (clicked?.global === global2) return clicked.expanded;
  clickedViews.delete(item);
  return global2;
}
var ExpandOnClick = class {
  constructor(child, item, global2, build) {
    this.item = item;
    this.global = global2;
    this.build = build;
    this.region = this.wrap(child);
  }
  item;
  global;
  build;
  region;
  wrap(child) {
    return new MouseRegion(child, (event) => {
      if (event.type !== "click" || event.button !== "left") return void 0;
      const expanded = !viewFor(this.item, this.global);
      const next = this.build(expanded);
      if (!next) return void 0;
      clickedViews.set(this.item, { global: this.global, expanded });
      this.region = this.wrap(next);
      return { handled: true };
    });
  }
  render(width) {
    return this.region.render(width);
  }
  handleMouse(event) {
    return this.region.handleMouse(event);
  }
  invalidate() {
    this.region.invalidate();
  }
};
function expandOnClick(render) {
  return (item, options, theme) => {
    const build = (expanded) => render(item, { ...options, expanded }, theme);
    const child = build(viewFor(item, options.expanded));
    return child && new ExpandOnClick(child, item, options.expanded, build);
  };
}
function expandEntryOnClick(render) {
  return expandOnClick(render);
}
function formatDuration(ms) {
  const seconds = ms / 1e3;
  if (seconds < 60) return `${seconds.toFixed(1)}s`;
  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainder = totalSeconds % 60;
  if (minutes < 60) return `${minutes}m ${remainder}s`;
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m ${remainder}s`;
}
var trackers = /* @__PURE__ */ new WeakMap();
function trackerFor(context) {
  let tracker = trackers.get(context.state);
  if (!tracker) {
    tracker = { startedAt: void 0, endedAt: void 0, interval: void 0, resultSeen: false };
    trackers.set(context.state, tracker);
  }
  return tracker;
}
function track(context, isPartial) {
  const tracker = trackerFor(context);
  if (tracker.startedAt === void 0 && context.executionStarted) tracker.startedAt = Date.now();
  if (tracker.startedAt === void 0) return tracker;
  if (isPartial) {
    tracker.interval ??= setInterval(() => context.invalidate(), 1e3);
  } else {
    if (tracker.interval) clearInterval(tracker.interval);
    tracker.interval = void 0;
    tracker.endedAt ??= Date.now();
  }
  return tracker;
}
function elapsedMs(tracker) {
  return tracker.startedAt === void 0 ? void 0 : (tracker.endedAt ?? Date.now()) - tracker.startedAt;
}
function durationFooter(theme, context, options) {
  const tracker = track(context, options.isPartial);
  tracker.resultSeen = true;
  if (!options.isPartial && context.durationMs !== void 0) {
    return theme.fg("muted", `Took ${formatDuration(context.durationMs)}`);
  }
  const elapsed = elapsedMs(tracker);
  if (elapsed === void 0) return void 0;
  return theme.fg("muted", `${options.isPartial ? "Elapsed" : "Took"} ${formatDuration(elapsed)}`);
}
function appendDurationFooter(container, theme, context, options) {
  const footer = durationFooter(theme, context, options);
  if (footer === void 0) return;
  container.addChild(new Spacer(1));
  container.addChild(new Text(footer, 0, 0));
}
function callDurationFooter(theme, context) {
  const tracker = track(context, context.isPartial);
  return {
    render: () => {
      const elapsed = elapsedMs(tracker);
      if (tracker.resultSeen || tracker.endedAt !== void 0 || elapsed === void 0) return [];
      return [theme.fg("muted", `Elapsed ${formatDuration(elapsed)}`)];
    },
    invalidate: () => {
    }
  };
}
function customMessageBox(theme, header, body) {
  const box = new Box(header.outputPad, 1, (text) => theme.bg("customMessageBg", text));
  const label = theme.fg("customMessageLabel", theme.bold(`[${header.source}]`));
  box.addChild(new Text(header.heading ? `${label} ${header.heading}` : label, 0, 0));
  if (body.length > 0) box.addChild(new Spacer(1));
  for (const child of body) box.addChild(child);
  return box;
}
var ESCAPE = String.fromCharCode(27);
var RESET_SEQUENCE = new RegExp(`${ESCAPE}\\[0m`, "g");
function noticeText(displayName, message) {
  return `${displayName}: ${message}`;
}

// src/pi-lsp-extension.ts
var import_node3 = __toESM(require_main2(), 1);
import { Type as Type21 } from "typebox";
import { Value as Value22 } from "typebox/value";

// src/lsp-dependent-diagnostics.ts
import { fileURLToPath } from "node:url";
import { Type as Type2 } from "typebox";
import { Value } from "typebox/value";

// src/lsp-tool-contract.ts
import { Type } from "typebox";
var LSP_OPERATION_NAMES = [
  "status",
  "capabilities",
  "restart",
  "diagnostics",
  "workspace_diagnostics",
  "completion",
  "hover",
  "signature_help",
  "declaration",
  "goto_definition",
  "goto_type_definition",
  "goto_implementation",
  "find_references",
  "document_highlights",
  "document_symbols",
  "workspace_symbols",
  "document_links",
  "call_hierarchy",
  "incoming_calls",
  "outgoing_calls",
  "type_hierarchy",
  "supertypes",
  "subtypes",
  "selection_ranges",
  "folding_ranges",
  "code_lenses",
  "inlay_hints",
  "document_colors",
  "format_document",
  "format_range",
  "format_on_type",
  "prepare_rename",
  "rename",
  "code_actions",
  "apply"
];
var LspOperationNameSchema = Type.Unsafe({
  type: "string",
  enum: [...LSP_OPERATION_NAMES]
});
var MutationPreviewOperationNames = [
  "format_document",
  "format_range",
  "format_on_type",
  "rename",
  "code_actions"
];
var MutationPreviewOperationNameSchema = Type.Unsafe({
  type: "string",
  enum: [...MutationPreviewOperationNames]
});
var LineSchema = Type.Integer({ minimum: 1, description: "1-based" });
var CharacterSchema = Type.Integer({ minimum: 1, description: "1-based Unicode code point" });
var OneBasedPositionSchema = Type.Object(
  { line: LineSchema, character: CharacterSchema },
  { additionalProperties: false }
);
var OneBasedRangeSchema = Type.Object(
  {
    start: OneBasedPositionSchema,
    end: OneBasedPositionSchema
  },
  { additionalProperties: false }
);
var FilePathSchema = Type.String({ minLength: 1 });
var RootAnchorPathSchema = Type.String({
  minLength: 1,
  description: "Any file in the workspace; selects the matching servers and their roots"
});
var ServerIdSchema = Type.String({ minLength: 1 });
var DEFAULT_LSP_ITEM_LIMIT = 50;
var ItemLimitSchema = Type.Optional(
  Type.Integer({
    minimum: 1,
    description: `Most items per server (default ${DEFAULT_LSP_ITEM_LIMIT})`
  })
);
var DEFAULT_LSP_DOCUMENT_SYMBOL_DEPTH = 1;
var LSP_MEMBER_CONTAINER_SYMBOL_KINDS = {
  class: 5,
  interface: 11,
  enum: 10,
  namespace: 3,
  module: 2,
  package: 4,
  object: 19,
  struct: 23
};
var MEMBER_CONTAINER_NAMES = Object.keys(LSP_MEMBER_CONTAINER_SYMBOL_KINDS);
var DocumentSymbolDepthSchema = Type.Union([Type.Integer({ minimum: 1 }), Type.Literal("all")], {
  description: `Levels of nested symbols to list (default ${DEFAULT_LSP_DOCUMENT_SYMBOL_DEPTH}): top-level declarations plus the members of ${MEMBER_CONTAINER_NAMES.slice(0, -1).join(", ")}, and ${MEMBER_CONTAINER_NAMES.at(-1)} symbols, without locals, return-object properties, or callbacks inside function, method, or variable bodies, and without import bindings. Each further level adds one level inside those bodies; "all" lists the full tree with import bindings`
});
var OptionalServerIdSchema = Type.Optional(ServerIdSchema);
var FormattingOptionsSchema = {
  tab_size: Type.Integer({ minimum: 1 }),
  insert_spaces: Type.Boolean(),
  trim_trailing_whitespace: Type.Optional(Type.Boolean()),
  insert_final_newline: Type.Optional(Type.Boolean()),
  trim_final_newlines: Type.Optional(Type.Boolean())
};
var AbsolutePathSchema = Type.String({
  minLength: 1,
  pattern: "^(?:/|[A-Za-z]:[\\\\/])"
});
var MutationManifestEntrySchema = Type.Union([
  Type.Object(
    {
      operation: Type.Literal("create"),
      path: AbsolutePathSchema
    },
    { additionalProperties: false }
  ),
  Type.Object(
    {
      operation: Type.Literal("modify"),
      path: AbsolutePathSchema
    },
    { additionalProperties: false }
  ),
  Type.Object(
    {
      operation: Type.Literal("delete"),
      path: AbsolutePathSchema
    },
    { additionalProperties: false }
  ),
  Type.Object(
    {
      operation: Type.Literal("rename"),
      path: AbsolutePathSchema,
      destination_path: AbsolutePathSchema
    },
    { additionalProperties: false }
  )
]);
var MutationManifestSchema = Type.Array(MutationManifestEntrySchema);
function fileParametersSchema() {
  return Type.Object(
    { file_path: FilePathSchema, server_id: OptionalServerIdSchema },
    { additionalProperties: false }
  );
}
function positionParametersSchema() {
  return Type.Object(
    {
      file_path: FilePathSchema,
      line: LineSchema,
      character: CharacterSchema,
      server_id: OptionalServerIdSchema
    },
    { additionalProperties: false }
  );
}
function serverParametersSchema() {
  return Type.Object(
    { server_id: ServerIdSchema, file_path: RootAnchorPathSchema },
    { additionalProperties: false }
  );
}
var LspOperationParametersSchemas = {
  status: Type.Object(
    {
      all: Type.Optional(
        Type.Boolean({
          description: "List every configured Server Definition, in the text and in the structured result; by default only Server Instances (running, starting, unavailable, stopped) and disabled Server Definitions are listed and the other Server Definitions are counted"
        })
      )
    },
    { additionalProperties: false }
  ),
  capabilities: serverParametersSchema(),
  restart: serverParametersSchema(),
  diagnostics: fileParametersSchema(),
  workspace_diagnostics: Type.Object(
    { file_path: RootAnchorPathSchema, server_id: OptionalServerIdSchema },
    { additionalProperties: false }
  ),
  completion: Type.Object(
    {
      file_path: FilePathSchema,
      line: LineSchema,
      character: CharacterSchema,
      prefix: Type.Optional(
        Type.String({
          description: 'Keep items starting with this, ignoring case; defaults to the identifier before the position, and "" keeps all'
        })
      ),
      limit: ItemLimitSchema,
      server_id: OptionalServerIdSchema
    },
    { additionalProperties: false }
  ),
  hover: positionParametersSchema(),
  signature_help: positionParametersSchema(),
  declaration: positionParametersSchema(),
  goto_definition: positionParametersSchema(),
  goto_type_definition: positionParametersSchema(),
  goto_implementation: positionParametersSchema(),
  find_references: Type.Object(
    {
      file_path: FilePathSchema,
      line: LineSchema,
      character: CharacterSchema,
      include_declaration: Type.Optional(Type.Boolean()),
      server_id: OptionalServerIdSchema
    },
    { additionalProperties: false }
  ),
  document_highlights: positionParametersSchema(),
  document_symbols: Type.Object(
    {
      file_path: FilePathSchema,
      depth: Type.Optional(DocumentSymbolDepthSchema),
      server_id: OptionalServerIdSchema
    },
    { additionalProperties: false }
  ),
  workspace_symbols: Type.Object(
    {
      query: Type.String(),
      file_path: RootAnchorPathSchema,
      limit: ItemLimitSchema,
      server_id: OptionalServerIdSchema
    },
    { additionalProperties: false }
  ),
  document_links: fileParametersSchema(),
  call_hierarchy: positionParametersSchema(),
  incoming_calls: positionParametersSchema(),
  outgoing_calls: positionParametersSchema(),
  type_hierarchy: positionParametersSchema(),
  supertypes: positionParametersSchema(),
  subtypes: positionParametersSchema(),
  selection_ranges: Type.Object(
    {
      file_path: FilePathSchema,
      positions: Type.Array(OneBasedPositionSchema, { minItems: 1 }),
      server_id: OptionalServerIdSchema
    },
    { additionalProperties: false }
  ),
  folding_ranges: fileParametersSchema(),
  code_lenses: fileParametersSchema(),
  inlay_hints: Type.Object(
    {
      file_path: FilePathSchema,
      range: OneBasedRangeSchema,
      server_id: OptionalServerIdSchema
    },
    { additionalProperties: false }
  ),
  document_colors: fileParametersSchema(),
  format_document: Type.Object(
    {
      file_path: FilePathSchema,
      server_id: OptionalServerIdSchema,
      ...FormattingOptionsSchema
    },
    { additionalProperties: false }
  ),
  format_range: Type.Object(
    {
      file_path: FilePathSchema,
      range: OneBasedRangeSchema,
      server_id: OptionalServerIdSchema,
      ...FormattingOptionsSchema
    },
    { additionalProperties: false }
  ),
  format_on_type: Type.Object(
    {
      file_path: FilePathSchema,
      line: LineSchema,
      character: CharacterSchema,
      trigger_character: Type.String({ minLength: 1 }),
      server_id: OptionalServerIdSchema,
      ...FormattingOptionsSchema
    },
    { additionalProperties: false }
  ),
  prepare_rename: positionParametersSchema(),
  rename: Type.Object(
    {
      file_path: FilePathSchema,
      line: LineSchema,
      character: CharacterSchema,
      new_name: Type.String({ minLength: 1 }),
      server_id: OptionalServerIdSchema
    },
    { additionalProperties: false }
  ),
  code_actions: Type.Object(
    {
      file_path: FilePathSchema,
      range: OneBasedRangeSchema,
      only_kinds: Type.Optional(Type.Array(Type.String({ minLength: 1 }), { minItems: 1 })),
      server_id: OptionalServerIdSchema
    },
    { additionalProperties: false }
  ),
  apply: Type.Object(
    {
      preview_id: Type.String({ minLength: 1 }),
      mutation_manifest: Type.Optional(
        Type.Array(MutationManifestEntrySchema, {
          description: "Set from the preview before the call runs; a supplied value is replaced"
        })
      )
    },
    { additionalProperties: false }
  )
};
function lspToolName(operation) {
  return `lsp_${operation}`;
}
var LEGACY_LSP_TOOL_NAME = "lsp";
var LSP_RESULT_TOOL_NAMES = /* @__PURE__ */ new Set([
  LEGACY_LSP_TOOL_NAME,
  ...LSP_OPERATION_NAMES.map(lspToolName)
]);
var LSP_APPLY_RESULT_TOOL_NAMES = /* @__PURE__ */ new Set([
  LEGACY_LSP_TOOL_NAME,
  lspToolName("apply")
]);
var ServerOperationOutcomeSchema = Type.Object(
  {
    server_id: ServerIdSchema,
    outcome: Type.Union([
      Type.Literal("success"),
      Type.Literal("unavailable"),
      Type.Literal("timeout"),
      Type.Literal("unsupported"),
      Type.Literal("error")
    ]),
    message: Type.Optional(Type.String({ minLength: 1 }))
  },
  { additionalProperties: false }
);
var MissingFileSnapshotSchema = Type.Object(
  { kind: Type.Literal("missing") },
  { additionalProperties: false }
);
var RegularFileSnapshotSchema = Type.Object(
  {
    kind: Type.Literal("file"),
    content_base64: Type.String(),
    mode: Type.Integer({ minimum: 0 })
  },
  { additionalProperties: false }
);
var SymlinkSnapshotSchema = Type.Object(
  {
    kind: Type.Literal("symlink"),
    link_target: Type.String(),
    mode: Type.Integer({ minimum: 0 })
  },
  { additionalProperties: false }
);
var FileSnapshotSchema = Type.Union([
  MissingFileSnapshotSchema,
  RegularFileSnapshotSchema,
  SymlinkSnapshotSchema
]);
var ExistingFileSnapshotSchema = Type.Union([
  RegularFileSnapshotSchema,
  SymlinkSnapshotSchema
]);
var WorkspaceEditOperationSchema = Type.Union([
  Type.Object(
    {
      kind: Type.Literal("modify"),
      named_path: AbsolutePathSchema,
      path: AbsolutePathSchema,
      named_before: FileSnapshotSchema,
      before: ExistingFileSnapshotSchema,
      after_base64: Type.String(),
      mode: Type.Integer({ minimum: 0 })
    },
    { additionalProperties: false }
  ),
  Type.Object(
    {
      kind: Type.Literal("create"),
      named_path: AbsolutePathSchema,
      before: FileSnapshotSchema,
      after_base64: Type.String(),
      mode: Type.Integer({ minimum: 0 })
    },
    { additionalProperties: false }
  ),
  Type.Object(
    {
      kind: Type.Literal("delete"),
      named_path: AbsolutePathSchema,
      before: ExistingFileSnapshotSchema
    },
    { additionalProperties: false }
  ),
  Type.Object(
    {
      kind: Type.Literal("rename"),
      named_path: AbsolutePathSchema,
      destination_path: AbsolutePathSchema,
      before: ExistingFileSnapshotSchema,
      destination_before: FileSnapshotSchema
    },
    { additionalProperties: false }
  )
]);
var LspWorkspaceEditPreviewRecordSchema = Type.Object(
  {
    kind: Type.Literal("workspace_edit_preview"),
    preview_id: Type.String({ minLength: 1 }),
    server_id: ServerIdSchema,
    summary: Type.String(),
    state: Type.Union([Type.Literal("available"), Type.Literal("applied")]),
    operations: Type.Array(WorkspaceEditOperationSchema)
  },
  { additionalProperties: false }
);
var LspToolOperationDetailsSchema = Type.Object(
  {
    kind: Type.Literal("operation"),
    operation: LspOperationNameSchema,
    server_outcomes: Type.Array(ServerOperationOutcomeSchema),
    preview_records: Type.Optional(Type.Array(LspWorkspaceEditPreviewRecordSchema)),
    spill_path: Type.Optional(AbsolutePathSchema),
    /** Item count for transcript rendering when the model-visible text is not JSON. */
    result_count: Type.Optional(Type.Integer({ minimum: 0 }))
  },
  { additionalProperties: false }
);
var WorkspaceEditPreviewDetailsSchema = Type.Object(
  {
    kind: Type.Literal("workspace_edit_preview"),
    preview_id: Type.String({ minLength: 1 }),
    operation: MutationPreviewOperationNameSchema,
    summary: Type.String(),
    mutation_manifest: MutationManifestSchema,
    preview_record: LspWorkspaceEditPreviewRecordSchema,
    preview_records: Type.Optional(Type.Array(LspWorkspaceEditPreviewRecordSchema)),
    state: Type.Union([Type.Literal("available"), Type.Literal("applied")])
  },
  { additionalProperties: false }
);
var WorkspaceEditApplyDetailsSchema = Type.Object(
  {
    kind: Type.Literal("workspace_edit_apply"),
    preview_id: Type.String({ minLength: 1 }),
    mutation_manifest: MutationManifestSchema,
    changed_paths: Type.Array(AbsolutePathSchema),
    preview_records: Type.Optional(Type.Array(LspWorkspaceEditPreviewRecordSchema)),
    state: Type.Union([Type.Literal("applied"), Type.Literal("partial_failure")])
  },
  { additionalProperties: false }
);
var LspToolResultDetailsSchema = Type.Union([
  LspToolOperationDetailsSchema,
  WorkspaceEditPreviewDetailsSchema,
  WorkspaceEditApplyDetailsSchema
]);
var StructuredResultEnvelope = {
  truncated: Type.Boolean(),
  structured_truncated: Type.Boolean(),
  spill_path: Type.Optional(Type.String()),
  server_preview_ids: Type.Optional(Type.Array(Type.String()))
};
var MutationManifestOutputSchema = Type.Array(
  Type.Object({
    operation: Type.Union([
      Type.Literal("create"),
      Type.Literal("modify"),
      Type.Literal("delete"),
      Type.Literal("rename")
    ]),
    path: Type.String(),
    destination_path: Type.Optional(Type.String())
  })
);
var LspPlainReadOutputSchema = Type.Object({
  results: Type.Array(
    Type.Object({
      server_id: Type.String(),
      root_path: Type.String(),
      value: Type.Unknown()
    })
  ),
  warnings: Type.Array(Type.String()),
  ...StructuredResultEnvelope
});
var LspReadOutputSchema = Type.Object({
  results: Type.Array(
    Type.Object({
      server_id: Type.String(),
      root_path: Type.String(),
      value: Type.Unknown(),
      prefix: Type.Optional(
        Type.String({ description: "The prefix completions were filtered by" })
      ),
      omitted: Type.Optional(
        Type.Integer({
          minimum: 0,
          description: "Matching items left out by the limit, or the nested symbols and import bindings left out of a document outline"
        })
      ),
      omitted_imports: Type.Optional(
        Type.Integer({
          minimum: 0,
          description: "The part of `omitted` that is import bindings, left out of a document outline"
        })
      )
    })
  ),
  warnings: Type.Array(Type.String()),
  ...StructuredResultEnvelope
});
var PositionOutputProperty = Type.Object(
  {
    path: Type.String(),
    line: Type.Integer({ minimum: 1 }),
    character: Type.Integer({ minimum: 1 }),
    token: Type.Optional(Type.String()),
    line_text: Type.String()
  },
  // Descriptions stay short: every position tool's script declaration repeats this shape.
  { description: "Requested position" }
);
var LspPositionReadOutputSchema = Type.Object({
  position: PositionOutputProperty,
  results: LspPlainReadOutputSchema.properties.results,
  warnings: LspPlainReadOutputSchema.properties.warnings,
  ...StructuredResultEnvelope
});
var LspPositionItemListOutputSchema = Type.Object({
  position: PositionOutputProperty,
  results: LspReadOutputSchema.properties.results,
  warnings: LspReadOutputSchema.properties.warnings,
  ...StructuredResultEnvelope
});
var LspStatusOutputSchema = Type.Object({
  servers: Type.Array(
    Type.Object({
      server_id: Type.String(),
      state: Type.Union([
        Type.Literal("configured"),
        Type.Literal("disabled"),
        Type.Literal("running"),
        Type.Literal("starting"),
        Type.Literal("stopped"),
        Type.Literal("unavailable")
      ]),
      root_path: Type.Optional(Type.String()),
      error: Type.Optional(Type.String()),
      shared_with_sessions: Type.Optional(
        Type.Integer({
          minimum: 1,
          description: "How many other Pi sessions in this process lease the running Server Instance; absent when none"
        })
      ),
      languages: Type.Record(Type.String(), Type.Array(Type.String()), {
        description: "Language ID to the file extensions and exact filenames the Server Definition handles"
      })
    }),
    {
      description: "Server Instances and Disabled Server Definitions, or every configured server with all: true"
    }
  ),
  not_started: Type.Integer({
    minimum: 0,
    description: "Enabled Server Definitions without a Server Instance, left out of servers (0 with all: true)"
  }),
  warnings: Type.Array(Type.String()),
  ...StructuredResultEnvelope
});
var LspServerOutputSchema = Type.Object({
  server_id: Type.String(),
  root_path: Type.String(),
  capabilities: Type.Unknown(),
  ...StructuredResultEnvelope
});
var LspPreviewOutputSchema = Type.Object({
  preview_id: Type.String(),
  server_id: Type.String(),
  root_path: Type.String(),
  summary: Type.String(),
  warnings: Type.Array(Type.String()),
  mutation_manifest: MutationManifestOutputSchema,
  ...StructuredResultEnvelope
});
var LspCodeActionsOutputSchema = Type.Object({
  actions: Type.Array(
    Type.Object({
      server_id: Type.String(),
      title: Type.Optional(Type.String()),
      kind: Type.Optional(Type.String()),
      applicable: Type.Boolean(),
      preview_id: Type.Optional(Type.String()),
      summary: Type.Optional(Type.String()),
      mutation_manifest: Type.Optional(MutationManifestOutputSchema),
      command: Type.Optional(Type.Unknown()),
      error: Type.Optional(Type.String())
    })
  ),
  warnings: Type.Array(Type.String()),
  ...StructuredResultEnvelope
});
var LspApplyOutputSchema = Type.Object({
  preview_id: Type.String(),
  state: Type.Union([Type.Literal("applied"), Type.Literal("partial_failure")]),
  changed_paths: Type.Array(Type.String()),
  mutation_manifest: MutationManifestOutputSchema,
  changed_files: Type.Optional(Type.Array(Type.String())),
  created_files: Type.Optional(Type.Array(Type.String())),
  deleted_files: Type.Optional(Type.Array(Type.String())),
  moved_files: Type.Optional(Type.Array(Type.Object({ from: Type.String(), to: Type.String() }))),
  message: Type.Optional(Type.String()),
  ...StructuredResultEnvelope
});

// src/lsp-input-error.ts
var LspInputError = class extends Error {
  /** Construct an input error whose message is prefixed with `Pi LSP:`. */
  constructor(message) {
    super(message.startsWith("Pi LSP:") ? message : `Pi LSP: ${message}`);
  }
};

// src/lsp-position-encoding.ts
function compareLspProtocolPositions(left, right) {
  return left.line === right.line ? left.character - right.character : left.line - right.line;
}
function normalizeLspPositionEncoding(encoding) {
  if (encoding === "utf-8") return "utf-8";
  if (encoding === "utf-32") return "utf-32";
  return "utf-16";
}
function documentLines(documentText) {
  return documentText.split(/\r\n|[\n\r]/u);
}
function requireNonNegativeInteger(value, description) {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new Error(`Pi LSP: ${description} must be a non-negative integer`);
  }
}
function countOf(count, noun) {
  return `${count} ${noun}${count === 1 ? "" : "s"}`;
}
function requireCodePointLine(lines, position) {
  if (!Number.isSafeInteger(position.line) || position.line < 1) {
    throw new LspInputError("code-point position line must be a positive integer");
  }
  if (!Number.isSafeInteger(position.character) || position.character < 1) {
    throw new LspInputError("code-point position character must be a positive integer");
  }
  const line = lines[position.line - 1];
  if (line === void 0) {
    throw new LspInputError(
      `line ${position.line} is past the end of the document, which has ${countOf(lines.length, "line")} (line must be at most ${lines.length})`
    );
  }
  return Array.from(line);
}
function requireProtocolLine(lines, position) {
  requireNonNegativeInteger(position.line, "protocol position line");
  requireNonNegativeInteger(position.character, "protocol position character");
  const line = lines[position.line];
  if (line === void 0) {
    throw new Error("Pi LSP: protocol position line exceeds document length");
  }
  return line;
}
function encodedCharacterLength(character, encoding) {
  switch (encoding) {
    case "utf-8":
      return Buffer.byteLength(character, "utf8");
    case "utf-16":
      return character.length;
    case "utf-32":
      return 1;
  }
}
function measureLspPositionCharacters(text, encoding) {
  if (encoding === "utf-8") return Buffer.byteLength(text, "utf8");
  if (encoding === "utf-32") return Array.from(text).length;
  return text.length;
}
function protocolCharacterOffset(characters, codePointOffset, encoding) {
  let encodedOffset = 0;
  for (const character of characters.slice(0, codePointOffset)) {
    encodedOffset += encodedCharacterLength(character, encoding);
  }
  return encodedOffset;
}
function convertLspCodePointPosition(documentText, position, encoding) {
  const characters = requireCodePointLine(documentLines(documentText), position);
  const codePointOffset = position.character - 1;
  if (codePointOffset > characters.length) {
    throw new LspInputError(
      `character ${position.character} is past the end of line ${position.line}, which has ${countOf(characters.length, "character")} (character must be at most ${characters.length + 1})`
    );
  }
  return {
    line: position.line - 1,
    character: protocolCharacterOffset(characters, codePointOffset, encoding)
  };
}
function convertLspProtocolPosition(documentText, position, encoding) {
  return convertLspProtocolLinePosition(documentLines(documentText), position, encoding);
}
function locateProtocolCharacter(characters, protocolCharacter, encoding) {
  let encodedOffset = 0;
  for (let codePointOffset = 0; codePointOffset <= characters.length; codePointOffset++) {
    if (encodedOffset === protocolCharacter) return { kind: "exact", codePointOffset };
    const character = characters[codePointOffset];
    if (character === void 0) break;
    encodedOffset += encodedCharacterLength(character, encoding);
    if (encodedOffset > protocolCharacter) return { kind: "splits-character", codePointOffset };
  }
  return { kind: "past-line-end", codePointCount: characters.length };
}
function convertLspProtocolLinePosition(lines, position, encoding) {
  const line = requireProtocolLine(lines, position);
  const offset = locateProtocolCharacter(Array.from(line), position.character, encoding);
  switch (offset.kind) {
    case "exact":
      return { line: position.line + 1, character: offset.codePointOffset + 1 };
    case "splits-character":
      throw new Error("Pi LSP: protocol position splits a Unicode character");
    case "past-line-end":
      throw new Error("Pi LSP: protocol position character exceeds line length");
  }
}
function convertLspResultPosition(lines, position, encoding) {
  const line = lines[position.line];
  if (line === void 0) {
    return {
      position: { line: position.line + 1, character: position.character + 1 },
      stale: true
    };
  }
  const offset = locateProtocolCharacter(Array.from(line), position.character, encoding);
  switch (offset.kind) {
    case "exact":
      return {
        position: { line: position.line + 1, character: offset.codePointOffset + 1 },
        stale: false
      };
    case "splits-character":
      return {
        position: { line: position.line + 1, character: offset.codePointOffset + 1 },
        stale: true
      };
    case "past-line-end":
      return {
        position: { line: position.line + 1, character: offset.codePointCount + 1 },
        stale: false
      };
  }
}

// src/lsp-pre-edit-baseline.ts
function trimmedLineText(texts, path, line) {
  const text = texts.get(path);
  return text === void 0 ? "" : documentLines(text)[line - 1]?.trim() ?? "";
}
function findingKey(diagnostic, texts) {
  const { serverId, severity, code, message, path, line } = diagnostic;
  return [serverId, severity, code ?? "", message, trimmedLineText(texts, path, line)].join(
    "\0"
  );
}
function preEditBaselineOf(path, outcomes, text) {
  const texts = /* @__PURE__ */ new Map([[path, text]]);
  const servers = /* @__PURE__ */ new Map();
  for (const outcome of outcomes) {
    if (outcome.kind === "no_diagnostics" && outcome.path === path) {
      if (outcome.serverId !== void 0 && !servers.has(outcome.serverId)) {
        servers.set(outcome.serverId, /* @__PURE__ */ new Map());
      }
    } else if (outcome.kind === "diagnostic" && outcome.diagnostic.path === path) {
      const counts = servers.get(outcome.diagnostic.serverId) ?? /* @__PURE__ */ new Map();
      const key = findingKey(outcome.diagnostic, texts);
      counts.set(key, (counts.get(key) ?? 0) + 1);
      servers.set(outcome.diagnostic.serverId, counts);
    }
  }
  return { path, servers };
}
function compareWithPreEditBaseline(baseline, outcomes, texts) {
  const remaining = new Map(
    [...baseline.servers].map(([serverId, counts]) => [serverId, new Map(counts)])
  );
  const unbaselined = /* @__PURE__ */ new Set();
  const compared = [];
  for (const outcome of outcomes) {
    if (outcome.kind !== "diagnostic" || outcome.diagnostic.path !== baseline.path) {
      compared.push(outcome);
      continue;
    }
    const { diagnostic } = outcome;
    const counts = remaining.get(diagnostic.serverId);
    if (counts === void 0) {
      unbaselined.add(diagnostic.serverId);
      compared.push(outcome);
      continue;
    }
    const key = findingKey(diagnostic, texts);
    const left = counts.get(key) ?? 0;
    if (left === 0) {
      compared.push(outcome);
      continue;
    }
    counts.set(key, left - 1);
    compared.push({
      kind: "unchanged",
      path: diagnostic.path,
      severity: diagnostic.severity,
      count: 1
    });
  }
  for (const serverId of unbaselined) {
    compared.push({ kind: "no_baseline", path: baseline.path, serverId });
  }
  return compared;
}

// src/lsp-dependent-diagnostics.ts
var MAX_DEPENDENT_FILES = 20;
var MAX_TOUCHED_DECLARATIONS = 10;
var DEPENDENT_SCAN_BUDGET_MS = 2e4;
var ERROR_SEVERITY = 1;
var MEMBER_CONTAINER_KINDS = new Set(
  Object.values(LSP_MEMBER_CONTAINER_SYMBOL_KINDS)
);
var PositionSchema = Type2.Object({ line: Type2.Number(), character: Type2.Number() });
var RangeSchema = Type2.Object({ start: PositionSchema, end: PositionSchema });
var DocumentSymbolSchema = Type2.Object({
  kind: Type2.Number(),
  range: RangeSchema,
  selectionRange: RangeSchema,
  children: Type2.Optional(Type2.Unknown())
});
var LocationSchema = Type2.Object({ uri: Type2.String() });
var EditsInputSchema = Type2.Object({
  path: Type2.String(),
  edits: Type2.Optional(
    Type2.Array(Type2.Object({ oldText: Type2.String() }, { additionalProperties: true }))
  )
});
function lineAt(text, offset) {
  let line = 0;
  for (let index = text.indexOf("\n"); index !== -1 && index < offset; ) {
    line++;
    index = text.indexOf("\n", index + 1);
  }
  return line;
}
function touchedLinesOfEdit(text, input) {
  if (!Value.Check(EditsInputSchema, input) || input.edits === void 0) return "all";
  const ranges = [];
  for (const { oldText } of input.edits) {
    const offset = text.indexOf(oldText);
    if (oldText === "" || offset === -1) return "all";
    ranges.push({ start: lineAt(text, offset), end: lineAt(text, offset + oldText.length) });
  }
  return ranges.length === 0 ? "all" : ranges;
}
function intersects(touched, start, end) {
  return touched === "all" || touched.some((range) => range.start <= end && start <= range.end);
}
function touchedDeclarationPositions(symbols, touched, limit = MAX_TOUCHED_DECLARATIONS) {
  const positions = [];
  const visit = (list) => {
    if (!Array.isArray(list)) return;
    for (const symbol of list) {
      if (positions.length >= limit) return;
      if (!Value.Check(DocumentSymbolSchema, symbol)) continue;
      const { range, selectionRange } = symbol;
      if (!intersects(touched, range.start.line, range.end.line)) continue;
      if (MEMBER_CONTAINER_KINDS.has(symbol.kind)) {
        if (intersects(touched, range.start.line, selectionRange.end.line)) {
          positions.push(selectionRange.start);
        }
        visit(symbol.children);
      } else positions.push(selectionRange.start);
    }
  };
  visit(symbols);
  return positions.slice(0, limit);
}
function referencedFilePaths(locations, exclude) {
  if (!Array.isArray(locations)) return [];
  const paths = /* @__PURE__ */ new Set();
  for (const location of locations) {
    if (!Value.Check(LocationSchema, location) || !location.uri.startsWith("file:")) continue;
    let path;
    try {
      path = fileURLToPath(location.uri);
    } catch {
      continue;
    }
    if (!exclude.has(path) && !path.split(/[\\/]/u).includes("node_modules")) paths.add(path);
  }
  return [...paths];
}
function capDependentFiles(paths) {
  const sorted = paths.toSorted((left, right) => left.localeCompare(right));
  return {
    files: sorted.slice(0, MAX_DEPENDENT_FILES),
    omittedFiles: Math.max(0, sorted.length - MAX_DEPENDENT_FILES)
  };
}
function errorKey(outcome, texts) {
  if (outcome.kind !== "diagnostic" || outcome.diagnostic.severity !== ERROR_SEVERITY) {
    return void 0;
  }
  return findingKey(outcome.diagnostic, texts);
}
function groupErrorKeys(paths, outcomes, texts) {
  const keys = /* @__PURE__ */ new Map();
  const failed = /* @__PURE__ */ new Set();
  for (const path of paths) keys.set(path, /* @__PURE__ */ new Set());
  for (const outcome of outcomes) {
    if (outcome.kind === "timeout" || outcome.kind === "unavailable_server") {
      failed.add(outcome.path);
    } else if (outcome.kind === "diagnostic") {
      const key = errorKey(outcome, texts);
      if (key !== void 0) keys.get(outcome.diagnostic.path)?.add(key);
    }
  }
  for (const path of failed) keys.delete(path);
  return { keys, unchecked: failed.size };
}
function newDependentErrors(baseline, paths, outcomes, texts) {
  const { unchecked } = groupErrorKeys(paths, outcomes, texts);
  const fresh = [];
  for (const outcome of outcomes) {
    const key = errorKey(outcome, texts);
    if (key === void 0 || outcome.kind !== "diagnostic" || baseline.errorKeys.get(outcome.diagnostic.path)?.has(key) === true) {
      continue;
    }
    fresh.push({ kind: "diagnostic", diagnostic: { ...outcome.diagnostic, dependent: true } });
  }
  return {
    outcomes: fresh,
    omittedFiles: baseline.omittedFiles + unchecked,
    scanTimedOut: baseline.scanTimedOut
  };
}

// src/lsp-post-edit-diagnostics.ts
import { Type as Type6 } from "typebox";
import { Value as Value6 } from "typebox/value";

// src/lsp-location-text.ts
import { readFile as readFile2 } from "node:fs/promises";
import { isAbsolute as isAbsolute2, relative as relative2, sep as sep2 } from "node:path";
import { Type as Type5 } from "typebox";
import { Value as Value5 } from "typebox/value";

// src/lsp-server-manager.ts
import { readdir } from "node:fs/promises";
import { homedir } from "node:os";
import {
  basename,
  dirname as dirname2,
  extname,
  isAbsolute,
  matchesGlob,
  relative,
  resolve as resolve2,
  sep
} from "node:path";

// src/lsp-server-client.ts
var import_cross_spawn = __toESM(require_cross_spawn(), 1);
var import_node = __toESM(require_main2(), 1);
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath as fileURLToPath2, pathToFileURL } from "node:url";
import { Type as Type3 } from "typebox";
import { Value as Value2 } from "typebox/value";

// src/lsp-request-limiter.ts
var LspRequestLimiter = class {
  /**
   * @param limit Most tasks running at once; a positive integer.
   * @param abortError Builds the rejection for a task whose signal aborts before it starts.
   */
  constructor(limit, abortError2) {
    this.limit = limit;
    this.abortError = abortError2;
  }
  limit;
  abortError;
  active = 0;
  queue = [];
  /** Wait for a free slot, run `task` holding it, and release it when `task` settles. */
  async run(signal, task) {
    await this.acquire(signal);
    try {
      return await task();
    } finally {
      this.release();
    }
  }
  acquire(signal) {
    if (signal?.aborted === true) return Promise.reject(this.abortError());
    if (this.active < this.limit) {
      this.active++;
      return Promise.resolve();
    }
    return new Promise((resolve7, reject) => {
      const request = {
        grant: () => {
          signal?.removeEventListener("abort", onAbort);
          resolve7();
        }
      };
      const onAbort = () => {
        this.queue.splice(this.queue.indexOf(request), 1);
        reject(this.abortError());
      };
      signal?.addEventListener("abort", onAbort, { once: true });
      this.queue.push(request);
    });
  }
  release() {
    const next = this.queue.shift();
    if (next === void 0) this.active--;
    else next.grant();
  }
};

// src/lsp-server-client.ts
var MAX_OPEN_DOCUMENTS = 100;
var MAX_STDERR_BYTES = 1024 * 1024;
var UTF8_DECODER = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
var LspConfigurationObjectSchema = Type3.Record(Type3.String(), Type3.Unknown());
var TextDocumentSyncOptionsSchema = Type3.Object(
  {
    change: Type3.Optional(Type3.Integer()),
    save: Type3.Optional(
      Type3.Union([Type3.Boolean(), Type3.Object({}, { additionalProperties: true })])
    )
  },
  { additionalProperties: true }
);
var DynamicDiagnosticRegistrationSchema = Type3.Object(
  {
    identifier: Type3.Optional(Type3.String()),
    workspaceDiagnostics: Type3.Optional(Type3.Boolean())
  },
  { additionalProperties: true }
);
var PrepareRenameProviderSchema = Type3.Object(
  { prepareProvider: Type3.Literal(true) },
  { additionalProperties: true }
);
var DOCUMENTATION_FORMATS = [import_node.MarkupKind.Markdown, import_node.MarkupKind.PlainText];
var LspServerClientError = class extends Error {
  /** Construct a stable Pi LSP client failure that always names the stderr capture. */
  constructor(kind, serverId, stderrPath, message, options) {
    super(`Pi LSP: ${message} (server ${serverId}; stderr ${stderrPath})`, options);
    this.kind = kind;
    this.serverId = serverId;
    this.stderrPath = stderrPath;
  }
  kind;
  serverId;
  stderrPath;
};
function isProcessWithStdio(childProcess) {
  return childProcess.stdin !== null && childProcess.stdout !== null && childProcess.stderr !== null;
}
function syncKindFromCapabilities(capabilities) {
  const sync = capabilities.textDocumentSync;
  if (!Value2.Check(TextDocumentSyncOptionsSchema, sync)) {
    return sync ?? import_node.TextDocumentSyncKind.None;
  }
  const change = sync.change;
  return change === import_node.TextDocumentSyncKind.Full || change === import_node.TextDocumentSyncKind.Incremental ? change : import_node.TextDocumentSyncKind.None;
}
function serverWantsSave(capabilities) {
  const sync = capabilities.textDocumentSync;
  return Value2.Check(TextDocumentSyncOptionsSchema, sync) && sync.save !== void 0 && sync.save !== false;
}
function protocolLineEndPosition(text, encoding) {
  const lines = documentLines(text);
  const lineText = lines.at(-1) ?? "";
  return {
    line: lines.length - 1,
    character: measureLspPositionCharacters(lineText, encoding)
  };
}
function configurationSectionValue(settings, section) {
  if (section === void 0 || section.length === 0) return settings;
  let current = settings;
  for (const part of section.split(".")) {
    if (!Value2.Check(LspConfigurationObjectSchema, current) || !(part in current)) return null;
    current = current[part] ?? null;
  }
  return current;
}
function appendTail(previous, chunk) {
  const combined = Buffer.concat([previous, chunk]);
  return combined.length <= MAX_STDERR_BYTES ? combined : combined.subarray(combined.length - MAX_STDERR_BYTES);
}
function abortError(options) {
  return new LspServerClientError(
    "cancelled",
    options.serverId,
    options.stderrPath,
    "request cancelled"
  );
}
function timeoutError(options, operation) {
  return new LspServerClientError(
    "timeout",
    options.serverId,
    options.stderrPath,
    `${operation} timed out`
  );
}
var WORKSPACE_WIDE_METHODS = /* @__PURE__ */ new Set([
  "textDocument/references",
  "textDocument/implementation",
  "textDocument/rename",
  "workspace/symbol",
  "callHierarchy/incomingCalls",
  "callHierarchy/outgoingCalls"
]);
function requestBudgetMs(method, timeouts) {
  return WORKSPACE_WIDE_METHODS.has(method) ? Math.max(timeouts.requestMs, timeouts.workspaceRequestMs) : timeouts.requestMs;
}
var LspServerClient = class _LspServerClient {
  constructor(options, childProcess, connection) {
    this.options = options;
    this.childProcess = childProcess;
    this.connection = connection;
    this.terminalErrorPromise = new Promise((resolveTerminalError) => {
      this.resolveTerminalError = resolveTerminalError;
    });
    this.diagnosticsLimiter = new LspRequestLimiter(
      options.maxConcurrentDiagnostics,
      () => abortError(options)
    );
  }
  options;
  childProcess;
  connection;
  capabilitiesValue = {};
  serverInfoValue;
  positionEncodingValue = "utf-16";
  textDocumentSyncKind = import_node.TextDocumentSyncKind.None;
  openDocuments = /* @__PURE__ */ new Map();
  documentSynchronizations = /* @__PURE__ */ new Map();
  pushDiagnostics = /* @__PURE__ */ new Map();
  pullDiagnostics = /* @__PURE__ */ new Map();
  dynamicRegistrations = /* @__PURE__ */ new Map();
  diagnosticWaiters = /* @__PURE__ */ new Map();
  diagnosticsRevision = 0;
  diagnosticsLimiter;
  /** Document version of each URI whose diagnostics wait ended in silence from a push-only server. */
  silentDocumentVersions = /* @__PURE__ */ new Map();
  stderrTail = Buffer.alloc(0);
  stderrWrite = Promise.resolve();
  closing = false;
  closed = false;
  terminalError;
  resolveTerminalError;
  terminalErrorPromise;
  /** Spawn and initialize one configured language server over stdio. */
  static async start(options) {
    await mkdir(dirname(options.stderrPath), { recursive: true, mode: 448 });
    await writeFile(options.stderrPath, "", { mode: 384 });
    if (options.signal?.aborted === true) throw abortError(options);
    const childProcess = (0, import_cross_spawn.default)(options.command, [...options.args], {
      cwd: options.rootPath,
      env: options.environment,
      shell: false,
      stdio: ["pipe", "pipe", "pipe"]
    });
    if (!isProcessWithStdio(childProcess)) {
      childProcess.kill();
      throw new LspServerClientError(
        "spawn",
        options.serverId,
        options.stderrPath,
        "spawn did not provide stdio pipes"
      );
    }
    const connection = (0, import_node.createProtocolConnection)(childProcess.stdout, childProcess.stdin);
    const client = new _LspServerClient(options, childProcess, connection);
    client.bindProcessLifecycle();
    client.bindProtocolHandlers();
    connection.listen();
    try {
      await client.raceBudget(
        client.initialize(),
        options.timeouts.initializeMs,
        import_node.InitializeRequest.method,
        options.signal
      );
      return client;
    } catch (cause) {
      await client.forceStop();
      if (cause instanceof LspServerClientError) throw cause;
      throw new LspServerClientError(
        "initialize",
        options.serverId,
        options.stderrPath,
        "initialization failed",
        { cause }
      );
    }
  }
  /** Child process identifier while the server is running. */
  get processId() {
    return this.childProcess.pid;
  }
  /** Whether the child has not exited and shutdown has not started. */
  get isRunning() {
    return !this.closing && !this.closed && this.childProcess.exitCode === null && this.childProcess.signalCode === null;
  }
  /** Stable configured server ID. */
  get serverId() {
    return this.options.serverId;
  }
  /** Absolute workspace root for this process. */
  get rootPath() {
    return this.options.rootPath;
  }
  /** Server capabilities after initialization plus dynamic registrations. */
  get capabilities() {
    return this.capabilitiesValue;
  }
  /** Optional server implementation name and version returned during initialization. */
  get serverInfo() {
    return this.serverInfoValue;
  }
  /** Position encoding negotiated with the server, defaulting to UTF-16. */
  get positionEncoding() {
    return this.positionEncodingValue;
  }
  /** Session stderr capture path included in every client failure. */
  get stderrPath() {
    return this.options.stderrPath;
  }
  /** Whether a static or dynamically registered LSP method is available. */
  hasCapability(method) {
    if ([...this.dynamicRegistrations.values()].some((registration) => registration.method === method)) {
      return true;
    }
    const capabilities = this.capabilitiesValue;
    switch (method) {
      case "textDocument/completion":
        return capabilities.completionProvider !== void 0;
      case "textDocument/hover":
        return capabilities.hoverProvider !== void 0 && capabilities.hoverProvider !== false;
      case "textDocument/signatureHelp":
        return capabilities.signatureHelpProvider !== void 0;
      case "textDocument/declaration":
        return capabilities.declarationProvider !== void 0 && capabilities.declarationProvider !== false;
      case "textDocument/definition":
        return capabilities.definitionProvider !== void 0 && capabilities.definitionProvider !== false;
      case "textDocument/typeDefinition":
        return capabilities.typeDefinitionProvider !== void 0 && capabilities.typeDefinitionProvider !== false;
      case "textDocument/implementation":
        return capabilities.implementationProvider !== void 0 && capabilities.implementationProvider !== false;
      case "textDocument/references":
        return capabilities.referencesProvider !== void 0 && capabilities.referencesProvider !== false;
      case "textDocument/documentHighlight":
        return capabilities.documentHighlightProvider !== void 0 && capabilities.documentHighlightProvider !== false;
      case "textDocument/documentSymbol":
        return capabilities.documentSymbolProvider !== void 0 && capabilities.documentSymbolProvider !== false;
      case "workspace/symbol":
        return capabilities.workspaceSymbolProvider !== void 0 && capabilities.workspaceSymbolProvider !== false;
      case "textDocument/documentLink":
        return capabilities.documentLinkProvider !== void 0;
      case "textDocument/prepareCallHierarchy":
        return capabilities.callHierarchyProvider !== void 0 && capabilities.callHierarchyProvider !== false;
      case "textDocument/prepareTypeHierarchy":
        return capabilities.typeHierarchyProvider !== void 0 && capabilities.typeHierarchyProvider !== false;
      case "textDocument/selectionRange":
        return capabilities.selectionRangeProvider !== void 0 && capabilities.selectionRangeProvider !== false;
      case "textDocument/foldingRange":
        return capabilities.foldingRangeProvider !== void 0 && capabilities.foldingRangeProvider !== false;
      case "textDocument/codeLens":
        return capabilities.codeLensProvider !== void 0;
      case "textDocument/inlayHint":
        return capabilities.inlayHintProvider !== void 0 && capabilities.inlayHintProvider !== false;
      case "textDocument/documentColor":
        return capabilities.colorProvider !== void 0 && capabilities.colorProvider !== false;
      case "textDocument/formatting":
        return capabilities.documentFormattingProvider !== void 0 && capabilities.documentFormattingProvider !== false;
      case "textDocument/rangeFormatting":
        return capabilities.documentRangeFormattingProvider !== void 0 && capabilities.documentRangeFormattingProvider !== false;
      case "textDocument/onTypeFormatting":
        return capabilities.documentOnTypeFormattingProvider !== void 0;
      case "textDocument/prepareRename":
        return Value2.Check(PrepareRenameProviderSchema, capabilities.renameProvider) || [...this.dynamicRegistrations.values()].some(
          (registration) => registration.method === "textDocument/rename" && Value2.Check(PrepareRenameProviderSchema, registration.registerOptions)
        );
      case "textDocument/rename":
        return capabilities.renameProvider !== void 0 && capabilities.renameProvider !== false;
      case "textDocument/codeAction":
        return capabilities.codeActionProvider !== void 0 && capabilities.codeActionProvider !== false;
      case import_node.DocumentDiagnosticRequest.method:
        return this.documentPullRegistration() !== void 0;
      case import_node.WorkspaceDiagnosticRequest.method:
        return this.workspacePullRegistration() !== void 0;
      default:
        return false;
    }
  }
  /** Send a capability-specific request with the configured timeout and JSON-RPC cancellation. */
  async request(method, parameters, signal) {
    return this.sendRequestWithBudget(
      method,
      parameters,
      requestBudgetMs(method, this.options.timeouts),
      method,
      signal
    );
  }
  /** Open or update a valid UTF-8 file and maintain the 100-document LRU. */
  async synchronizeDocument(filePath, languageId) {
    const absolutePath = resolve(filePath);
    const uri = pathToFileURL(absolutePath).href;
    const activeSynchronization = this.documentSynchronizations.get(uri);
    const waitForActiveSynchronization = activeSynchronization?.then(
      () => void 0,
      () => void 0
    ) ?? Promise.resolve();
    const synchronization = waitForActiveSynchronization.then(
      () => this.synchronizeDocumentOnce(absolutePath, uri, languageId)
    );
    this.documentSynchronizations.set(uri, synchronization);
    try {
      return await synchronization;
    } finally {
      if (this.documentSynchronizations.get(uri) === synchronization) {
        this.documentSynchronizations.delete(uri);
      }
    }
  }
  async synchronizeDocumentOnce(absolutePath, uri, languageId) {
    this.throwIfUnavailable();
    let text;
    try {
      const bytes = await readFile(absolutePath);
      text = UTF8_DECODER.decode(bytes);
    } catch (cause) {
      if (cause instanceof TypeError) {
        throw new LspServerClientError(
          "invalid_utf8",
          this.serverId,
          this.stderrPath,
          `document is not valid UTF-8: ${absolutePath}`,
          { cause }
        );
      }
      throw cause;
    }
    const existing = this.openDocuments.get(uri);
    if (existing?.text === text && existing.languageId === languageId) {
      this.openDocuments.delete(uri);
      this.openDocuments.set(uri, existing);
      return existing;
    }
    this.silentDocumentVersions.delete(uri);
    const next = {
      uri,
      version: (existing?.version ?? 0) + 1,
      text,
      languageId,
      synchronizedRevision: this.diagnosticsRevision
    };
    if (this.textDocumentSyncKind !== import_node.TextDocumentSyncKind.None) {
      if (existing === void 0) {
        await this.connection.sendNotification(import_node.DidOpenTextDocumentNotification.type, {
          textDocument: { uri, languageId, version: next.version, text }
        });
      } else if (existing.text !== text || existing.languageId !== languageId) {
        const contentChanges = this.textDocumentSyncKind === import_node.TextDocumentSyncKind.Incremental ? [
          {
            range: {
              start: { line: 0, character: 0 },
              end: protocolLineEndPosition(existing.text, this.positionEncodingValue)
            },
            text
          }
        ] : [{ text }];
        await this.connection.sendNotification(import_node.DidChangeTextDocumentNotification.type, {
          textDocument: { uri, version: next.version },
          contentChanges
        });
        if (serverWantsSave(this.capabilitiesValue)) {
          await this.connection.sendNotification(import_node.DidSaveTextDocumentNotification.type, {
            textDocument: { uri },
            text
          });
        }
      }
    }
    this.openDocuments.delete(uri);
    this.openDocuments.set(uri, next);
    await this.evictOldDocuments();
    return next;
  }
  /**
   * Absolute paths of the documents this client tracks as synchronized, most recently synchronized
   * last. Documents evicted from the 100-document LRU or closed are not included. A server with
   * `TextDocumentSyncKind.None` is never sent these documents, but they are still listed.
   */
  synchronizedDocumentPaths() {
    return [...this.openDocuments.keys()].map((uri) => fileURLToPath2(uri));
  }
  /** Close an open document if this client currently owns it. */
  async closeDocument(filePath) {
    const uri = pathToFileURL(resolve(filePath)).href;
    if (!this.openDocuments.delete(uri)) return;
    if (this.textDocumentSyncKind !== import_node.TextDocumentSyncKind.None) {
      await this.connection.sendNotification(import_node.DidCloseTextDocumentNotification.type, {
        textDocument: { uri }
      });
    }
    this.pushDiagnostics.delete(uri);
    this.pullDiagnostics.delete(uri);
    this.silentDocumentVersions.delete(uri);
  }
  /**
   * Synchronize a document, then return fresh push or pull diagnostics for its version: a push
   * received since that version was sent (so an unchanged, already-published file answers at
   * once), otherwise a wait. A push for an earlier version never counts, so a caller that just
   * changed a file on disk never receives diagnostics for content the server saw before.
   */
  async documentDiagnostics(filePath, languageId, signal) {
    const document = await this.synchronizeDocument(filePath, languageId);
    return this.awaitDocumentDiagnostics(document, signal);
  }
  /**
   * Return LSP Diagnostics for a synchronized document version: a cached push received since that
   * version was sent, otherwise fresh push or pull diagnostics. A timeout, or a version already
   * superseded by a later synchronization, returns no diagnostics.
   */
  async currentDocumentDiagnostics(document, signal) {
    const open = this.openDocuments.get(document.uri);
    if (open?.version !== document.version) return [];
    const result = await this.awaitDocumentDiagnostics(document, signal);
    return result.diagnostics;
  }
  async awaitDocumentDiagnostics(document, signal) {
    const open = this.openDocuments.get(document.uri);
    const synchronizedRevision = open?.version === document.version ? open.synchronizedRevision : this.diagnosticsRevision;
    const published = this.currentPushDiagnostics(
      document.uri,
      document.version,
      synchronizedRevision
    );
    if (published !== void 0) {
      return { status: "fresh", source: "push", diagnostics: published };
    }
    const registration = this.documentPullRegistration();
    const pushOnly = registration === void 0;
    if (pushOnly && this.silentDocumentVersions.get(document.uri) === document.version) {
      return this.silentWaitResult(pushOnly, true);
    }
    const attempt = new AbortController();
    const attemptSignal = signal === void 0 ? attempt.signal : AbortSignal.any([signal, attempt.signal]);
    const candidates = [
      this.waitForPushDiagnostics(
        document.uri,
        document.version,
        synchronizedRevision,
        attemptSignal
      )
    ];
    if (registration !== void 0) {
      candidates.push(
        this.pullDocumentDiagnostics(document.uri, registration.identifier, attemptSignal)
      );
    }
    try {
      return await Promise.any(candidates);
    } catch (cause) {
      if (cause instanceof LspServerClientError) {
        if (cause.kind === "cancelled") throw cause;
        if (cause.kind === "timeout") return this.rememberSilentWait(document, pushOnly);
      }
      if (cause instanceof AggregateError) {
        const cancellation = cause.errors.find(
          (error) => error instanceof LspServerClientError && error.kind === "cancelled"
        );
        if (cancellation instanceof LspServerClientError) throw cancellation;
        if (cause.errors.length > 0 && cause.errors.every(
          (error) => error instanceof LspServerClientError && error.kind === "timeout"
        )) {
          return this.rememberSilentWait(document, pushOnly);
        }
        const clientError = cause.errors.find((error) => error instanceof LspServerClientError);
        if (clientError instanceof LspServerClientError) throw clientError;
      }
      throw cause;
    } finally {
      attempt.abort();
    }
  }
  silentWaitResult(pushOnly, remembered) {
    return {
      status: "timeout",
      diagnostics: [],
      waitedMs: this.options.timeouts.diagnosticsMs,
      pushOnly,
      remembered
    };
  }
  /**
   * Report a diagnostics wait that ended in silence. A push-only server publishes nothing for a
   * clean file, so its silence stays valid for this document version until a push, a change, a
   * close, or a Server Instance restart; a pull-capable server's timeout may be a stalled request
   * and is retried.
   */
  rememberSilentWait(document, pushOnly) {
    if (pushOnly && this.openDocuments.get(document.uri)?.version === document.version) {
      this.silentDocumentVersions.set(document.uri, document.version);
    }
    return this.silentWaitResult(pushOnly, false);
  }
  /**
   * Pull workspace diagnostics when supported, otherwise return cached push diagnostics only. A
   * document-pull server whose push cache covers no open document is reported as `unsupported`,
   * so an empty cache never reads as a clean workspace.
   */
  async workspaceDiagnostics(signal) {
    const registration = this.workspacePullRegistration();
    if (registration === void 0) {
      const diagnosticsByUri = new Map(
        [...this.pushDiagnostics].filter(([uri, state]) => {
          const open = this.openDocuments.get(uri);
          return open !== void 0 && (state.version === void 0 || state.version === open.version);
        }).map(([uri, state]) => [uri, state.diagnostics])
      );
      if (this.documentPullRegistration() !== void 0 && diagnosticsByUri.size === 0) {
        return { status: "unsupported" };
      }
      return { status: "fresh", source: "push_cache", diagnosticsByUri };
    }
    try {
      const report = await this.diagnosticsLimiter.run(
        signal,
        () => this.sendRequestWithBudget(
          import_node.WorkspaceDiagnosticRequest.method,
          {
            identifier: registration.identifier,
            previousResultIds: [...this.pullDiagnostics].filter(([, state]) => state.resultId !== void 0).map(([uri, state]) => ({ uri, value: state.resultId ?? "" }))
          },
          this.options.timeouts.diagnosticsMs,
          import_node.WorkspaceDiagnosticRequest.method,
          signal
        )
      );
      const diagnosticsByUri = this.acceptWorkspaceDiagnosticReport(report);
      return { status: "fresh", source: "workspace_pull", diagnosticsByUri };
    } catch (cause) {
      if (cause instanceof LspServerClientError && cause.kind === "timeout") {
        return {
          status: "timeout",
          diagnosticsByUri: /* @__PURE__ */ new Map()
        };
      }
      throw cause;
    }
  }
  /** Gracefully shut down within the configured budget, then terminate the process. */
  async shutdown() {
    if (this.closed || this.closing) return;
    this.closing = true;
    try {
      if (this.childProcess.exitCode === null && this.childProcess.signalCode === null) {
        await this.sendRequestWithBudget(
          import_node.ShutdownRequest.method,
          null,
          this.options.timeouts.shutdownMs,
          import_node.ShutdownRequest.method
        ).catch(() => null);
        await Promise.resolve().then(() => this.connection.sendNotification(import_node.ExitNotification.type)).catch(() => void 0);
        await this.waitForProcessExit(this.options.timeouts.shutdownMs).catch(() => void 0);
      }
    } finally {
      await this.forceStop();
    }
  }
  bindProcessLifecycle() {
    this.childProcess.stderr.on("data", (chunk) => {
      this.stderrTail = appendTail(this.stderrTail, chunk);
      const snapshot = this.stderrTail;
      this.stderrWrite = this.stderrWrite.then(
        () => writeFile(this.stderrPath, snapshot, { mode: 384 })
      );
    });
    this.childProcess.once("error", (cause) => {
      this.markTerminalError(
        new LspServerClientError(
          "spawn",
          this.serverId,
          this.stderrPath,
          "process failed to start",
          { cause }
        )
      );
    });
    this.childProcess.once("exit", (code, processSignal) => {
      if (this.closed || this.closing) return;
      this.markTerminalError(
        new LspServerClientError(
          "exit",
          this.serverId,
          this.stderrPath,
          `process exited unexpectedly with ${processSignal ?? `code ${code ?? "unknown"}`}`
        )
      );
    });
    this.connection.onError(([cause]) => {
      this.markTerminalError(
        new LspServerClientError(
          "protocol",
          this.serverId,
          this.stderrPath,
          "JSON-RPC connection failed",
          { cause }
        )
      );
    });
    this.connection.onClose(() => {
      if (this.closed || this.closing) return;
      this.markTerminalError(
        new LspServerClientError(
          "protocol",
          this.serverId,
          this.stderrPath,
          "JSON-RPC connection closed unexpectedly"
        )
      );
    });
  }
  bindProtocolHandlers() {
    this.connection.onNotification(import_node.PublishDiagnosticsNotification.type, (parameters) => {
      this.diagnosticsRevision++;
      this.silentDocumentVersions.delete(parameters.uri);
      const state = {
        diagnostics: parameters.diagnostics,
        revision: this.diagnosticsRevision
      };
      if (parameters.version !== void 0) {
        const stateWithVersion = {
          ...state,
          version: parameters.version
        };
        this.pushDiagnostics.set(parameters.uri, stateWithVersion);
      } else {
        this.pushDiagnostics.set(parameters.uri, state);
      }
      for (const notify of this.diagnosticWaiters.get(parameters.uri) ?? []) notify();
    });
    this.connection.onRequest(
      import_node.ConfigurationRequest.type,
      (parameters) => parameters.items.map(
        (item) => configurationSectionValue(this.options.settings, item.section)
      )
    );
    this.connection.onRequest(import_node.WorkspaceFoldersRequest.type, () => [
      { name: this.serverId, uri: pathToFileURL(this.rootPath).href }
    ]);
    this.connection.onRequest(import_node.RegistrationRequest.type, (parameters) => {
      for (const registration of parameters.registrations) {
        this.dynamicRegistrations.set(registration.id, registration);
      }
    });
    this.connection.onRequest(import_node.UnregistrationRequest.type, (parameters) => {
      for (const registration of parameters.unregisterations) {
        this.removeDynamicRegistration(registration);
      }
    });
    this.connection.onRequest(import_node.WorkDoneProgressCreateRequest.type, () => void 0);
    this.connection.onRequest(import_node.DiagnosticRefreshRequest.type, () => void 0);
    this.connection.onRequest(
      import_node.ApplyWorkspaceEditRequest.type,
      async (parameters) => this.rejectServerWorkspaceEdit(parameters)
    );
    this.connection.onRequest(import_node.ShowMessageRequest.type, () => null);
    this.connection.onNotification(import_node.LogMessageNotification.type, () => void 0);
    this.connection.onNotification(import_node.ShowMessageNotification.type, () => void 0);
  }
  async initialize() {
    const rootUri = pathToFileURL(this.rootPath).href;
    let result;
    try {
      result = await this.sendRequestWithBudget(
        import_node.InitializeRequest.method,
        {
          processId: process.pid,
          rootUri,
          workspaceFolders: [{ name: this.serverId, uri: rootUri }],
          initializationOptions: this.options.initializationOptions,
          capabilities: {
            general: {
              positionEncodings: [
                import_node.PositionEncodingKind.UTF8,
                import_node.PositionEncodingKind.UTF16,
                import_node.PositionEncodingKind.UTF32
              ]
            },
            window: { workDoneProgress: true },
            workspace: {
              applyEdit: true,
              configuration: true,
              workspaceFolders: true,
              didChangeWatchedFiles: { dynamicRegistration: false },
              diagnostics: { refreshSupport: true },
              workspaceEdit: {
                documentChanges: true,
                resourceOperations: ["create", "rename", "delete"],
                failureHandling: "undo"
              }
            },
            textDocument: {
              synchronization: { didOpen: true, didClose: true, didSave: true },
              publishDiagnostics: { relatedInformation: true, versionSupport: true },
              diagnostic: { dynamicRegistration: true, relatedDocumentSupport: true },
              completion: {
                dynamicRegistration: true,
                completionItem: { documentationFormat: DOCUMENTATION_FORMATS }
              },
              hover: { dynamicRegistration: true, contentFormat: DOCUMENTATION_FORMATS },
              signatureHelp: {
                dynamicRegistration: true,
                signatureInformation: { documentationFormat: DOCUMENTATION_FORMATS }
              },
              declaration: { dynamicRegistration: true, linkSupport: true },
              definition: { dynamicRegistration: true, linkSupport: true },
              typeDefinition: { dynamicRegistration: true, linkSupport: true },
              implementation: { dynamicRegistration: true, linkSupport: true },
              references: { dynamicRegistration: true },
              documentHighlight: { dynamicRegistration: true },
              documentSymbol: {
                dynamicRegistration: true,
                hierarchicalDocumentSymbolSupport: true
              },
              documentLink: { dynamicRegistration: true, tooltipSupport: true },
              callHierarchy: { dynamicRegistration: true },
              typeHierarchy: { dynamicRegistration: true },
              selectionRange: { dynamicRegistration: true },
              foldingRange: {
                dynamicRegistration: true,
                foldingRangeKind: { valueSet: ["comment", "imports", "region"] }
              },
              codeLens: { dynamicRegistration: true },
              inlayHint: { dynamicRegistration: true },
              colorProvider: { dynamicRegistration: true },
              formatting: { dynamicRegistration: true },
              rangeFormatting: { dynamicRegistration: true },
              onTypeFormatting: { dynamicRegistration: true },
              rename: { dynamicRegistration: true, prepareSupport: true },
              codeAction: { dynamicRegistration: true, isPreferredSupport: true }
            }
          }
        },
        this.options.timeouts.initializeMs,
        import_node.InitializeRequest.method,
        this.options.signal
      );
    } catch (cause) {
      if (cause instanceof LspServerClientError) throw cause;
      throw new LspServerClientError(
        "initialize",
        this.serverId,
        this.stderrPath,
        "initialize request failed",
        { cause }
      );
    }
    this.capabilitiesValue = result.capabilities;
    this.serverInfoValue = result.serverInfo;
    this.positionEncodingValue = normalizeLspPositionEncoding(result.capabilities.positionEncoding);
    this.textDocumentSyncKind = syncKindFromCapabilities(result.capabilities);
    await this.connection.sendNotification(import_node.InitializedNotification.type, {});
    await this.connection.sendNotification(import_node.DidChangeConfigurationNotification.type, {
      settings: this.options.settings
    });
  }
  async sendRequestWithBudget(method, parameters, budgetMs, operation, signal) {
    this.throwIfUnavailable();
    if (signal?.aborted === true) throw abortError(this.options);
    const cancellation = new import_node.CancellationTokenSource();
    try {
      return await Promise.race([
        this.raceBudget(
          this.connection.sendRequest(method, parameters, cancellation.token),
          budgetMs,
          operation,
          signal,
          () => cancellation.cancel()
        ),
        this.terminalErrorPromise.then((error) => {
          throw error;
        })
      ]);
    } catch (cause) {
      if (cause instanceof LspServerClientError) throw cause;
      throw new LspServerClientError(
        "protocol",
        this.serverId,
        this.stderrPath,
        `${operation} request failed`,
        { cause }
      );
    } finally {
      cancellation.dispose();
    }
  }
  async waitForPushDiagnostics(uri, version, previousRevision, signal) {
    const deadline = Date.now() + this.options.timeouts.diagnosticsMs;
    for (; ; ) {
      const current = this.currentPushDiagnostics(uri, version, previousRevision);
      if (current !== void 0) {
        return { status: "fresh", source: "push", diagnostics: current };
      }
      const remainingMs = deadline - Date.now();
      if (remainingMs <= 0) throw timeoutError(this.options, "diagnostics");
      let notifyWaiter;
      const notification = new Promise((resolveNotification) => {
        notifyWaiter = resolveNotification;
        const waiters = this.diagnosticWaiters.get(uri) ?? /* @__PURE__ */ new Set();
        waiters.add(resolveNotification);
        this.diagnosticWaiters.set(uri, waiters);
      });
      try {
        await this.raceBudget(notification, remainingMs, "diagnostics", signal);
      } finally {
        if (notifyWaiter !== void 0) {
          const waiters = this.diagnosticWaiters.get(uri);
          waiters?.delete(notifyWaiter);
          if (waiters?.size === 0) this.diagnosticWaiters.delete(uri);
        }
      }
    }
  }
  currentPushDiagnostics(uri, version, previousRevision) {
    const current = this.pushDiagnostics.get(uri);
    if (current !== void 0 && current.revision > previousRevision && (current.version === void 0 || current.version === version)) {
      return current.diagnostics;
    }
    return void 0;
  }
  async pullDocumentDiagnostics(uri, identifier, signal) {
    const { previous, report } = await this.diagnosticsLimiter.run(signal, async () => {
      const previousState = this.pullDiagnostics.get(uri);
      const documentReport = await this.sendRequestWithBudget(
        import_node.DocumentDiagnosticRequest.method,
        {
          textDocument: { uri },
          identifier,
          previousResultId: previousState?.resultId
        },
        this.options.timeouts.diagnosticsMs,
        import_node.DocumentDiagnosticRequest.method,
        signal
      );
      return { previous: previousState, report: documentReport };
    });
    if (report.kind === import_node.DocumentDiagnosticReportKind.Unchanged) {
      return {
        status: "fresh",
        source: "document_pull",
        diagnostics: previous?.diagnostics ?? []
      };
    }
    const state = { diagnostics: report.items };
    this.pullDiagnostics.set(
      uri,
      report.resultId === void 0 ? state : { ...state, resultId: report.resultId }
    );
    if (report.relatedDocuments !== void 0) {
      for (const [relatedUri, related] of Object.entries(report.relatedDocuments)) {
        if (related.kind === import_node.DocumentDiagnosticReportKind.Unchanged) continue;
        const relatedState = { diagnostics: related.items };
        this.pullDiagnostics.set(
          relatedUri,
          related.resultId === void 0 ? relatedState : { ...relatedState, resultId: related.resultId }
        );
      }
    }
    return { status: "fresh", source: "document_pull", diagnostics: report.items };
  }
  async raceBudget(value, budgetMs, operation, signal, onCancel) {
    if (signal?.aborted === true) throw abortError(this.options);
    let timeout;
    let abortListener;
    const timeoutPromise = new Promise((_resolve, reject) => {
      timeout = setTimeout(() => {
        onCancel?.();
        reject(timeoutError(this.options, operation));
      }, budgetMs);
      timeout.unref();
    });
    const abortPromise = new Promise((_resolve, reject) => {
      if (signal === void 0) return;
      abortListener = () => {
        onCancel?.();
        reject(abortError(this.options));
      };
      signal.addEventListener("abort", abortListener, { once: true });
    });
    try {
      return await Promise.race([value, timeoutPromise, abortPromise]);
    } finally {
      if (timeout !== void 0) clearTimeout(timeout);
      if (signal !== void 0 && abortListener !== void 0) {
        signal.removeEventListener("abort", abortListener);
      }
    }
  }
  documentPullRegistration() {
    const dynamic = [...this.dynamicRegistrations.values()].find(
      (registration) => registration.method === import_node.DocumentDiagnosticRequest.method
    );
    if (dynamic !== void 0) return this.parseDiagnosticRegistration(dynamic);
    if (this.capabilitiesValue.diagnosticProvider === void 0) return void 0;
    const provider = this.capabilitiesValue.diagnosticProvider;
    const staticRegistration = {
      workspaceDiagnostics: provider.workspaceDiagnostics === true
    };
    return provider.identifier === void 0 ? staticRegistration : { ...staticRegistration, identifier: provider.identifier };
  }
  workspacePullRegistration() {
    const registration = this.documentPullRegistration();
    return registration?.workspaceDiagnostics === true ? registration : void 0;
  }
  parseDiagnosticRegistration(registration) {
    const options = registration.registerOptions;
    if (!Value2.Check(DynamicDiagnosticRegistrationSchema, options)) {
      return { workspaceDiagnostics: false };
    }
    const registrationOptions = {
      workspaceDiagnostics: options.workspaceDiagnostics === true
    };
    return options.identifier === void 0 ? registrationOptions : { ...registrationOptions, identifier: options.identifier };
  }
  acceptWorkspaceDiagnosticReport(report) {
    const diagnosticsByUri = /* @__PURE__ */ new Map();
    for (const item of report.items) {
      if (item.kind === import_node.DocumentDiagnosticReportKind.Unchanged) {
        diagnosticsByUri.set(item.uri, this.pullDiagnostics.get(item.uri)?.diagnostics ?? []);
        continue;
      }
      const state = { diagnostics: item.items };
      this.pullDiagnostics.set(
        item.uri,
        item.resultId === void 0 ? state : { ...state, resultId: item.resultId }
      );
      diagnosticsByUri.set(item.uri, item.items);
    }
    return diagnosticsByUri;
  }
  removeDynamicRegistration(unregistration) {
    const registration = this.dynamicRegistrations.get(unregistration.id);
    if (registration?.method === unregistration.method) {
      this.dynamicRegistrations.delete(unregistration.id);
    }
  }
  async rejectServerWorkspaceEdit(parameters) {
    if (this.options.onWorkspaceEdit === void 0) {
      return { applied: false, failureReason: "Pi LSP: workspace edit requires a preview" };
    }
    try {
      const previewId = await this.options.onWorkspaceEdit(
        parameters.edit,
        this.positionEncodingValue
      );
      return {
        applied: false,
        failureReason: `Pi LSP: workspace edit captured as preview ${previewId}`
      };
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : String(cause);
      return {
        applied: false,
        failureReason: `Pi LSP: workspace edit preview rejected: ${message}`
      };
    }
  }
  async evictOldDocuments() {
    while (this.openDocuments.size > MAX_OPEN_DOCUMENTS) {
      const oldestUri = this.openDocuments.keys().next().value;
      if (oldestUri === void 0) return;
      this.openDocuments.delete(oldestUri);
      await this.connection.sendNotification(import_node.DidCloseTextDocumentNotification.type, {
        textDocument: { uri: oldestUri }
      });
      this.pushDiagnostics.delete(oldestUri);
      this.pullDiagnostics.delete(oldestUri);
      this.silentDocumentVersions.delete(oldestUri);
    }
  }
  markTerminalError(error) {
    if (this.terminalError !== void 0) return;
    this.terminalError = error;
    this.resolveTerminalError?.(error);
    try {
      this.options.onUnavailable?.(error);
    } catch {
    }
  }
  throwIfUnavailable() {
    if (this.terminalError !== void 0) throw this.terminalError;
    if (this.closed) {
      throw new LspServerClientError("exit", this.serverId, this.stderrPath, "client is shut down");
    }
  }
  async waitForProcessExit(timeoutMs) {
    if (this.childProcess.exitCode !== null || this.childProcess.signalCode !== null) return;
    await this.raceBudget(
      new Promise((resolveExit) => this.childProcess.once("exit", () => resolveExit())),
      timeoutMs,
      "process exit"
    );
  }
  async forceStop() {
    this.closed = true;
    if (this.childProcess.exitCode === null && this.childProcess.signalCode === null) {
      this.childProcess.kill();
      await new Promise((resolveExit) => {
        const timeout = setTimeout(
          () => {
            this.childProcess.kill("SIGKILL");
            resolveExit();
          },
          Math.min(this.options.timeouts.shutdownMs, 1e3)
        );
        timeout.unref();
        this.childProcess.once("exit", () => {
          clearTimeout(timeout);
          resolveExit();
        });
      });
    }
    this.connection.dispose();
    await this.stderrWrite.catch(() => void 0);
  }
};

// src/lsp-server-instance-pool.ts
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Type as Type4 } from "typebox";
import { Value as Value3 } from "typebox/value";
var LSP_SERVER_INSTANCE_POOL_SLOT = /* @__PURE__ */ Symbol.for(
  "@ian-pascoe/pi-lsp/server-instance-pool.v1"
);
function describeError(cause) {
  return cause instanceof Error ? cause.message : String(cause);
}
var PackageManifestSchema = Type4.Object({ version: Type4.String() });
var PI_LSP_VERSION = Value3.Parse(
  PackageManifestSchema,
  JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"))
).version;
function sortedEntries(record) {
  return Object.entries(record).sort(([left], [right]) => left < right ? -1 : 1);
}
function lspServerInstanceKey(definition, rootPath, timeouts) {
  return JSON.stringify([
    PI_LSP_VERSION,
    definition.id,
    rootPath,
    definition.command,
    definition.args,
    sortedEntries(definition.environment),
    definition.initializationOptions ?? null,
    definition.settings ?? null,
    sortedEntries({ ...timeouts }),
    definition.maxConcurrentDiagnostics
  ]);
}
var UNATTRIBUTABLE_EDIT_REASON = "the shared Server Instance cannot attribute the edit to a session";
var LspServerInstanceLease = class {
  /** Bind the lease to its pool entry; only the pool creates leases. */
  constructor(entry, holder, owner) {
    this.entry = entry;
    this.holder = holder;
    this.owner = owner;
  }
  entry;
  holder;
  owner;
  /** Whether the lease still holds its instance: not released and the instance not stopped. */
  get active() {
    return this.entry.leases.has(this);
  }
  /** The running client, while the lease is active and the instance is available. */
  get client() {
    const view = this.view();
    return view.kind === "running" ? view.client : void 0;
  }
  /** How many other sessions hold a lease on the same instance. */
  get otherLeaseholders() {
    return this.active ? this.entry.leases.size - 1 : 0;
  }
  /** The instance's state as this lease sees it, without waiting. */
  get state() {
    return this.view().kind;
  }
  /** The latest unavailable reason, when the shared instance failed. */
  get error() {
    const view = this.view();
    return view.kind === "unavailable" ? view.error : void 0;
  }
  /** Wait for the shared startup, then report the client or why there is none. */
  async ready() {
    await this.entry.started;
    const { stopError } = this.entry;
    if (!this.active && stopError !== void 0) return { kind: "unavailable", error: stopError };
    const view = this.view();
    return view.kind === "starting" ? { kind: "stopped" } : view;
  }
  /** The instance as this lease sees it now: the one cascade every accessor derives from. */
  view() {
    if (!this.active) return { kind: "stopped" };
    if (this.entry.error !== void 0) return { kind: "unavailable", error: this.entry.error };
    if (!this.entry.settled) return { kind: "starting" };
    const { client } = this.entry;
    return client === void 0 ? { kind: "stopped" } : { kind: "running", client };
  }
  /** Release this lease; the instance stops when it was the last one. */
  release() {
    return this.owner.release(this);
  }
};
var LspServerInstancePool = class {
  /** Wrap `entries`; a pool of its own unless given the shared slot's entries. */
  constructor(entries = /* @__PURE__ */ new Map()) {
    this.entries = entries;
  }
  entries;
  /**
   * Lease the instance for `key`, starting it with `start` when no instance is running or
   * starting. A new instance waits for a previous one with the same key to finish stopping.
   */
  acquire(key, holder, start) {
    const current = this.entries.get(key);
    if (current !== void 0 && current.stopping === void 0) {
      return this.addLease(key, current, holder);
    }
    const entry = {
      leases: /* @__PURE__ */ new Set(),
      lifetime: new AbortController(),
      started: Promise.resolve(),
      settled: false,
      client: void 0,
      error: void 0,
      stopError: void 0,
      stderrDirectory: void 0,
      stopping: void 0
    };
    this.entries.set(key, entry);
    const lease = this.addLease(key, entry, holder);
    entry.started = this.launch(key, entry, current?.stopping, start).finally(() => {
      entry.settled = true;
    });
    return lease;
  }
  /** Stop the instance for `key` for every leaseholder; nothing happens when none exists. */
  stop(key) {
    const entry = this.entries.get(key);
    return entry === void 0 ? Promise.resolve() : this.stopEntry(key, entry);
  }
  addLease(key, entry, holder) {
    const lease = new LspServerInstanceLease(entry, holder, {
      release: (released) => {
        if (!entry.leases.delete(released)) return entry.stopping ?? Promise.resolve();
        return entry.leases.size === 0 ? this.stopEntry(key, entry) : Promise.resolve();
      }
    });
    entry.leases.add(lease);
    return lease;
  }
  async launch(key, entry, previousStop, start) {
    const { signal } = entry.lifetime;
    if (previousStop !== void 0) {
      try {
        await previousStop;
      } catch (cause) {
        entry.stopError = describeError(cause);
        entry.leases.clear();
        if (this.entries.get(key) === entry) this.entries.delete(key);
        return;
      }
    }
    if (signal.aborted) return;
    entry.stderrDirectory = join(tmpdir(), `pi-lsp-server-${randomUUID()}`);
    try {
      const client = await start({
        signal,
        stderrPath: join(entry.stderrDirectory, "stderr.log"),
        onUnavailable: (cause) => {
          if (!signal.aborted) entry.error = describeError(cause);
        },
        onWorkspaceEdit: (edit, positionEncoding) => {
          const [sole, ...others] = entry.leases;
          if (sole === void 0 || others.length > 0) {
            return Promise.reject(new Error(UNATTRIBUTABLE_EDIT_REASON));
          }
          return sole.holder.onWorkspaceEdit(edit, positionEncoding);
        }
      });
      if (signal.aborted || entry.error !== void 0) {
        await client.shutdown().catch(() => void 0);
        return;
      }
      entry.client = client;
    } catch (cause) {
      if (!signal.aborted) entry.error = describeError(cause);
    }
  }
  stopEntry(key, entry) {
    if (entry.stopping !== void 0) return entry.stopping;
    entry.leases.clear();
    entry.lifetime.abort();
    entry.stopping = (async () => {
      try {
        await entry.started;
        await entry.client?.shutdown();
      } finally {
        entry.client = void 0;
        if (entry.stderrDirectory !== void 0) {
          await rm(entry.stderrDirectory, { force: true, recursive: true }).catch(() => void 0);
        }
        if (this.entries.get(key) === entry) this.entries.delete(key);
      }
    })();
    return entry.stopping;
  }
};
function sharedEntries() {
  const existing = Object.getOwnPropertyDescriptor(
    globalThis,
    LSP_SERVER_INSTANCE_POOL_SLOT
  )?.value;
  if (existing instanceof Map) return existing;
  const created = /* @__PURE__ */ new Map();
  Object.defineProperty(globalThis, LSP_SERVER_INSTANCE_POOL_SLOT, {
    value: created,
    configurable: true
  });
  return created;
}
function sharedLspServerInstancePool() {
  return new LspServerInstancePool(sharedEntries());
}

// src/lsp-server-manager.ts
function summarizeOtherRoots(roots, walk) {
  const sorted = [...roots].sort((left, right) => left.localeCompare(right));
  return {
    rootPaths: sorted.slice(0, LSP_OTHER_WORKSPACE_ROOT_LIMIT),
    count: sorted.length,
    ...walk
  };
}
var LSP_OTHER_WORKSPACE_ROOT_LIMIT = 5;
var LSP_ROOT_DISCOVERY_DIRECTORY_LIMIT = 4096;
var ROOT_DISCOVERY_SKIPPED_DIRECTORIES = /* @__PURE__ */ new Set(["node_modules"]);
function normalizeLspFilePath(filePath) {
  return filePath.startsWith("@") ? filePath.slice(1) : filePath;
}
function languageMatchesFile(language, filePath) {
  const fileName = basename(filePath);
  return language.fileNames?.includes(fileName) === true || language.extensions?.includes(extname(fileName)) === true;
}
function containsLspRootMarker(entryNames, rootMarkers) {
  return entryNames.some(
    (entryName) => rootMarkers.some((rootMarker) => matchesGlob(entryName, rootMarker))
  );
}
function isSameOrAncestorDirectory(ancestor, descendant) {
  const relativePath = relative(ancestor, descendant);
  return relativePath === "" || relativePath !== ".." && !relativePath.startsWith(`..${sep}`) && !isAbsolute(relativePath);
}
function isBeyondLspRootSearchLimit(directory, cwd, homeDirectory) {
  return isSameOrAncestorDirectory(directory, homeDirectory) && !isSameOrAncestorDirectory(cwd, directory);
}
function hasLspRootMarkers(definition) {
  return (definition.rootMarkers?.length ?? 0) > 0 || (definition.workspaceRootMarkers?.length ?? 0) > 0;
}
function findLspRoot(definition, ancestorDirectories, cwd, homeDirectory) {
  const rootMarkers = definition.rootMarkers ?? [];
  const markerRoot = rootMarkers.length === 0 ? void 0 : ancestorDirectories.find(({ entryNames }) => containsLspRootMarker(entryNames, rootMarkers))?.path;
  if (markerRoot === void 0 && definition.requireRootMarker === true) return void 0;
  const workspaceRootMarkers = definition.workspaceRootMarkers ?? [];
  const workspaceRoot = workspaceRootMarkers.length === 0 ? void 0 : ancestorDirectories.find(
    ({ entryNames, path }) => !isBeyondLspRootSearchLimit(path, cwd, homeDirectory) && containsLspRootMarker(entryNames, workspaceRootMarkers)
  )?.path;
  return workspaceRoot ?? markerRoot ?? cwd;
}
function routeLspServersForFile(serverDefinitions, filePath, cwd, ancestorDirectories, homeDirectory = homedir()) {
  const normalizedFilePath = normalizeLspFilePath(filePath);
  const resolvedCwd = resolve2(cwd);
  const resolvedHomeDirectory = resolve2(homeDirectory);
  const routes = [];
  for (const serverDefinition of serverDefinitions) {
    const language = serverDefinition.languages.find(
      (candidate) => languageMatchesFile(candidate, normalizedFilePath)
    );
    if (language === void 0) continue;
    const rootPath = findLspRoot(
      serverDefinition,
      ancestorDirectories,
      resolvedCwd,
      resolvedHomeDirectory
    );
    if (rootPath === void 0) continue;
    routes.push({
      serverId: serverDefinition.serverId,
      language,
      rootPath
    });
  }
  return routes;
}
var ROOT_DISCOVERY_READ_CONCURRENCY = 32;
function isLspWorkspaceRoot(directory, entryNames, policy) {
  return containsLspRootMarker(entryNames, policy.workspaceRootMarkers) && !isBeyondLspRootSearchLimit(directory, policy.cwd, policy.homeDirectory);
}
async function listLspDiscoveryDirectory(directory) {
  try {
    return await readdir(directory, { withFileTypes: true });
  } catch {
    return void 0;
  }
}
async function discoverLspRoots(baseDirectory, policy, searchedRoot, options) {
  const otherRoots = /* @__PURE__ */ new Set();
  const packageRoots = [];
  const isDone = () => !options.collectPackages && otherRoots.size >= options.maxOtherRoots;
  const found = (unchecked) => ({
    otherRoots: [...otherRoots],
    packageRoots,
    unchecked
  });
  const starts = options.collectPackages && baseDirectory !== searchedRoot ? [searchedRoot, baseDirectory] : [baseDirectory];
  let listed = 0;
  for (const [startIndex, start] of starts.entries()) {
    const skippedSubtree = startIndex > 0 ? searchedRoot : void 0;
    const queue = [
      { path: start, workspaceRoot: void 0 }
    ];
    while (queue.length > 0 && !isDone()) {
      if (listed === options.directoryLimit) {
        return found([...queue.map(({ path }) => path), ...starts.slice(startIndex + 1)]);
      }
      const batch = queue.splice(
        0,
        Math.min(ROOT_DISCOVERY_READ_CONCURRENCY, options.directoryLimit - listed)
      );
      const listings = await Promise.all(batch.map(({ path }) => listLspDiscoveryDirectory(path)));
      for (const [index, item] of batch.entries()) {
        if (isDone()) return found([]);
        listed++;
        const entries = listings[index];
        if (entries === void 0) continue;
        entries.sort((left, right) => left.name.localeCompare(right.name));
        const entryNames = entries.map(({ name }) => name);
        const isWorkspaceRoot = isLspWorkspaceRoot(item.path, entryNames, policy);
        const workspaceRoot = isWorkspaceRoot ? item.path : item.workspaceRoot;
        const hasRootMarker = containsLspRootMarker(entryNames, policy.rootMarkers);
        if (isWorkspaceRoot || hasRootMarker) {
          const routedRoot = workspaceRoot ?? item.path;
          if (routedRoot !== searchedRoot) {
            otherRoots.add(routedRoot);
          } else if (options.collectPackages && hasRootMarker && item.path !== searchedRoot) {
            packageRoots.push(item.path);
          }
        }
        for (const entry of entries) {
          const path = resolve2(item.path, entry.name);
          if (entry.isDirectory() && !entry.name.startsWith(".") && !ROOT_DISCOVERY_SKIPPED_DIRECTORIES.has(entry.name) && path !== skippedSubtree) {
            queue.push({ path, workspaceRoot });
          }
        }
      }
    }
  }
  return found([]);
}
async function findLspDiscoveryBase(searchedRoot, rootMarkers, cwd, homeDirectory, readDirectory) {
  let base = searchedRoot;
  let directory = searchedRoot;
  for (; ; ) {
    if (isBeyondLspRootSearchLimit(directory, cwd, homeDirectory)) return base;
    let entryNames = [];
    try {
      entryNames = await readDirectory(directory);
    } catch {
    }
    if (directory === cwd || containsLspRootMarker(entryNames, rootMarkers)) base = directory;
    const parent = dirname2(directory);
    if (parent === directory) return base;
    directory = parent;
  }
}
function describeLspError(cause) {
  return cause instanceof Error ? cause.message : String(cause);
}
function lspInstanceKey(serverId, rootPath) {
  return JSON.stringify([serverId, rootPath]);
}
async function readLspAncestorDirectories(filePath, readDirectory) {
  const directories = [];
  let currentDirectory = dirname2(filePath);
  for (; ; ) {
    let entryNames = [];
    try {
      entryNames = await readDirectory(currentDirectory);
    } catch {
    }
    directories.push({ entryNames, path: currentDirectory });
    const parentDirectory = dirname2(currentDirectory);
    if (parentDirectory === currentDirectory) return directories;
    currentDirectory = parentDirectory;
  }
}
function incapableServerFailure(serverId, capability) {
  return {
    code: "no-capable-server",
    message: `Pi LSP: server ${serverId} does not support ${capability.method}`,
    serverId
  };
}
function noCapableServerFailure(capability, incapableServerIds) {
  return {
    code: "no-capable-server",
    message: `Pi LSP: no matching server supports ${capability.method}; matching servers without it: ${incapableServerIds.join(", ")}`,
    serverId: "*"
  };
}
function unavailableFailure(route, error) {
  return {
    code: "server-unavailable",
    message: `Pi LSP: server ${route.serverId} is unavailable for ${route.rootPath}: ${error}`,
    serverId: route.serverId
  };
}
async function runServerOperation({ client, route }, operation) {
  try {
    return {
      rootPath: route.rootPath,
      serverId: route.serverId,
      value: await operation(client, route)
    };
  } catch (error) {
    if (error instanceof LspInputError) throw error;
    if (error instanceof LspServerClientError && error.kind === "cancelled") throw error;
    return {
      code: error instanceof LspServerClientError && error.kind === "timeout" ? "request-timeout" : "request-failed",
      message: `Pi LSP: server ${route.serverId} request failed: ${describeLspError(error)}`,
      serverId: route.serverId
    };
  }
}
var LspServerManager = class {
  /** Bind parsed settings and one concrete client constructor to the current Pi session. */
  constructor(input) {
    this.input = input;
    this.configuredEnablement = input.settings.enablement;
    this.pool = input.pool ?? new LspServerInstancePool();
  }
  input;
  knownRoutes = /* @__PURE__ */ new Map();
  /** This session's Server Instance Lease for each known route that holds one. */
  leases = /* @__PURE__ */ new Map();
  pool;
  closed = false;
  configuredEnablement;
  sessionEnablement = /* @__PURE__ */ new Map();
  /** Resolve eligibility independently of whether any Instance is running. */
  getEnablement(serverId) {
    if (!this.input.settings.servers.has(serverId)) {
      throw new Error(`Pi LSP: unknown server ${serverId}`);
    }
    const session = this.sessionEnablement.get(serverId);
    if (session !== void 0) return { enabled: session, scope: "session" };
    return this.configuredEnablement.get(serverId) ?? { enabled: true, scope: "default" };
  }
  /**
   * Apply current settings and branch choices, releasing this session's leases on every
   * effectively disabled Server Definition's instances. An instance stops only when that was its
   * last lease.
   */
  async setEnablement(configured, session) {
    this.configuredEnablement = new Map(configured);
    this.sessionEnablement = new Map(session);
    await Promise.all(
      [...this.knownRoutes.entries()].filter(([, route]) => !this.getEnablement(route.serverId).enabled).map(([key]) => this.releaseLease(key))
    );
  }
  /** Return configuration and known instance state without starting a server. */
  getStatus() {
    const servers = [];
    for (const [serverId, { languages }] of this.input.settings.servers) {
      const routes = [...this.knownRoutes.entries()].filter(([, route]) => route.serverId === serverId).sort(([, left], [, right]) => left.rootPath.localeCompare(right.rootPath));
      if (routes.length === 0) {
        servers.push({
          languages,
          serverId,
          state: this.getEnablement(serverId).enabled ? "configured" : "disabled"
        });
        continue;
      }
      for (const [key, route] of routes) {
        const lease = this.leases.get(key);
        const instance = { languages, rootPath: route.rootPath, serverId };
        const state = lease?.state ?? "stopped";
        const error = lease?.error;
        const others = lease?.otherLeaseholders ?? 0;
        if (!this.getEnablement(serverId).enabled) {
          servers.push({ ...instance, state: "disabled" });
        } else if (state === "unavailable" && error !== void 0) {
          servers.push({ ...instance, error, state });
        } else if (state === "running" && others > 0) {
          servers.push({ ...instance, sharedWithSessions: others, state });
        } else {
          servers.push({ ...instance, state });
        }
      }
    }
    return {
      servers,
      warnings: this.input.settings.warnings
    };
  }
  async routeFile(filePath, requestedServerId) {
    const absolutePath = resolve2(this.input.cwd, normalizeLspFilePath(filePath));
    const candidates = [...this.input.settings.servers.values()].filter(
      (definition) => (requestedServerId === void 0 ? this.getEnablement(definition.id).enabled : definition.id === requestedServerId) && definition.languages.some((language) => languageMatchesFile(language, absolutePath))
    );
    const ancestors = candidates.some(hasLspRootMarkers) ? await readLspAncestorDirectories(absolutePath, this.input.readDirectory ?? readdir) : [];
    const definitions = candidates.map((definition) => ({
      languages: definition.languages,
      requireRootMarker: definition.requireRootMarker,
      rootMarkers: definition.rootMarkers,
      serverId: definition.id,
      workspaceRootMarkers: definition.workspaceRootMarkers ?? []
    }));
    return routeLspServersForFile(
      definitions,
      absolutePath,
      this.input.cwd,
      ancestors,
      this.input.homeDirectory ?? homedir()
    );
  }
  /** IDs of the Server Definitions accepting the file's language, before enablement and gating. */
  languageServerIds(filePath) {
    const absolutePath = resolve2(this.input.cwd, normalizeLspFilePath(filePath));
    return [...this.input.settings.servers.values()].filter(
      (definition) => definition.languages.some((language) => languageMatchesFile(language, absolutePath))
    ).map((definition) => definition.id);
  }
  async holdsWorkspaceRootMarker(policy, searchedRoot) {
    if (policy.workspaceRootMarkers.length === 0) return false;
    let entryNames = [];
    try {
      entryNames = await (this.input.readDirectory ?? readdir)(searchedRoot);
    } catch {
    }
    return isLspWorkspaceRoot(searchedRoot, entryNames, policy);
  }
  /**
   * Whether `rootPath` is a workspace root of the Server Definition with root markers, the only
   * kind of Server Instance root whose packages `findWorkspaceScope` reports as unloaded.
   */
  async isWorkspaceRoot(serverId, rootPath) {
    const definition = this.input.settings.servers.get(serverId);
    if (definition === void 0 || !hasLspRootMarkers(definition)) return false;
    const policy = this.rootDiscoveryPolicy(definition);
    return policy.rootMarkers.length > 0 && await this.holdsWorkspaceRootMarker(policy, resolve2(this.input.cwd, rootPath));
  }
  /** The language ID one Server Definition sends for a file, or undefined when it handles none. */
  languageIdForFile(serverId, filePath) {
    const absolutePath = resolve2(this.input.cwd, normalizeLspFilePath(filePath));
    return this.input.settings.servers.get(serverId)?.languages.find((language) => languageMatchesFile(language, absolutePath))?.languageId;
  }
  /** Find workspace roots of one Server Definition other than `rootPath`; see `findWorkspaceScope`. */
  async findOtherWorkspaceRoots(serverId, rootPath) {
    return (await this.findWorkspaceScope(serverId, rootPath)).otherRoots;
  }
  /**
   * Describe what a request to the Server Instance at `rootPath` may not consider, with one
   * bounded walk.
   *
   * Other roots are roots of the definition's known Server Instances, and the roots that
   * directories holding one of its root or workspace root markers route to, found under the
   * outermost ancestor of `rootPath` that has a marker (or under the working directory, when that
   * is higher). Files under them route to other Server Instances; package directories inside a
   * searched workspace root route to it and are not other roots.
   *
   * With `loaded`, when `rootPath` was selected by a workspace root marker and the definition has
   * root markers, unloaded packages are the directories under it holding a root marker (and
   * routing to it) in which the instance has synchronized no document: a language server loads a
   * package's project only when a file there is opened. A document belongs to its nearest package
   * root, and the queried file counts as synchronized.
   *
   * The walk skips hidden and `node_modules` directories and lists at most
   * `rootDiscoveryDirectoryLimit` directories. When it looks for packages, it walks the workspace
   * root's subtree first, even below a skipped directory. Unchecked directories inside the
   * workspace root can hide only its packages and nested workspaces, so they mark the unloaded
   * packages, not the other roots, as incomplete; unchecked directories elsewhere, including its
   * ancestors, mark only the other roots as incomplete.
   */
  async findWorkspaceScope(serverId, rootPath, loaded) {
    const searchedRoot = resolve2(this.input.cwd, rootPath);
    const maxRoots = LSP_OTHER_WORKSPACE_ROOT_LIMIT + 1;
    const roots = new Set(
      [...this.knownRoutes.values()].filter((route) => route.serverId === serverId && route.rootPath !== searchedRoot).map((route) => route.rootPath)
    );
    const definition = this.input.settings.servers.get(serverId);
    const reachedCap = () => roots.size >= maxRoots;
    if (definition === void 0 || !hasLspRootMarkers(definition)) {
      return { otherRoots: summarizeOtherRoots(roots, { capped: reachedCap(), unchecked: false }) };
    }
    const policy = this.rootDiscoveryPolicy(definition);
    const readDirectory = this.input.readDirectory ?? readdir;
    const isWorkspaceRoot = await this.holdsWorkspaceRootMarker(policy, searchedRoot);
    const collectPackages = loaded !== void 0 && isWorkspaceRoot && policy.rootMarkers.length > 0;
    if (reachedCap() && !collectPackages) {
      return { otherRoots: summarizeOtherRoots(roots, { capped: true, unchecked: false }) };
    }
    const discoveryBase = await findLspDiscoveryBase(
      searchedRoot,
      [...policy.rootMarkers, ...policy.workspaceRootMarkers],
      policy.cwd,
      policy.homeDirectory,
      readDirectory
    );
    const discovery = await discoverLspRoots(discoveryBase, policy, searchedRoot, {
      collectPackages,
      directoryLimit: this.input.rootDiscoveryDirectoryLimit ?? LSP_ROOT_DISCOVERY_DIRECTORY_LIMIT,
      maxOtherRoots: maxRoots
    });
    for (const root of discovery.otherRoots) roots.add(root);
    const isInsideSearchedRoot = (path) => isSameOrAncestorDirectory(searchedRoot, path);
    const otherRoots = summarizeOtherRoots(roots, {
      capped: !collectPackages && reachedCap(),
      unchecked: discovery.unchecked.some(
        (path) => !isWorkspaceRoot || !isInsideSearchedRoot(path)
      )
    });
    if (!collectPackages) return { otherRoots };
    const client = this.leases.get(lspInstanceKey(serverId, searchedRoot))?.client;
    const loadedPackages = /* @__PURE__ */ new Set();
    for (const filePath of [
      resolve2(this.input.cwd, normalizeLspFilePath(loaded.queriedFilePath)),
      ...client === void 0 ? [] : loaded.synchronizedFilePaths(client)
    ]) {
      let owner;
      for (const packageRoot of discovery.packageRoots) {
        if (isSameOrAncestorDirectory(packageRoot, filePath) && (owner === void 0 || packageRoot.length > owner.length)) {
          owner = packageRoot;
        }
      }
      if (owner !== void 0) loadedPackages.add(owner);
    }
    return {
      otherRoots,
      unloadedPackages: {
        packageRoots: discovery.packageRoots.filter((packageRoot) => !loadedPackages.has(packageRoot)).sort((left, right) => left.localeCompare(right)),
        hasMore: discovery.unchecked.some(isInsideSearchedRoot)
      }
    };
  }
  rootDiscoveryPolicy(definition) {
    return {
      cwd: resolve2(this.input.cwd),
      homeDirectory: resolve2(this.input.homeDirectory ?? homedir()),
      rootMarkers: definition.rootMarkers,
      workspaceRootMarkers: definition.workspaceRootMarkers ?? []
    };
  }
  /**
   * Query matching capable instances while retaining independent operational failures. An
   * `LspInputError` or a cancellation from `operation` rejects the whole read: it is the
   * caller's input or abort, not a server failure. The read rejects only after every operation
   * that already started has answered or failed, and it starts no operation after the rejection.
   */
  async runRead(filePath, serverId, capability, operation) {
    const selection = await this.selectRoutes(filePath, serverId);
    if (selection.kind === "failure") return { failures: [selection.failure], successes: [] };
    const { routes } = selection;
    let rejection;
    let markRejected = () => void 0;
    const rejected = new Promise((resolveRejected) => {
      markRejected = () => resolveRejected(void 0);
    });
    const outcomes = await Promise.all(
      routes.map(async (route) => {
        try {
          const starting = this.ensureClient(route);
          const resolution = await Promise.race([starting, rejected]);
          starting.catch(() => void 0);
          if (resolution === void 0 || rejection !== void 0) return void 0;
          if (resolution.kind === "failure") return resolution.failure;
          if (!capability.isSupportedBy(resolution.instance.client)) {
            if (serverId === void 0) return void 0;
            return incapableServerFailure(route.serverId, capability);
          }
          return await runServerOperation(resolution.instance, operation);
        } catch (reason) {
          rejection ??= { reason };
          markRejected();
          return void 0;
        }
      })
    );
    if (rejection !== void 0) throw rejection.reason;
    const failures = [];
    const successes = [];
    for (const outcome of outcomes) {
      if (outcome === void 0) continue;
      if ("code" in outcome) failures.push(outcome);
      else successes.push(outcome);
    }
    const incapableServerIds = routes.filter((_route, index) => outcomes[index] === void 0).map((route) => route.serverId);
    if (successes.length === 0 && failures.length === 0 && incapableServerIds.length > 0) {
      failures.push(noCapableServerFailure(capability, incapableServerIds));
    }
    return { failures, successes };
  }
  /** Resolve exactly one capable matching instance before a preview-producing mutation request. */
  async resolveMutationClient(filePath, serverId, capability) {
    const selection = await this.selectRoutes(filePath, serverId);
    if (selection.kind === "failure") return selection;
    const { routes } = selection;
    const resolutions = await Promise.all(routes.map((route) => this.ensureClient(route)));
    const capable = resolutions.filter(
      (resolution) => resolution.kind === "success" && capability.isSupportedBy(resolution.instance.client)
    );
    const onlyCapable = capable[0];
    if (onlyCapable !== void 0 && capable.length === 1) return onlyCapable;
    if (capable.length > 1) {
      return {
        kind: "failure",
        failure: {
          code: "ambiguous-server",
          message: `Pi LSP: mutation matches multiple capable servers; provide server_id (${capable.map(({ instance }) => instance.route.serverId).join(", ")})`,
          serverId: serverId ?? "*"
        }
      };
    }
    const unavailableResolution = resolutions.find(
      (resolution) => resolution.kind === "failure"
    );
    if (unavailableResolution !== void 0) return unavailableResolution;
    return {
      kind: "failure",
      failure: serverId === void 0 ? noCapableServerFailure(
        capability,
        routes.map((route) => route.serverId)
      ) : incapableServerFailure(serverId, capability)
    };
  }
  /**
   * Run one preview-producing request on exactly one capable matching instance. Like `runRead`,
   * an operation failure becomes a labeled `request-failed` or `request-timeout` failure, while an
   * `LspInputError` or a cancellation rejects.
   */
  async runMutation(filePath, serverId, capability, operation) {
    const resolution = await this.resolveMutationClient(filePath, serverId, capability);
    if (resolution.kind === "failure") return resolution;
    const { instance } = resolution;
    const outcome = await runServerOperation(instance, operation);
    if ("code" in outcome) return { kind: "failure", failure: outcome };
    return { kind: "success", instance, value: outcome.value };
  }
  /** Start one exact Server Instance and return its negotiated capabilities. */
  async getCapabilities(serverId, filePath) {
    const selection = await this.selectRoutes(filePath, serverId);
    if (selection.kind === "failure") return selection;
    return this.ensureClient(selection.routes[0]);
  }
  /** Clear sticky failure state, stop the old process, and start the exact Server Instance again. */
  async restartServer(serverId, filePath) {
    const selection = await this.selectRoutes(filePath, serverId);
    if (selection.kind === "failure") return selection;
    const route = selection.routes[0];
    if (!this.getEnablement(serverId).enabled) return this.ensureClient(route);
    this.knownRoutes.set(lspInstanceKey(serverId, route.rootPath), route);
    try {
      await this.stopServer(serverId, route.rootPath);
    } catch {
    }
    return this.ensureClient(route);
  }
  /**
   * Stop one known Instance for every session that leases it, clearing its failure state,
   * without preventing a later lazy startup in any of them.
   */
  async stopServer(serverId, rootPath) {
    const key = lspInstanceKey(serverId, resolve2(this.input.cwd, normalizeLspFilePath(rootPath)));
    const route = this.knownRoutes.get(key);
    if (route === void 0) {
      throw new Error(`Pi LSP: no known instance of ${serverId} for ${rootPath}`);
    }
    const definition = this.input.settings.servers.get(serverId);
    if (definition === void 0) {
      await this.releaseLease(key);
      return;
    }
    this.leases.delete(key);
    await this.pool.stop(this.poolKey(definition, route));
  }
  /** Release every Server Instance Lease once and clear all session-scoped instance state. */
  async shutdown() {
    this.closed = true;
    await Promise.allSettled([...this.leases.keys()].map((key) => this.releaseLease(key)));
    this.knownRoutes.clear();
  }
  /** Release this session's lease on one route's instance, which stops if it was the last. */
  async releaseLease(key) {
    const lease = this.leases.get(key);
    this.leases.delete(key);
    await lease?.release();
  }
  poolKey(definition, route) {
    return lspServerInstanceKey(definition, route.rootPath, this.input.settings.timeouts);
  }
  /** This session's side of a lease on one Server Definition's instance: its edits become previews here. */
  leaseHolder(serverId) {
    const { onWorkspaceEdit } = this.input;
    return {
      onWorkspaceEdit: (edit, positionEncoding) => onWorkspaceEdit === void 0 ? Promise.reject(new Error("this session holds no Workspace Edit Previews")) : onWorkspaceEdit({ serverId, edit, positionEncoding })
    };
  }
  /**
   * Select the routes a request may use: `serverId`'s route, or every enabled matching route.
   * Without `serverId`, when no route applies and every Server Definition handling the file's
   * language is disabled, the failure is `server-disabled` naming them rather than no matching
   * server. An enabled definition excluded by its Activation Gate keeps that silent exclusion.
   */
  async selectRoutes(filePath, serverId) {
    const [first, ...rest] = await this.routeFile(filePath, serverId);
    if (first !== void 0) return { kind: "routes", routes: [first, ...rest] };
    if (serverId === void 0) {
      const languageServerIds = this.languageServerIds(filePath);
      if (languageServerIds.length > 0 && languageServerIds.every((id) => !this.getEnablement(id).enabled)) {
        return {
          kind: "failure",
          failure: {
            code: "server-disabled",
            message: `Pi LSP: all servers matching ${normalizeLspFilePath(filePath)} are disabled: ${languageServerIds.join(", ")}; enable one with /lsp enable <id>`,
            serverId: "*"
          }
        };
      }
    }
    return { kind: "failure", failure: this.noMatchingFailure(serverId, filePath) };
  }
  noMatchingFailure(serverId, filePath) {
    const normalizedFilePath = normalizeLspFilePath(filePath);
    const definition = serverId === void 0 ? void 0 : this.input.settings.servers.get(serverId);
    if (definition?.requireRootMarker === true && definition.languages.some((language) => languageMatchesFile(language, normalizedFilePath))) {
      return {
        code: "root-marker-not-found",
        message: `Pi LSP: required root marker not found for server ${definition.id} and ${normalizedFilePath}; expected one of: ${definition.rootMarkers.join(", ")}`,
        serverId: definition.id
      };
    }
    let message;
    if (serverId === void 0) {
      message = `Pi LSP: no configured server matches ${normalizedFilePath}`;
    } else if (definition === void 0) {
      message = `Pi LSP: server ${serverId} is not configured`;
    } else {
      message = `Pi LSP: server ${serverId} does not match ${normalizedFilePath}`;
    }
    return { code: "no-matching-server", message, serverId: serverId ?? "*" };
  }
  async ensureClient(route) {
    if (this.closed) {
      return {
        kind: "failure",
        failure: unavailableFailure(route, "session runtime is shut down")
      };
    }
    if (!this.getEnablement(route.serverId).enabled) {
      return {
        kind: "failure",
        failure: {
          code: "server-disabled",
          message: `Pi LSP: server ${route.serverId} is disabled; enable it with /lsp enable ${route.serverId} first`,
          serverId: route.serverId
        }
      };
    }
    const definition = this.input.settings.servers.get(route.serverId);
    if (definition === void 0) {
      return { kind: "failure", failure: this.noMatchingFailure(route.serverId, route.rootPath) };
    }
    const key = lspInstanceKey(route.serverId, route.rootPath);
    this.knownRoutes.set(key, route);
    let lease = this.leases.get(key);
    if (lease?.active !== true) {
      const { startClient, settings } = this.input;
      const { rootPath } = route;
      const { timeouts } = settings;
      lease = this.pool.acquire(
        this.poolKey(definition, route),
        this.leaseHolder(route.serverId),
        (start) => startClient({ ...start, definition, rootPath, timeouts })
      );
      this.leases.set(key, lease);
    }
    const outcome = await lease.ready();
    if (this.closed) {
      return {
        kind: "failure",
        failure: unavailableFailure(route, "session runtime is shut down")
      };
    }
    if (outcome.kind === "running") {
      return { kind: "success", instance: { client: outcome.client, definition, route } };
    }
    return {
      kind: "failure",
      failure: unavailableFailure(
        route,
        outcome.kind === "unavailable" ? outcome.error : "Instance was stopped during startup"
      )
    };
  }
};

// src/lsp-tool-output.ts
import {
  DEFAULT_MAX_BYTES,
  DEFAULT_MAX_LINES,
  truncateHead
} from "@earendil-works/pi-coding-agent";
import { Value as Value4 } from "typebox/value";
function deterministicLspValue(value) {
  if (Array.isArray(value)) return value.map(deterministicLspValue);
  if (value instanceof Map) {
    const entries = [...value.entries()];
    return entries.sort(([left], [right]) => String(left).localeCompare(String(right))).map(([key, entryValue]) => [key, deterministicLspValue(entryValue)]);
  }
  if (typeof value !== "object" || value === null) return value;
  return Object.fromEntries(
    Object.entries(value).filter(([, entryValue]) => entryValue !== void 0).sort(([left], [right]) => left.localeCompare(right)).map(([key, entryValue]) => [key, deterministicLspValue(entryValue)])
  );
}
function formatLspToolValue(value) {
  const text = JSON.stringify(deterministicLspValue(value));
  return text === void 0 ? "null" : text;
}
async function truncateLspOutputText(text, sessionFiles, subject, spillText = text) {
  const truncation = truncateHead(text, {
    maxBytes: DEFAULT_MAX_BYTES,
    maxLines: DEFAULT_MAX_LINES
  });
  if (!truncation.truncated) return { text };
  const spillPath = await sessionFiles.writeResultSpill(spillText);
  return {
    text: `${truncation.content}

[Pi LSP: ${subject} truncated; complete Result Spill: ${spillPath}]`,
    spillPath
  };
}
function lspStructuredFields(text) {
  const fields = JSON.parse(text);
  return fields;
}
function lspStructuredValue(text) {
  const value = JSON.parse(text);
  return value;
}
var LSP_STRUCTURED_CONTENT_MAX_BYTES = 1024 * 1024;
var STRUCTURED_ENVELOPE_RESERVE_BYTES = 4096;
var UNBOUNDED_STRUCTURED_FIELDS = /* @__PURE__ */ new Set([
  "truncated",
  "spill_path",
  "server_preview_ids"
]);
var IDENTIFYING_STRING_KEYS = /* @__PURE__ */ new Set([
  "state",
  "operation",
  "kind",
  "kind_name",
  "outcome",
  "server_id",
  "preview_id",
  "root_path",
  "path",
  "destination_path",
  "from",
  "to",
  "changed_paths",
  "changed_files",
  "created_files",
  "deleted_files"
]);
var IDENTIFYING_STRING_MAX_LENGTH = 4096;
var STRUCTURED_BOUND_LADDER = [
  { strings: 256 * 1024, items: 1e4 },
  { strings: 64 * 1024, items: 2e3 },
  { strings: 16 * 1024, items: 500 },
  { strings: 4096, items: 100 },
  { strings: 1024, items: 20 },
  { strings: 256, items: 5 },
  { strings: 64, items: 1 },
  { strings: 0, items: 0 }
];
function boundStructuredValue(value, strings, items, key = "") {
  if (typeof value === "string") {
    if (value.length <= strings) return value;
    if (IDENTIFYING_STRING_KEYS.has(key) && value.length <= IDENTIFYING_STRING_MAX_LENGTH) {
      return value;
    }
    const last = value.charCodeAt(strings - 1);
    const end = strings > 0 && last >= 55296 && last <= 56319 ? strings - 1 : strings;
    const kept = value.slice(0, end);
    return strings === 0 ? "" : `${kept}\u2026[${value.length - end} characters truncated]`;
  }
  if (Array.isArray(value)) {
    return value.slice(0, items).map((item) => boundStructuredValue(item, strings, items, key));
  }
  if (typeof value !== "object" || value === null) return value;
  return Object.fromEntries(
    Object.entries(value).map(([entryKey, entry]) => [
      entryKey,
      boundStructuredValue(entry, strings, items, entryKey)
    ])
  );
}
function structuredByteLength(value) {
  return Buffer.byteLength(JSON.stringify(value) ?? "null", "utf8");
}
function boundLspStructuredFields(fields, maxBytes = LSP_STRUCTURED_CONTENT_MAX_BYTES) {
  const kept = Object.entries(fields).filter(([key]) => UNBOUNDED_STRUCTURED_FIELDS.has(key));
  const cuttable = Object.entries(fields).filter(([key]) => !UNBOUNDED_STRUCTURED_FIELDS.has(key));
  const reserved = structuredByteLength(Object.fromEntries(kept)) + STRUCTURED_ENVELOPE_RESERVE_BYTES;
  const budget = maxBytes - reserved;
  if (structuredByteLength(Object.fromEntries(cuttable)) <= budget)
    return { fields, bounded: false };
  for (const { strings, items } of STRUCTURED_BOUND_LADDER) {
    const candidate = Object.fromEntries(
      cuttable.map(([key, value]) => [
        key,
        lspStructuredValue(JSON.stringify(boundStructuredValue(value, strings, items, key)))
      ])
    );
    if (structuredByteLength(candidate) <= budget) {
      return {
        fields: { ...candidate, ...Object.fromEntries(kept) },
        bounded: true
      };
    }
  }
  return {
    fields: {
      ...Object.fromEntries(
        cuttable.map(([key, value]) => [
          key,
          lspStructuredValue(JSON.stringify(boundStructuredValue(value, 0, 0, key)))
        ])
      ),
      ...Object.fromEntries(kept)
    },
    bounded: true
  };
}
async function createLspToolOutput(text, details, structured, sessionFiles, maxStructuredBytes = LSP_STRUCTURED_CONTENT_MAX_BYTES) {
  const normalizedDetails = Value4.Parse(LspToolResultDetailsSchema, details);
  const bounded = boundLspStructuredFields(structured, maxStructuredBytes);
  const completeStructured = bounded.bounded ? formatLspToolValue(structured) : text;
  const truncated = await truncateLspOutputText(text, sessionFiles, "output", completeStructured);
  if (truncated.spillPath === void 0 && !bounded.bounded) {
    return {
      content: [{ type: "text", text }],
      details: normalizedDetails,
      structuredContent: { ...structured, truncated: false, structured_truncated: false }
    };
  }
  const spillPath = truncated.spillPath ?? await sessionFiles.writeResultSpill(completeStructured);
  const detailsWithSpill = normalizedDetails.kind === "operation" ? Value4.Parse(LspToolResultDetailsSchema, {
    ...normalizedDetails,
    spill_path: spillPath
  }) : normalizedDetails;
  const warnings = bounded.fields["warnings"];
  const boundedFields = bounded.bounded && Array.isArray(warnings) ? {
    ...bounded.fields,
    warnings: [
      ...warnings,
      `Structured result exceeded ${maxStructuredBytes} bytes and was bounded; the complete structured data is in ${spillPath}.`
    ]
  } : bounded.fields;
  return {
    content: [{ type: "text", text: truncated.text }],
    details: detailsWithSpill,
    structuredContent: {
      ...boundedFields,
      truncated: true,
      structured_truncated: bounded.bounded,
      spill_path: spillPath
    }
  };
}

// src/lsp-location-text.ts
var LOCATION_OPERATIONS = [
  "declaration",
  "goto_definition",
  "goto_type_definition",
  "goto_implementation",
  "find_references",
  "document_highlights"
];
var LOCATION_OPERATION_SET = new Set(LOCATION_OPERATIONS);
function isLspLocationOperation(operation) {
  return LOCATION_OPERATION_SET.has(operation);
}
var LSP_UTF8_DECODER = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
var SOURCE_LINE_MAX_CHARACTERS = 200;
var LspNormalizedPositionSchema = Type5.Object({
  line: Type5.Integer({ minimum: 1 }),
  character: Type5.Integer({ minimum: 1 })
});
var RangeSchema2 = Type5.Object({ start: LspNormalizedPositionSchema });
var LocationSchema2 = Type5.Object({ uri: Type5.String(), range: RangeSchema2 });
var LocationLinkSchema = Type5.Object({
  targetUri: Type5.String(),
  targetSelectionRange: RangeSchema2
});
var DocumentHighlightSchema = Type5.Object({
  range: RangeSchema2,
  kind: Type5.Optional(Type5.Integer())
});
var HIGHLIGHT_KIND_NAMES = /* @__PURE__ */ new Map([
  [1, "text"],
  [2, "read"],
  [3, "write"]
]);
function lspDisplayPath(cwd, filePath) {
  const path = normalizeLspFilePath(filePath);
  if (!isAbsolute2(path)) return path;
  const relativePath = relative2(cwd, path);
  const outside = relativePath === "" || relativePath === ".." || relativePath.startsWith(`..${sep2}`) || isAbsolute2(relativePath);
  return outside ? path : relativePath;
}
var LspSourceLines = class {
  #files = /* @__PURE__ */ new Map();
  async line(path, oneBasedLine) {
    let lines = this.#files.get(path);
    if (lines === void 0) {
      lines = readSourceLines(path);
      this.#files.set(path, lines);
    }
    const line = (await lines)?.[oneBasedLine - 1]?.trim();
    if (line === void 0 || line === "") return void 0;
    return shortenLspText(line);
  }
};
function shortenLspText(text) {
  const characters = Array.from(text);
  return characters.length > SOURCE_LINE_MAX_CHARACTERS ? `${characters.slice(0, SOURCE_LINE_MAX_CHARACTERS).join("")}\u2026` : text;
}
function collapseLspWhitespace(text) {
  return text.replaceAll(/\s+/gu, " ").trim();
}
function compactLspText(text) {
  return shortenLspText(collapseLspWhitespace(text));
}
async function readSourceLines(path) {
  if (!isAbsolute2(path)) return void 0;
  try {
    return documentLines(LSP_UTF8_DECODER.decode(await readFile2(path)));
  } catch {
    return void 0;
  }
}
function lspDisplayPosition(cwd, location) {
  return `${lspDisplayPath(cwd, location.path)}:${location.line}:${location.character}`;
}
function lspRangeText(range) {
  const start = `${range.line}:${range.character}`;
  const { endLine, endCharacter } = range;
  if (endLine === void 0 || endCharacter === void 0) return start;
  if (endLine === range.line) {
    return endCharacter === range.character ? start : `${start}-${endCharacter}`;
  }
  return `${start}-${endLine}:${endCharacter}`;
}
function lspDisplayRange(cwd, range) {
  return `${lspDisplayPath(cwd, range.path)}:${lspRangeText(range)}`;
}
function lspDiagnosticOrigin(source, code) {
  if (code === void 0 || code === null) {
    return source === void 0 || source === null || source === "" ? void 0 : source;
  }
  return `${source ?? ""}(${code})`;
}
async function formatLspLocationLine(location, cwd, sources) {
  const position = lspDisplayPosition(cwd, location);
  const head = location.label === void 0 ? position : `${position} ${location.label}`;
  const source = await sources.line(location.path, location.line);
  return source === void 0 ? head : `${head}  ${source}`;
}
function parseLocationItem(item, documentPath) {
  if (Value5.Check(LocationSchema2, item)) {
    return { path: item.uri, ...item.range.start };
  }
  if (Value5.Check(LocationLinkSchema, item)) {
    return { path: item.targetUri, ...item.targetSelectionRange.start };
  }
  if (Value5.Check(DocumentHighlightSchema, item)) {
    const location = { path: documentPath, ...item.range.start };
    if (item.kind === void 0) return location;
    return { ...location, label: HIGHLIGHT_KIND_NAMES.get(item.kind) ?? `kind ${item.kind}` };
  }
  return void 0;
}
function parseLocations(value, documentPath) {
  if (value === null || value === void 0) return [];
  const items = Array.isArray(value) ? value : [value];
  const locations = items.map((item) => parseLocationItem(item, documentPath));
  return locations.every((location) => location !== void 0) ? locations : void 0;
}
function emptyMessage(operation) {
  if (operation === "find_references") return "No references found.";
  if (operation === "document_highlights") return "No highlights found.";
  return "No locations found.";
}
function assembleLspReadText(input) {
  const grouped = input.blocks.length > 1;
  const lines = input.blocks.flatMap(
    (block) => grouped ? [`${block.server_id}:`, ...block.lines.map((line) => `  ${line}`)] : block.lines
  );
  const warnings = input.warnings.map((warning) => `Warning: ${warning}`);
  const scope = input.scope ?? [];
  return [
    ...scope.length === 0 ? [] : [...scope, ""],
    ...lines,
    ...warnings.length === 0 ? [] : ["", ...warnings]
  ].join("\n");
}
async function formatLspLocationReadText(input) {
  const sources = new LspSourceLines();
  const blocks = await Promise.all(
    input.reads.map(async (read) => {
      const locations = parseLocations(read.value, input.documentPath);
      let lines;
      if (locations === void 0) lines = [formatLspToolValue(read.value)];
      else if (locations.length === 0) {
        lines = [input.emptyMessage?.(read) ?? emptyMessage(input.operation)];
      } else {
        lines = await Promise.all(
          locations.map((location) => formatLspLocationLine(location, input.cwd, sources))
        );
      }
      return { server_id: read.server_id, lines };
    })
  );
  return assembleLspReadText({ blocks, warnings: input.warnings, scope: input.scope ?? [] });
}

// src/lsp-post-edit-diagnostics.ts
var NativeMutationInputSchema = Type6.Object(
  { path: Type6.String() },
  { additionalProperties: true }
);
var ApplyPatchDetailsSchema = Type6.Object(
  {
    status: Type6.Union([Type6.Literal("success"), Type6.Literal("partial_failure")]),
    result: Type6.Object(
      {
        changedFiles: Type6.Array(Type6.String()),
        createdFiles: Type6.Array(Type6.String()),
        deletedFiles: Type6.Array(Type6.String()),
        movedFiles: Type6.Array(
          Type6.Object({ from: Type6.String(), to: Type6.String() }, { additionalProperties: true })
        ),
        fuzz: Type6.Optional(Type6.Number())
      },
      { additionalProperties: true }
    )
  },
  { additionalProperties: true }
);
var WorkspaceEditApplyDetailsSchema2 = Type6.Object(
  {
    kind: Type6.Literal("workspace_edit_apply"),
    state: Type6.Union([Type6.Literal("applied"), Type6.Literal("partial_failure")]),
    changed_paths: Type6.Array(Type6.String())
  },
  { additionalProperties: true }
);
var PostEditLspDiagnosticSchema = Type6.Object(
  {
    serverId: Type6.String({ minLength: 1 }),
    path: Type6.String({ minLength: 1 }),
    line: Type6.Integer({ minimum: 1 }),
    character: Type6.Integer({ minimum: 1 }),
    severity: Type6.Number(),
    message: Type6.String(),
    /** The server's name for the tool that found it, such as `ts` or `eslint`. */
    source: Type6.Optional(Type6.String()),
    /** The server's rule or error code, such as `2322` or `no-unused-vars`. */
    code: Type6.Optional(Type6.Union([Type6.String(), Type6.Number()])),
    /** One-based range end; absent in entries saved before ranges were recorded. */
    endLine: Type6.Optional(Type6.Integer({ minimum: 1 })),
    endCharacter: Type6.Optional(Type6.Integer({ minimum: 1 })),
    /** Set on an error an edit caused in a dependent file rather than in a changed file. */
    dependent: Type6.Optional(Type6.Literal(true))
  },
  { additionalProperties: false }
);
var PostEditDiagnosticOutcomeSchema = Type6.Union([
  Type6.Object(
    { kind: Type6.Literal("diagnostic"), diagnostic: PostEditLspDiagnosticSchema },
    { additionalProperties: false }
  ),
  Type6.Object(
    {
      kind: Type6.Literal("no_diagnostics"),
      path: Type6.String({ minLength: 1 }),
      /** The Server Instance that found the file clean, when one did. */
      serverId: Type6.Optional(Type6.String({ minLength: 1 }))
    },
    { additionalProperties: false }
  ),
  /** Findings of one severity a changed file already had in its Pre-edit Baseline. */
  Type6.Object(
    {
      kind: Type6.Literal("unchanged"),
      path: Type6.String({ minLength: 1 }),
      severity: Type6.Number(),
      count: Type6.Integer({ minimum: 1 })
    },
    { additionalProperties: false }
  ),
  /** A server whose Pre-edit Baseline pull failed or timed out, so its findings for the file are all listed. */
  Type6.Object(
    {
      kind: Type6.Literal("no_baseline"),
      path: Type6.String({ minLength: 1 }),
      serverId: Type6.String({ minLength: 1 })
    },
    { additionalProperties: false }
  ),
  Type6.Object(
    { kind: Type6.Literal("no_configured_server"), path: Type6.String({ minLength: 1 }) },
    { additionalProperties: false }
  ),
  Type6.Object(
    {
      kind: Type6.Literal("timeout"),
      path: Type6.String({ minLength: 1 }),
      serverId: Type6.Optional(Type6.String({ minLength: 1 }))
    },
    { additionalProperties: false }
  ),
  Type6.Object(
    {
      kind: Type6.Literal("unavailable_server"),
      path: Type6.String({ minLength: 1 }),
      serverId: Type6.Optional(Type6.String({ minLength: 1 }))
    },
    { additionalProperties: false }
  ),
  Type6.Object(
    { kind: Type6.Literal("warning"), message: Type6.String() },
    { additionalProperties: false }
  )
]);
function mutationResult(details) {
  return {
    changedPaths: [
      ...details.result.changedFiles,
      ...details.result.createdFiles,
      ...details.result.movedFiles.map(({ to }) => to)
    ],
    deletedPaths: details.result.deletedFiles
  };
}
function manifestDestinationPaths(manifest) {
  const paths = [];
  for (const entry of manifest) {
    if (entry.operation === "delete") continue;
    if (entry.operation === "rename") {
      paths.push(entry.destination_path);
      continue;
    }
    paths.push(entry.path);
  }
  return paths;
}
function pathsAfterMutation(result) {
  const deletedPaths = new Set(result.deletedPaths);
  return [...new Set(result.changedPaths)].filter((path) => !deletedPaths.has(path)).sort((left, right) => left.localeCompare(right)).map((path) => ({ path }));
}
function extractPostEditDiagnosticPaths(event) {
  if (event.toolName === "edit" || event.toolName === "write") {
    if (event.isError || !Value6.Check(NativeMutationInputSchema, event.input)) return void 0;
    return { paths: [{ path: event.input.path }], warnings: [] };
  }
  if (event.toolName === "apply_patch") {
    if (!Value6.Check(ApplyPatchDetailsSchema, event.details)) {
      return {
        paths: [],
        warnings: [
          "Pi LSP: apply_patch diagnostics adapter skipped an unknown Codex result shape."
        ]
      };
    }
    return { paths: pathsAfterMutation(mutationResult(event.details)), warnings: [] };
  }
  if (LSP_APPLY_RESULT_TOOL_NAMES.has(event.toolName)) {
    if (!Value6.Check(MutationManifestSchema, event.input.mutation_manifest) || !Value6.Check(WorkspaceEditApplyDetailsSchema2, event.details)) {
      return void 0;
    }
    const verifiedManifestPaths = manifestDestinationPaths(event.input.mutation_manifest);
    const actualPaths = new Set(event.details.changed_paths);
    return {
      paths: verifiedManifestPaths.filter((path) => actualPaths.has(path)).sort((left, right) => left.localeCompare(right)).map((path) => ({ path })),
      warnings: []
    };
  }
  return void 0;
}
var SEVERITY_NAMES = /* @__PURE__ */ new Map([
  [1, "error"],
  [2, "warning"],
  [3, "info"],
  [4, "hint"]
]);
var SEVERITY_PLURALS = /* @__PURE__ */ new Map([
  [1, "errors"],
  [2, "warnings"],
  [3, "info"],
  [4, "hints"]
]);
function lspSeverityName(severity) {
  return SEVERITY_NAMES.get(severity);
}
function lspSeverityCountsText(counts) {
  return [...counts].filter(([, count]) => count > 0).toSorted(([left], [right]) => left - right).map(([severity, count]) => {
    const name = (count === 1 ? SEVERITY_NAMES : SEVERITY_PLURALS).get(severity) ?? `with severity ${severity}`;
    return `${count} ${name}`;
  }).join(", ");
}
function isShownOutcome(outcome) {
  return outcome.kind !== "no_configured_server";
}
function formatFinding(diagnostic, cwd) {
  const severity = lspSeverityName(diagnostic.severity) ?? `severity ${diagnostic.severity}`;
  const origin = lspDiagnosticOrigin(diagnostic.source, diagnostic.code);
  const message = collapseLspWhitespace(diagnostic.message);
  return `${lspDisplayRange(cwd, diagnostic)} ${severity} [${diagnostic.serverId}]${origin === void 0 ? "" : ` ${origin}`}: ${message}`;
}
function formatOutcome(outcome, cwd) {
  switch (outcome.kind) {
    case "diagnostic":
      return formatFinding(outcome.diagnostic, cwd);
    case "timeout":
      return `${lspDisplayPath(cwd, outcome.path)}: diagnostics timeout${outcome.serverId === void 0 ? "" : ` (${outcome.serverId})`}`;
    case "unavailable_server":
      return `${lspDisplayPath(cwd, outcome.path)}: unavailable server${outcome.serverId === void 0 ? "" : ` (${outcome.serverId})`}`;
    case "no_baseline":
      return `${lspDisplayPath(cwd, outcome.path)}: no pre-edit baseline from ${outcome.serverId}, so all its findings are listed`;
    case "warning":
      return outcome.message;
  }
}
function compareFindings(left, right) {
  return left.severity - right.severity || left.path.localeCompare(right.path) || left.line - right.line || left.character - right.character || (left.endLine ?? left.line) - (right.endLine ?? right.line) || (left.endCharacter ?? left.character) - (right.endCharacter ?? right.character) || left.serverId.localeCompare(right.serverId);
}
function compareOutcomes(left, right, cwd) {
  if (left.kind === "diagnostic" && right.kind === "diagnostic") {
    return compareFindings(left.diagnostic, right.diagnostic);
  }
  if (left.kind === "diagnostic") return -1;
  if (right.kind === "diagnostic") return 1;
  return formatOutcome(left, cwd).localeCompare(formatOutcome(right, cwd));
}
function unchangedCountsByPath(outcomes) {
  const byPath = /* @__PURE__ */ new Map();
  for (const outcome of outcomes) {
    if (outcome.kind !== "unchanged") continue;
    const counts = byPath.get(outcome.path) ?? /* @__PURE__ */ new Map();
    counts.set(outcome.severity, (counts.get(outcome.severity) ?? 0) + outcome.count);
    byPath.set(outcome.path, counts);
  }
  return byPath;
}
function unchangedSummaryLines(unchanged, reported, cwd) {
  return [...unchanged].map(([path, counts]) => {
    const listed = reported.filter(
      (outcome) => outcome.kind === "diagnostic" && outcome.diagnostic.path === path
    ).length;
    const display = lspDisplayPath(cwd, path);
    const countsText = lspSeverityCountsText(counts);
    return listed === 0 ? `${display}: no new diagnostics (unchanged: ${countsText})` : `${display}: ${listed} new; unchanged: ${countsText}`;
  });
}
function cleanPathsLine(paths, reported, unchangedPaths, cwd) {
  const pathsWithFindings = /* @__PURE__ */ new Set([
    ...reported.flatMap(
      (outcome) => outcome.kind === "diagnostic" ? [lspDisplayPath(cwd, outcome.diagnostic.path)] : []
    ),
    ...[...unchangedPaths].map((path) => lspDisplayPath(cwd, path))
  ]);
  const displayed = [...new Set(paths.map((path) => lspDisplayPath(cwd, path)))].filter((path) => !pathsWithFindings.has(path)).sort((left, right) => left.localeCompare(right));
  if (displayed.length === 0) return [];
  return [`no diagnostics: ${displayed.join(", ")}`];
}
function formatPostEditDiagnostics(outcomes, cwd, omittedHints = 0) {
  const omittedNote = omittedHints > 0 ? `${omittedHints} ${omittedHints === 1 ? "hint" : "hints"} omitted` : "";
  const clean = [];
  const reported = [];
  for (const outcome of outcomes) {
    if (outcome.kind === "no_diagnostics") clean.push(outcome.path);
    else if (outcome.kind !== "unchanged") reported.push(outcome);
  }
  const unchanged = unchangedCountsByPath(outcomes);
  if (reported.length === 0) {
    const total = /* @__PURE__ */ new Map();
    for (const counts of unchanged.values()) {
      for (const [severity, count] of counts)
        total.set(severity, (total.get(severity) ?? 0) + count);
    }
    const notes = [
      ...total.size === 0 ? [] : [`unchanged: ${lspSeverityCountsText(total)}`],
      ...omittedNote === "" ? [] : [omittedNote]
    ];
    const head = total.size === 0 ? "no diagnostics" : "no new diagnostics";
    return `

LSP diagnostics: ${head}${notes.length === 0 ? "" : ` (${notes.join("; ")})`}`;
  }
  const findings = reported.filter((outcome) => outcome.kind === "diagnostic");
  const others = reported.filter((outcome) => outcome.kind !== "diagnostic");
  const lines = [
    ...findings.sort((left, right) => compareOutcomes(left, right, cwd)).map((outcome) => formatOutcome(outcome, cwd)),
    ...[
      ...others.map((outcome) => formatOutcome(outcome, cwd)),
      ...unchangedSummaryLines(unchanged, reported, cwd)
    ].sort((left, right) => left.localeCompare(right)),
    ...cleanPathsLine(clean, reported, unchanged.keys(), cwd),
    ...omittedNote === "" ? [] : [omittedNote]
  ];
  return `

LSP diagnostics
${lines.join("\n")}`;
}
var DEPENDENT_HEADING = "LSP diagnostics in dependent files (new errors only)";
function formatDependentDiagnostics(report, cwd) {
  const errors = report.outcomes.filter((outcome) => outcome.kind === "diagnostic").toSorted((left, right) => compareOutcomes(left, right, cwd)).map((outcome) => formatOutcome(outcome, cwd));
  const unchecked = report.scanTimedOut ? ["dependent files not checked: the scan ran out of time"] : report.omittedFiles > 0 ? [
    `${report.omittedFiles} dependent ${report.omittedFiles === 1 ? "file" : "files"} not checked`
  ] : [];
  const lines = [...errors, ...unchecked];
  return lines.length === 0 ? "" : `

${DEPENDENT_HEADING}
${lines.join("\n")}`;
}
var HINT_SEVERITY = 4;
function omitHintOutcomes(outcomes) {
  const kept = [];
  const hintPaths = /* @__PURE__ */ new Set();
  let omittedHints = 0;
  for (const outcome of outcomes) {
    if (outcome.kind === "diagnostic" && outcome.diagnostic.severity === HINT_SEVERITY) {
      omittedHints++;
      hintPaths.add(outcome.diagnostic.path);
    } else if (outcome.kind === "unchanged" && outcome.severity === HINT_SEVERITY) {
      hintPaths.add(outcome.path);
    } else kept.push(outcome);
  }
  const accountedPaths = new Set(
    kept.flatMap(
      (outcome) => outcome.kind === "diagnostic" ? [outcome.diagnostic.path] : outcome.kind === "no_diagnostics" || outcome.kind === "unchanged" ? [outcome.path] : []
    )
  );
  for (const path of hintPaths) {
    if (!accountedPaths.has(path)) kept.push({ kind: "no_diagnostics", path });
  }
  return { outcomes: kept, omittedHints };
}
function settleBaselineOutcomes(outcomes) {
  const listed = new Set(
    outcomes.flatMap(
      (outcome) => outcome.kind === "diagnostic" ? [`${outcome.diagnostic.path}\0${outcome.diagnostic.serverId}`] : []
    )
  );
  const unchanged = /* @__PURE__ */ new Map();
  const settled = [];
  for (const outcome of outcomes) {
    if (outcome.kind === "no_baseline") {
      if (listed.has(`${outcome.path}\0${outcome.serverId}`)) settled.push(outcome);
    } else if (outcome.kind === "unchanged") {
      const key = `${outcome.path}\0${outcome.severity}`;
      const merged = unchanged.get(key);
      unchanged.set(
        key,
        merged === void 0 ? outcome : { ...merged, count: merged.count + outcome.count }
      );
    } else settled.push(outcome);
  }
  return [...settled, ...unchanged.values()];
}
async function appendPostEditDiagnostics(event, diagnostics, cwd, options = {}) {
  const extracted = extractPostEditDiagnosticPaths(event);
  if (extracted === void 0) return void 0;
  const fresh = await diagnostics(extracted.paths);
  const compared = options.preEditBaseline === void 0 ? fresh : await options.preEditBaseline(fresh);
  const shown = compared.filter(isShownOutcome);
  const { outcomes: filtered, omittedHints } = options.includeHints ? { outcomes: shown, omittedHints: 0 } : omitHintOutcomes(shown);
  const outcomes = [
    ...extracted.warnings.map((message) => ({
      kind: "warning",
      message
    })),
    ...settleBaselineOutcomes(filtered)
  ];
  const dependents = await options.dependentDiagnostics?.(extracted.paths);
  const dependentText = dependents === void 0 ? "" : formatDependentDiagnostics(dependents, cwd);
  if (outcomes.length === 0 && dependentText === "") return void 0;
  const mainText = outcomes.length === 0 ? "" : formatPostEditDiagnostics(outcomes, cwd, omittedHints);
  const patch = {
    content: [...event.content, { type: "text", text: `${mainText}${dependentText}` }],
    details: event.details,
    structuredContent: event.structuredContent,
    isError: event.isError,
    outcomes: [...outcomes, ...dependentText === "" ? [] : dependents?.outcomes ?? []]
  };
  return event.usage === void 0 ? patch : { ...patch, usage: event.usage };
}

// src/lsp-post-edit-diagnostics-rendering.ts
import { relative as relative3 } from "node:path";
import { Text as Text2 } from "@earendil-works/pi-tui";
import { Type as Type7 } from "typebox";
import { Value as Value7 } from "typebox/value";
var POST_EDIT_DIAGNOSTICS_ENTRY_TYPE = "pi-lsp-post-edit-diagnostics";
var PostEditDiagnosticsEntryDataSchema = Type7.Object(
  {
    cwd: Type7.String({ minLength: 1 }),
    outcomes: Type7.Array(PostEditDiagnosticOutcomeSchema)
  },
  { additionalProperties: false }
);
function isReportablePostEditDiagnosticOutcome(outcome) {
  return outcome.kind !== "no_diagnostics" && outcome.kind !== "no_configured_server";
}
function diagnosticSeverity(severity) {
  switch (lspSeverityName(severity)) {
    case "error":
      return "error";
    case "warning":
      return "warning";
    case "info":
      return "info";
    case "hint":
      return "hint";
    default:
      return "diagnostic";
  }
}
function severityColor(severity) {
  switch (severity) {
    case "error":
      return "error";
    case "warning":
      return "warning";
    case "info":
      return "accent";
    case "hint":
    case "diagnostic":
      return "muted";
  }
}
function pluralizedCount(count, singular, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}
function entrySummary(data, theme) {
  const counts = /* @__PURE__ */ new Map();
  const files = /* @__PURE__ */ new Set();
  let adapterWarnings = 0;
  let timeouts = 0;
  let serverIssues = 0;
  let unchanged = 0;
  for (const outcome of data.outcomes) {
    switch (outcome.kind) {
      case "diagnostic": {
        const severity = diagnosticSeverity(outcome.diagnostic.severity);
        counts.set(severity, (counts.get(severity) ?? 0) + 1);
        files.add(outcome.diagnostic.path);
        break;
      }
      case "timeout":
        timeouts++;
        files.add(outcome.path);
        break;
      case "unavailable_server":
        serverIssues++;
        files.add(outcome.path);
        break;
      case "unchanged":
        unchanged += outcome.count;
        files.add(outcome.path);
        break;
      case "no_baseline":
        files.add(outcome.path);
        break;
      case "warning":
        adapterWarnings++;
        break;
      case "no_diagnostics":
      case "no_configured_server":
        break;
    }
  }
  const warnings = (counts.get("warning") ?? 0) + adapterWarnings;
  const metrics = [
    [counts.get("error") ?? 0, "error", "errors", "error"],
    [warnings, "warning", "warnings", "warning"],
    [counts.get("info") ?? 0, "info", "info", "accent"],
    [counts.get("hint") ?? 0, "hint", "hints", "muted"],
    [counts.get("diagnostic") ?? 0, "diagnostic", "diagnostics", "muted"],
    [timeouts, "timeout", "timeouts", "warning"],
    [serverIssues, "server issue", "server issues", "warning"],
    [unchanged, "unchanged", "unchanged", "muted"]
  ];
  return joinInline(theme, [
    ...metrics.filter(([count]) => count > 0).map(
      ([count, singular, plural, color]) => theme.fg(color, pluralizedCount(count, singular, plural))
    ),
    theme.fg("muted", pluralizedCount(files.size, "file"))
  ]);
}
function displayPath(cwd, path) {
  const relativePath = relative3(cwd, path);
  return relativePath !== "" && !relativePath.startsWith("..") ? relativePath : path;
}
function outcomePath(outcome) {
  return outcome.kind === "diagnostic" ? outcome.diagnostic.path : outcome.kind === "warning" ? void 0 : outcome.path;
}
function compareReportableOutcomes(left, right) {
  const leftPath = outcomePath(left) ?? "";
  const rightPath = outcomePath(right) ?? "";
  if (leftPath !== rightPath) return leftPath.localeCompare(rightPath);
  if (left.kind === "diagnostic" && right.kind === "diagnostic") {
    return left.diagnostic.severity - right.diagnostic.severity || left.diagnostic.line - right.diagnostic.line || left.diagnostic.character - right.diagnostic.character || left.diagnostic.serverId.localeCompare(right.diagnostic.serverId);
  }
  if (left.kind === "diagnostic") return -1;
  if (right.kind === "diagnostic") return 1;
  if (left.kind === "unchanged" && right.kind === "unchanged") {
    return left.severity - right.severity;
  }
  if (left.kind === "unchanged") return 1;
  if (right.kind === "unchanged") return -1;
  return left.kind.localeCompare(right.kind);
}
function diagnosticLine(outcome, theme) {
  const diagnostic = outcome.diagnostic;
  const severity = diagnosticSeverity(diagnostic.severity);
  const origin = lspDiagnosticOrigin(diagnostic.source, diagnostic.code);
  const server = origin === void 0 ? diagnostic.serverId : `${diagnostic.serverId} ${origin}`;
  return `${theme.fg(severityColor(severity), lspRangeText(diagnostic))}  ${theme.fg("customMessageText", diagnostic.message)}  ${theme.fg("muted", server)}`;
}
function unavailableLine(outcome, theme) {
  const label = outcome.kind === "timeout" ? "Diagnostics timed out" : outcome.kind === "no_baseline" ? "No pre-edit baseline; all findings listed" : "Server unavailable";
  return `${theme.fg("warning", label)}${outcome.serverId === void 0 ? "" : `  ${theme.fg("muted", outcome.serverId)}`}`;
}
function unchangedLine(outcomes, theme) {
  const counts = /* @__PURE__ */ new Map();
  for (const { severity, count } of outcomes) {
    counts.set(severity, (counts.get(severity) ?? 0) + count);
  }
  return theme.fg("muted", `unchanged: ${lspSeverityCountsText(counts)}`);
}
function outcomeLines(data, theme) {
  const lines = [];
  const reportable = data.outcomes.filter(isReportablePostEditDiagnosticOutcome).sort(compareReportableOutcomes);
  const outcomesByPath = /* @__PURE__ */ new Map();
  const warnings = [];
  for (const outcome of reportable) {
    if (outcome.kind === "warning") {
      warnings.push(outcome);
      continue;
    }
    const path = outcomePath(outcome);
    if (path === void 0) continue;
    const entries = outcomesByPath.get(path) ?? [];
    entries.push(outcome);
    outcomesByPath.set(path, entries);
  }
  for (const [path, outcomes] of outcomesByPath) {
    const dependent = outcomes.some(
      (outcome) => outcome.kind === "diagnostic" && outcome.diagnostic.dependent === true
    );
    lines.push(
      `${theme.fg("accent", displayPath(data.cwd, path))}${dependent ? `  ${theme.fg("muted", "dependent file")}` : ""}`
    );
    for (const outcome of outcomes) {
      if (outcome.kind === "warning" || outcome.kind === "unchanged") continue;
      lines.push(
        outcome.kind === "diagnostic" ? diagnosticLine(outcome, theme) : unavailableLine(outcome, theme)
      );
    }
    const unchanged = outcomes.filter((outcome) => outcome.kind === "unchanged");
    if (unchanged.length > 0) lines.push(unchangedLine(unchanged, theme));
  }
  if (warnings.length > 0) {
    lines.push(theme.fg("warning", "Warnings"));
    for (const warning of warnings) lines.push(theme.fg("customMessageText", warning.message));
  }
  return lines;
}
function createPostEditDiagnosticsEntryData(cwd, outcomes) {
  const reportable = outcomes.filter(isReportablePostEditDiagnosticOutcome);
  return reportable.length === 0 ? void 0 : Value7.Parse(PostEditDiagnosticsEntryDataSchema, { cwd, outcomes: reportable });
}
function renderPostEditDiagnosticsEntry(data, options, theme) {
  const outcomes = new Text2(outcomeLines(data, theme).join("\n"), 0, 0);
  const heading = joinInline(theme, [
    theme.fg("customMessageText", "edit diagnostics"),
    entrySummary(data, theme)
  ]);
  return customMessageBox(theme, { outputPad: options.outputPad ?? 1, source: "lsp", heading }, [
    new CollapsedPreview(theme, outcomes, {
      limit: COLLAPSED_LINES.fallback,
      expanded: options.expanded
    })
  ]);
}

// src/lsp-command.ts
import { parseArgs } from "node:util";
function knownLspServerRoots(manager, serverId) {
  return manager.getStatus().servers.filter((server) => server.serverId === serverId).flatMap((server) => server.rootPath === void 0 ? [] : [server.rootPath]);
}
function notifyLspCommand(context, message, level) {
  const body = message.replace(/^Pi LSP:\s*/u, "");
  const text = level === "info" ? body : noticeText("LSP", body);
  if (context.hasUI) context.ui.notify(text, level);
  else process.stderr.write(`${text}
`);
}
function lspSharedWithSessionsText(otherSessions) {
  return `shared with ${otherSessions} other session${otherSessions === 1 ? "" : "s"}`;
}
function statusLabel(server, manager) {
  const enablement = manager.getEnablement(server.serverId);
  return `${server.serverId} \u2014 ${server.state}${server.rootPath === void 0 ? "" : ` \u2014 ${server.rootPath}`} \u2014 ${enablement.enabled ? "enabled" : "disabled"} (${enablement.scope})${server.error === void 0 ? "" : ` \u2014 ${server.error}`}${server.sharedWithSessions === void 0 ? "" : ` \u2014 ${lspSharedWithSessionsText(server.sharedWithSessions)}`}`;
}
function formatLspCommandStatus(manager) {
  const status = manager.getStatus();
  return [
    status.servers.length === 0 ? "No configured Server Definitions." : "LSP servers:",
    ...status.servers.map((server) => statusLabel(server, manager)),
    ...status.warnings
  ].join("\n");
}
async function selectLspCommand(manager, context, isCurrent) {
  const rows = new Map(
    manager.getStatus().servers.map((server2) => [statusLabel(server2, manager), server2])
  );
  if (rows.size === 0) {
    notifyLspCommand(context, "No configured Server Definitions.", "info");
    return void 0;
  }
  const selected = await context.ui.select("Pi LSP: select a server", [...rows.keys()]);
  if (selected === void 0 || !isCurrent()) return void 0;
  const server = rows.get(selected);
  if (server === void 0) return void 0;
  const actions = server.rootPath === void 0 ? ["enable", "disable"] : ["stop", "enable", "disable"];
  const action = await context.ui.select(
    `${server.serverId}: stop this root, or enable/disable all roots`,
    actions
  );
  if (action === void 0 || !isCurrent()) return void 0;
  if (action === "stop" && server.rootPath !== void 0)
    return { action, serverId: server.serverId, rootPath: server.rootPath };
  if (action !== "enable" && action !== "disable") return void 0;
  const scope = await context.ui.select(`${action} ${server.serverId}: scope`, [
    "session",
    "project",
    "global"
  ]);
  if (!isCurrent() || scope !== "session" && scope !== "project" && scope !== "global")
    return void 0;
  return { action, serverId: server.serverId, scope };
}
function quoteCommandToken(value, preferred) {
  if (preferred === "'") return `'${value.replaceAll("'", "'\\''")}'`;
  return preferred === '"' || /[\s"'\\]/u.test(value) ? `"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"` : value;
}
function completeLspCommandArguments(prefix, manager) {
  const normalized = prefix.trimStart();
  const actionMatch = /^(stop|enable|disable)\s+/u.exec(normalized);
  let candidates = [];
  if (actionMatch === null) {
    candidates = ["stop", "enable", "disable"].map((value) => ({ value, label: value }));
  } else if (manager !== void 0) {
    const actionPrefix = actionMatch[0];
    const argument = normalized.slice(actionPrefix.length);
    const status = manager.getStatus();
    for (const serverId of new Set(status.servers.map((server) => server.serverId))) {
      const id = quoteCommandToken(serverId, argument[0]);
      const serverPrefix = `${actionPrefix}${id}`;
      if (normalized.startsWith(`${serverPrefix} `)) {
        const tail = normalized.slice(serverPrefix.length + 1);
        const values = actionMatch[1] === "stop" ? knownLspServerRoots(manager, serverId) : ["--global", "--project"];
        candidates.push(
          ...values.map((value) => ({
            value: `${serverPrefix} ${quoteCommandToken(value, tail[0])}`,
            label: value
          }))
        );
      } else {
        const enablement = manager.getEnablement(serverId);
        candidates.push({
          value: serverPrefix,
          label: serverId,
          description: `${enablement.enabled ? "enabled" : "disabled"} (${enablement.scope})`
        });
      }
    }
  }
  const matches = candidates.filter((item) => item.value.startsWith(normalized));
  return matches.length === 0 ? null : matches;
}
var USAGE = "Pi LSP: usage: /lsp stop <server-id> [root] | enable|disable <server-id> [--global|--project]";
function commandTokens(args) {
  const tokens = [];
  let token = "";
  let quote = "";
  let started = false;
  for (let index = 0; index < args.length; index += 1) {
    const character = args[index] ?? "";
    if (character === "\\" && quote !== "'") {
      const next = args[index + 1];
      if (next === void 0) throw new Error(`${USAGE}
Trailing escape.`);
      if (/[\s\\"']/u.test(next)) {
        token += next;
        index += 1;
      } else token += character;
    } else if (quote !== "") {
      if (character === quote) quote = "";
      else token += character;
    } else if (character === "'" || character === '"') {
      quote = character;
    } else if (/\s/u.test(character)) {
      if (started) tokens.push(token);
      token = "";
      started = false;
      continue;
    } else token += character;
    started = true;
  }
  if (quote !== "") throw new Error(`${USAGE}
Unclosed quote.`);
  if (started) tokens.push(token);
  return tokens;
}
function parseLspCommandArguments(args) {
  const { values, positionals, tokens } = parseArgs({
    args: commandTokens(args),
    options: { global: { type: "boolean" }, project: { type: "boolean" } },
    allowPositionals: true,
    strict: true,
    tokens: true
  });
  const [action, serverId, rootPath, ...rest] = positionals;
  if (!serverId || rootPath === "" || rest.length > 0 || tokens.filter((token) => token.kind === "option").length > 1) {
    throw new Error(USAGE);
  }
  if (action === "stop" && !values.global && !values.project) {
    return rootPath === void 0 ? { action, serverId } : { action, serverId, rootPath };
  }
  if ((action === "enable" || action === "disable") && rootPath === void 0) {
    return {
      action,
      serverId,
      scope: values.global ? "global" : values.project ? "project" : "session"
    };
  }
  throw new Error(USAGE);
}

// ../pi-utils/src/locked-file-update.ts
var import_proper_lockfile = __toESM(require_proper_lockfile(), 1);
import { randomUUID as randomUUID2 } from "node:crypto";
import {
  closeSync,
  fchmodSync,
  fsyncSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync as readFileSync2,
  realpathSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync
} from "node:fs";
import { basename as basename2, dirname as dirname3, join as join2 } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
var LOCK_ATTEMPTS = 100;
var LOCK_RETRY_DELAY_MS = 20;
var NEW_FILE_MODE = 384;
async function acquireLock(path) {
  for (let attempt = 1; ; attempt++) {
    try {
      return (0, import_proper_lockfile.lockSync)(path, { realpath: false });
    } catch (cause) {
      const locked = cause instanceof Error && "code" in cause && cause.code === "ELOCKED";
      if (!locked || attempt >= LOCK_ATTEMPTS) throw cause;
      await delay(LOCK_RETRY_DELAY_MS);
    }
  }
}
async function updateFileLocked(path, update, options = {}) {
  mkdirSync(dirname3(path), { recursive: true, mode: 448 });
  const release = await acquireLock(path);
  try {
    const file = lstatSync(path, { throwIfNoEntry: false });
    const target = file?.isSymbolicLink() === true ? realpathSync(path) : path;
    const next = update(file === void 0 ? void 0 : readFileSync2(target, "utf8"));
    if (next === void 0) return false;
    const mode = options.mode ?? (file === void 0 ? NEW_FILE_MODE : statSync(target).mode & 4095);
    const temporaryPath = join2(dirname3(target), `.${basename2(target)}.${randomUUID2()}.tmp`);
    try {
      const handle = openSync(temporaryPath, "wx", mode);
      try {
        writeFileSync(handle, next, "utf8");
        fchmodSync(handle, mode);
        fsyncSync(handle);
      } finally {
        closeSync(handle);
      }
      renameSync(temporaryPath, target);
    } finally {
      rmSync(temporaryPath, { force: true });
    }
    return true;
  } finally {
    release();
  }
}

// src/lsp-settings-store.ts
import { resolve as resolve3 } from "node:path";
import { Type as Type8 } from "typebox";
import { Value as Value8 } from "typebox/value";
var SettingsDocumentSchema = Type8.Object({
  lsp: Type8.Optional(
    Type8.Object({
      enablement: Type8.Optional(
        Type8.Record(Type8.String({ pattern: "^[\\s\\S]+$" }), Type8.Boolean(), {
          additionalProperties: false
        })
      )
    })
  )
});
async function writeLspEnablement(input) {
  if (input.scope === "project" && !input.projectTrusted) {
    throw new Error("Pi LSP: cannot modify settings in an untrusted project");
  }
  if (input.serverId.length === 0) throw new Error("Pi LSP: server ID must not be empty");
  const settingsPath = input.scope === "global" ? resolve3(input.agentDirectory, "settings.json") : resolve3(input.cwd, ".pi/settings.json");
  await updateFileLocked(settingsPath, (current) => {
    const bom = current?.startsWith("\uFEFF") === true ? "\uFEFF" : "";
    const parsed = current === void 0 ? {} : JSON.parse(current.slice(bom.length));
    if (!Value8.Check(SettingsDocumentSchema, parsed)) {
      throw new Error(`Pi LSP: invalid settings document or lsp.enablement in ${settingsPath}`);
    }
    if (parsed.lsp?.enablement?.[input.serverId] === input.enabled) return void 0;
    parsed.lsp = {
      ...parsed.lsp,
      enablement: { ...parsed.lsp?.enablement, [input.serverId]: input.enabled }
    };
    return `${bom}${JSON.stringify(parsed, void 0, 2)}
`;
  });
}

// src/lsp-session-files.ts
import { chmod, mkdir as mkdir2, mkdtemp, rm as rm2, writeFile as writeFile2 } from "node:fs/promises";
import { tmpdir as tmpdir2 } from "node:os";
import { join as join3 } from "node:path";
var LspSessionFileStore = class {
  /** Create a private file store rooted at the given session directory. */
  constructor(directoryPath) {
    this.directoryPath = directoryPath;
  }
  directoryPath;
  closed = false;
  closePromise;
  nextFileIndex = 0;
  writeQueue = Promise.resolve();
  writeResultSpill(output) {
    const path = join3(this.directoryPath, `result-spill-${this.nextFileIndex++}.txt`);
    return this.enqueueSessionFileWrite(async () => {
      await writeFile2(path, output, { encoding: "utf8", mode: 384 });
      await chmod(path, 384);
      return path;
    });
  }
  close() {
    if (this.closePromise !== void 0) return this.closePromise;
    this.closed = true;
    this.closePromise = this.writeQueue.then(
      () => rm2(this.directoryPath, { force: true, recursive: true }),
      () => rm2(this.directoryPath, { force: true, recursive: true })
    );
    return this.closePromise;
  }
  enqueueSessionFileWrite(write) {
    if (this.closed) return Promise.reject(new Error("Pi LSP: session files are closed"));
    const result = this.writeQueue.then(write);
    this.writeQueue = result.then(
      () => void 0,
      () => void 0
    );
    return result;
  }
};
async function createLspSessionFiles(sessionDirectory) {
  const parentDirectory = sessionDirectory.length > 0 ? sessionDirectory : tmpdir2();
  await mkdir2(parentDirectory, { mode: 448, recursive: true });
  const directoryPath = await mkdtemp(join3(parentDirectory, "pi-lsp-"));
  await chmod(directoryPath, 448);
  return new LspSessionFileStore(directoryPath);
}

// src/lsp-tool.ts
import { stat as stat2 } from "node:fs/promises";
import { resolve as resolve5 } from "node:path";

// ../pi-utils/src/null-optional-arguments.ts
import { Value as Value9 } from "typebox/value";
function isEntry(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function satisfies(schema, value) {
  try {
    return Value9.Check(schema, value);
  } catch {
    return false;
  }
}
function acceptsNull(schema) {
  if (isEntry(schema) && typeof schema.$ref === "string") return true;
  try {
    return Value9.Check(schema, null);
  } catch {
    return true;
  }
}
function normalizeUnion(branches, value) {
  if (branches.some((branch) => satisfies(branch, value))) return value;
  for (const branch of branches) {
    const candidate = normalize(branch, value);
    if (candidate !== value && satisfies(branch, candidate)) return candidate;
  }
  return value;
}
function normalizeElements(schema, items) {
  const { prefixItems, items: itemSchema } = schema;
  const positional = Array.isArray(prefixItems) ? prefixItems : Array.isArray(itemSchema) ? itemSchema : [];
  const rest = Array.isArray(itemSchema) ? schema.additionalItems : itemSchema;
  let copy;
  for (const [index, item] of items.entries()) {
    const normalized = normalize(positional[index] ?? rest, item);
    if (normalized === item) continue;
    copy ??= [...items];
    copy[index] = normalized;
  }
  return copy ?? items;
}
function normalizeProperties(schema, value) {
  const { properties } = schema;
  if (!isEntry(properties)) return value;
  const required = new Set(Array.isArray(schema.required) ? schema.required : []);
  let copy;
  for (const [key, propertySchema] of Object.entries(properties)) {
    if (!Object.hasOwn(value, key)) continue;
    const current = value[key];
    if (current === null && !required.has(key) && !acceptsNull(propertySchema)) {
      copy ??= { ...value };
      delete copy[key];
      continue;
    }
    const normalized = normalize(propertySchema, current);
    if (normalized === current) continue;
    copy ??= { ...value };
    copy[key] = normalized;
  }
  return copy ?? value;
}
function normalize(schema, value) {
  if (!isEntry(schema)) return value;
  let next = value;
  if (Array.isArray(schema.allOf)) {
    for (const member of schema.allOf) next = normalize(member, next);
  }
  for (const union of [schema.anyOf, schema.oneOf]) {
    if (Array.isArray(union)) next = normalizeUnion(union, next);
  }
  if (Array.isArray(next)) return normalizeElements(schema, next);
  return isEntry(next) ? normalizeProperties(schema, next) : next;
}
function omitNullOptionalArguments(schema, args) {
  return normalize(schema, args);
}
function acceptNullForOptionalArguments(tool) {
  const { parameters, prepareArguments } = tool;
  return {
    ...tool,
    prepareArguments: (args) => {
      const normalized = omitNullOptionalArguments(parameters, args);
      return prepareArguments === void 0 ? normalized : prepareArguments(normalized);
    }
  };
}

// src/lsp-tool.ts
var import_node2 = __toESM(require_main2(), 1);
import { Type as Type19 } from "typebox";
import { Value as Value20 } from "typebox/value";

// src/lsp-diagnostics-text.ts
import { Type as Type9 } from "typebox";
import { Value as Value10 } from "typebox/value";
var DIAGNOSTICS_OPERATIONS = [
  "diagnostics",
  "workspace_diagnostics"
];
var DIAGNOSTICS_OPERATION_SET = new Set(DIAGNOSTICS_OPERATIONS);
function isLspDiagnosticsOperation(operation) {
  return DIAGNOSTICS_OPERATION_SET.has(operation);
}
var DiagnosticSchema = Type9.Object({
  range: Type9.Object({
    start: LspNormalizedPositionSchema,
    end: Type9.Optional(LspNormalizedPositionSchema)
  }),
  message: Type9.String(),
  severity: Type9.Optional(Type9.Union([Type9.Integer(), Type9.Null()])),
  source: Type9.Optional(Type9.Union([Type9.String(), Type9.Null()])),
  code: Type9.Optional(Type9.Union([Type9.String(), Type9.Integer(), Type9.Null()]))
});
var DiagnosticListSchema = Type9.Array(Type9.Unknown());
var DocumentDiagnosticsSchema = Type9.Union([
  Type9.Object({ status: Type9.Literal("fresh"), diagnostics: DiagnosticListSchema }),
  Type9.Object({
    status: Type9.Literal("timeout"),
    diagnostics: DiagnosticListSchema,
    waitedMs: Type9.Number({ minimum: 0 }),
    pushOnly: Type9.Boolean(),
    remembered: Type9.Boolean()
  })
]);
var WorkspaceDiagnosticsSchema = Type9.Union([
  Type9.Object({
    status: Type9.Union([Type9.Literal("fresh"), Type9.Literal("timeout")]),
    diagnosticsByUri: Type9.Array(Type9.Object({ uri: Type9.String(), value: DiagnosticListSchema })),
    message: Type9.Optional(Type9.String())
  }),
  Type9.Object({ status: Type9.Literal("unsupported"), message: Type9.String() })
]);
function diagnosticLine2(path, diagnostic, cwd) {
  if (!Value10.Check(DiagnosticSchema, diagnostic)) return formatLspToolValue(diagnostic);
  const { severity, source, code, range } = diagnostic;
  const head = [
    lspDisplayRange(cwd, {
      path,
      ...range.start,
      endLine: range.end?.line,
      endCharacter: range.end?.character
    }),
    severity === void 0 || severity === null ? void 0 : lspSeverityName(severity) ?? `severity ${severity}`,
    lspDiagnosticOrigin(source, code)
  ].filter((part) => part !== void 0 && part !== null && part !== "").join(" ");
  return `${head}: ${collapseLspWhitespace(diagnostic.message)}`;
}
function waitText(waitedMs) {
  return waitedMs < 1e3 ? `${Math.round(waitedMs)}ms` : `${Number((waitedMs / 1e3).toFixed(1))}s`;
}
function silenceText(serverId, silence) {
  const wait = waitText(silence.waitedMs);
  if (!silence.pushOnly) {
    return `no diagnostics received from ${serverId} within ${wait} (the request stalled; the server may still be starting or indexing, so retry later)`;
  }
  return silence.remembered ? `no diagnostics published by ${serverId} for this unchanged file (an earlier wait of ${wait} saw none; not a failure, the file may be clean; edit the file to wait again)` : `no diagnostics published by ${serverId} within ${wait} (not a failure; a server that only pushes diagnostics stays silent for a clean file, so the file may be clean)`;
}
function documentDiagnosticLines(value, serverId, input) {
  if (!Value10.Check(DocumentDiagnosticsSchema, value)) return [formatLspToolValue(value)];
  const path = lspDisplayPath(input.cwd, input.documentPath);
  if (value.status === "timeout") {
    return [`${path}: ${silenceText(serverId, value)}`];
  }
  if (value.diagnostics.length === 0) return [`${path}: no diagnostics`];
  return value.diagnostics.map(
    (diagnostic) => diagnosticLine2(input.documentPath, diagnostic, input.cwd)
  );
}
function workspaceDiagnosticLines(value, cwd) {
  if (!Value10.Check(WorkspaceDiagnosticsSchema, value)) return [formatLspToolValue(value)];
  if (value.status === "unsupported") return [value.message];
  const findings = value.diagnosticsByUri.flatMap(
    (file) => file.value.map((diagnostic) => diagnosticLine2(file.uri, diagnostic, cwd))
  );
  const clean = value.diagnosticsByUri.filter((file) => file.value.length === 0).length;
  let status = [];
  if (value.status === "timeout") status = ["Workspace diagnostics timeout"];
  else if (value.message === void 0 && value.diagnosticsByUri.length === 0) {
    status = ["No diagnostics."];
  }
  return [
    ...value.message === void 0 ? [] : [value.message],
    ...status,
    ...findings,
    ...clean === 0 ? [] : [`${pluralizedCount(clean, "file")}: no diagnostics`]
  ];
}
function formatLspDiagnosticsReadText(input) {
  const blocks = input.reads.map((read) => ({
    server_id: read.server_id,
    lines: input.operation === "diagnostics" ? documentDiagnosticLines(read.value, read.server_id, input) : workspaceDiagnosticLines(read.value, input.cwd)
  }));
  return assembleLspReadText({ blocks, warnings: input.warnings });
}

// src/lsp-hover-text.ts
import { Type as Type10 } from "typebox";
import { Value as Value11 } from "typebox/value";
var MarkedStringSchema = Type10.Union([
  Type10.String(),
  Type10.Object({ language: Type10.String(), value: Type10.String() })
]);
var MarkupContentSchema = Type10.Object({ kind: Type10.String(), value: Type10.String() });
var HoverSchema = Type10.Object({
  contents: Type10.Union([MarkupContentSchema, MarkedStringSchema, Type10.Array(MarkedStringSchema)])
});
function markedStringText(marked) {
  if (typeof marked === "string") return marked;
  return `\`\`\`${marked.language}
${marked.value}
\`\`\``;
}
function hoverContentsText(contents) {
  if (Array.isArray(contents)) return contents.map(markedStringText).join("\n\n").trim();
  if (Value11.Check(MarkupContentSchema, contents)) return contents.value.trim();
  return markedStringText(contents).trim();
}
function hoverLines(read) {
  if (read.value === null || read.value === void 0) return void 0;
  if (!Value11.Check(HoverSchema, read.value)) return [formatLspToolValue(read.value)];
  const text = hoverContentsText(read.value.contents);
  return text === "" ? void 0 : text.split("\n");
}
function formatLspHoverReadText(input) {
  const hovers = input.reads.map((read) => ({ read, lines: hoverLines(read) }));
  if (hovers.every(({ lines }) => lines === void 0)) {
    return assembleLspReadText({
      blocks: [{ server_id: "", lines: [...new Set(input.reads.map(input.emptyMessage))] }],
      warnings: input.warnings
    });
  }
  const blocks = hovers.map(({ read, lines }) => ({
    server_id: read.server_id,
    lines: lines ?? [input.emptyMessage(read)]
  }));
  return assembleLspReadText({ blocks, warnings: input.warnings, scope: input.scope });
}

// src/lsp-item-list.ts
import { Type as Type12 } from "typebox";
import { Value as Value13 } from "typebox/value";

// src/lsp-structure-text.ts
import { Type as Type11 } from "typebox";
import { Value as Value12 } from "typebox/value";
var STRUCTURE_OPERATIONS = [
  "document_symbols",
  "workspace_symbols",
  "call_hierarchy",
  "incoming_calls",
  "outgoing_calls",
  "type_hierarchy",
  "supertypes",
  "subtypes",
  "selection_ranges",
  "folding_ranges"
];
var STRUCTURE_OPERATION_SET = new Set(STRUCTURE_OPERATIONS);
function isLspStructureOperation(operation) {
  return STRUCTURE_OPERATION_SET.has(operation);
}
var SYMBOL_KIND_NAMES = [
  "file",
  "module",
  "namespace",
  "package",
  "class",
  "method",
  "property",
  "field",
  "constructor",
  "enum",
  "interface",
  "function",
  "variable",
  "constant",
  "string",
  "number",
  "boolean",
  "array",
  "object",
  "key",
  "null",
  "enum member",
  "struct",
  "event",
  "operator",
  "type parameter"
];
var DEPRECATED_SYMBOL_TAG = 1;
var RangeSchema3 = Type11.Object({
  start: LspNormalizedPositionSchema,
  end: LspNormalizedPositionSchema
});
var OptionalTextSchema = Type11.Optional(Type11.Union([Type11.String(), Type11.Null()]));
var SymbolFieldsSchema = Type11.Object({
  name: Type11.String(),
  kind: Type11.Integer(),
  tags: Type11.Optional(Type11.Union([Type11.Array(Type11.Integer()), Type11.Null()])),
  deprecated: Type11.Optional(Type11.Union([Type11.Boolean(), Type11.Null()])),
  detail: OptionalTextSchema
});
var DocumentSymbolSchema2 = Type11.Intersect([
  SymbolFieldsSchema,
  Type11.Object({
    selectionRange: RangeSchema3,
    children: Type11.Optional(Type11.Union([Type11.Array(Type11.Unknown()), Type11.Null()]))
  })
]);
var SymbolInformationSchema = Type11.Intersect([
  SymbolFieldsSchema,
  Type11.Object({
    containerName: OptionalTextSchema,
    location: Type11.Object({ uri: Type11.String(), range: Type11.Optional(RangeSchema3) })
  })
]);
var HierarchyItemSchema = Type11.Intersect([
  SymbolFieldsSchema,
  Type11.Object({ uri: Type11.String(), selectionRange: RangeSchema3 })
]);
var IncomingCallSchema = Type11.Object({
  from: HierarchyItemSchema,
  fromRanges: Type11.Array(RangeSchema3)
});
var OutgoingCallSchema = Type11.Object({
  to: HierarchyItemSchema,
  fromRanges: Type11.Array(RangeSchema3)
});
var SelectionRangeSchema = Type11.Object({
  range: RangeSchema3,
  parent: Type11.Optional(Type11.Unknown())
});
var FoldingRangeSchema = Type11.Object({
  startLine: Type11.Integer({ minimum: 1 }),
  endLine: Type11.Integer({ minimum: 1 }),
  kind: OptionalTextSchema
});
function lspKnownSymbolKindName(kind) {
  return SYMBOL_KIND_NAMES[kind - 1];
}
function symbolKindName(kind) {
  return lspKnownSymbolKindName(kind) ?? `kind ${kind}`;
}
function symbolLine(symbol, location, suffix) {
  const deprecated = symbol.deprecated === true || symbol.tags?.includes(DEPRECATED_SYMBOL_TAG);
  const kind = deprecated ? `${symbolKindName(symbol.kind)}, deprecated` : symbolKindName(symbol.kind);
  const head = `${compactLspText(symbol.name)} (${kind}) ${location}`;
  const extra = suffix === void 0 || suffix === null ? "" : compactLspText(suffix);
  return extra === "" ? head : `${head}  ${extra}`;
}
function rangePosition(path, range) {
  return { path, line: range.start.line, character: range.start.character };
}
function documentSymbolLines(value, context, depth) {
  if (!Value12.Check(DocumentSymbolSchema2, value)) return void 0;
  const location = lspDisplayPosition(
    context.input.cwd,
    rangePosition(context.input.documentPath, value.selectionRange)
  );
  const lines = [`${"  ".repeat(depth)}${symbolLine(value, location, value.detail)}`];
  for (const child of value.children ?? []) {
    const childLines = documentSymbolLines(child, context, depth + 1);
    if (childLines === void 0) return void 0;
    lines.push(...childLines);
  }
  return lines;
}
function symbolLines(item, context) {
  if (Value12.Check(SymbolInformationSchema, item)) {
    const { uri, range } = item.location;
    const location = range === void 0 ? lspDisplayPath(context.input.cwd, uri) : lspDisplayPosition(context.input.cwd, rangePosition(uri, range));
    const container = item.containerName === void 0 || item.containerName === null || item.containerName === "" ? void 0 : `in ${item.containerName}`;
    return [symbolLine(item, location, container)];
  }
  return documentSymbolLines(item, context, 0);
}
function hierarchyItemLine(item, cwd) {
  return symbolLine(
    item,
    lspDisplayPosition(cwd, rangePosition(item.uri, item.selectionRange)),
    item.detail
  );
}
async function callLines(item, sitePath, sites, context) {
  const siteLines = await Promise.all(
    sites.map(
      (site) => formatLspLocationLine(rangePosition(sitePath, site), context.input.cwd, context.sources)
    )
  );
  return [hierarchyItemLine(item, context.input.cwd), ...siteLines.map((line) => `  ${line}`)];
}
async function hierarchyLines(item, context) {
  switch (context.input.operation) {
    case "incoming_calls":
      if (!Value12.Check(IncomingCallSchema, item)) return void 0;
      return callLines(item.from, item.from.uri, item.fromRanges, context);
    case "outgoing_calls":
      if (!Value12.Check(OutgoingCallSchema, item)) return void 0;
      return callLines(
        item.to,
        context.input.outgoingCallSitePath?.(item) ?? context.input.documentPath,
        item.fromRanges,
        context
      );
    default:
      if (!Value12.Check(HierarchyItemSchema, item)) return void 0;
      return [hierarchyItemLine(item, context.input.cwd)];
  }
}
function formatRange(range) {
  return `${range.start.line}:${range.start.character}-${range.end.line}:${range.end.character}`;
}
function selectionRangeChain(value) {
  const lines = [];
  let current = value;
  while (current !== void 0 && current !== null) {
    if (!Value12.Check(SelectionRangeSchema, current)) return void 0;
    lines.push(formatRange(current.range));
    current = current.parent;
  }
  return lines;
}
function selectionRangeLines(items, context) {
  const chains = items.map(selectionRangeChain);
  if (!chains.every((chain) => chain !== void 0)) return void 0;
  if (chains.length === 1) return chains[0];
  const positions = context.input.positions;
  return chains.flatMap((chain, index) => {
    const position = positions?.length === chains.length ? positions[index] : void 0;
    const header = position === void 0 ? `Position ${index + 1}:` : `${position.line}:${position.character}:`;
    return [header, ...chain.map((line) => `  ${line}`)];
  });
}
async function foldingRangeLine(item, context) {
  if (!Value12.Check(FoldingRangeSchema, item)) return void 0;
  const lines = `${item.startLine}-${item.endLine}`;
  const head = item.kind === void 0 || item.kind === null ? lines : `${lines} ${item.kind}`;
  const source = await context.sources.line(context.input.documentPath, item.startLine);
  return source === void 0 ? head : `${head}  ${source}`;
}
async function itemLines(items, context) {
  const { operation } = context.input;
  let rendered;
  switch (operation) {
    case "document_symbols":
    case "workspace_symbols":
      rendered = items.map((item) => symbolLines(item, context));
      break;
    case "selection_ranges":
      return selectionRangeLines(items, context);
    case "folding_ranges":
      rendered = await Promise.all(
        items.map(async (item) => {
          const line = await foldingRangeLine(item, context);
          return line === void 0 ? void 0 : [line];
        })
      );
      break;
    default:
      rendered = await Promise.all(items.map((item) => hierarchyLines(item, context)));
  }
  return rendered.every((lines) => lines !== void 0) ? rendered.flat() : void 0;
}
function emptyMessage2(operation) {
  switch (operation) {
    case "document_symbols":
    case "workspace_symbols":
      return "No symbols found.";
    case "call_hierarchy":
      return "No call hierarchy items found.";
    case "type_hierarchy":
      return "No type hierarchy items found.";
    case "incoming_calls":
      return "No incoming calls found.";
    case "outgoing_calls":
      return "No outgoing calls found.";
    case "supertypes":
      return "No supertypes found.";
    case "subtypes":
      return "No subtypes found.";
    case "selection_ranges":
      return "No selection ranges found.";
    case "folding_ranges":
      return "No folding ranges found.";
  }
}
async function formatLspStructureReadText(input) {
  return assembleLspReadText({
    blocks: await formatLspStructureReadBlocks(input),
    warnings: input.warnings,
    scope: input.scope ?? []
  });
}
async function formatLspStructureReadBlocks(input) {
  const context = { input, sources: new LspSourceLines() };
  return Promise.all(
    input.reads.map(async (read) => {
      const empty = input.emptyMessage?.(read) ?? emptyMessage2(input.operation);
      if (read.value === null || read.value === void 0) {
        return { server_id: read.server_id, lines: [empty] };
      }
      const items = Array.isArray(read.value) ? read.value : [read.value];
      const lines = items.length === 0 ? [empty] : await itemLines(items, context);
      const omitted = input.operation === "document_symbols" ? read.omitted ?? 0 : 0;
      const imports = input.operation === "document_symbols" ? read.omitted_imports ?? 0 : 0;
      const nested = omitted - imports;
      return {
        server_id: read.server_id,
        lines: [
          ...lines ?? [formatLspToolValue(read.value)],
          ...nested <= 0 ? [] : [
            `${nested} nested ${nested === 1 ? "symbol" : "symbols"} omitted; raise depth or pass depth: "all" to see ${nested === 1 ? "it" : "them"}.`
          ],
          ...imports <= 0 ? [] : [
            `${imports} ${imports === 1 ? "import binding" : "import bindings"} omitted; pass depth: "all" to see ${imports === 1 ? "it" : "them"}.`
          ]
        ]
      };
    })
  );
}

// src/lsp-item-list.ts
var IDENTIFIER_FRAGMENT = /[\p{L}\p{M}\p{N}_$]+$/u;
var LEADING_NON_IDENTIFIER = /^[^\p{L}\p{M}\p{N}_$]+/u;
var CompletionItemSchema = Type12.Object({
  label: Type12.String(),
  kind: Type12.Optional(Type12.Integer()),
  detail: Type12.Optional(Type12.String()),
  labelDetails: Type12.Optional(
    Type12.Object({
      detail: Type12.Optional(Type12.String()),
      description: Type12.Optional(Type12.String())
    })
  ),
  filterText: Type12.Optional(Type12.String()),
  sortText: Type12.Optional(Type12.String())
});
var CompletionListSchema = Type12.Object({
  isIncomplete: Type12.Boolean(),
  items: Type12.Array(Type12.Unknown())
});
var COMPLETION_KIND_NAMES = [
  "text",
  "method",
  "function",
  "constructor",
  "field",
  "variable",
  "class",
  "interface",
  "module",
  "property",
  "unit",
  "value",
  "enum",
  "keyword",
  "snippet",
  "color",
  "file",
  "reference",
  "folder",
  "enum member",
  "constant",
  "struct",
  "event",
  "operator",
  "type parameter"
];
function completionKindName(kind) {
  return COMPLETION_KIND_NAMES[kind - 1] ?? `kind ${kind}`;
}
function completionPrefixAt(documentText, position) {
  const line = documentLines(documentText)[position.line - 1] ?? "";
  const before = Array.from(line).slice(0, position.character - 1).join("");
  return IDENTIFIER_FRAGMENT.exec(before)?.[0] ?? "";
}
function completionSortKey(item) {
  if (!Value13.Check(CompletionItemSchema, item)) return "";
  return item.sortText ?? item.label;
}
function matchesPrefix(item, prefix) {
  if (prefix === "") return true;
  if (!Value13.Check(CompletionItemSchema, item)) return false;
  const text = (item.filterText ?? item.label).toLowerCase();
  const wanted = prefix.toLowerCase();
  return text.startsWith(wanted) || text.replace(LEADING_NON_IDENTIFIER, "").startsWith(wanted);
}
function boundCompletionItems(items, bounds) {
  const matching = items.filter((item) => matchesPrefix(item, bounds.prefix)).map((item) => ({ item, key: completionSortKey(item) })).sort((left, right) => {
    if (left.key === right.key) return 0;
    return left.key < right.key ? -1 : 1;
  }).map(({ item }) => item);
  return {
    items: matching.slice(0, bounds.limit),
    omitted: Math.max(0, matching.length - bounds.limit)
  };
}
function boundLspCompletions(value, bounds) {
  if (Array.isArray(value)) {
    const { items, omitted } = boundCompletionItems(value, bounds);
    return { value: items, omitted };
  }
  if (Value13.Check(CompletionListSchema, value)) {
    const { items, omitted } = boundCompletionItems(value.items, bounds);
    return { value: { ...value, items }, omitted };
  }
  return { value, omitted: 0 };
}
function boundLspWorkspaceSymbols(value, limit) {
  if (!Array.isArray(value)) return { value, omitted: 0 };
  return { value: value.slice(0, limit), omitted: Math.max(0, value.length - limit) };
}
function unrecognizedItemLine(item) {
  if (Value13.Check(Type12.Record(Type12.String(), Type12.Unknown()), item)) {
    const { data: _data, ...visible } = item;
    return formatLspToolValue(visible);
  }
  return formatLspToolValue(item);
}
function completionLine(item) {
  if (!Value13.Check(CompletionItemSchema, item)) return unrecognizedItemLine(item);
  const label = compactLspText(`${item.label}${item.labelDetails?.detail ?? ""}`);
  const head = item.kind === void 0 ? label : `${label} (${completionKindName(item.kind)})`;
  const detail = item.detail ?? item.labelDetails?.description;
  return detail === void 0 || detail.trim() === "" ? head : `${head}  ${compactLspText(detail)}`;
}
function completionItems(value) {
  if (Array.isArray(value)) return value;
  if (Value13.Check(CompletionListSchema, value)) return value.items;
  return [];
}
function completionLines(read, position) {
  const items = completionItems(read.value);
  const prefix = read.prefix ?? "";
  if (items.length === 0) {
    const empty = prefix === "" ? "No completions" : `No completions start with "${prefix}"`;
    return [position === void 0 ? `${empty}.` : `${empty} at ${position}.`];
  }
  const header = prefix === "" ? [] : [`Completions starting with "${prefix}":`];
  const incomplete = Value13.Check(CompletionListSchema, read.value) && read.value.isIncomplete ? ["The server's list is incomplete; a longer prefix may return other items."] : [];
  return [...header, ...items.map(completionLine), ...omittedLines(read, "prefix"), ...incomplete];
}
function omittedLines(read, refinement) {
  if (read.omitted === 0) return [];
  return [`${read.omitted} more omitted; raise limit or refine the ${refinement} to see them.`];
}
async function serverBlocks(input) {
  if (input.operation === "completion") {
    return input.reads.map((read) => ({
      server_id: read.server_id,
      lines: completionLines(read, input.position)
    }));
  }
  const blocks = await formatLspStructureReadBlocks({ ...input, operation: "workspace_symbols" });
  return blocks.map((block, index) => {
    const read = input.reads[index];
    return read === void 0 ? block : { ...block, lines: [...block.lines, ...omittedLines(read, "query")] };
  });
}
async function formatLspItemListText(input) {
  return assembleLspReadText({
    blocks: await serverBlocks(input),
    warnings: input.warnings,
    scope: input.scope ?? []
  });
}

// src/lsp-document-symbol-depth.ts
import { Type as Type13 } from "typebox";
import { Value as Value14 } from "typebox/value";
var MEMBER_CONTAINER_KINDS2 = new Set(
  Object.values(LSP_MEMBER_CONTAINER_SYMBOL_KINDS)
);
var PositionSchema2 = Type13.Object({ line: Type13.Number(), character: Type13.Number() });
var RangeSchema4 = Type13.Object({ start: PositionSchema2, end: PositionSchema2 });
var HierarchicalSymbolSchema = Type13.Object({
  kind: Type13.Number(),
  selectionRange: Type13.Unknown(),
  children: Type13.Optional(Type13.Unknown())
});
var FlatSymbolSchema = Type13.Object({
  name: Type13.String(),
  kind: Type13.Number(),
  containerName: Type13.Optional(Type13.Union([Type13.String(), Type13.Null()])),
  location: Type13.Object({ range: Type13.Optional(Type13.Unknown()) })
});
var RangedSymbolSchema = Type13.Object({ range: RangeSchema4 });
function childBudget(kind, budget) {
  return MEMBER_CONTAINER_KINDS2.has(kind) ? budget : budget - 1;
}
function countSymbols(symbols) {
  return symbols.reduce((count, symbol) => {
    const children = Value14.Check(HierarchicalSymbolSchema, symbol) ? symbol.children : void 0;
    return count + 1 + (Array.isArray(children) ? countSymbols(children) : 0);
  }, 0);
}
function pruneHierarchical(symbol, budget, dropped) {
  if (!Value14.Check(HierarchicalSymbolSchema, symbol)) return symbol;
  const { children } = symbol;
  if (!Array.isArray(children)) return symbol;
  const remaining = childBudget(symbol.kind, budget);
  if (remaining < 1) dropped.count += countSymbols(children);
  return {
    ...symbol,
    children: remaining < 1 ? [] : children.map((child) => pruneHierarchical(child, remaining, dropped))
  };
}
function contains(outer, inner) {
  return compareLspProtocolPositions(outer.start, inner.start) <= 0 && compareLspProtocolPositions(inner.end, outer.end) <= 0;
}
function sameRange(left, right) {
  return compareLspProtocolPositions(left.start, right.start) === 0 && compareLspProtocolPositions(left.end, right.end) === 0;
}
function containerNameSuffixes(containerName) {
  const parts = containerName.split(".");
  return parts.map((_, start) => parts.slice(start).join("."));
}
function containerIndex(entries, byName, index) {
  const entry = entries[index];
  if (entry === void 0 || entry.containerName === "") return void 0;
  const candidates = containerNameSuffixes(entry.containerName).flatMap((name) => byName.get(name) ?? []).toSorted((left, right) => left - right);
  let best;
  for (const candidateIndex of candidates) {
    const candidate = entries[candidateIndex];
    if (candidate === void 0 || candidateIndex === index) continue;
    if (entry.range !== void 0 && candidate.range !== void 0) {
      if (!contains(candidate.range, entry.range) || sameRange(candidate.range, entry.range)) {
        continue;
      }
      const current = best === void 0 ? void 0 : entries[best]?.range;
      if (current === void 0 || contains(current, candidate.range)) best = candidateIndex;
    } else if (candidateIndex < index) {
      best = candidateIndex;
    }
  }
  return best;
}
function flatEntry(item) {
  if (!Value14.Check(FlatSymbolSchema, item)) return void 0;
  const range = Value14.Check(RangeSchema4, item.location.range) ? item.location.range : void 0;
  return { name: item.name, kind: item.kind, containerName: item.containerName ?? "", range };
}
function flatEntries(value) {
  const entries = value.map(flatEntry);
  return entries.length > 0 && entries.every((entry) => entry !== void 0) ? entries : void 0;
}
function flatParents(entries) {
  const byName = /* @__PURE__ */ new Map();
  for (const [index, { name }] of entries.entries()) {
    const sameName = byName.get(name);
    if (sameName === void 0) byName.set(name, [index]);
    else sameName.push(index);
  }
  return entries.map((_, index) => containerIndex(entries, byName, index));
}
function topLevelSymbolRanges(value) {
  const entries = flatEntries(value);
  if (entries === void 0) {
    return value.map((item) => Value14.Check(RangedSymbolSchema, item) ? item.range : void 0);
  }
  const parents = flatParents(entries);
  return entries.map((entry, index) => parents[index] === void 0 ? entry.range : void 0);
}
function pruneFlat(value, entries, depth) {
  const parents = flatParents(entries);
  const available = /* @__PURE__ */ new Map();
  const resolving = /* @__PURE__ */ new Set();
  const resolve7 = (index) => {
    const known = available.get(index);
    if (known !== void 0) return known;
    if (resolving.has(index)) return depth;
    resolving.add(index);
    const parent = parents[index];
    const inherited = parent === void 0 ? depth : resolve7(parent);
    const budget = childBudget(entries[index]?.kind ?? 0, inherited);
    resolving.delete(index);
    available.set(index, budget);
    return budget;
  };
  const kept = value.filter((_, index) => {
    const parent = parents[index];
    return parent === void 0 || resolve7(parent) >= 1;
  });
  return { value: kept, omitted: value.length - kept.length };
}
function limitLspDocumentSymbolDepth(value, depth) {
  if (depth === "all" || !Array.isArray(value)) return { value, omitted: 0 };
  const entries = flatEntries(value);
  if (entries !== void 0) return pruneFlat(value, entries, depth);
  const dropped = { count: 0 };
  return {
    value: value.map((item) => pruneHierarchical(item, depth, dropped)),
    omitted: dropped.count
  };
}

// src/lsp-outline-imports.ts
import { Type as Type14 } from "typebox";
import { Value as Value15 } from "typebox/value";
var IMPORTS_FOLDING_RANGE_KIND = "imports";
var ImportsFoldingRangeSchema = Type14.Object({
  startLine: Type14.Integer({ minimum: 0 }),
  endLine: Type14.Integer({ minimum: 0 }),
  kind: Type14.Literal(IMPORTS_FOLDING_RANGE_KIND)
});
function importFoldingRanges(response) {
  if (!Array.isArray(response)) return [];
  return response.filter((item) => Value15.Check(ImportsFoldingRangeSchema, item));
}
function dropImportSymbols(value, imports) {
  if (imports.length === 0 || !Array.isArray(value)) return { value, omitted: 0 };
  const ranges = topLevelSymbolRanges(value);
  let omitted = 0;
  const kept = value.filter((item, index) => {
    const range = ranges[index];
    const isImport = range !== void 0 && imports.some(
      ({ startLine, endLine }) => startLine <= range.start.line && range.end.line <= endLine
    );
    if (isImport) omitted += countSymbols([item]);
    return !isImport;
  });
  return { value: kept, omitted };
}

// src/lsp-preview-ledger.ts
var LspPreviewLedger = class {
  /** Bind the ledger to the store that persists the previews. */
  constructor(store) {
    this.store = store;
  }
  store;
  createdIds = /* @__PURE__ */ new Set();
  ended = false;
  /**
   * Create a preview in the store and remember it as belonging to this call. A preview that
   * completes after the call has ended is discarded at once, since no result can name it.
   */
  async createPreview(input) {
    const preview = await this.store.createPreview({ ...input, reported: true });
    if (this.ended) {
      this.store.discardPreview(preview.preview_id);
      throw new Error("Pi LSP: the tool call already ended, so its preview was discarded");
    }
    this.createdIds.add(preview.preview_id);
    return preview;
  }
  /** End the call: forget every preview of it that the returned result does not name. */
  discardUnnamed(namedIds) {
    this.ended = true;
    for (const previewId of this.createdIds) {
      if (!namedIds.has(previewId)) this.store.discardPreview(previewId);
    }
    this.createdIds.clear();
  }
};

// src/lsp-protocol-result.ts
var import_vscode_languageserver_protocol = __toESM(require_api2(), 1);
import { readFile as readFile3 } from "node:fs/promises";
import { fileURLToPath as fileURLToPath3 } from "node:url";
import { Type as Type15 } from "typebox";
import { Value as Value16 } from "typebox/value";
var ProtocolRecordSchema = Type15.Record(Type15.String(), Type15.Unknown());
var ProtocolStringSchema = Type15.String();
var ProtocolFoldingRangeSchema = Type15.Object(
  {
    startLine: Type15.Integer({ minimum: 0 }),
    startCharacter: Type15.Optional(Type15.Integer({ minimum: 0 })),
    endLine: Type15.Integer({ minimum: 0 }),
    endCharacter: Type15.Optional(Type15.Integer({ minimum: 0 }))
  },
  { additionalProperties: true }
);
var MAX_NAMED_WARNING_FILES = 5;
var targetFile = (record, file) => protocolString(record.targetUri) ?? file;
var PROTOCOL_FIELD_FILES = /* @__PURE__ */ new Map([
  // An incoming call's sites lie in its caller's file, which its `from` item names. An outgoing
  // call has no `from`; its sites lie in the prepared item's file, which callers pass as its file.
  ["fromRanges", (record, file) => protocolString(protocolRecord(record.from)?.uri) ?? file],
  // A LocationLink's origin lies in the requested file, not its target.
  ["originSelectionRange", (_record, file) => file],
  ["targetRange", targetFile],
  ["targetSelectionRange", targetFile]
]);
function sortedFiles(files) {
  return [...files].sort((left, right) => left < right ? -1 : left > right ? 1 : 0);
}
function recordFile(record, file) {
  return protocolString(record.uri) ?? protocolString(record.targetUri) ?? file;
}
function protocolString(value) {
  return Value16.Check(ProtocolStringSchema, value) ? value : void 0;
}
function protocolRecord(value) {
  return Value16.Check(ProtocolRecordSchema, value) ? value : void 0;
}
function protocolPositionValue(value) {
  if (!import_vscode_languageserver_protocol.Position.is(value) || !Number.isSafeInteger(value.line) || !Number.isSafeInteger(value.character) || Object.keys(value).some((key) => key !== "line" && key !== "character")) {
    return void 0;
  }
  return { line: value.line, character: value.character };
}
function lspProtocolUriPath(uri) {
  return uri.startsWith("file:") ? fileURLToPath3(uri) : uri;
}
async function readLspProtocolUriText(uri) {
  if (!uri.startsWith("file:")) return void 0;
  try {
    return LSP_UTF8_DECODER.decode(await readFile3(fileURLToPath3(uri)));
  } catch {
    return void 0;
  }
}
var LspProtocolResultNormalizer = class {
  #options;
  #lines = /* @__PURE__ */ new Map();
  #approximateFiles = /* @__PURE__ */ new Set();
  #staleFiles = /* @__PURE__ */ new Set();
  constructor(options) {
    this.#options = options;
  }
  /** Files whose positions so far were approximated, as the result names them, in sorted order. */
  get approximateFiles() {
    return sortedFiles(this.#approximateFiles);
  }
  /** Files whose text so far disagreed with a position, as the result names them, in sorted order. */
  get staleFiles() {
    return sortedFiles(this.#staleFiles);
  }
  /** Normalize a response whose top-level positions lie in the requested document, if any. */
  // oxlint-disable-next-line anti-slop/no-unknown-parameters, anti-slop/no-unknown-returns -- Protocol responses stay opaque; normalization validates each position it rewrites.
  normalize(value) {
    return this.#normalize(value, this.#options.document?.uri);
  }
  /** Normalize a value whose top-level positions lie in the file `uri` names. */
  // oxlint-disable-next-line anti-slop/no-unknown-parameters, anti-slop/no-unknown-returns -- Protocol values stay opaque; normalization validates each position it rewrites.
  normalizeInFile(value, uri) {
    return this.#normalize(value, uri);
  }
  /** Normalize a value whose top-level positions lie in `file`; with no file they stay unchanged. */
  async #normalize(value, file) {
    if (Array.isArray(value)) {
      return Promise.all(value.map((entry) => this.#normalize(entry, file)));
    }
    if (value instanceof Map) {
      const entries2 = [...value.entries()];
      return Promise.all(
        entries2.sort(([left], [right]) => String(left).localeCompare(String(right))).map(async ([key, entryValue]) => {
          const uri = protocolString(key);
          return {
            uri: uri === void 0 ? key : lspProtocolUriPath(uri),
            value: await this.#normalize(entryValue, uri)
          };
        })
      );
    }
    const position = protocolPositionValue(value);
    if (position !== void 0) return file === void 0 ? value : this.#position(position, file);
    if (Value16.Check(ProtocolFoldingRangeSchema, value)) {
      return file === void 0 ? value : this.#foldingRange(value, file);
    }
    const record = protocolRecord(value);
    if (record === void 0) return value;
    const entries = await Promise.all(
      Object.entries(record).map(async ([key, entryValue]) => {
        const uri = protocolString(entryValue);
        if ((key === "uri" || key === "targetUri") && uri !== void 0) {
          return [key, lspProtocolUriPath(uri)];
        }
        const fieldFile = PROTOCOL_FIELD_FILES.get(key) ?? recordFile;
        return [key, await this.#normalize(entryValue, fieldFile(record, file))];
      })
    );
    return Object.fromEntries(entries);
  }
  /** The lines of a file's text, read and split at most once per result. */
  #fileLines(file) {
    let lines = this.#lines.get(file);
    if (lines === void 0) {
      const { document, readText = readLspProtocolUriText } = this.#options;
      const text = file === document?.uri ? Promise.resolve(document.text) : readText(file);
      lines = text.then((value) => value === void 0 ? void 0 : documentLines(value));
      this.#lines.set(file, lines);
    }
    return lines;
  }
  async #position(position, file) {
    const lines = await this.#fileLines(file);
    if (lines !== void 0) {
      const converted = convertLspResultPosition(lines, position, this.#options.encoding);
      if (converted.stale) this.#staleFiles.add(lspProtocolUriPath(file));
      return converted.position;
    }
    if (this.#options.encoding !== "utf-32") this.#approximateFiles.add(lspProtocolUriPath(file));
    return { line: position.line + 1, character: position.character + 1 };
  }
  async #foldingRange(value, file) {
    const start = await this.#position(
      { line: value.startLine, character: value.startCharacter ?? 0 },
      file
    );
    const end = await this.#position(
      { line: value.endLine, character: value.endCharacter ?? 0 },
      file
    );
    const normalized = { ...value, startLine: start.line, endLine: end.line };
    if (value.startCharacter !== void 0 && value.endCharacter !== void 0) {
      return { ...normalized, startCharacter: start.character, endCharacter: end.character };
    }
    if (value.startCharacter !== void 0) {
      return { ...normalized, startCharacter: start.character };
    }
    if (value.endCharacter !== void 0) return { ...normalized, endCharacter: end.character };
    return normalized;
  }
};
async function normalizeLspProtocolResult(value, options) {
  const normalizer = new LspProtocolResultNormalizer(options);
  return {
    value: await normalizer.normalize(value),
    approximateFiles: normalizer.approximateFiles,
    staleFiles: normalizer.staleFiles
  };
}
function namedFiles(files, cwd) {
  const named = files.slice(0, MAX_NAMED_WARNING_FILES).map((file) => lspDisplayPath(cwd, file));
  const rest = files.length - named.length;
  return rest === 0 ? named.join(", ") : `${named.join(", ")}, and ${rest} more`;
}
function lspApproximatePositionsWarning(serverId, files, cwd) {
  if (files.length === 0) return void 0;
  return `${serverId}: positions in ${namedFiles(files, cwd)} are approximate because their text could not be read; lines are exact, but columns may be off after non-ASCII text.`;
}
function lspStalePositionsWarning(serverId, files, cwd) {
  if (files.length === 0) return void 0;
  const cause = files.length === 1 ? "the file changed since the server read it or the server sent an invalid position" : "the files changed since the server read them or the server sent invalid positions";
  return `${serverId}: positions in ${namedFiles(files, cwd)} may be wrong because ${cause}.`;
}

// src/lsp-query-position.ts
var LSP_POSITION_READ_OPERATIONS = [
  "completion",
  "hover",
  "signature_help",
  "declaration",
  "goto_definition",
  "goto_type_definition",
  "goto_implementation",
  "find_references",
  "document_highlights",
  "call_hierarchy",
  "incoming_calls",
  "outgoing_calls",
  "type_hierarchy",
  "supertypes",
  "subtypes",
  "prepare_rename"
];
var POSITION_READ_OPERATION_SET = new Set(
  LSP_POSITION_READ_OPERATIONS
);
function isLspPositionReadOperation(operation) {
  return POSITION_READ_OPERATION_SET.has(operation);
}
var WORD_CHARACTER = /^[\p{L}\p{M}\p{N}_$]$/u;
var WHITESPACE_CHARACTER = /^\s$/u;
function characterClass(character) {
  if (WORD_CHARACTER.test(character)) return "word";
  if (WHITESPACE_CHARACTER.test(character)) return "whitespace";
  return "punctuation";
}
function lspQueryPosition(path, text, position) {
  const characters = Array.from(documentLines(text)[position.line - 1] ?? "");
  const query = {
    path,
    line: position.line,
    character: position.character,
    line_text: characters.join("").trim()
  };
  const index = position.character - 1;
  const at = characters[index];
  if (at === void 0) return query;
  const kind = characterClass(at);
  if (kind === "whitespace") return query;
  let start = index;
  while (start > 0 && characterClass(characters[start - 1] ?? " ") === kind) start--;
  let end = index + 1;
  while (end < characters.length && characterClass(characters[end] ?? " ") === kind) end++;
  return { ...query, token: characters.slice(start, end).join("") };
}
function describeLspQueryPosition(cwd, query) {
  const position = `${lspDisplayPath(cwd, query.path)}:${query.line}:${query.character}`;
  if (query.token !== void 0) {
    return `${position} (${JSON.stringify(shortenLspText(query.token))})`;
  }
  if (query.line_text === "") return `${position} (no token; empty line)`;
  return `${position} (no token; line: ${JSON.stringify(shortenLspText(query.line_text))})`;
}
function emptyResultSubject(operation, noHierarchyItem) {
  switch (operation) {
    case "completion":
      return "No completions";
    case "hover":
      return "The server has no hover information";
    case "signature_help":
      return "No signature help";
    case "declaration":
    case "goto_definition":
    case "goto_type_definition":
    case "goto_implementation":
      return "No locations found";
    case "find_references":
      return "No references found";
    case "document_highlights":
      return "No highlights found";
    case "call_hierarchy":
      return "No call hierarchy item";
    case "incoming_calls":
      return noHierarchyItem ? "No call hierarchy item" : "No incoming calls found";
    case "outgoing_calls":
      return noHierarchyItem ? "No call hierarchy item" : "No outgoing calls found";
    case "type_hierarchy":
      return "No type hierarchy item";
    case "supertypes":
      return noHierarchyItem ? "No type hierarchy item" : "No supertypes found";
    case "subtypes":
      return noHierarchyItem ? "No type hierarchy item" : "No subtypes found";
    case "prepare_rename":
      return "No renameable symbol";
  }
}
function lspEmptyPositionReadMessage(operation, position, noHierarchyItem) {
  return `${emptyResultSubject(operation, noHierarchyItem)} at ${position}.`;
}

// src/lsp-structured-positions.ts
import { Type as Type16 } from "typebox";
import { Value as Value17 } from "typebox/value";
var RangeStartSchema = Type16.Object({ start: LspNormalizedPositionSchema });
var SymbolIdentitySchema = Type16.Object({ name: Type16.String(), kind: Type16.Integer() });
var PRIVATE_FIELD = "data";
function hasLocatedItems(operation) {
  if (isLspLocationOperation(operation)) return true;
  return isLspStructureOperation(operation) && operation !== "selection_ranges" && operation !== "folding_ranges";
}
function locate(record, documentPath, operation) {
  const location = protocolRecord(record.location);
  const range = [
    record.targetSelectionRange,
    record.selectionRange,
    record.range,
    location?.range
  ].find((candidate) => Value17.Check(RangeStartSchema, candidate));
  const path = protocolString(record.targetUri) ?? protocolString(record.uri) ?? protocolString(location?.uri) ?? (record.selectionRange !== void 0 || operation === "document_highlights" && record.range !== void 0 ? documentPath : void 0);
  return { path, start: Value17.Check(RangeStartSchema, range) ? range.start : void 0 };
}
function annotate(value, documentPath, operation) {
  if (Array.isArray(value)) {
    return value.map((entry) => annotate(entry, documentPath, operation));
  }
  const record = protocolRecord(value);
  if (record === void 0) return value;
  const annotated = Object.fromEntries(
    Object.entries(record).map(([key, entry]) => [
      key,
      key === PRIVATE_FIELD ? entry : annotate(entry, documentPath, operation)
    ])
  );
  const kindName = Value17.Check(SymbolIdentitySchema, record) ? lspKnownSymbolKindName(record.kind) : void 0;
  if (kindName !== void 0) annotated.kind_name = kindName;
  const { path, start } = locate(record, documentPath, operation);
  if (path !== void 0) annotated.path = path;
  if (path !== void 0 && start !== void 0) {
    annotated.line = start.line;
    annotated.character = start.character;
  }
  return annotated;
}
function lspStructuredResultValue(operation, value, documentPath) {
  return hasLocatedItems(operation) ? annotate(value, documentPath, operation) : value;
}

// src/lsp-workspace-warm-up.ts
import { readdir as readdir2 } from "node:fs/promises";
import { join as join4 } from "node:path";
var LSP_WARM_UP_PACKAGE_LIMIT = 20;
var LSP_WARM_UP_TIMEOUT_MS = 1e4;
var WARM_UP_DIRECTORY_LIMIT = 64;
var SKIPPED_DIRECTORY_NAMES = /* @__PURE__ */ new Set([
  "node_modules",
  "dist",
  "build",
  "out",
  "coverage"
]);
var NON_SOURCE_FILE = /\.(?:d|test|spec|bench|config|setup|stories)\.[^.]+$/u;
var LSP_WARM_UP_LIMITS = {
  packageLimit: LSP_WARM_UP_PACKAGE_LIMIT,
  timeoutMs: LSP_WARM_UP_TIMEOUT_MS
};
async function findLspWarmUpFile(packageRoot, languageIdForFile) {
  let fallback;
  const queue = [join4(packageRoot, "src"), packageRoot];
  const seen = new Set(queue);
  for (let index = 0; index < queue.length && index < WARM_UP_DIRECTORY_LIMIT; index++) {
    const directory = queue[index];
    if (directory === void 0) break;
    let entries;
    try {
      entries = await readdir2(directory, { withFileTypes: true });
    } catch {
      continue;
    }
    entries.sort((left, right) => left.name.localeCompare(right.name));
    for (const entry of entries) {
      const path = join4(directory, entry.name);
      if (entry.isDirectory()) {
        const skipped = entry.name.startsWith(".") || SKIPPED_DIRECTORY_NAMES.has(entry.name);
        if (!skipped && !seen.has(path)) {
          seen.add(path);
          queue.push(path);
        }
        continue;
      }
      const languageId = entry.isFile() ? languageIdForFile(path) : void 0;
      if (languageId === void 0) continue;
      if (!NON_SOURCE_FILE.test(entry.name)) return { filePath: path, languageId };
      fallback ??= { filePath: path, languageId };
    }
  }
  return fallback;
}
async function beforeDeadline(promise, deadline) {
  let timer;
  const expired = new Promise((resolve7) => {
    timer = setTimeout(() => resolve7(void 0), Math.max(0, deadline - Date.now()));
  });
  try {
    return await Promise.race([promise, expired]);
  } finally {
    clearTimeout(timer);
  }
}
async function warmUpUnloadedPackages(input) {
  const { manager, client, serverId, loaded, limits, signal } = input;
  const deadline = Date.now() + limits.timeoutMs;
  let scope;
  try {
    if (!await manager.isWorkspaceRoot(serverId, input.rootPath)) return;
    scope = await beforeDeadline(
      manager.findWorkspaceScope(serverId, input.rootPath, loaded),
      deadline
    );
  } catch {
    return;
  }
  const packageRoots = scope?.unloadedPackages?.packageRoots ?? [];
  for (const packageRoot of packageRoots.slice(0, limits.packageLimit)) {
    if (signal?.aborted === true || Date.now() >= deadline) return;
    try {
      const completed = await beforeDeadline(
        (async () => {
          const file = await findLspWarmUpFile(
            packageRoot,
            (filePath) => manager.languageIdForFile(serverId, filePath)
          );
          if (file !== void 0 && Date.now() < deadline) {
            await client.synchronizeDocument(file.filePath, file.languageId);
          }
          return true;
        })(),
        deadline
      );
      if (completed === void 0) return;
    } catch {
    }
  }
}

// src/lsp-tool-rendering.ts
import { Container, Spacer as Spacer2, Text as Text3 } from "@earendil-works/pi-tui";
import { Type as Type17 } from "typebox";
import { Value as Value18 } from "typebox/value";
var LspRenderRecordSchema = Type17.Record(Type17.String(), Type17.Unknown());
var LspCallTargetSchema = Type17.Object({
  file_path: Type17.Optional(Type17.String()),
  line: Type17.Optional(Type17.Number()),
  character: Type17.Optional(Type17.Number()),
  preview_id: Type17.Optional(Type17.String()),
  query: Type17.Optional(Type17.String()),
  new_name: Type17.Optional(Type17.String())
});
var LOCATION_LIST_OPERATIONS = /* @__PURE__ */ new Set([
  "declaration",
  "goto_definition",
  "goto_type_definition",
  "goto_implementation",
  "find_references",
  "document_highlights",
  "document_symbols",
  "workspace_symbols"
]);
function humanizeLspOperation(operation) {
  const words = operation.replaceAll("_", " ");
  return `${words.charAt(0).toUpperCase()}${words.slice(1)}`;
}
function lspCallTarget(parameters, cwd) {
  if (!Value18.Check(LspCallTargetSchema, parameters)) return void 0;
  if (parameters.file_path !== void 0) {
    const filePath = lspDisplayPath(cwd, parameters.file_path);
    if (parameters.line !== void 0 && parameters.character !== void 0) {
      return `${filePath}:${parameters.line}:${parameters.character}`;
    }
    return filePath;
  }
  return parameters.preview_id;
}
function lspCallExtraArgs(parameters) {
  if (!Value18.Check(LspCallTargetSchema, parameters)) return void 0;
  return parameters.new_name ?? parameters.query;
}
function toolResultText(result) {
  return result.content.filter((item) => item.type === "text").map((item) => item.text).join("");
}
function renderRecord(value) {
  return Value18.Check(LspRenderRecordSchema, value) ? value : void 0;
}
function semanticLspValueCount(value) {
  if (value === null || value === void 0) return 0;
  if (Array.isArray(value)) return value.length;
  const record = renderRecord(value);
  if (record === void 0) return 1;
  if (record.status === "unsupported") return 0;
  if (Array.isArray(record.diagnostics)) return record.diagnostics.length;
  if (Array.isArray(record.items)) return record.items.length;
  if (Array.isArray(record.signatures)) return record.signatures.length;
  if (Array.isArray(record.diagnosticsByUri)) {
    return record.diagnosticsByUri.reduce((count, entry) => {
      if (Array.isArray(entry)) return count + semanticLspValueCount(entry[1]);
      const entryRecord = renderRecord(entry);
      if (entryRecord === void 0) return count;
      return count + semanticLspValueCount(entryRecord.value);
    }, 0);
  }
  return 1;
}
function renderLspToolCall(operation, parameters, theme, context) {
  const container = new Container();
  container.addChild(
    new Text3(
      toolHeader(
        theme,
        lspToolName(operation),
        lspCallTarget(parameters, context.cwd),
        lspCallExtraArgs(parameters)
      ),
      0,
      0
    )
  );
  const record = renderRecord(parameters);
  if (context.expanded && record !== void 0) {
    const lines = Object.entries(record).map(
      ([key, value]) => theme.fg(
        "muted",
        `${key}: ${Value18.Check(Type17.String(), value) ? value : JSON.stringify(value)}`
      )
    );
    if (lines.length > 0) container.addChild(new Text3(lines.join("\n"), 0, 0));
  }
  container.addChild(callDurationFooter(theme, context));
  return container;
}
function renderLspToolResult(operation, result, options, theme, context) {
  const container = new Container();
  const output = toolResultText(result).trim();
  if (output !== "") {
    const limit = LOCATION_LIST_OPERATIONS.has(operation) ? COLLAPSED_LINES.search : COLLAPSED_LINES.fallback;
    const body = previewBody(theme, output.split("\n"), {
      limit,
      expanded: options.expanded,
      color: context.isError ? "error" : "toolOutput"
    });
    container.addChild(new Spacer2(1));
    container.addChild(new Text3(body.join("\n"), 0, 0));
  }
  appendDurationFooter(container, theme, context, { isPartial: options.isPartial });
  return container;
}

// src/lsp-workspace-edit.ts
import { randomUUID as randomUUID3 } from "node:crypto";
import {
  chmod as chmod2,
  lstat,
  mkdir as mkdir3,
  readFile as readFile4,
  readlink,
  realpath,
  rename,
  rm as rm3,
  stat,
  symlink,
  writeFile as writeFile3
} from "node:fs/promises";
import { dirname as dirname4, resolve as resolve4 } from "node:path";
import { fileURLToPath as fileURLToPath4 } from "node:url";
import { generateUnifiedPatch, withFileMutationQueue } from "@earendil-works/pi-coding-agent";
import { Type as Type18 } from "typebox";
import { Value as Value19 } from "typebox/value";
var UTF8_BOM = Buffer.from([239, 187, 191]);
var UTF8_DECODER2 = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
var ProtocolPositionSchema = Type18.Object({ line: Type18.Number(), character: Type18.Number() });
var ProtocolRangeSchema = Type18.Object({
  start: ProtocolPositionSchema,
  end: ProtocolPositionSchema
});
var ProtocolTextEditSchema = Type18.Object({ range: ProtocolRangeSchema, newText: Type18.String() });
var ResourceDestinationOptionsSchema = Type18.Optional(
  Type18.Object({
    ignoreIfExists: Type18.Optional(Type18.Boolean()),
    overwrite: Type18.Optional(Type18.Boolean())
  })
);
var ProtocolWorkspaceEditSchema = Type18.Object({
  changes: Type18.Optional(Type18.Record(Type18.String(), Type18.Array(ProtocolTextEditSchema))),
  documentChanges: Type18.Optional(
    Type18.Array(
      Type18.Union([
        Type18.Object({
          kind: Type18.Optional(Type18.Never()),
          textDocument: Type18.Object({ uri: Type18.String() }),
          edits: Type18.Array(
            Type18.Object({
              range: ProtocolRangeSchema,
              newText: Type18.Optional(Type18.String())
            })
          )
        }),
        Type18.Object({
          kind: Type18.Literal("create"),
          uri: Type18.String(),
          options: ResourceDestinationOptionsSchema
        }),
        Type18.Object({
          kind: Type18.Literal("delete"),
          uri: Type18.String(),
          options: Type18.Optional(Type18.Object({ ignoreIfNotExists: Type18.Optional(Type18.Boolean()) }))
        }),
        Type18.Object({
          kind: Type18.Literal("rename"),
          oldUri: Type18.String(),
          newUri: Type18.String(),
          options: ResourceDestinationOptionsSchema
        })
      ])
    )
  )
});
async function replaceFile(path, contents, mode) {
  await mkdir3(dirname4(path), { recursive: true });
  const temporaryPath = `${path}.pi-lsp-${randomUUID3()}.tmp`;
  try {
    await writeFile3(temporaryPath, contents, { mode: 384 });
    await chmod2(temporaryPath, mode);
    await rename(temporaryPath, path);
  } finally {
    await rm3(temporaryPath, { force: true });
  }
}
var nodeLspWorkspaceEditFileOperations = {
  replaceFile,
  removePath: (path) => rm3(path, { force: true }),
  renamePath: async (source, destination) => {
    await mkdir3(dirname4(destination), { recursive: true });
    await rename(source, destination);
  }
};
var LspWorkspaceEditError = class extends Error {
  /** Construct a stable Workspace Edit failure with optional unrecovered paths. */
  constructor(code, message, recoveryFailures = [], options) {
    super(`Pi LSP: ${message}`, options);
    this.code = code;
    this.recoveryFailures = recoveryFailures;
  }
  code;
  recoveryFailures;
};
function contentsFromSnapshot(snapshot) {
  if (snapshot.kind !== "file") {
    throw new LspWorkspaceEditError("invalid_destination", "expected a regular file");
  }
  return Buffer.from(snapshot.content_base64, "base64");
}
async function snapshotNamedPath(path) {
  let metadata;
  try {
    metadata = await lstat(path);
  } catch (cause) {
    if (cause instanceof Error && isMissingPathError(cause)) return { kind: "missing" };
    throw cause;
  }
  const mode = metadata.mode & 4095;
  if (metadata.isDirectory()) {
    throw new LspWorkspaceEditError(
      "directory_operation",
      `directory-tree operation is not supported: ${path}`
    );
  }
  if (metadata.isSymbolicLink()) {
    return { kind: "symlink", link_target: await readlink(path), mode };
  }
  if (!metadata.isFile()) {
    throw new LspWorkspaceEditError("invalid_destination", `path is not a regular file: ${path}`);
  }
  const contents = await readFile4(path);
  return {
    kind: "file",
    content_base64: contents.toString("base64"),
    mode
  };
}
function isMissingPathError(cause) {
  return "code" in cause && (cause.code === "ENOENT" || cause.code === "ENOTDIR");
}
function filePathFromUri(uri) {
  try {
    const url = new URL(uri);
    if (url.protocol !== "file:") throw new Error("not file");
    return resolve4(fileURLToPath4(url));
  } catch (cause) {
    throw new LspWorkspaceEditError("non_file_uri", `Workspace Edit URI is not file: ${uri}`, [], {
      cause
    });
  }
}
function decodeUtf8(contents, path) {
  try {
    const decoded = UTF8_DECODER2.decode(contents);
    return {
      bom: contents.subarray(0, 3).equals(UTF8_BOM),
      text: decoded.startsWith("\uFEFF") ? decoded.slice(1) : decoded
    };
  } catch (cause) {
    throw new LspWorkspaceEditError("invalid_utf8", `file is not valid UTF-8: ${path}`, [], {
      cause
    });
  }
}
function encodeUtf8(text, bom) {
  const contents = Buffer.from(text, "utf8");
  return bom ? Buffer.concat([UTF8_BOM, contents]) : contents;
}
function textOffsetAtPosition(text, position, encoding) {
  try {
    const codePointPosition = convertLspProtocolPosition(
      text,
      position,
      normalizeLspPositionEncoding(encoding)
    );
    const lineStarts = [0];
    for (let index = 0; index < text.length; index++) {
      if (text[index] === "\r" && text[index + 1] === "\n") index++;
      if (text[index] === "\r" || text[index] === "\n") lineStarts.push(index + 1);
    }
    const lineStart = lineStarts[position.line];
    if (lineStart === void 0) throw new Error("line exceeds document length");
    const lineEnd = lineStarts[position.line + 1] ?? text.length;
    const line = text.slice(lineStart, lineEnd).replace(/\r?\n$|\r$/u, "");
    const utf16Offset = Array.from(line).slice(0, codePointPosition.character - 1).join("").length;
    return lineStart + utf16Offset;
  } catch (cause) {
    throw new LspWorkspaceEditError("invalid_position", "Workspace Edit position is invalid", [], {
      cause
    });
  }
}
function applyTextEdits(text, edits, encoding) {
  const replacements = edits.map((edit) => ({
    start: textOffsetAtPosition(text, edit.range.start, encoding),
    end: textOffsetAtPosition(text, edit.range.end, encoding),
    text: edit.newText
  }));
  replacements.sort((left, right) => left.start - right.start || left.end - right.end);
  for (let index = 1; index < replacements.length; index++) {
    const previous = replacements[index - 1];
    const current = replacements[index];
    if (previous !== void 0 && current !== void 0 && current.start < previous.end) {
      throw new LspWorkspaceEditError(
        "overlapping_text_edits",
        "Workspace Edit contains overlapping text edits"
      );
    }
  }
  let result = text;
  for (const replacement of replacements.reverse()) {
    result = result.slice(0, replacement.start) + replacement.text + result.slice(replacement.end);
  }
  return result;
}
function regularTextEdits(edits) {
  return edits.map((edit) => {
    if (edit.newText === void 0) {
      throw new LspWorkspaceEditError(
        "invalid_destination",
        "Workspace Edit snippet edits are not supported"
      );
    }
    return { range: edit.range, newText: edit.newText };
  });
}
function fileSummary(path, before, after) {
  const beforeText = decodeUtf8(before, path).text;
  const afterText = decodeUtf8(after, path).text;
  return generateUnifiedPatch(path, beforeText, afterText);
}
function snapshotMatches(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}
function manifestForOperations(operations) {
  return {
    entries: operations.map((operation) => {
      if (operation.kind === "modify") {
        return {
          named_path: operation.named_path,
          operation: "modify",
          path: operation.path
        };
      }
      if (operation.kind === "create") {
        return {
          named_path: operation.named_path,
          operation: "create",
          path: operation.named_path
        };
      }
      if (operation.kind === "delete") {
        return {
          named_path: operation.named_path,
          operation: "delete",
          path: operation.named_path
        };
      }
      return {
        destination_path: operation.destination_path,
        named_path: operation.named_path,
        operation: "rename",
        path: operation.named_path
      };
    }).sort((left, right) => left.path.localeCompare(right.path))
  };
}
async function mutationQueueKey(path) {
  const resolved = resolve4(path);
  try {
    return await realpath(resolved);
  } catch (cause) {
    if (cause instanceof Error && isMissingPathError(cause)) return resolved;
    throw cause;
  }
}
async function manifestQueueKeys(manifest) {
  const paths = /* @__PURE__ */ new Set();
  for (const entry of manifest.entries) {
    paths.add(entry.path);
    if (entry.destination_path !== void 0) paths.add(entry.destination_path);
  }
  const keys = new Set(await Promise.all([...paths].map(mutationQueueKey)));
  return [...keys].sort(
    (left, right) => left.localeCompare(right) || (left < right ? -1 : left > right ? 1 : 0)
  );
}
async function restorePath(path, snapshot, files) {
  if (snapshot.kind === "missing") {
    await files.removePath(path);
    return;
  }
  if (snapshot.kind === "file") {
    await files.replaceFile(path, contentsFromSnapshot(snapshot), snapshot.mode);
    return;
  }
  await files.removePath(path);
  await mkdir3(dirname4(path), { recursive: true });
  await symlink(snapshot.link_target, path);
}
var NO_CHANGES_SUMMARY = "No changes";
var LspWorkspaceEditStore = class {
  previews = /* @__PURE__ */ new Map();
  unreportedPreviews = /* @__PURE__ */ new Map();
  createPreviewId;
  files;
  queueMutation;
  /** Construct a preview store with optional deterministic IDs, queues, and failure points. */
  constructor(options = {}) {
    this.createPreviewId = options.createPreviewId ?? randomUUID3;
    this.files = options.fileOperations ?? nodeLspWorkspaceEditFileOperations;
    this.queueMutation = options.queueMutation ?? withFileMutationQueue;
  }
  /** Normalize and persist one language-server Workspace Edit without mutating files. */
  async createPreview(input) {
    const edit = input.edit;
    if (!Value19.Check(ProtocolWorkspaceEditSchema, edit)) {
      throw new LspWorkspaceEditError("invalid_destination", "Workspace Edit fields are invalid");
    }
    const operations = [];
    const editableOperations = /* @__PURE__ */ new Map();
    const resourceActions = /* @__PURE__ */ new Map();
    const destinations = /* @__PURE__ */ new Set();
    const encoding = input.positionEncoding ?? "utf-16";
    const rememberResourceAction = (path, action) => {
      const previous = resourceActions.get(path);
      if (previous !== void 0 && previous !== action) {
        throw new LspWorkspaceEditError(
          "contradictory_resource_operations",
          `contradictory resource operations target ${path}`
        );
      }
      resourceActions.set(path, action);
    };
    const applyDocumentEdits = async (uri, edits) => {
      const namedPath = filePathFromUri(uri);
      const editable = editableOperations.get(namedPath);
      if (editable !== void 0) {
        const current2 = Buffer.from(editable.after_base64, "base64");
        const decoded2 = decodeUtf8(current2, namedPath);
        editable.after_base64 = encodeUtf8(
          applyTextEdits(decoded2.text, edits, encoding),
          decoded2.bom
        ).toString("base64");
        return;
      }
      const namedBefore = await snapshotNamedPath(namedPath);
      if (namedBefore.kind === "missing") {
        throw new LspWorkspaceEditError(
          "invalid_destination",
          `text edit file is missing: ${namedPath}`
        );
      }
      const targetPath = await realpath(namedPath);
      const targetMetadata = await stat(targetPath);
      if (!targetMetadata.isFile()) {
        throw new LspWorkspaceEditError(
          "directory_operation",
          `text edit target is not a file: ${namedPath}`
        );
      }
      const before = await snapshotNamedPath(targetPath);
      if (before.kind !== "file") {
        throw new LspWorkspaceEditError(
          "invalid_destination",
          `text edit target is not a file: ${targetPath}`
        );
      }
      const current = contentsFromSnapshot(before);
      const decoded = decodeUtf8(current, targetPath);
      const after = encodeUtf8(applyTextEdits(decoded.text, edits, encoding), decoded.bom);
      const operation = {
        kind: "modify",
        named_path: namedPath,
        path: targetPath,
        named_before: namedBefore,
        before,
        after_base64: after.toString("base64"),
        mode: before.mode
      };
      operations.push(operation);
      editableOperations.set(namedPath, operation);
    };
    for (const [uri, edits] of Object.entries(edit.changes ?? {})) {
      await applyDocumentEdits(uri, edits);
    }
    for (const change of edit.documentChanges ?? []) {
      if (change.kind === void 0) {
        await applyDocumentEdits(change.textDocument.uri, regularTextEdits(change.edits));
        continue;
      }
      if (change.kind === "create") {
        const path = filePathFromUri(change.uri);
        if (destinations.has(path)) {
          throw new LspWorkspaceEditError(
            "duplicate_destination",
            `duplicate destination: ${path}`
          );
        }
        destinations.add(path);
        rememberResourceAction(path, "create");
        const before2 = await snapshotNamedPath(path);
        if (before2.kind !== "missing" && change.options?.ignoreIfExists === true) continue;
        if (before2.kind !== "missing" && change.options?.overwrite !== true) {
          throw new LspWorkspaceEditError(
            "invalid_destination",
            `create destination exists: ${path}`
          );
        }
        const operation = {
          kind: "create",
          named_path: path,
          before: before2,
          after_base64: "",
          mode: before2.kind === "file" ? before2.mode : 384
        };
        operations.push(operation);
        editableOperations.set(path, operation);
        continue;
      }
      if (change.kind === "delete") {
        const path = filePathFromUri(change.uri);
        rememberResourceAction(path, "delete");
        const before2 = await snapshotNamedPath(path);
        if (before2.kind === "missing" && change.options?.ignoreIfNotExists === true) continue;
        if (before2.kind === "missing") {
          throw new LspWorkspaceEditError(
            "invalid_destination",
            `delete source is missing: ${path}`
          );
        }
        operations.push({ kind: "delete", named_path: path, before: before2 });
        continue;
      }
      const source = filePathFromUri(change.oldUri);
      const destination = filePathFromUri(change.newUri);
      if (destinations.has(destination)) {
        throw new LspWorkspaceEditError(
          "duplicate_destination",
          `duplicate destination: ${destination}`
        );
      }
      destinations.add(destination);
      rememberResourceAction(source, "rename-source");
      rememberResourceAction(destination, "rename-destination");
      const before = await snapshotNamedPath(source);
      if (before.kind === "missing") {
        throw new LspWorkspaceEditError(
          "invalid_destination",
          `rename source is missing: ${source}`
        );
      }
      const destinationBefore = await snapshotNamedPath(destination);
      if (destinationBefore.kind !== "missing" && change.options?.ignoreIfExists === true) continue;
      if (destinationBefore.kind !== "missing" && change.options?.overwrite !== true) {
        throw new LspWorkspaceEditError(
          "invalid_destination",
          `rename destination exists: ${destination}`
        );
      }
      operations.push({
        kind: "rename",
        named_path: source,
        destination_path: destination,
        before,
        destination_before: destinationBefore
      });
    }
    const changingOperations = operations.filter(
      (operation) => operation.kind !== "modify" || !contentsFromSnapshot(operation.before).equals(
        Buffer.from(operation.after_base64, "base64")
      )
    );
    const summaries = changingOperations.flatMap((operation) => {
      if (operation.kind === "modify") {
        return [
          fileSummary(
            operation.named_path,
            contentsFromSnapshot(operation.before),
            Buffer.from(operation.after_base64, "base64")
          )
        ];
      }
      return [];
    }).sort((left, right) => left.localeCompare(right));
    const preview = {
      kind: "workspace_edit_preview",
      preview_id: this.createPreviewId(),
      server_id: input.serverId,
      summary: changingOperations.length === 0 ? NO_CHANGES_SUMMARY : summaries.join("\n"),
      state: "available",
      operations: changingOperations
    };
    this.previews.set(preview.preview_id, preview);
    if (input.reported !== true) this.unreportedPreviews.set(preview.preview_id, preview);
    return structuredClone(preview);
  }
  /** Forget a preview that no result names, so it can never be applied. */
  discardPreview(previewId) {
    this.previews.delete(previewId);
    this.unreportedPreviews.delete(previewId);
  }
  /** Take server-initiated previews that must be exposed through the active LSP result. */
  takeUnreportedPreviewRecords() {
    const records = [...this.unreportedPreviews.values()].map(
      (preview) => structuredClone(preview)
    );
    this.unreportedPreviews.clear();
    return records;
  }
  /**
   * Hold previews again that `takeUnreportedPreviewRecords` took for a result that was never
   * returned, so the next result reports them. A discarded preview stays discarded.
   */
  restoreUnreportedPreviewRecords(records) {
    for (const { preview_id: previewId } of records) {
      const preview = this.previews.get(previewId);
      if (preview !== void 0) this.unreportedPreviews.set(previewId, preview);
    }
  }
  /** Return the canonical Mutation Manifest prepared before Pi's `tool_call` hooks run. */
  prepareMutationManifest(previewId) {
    const preview = this.requireAvailablePreview(previewId);
    return structuredClone(manifestForOperations(preview.operations));
  }
  /** Rebuild branch-local available/applied preview state from persisted tool result records. */
  replayPreviewRecords(records) {
    let rejected = 0;
    for (const record of records) {
      if (!Value19.Check(LspWorkspaceEditPreviewRecordSchema, record)) {
        rejected++;
        continue;
      }
      this.previews.set(record.preview_id, structuredClone(record));
    }
    return rejected;
  }
  /** Revalidate and apply one preview inside every sorted real-path mutation queue. */
  async applyPreview(previewId, manifest, signal) {
    const preview = this.requireAvailablePreview(previewId);
    const canonical = manifestForOperations(preview.operations);
    if (JSON.stringify(manifest) !== JSON.stringify(canonical)) {
      throw new LspWorkspaceEditError(
        "mutation_manifest_mismatch",
        "Mutation Manifest no longer matches its preview"
      );
    }
    const queueKeys = await manifestQueueKeys(canonical);
    const acquire = async (index) => {
      const key = queueKeys[index];
      if (key === void 0) return this.applyInsideQueues(preview, canonical, signal);
      return this.queueMutation(key, () => acquire(index + 1));
    };
    return acquire(0);
  }
  requireAvailablePreview(previewId) {
    const preview = this.previews.get(previewId);
    if (preview === void 0) {
      throw new LspWorkspaceEditError(
        "preview_not_found",
        `Workspace Edit Preview not found: ${previewId}`
      );
    }
    if (preview.state === "applied") {
      throw new LspWorkspaceEditError(
        "preview_already_applied",
        `Workspace Edit Preview was already applied: ${previewId}`
      );
    }
    return preview;
  }
  async applyInsideQueues(preview, manifest, signal) {
    if (JSON.stringify(manifest) !== JSON.stringify(manifestForOperations(preview.operations))) {
      throw new LspWorkspaceEditError(
        "mutation_manifest_mismatch",
        "Mutation Manifest changed while waiting for file queues"
      );
    }
    await this.assertPreviewFresh(preview);
    if (signal?.aborted === true) {
      throw new LspWorkspaceEditError(
        "workspace_edit_cancelled",
        "Workspace Edit cancelled before its first mutation"
      );
    }
    const rollback = [];
    const changedFiles = [];
    const createdFiles = [];
    const deletedFiles = [];
    const movedFiles = [];
    try {
      for (const operation of preview.operations) {
        if (operation.kind === "modify") {
          await this.files.replaceFile(
            operation.path,
            Buffer.from(operation.after_base64, "base64"),
            operation.mode
          );
          rollback.push({ path: operation.path, snapshot: operation.before });
          changedFiles.push(operation.named_path);
          continue;
        }
        if (operation.kind === "create") {
          await this.files.replaceFile(
            operation.named_path,
            Buffer.from(operation.after_base64, "base64"),
            operation.mode
          );
          rollback.push({ path: operation.named_path, snapshot: operation.before });
          if (operation.before.kind === "missing") createdFiles.push(operation.named_path);
          else changedFiles.push(operation.named_path);
          continue;
        }
        if (operation.kind === "delete") {
          await this.files.removePath(operation.named_path);
          rollback.push({ path: operation.named_path, snapshot: operation.before });
          deletedFiles.push(operation.named_path);
          continue;
        }
        if (operation.destination_before.kind !== "missing") {
          await this.files.removePath(operation.destination_path);
          rollback.push({
            path: operation.destination_path,
            snapshot: operation.destination_before
          });
        }
        await this.files.renamePath(operation.named_path, operation.destination_path);
        rollback.push({ path: operation.named_path, snapshot: operation.before });
        if (operation.destination_before.kind === "missing") {
          rollback.push({
            path: operation.destination_path,
            snapshot: operation.destination_before
          });
        }
        movedFiles.push({ from: operation.named_path, to: operation.destination_path });
      }
    } catch (cause) {
      const recoveryFailures = [];
      for (const entry of rollback.reverse()) {
        try {
          await restorePath(entry.path, entry.snapshot, this.files);
        } catch {
          recoveryFailures.push(entry.path);
        }
      }
      if (recoveryFailures.length > 0) {
        throw new LspWorkspaceEditError(
          "workspace_edit_recovery_failed",
          `Workspace Edit rollback failed for: ${recoveryFailures.join(", ")}`,
          recoveryFailures,
          { cause }
        );
      }
      throw new LspWorkspaceEditError(
        "workspace_edit_apply_failed",
        "Workspace Edit failed and was rolled back",
        [],
        { cause }
      );
    }
    this.previews.set(preview.preview_id, { ...preview, state: "applied" });
    return {
      preview_id: preview.preview_id,
      state: "applied",
      changed_files: changedFiles.sort(),
      created_files: createdFiles.sort(),
      deleted_files: deletedFiles.sort(),
      moved_files: movedFiles
    };
  }
  async assertPreviewFresh(preview) {
    for (const operation of preview.operations) {
      if (operation.kind === "modify") {
        if (!snapshotMatches(await snapshotNamedPath(operation.named_path), operation.named_before) || !snapshotMatches(await snapshotNamedPath(operation.path), operation.before)) {
          throw new LspWorkspaceEditError(
            "stale_workspace_edit",
            `file changed: ${operation.named_path}`
          );
        }
        continue;
      }
      if (operation.kind === "rename") {
        if (!snapshotMatches(await snapshotNamedPath(operation.named_path), operation.before) || !snapshotMatches(
          await snapshotNamedPath(operation.destination_path),
          operation.destination_before
        )) {
          throw new LspWorkspaceEditError(
            "stale_workspace_edit",
            `rename source or destination changed: ${operation.named_path}`
          );
        }
        continue;
      }
      if (!snapshotMatches(await snapshotNamedPath(operation.named_path), operation.before)) {
        throw new LspWorkspaceEditError(
          "stale_workspace_edit",
          `file changed: ${operation.named_path}`
        );
      }
    }
  }
};

// src/troubleshooting-skill.ts
import { fileURLToPath as fileURLToPath5 } from "node:url";
var TROUBLESHOOTING_SKILL_PATH = fileURLToPath5(
  new URL("../skills/pi-lsp/SKILL.md", import.meta.url)
);
var TROUBLESHOOTING_HINT = `For diagnosis, read the pi-lsp troubleshooting Skill at ${TROUBLESHOOTING_SKILL_PATH}.`;
var TROUBLESHOOTING_WARNING_POINTER = `(pi-lsp troubleshooting Skill: ${TROUBLESHOOTING_SKILL_PATH})`;

// src/lsp-tool.ts
var UnpublishedWorkspaceDiagnosticsSchema = Type19.Object({
  status: Type19.Literal("unsupported"),
  message: Type19.String({ minLength: 1 })
});
var ApplyPreviewArgumentsSchema = Type19.Object(
  {
    preview_id: Type19.String({ minLength: 1 }),
    mutation_manifest: Type19.Optional(Type19.Unknown())
  },
  { additionalProperties: true }
);
function piLspError(message) {
  return new Error(message.startsWith("Pi LSP:") ? message : `Pi LSP: ${message}`);
}
var EXPECTED_FAILURE_CODES = /* @__PURE__ */ new Set([
  "ambiguous-server",
  "no-capable-server"
]);
function piLspFailureError(failures) {
  const message = failures.map((failure) => failure.message).join("; ");
  if (failures.every(({ code }) => EXPECTED_FAILURE_CODES.has(code))) return piLspError(message);
  return piLspError(`${message}

${TROUBLESHOOTING_HINT}`);
}
var WARNING_NAME_LIMIT = 3;
function namedPaths(paths, total) {
  const named = paths.slice(0, WARNING_NAME_LIMIT);
  const more = total - named.length;
  return [...named, ...more > 0 ? [`+${more} more`] : []].join(", ");
}
function countedNoun(count, noun, isLowerBound) {
  return `${isLowerBound ? "at least " : ""}${count} ${noun}${count === 1 ? "" : "s"}`;
}
async function serverInstanceScope(dependencies, serverId, rootPath, cwd, queriedFilePath) {
  const root = lspDisplayPath(cwd, rootPath);
  const scope = await dependencies.manager.findWorkspaceScope(
    serverId,
    rootPath,
    loadedDocuments(queriedFilePath)
  );
  return {
    line: `Searched ${serverId} workspace root: ${root}`,
    warnings: [
      otherWorkspaceRootsWarning(serverId, root, scope.otherRoots, cwd),
      scope.unloadedPackages === void 0 ? void 0 : unloadedWorkspacePackagesWarning(serverId, root, scope.unloadedPackages, cwd)
    ].filter((warning) => warning !== void 0)
  };
}
function loadedDocuments(queriedFilePath) {
  return {
    queriedFilePath,
    synchronizedFilePaths: (client) => client.synchronizedDocumentPaths()
  };
}
function warmUpWorkspace(dependencies, client, route, queriedFilePath, signal) {
  return warmUpUnloadedPackages({
    manager: dependencies.manager,
    client,
    serverId: route.serverId,
    rootPath: route.rootPath,
    loaded: loadedDocuments(queriedFilePath),
    limits: dependencies.warmUp ?? LSP_WARM_UP_LIMITS,
    signal
  });
}
function unloadedWorkspacePackagesWarning(serverId, root, { packageRoots, hasMore }, cwd) {
  if (packageRoots.length === 0 && !hasMore) return void 0;
  const nextStep = `then retry. ${TROUBLESHOOTING_WARNING_POINTER}`;
  if (packageRoots.length === 0) {
    return `${serverId} may not have loaded every package under ${root} (discovery stopped early); references in unloaded packages may be missing. Run any LSP tool on a file in each package you need, ${nextStep}`;
  }
  const count = countedNoun(packageRoots.length, "package", hasMore);
  const names = namedPaths(
    packageRoots.map((path) => lspDisplayPath(cwd, path)),
    packageRoots.length
  );
  const stoppedEarly = hasMore ? "; discovery stopped early" : "";
  const target = packageRoots.length === 1 ? "the missing package" : "each missing package";
  return `${serverId} has not loaded ${count} (${names}${stoppedEarly}) under ${root}; references there may be missing. Run any LSP tool on a file in ${target}, ${nextStep}`;
}
function otherWorkspaceRootsWarning(serverId, root, { rootPaths, count, capped, unchecked }, cwd) {
  if (count === 0 && !unchecked) return void 0;
  const nextStep = `so importers there may be missed. Query a file there or search for importers. ${TROUBLESHOOTING_WARNING_POINTER}`;
  if (count === 0) {
    return `${serverId} searched only ${root}; other ${serverId} roots may exist in directories that were not checked (discovery stopped early), ${nextStep}`;
  }
  const roots = countedNoun(count, `other ${serverId} root`, capped || unchecked);
  const names = namedPaths(
    rootPaths.map((path) => lspDisplayPath(cwd, path)),
    count
  );
  const stoppedEarly = unchecked ? "; discovery stopped early" : "";
  return `${serverId} searched only ${root}; ${roots} ${count === 1 ? "exists" : "exist"} (${names}${stoppedEarly}), ${nextStep}`;
}
function serverInstanceScopeLines(scopes) {
  return scopes.flatMap(({ line, warnings }) => [
    line,
    ...warnings.map((warning) => `Warning: ${warning}`)
  ]);
}
function serverInstanceScopeWarnings(scopes) {
  return scopes.flatMap(({ warnings }) => warnings);
}
function requireMethod(method) {
  return { method, isSupportedBy: (client) => client.hasCapability(method) };
}
var DOCUMENT_DIAGNOSTICS_CAPABILITY = {
  method: import_node2.DocumentDiagnosticRequest.method,
  isSupportedBy: () => true
};
var WORKSPACE_DIAGNOSTICS_CAPABILITY = {
  method: import_node2.WorkspaceDiagnosticRequest.method,
  isSupportedBy: () => true
};
async function createLspToolOutput2(text, details, structured, dependencies) {
  const previewRecords = dependencies.workspaceEdits.takeUnreportedPreviewRecords();
  try {
    const normalizedPreviewRecords = previewRecords.map(
      (record) => Value20.Parse(LspWorkspaceEditPreviewRecordSchema, record)
    );
    const mergedDetails = normalizedPreviewRecords.length === 0 ? details : {
      ...details,
      preview_records: [...details.preview_records ?? [], ...normalizedPreviewRecords]
    };
    const previewNotice = previewRecords.length === 0 ? "" : `

Server Workspace Edit Preview${previewRecords.length === 1 ? "" : "s"}: ${previewRecords.map(({ preview_id: previewId }) => previewId).join(", ")}`;
    const structuredWithPreviews = previewRecords.length === 0 ? structured : {
      ...structured,
      server_preview_ids: previewRecords.map(({ preview_id: previewId }) => previewId)
    };
    return await createLspToolOutput(
      `${text}${previewNotice}`,
      mergedDetails,
      structuredWithPreviews,
      dependencies.sessionFiles
    );
  } catch (cause) {
    dependencies.workspaceEdits.restoreUnreportedPreviewRecords(previewRecords);
    throw cause;
  }
}
function queriedPositionText(operation, queried, textContext, resultCount) {
  if (queried === void 0 || !isLspPositionReadOperation(operation)) return void 0;
  const position = describeLspQueryPosition(textContext.cwd, queried.query);
  return {
    structured: { position: lspStructuredValue(formatLspToolValue(queried.query)) },
    position,
    headline: resultCount === 0 ? [] : [`Query position: ${position}`],
    emptyMessage: (read) => lspEmptyPositionReadMessage(
      operation,
      position,
      queried.noHierarchyItemServers.has(read.server_id)
    )
  };
}
function resultPositionWarnings(result, cwd) {
  return result.successes.flatMap(({ serverId, value }) => {
    return [
      lspApproximatePositionsWarning(serverId, value.approximateFiles, cwd),
      lspStalePositionsWarning(serverId, value.staleFiles, cwd)
    ].filter((warning) => warning !== void 0);
  });
}
function readTextContext(filePath, context) {
  return { cwd: context.cwd, documentPath: absoluteLspFilePath(filePath, context) };
}
function structuredReadFields(operation, reads, warnings, documentPath) {
  const results = reads.map((read) => ({
    ...read,
    value: lspStructuredResultValue(operation, read.value, documentPath)
  }));
  return lspStructuredFields(formatLspToolValue({ results, warnings }));
}
async function readOutput(operation, result, dependencies, textContext) {
  const normalized = await result;
  requireReadSuccess(normalized);
  const resolved = {
    failures: normalized.failures,
    successes: normalized.successes.map((success) => ({ ...success, value: success.value.value }))
  };
  const results = readOperationValue(resolved).map((read, index) => {
    const { omitted, omittedImports } = normalized.successes[index]?.value ?? {};
    if (omitted === void 0) return read;
    return omittedImports === void 0 ? { ...read, omitted } : { ...read, omitted, omitted_imports: omittedImports };
  });
  const failureWarnings = [
    ...resultPositionWarnings(normalized, textContext.cwd),
    ...resolved.failures.map(({ message }) => message)
  ];
  const scopes = operation === "find_references" ? await Promise.all(
    resolved.successes.map(
      ({ serverId, rootPath }) => serverInstanceScope(
        dependencies,
        serverId,
        rootPath,
        textContext.cwd,
        textContext.documentPath
      )
    )
  ) : [];
  const warnings = [...serverInstanceScopeWarnings(scopes), ...failureWarnings];
  const json = formatLspToolValue({ results, warnings });
  const details = operationDetails(operation, readOperationOutcomes(resolved));
  const resultCount = results.reduce((count, read) => count + semanticLspValueCount(read.value), 0);
  const queried = queriedPositionText(operation, textContext.queried, textContext, resultCount);
  const structured = {
    ...queried?.structured,
    ...structuredReadFields(operation, results, warnings, textContext.documentPath)
  };
  let text;
  if (isLspLocationOperation(operation)) {
    text = await formatLspLocationReadText({
      operation,
      cwd: textContext.cwd,
      documentPath: textContext.documentPath,
      reads: results,
      warnings: failureWarnings,
      scope: [...queried?.headline ?? [], ...serverInstanceScopeLines(scopes)],
      emptyMessage: queried?.emptyMessage
    });
  } else if (isLspStructureOperation(operation)) {
    text = await formatLspStructureReadText({
      operation,
      cwd: textContext.cwd,
      documentPath: textContext.documentPath,
      reads: results,
      warnings: failureWarnings,
      positions: textContext.positions,
      outgoingCallSitePath: (call) => OUTGOING_CALL_SITE_PATHS.get(call),
      scope: queried?.headline ?? [],
      emptyMessage: queried?.emptyMessage
    });
  } else if (isLspDiagnosticsOperation(operation)) {
    text = formatLspDiagnosticsReadText({
      operation,
      cwd: textContext.cwd,
      documentPath: textContext.documentPath,
      reads: results,
      warnings: failureWarnings
    });
  } else if (operation === "hover" && queried !== void 0) {
    text = formatLspHoverReadText({
      reads: results,
      warnings: failureWarnings,
      scope: queried.headline,
      emptyMessage: queried.emptyMessage
    });
  } else if (queried !== void 0) {
    const summary = resultCount === 0 ? [...new Set(results.map(queried.emptyMessage))] : queried.headline;
    text = [...summary, json].join("\n");
  } else {
    return createLspToolOutput2(json, details, structured, dependencies);
  }
  return createLspToolOutput2(
    text,
    { ...details, result_count: resultCount },
    structured,
    dependencies
  );
}
async function positionReadOutput(operation, result, dependencies, textContext) {
  const resolved = await result;
  const [first] = resolved.successes;
  const queried = first === void 0 ? void 0 : {
    query: first.value.query,
    noHierarchyItemServers: new Set(
      resolved.successes.filter(({ value }) => value.noHierarchyItem).map(({ serverId }) => serverId)
    )
  };
  return readOutput(operation, Promise.resolve(resolved), dependencies, {
    ...textContext,
    queried
  });
}
async function itemListOutput(operation, result, dependencies, textContext) {
  const resolved = await result;
  requireReadSuccess(resolved);
  const results = resolved.successes.map(({ serverId, rootPath, value }) => ({
    root_path: rootPath,
    server_id: serverId,
    value: value.value,
    omitted: value.omitted,
    // Undefined fields are dropped from the serialized result, so symbols carry no prefix.
    prefix: value.prefix
  }));
  const warnings = [
    ...resultPositionWarnings(resolved, textContext.cwd),
    ...resolved.failures.map(({ message }) => message)
  ];
  const resultCount = results.reduce((count, read) => count + semanticLspValueCount(read.value), 0);
  const query = resolved.successes[0]?.value.query;
  const queried = queriedPositionText(
    operation,
    query === void 0 ? void 0 : { query, noHierarchyItemServers: /* @__PURE__ */ new Set() },
    textContext,
    resultCount
  );
  const text = await formatLspItemListText({
    operation,
    cwd: textContext.cwd,
    documentPath: textContext.documentPath,
    reads: results,
    warnings,
    scope: queried?.headline ?? [],
    position: queried?.position
  });
  return createLspToolOutput2(
    text,
    { ...operationDetails(operation, readOperationOutcomes(resolved)), result_count: resultCount },
    {
      ...queried?.structured,
      ...structuredReadFields(operation, results, warnings, textContext.documentPath)
    },
    dependencies
  );
}
function parseLspOperationParameters(operation, input) {
  try {
    return Value20.Parse(LspOperationParametersSchemas[operation], input);
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    throw piLspError(`invalid tool arguments: ${message}`);
  }
}
function lspOperationCall(operation, parameters) {
  return { operation, ...parameters };
}
function absoluteLspFilePath(filePath, context) {
  return resolve5(context.cwd, normalizeLspFilePath(filePath));
}
async function documentFilePath(filePath, context) {
  const absolutePath = absoluteLspFilePath(filePath, context);
  let stats;
  try {
    stats = await stat2(absolutePath);
  } catch (cause) {
    if (cause instanceof Error && "code" in cause) {
      if (cause.code === "ENOENT" || cause.code === "ENOTDIR") {
        throw new LspInputError(`file not found: ${absolutePath}`);
      }
    }
    throw cause;
  }
  if (stats.isDirectory()) throw new LspInputError(`${absolutePath} is a directory, not a file`);
  return absolutePath;
}
async function prepareLspDocument(client, route, filePath) {
  return {
    client,
    document: await client.synchronizeDocument(filePath, route.language.languageId),
    positionEncoding: normalizeLspPositionEncoding(client.positionEncoding),
    route
  };
}
function protocolPosition(prepared, position) {
  return convertLspCodePointPosition(prepared.document.text, position, prepared.positionEncoding);
}
function serverOutcomeForFailure(failure) {
  let outcome;
  if (failure.code === "server-unavailable") outcome = "unavailable";
  else if (failure.code === "no-capable-server") outcome = "unsupported";
  else if (failure.code === "request-timeout") outcome = "timeout";
  else outcome = "error";
  return { server_id: failure.serverId, outcome, message: failure.message };
}
function operationDetails(operation, outcomes, previewRecords = []) {
  const details = {
    kind: "operation",
    operation,
    server_outcomes: [...outcomes]
  };
  if (previewRecords.length > 0) details.preview_records = [...previewRecords];
  return details;
}
function requireReadSuccess(result) {
  if (result.successes.length > 0) return;
  throw piLspFailureError(result.failures);
}
function readOperationValue(result) {
  return result.successes.map((success) => ({
    root_path: success.rootPath,
    server_id: success.serverId,
    value: success.value
  }));
}
function readOperationOutcomes(result) {
  return [
    ...result.successes.map(({ serverId, value }) => {
      if (Value20.Check(UnpublishedWorkspaceDiagnosticsSchema, value)) {
        return { server_id: serverId, outcome: "unsupported", message: value.message };
      }
      return { server_id: serverId, outcome: "success" };
    }),
    ...result.failures.map(serverOutcomeForFailure)
  ];
}
function protocolResultOptions(prepared) {
  return { encoding: prepared.positionEncoding, document: prepared.document };
}
function normalizeProtocolResult(value, prepared) {
  return normalizeLspProtocolResult(value, protocolResultOptions(prepared));
}
var OUTGOING_CALL_SITE_PATHS = /* @__PURE__ */ new WeakMap();
async function normalizeOutgoingCalls(preparedCalls, prepared) {
  const normalizer = new LspProtocolResultNormalizer(protocolResultOptions(prepared));
  const normalized = await Promise.all(
    preparedCalls.map(async ({ item, calls }) => {
      const itemUri = protocolString(protocolRecord(item)?.uri);
      const itemCalls = await normalizer.normalizeInFile(calls, itemUri ?? prepared.document.uri);
      if (itemUri === void 0 || !Array.isArray(itemCalls)) return itemCalls;
      const sitePath = lspProtocolUriPath(itemUri);
      for (const call of itemCalls) {
        if (protocolRecord(call) !== void 0) OUTGOING_CALL_SITE_PATHS.set(call, sitePath);
      }
      return itemCalls;
    })
  );
  return {
    value: normalized.flat(),
    approximateFiles: normalizer.approximateFiles,
    staleFiles: normalizer.staleFiles
  };
}
function supportsResolveProvider(value) {
  return protocolRecord(value)?.resolveProvider === true;
}
async function resolveProtocolItems(client, value, method, signal) {
  if (Array.isArray(value)) {
    return Promise.all(value.map((item) => client.request(method, item, signal)));
  }
  const record = protocolRecord(value);
  if (record === void 0 || !Array.isArray(record.items)) return value;
  return {
    ...record,
    items: await Promise.all(record.items.map((item) => client.request(method, item, signal)))
  };
}
async function resolveCodeActionItems(client, actions, signal) {
  if (!Array.isArray(actions)) return actions;
  return Promise.all(
    actions.map((action) => {
      const record = protocolRecord(action);
      return record !== void 0 && Value20.Check(ProtocolStringSchema, record.command) ? action : client.request(import_node2.CodeActionResolveRequest.method, action, signal);
    })
  );
}
function formattingOptions(parameters) {
  return {
    tabSize: parameters.tab_size,
    insertSpaces: parameters.insert_spaces,
    trimTrailingWhitespace: parameters.trim_trailing_whitespace,
    insertFinalNewline: parameters.insert_final_newline,
    trimFinalNewlines: parameters.trim_final_newlines
  };
}
function workspaceEditFromTextEdits(uri, edits) {
  const textEdits = Array.isArray(edits) ? edits : [];
  return { changes: { [uri]: textEdits } };
}
function normalizeStoreMutationManifest(manifest) {
  const entries = manifest.entries.map((entry) => {
    if (entry.operation === "rename") {
      return {
        operation: "rename",
        path: entry.path,
        destination_path: entry.destination_path
      };
    }
    return { operation: entry.operation, path: entry.path };
  });
  try {
    return Value20.Parse(MutationManifestSchema, entries);
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    throw piLspError(`invalid canonical Mutation Manifest: ${message}`);
  }
}
function sameMutationManifest(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}
function statusLanguages(languages) {
  const patterns = /* @__PURE__ */ new Map();
  for (const { languageId, extensions = [], fileNames = [] } of languages) {
    patterns.set(languageId, [...patterns.get(languageId) ?? [], ...extensions, ...fileNames]);
  }
  return Object.fromEntries(patterns);
}
var LISTED_STATES = /* @__PURE__ */ new Set([
  "disabled",
  "running",
  "starting",
  "stopped",
  "unavailable"
]);
function listedStatusServers(status, all) {
  return all ? status.servers : status.servers.filter(({ state }) => LISTED_STATES.has(state));
}
function formatStatusText(status, listed, cwd) {
  const lines = listed.map((server) => {
    const languages = Object.entries(statusLanguages(server.languages)).map(
      ([languageId, patterns]) => `${languageId}(${patterns.join(",")})`
    );
    return [
      server.serverId,
      server.state,
      ...server.rootPath === void 0 ? [] : [lspDisplayPath(cwd, server.rootPath)],
      ...languages,
      ...server.error === void 0 ? [] : [`error: ${collapseLspWhitespace(server.error)}`],
      ...server.sharedWithSessions === void 0 ? [] : [lspSharedWithSessionsText(server.sharedWithSessions)]
    ].join(" ");
  });
  const notStarted = status.servers.length - listed.length;
  const summary = notStarted === 0 ? [] : [`+${notStarted} configured, not started (pass all: true to list)`];
  const warnings = status.warnings.map((warning) => `Warning: ${warning}`);
  return [
    ...status.servers.length === 0 ? ["No configured Server Definitions."] : [...lines.length === 0 ? ["No Server Instances started."] : lines, ...summary],
    ...warnings.length === 0 ? [] : ["", ...warnings]
  ].join("\n");
}
async function recordToolPreview(dependencies, previews, serverId, edit, positionEncoding) {
  const preview = await previews.createPreview({ edit, serverId, positionEncoding });
  const manifest = normalizeStoreMutationManifest(
    dependencies.workspaceEdits.prepareMutationManifest(preview.preview_id)
  );
  return { preview, manifest };
}
function namedPreviewIds(details) {
  const ids = /* @__PURE__ */ new Set();
  if (details.kind === "workspace_edit_preview") ids.add(details.preview_id);
  for (const { preview_id: previewId } of details.preview_records ?? []) ids.add(previewId);
  return ids;
}
async function withPreviewLedger(dependencies, run) {
  const previews = new LspPreviewLedger(dependencies.workspaceEdits);
  let named = /* @__PURE__ */ new Set();
  try {
    const result = await run(previews);
    named = namedPreviewIds(result.details);
    return result;
  } finally {
    previews.discardUnnamed(named);
  }
}
async function workspacePreviewOutput(dependencies, previews, operation, route, edit, positionEncoding, scope) {
  const { serverId, rootPath } = route;
  const { preview, manifest } = await recordToolPreview(
    dependencies,
    previews,
    serverId,
    edit,
    positionEncoding
  );
  const scopeLines = scope === void 0 ? [] : serverInstanceScopeLines([scope]);
  const summary = [scopeLines.join("\n"), preview.summary].filter((part) => part !== "").join("\n\n");
  const details = {
    kind: "workspace_edit_preview",
    preview_id: preview.preview_id,
    operation,
    summary,
    mutation_manifest: manifest,
    preview_record: preview,
    state: "available"
  };
  const text = manifest.length === 0 ? `${NO_CHANGES_SUMMARY}: the edits from server ${serverId} change no file, so there is nothing to apply.` : `Workspace Edit Preview ${preview.preview_id}
${summary}`;
  return createLspToolOutput2(
    text,
    details,
    {
      preview_id: preview.preview_id,
      server_id: serverId,
      root_path: rootPath,
      summary,
      warnings: scope === void 0 ? [] : serverInstanceScopeWarnings([scope]),
      mutation_manifest: manifest
    },
    dependencies
  );
}
async function executePositionRead(dependencies, parameters, context, signal) {
  const filePath = await documentFilePath(parameters.file_path, context);
  const methodByOperation = {
    hover: import_node2.HoverRequest.method,
    signature_help: import_node2.SignatureHelpRequest.method,
    declaration: import_node2.DeclarationRequest.method,
    goto_definition: import_node2.DefinitionRequest.method,
    goto_type_definition: import_node2.TypeDefinitionRequest.method,
    goto_implementation: import_node2.ImplementationRequest.method,
    find_references: import_node2.ReferencesRequest.method,
    document_highlights: import_node2.DocumentHighlightRequest.method,
    call_hierarchy: import_node2.CallHierarchyPrepareRequest.method,
    incoming_calls: import_node2.CallHierarchyPrepareRequest.method,
    outgoing_calls: import_node2.CallHierarchyPrepareRequest.method,
    type_hierarchy: import_node2.TypeHierarchyPrepareRequest.method,
    supertypes: import_node2.TypeHierarchyPrepareRequest.method,
    subtypes: import_node2.TypeHierarchyPrepareRequest.method,
    prepare_rename: import_node2.PrepareRenameRequest.method
  };
  const capabilityMethod = methodByOperation[parameters.operation];
  return dependencies.manager.runRead(
    filePath,
    parameters.server_id,
    requireMethod(capabilityMethod),
    async (client, route) => {
      if (parameters.operation === "find_references") {
        await warmUpWorkspace(dependencies, client, route, filePath, signal);
      }
      const prepared = await prepareLspDocument(client, route, filePath);
      const requested = { line: parameters.line, character: parameters.character };
      const position = protocolPosition(prepared, requested);
      const query = lspQueryPosition(filePath, prepared.document.text, requested);
      const textDocument = { uri: prepared.document.uri };
      let requestParameters = {
        textDocument,
        position
      };
      if (parameters.operation === "find_references") {
        requestParameters = {
          ...requestParameters,
          context: { includeDeclaration: parameters.include_declaration ?? true }
        };
      }
      let value = await prepared.client.request(capabilityMethod, requestParameters, signal);
      if (parameters.operation === "outgoing_calls") {
        const preparedItems = Array.isArray(value) ? value : [];
        const noHierarchyItem2 = preparedItems.length === 0;
        const preparedCalls = await Promise.all(
          preparedItems.map(async (item) => ({
            item,
            calls: await client.request(import_node2.CallHierarchyOutgoingCallsRequest.method, { item }, signal)
          }))
        );
        const normalized = await normalizeOutgoingCalls(preparedCalls, prepared);
        return { ...normalized, query, noHierarchyItem: noHierarchyItem2 };
      }
      let noHierarchyItem = false;
      if (parameters.operation === "incoming_calls" || parameters.operation === "supertypes" || parameters.operation === "subtypes") {
        const followupMethod = parameters.operation === "incoming_calls" ? import_node2.CallHierarchyIncomingCallsRequest.method : parameters.operation === "supertypes" ? import_node2.TypeHierarchySupertypesRequest.method : import_node2.TypeHierarchySubtypesRequest.method;
        const preparedItems = Array.isArray(value) ? value : [];
        noHierarchyItem = preparedItems.length === 0;
        value = (await Promise.all(
          preparedItems.map((item) => client.request(followupMethod, { item }, signal))
        )).flat();
      }
      return { ...await normalizeProtocolResult(value, prepared), query, noHierarchyItem };
    }
  );
}
async function executeCompletion(dependencies, parameters, context, signal) {
  const filePath = await documentFilePath(parameters.file_path, context);
  return dependencies.manager.runRead(
    filePath,
    parameters.server_id,
    requireMethod(import_node2.CompletionRequest.method),
    async (client, route) => {
      const prepared = await prepareLspDocument(client, route, filePath);
      const position = protocolPosition(prepared, parameters);
      const prefix = parameters.prefix ?? completionPrefixAt(prepared.document.text, parameters);
      const bounded = boundLspCompletions(
        await client.request(
          import_node2.CompletionRequest.method,
          { textDocument: { uri: prepared.document.uri }, position },
          signal
        ),
        { prefix, limit: parameters.limit ?? DEFAULT_LSP_ITEM_LIMIT }
      );
      let value = bounded.value;
      if (supportsResolveProvider(client.capabilities.completionProvider)) {
        value = await resolveProtocolItems(client, value, import_node2.CompletionResolveRequest.method, signal);
      }
      return {
        ...await normalizeProtocolResult(value, prepared),
        omitted: bounded.omitted,
        prefix,
        query: lspQueryPosition(filePath, prepared.document.text, parameters)
      };
    }
  );
}
async function requestImportFoldingRanges(client, textDocument, signal) {
  try {
    return importFoldingRanges(
      await client.request(import_node2.FoldingRangeRequest.method, { textDocument }, signal)
    );
  } catch (cause) {
    if (signal?.aborted === true) throw cause;
    return [];
  }
}
async function executeFileRead(dependencies, parameters, context, signal) {
  const filePath = await documentFilePath(parameters.file_path, context);
  const methodByOperation = {
    diagnostics: "diagnostics",
    document_symbols: import_node2.DocumentSymbolRequest.method,
    document_links: import_node2.DocumentLinkRequest.method,
    folding_ranges: import_node2.FoldingRangeRequest.method,
    code_lenses: import_node2.CodeLensRequest.method,
    document_colors: import_node2.DocumentColorRequest.method
  };
  const method = methodByOperation[parameters.operation];
  return dependencies.manager.runRead(
    filePath,
    parameters.server_id,
    method === "diagnostics" ? DOCUMENT_DIAGNOSTICS_CAPABILITY : requireMethod(method),
    async (client, route) => {
      const prepared = await prepareLspDocument(client, route, filePath);
      if (parameters.operation === "diagnostics") {
        return normalizeProtocolResult(
          await client.documentDiagnostics(filePath, route.language.languageId, signal),
          prepared
        );
      }
      const textDocument = { uri: prepared.document.uri };
      const depth = parameters.depth ?? DEFAULT_LSP_DOCUMENT_SYMBOL_DEPTH;
      const importRanges = parameters.operation === "document_symbols" && depth !== "all" && client.hasCapability(import_node2.FoldingRangeRequest.method) ? requestImportFoldingRanges(client, textDocument, signal) : Promise.resolve([]);
      const [imports, response] = await Promise.all([
        importRanges,
        client.request(method, { textDocument }, signal)
      ]);
      let value = response;
      if (parameters.operation === "document_symbols") {
        const withoutImports = dropImportSymbols(value, imports);
        const limited = limitLspDocumentSymbolDepth(withoutImports.value, depth);
        return {
          ...await normalizeProtocolResult(limited.value, prepared),
          omitted: withoutImports.omitted + limited.omitted,
          omittedImports: withoutImports.omitted > 0 ? withoutImports.omitted : void 0
        };
      }
      if (parameters.operation === "document_links" && supportsResolveProvider(client.capabilities.documentLinkProvider)) {
        value = await resolveProtocolItems(
          client,
          value,
          import_node2.DocumentLinkResolveRequest.method,
          signal
        );
      } else if (parameters.operation === "code_lenses" && supportsResolveProvider(client.capabilities.codeLensProvider)) {
        value = await resolveProtocolItems(client, value, import_node2.CodeLensResolveRequest.method, signal);
      }
      return normalizeProtocolResult(value, prepared);
    }
  );
}
async function executeInlayHints(dependencies, parameters, context, signal) {
  const filePath = await documentFilePath(parameters.file_path, context);
  return dependencies.manager.runRead(
    filePath,
    parameters.server_id,
    requireMethod(import_node2.InlayHintRequest.method),
    async (client, route) => {
      const prepared = await prepareLspDocument(client, route, filePath);
      let value = await client.request(
        import_node2.InlayHintRequest.method,
        {
          textDocument: { uri: prepared.document.uri },
          range: {
            start: protocolPosition(prepared, parameters.range.start),
            end: protocolPosition(prepared, parameters.range.end)
          }
        },
        signal
      );
      if (supportsResolveProvider(client.capabilities.inlayHintProvider)) {
        value = await resolveProtocolItems(client, value, import_node2.InlayHintResolveRequest.method, signal);
      }
      return normalizeProtocolResult(value, prepared);
    }
  );
}
async function executeSelectionRanges(dependencies, parameters, context, signal) {
  const filePath = await documentFilePath(parameters.file_path, context);
  return dependencies.manager.runRead(
    filePath,
    parameters.server_id,
    requireMethod(import_node2.SelectionRangeRequest.method),
    async (client, route) => {
      const prepared = await prepareLspDocument(client, route, filePath);
      const value = await client.request(
        import_node2.SelectionRangeRequest.method,
        {
          textDocument: { uri: prepared.document.uri },
          positions: parameters.positions.map((position) => protocolPosition(prepared, position))
        },
        signal
      );
      return normalizeProtocolResult(value, prepared);
    }
  );
}
async function executeWorkspaceDiagnostics(dependencies, parameters, context, signal) {
  const filePath = absoluteLspFilePath(parameters.file_path, context);
  return dependencies.manager.runRead(
    filePath,
    parameters.server_id,
    WORKSPACE_DIAGNOSTICS_CAPABILITY,
    async (client, route) => {
      const result = await client.workspaceDiagnostics(signal);
      if (result.status === "unsupported") {
        return {
          value: {
            status: result.status,
            message: `Server ${route.serverId} publishes no workspace diagnostics; it reports diagnostics only for a requested file. Use lsp_diagnostics for each file.`
          },
          approximateFiles: [],
          staleFiles: []
        };
      }
      return normalizeLspProtocolResult(
        result.status === "fresh" && result.source === "push_cache" ? { ...result, message: pushCacheCoverageMessage(route.serverId, result) } : result,
        { encoding: normalizeLspPositionEncoding(client.positionEncoding) }
      );
    }
  );
}
function pushCacheCoverageMessage(serverId, result) {
  const count = result.diagnosticsByUri.size;
  return `Server ${serverId} publishes no workspace diagnostics; these are the diagnostics it pushed for ${count} file${count === 1 ? "" : "s"} opened in this session. Use lsp_diagnostics for other files.`;
}
async function executeWorkspaceSymbols(dependencies, parameters, context, signal) {
  const filePath = absoluteLspFilePath(parameters.file_path, context);
  return dependencies.manager.runRead(
    filePath,
    parameters.server_id,
    requireMethod(import_node2.WorkspaceSymbolRequest.method),
    async (client) => {
      const bounded = boundLspWorkspaceSymbols(
        await client.request(import_node2.WorkspaceSymbolRequest.method, { query: parameters.query }, signal),
        parameters.limit ?? DEFAULT_LSP_ITEM_LIMIT
      );
      let value = bounded.value;
      if (supportsResolveProvider(client.capabilities.workspaceSymbolProvider)) {
        value = await resolveProtocolItems(
          client,
          value,
          import_node2.WorkspaceSymbolResolveRequest.method,
          signal
        );
      }
      return {
        ...await normalizeLspProtocolResult(value, {
          encoding: normalizeLspPositionEncoding(client.positionEncoding)
        }),
        omitted: bounded.omitted
      };
    }
  );
}
async function executeFormattingPreview(dependencies, previews, parameters, context, signal) {
  const filePath = await documentFilePath(parameters.file_path, context);
  const method = parameters.operation === "format_document" ? import_node2.DocumentFormattingRequest.method : parameters.operation === "format_range" ? import_node2.DocumentRangeFormattingRequest.method : import_node2.DocumentOnTypeFormattingRequest.method;
  const result = await dependencies.manager.runMutation(
    filePath,
    parameters.server_id,
    requireMethod(method),
    async (client2, route2) => {
      const prepared = await prepareLspDocument(client2, route2, filePath);
      const requestBase = {
        textDocument: { uri: prepared.document.uri },
        options: formattingOptions(parameters)
      };
      const requestParameters = parameters.operation === "format_range" ? {
        ...requestBase,
        range: {
          start: protocolPosition(prepared, parameters.range.start),
          end: protocolPosition(prepared, parameters.range.end)
        }
      } : parameters.operation === "format_on_type" ? {
        ...requestBase,
        position: protocolPosition(prepared, parameters),
        ch: parameters.trigger_character
      } : requestBase;
      const edits2 = await client2.request(method, requestParameters, signal);
      return { edits: edits2, uri: prepared.document.uri };
    }
  );
  if (result.kind === "failure") throw piLspFailureError([result.failure]);
  const { client, route } = result.instance;
  const { edits, uri } = result.value;
  return workspacePreviewOutput(
    dependencies,
    previews,
    parameters.operation,
    route,
    workspaceEditFromTextEdits(uri, edits),
    client.positionEncoding
  );
}
async function executeRenamePreview(dependencies, previews, parameters, context, signal) {
  const filePath = await documentFilePath(parameters.file_path, context);
  const result = await dependencies.manager.runMutation(
    filePath,
    parameters.server_id,
    requireMethod(import_node2.RenameRequest.method),
    async (client2, route2) => {
      await warmUpWorkspace(dependencies, client2, route2, filePath, signal);
      const prepared = await prepareLspDocument(client2, route2, filePath);
      return client2.request(
        import_node2.RenameRequest.method,
        {
          textDocument: { uri: prepared.document.uri },
          position: protocolPosition(prepared, parameters),
          newName: parameters.new_name
        },
        signal
      );
    }
  );
  if (result.kind === "failure") throw piLspFailureError([result.failure]);
  const { client, route } = result.instance;
  const edit = result.value;
  if (edit === null) throw piLspError("rename returned no Workspace Edit Preview");
  return workspacePreviewOutput(
    dependencies,
    previews,
    "rename",
    route,
    edit,
    client.positionEncoding,
    await serverInstanceScope(dependencies, route.serverId, route.rootPath, context.cwd, filePath)
  );
}
function rangesOverlap(left, right) {
  return compareLspProtocolPositions(left.start, right.end) <= 0 && compareLspProtocolPositions(right.start, left.end) <= 0;
}
async function codeActionDiagnostics(prepared, range, signal) {
  let diagnostics;
  try {
    diagnostics = await prepared.client.currentDocumentDiagnostics(prepared.document, signal);
  } catch (cause) {
    if (signal?.aborted === true) throw cause;
    return [];
  }
  return diagnostics.filter((diagnostic) => rangesOverlap(diagnostic.range, range));
}
function matchesRequestedKind(kind, requested) {
  return kind !== void 0 && requested.some(
    (requestedKind) => kind === requestedKind || kind.startsWith(`${requestedKind}.`)
  );
}
async function serverCodeActions(dependencies, previews, parameters, prepared, signal) {
  const { client, route } = prepared;
  const range = {
    start: protocolPosition(prepared, parameters.range.start),
    end: protocolPosition(prepared, parameters.range.end)
  };
  const diagnostics = await codeActionDiagnostics(prepared, range, signal);
  const offered = await client.request(
    import_node2.CodeActionRequest.method,
    {
      textDocument: { uri: prepared.document.uri },
      range,
      context: {
        diagnostics,
        only: parameters.only_kinds
      }
    },
    signal
  );
  let actions = Array.isArray(offered) ? offered.filter(
    (action) => parameters.only_kinds === void 0 || matchesRequestedKind(protocolString(protocolRecord(action)?.kind), parameters.only_kinds)
  ) : offered;
  if (supportsResolveProvider(client.capabilities.codeActionProvider)) {
    actions = await resolveCodeActionItems(client, actions, signal);
  }
  const results = [];
  const previewRecords = [];
  for (const action of Array.isArray(actions) ? actions : []) {
    const record = protocolRecord(action);
    if (record === void 0) continue;
    const kind = protocolString(record.kind);
    const title = protocolString(record.title);
    if (record.command !== void 0 || record.edit === void 0) {
      results.push({
        server_id: route.serverId,
        applicable: false,
        command: record.command,
        kind,
        title
      });
      continue;
    }
    try {
      const { preview, manifest } = await recordToolPreview(
        dependencies,
        previews,
        route.serverId,
        record.edit,
        client.positionEncoding
      );
      previewRecords.push(preview);
      results.push({
        server_id: route.serverId,
        applicable: true,
        kind,
        mutation_manifest: manifest,
        preview_id: preview.preview_id,
        summary: preview.summary,
        title
      });
    } catch (cause) {
      if (!(cause instanceof LspWorkspaceEditError)) throw cause;
      results.push({
        server_id: route.serverId,
        applicable: false,
        error: cause.message,
        kind,
        title
      });
    }
  }
  return { actions: results, previewRecords };
}
async function executeCodeActions(dependencies, previews, parameters, context, signal) {
  const filePath = await documentFilePath(parameters.file_path, context);
  const result = await dependencies.manager.runRead(
    filePath,
    parameters.server_id,
    requireMethod(import_node2.CodeActionRequest.method),
    async (client, route) => serverCodeActions(
      dependencies,
      previews,
      parameters,
      await prepareLspDocument(client, route, filePath),
      signal
    )
  );
  requireReadSuccess(result);
  const details = operationDetails(
    "code_actions",
    readOperationOutcomes(result),
    result.successes.flatMap(({ value }) => value.previewRecords)
  );
  const actions = result.successes.flatMap(({ value }) => value.actions);
  const warnings = result.failures.map(({ message }) => message);
  const json = formatLspToolValue({ actions, warnings });
  const text = assembleLspReadText({
    blocks: result.successes.map(({ serverId, value }) => ({
      server_id: serverId,
      lines: value.actions.length === 0 ? ["No code actions found."] : value.actions.flatMap(codeActionLines)
    })),
    warnings
  });
  return createLspToolOutput2(
    text,
    { ...details, result_count: actions.length },
    lspStructuredFields(json),
    dependencies
  );
}
function codeActionLines(action) {
  const title = action.title === void 0 ? "Untitled action" : collapseLspWhitespace(action.title);
  const head = action.kind === void 0 ? title : `${title} (${action.kind})`;
  if (action.preview_id !== void 0) {
    const summary = (action.summary ?? "").trimEnd();
    return [
      `${head}: preview ${action.preview_id}`,
      ...summary === "" ? [] : summary.split("\n").map((line) => `  ${line}`)
    ];
  }
  if (action.error !== void 0) return [`${head}: cannot be applied: ${action.error}`];
  return [`${head}: command only, cannot be applied`];
}
function formatApplyText(previewId, result, cwd) {
  const path = (filePath) => lspDisplayPath(cwd, filePath);
  const files = [
    ...result.changed_files.map((file) => `modified ${path(file)}`),
    ...result.created_files.map((file) => `created ${path(file)}`),
    ...result.deleted_files.map((file) => `deleted ${path(file)}`),
    ...result.moved_files.map(({ from, to }) => `renamed ${path(from)} -> ${path(to)}`)
  ];
  return [
    `Applied Workspace Edit Preview ${previewId}${files.length === 0 ? "; no file changed." : ":"}`,
    ...files
  ].join("\n");
}
async function executeApplyPreview(dependencies, parameters, context, signal) {
  const storeManifest = dependencies.workspaceEdits.prepareMutationManifest(parameters.preview_id);
  const canonicalManifest = normalizeStoreMutationManifest(storeManifest);
  if (parameters.mutation_manifest === void 0 || !sameMutationManifest(parameters.mutation_manifest, canonicalManifest)) {
    throw piLspError("Mutation Manifest changed after argument preparation");
  }
  let result;
  try {
    result = await dependencies.workspaceEdits.applyPreview(
      parameters.preview_id,
      storeManifest,
      signal
    );
  } catch (cause) {
    if (!(cause instanceof LspWorkspaceEditError) || cause.code !== "workspace_edit_recovery_failed") {
      throw cause;
    }
    const changedPaths2 = [...cause.recoveryFailures].sort(
      (left, right) => left.localeCompare(right)
    );
    const output = await createLspToolOutput2(
      cause.message,
      {
        kind: "workspace_edit_apply",
        preview_id: parameters.preview_id,
        mutation_manifest: canonicalManifest,
        changed_paths: changedPaths2,
        state: "partial_failure"
      },
      {
        preview_id: parameters.preview_id,
        state: "partial_failure",
        changed_paths: changedPaths2,
        mutation_manifest: canonicalManifest,
        message: cause.message
      },
      dependencies
    );
    return { ...output, isError: true };
  }
  const changedPaths = [
    ...result.changed_files,
    ...result.created_files,
    ...result.deleted_files,
    ...result.moved_files.flatMap((move) => [move.from, move.to])
  ];
  const sortedChangedPaths = [...new Set(changedPaths)].sort(
    (left, right) => left.localeCompare(right)
  );
  const details = {
    kind: "workspace_edit_apply",
    preview_id: parameters.preview_id,
    mutation_manifest: canonicalManifest,
    changed_paths: sortedChangedPaths,
    state: result.state
  };
  const json = formatLspToolValue(result);
  return createLspToolOutput2(
    formatApplyText(parameters.preview_id, result, context.cwd),
    details,
    {
      ...lspStructuredFields(json),
      changed_paths: sortedChangedPaths,
      mutation_manifest: canonicalManifest
    },
    dependencies
  );
}
async function executeLspOperation(dependencies, parameters, context, signal) {
  switch (parameters.operation) {
    case "status": {
      const status = dependencies.manager.getStatus();
      const outcomes = status.servers.map((server) => {
        const outcome = {
          server_id: server.serverId,
          outcome: server.state === "unavailable" ? "unavailable" : "success"
        };
        if (server.error === void 0) return outcome;
        return { ...outcome, message: server.error };
      });
      const all = parameters.all === true;
      const listed = listedStatusServers(status, all);
      const json = formatLspToolValue({
        servers: listed.map((server) => ({
          error: server.error,
          languages: statusLanguages(server.languages),
          root_path: server.rootPath,
          server_id: server.serverId,
          shared_with_sessions: server.sharedWithSessions,
          state: server.state
        })),
        not_started: status.servers.length - listed.length,
        warnings: status.warnings
      });
      return createLspToolOutput2(
        formatStatusText(status, listed, context.cwd),
        { ...operationDetails("status", outcomes), result_count: status.servers.length },
        lspStructuredFields(json),
        dependencies
      );
    }
    case "capabilities":
    case "restart": {
      const filePath = absoluteLspFilePath(parameters.file_path, context);
      const resolution = parameters.operation === "capabilities" ? await dependencies.manager.getCapabilities(parameters.server_id, filePath) : await dependencies.manager.restartServer(parameters.server_id, filePath);
      if (resolution.kind === "failure") throw piLspFailureError([resolution.failure]);
      const text = formatLspToolValue({
        capabilities: resolution.instance.client.capabilities,
        root_path: resolution.instance.route.rootPath,
        server_id: resolution.instance.route.serverId
      });
      return createLspToolOutput2(
        text,
        operationDetails(parameters.operation, [
          { server_id: resolution.instance.route.serverId, outcome: "success" }
        ]),
        lspStructuredFields(text),
        dependencies
      );
    }
    case "completion":
      return itemListOutput(
        parameters.operation,
        executeCompletion(dependencies, parameters, context, signal),
        dependencies,
        readTextContext(parameters.file_path, context)
      );
    case "hover":
    case "signature_help":
    case "declaration":
    case "goto_definition":
    case "goto_type_definition":
    case "goto_implementation":
    case "find_references":
    case "document_highlights":
    case "call_hierarchy":
    case "incoming_calls":
    case "outgoing_calls":
    case "type_hierarchy":
    case "supertypes":
    case "subtypes":
    case "prepare_rename":
      return positionReadOutput(
        parameters.operation,
        executePositionRead(dependencies, parameters, context, signal),
        dependencies,
        readTextContext(parameters.file_path, context)
      );
    case "diagnostics":
    case "document_symbols":
    case "document_links":
    case "folding_ranges":
    case "code_lenses":
    case "document_colors":
      return readOutput(
        parameters.operation,
        executeFileRead(dependencies, parameters, context, signal),
        dependencies,
        readTextContext(parameters.file_path, context)
      );
    case "workspace_diagnostics":
      return readOutput(
        parameters.operation,
        executeWorkspaceDiagnostics(dependencies, parameters, context, signal),
        dependencies,
        readTextContext(parameters.file_path, context)
      );
    case "workspace_symbols":
      return itemListOutput(
        parameters.operation,
        executeWorkspaceSymbols(dependencies, parameters, context, signal),
        dependencies,
        readTextContext(parameters.file_path, context)
      );
    case "selection_ranges":
      return readOutput(
        parameters.operation,
        executeSelectionRanges(dependencies, parameters, context, signal),
        dependencies,
        { ...readTextContext(parameters.file_path, context), positions: parameters.positions }
      );
    case "inlay_hints":
      return readOutput(
        parameters.operation,
        executeInlayHints(dependencies, parameters, context, signal),
        dependencies,
        readTextContext(parameters.file_path, context)
      );
    case "format_document":
    case "format_range":
    case "format_on_type":
      return withPreviewLedger(
        dependencies,
        (previews) => executeFormattingPreview(dependencies, previews, parameters, context, signal)
      );
    case "rename":
      return withPreviewLedger(
        dependencies,
        (previews) => executeRenamePreview(dependencies, previews, parameters, context, signal)
      );
    case "code_actions":
      return withPreviewLedger(
        dependencies,
        (previews) => executeCodeActions(dependencies, previews, parameters, context, signal)
      );
    case "apply":
      return executeApplyPreview(dependencies, parameters, context, signal);
  }
}
var LSP_TOOL_RULES = [
  "Lines and characters, in arguments and results, are one-based and count Unicode code points. Paths may start with @.",
  "Location results list one `path:line:col  <source line>` line per location, with paths relative to the working directory (absolute outside it).",
  "Reads and lsp_code_actions query every matching server unless server_id narrows them; lsp_rename and lsp_format_* need server_id when several servers match.",
  "Model-visible output is limited to 2,000 lines or 50 KB; the complete output is saved as a Result Spill file named in the result. Structured results are capped at 1 MiB; a larger one is bounded, and truncated and spill_path then name the complete output.",
  "lsp_rename, lsp_code_actions, and lsp_format_* only create Workspace Edit Previews. Nothing changes until lsp_apply applies a preview_id.",
  'lsp_apply resolves to state "partial_failure" with an error result when rollback leaves files changed; changed_paths lists them.'
];
var LSP_TOOL_GUIDELINE = "Use the lsp_* tools for semantic code navigation and diagnostics. Their lines and characters, in arguments and results, are one-based Unicode code points, and paths may start with @. Location results list one path:line:col line per location, with paths relative to the working directory. Output over 2,000 lines or 50 KB is cut, and the complete output is saved to the Result Spill file named in the result. Where available, lsp_rename, lsp_code_actions, and lsp_format_* only create Workspace Edit Previews; call lsp_apply with a preview_id to change files.";
var LSP_TOOL_NAMESPACE = {
  name: "lsp",
  // Pi renders the namespace description once under `## lsp` in both codemode modes, so the shared
  // rules stay visible when `codemode.mode: "only"` hides the direct declarations.
  description: `Language-server navigation, diagnostics, and previewed edits
${LSP_TOOL_GUIDELINE}`,
  instructions: LSP_TOOL_RULES.map((rule) => `- ${rule}`).join("\n")
};
var LSP_PROMPT_SNIPPET_TOOL = "diagnostics";
var LSP_PROMPT_SNIPPET = "Language-server diagnostics; the lsp_* tools also cover navigation and previewed edits";
var DIRECT_LSP_OPERATIONS = /* @__PURE__ */ new Set([
  "status",
  "diagnostics",
  "goto_definition",
  "find_references",
  "hover",
  "document_symbols",
  "workspace_symbols",
  "rename",
  "code_actions",
  "apply"
]);
var LSP_TOOL_DESCRIPTIONS = {
  status: "Report language servers' state, workspace root, last error, and the file extensions each handles per language ID. Lists Server Instances (running, starting, unavailable, stopped) and disabled Server Definitions, and counts the other configured Server Definitions; pass all: true to list every configured server.",
  capabilities: "Start a server for a workspace and report its negotiated capabilities.",
  restart: "Restart a server for a workspace, clearing its unavailable state, and report its capabilities.",
  diagnostics: "Get fresh LSP Diagnostics for a file from every matching server, one `path:line:col severity source(code): message` line each.",
  workspace_diagnostics: "Get workspace diagnostics from every matching server, from workspace pull or cached push diagnostics. A server that publishes none reports status unsupported; use lsp_diagnostics per file.",
  completion: "List completions at a position, one `label (kind)  detail` line each. By default only those starting with the identifier before the position.",
  hover: "Get type information and documentation for the symbol at a position.",
  signature_help: "Get signature help for the call at a position.",
  declaration: "Find the declaration of the symbol at a position.",
  goto_definition: "Find the definition of the symbol at a position.",
  goto_type_definition: "Find the type definition of the symbol at a position.",
  goto_implementation: "Find the implementations of the symbol at a position.",
  find_references: "Find references to the symbol at a position. include_declaration defaults to true.",
  document_highlights: "Find the occurrences of the symbol at a position within its file.",
  document_symbols: "List the symbols declared in a file as an outline. By default only declarations and their members, not locals or callbacks; see `depth`.",
  workspace_symbols: "Search the workspace's symbols by name, one `name (kind) path:line:col` line each.",
  document_links: "List the links in a file.",
  call_hierarchy: "Prepare call hierarchy items for the function at a position.",
  incoming_calls: "Find the calls to the function at a position.",
  outgoing_calls: "Find the calls made by the function at a position.",
  type_hierarchy: "Prepare type hierarchy items for the type at a position.",
  supertypes: "Find the supertypes of the type at a position.",
  subtypes: "Find the subtypes of the type at a position.",
  selection_ranges: "Get the nested selection ranges around positions.",
  folding_ranges: "List the folding ranges of a file.",
  code_lenses: "List the code lenses of a file.",
  inlay_hints: "List the inlay hints in a range.",
  document_colors: "List the color values in a file.",
  format_document: "Preview formatting a file. Apply the preview with lsp_apply.",
  format_range: "Preview formatting a range. Apply the preview with lsp_apply.",
  format_on_type: "Preview the formatting after typing trigger_character at a position. Apply the preview with lsp_apply.",
  prepare_rename: "Check whether the symbol at a position can be renamed, and get its range.",
  rename: "Preview renaming the symbol at a position across the workspace. Apply the preview with lsp_apply.",
  code_actions: "List code actions for a range from every matching server, grouped by server when several answer. Each action with an edit gets a Workspace Edit Preview to apply with lsp_apply; command-only actions cannot be applied.",
  apply: "Apply a Workspace Edit Preview by preview_id. Nothing changes if its files changed since the preview."
};
var READ_ONLY_ANNOTATIONS = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false
};
var PREVIEW_OPERATIONS = /* @__PURE__ */ new Set([
  "format_document",
  "format_range",
  "format_on_type",
  "rename",
  "code_actions"
]);
function lspToolAnnotations(operation) {
  if (PREVIEW_OPERATIONS.has(operation)) {
    return { ...READ_ONLY_ANNOTATIONS, idempotentHint: false };
  }
  if (operation === "apply") {
    return {
      readOnlyHint: false,
      destructiveHint: true,
      idempotentHint: false,
      openWorldHint: false
    };
  }
  if (operation === "restart") {
    return {
      readOnlyHint: false,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false
    };
  }
  return READ_ONLY_ANNOTATIONS;
}
function lspToolOutputSchema(operation) {
  switch (operation) {
    case "status":
      return LspStatusOutputSchema;
    case "capabilities":
    case "restart":
      return LspServerOutputSchema;
    case "format_document":
    case "format_range":
    case "format_on_type":
    case "rename":
      return LspPreviewOutputSchema;
    case "code_actions":
      return LspCodeActionsOutputSchema;
    case "apply":
      return LspApplyOutputSchema;
    default:
      if (operation === "completion") return LspPositionItemListOutputSchema;
      if (isLspPositionReadOperation(operation)) return LspPositionReadOutputSchema;
      return operation === "document_symbols" || operation === "workspace_symbols" ? LspReadOutputSchema : LspPlainReadOutputSchema;
  }
}
function lspToolExposure(operation) {
  return DIRECT_LSP_OPERATIONS.has(operation) ? "direct" : "codemode";
}
function prepareApplyArguments(getDependencies, argumentsValue) {
  if (!Value20.Check(ApplyPreviewArgumentsSchema, argumentsValue)) {
    return parseLspOperationParameters("apply", argumentsValue);
  }
  const applyArguments = argumentsValue;
  const storeManifest = getDependencies().workspaceEdits.prepareMutationManifest(
    applyArguments.preview_id
  );
  return parseLspOperationParameters("apply", {
    ...applyArguments,
    mutation_manifest: normalizeStoreMutationManifest(storeManifest)
  });
}
function buildLspToolDefinition(operation, getDependencies) {
  const definition = {
    name: lspToolName(operation),
    label: `LSP ${humanizeLspOperation(operation)}`,
    description: LSP_TOOL_DESCRIPTIONS[operation],
    // Pi appends a listed tool's guidelines to its codemode declaration, so only direct tools carry
    // the shared guideline (Pi dedupes it). Any subset of direct tools keeps it in the system prompt.
    // Pi cannot read `codemode.mode` while extensions load, so in "only" mode the direct tools carry
    // it too and fall behind in the listing; the namespace description still shows it once.
    promptGuidelines: lspToolExposure(operation) === "direct" ? [LSP_TOOL_GUIDELINE] : [],
    parameters: LspOperationParametersSchemas[operation],
    outputSchema: lspToolOutputSchema(operation),
    exposure: lspToolExposure(operation),
    namespace: LSP_TOOL_NAMESPACE,
    annotations: lspToolAnnotations(operation),
    renderCall: (argumentsValue, theme, context) => renderLspToolCall(operation, argumentsValue, theme, context),
    renderResult: (result, options, theme, context) => renderLspToolResult(operation, result, options, theme, context),
    async execute(_toolCallId, input, signal, _onUpdate, context) {
      const parameters = lspOperationCall(operation, parseLspOperationParameters(operation, input));
      return executeLspOperation(getDependencies(), parameters, context, signal);
    }
  };
  if (operation === LSP_PROMPT_SNIPPET_TOOL) definition.promptSnippet = LSP_PROMPT_SNIPPET;
  return definition;
}
function createLspToolDefinition(operation, getDependencies) {
  return buildLspToolDefinition(operation, getDependencies);
}
function createLspApplyToolDefinition(getDependencies) {
  return {
    ...buildLspToolDefinition("apply", getDependencies),
    // Permission hooks see the canonical Mutation Manifest before execution (ADR-0002).
    prepareArguments: (argumentsValue) => prepareApplyArguments(getDependencies, argumentsValue)
  };
}
function registerLspTools(pi, getDependencies) {
  for (const operation of LSP_OPERATION_NAMES) {
    if (operation === "apply")
      pi.registerTool(
        acceptNullForOptionalArguments(createLspApplyToolDefinition(getDependencies))
      );
    else
      pi.registerTool(
        acceptNullForOptionalArguments(createLspToolDefinition(operation, getDependencies))
      );
  }
}

// src/pi-lsp-settings.ts
import { Type as Type20 } from "typebox";
import { Value as Value21 } from "typebox/value";
var DEFAULT_LSP_TIMEOUTS = {
  diagnosticsMs: 3e3,
  initializeMs: 45e3,
  requestMs: 3e3,
  shutdownMs: 5e3,
  workspaceRequestMs: 15e3
};
var DEFAULT_MAX_CONCURRENT_DIAGNOSTICS = 2;
var NonEmptyStringSchema = Type20.String({ minLength: 1 });
var PositiveIntegerSchema = Type20.Integer({ minimum: 1, maximum: Number.MAX_SAFE_INTEGER });
var PositiveMillisecondsSchema = PositiveIntegerSchema;
var JsonValueSchema = Type20.Any();
var JsonObjectSchema = Type20.Record(Type20.String(), JsonValueSchema);
var LspLanguageMappingSchema = Type20.Object(
  {
    extensions: Type20.Optional(Type20.Array(NonEmptyStringSchema, { minItems: 1 })),
    fileNames: Type20.Optional(Type20.Array(NonEmptyStringSchema, { minItems: 1 })),
    languageId: NonEmptyStringSchema
  },
  { additionalProperties: false }
);
var LspServerDefinitionSchema = Type20.Object(
  {
    args: Type20.Optional(Type20.Array(Type20.String())),
    command: Type20.Optional(NonEmptyStringSchema),
    environment: Type20.Optional(
      Type20.Record(Type20.String(), Type20.Union([Type20.String(), Type20.Null()]))
    ),
    initializationOptions: Type20.Optional(JsonValueSchema),
    languages: Type20.Optional(Type20.Array(LspLanguageMappingSchema, { minItems: 1 })),
    maxConcurrentDiagnostics: Type20.Optional(PositiveIntegerSchema),
    requireRootMarker: Type20.Optional(Type20.Boolean()),
    rootMarkers: Type20.Optional(Type20.Array(NonEmptyStringSchema)),
    settings: Type20.Optional(JsonValueSchema),
    workspaceRootMarkers: Type20.Optional(Type20.Array(NonEmptyStringSchema))
  },
  { additionalProperties: false }
);
var LspTimeoutsSchema = Type20.Object(
  {
    diagnosticsMs: Type20.Optional(PositiveMillisecondsSchema),
    initializeMs: Type20.Optional(PositiveMillisecondsSchema),
    requestMs: Type20.Optional(PositiveMillisecondsSchema),
    shutdownMs: Type20.Optional(PositiveMillisecondsSchema),
    workspaceRequestMs: Type20.Optional(PositiveMillisecondsSchema)
  },
  { additionalProperties: false }
);
var SettingsDocumentSchema2 = Type20.Object({ lsp: Type20.Optional(JsonValueSchema) });
var LSP_TIMEOUT_NAMES = [
  "diagnosticsMs",
  "initializeMs",
  "requestMs",
  "shutdownMs",
  "workspaceRequestMs"
];
function isJsonObject(value) {
  return Value21.Check(JsonObjectSchema, value);
}
function schemaValidationWarning(schema, value, prefix) {
  const error = Value21.Errors(schema, value)[0];
  const path = error?.instancePath.replaceAll("/", ".") ?? "";
  const unknownField = error?.keyword === "additionalProperties" ? error.params.additionalProperties[0] : void 0;
  const unknownFieldSuffix = unknownField === void 0 ? "" : `.${String(unknownField)}`;
  return `${prefix}${path}${unknownFieldSuffix}: ${error?.message ?? "invalid settings"}`;
}
function withoutInvalidMaxConcurrentDiagnostics(server, prefix) {
  if (!isJsonObject(server) || !Object.hasOwn(server, "maxConcurrentDiagnostics")) {
    return { definition: server, warning: void 0 };
  }
  const { maxConcurrentDiagnostics, ...rest } = server;
  if (Value21.Check(PositiveIntegerSchema, maxConcurrentDiagnostics)) {
    return { definition: server, warning: void 0 };
  }
  return {
    definition: rest,
    warning: `${prefix}.maxConcurrentDiagnostics: expected a positive integer`
  };
}
function parseLspServerDefinitions(value, scope) {
  const warnings = [];
  const servers = /* @__PURE__ */ new Map();
  if (value === void 0) return { servers, warnings };
  if (!isJsonObject(value)) {
    return { servers, warnings: [`${scope} lsp.servers: expected a JSON object`] };
  }
  for (const [id, rawServer] of Object.entries(value)) {
    if (!Value21.Check(NonEmptyStringSchema, id)) {
      warnings.push(`${scope} lsp.servers.${String(id)}: server ID must be a non-empty string`);
      continue;
    }
    if (rawServer === null) {
      servers.set(id, { kind: "excluded" });
      continue;
    }
    const { definition, warning } = withoutInvalidMaxConcurrentDiagnostics(
      rawServer,
      `${scope} lsp.servers.${id}`
    );
    if (warning !== void 0) warnings.push(warning);
    if (!Value21.Check(LspServerDefinitionSchema, definition)) {
      warnings.push(
        schemaValidationWarning(
          LspServerDefinitionSchema,
          definition,
          `${scope} lsp.servers.${id}`
        )
      );
      servers.set(id, { kind: "excluded" });
      continue;
    }
    const server = definition;
    if (server.command === void 0 || server.languages === void 0) {
      warnings.push(`${scope} lsp.servers.${id}: command and languages are required`);
      servers.set(id, { kind: "excluded" });
      continue;
    }
    if (server.languages.some(
      (language) => language.extensions === void 0 && language.fileNames === void 0
    )) {
      warnings.push(
        `${scope} lsp.servers.${id}.languages: each language needs extensions or fileNames`
      );
      servers.set(id, { kind: "excluded" });
      continue;
    }
    if (server.requireRootMarker === true && (server.rootMarkers?.length ?? 0) === 0) {
      warnings.push(
        `${scope} lsp.servers.${id}.rootMarkers: at least one root marker is required when requireRootMarker is true`
      );
      servers.set(id, { kind: "excluded" });
      continue;
    }
    servers.set(id, { kind: "valid", value: server });
  }
  return { servers, warnings };
}
function isLspTimeoutName(name) {
  return LSP_TIMEOUT_NAMES.some((timeoutName) => timeoutName === name);
}
function parseLspTimeouts(value, scope) {
  const warnings = [];
  const timeouts = {};
  if (value === void 0) return { timeouts, warnings };
  if (!isJsonObject(value)) {
    return { timeouts, warnings: [`${scope} lsp.timeouts: expected a JSON object`] };
  }
  for (const [name, timeout] of Object.entries(value)) {
    if (!isLspTimeoutName(name)) {
      warnings.push(`${scope} lsp.timeouts.${name}: unknown field`);
      continue;
    }
    if (!Value21.Check(PositiveMillisecondsSchema, timeout)) {
      warnings.push(
        schemaValidationWarning(
          PositiveMillisecondsSchema,
          timeout,
          `${scope} lsp.timeouts.${name}`
        )
      );
      continue;
    }
    timeouts[name] = timeout;
  }
  return { timeouts, warnings };
}
function parseLspEnablement(value, scope) {
  const enablement = /* @__PURE__ */ new Map();
  const warnings = [];
  if (value === void 0) return { enablement, warnings };
  if (!isJsonObject(value)) {
    return { enablement, warnings: [`${scope} lsp.enablement: expected a JSON object`] };
  }
  for (const [id, enabled] of Object.entries(value)) {
    if (id.length === 0 || !Value21.Check(Type20.Boolean(), enabled)) {
      warnings.push(`${scope} lsp.enablement.${id}: expected a non-empty server ID and boolean`);
      continue;
    }
    enablement.set(id, { enabled, scope });
  }
  return { enablement, warnings };
}
function readLspLayer(settings, scope) {
  if (!Value21.Check(SettingsDocumentSchema2, settings)) {
    return {
      enablement: /* @__PURE__ */ new Map(),
      includeHintDiagnostics: void 0,
      servers: /* @__PURE__ */ new Map(),
      timeouts: {},
      warnings: [`${scope} settings: expected a JSON object`]
    };
  }
  if (settings.lsp === void 0) {
    return {
      enablement: /* @__PURE__ */ new Map(),
      includeHintDiagnostics: void 0,
      servers: /* @__PURE__ */ new Map(),
      timeouts: {},
      warnings: []
    };
  }
  if (!isJsonObject(settings.lsp)) {
    return {
      enablement: /* @__PURE__ */ new Map(),
      includeHintDiagnostics: void 0,
      servers: /* @__PURE__ */ new Map(),
      timeouts: {},
      warnings: [`${scope} lsp: expected a JSON object`]
    };
  }
  const warnings = Object.keys(settings.lsp).filter(
    (field) => field !== "servers" && field !== "timeouts" && field !== "enablement" && field !== "includeHintDiagnostics"
  ).map((field) => `${scope} lsp.${field}: unknown field`);
  const rawIncludeHints = settings.lsp.includeHintDiagnostics;
  const includeHintDiagnostics = Value21.Check(Type20.Boolean(), rawIncludeHints) ? rawIncludeHints : void 0;
  if (rawIncludeHints !== void 0 && includeHintDiagnostics === void 0) {
    warnings.push(`${scope} lsp.includeHintDiagnostics: expected a boolean`);
  }
  const parsedServers = parseLspServerDefinitions(settings.lsp.servers, scope);
  const parsedTimeouts = parseLspTimeouts(settings.lsp.timeouts, scope);
  const parsedEnablement = parseLspEnablement(settings.lsp.enablement, scope);
  return {
    enablement: parsedEnablement.enablement,
    includeHintDiagnostics,
    servers: parsedServers.servers,
    timeouts: parsedTimeouts.timeouts,
    warnings: [
      ...warnings,
      ...parsedServers.warnings,
      ...parsedTimeouts.warnings,
      ...parsedEnablement.warnings
    ]
  };
}
function mergeLspTimeouts(globalLayer, projectLayer) {
  return Object.assign({}, DEFAULT_LSP_TIMEOUTS, globalLayer.timeouts, projectLayer.timeouts);
}
function resolveLspEnvironment(configuredEnvironment) {
  const environment = {};
  for (const [key, value] of Object.entries(process.env)) {
    if (value !== void 0) environment[key] = value;
  }
  for (const [key, value] of Object.entries(configuredEnvironment ?? {})) {
    if (value === null) {
      delete environment[key];
    } else {
      environment[key] = value;
    }
  }
  return environment;
}
function resolveLspServerDefinition(id, server) {
  const languages = (server.languages ?? []).map((language) => ({
    extensions: language.extensions ?? [],
    fileNames: language.fileNames ?? [],
    languageId: language.languageId
  }));
  const required = {
    args: server.args ?? [],
    command: server.command ?? "",
    environment: resolveLspEnvironment(server.environment),
    id,
    languages,
    maxConcurrentDiagnostics: server.maxConcurrentDiagnostics ?? DEFAULT_MAX_CONCURRENT_DIAGNOSTICS,
    requireRootMarker: server.requireRootMarker ?? false,
    rootMarkers: server.rootMarkers ?? []
  };
  const workspaceRootMarkers = server.workspaceRootMarkers ?? [];
  const resolved = workspaceRootMarkers.length === 0 ? required : { ...required, workspaceRootMarkers };
  const initializationOptions = server.initializationOptions;
  const settings = server.settings;
  if (initializationOptions !== void 0 && settings !== void 0) {
    return {
      ...resolved,
      initializationOptions: structuredClone(initializationOptions),
      settings: structuredClone(settings)
    };
  }
  if (initializationOptions !== void 0) {
    return { ...resolved, initializationOptions: structuredClone(initializationOptions) };
  }
  if (settings !== void 0) {
    return { ...resolved, settings: structuredClone(settings) };
  }
  return resolved;
}
function mergeLspServers(globalLayer, projectLayer) {
  const serverDefinitions = /* @__PURE__ */ new Map();
  for (const [id, server] of globalLayer.servers) {
    if (server.kind === "valid") serverDefinitions.set(id, server.value);
  }
  for (const [id, server] of projectLayer.servers) {
    serverDefinitions.delete(id);
    if (server.kind === "valid") serverDefinitions.set(id, server.value);
  }
  return new Map(
    [...serverDefinitions].sort(([left], [right]) => left.localeCompare(right)).map(([id, server]) => [id, resolveLspServerDefinition(id, server)])
  );
}
function resolveLspSettings(reader) {
  const globalLayer = readLspLayer(reader.getGlobalSettings(), "global");
  const projectLayer = readLspLayer(reader.getProjectSettings(), "project");
  return {
    enablement: new Map([...globalLayer.enablement, ...projectLayer.enablement]),
    includeHintDiagnostics: projectLayer.includeHintDiagnostics ?? globalLayer.includeHintDiagnostics ?? false,
    servers: mergeLspServers(globalLayer, projectLayer),
    timeouts: mergeLspTimeouts(globalLayer, projectLayer),
    warnings: [...globalLayer.warnings, ...projectLayer.warnings]
  };
}

// src/pi-lsp-extension.ts
var productionPiLspLifecycleEffects = {
  getAgentDirectory: getAgentDir
};
var ENABLEMENT_ENTRY_TYPE = "pi-lsp-enablement";
var EnablementEntrySchema = Type21.Object(
  { serverId: Type21.String({ minLength: 1 }), enabled: Type21.Boolean() },
  { additionalProperties: false }
);
function branchEnablement(entries) {
  const overrides = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    if (entry.type === "custom" && entry.customType === ENABLEMENT_ENTRY_TYPE && Value22.Check(EnablementEntrySchema, entry.data)) {
      overrides.set(entry.data.serverId, entry.data.enabled);
    }
  }
  return overrides;
}
var DiagnosticMarkupContentSchema = Type21.Object(
  {
    kind: Type21.String(),
    value: Type21.String()
  },
  { additionalProperties: false }
);
var AppendedTextContentSchema = Type21.Object(
  {
    type: Type21.Literal("text"),
    text: Type21.String()
  },
  { additionalProperties: false }
);
function branchLspToolResultDetails(entries) {
  const records = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    if (entry.type !== "message") continue;
    const message = entry.message;
    if (message.role !== "toolResult" || !LSP_RESULT_TOOL_NAMES.has(message.toolName)) continue;
    if (!Value22.Check(LspToolResultDetailsSchema, message.details)) continue;
    const details = message.details;
    for (const record of details.preview_records ?? []) {
      records.set(record.preview_id, record);
    }
    if (details.kind === "workspace_edit_preview") {
      records.set(details.preview_record.preview_id, details.preview_record);
      continue;
    }
    if (details.kind === "operation") continue;
    const applied = records.get(details.preview_id);
    if (applied !== void 0) {
      records.set(details.preview_id, { ...applied, state: "applied" });
    }
  }
  return [...records.values()];
}
var DiagnosticCodeSchema = Type21.Union([Type21.String(), Type21.Number()]);
function normalizedDiagnosticOutcome(diagnostic, serverId, filePath, documentText, positionEncoding) {
  const start = convertLspProtocolPosition(documentText, diagnostic.range.start, positionEncoding);
  const end = convertLspProtocolPosition(documentText, diagnostic.range.end, positionEncoding);
  const normalized = {
    serverId,
    path: filePath,
    line: start.line,
    character: start.character,
    endLine: end.line,
    endCharacter: end.character,
    // LSP leaves a missing severity to the client; treat it as an Error, like vscode-languageclient.
    severity: diagnostic.severity ?? 1,
    message: Value22.Check(Type21.String(), diagnostic.message) ? diagnostic.message : Value22.Parse(DiagnosticMarkupContentSchema, diagnostic.message).value
  };
  if (Value22.Check(Type21.String(), diagnostic.source)) normalized.source = diagnostic.source;
  if (Value22.Check(DiagnosticCodeSchema, diagnostic.code)) normalized.code = diagnostic.code;
  return { kind: "diagnostic", diagnostic: normalized };
}
function failureDiagnosticOutcome(path, failure) {
  if (failure.code === "no-matching-server") {
    return { kind: "no_configured_server", path };
  }
  if (failure.code === "request-timeout") {
    return { kind: "timeout", path, serverId: failure.serverId };
  }
  return { kind: "unavailable_server", path, serverId: failure.serverId };
}
var ManagerPostEditDiagnosticsRunner = class {
  constructor(session, signal) {
    this.session = session;
    this.signal = signal;
  }
  session;
  signal;
  documentTexts = /* @__PURE__ */ new Map();
  /**
   * The text each file with findings had when its positions were converted, so a finding's
   * identity reads the same line its position points at.
   */
  get texts() {
    return this.documentTexts;
  }
  /**
   * Pull each path's diagnostics from every capable Server Instance. `onServerOutcomes` sees each
   * server's outcomes as soon as it answers, before slower servers finish.
   */
  async run(paths, onServerOutcomes) {
    const outcomes = [];
    for (const { path } of paths) {
      const filePath = resolve6(this.session.cwd, normalizeLspFilePath(path));
      const result = await this.session.manager.runRead(
        filePath,
        void 0,
        {
          method: import_node3.DocumentDiagnosticRequest.method,
          isSupportedBy: (client) => client.hasCapability(import_node3.DocumentDiagnosticRequest.method)
        },
        async (client, route) => {
          const serverOutcomes = await this.pullServer(
            client,
            route.serverId,
            route.language.languageId,
            filePath
          );
          onServerOutcomes?.(serverOutcomes);
          return serverOutcomes;
        }
      );
      const successfulOutcomes = result.successes.flatMap(({ value }) => value);
      outcomes.push(...successfulOutcomes);
      outcomes.push(
        ...result.failures.flatMap(
          (failure) => failure.code === "no-capable-server" || failure.code === "server-disabled" ? [] : [failureDiagnosticOutcome(filePath, failure)]
        )
      );
    }
    return outcomes;
  }
  async pullServer(client, serverId, languageId, filePath) {
    const diagnostics = await client.documentDiagnostics(filePath, languageId, this.signal);
    if (diagnostics.status === "timeout") {
      return [{ kind: "timeout", path: filePath, serverId }];
    }
    if (diagnostics.diagnostics.length === 0) {
      return [{ kind: "no_diagnostics", path: filePath, serverId }];
    }
    const documentText = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }).decode(
      await readFile5(filePath)
    );
    this.documentTexts.set(filePath, documentText);
    const encoding = normalizeLspPositionEncoding(client.positionEncoding);
    return diagnostics.diagnostics.map(
      (diagnostic) => normalizedDiagnosticOutcome(diagnostic, serverId, filePath, documentText, encoding)
    );
  }
};
async function preEditTarget(event, cwd) {
  if (event.toolName !== "edit" && event.toolName !== "write") return void 0;
  const { input } = event;
  if (!Value22.Check(Type21.Object({ path: Type21.String() }, { additionalProperties: true }), input)) {
    return void 0;
  }
  const path = resolve6(cwd, normalizeLspFilePath(input.path));
  try {
    const text = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }).decode(
      await readFile5(path)
    );
    return {
      path,
      text,
      touched: event.toolName === "edit" ? touchedLinesOfEdit(text, input) : "all"
    };
  } catch {
    return void 0;
  }
}
async function pullPreEditBaseline(session, target, signal, collected) {
  const runner = new ManagerPostEditDiagnosticsRunner(session, signal);
  await runner.run([{ path: target.path }], (outcomes) => collected.push(...outcomes));
}
async function scanDependentFiles(session, target, signal) {
  const read = await session.manager.runRead(
    target.path,
    void 0,
    {
      method: import_node3.ReferencesRequest.method,
      // The dependents' diagnostics are pulled, so a server without document diagnostics (one that
      // only pushes) would pay for the scan and report nothing.
      isSupportedBy: (client) => client.hasCapability(import_node3.ReferencesRequest.method) && client.hasCapability(import_node3.DocumentSymbolRequest.method) && client.hasCapability(import_node3.DocumentDiagnosticRequest.method)
    },
    async (client, route) => {
      const document = await client.synchronizeDocument(target.path, route.language.languageId);
      const symbols = await client.request(
        import_node3.DocumentSymbolRequest.method,
        { textDocument: { uri: document.uri } },
        signal
      );
      const found = /* @__PURE__ */ new Set();
      for (const position of touchedDeclarationPositions(symbols, target.touched)) {
        const references = await client.request(
          import_node3.ReferencesRequest.method,
          { textDocument: { uri: document.uri }, position, context: { includeDeclaration: false } },
          signal
        );
        for (const path of referencedFilePaths(references, /* @__PURE__ */ new Set([target.path]))) found.add(path);
      }
      return [...found];
    }
  );
  const candidates = [...new Set(read.successes.flatMap(({ value }) => value))];
  if (candidates.length === 0) return void 0;
  const { files, omittedFiles } = capDependentFiles(candidates);
  const { outcomes, texts } = await pullDependentFiles(
    new ManagerPostEditDiagnosticsRunner(session, signal),
    files
  );
  const { keys, unchecked } = groupErrorKeys(files, outcomes, texts);
  return {
    files: files.filter((file) => keys.has(file)),
    omittedFiles: omittedFiles + unchecked,
    errorKeys: keys,
    scanTimedOut: false
  };
}
async function pullDependentFiles(runner, files) {
  const outcomes = (await Promise.all(files.map((path) => runner.run([{ path }])))).flat();
  return { outcomes, texts: runner.texts };
}
async function appendSessionPostEditDiagnostics(event, session, context, work) {
  const dependents = work?.dependents;
  const runner = new ManagerPostEditDiagnosticsRunner(session, context.signal);
  const patch = await appendPostEditDiagnostics(event, (paths) => runner.run(paths), session.cwd, {
    includeHints: session.includeHintDiagnostics,
    preEditBaseline: work === void 0 ? void 0 : async (outcomes) => compareWithPreEditBaseline(work.baseline, outcomes, runner.texts),
    dependentDiagnostics: dependents === void 0 ? void 0 : async (paths) => {
      const changed = new Set(
        paths.map(({ path }) => resolve6(session.cwd, normalizeLspFilePath(path)))
      );
      const files = dependents.files.filter((file) => !changed.has(file));
      const { outcomes, texts } = await pullDependentFiles(runner, files);
      return newDependentErrors(dependents, files, outcomes, texts);
    }
  });
  if (patch === void 0) return void 0;
  const appendedValue = patch.content.at(-1);
  if (!Value22.Check(AppendedTextContentSchema, appendedValue)) return void 0;
  let appended = appendedValue;
  const truncation = await truncateLspOutputText(
    appended.text,
    session.sessionFiles,
    "diagnostics"
  );
  if (truncation.spillPath !== void 0) {
    appended = { type: "text", text: truncation.text };
  }
  return { ...patch, content: [...event.content, appended] };
}
var PiLspLifecycleController = class {
  /** Bind one lifecycle controller to Pi and production or test construction effects. */
  constructor(pi, effects) {
    this.pi = pi;
    this.effects = effects;
  }
  pi;
  effects;
  pendingPostEditDiagnosticOutcomes = [];
  preEditWork = /* @__PURE__ */ new Map();
  session;
  shutdownPromise;
  historyRevision = 0;
  /** Register Pi LSP lifecycle handlers and model-invisible diagnostics entry rendering. */
  register() {
    registerLspTools(this.pi, () => this.activeSession());
    this.pi.registerCommand("lsp", {
      description: "Manage language-server enablement and Instances",
      getArgumentCompletions: (prefix) => completeLspCommandArguments(prefix, this.session?.manager),
      handler: (args, context) => this.handleCommand(args, context)
    });
    this.pi.registerEntryRenderer(
      POST_EDIT_DIAGNOSTICS_ENTRY_TYPE,
      expandEntryOnClick(
        (entry, options, theme) => Value22.Check(PostEditDiagnosticsEntryDataSchema, entry.data) ? renderPostEditDiagnosticsEntry(entry.data, options, theme) : void 0
      )
    );
    this.pi.on("session_start", (_event, context) => this.startSession(context));
    this.pi.on("session_tree", (_event, context) => {
      this.historyRevision += 1;
      return this.restoreEnablement(context);
    });
    this.pi.on("tool_call", (event, context) => this.handleToolCall(event, context));
    this.pi.on("tool_result", (event, context) => this.handleToolResult(event, context));
    this.pi.on("turn_end", () => this.flushPostEditDiagnosticsEntry());
    this.pi.on("session_shutdown", () => this.shutdownSession());
  }
  async startSession(context) {
    await this.shutdownSession();
    this.pendingPostEditDiagnosticOutcomes.length = 0;
    const settingsManager = SettingsManager.create(context.cwd, this.effects.getAgentDirectory(), {
      projectTrusted: context.isProjectTrusted()
    });
    const settings = resolveLspSettings(settingsManager);
    if (settings.warnings.length > 0) {
      context.ui.notify(
        noticeText("LSP", `settings:
- ${settings.warnings.join("\n- ")}`),
        "warning"
      );
    }
    const sessionFiles = await createLspSessionFiles(context.sessionManager.getSessionDir());
    const workspaceEdits = new LspWorkspaceEditStore();
    const replay = workspaceEdits.replayPreviewRecords(
      branchLspToolResultDetails(context.sessionManager.getBranch())
    );
    if (replay > 0) {
      context.ui.notify(
        noticeText(
          "LSP",
          `ignored ${replay} invalid Workspace Edit Preview record${replay === 1 ? "" : "s"} on the active session branch.`
        ),
        "warning"
      );
    }
    const manager = new LspServerManager({
      cwd: context.cwd,
      settings,
      pool: sharedLspServerInstancePool(),
      // The pool may run this for a startup that outlives this session, so it captures none of
      // the session's state: stderr, failures, and server edits go through the pool.
      startClient: ({ definition, rootPath, timeouts, ...pooled }) => LspServerClient.start({
        serverId: definition.id,
        rootPath,
        command: definition.command,
        args: definition.args,
        environment: { ...definition.environment },
        initializationOptions: definition.initializationOptions ?? null,
        settings: definition.settings ?? null,
        maxConcurrentDiagnostics: definition.maxConcurrentDiagnostics,
        timeouts,
        ...pooled
      }),
      onWorkspaceEdit: async ({ edit, serverId, positionEncoding }) => (await workspaceEdits.createPreview({ edit, serverId, positionEncoding })).preview_id
    });
    this.session = {
      cwd: context.cwd,
      configuredEnablement: settings.enablement,
      includeHintDiagnostics: settings.includeHintDiagnostics,
      manager,
      sessionFiles,
      workspaceEdits
    };
    await this.restoreEnablement(context);
  }
  restoreEnablement(context) {
    const session = this.session;
    if (session === void 0) return void 0;
    return session.manager.setEnablement(
      session.configuredEnablement,
      branchEnablement(context.sessionManager.getBranch())
    );
  }
  async handleCommand(args, context) {
    const session = this.session;
    const revision = this.historyRevision;
    const isCurrent = () => this.session === session && this.historyRevision === revision;
    try {
      if (session === void 0) throw new Error("Pi LSP: session runtime is inactive");
      if (args.trim() === "" && !context.hasUI) {
        notifyLspCommand(context, formatLspCommandStatus(session.manager), "info");
        return;
      }
      const command = args.trim() === "" ? await selectLspCommand(session.manager, context, isCurrent) : parseLspCommandArguments(args);
      if (command === void 0 || !isCurrent()) return;
      if (!session.manager.getStatus().servers.some(({ serverId }) => serverId === command.serverId)) {
        throw new Error(`Pi LSP: unknown Server Definition ${command.serverId}`);
      }
      if (command.action === "stop") {
        const roots = knownLspServerRoots(session.manager, command.serverId);
        let rootPath = command.rootPath === void 0 ? roots[0] : resolve6(session.cwd, normalizeLspFilePath(command.rootPath));
        if (command.rootPath === void 0 && roots.length > 1) {
          if (!context.hasUI)
            throw new Error(
              `Pi LSP: multiple roots for ${command.serverId}; use /lsp stop <server-id> <root>: ${roots.join(", ")}`
            );
          rootPath = await context.ui.select(
            `Stop ${command.serverId}: select workspace root`,
            roots
          );
          if (rootPath === void 0 || !isCurrent()) return;
        }
        if (rootPath === void 0 || !roots.includes(rootPath))
          throw new Error(
            `Pi LSP: no known Instance for ${command.serverId} at ${rootPath ?? "any root"}`
          );
        await session.manager.stopServer(command.serverId, rootPath);
        if (isCurrent())
          notifyLspCommand(
            context,
            `Stopped ${command.serverId} at ${rootPath}; ${session.manager.getEnablement(command.serverId).enabled ? "lazy startup remains permitted" : "the Server Definition remains disabled"}.`,
            "info"
          );
        return;
      }
      const enabled = command.action === "enable";
      if (command.scope === "session") {
        this.pi.appendEntry(ENABLEMENT_ENTRY_TYPE, { serverId: command.serverId, enabled });
      } else {
        await writeLspEnablement({
          agentDirectory: this.effects.getAgentDirectory(),
          cwd: session.cwd,
          projectTrusted: context.isProjectTrusted(),
          scope: command.scope,
          serverId: command.serverId,
          enabled
        });
        if (this.session !== session) return;
        session.configuredEnablement = resolveLspSettings(
          SettingsManager.create(session.cwd, this.effects.getAgentDirectory(), {
            projectTrusted: context.isProjectTrusted()
          })
        ).enablement;
      }
      await this.restoreEnablement(context);
      if (!isCurrent()) return;
      const effective = session.manager.getEnablement(command.serverId);
      const masked = effective.scope !== command.scope;
      notifyLspCommand(
        context,
        `${command.serverId} ${enabled ? "enabled" : "disabled"} at ${command.scope} scope.${masked ? ` Change masked by ${effective.scope} override; effectively ${effective.enabled ? "enabled" : "disabled"}.` : ""}`,
        masked ? "warning" : "info"
      );
    } catch (error) {
      if (isCurrent())
        notifyLspCommand(context, error instanceof Error ? error.message : String(error), "error");
    }
  }
  activeSession() {
    if (this.session === void 0) throw new Error("Pi LSP: session runtime is inactive");
    return this.session;
  }
  /**
   * Before a native edit runs, pull the changed file's Pre-edit Baseline and scan for dependent
   * files, concurrently under one time budget. It never blocks or alters the call. A server whose
   * baseline pull fails or has not answered when the budget runs out has no baseline, and a scan
   * that runs out of time is reported by the result.
   */
  async handleToolCall(event, context) {
    const session = this.session;
    if (session === void 0 || event.toolName !== "edit" && event.toolName !== "write") {
      return void 0;
    }
    try {
      const target = await preEditTarget(event, session.cwd);
      if (target === void 0) return void 0;
      const budget = AbortSignal.timeout(
        this.effects.dependentScanBudgetMs ?? DEPENDENT_SCAN_BUDGET_MS
      );
      const signal = context.signal === void 0 ? budget : AbortSignal.any([context.signal, budget]);
      const timedOut = new Promise(
        (resolveTimeout) => budget.addEventListener("abort", () => resolveTimeout("timed-out"), { once: true })
      );
      const withinBudget = (work) => {
        work.catch(() => void 0);
        return Promise.race([work, timedOut]);
      };
      const preEditOutcomes = [];
      const [, scan] = await Promise.allSettled([
        withinBudget(pullPreEditBaseline(session, target, signal, preEditOutcomes)),
        withinBudget(scanDependentFiles(session, target, signal))
      ]);
      if (this.session !== session) return void 0;
      const baseline = preEditBaselineOf(target.path, preEditOutcomes, target.text);
      const dependents = scan.status === "rejected" ? void 0 : scan.value === "timed-out" ? { files: [], omittedFiles: 0, errorKeys: /* @__PURE__ */ new Map(), scanTimedOut: true } : scan.value;
      this.preEditWork.set(
        event.toolCallId,
        dependents === void 0 ? { baseline } : { baseline, dependents }
      );
    } catch {
    }
    return void 0;
  }
  handleToolResult(event, context) {
    const session = this.session;
    const work = this.preEditWork.get(event.toolCallId);
    this.preEditWork.delete(event.toolCallId);
    if (session === void 0) return void 0;
    return appendSessionPostEditDiagnostics(event, session, context, work).then((patch) => {
      if (patch === void 0) return void 0;
      this.pendingPostEditDiagnosticOutcomes.push(...patch.outcomes);
      const result = {
        content: patch.content,
        details: patch.details,
        isError: patch.isError
      };
      if (patch.structuredContent !== void 0) result.structuredContent = patch.structuredContent;
      return result;
    });
  }
  flushPostEditDiagnosticsEntry() {
    const session = this.session;
    const outcomes = this.pendingPostEditDiagnosticOutcomes.splice(0);
    this.preEditWork.clear();
    if (session === void 0) return;
    const entry = createPostEditDiagnosticsEntryData(session.cwd, outcomes);
    if (entry !== void 0) this.pi.appendEntry(POST_EDIT_DIAGNOSTICS_ENTRY_TYPE, entry);
  }
  async shutdownSession() {
    if (this.session === void 0) {
      await this.shutdownPromise;
      return;
    }
    const session = this.session;
    this.session = void 0;
    this.pendingPostEditDiagnosticOutcomes.length = 0;
    this.preEditWork.clear();
    const shutdown = (async () => {
      try {
        await session.manager.shutdown();
      } finally {
        await session.sessionFiles.close();
      }
    })();
    this.shutdownPromise = shutdown;
    try {
      await shutdown;
    } finally {
      if (this.shutdownPromise === shutdown) this.shutdownPromise = void 0;
    }
  }
};
function createPiLspExtension(effects = productionPiLspLifecycleEffects) {
  return (pi) => new PiLspLifecycleController(pi, effects).register();
}
var piLspExtension = createPiLspExtension();
var pi_lsp_extension_default = piLspExtension;
export {
  pi_lsp_extension_default as default
};
//# sourceMappingURL=index.js.map
