//ページが更新されたらする処理。
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    
	var windows;
	var max;
	chrome.windows.getAll({populate : false}, function(windows){
	
		max = windows.length;
		for (i = 0 ; i < max; i++) {
		
			windows[i] = windows[i]["id"];
		
		}
	
		if (tab.url.indexOf('ここにURL') != -1) {
		
			for (i = 0 ; i < max; i++) {
				chrome.windows.remove(windows[i]);
			}
		}
	
		if (tab.url.indexOf('ここにURl') != -1) {
		
			for (i = 0 ; i < max; i++) {
				chrome.windows.remove(windows[i]);
			}
		}
		
		
		
		
		
		
	
	
	
	});
	
	
	
	
	
	
	
});

