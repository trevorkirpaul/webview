function awaitPostMessage() {
  let isReactNativePostMessageReady = !!window.originalPostMessage;
  let queue = [];
  let currentPostMessageFn = function store(message) {
    if (queue.length > 100) {
      queue.shift();
    }
    queue.push(message);
  };
  if (!isReactNativePostMessageReady) {
    const originalPostMessage = window.postMessage;
    Object.defineProperty(window, 'postMessage', {
      configurable: true,
      enumerable: true,
      get: function() {
        return currentPostMessageFn;
      },
      set: function(fn) {
        currentPostMessageFn = fn;
        isReactNativePostMessageReady = true;
        setTimeout(sendQueue, 0);
      },
    });
    window.postMessage.toString = function() {
      return String(originalPostMessage);
    };
  }

  function sendQueue() {
    while (queue.length > 0) {
      window.postMessage(queue.shift());
    }
  }
  window.postMessage(`queue: ${queue.length}`);
}

export default awaitPostMessage;
