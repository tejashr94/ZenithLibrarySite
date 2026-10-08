/**
 * ==============================================================================
 * ZENITH LIBRARY GORAKHPUR — SPREADSHEET CMS & WEB APP (v3 - TOP-ROW GUARANTEE)
 * Spreadsheet: https://docs.google.com/spreadsheets/d/1F2iVnO-9f5lXM5ze5fu5oHg6X7fOhFT7dNR4GQW368U/edit
 * ==============================================================================
 */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("⚡ Zenith Library CMS")
    .addItem("Format & Fix Sheets (Move Data to Top)", "setupSheet")
    .addToUi();
}

/**
 * Finds the first truly empty row (checking Column A - id)
 * Guarantees submissions appear right at rows 2, 3, 4... NEVER way down at row 500!
 */
function getFirstEmptyRow(sheet) {
  var maxRows = sheet.getMaxRows();
  var colA = sheet.getRange(1, 1, maxRows, 1).getValues();
  for (var i = 1; i < colA.length; i++) {
    var val = colA[i][0];
    if (!val || String(val).trim() === "") {
      return i + 1; // 1-indexed row number
    }
  }
  // If all rows are filled, append a new row
  sheet.appendRow([""]);
  return maxRows + 1;
}

/**
 * Formats sheets and consolidates all submissions to the top starting at row 2!
 * Cleans up empty checkbox phantom rows so everything is visible immediately.
 */
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. Setup 'Feedback' Sheet
  var feedbackSheet = ss.getSheetByName("Feedback");
  if (!feedbackSheet) {
    feedbackSheet = ss.insertSheet("Feedback");
  }

  // Collect existing real data rows (even if pushed down to row 500+)
  var allFbData = feedbackSheet.getDataRange().getValues();
  var realFbRows = [];
  for (var f = 1; f < allFbData.length; f++) {
    var r = allFbData[f];
    var name = r[1] ? String(r[1]).trim() : "";
    var feedback = r[4] ? String(r[4]).trim() : "";
    // If name OR feedback is present, it's a real entry!
    if (name !== "" || feedback !== "") {
      realFbRows.push([
        r[0] || "FB-" + (f < 10 ? "0" + f : f),
        name,
        r[2] ? String(r[2]).trim() : "",
        Number(r[3]) || 5,
        feedback,
        r[5] ? String(r[5]).trim() : "",
        r[6] instanceof Date ? Utilities.formatDate(r[6], Session.getScriptTimeZone(), "yyyy-MM-dd") : String(r[6] || Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd")),
        r[7] || "pending",
        r[8] === true || String(r[8]).toUpperCase() === "TRUE" || r[8] === 1 ? true : false
      ]);
    }
  }

  // Clear sheet and rebuild cleanly
  feedbackSheet.clear();
  var feedbackHeaders = ["id", "name", "email", "rating", "feedback", "photo", "date", "status", "approved"];
  feedbackSheet.getRange(1, 1, 1, feedbackHeaders.length).setValues([feedbackHeaders]);
  feedbackSheet.getRange(1, 1, 1, feedbackHeaders.length)
    .setBackground("#0c182a")
    .setFontColor("#d4af37")
    .setFontWeight("bold")
    .setFontFamily("Arial");
  feedbackSheet.setFrozenRows(1);
  feedbackSheet.setRowHeight(1, 35);

  // Write collected real rows starting immediately from row 2!
  if (realFbRows.length > 0) {
    feedbackSheet.getRange(2, 1, realFbRows.length, feedbackHeaders.length).setValues(realFbRows);
    
    // Add checkboxes ONLY to active real data rows
    var feedbackRule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
    feedbackSheet.getRange(2, 9, realFbRows.length, 1).setDataValidation(feedbackRule);
  }

  // Trim excess empty phantom rows to keep sheet compact and clean
  var currentFbMax = feedbackSheet.getMaxRows();
  var desiredFbRows = Math.max(realFbRows.length + 30, 50);
  if (currentFbMax > desiredFbRows) {
    feedbackSheet.deleteRows(desiredFbRows + 1, currentFbMax - desiredFbRows);
  }

  // 2. Setup 'Stories' Sheet
  var storiesSheet = ss.getSheetByName("Stories");
  if (!storiesSheet) {
    storiesSheet = ss.insertSheet("Stories");
  }

  var allStData = storiesSheet.getDataRange().getValues();
  var realStRows = [];
  for (var s = 1; s < allStData.length; s++) {
    var sr = allStData[s];
    var sName = sr[1] ? String(sr[1]).trim() : "";
    var sTitle = sr[2] ? String(sr[2]).trim() : "";
    var sContent = sr[3] ? String(sr[3]).trim() : "";
    if (sName !== "" || sTitle !== "" || sContent !== "") {
      realStRows.push([
        sr[0] || "ST-" + (s < 10 ? "0" + s : s),
        sName,
        sTitle,
        sContent,
        sr[4] ? String(sr[4]).trim() : "",
        sr[5] instanceof Date ? Utilities.formatDate(sr[5], Session.getScriptTimeZone(), "yyyy-MM-dd") : String(sr[5] || Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd")),
        sr[6] || "pending",
        sr[7] === true || String(sr[7]).toUpperCase() === "TRUE" || sr[7] === 1 ? true : false
      ]);
    }
  }

  storiesSheet.clear();
  var storyHeaders = ["id", "name", "title", "content", "photo", "date", "status", "approved"];
  storiesSheet.getRange(1, 1, 1, storyHeaders.length).setValues([storyHeaders]);
  storiesSheet.getRange(1, 1, 1, storyHeaders.length)
    .setBackground("#0c182a")
    .setFontColor("#d4af37")
    .setFontWeight("bold")
    .setFontFamily("Arial");
  storiesSheet.setFrozenRows(1);
  storiesSheet.setRowHeight(1, 35);

  if (realStRows.length > 0) {
    storiesSheet.getRange(2, 1, realStRows.length, storyHeaders.length).setValues(realStRows);
    var storyRule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
    storiesSheet.getRange(2, 8, realStRows.length, 1).setDataValidation(storyRule);
  }

  var currentStMax = storiesSheet.getMaxRows();
  var desiredStRows = Math.max(realStRows.length + 30, 50);
  if (currentStMax > desiredStRows) {
    storiesSheet.deleteRows(desiredStRows + 1, currentStMax - desiredStRows);
  }

  // Auto-resize
  feedbackSheet.autoResizeColumns(1, feedbackHeaders.length);
  storiesSheet.autoResizeColumns(1, storyHeaders.length);

  SpreadsheetApp.getActiveSpreadsheet().toast(
    "Done! All data moved to Row 2. Checkboxes are ready for approval.",
    "⚡ Zenith Library CMS",
    6
  );
}

/**
 * Handle GET requests from website
 */
function doGet(e) {
  try {
    var params = e ? e.parameter : {};
    var action = params.action || "getFeedback";
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (action === "getFeedback") {
      var sheet = ss.getSheetByName("Feedback");
      if (!sheet) return createJsonResponse({ success: true, data: [] });
      var rows = sheet.getDataRange().getValues();
      var results = [];

      for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        if (!row || row.length === 0) continue;
        var id = row[0];
        var name = row[1];
        var email = row[2];
        var rating = row[3];
        var feedback = row[4];
        var photo = row[5];
        var date = row[6];
        var status = row[7];
        var approved = row[8];

        var isApproved = (approved === true || String(approved).toUpperCase() === "TRUE" || approved === 1);
        if (isApproved && name && feedback) {
          results.push({
            id: String(id || "FB-" + i),
            name: String(name).trim(),
            email: email ? String(email).trim() : "",
            rating: Number(rating) || 5,
            feedback: String(feedback).trim(),
            photo: photo ? String(photo).trim() : "",
            date: date instanceof Date ? Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd") : String(date || ""),
            status: "approved",
            approved: true
          });
        }
      }
      return createJsonResponse({ success: true, data: results });
    }

    if (action === "getStories") {
      var sheetStories = ss.getSheetByName("Stories");
      if (!sheetStories) return createJsonResponse({ success: true, data: [] });
      var storyRows = sheetStories.getDataRange().getValues();
      var storyResults = [];

      for (var j = 1; j < storyRows.length; j++) {
        var sRow = storyRows[j];
        if (!sRow || sRow.length === 0) continue;
        var sId = sRow[0];
        var sName = sRow[1];
        var sTitle = sRow[2];
        var sContent = sRow[3];
        var sPhoto = sRow[4];
        var sDate = sRow[5];
        var sStatus = sRow[6];
        var sApproved = sRow[7];

        var sIsApproved = (sApproved === true || String(sApproved).toUpperCase() === "TRUE" || sApproved === 1);
        if (sIsApproved && sName && sTitle && sContent) {
          storyResults.push({
            id: String(sId || "ST-" + j),
            name: String(sName).trim(),
            title: String(sTitle).trim(),
            content: String(sContent).trim(),
            photo: sPhoto ? String(sPhoto).trim() : "",
            date: sDate instanceof Date ? Utilities.formatDate(sDate, Session.getScriptTimeZone(), "yyyy-MM-dd") : String(sDate || ""),
            status: "approved",
            approved: true
          });
        }
      }
      return createJsonResponse({ success: true, data: storyResults });
    }

    // Format & Consolidate sheet action (Moves all submissions to Row 2 immediately!)
    if (action === "setupSheet" || action === "fix") {
      setupSheet();
      return createJsonResponse({
        success: true,
        message: "Spreadsheet formatted successfully! All rows moved to top starting at Row 2.",
        spreadsheet: ss.getName()
      });
    }

    // Debug action to inspect all rows
    if (action === "debug") {
      var fbS = ss.getSheetByName("Feedback");
      var allRows = fbS ? fbS.getDataRange().getValues() : [];
      return createJsonResponse({
        success: true,
        sheetCount: ss.getSheets().length,
        feedbackTotalRows: allRows.length,
        feedbackRows: allRows
      });
    }

    return createJsonResponse({
      success: true,
      message: "Zenith Library Google Apps Script API is active.",
      spreadsheet: ss.getName()
    });
  } catch (err) {
    return createJsonResponse({ success: false, error: err.toString() });
  }
}

/**
 * Handle POST requests from website (writes immediately to first available row!)
 */
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = {};

    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var action = data.action || (data.title ? "addStory" : "addFeedback");

    if (action === "setupSheet" || action === "fix") {
      setupSheet();
      return createJsonResponse({
        success: true,
        message: "Spreadsheet formatted successfully! All rows moved to top starting at Row 2."
      });
    }

    var todayStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd");

    if (action === "addFeedback") {
      var sheetFb = ss.getSheetByName("Feedback");
      if (!sheetFb) {
        setupSheet();
        sheetFb = ss.getSheetByName("Feedback");
      }

      var targetRow = getFirstEmptyRow(sheetFb);
      var fbId = data.id || "FB-" + (new Date().getTime().toString().slice(-6));
      
      var newFbRow = [
        fbId,
        String(data.name || "").trim(),
        String(data.email || "").trim(),
        Number(data.rating) || 5,
        String(data.feedback || "").trim(),
        String(data.photo || "").trim(),
        todayStr,
        "pending",
        false
      ];

      sheetFb.getRange(targetRow, 1, 1, newFbRow.length).setValues([newFbRow]);
      
      // Ensure checkbox is placed on column I
      var fbCheckRule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
      sheetFb.getRange(targetRow, 9).setDataValidation(fbCheckRule);

      return createJsonResponse({
        success: true,
        message: "Thank you! Your feedback has been submitted and will be reviewed by Zenith Library.",
        id: fbId,
        rowInserted: targetRow
      });
    }

    if (action === "addStory") {
      var sheetSt = ss.getSheetByName("Stories");
      if (!sheetSt) {
        setupSheet();
        sheetSt = ss.getSheetByName("Stories");
      }

      var targetStRow = getFirstEmptyRow(sheetSt);
      var stId = data.id || "ST-" + (new Date().getTime().toString().slice(-6));
      
      var newStoryRow = [
        stId,
        String(data.name || "").trim(),
        String(data.title || "").trim(),
        String(data.content || "").trim(),
        String(data.photo || "").trim(),
        data.date || todayStr,
        "pending",
        false
      ];

      sheetSt.getRange(targetStRow, 1, 1, newStoryRow.length).setValues([newStoryRow]);

      var stCheckRule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
      sheetSt.getRange(targetStRow, 8).setDataValidation(stCheckRule);

      return createJsonResponse({
        success: true,
        message: "Thank you! Your story has been submitted and will be reviewed by Zenith Library.",
        id: stId,
        rowInserted: targetStRow
      });
    }

    return createJsonResponse({ success: false, message: "Unknown action: " + action });
  } catch (err) {
    return createJsonResponse({ success: false, error: err.toString() });
  }
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
