function executeScript() {
    const script = document.getElementById("script").value;
    browser.runtime.sendMessage({ action: "executeScript", script });
  }
  
  document.getElementById("executeBtn").addEventListener("click", executeScript);
  