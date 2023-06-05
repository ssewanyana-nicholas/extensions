function executeScriptInTabs(tabIds, script) {
    for (let tabId of tabIds) {
      browser.tabs.executeScript(tabId, {
        code: script,
        runAt: "document_end"
      });
    }
  }
  
  function handleMessage(request, sender, sendResponse) {
    if (request.action === "executeScript") {
      browser.tabs.query({}, function (tabs) {
        const tabIds = tabs.map(tab => tab.id);
        executeScriptInTabs(tabIds, request.script);
      });
    }
  }
  
  browser.runtime.onMessage.addListener(handleMessage);
  