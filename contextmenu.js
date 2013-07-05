// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function selectionOnClick(info, tab) {
  try{
    var term = info.selectionText;
    var query_url = "http://www.douban.com/search?cat=&q=" + term;
    chrome.tabs.create({url: query_url});
  }catch(e)
  {
    console.log(e)
  }
}

// Create one test item for each context type.                                     
var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "用豆瓣搜索 '" ;
  var id = chrome.contextMenus.create({"title": "用豆瓣搜索 '" + "%s" 
    + "'", "contexts":[context],
                                       "onclick": selectionOnClick});
}