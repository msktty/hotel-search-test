function doPost(e) {
  var sheet = SpreadsheetApp.openById("1B_PUfHHvUpZebpF9iq4YeGYElJfBrpsVOSa__40zuww").getSheetByName("ホテル一覧");
  sheet.appendRow([
    e.parameter.initial,
    e.parameter.name,
    e.parameter.address,
    e.parameter.tel,
    e.parameter.memo
  ]);
  return ContentService.createTextOutput("保存完了");
}
