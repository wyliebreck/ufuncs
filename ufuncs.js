let Ufuncs = {};
Ufuncs.ageGroup = function(age) {
  let top = Math.ceil(age/5)*5;
  return `${top-4}-${top}`;
};
Ufuncs.awRateColor = function(awRate) {
  return Ufuncs.rgba("red", Math.min(awRate*6, 1));
};
Ufuncs.colors = {
  // Primary
  yellow: [255,220,0],
  black: [0,0,0],
  white: [255,255,255],
  // Secondary
  indigo: [63,97,196],
  red: [255,99,93],
  green: [26,201,135],
  pink: [250,145,182],
  // Tertiary
  blue: [45,170,226],
  teal: [0,120,130],
  purple: [138,104,200],
  orange: [255,130,0],
};
Ufuncs.courseCut = function(courseCode) {
  let sixties = ["ZZBU6001","ZZBU6004","ZZBU6005","ZZBU6007","ZZBU6008","ZZBU6103","ZZBU8601","ZZBU8705","ZZBU8706","ZZBU8707","ZZBU8708","ZZBU9998","ZZEN9201","ZZEN9203"];
  return sixties.includes(courseCode) ? 0.6 : 0.55;
};
Ufuncs.difficultyColor = function(difficulty) {
	if (difficulty === 0) return "rgb(240,240,240)";
	if (difficulty > 0) return Ufuncs.rgba("green", Math.min(10, difficulty)/10);
	return Ufuncs.rgba("red", Math.min(10, -1*difficulty)/10);
};
Ufuncs.feeFaculty = function(faculty) {
  if (faculty === "Faculty of Engineering") return "EN";
  if (faculty === "Faculty of Law and Justice") return "LJ";
  if (faculty === "Faculty of Science") return "SC";
  if (faculty === "UNSW Business School") return "BU";
  if (faculty === "UNSW Canberra at ADFA") return "CA";
};
Ufuncs.hexadayName = function(...args) {
  let weekNum = args.length > 1 ? args[0] : Math.floor((args[0]-1)/7);
  let weekdayNum = args.length > 1 ? args[1] : ((args[0]-1)%7) + 1;
  return `Week ${weekNum} ${Ufuncs.weekdayName(weekdayNum)}`;
};
Ufuncs.hexadayNumber = function(weekNum, weekdayNum) {
  return weekNum*7 + weekdayNum;
};
Ufuncs.hexaStartDate = function(yearhexa) {
  if (yearhexa === "2022H1") return "2022-01-03";
  if (yearhexa === "2022H2") return "2022-02-28";
  if (yearhexa === "2022H3") return "2022-05-02";
  throw new Error("Unknown yearhexa");
};
Ufuncs.hexaweekName = function(hexaweekNum) {
  return `Week ${hexaweekNum}`;
};
Ufuncs.gradeColor = function(grade) {
  if (grade === "HD") return Ufuncs.rgba("green", 1);
  if (grade === "DN") return Ufuncs.rgba("green", 0.75);
  if (grade === "CR") return Ufuncs.rgba("green", 0.5);
  if (grade === "PS") return Ufuncs.rgba("green", 0.25);
  if (grade === "FL" || grade === "AF") return Ufuncs.rgba("red");
};
Ufuncs.timeHour = function(time) {
  let start = time.split(":")[0];
  return start + "-" + (parseInt(start)+1).toString().padStart(2, 0);
};
Ufuncs.markColor = function (mark) {
  if (mark >= 50) return Ufuncs.rgba("green", (mark-50)/50);
  return Ufuncs.rgba("red", (50-mark)/50);
};
Ufuncs.markGrade = function (mark) {
  if (mark < 50) return "FL";
  if (mark < 65) return "PS";
  if (mark < 75) return "CR";
  if (mark < 85) return "DN";
  if (mark <= 100) return "HD";
  return null;
};
Ufuncs.meltRateColor = function(meltRate) {
  if (meltRate < 0.2) return Ufuncs.rgba("green", 1 - meltRate/0.2);
  return Ufuncs.rgba("red", Math.min(1, (meltRate - 0.2)/0.1));
};
Ufuncs.monthHexa = function(month) {
  if (["JAN", "FEB"].includes(month)) return "H1";
  if (["MAR", "APR"].includes(month)) return "H2";
  if (["MAY", "JUN"].includes(month)) return "H3";
  if (["JUL", "AUG"].includes(month)) return "H4";
  if (["SEP", "OCT"].includes(month)) return "H5";
  if (["NOV", "DEC"].includes(month)) return "H6";
};
Ufuncs.rankWord = function(num) {
  let lastDigit = num.toString().slice(-1);
  if (lastDigit === "1" && num !== 11) return num+"st";
  if (lastDigit === "2" && num !== 12) return num+"nd";
  if (lastDigit === "3" && num !== 13) return num+"rd";
  return num+"th";
};
Ufuncs.ratingColor = function(rating) {
  if (rating === 6) return Ufuncs.rgba("green", 1, 0.6);
  if (rating === 5) return Ufuncs.rgba("green", 0.5, 0.6);
  if (rating === 4) return Ufuncs.rgba("red", 0.25, 0.6);
  if (rating === 3) return Ufuncs.rgba("red", 0.5, 0.6);
  if (rating === 2) return Ufuncs.rgba("red", 0.75, 0.6);
  if (rating === 1) return Ufuncs.rgba("red", 1, 0.6);
};
Ufuncs.ratingSatisfaction = function(rating, target) {
  return rating >= target ? 100 : 0;
};
Ufuncs.ratingValue = function(rating) {
  if (rating === "Strongly disagree") return 1;
  if (rating === "Disagree") return 2;
  if (rating === "Moderately disagree") return 3;
  if (rating === "Moderately agree") return 4;
  if (rating === "Agree") return 5;
  if (rating === "Strongly agree") return 6;
  if (rating === "Strongly Agree") return 6;
  return parseInt(rating);
};
Ufuncs.residencyFee = function(residency) {
  if (["AUS", "AUSPR", "NZ"].includes(residency)) return "DOM";
  if (["INTL"].includes(residency)) return "INTL";
};
Ufuncs.rgba = function(name, tint = 1, opacity = 1) {
  let result = Ufuncs.colors[name].map(x => Math.round(x + (1-tint)*(255 - x)));
  return `rgba(${result[0]}, ${result[1]}, ${result[2]}, ${opacity})`;
};
Ufuncs.scoreColor = function(rating) {
  let from = [240,240,240];
  let to; let frac; let rgb = [];
  if (rating < 70) {to = [255, 99, 93]; frac = (70 - rating)/70;} // red
  else {to = [26, 201, 135]; frac = (rating - 70)/30;} // green
  for (i = 0; i <= 2; i++) rgb[i] = Math.round(from[i] + frac*(to[i] - from[i]));
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};
Ufuncs.termHexa = function(term) {
  return {10: "H1", 30: "H2", 40: "H3", 60: "H4", 75: "H5", 85:"H6"}[term % 100];
};
Ufuncs.termYear = function(term) {
  return Math.floor(term/100) + 1960;
};
Ufuncs.termYearHexa = function(term) {
  return Ufuncs.termYear(term) + Ufuncs.termHexa(term);
};
Ufuncs.weekdayName = function(weekdayNum) {
  let names = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  return names[weekdayNum-1];
};
