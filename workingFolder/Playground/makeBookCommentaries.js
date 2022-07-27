const fs = require('fs');

let pulpit = JSON.parse(fs.readFileSync("pulpit.json", "utf8"));



function makeSingleBookCommentary(osisBookRef){
	let singleBook={};
	for (bookChapter in pulpit) {
		//console.log(book);
		if (bookChapter.split(".")[0]===osisBookRef){
			//console.log(bookChapter);
			singleBook[bookChapter]=pulpit[bookChapter]
		}
	}
	//console.log(singleBook);
	return JSON.parse(JSON.stringify(singleBook));
}


let bookNameToIndex = { "Gen": "1", "Exod": "2", "Lev": "3", "Num": "4", "Deut": "5", "Josh": "6", "Judg": "7", "Ruth": "8", "1Sam": "9", "2Sam": "10", "1Kgs": "11", "2Kgs": "12", "1Chr": "13", "2Chr": "14", "Ezra": "15", "Neh": "16", "Esth": "17", "Job": "18", "Ps": "19", "Prov": "20", "Eccl": "21", "Song": "22", "Isa": "23", "Jer": "24", "Lam": "25", "Ezek": "26", "Dan": "27", "Hos": "28", "Joel": "29", "Amos": "30", "Obad": "31", "Jonah": "32", "Mic": "33", "Nah": "34", "Hab": "35", "Zeph": "36", "Hag": "37", "Zech": "38", "Mal": "39", "Matt": "40", "Mark": "41", "Luke": "42", "John": "43", "Acts": "44", "Rom": "45", "1Cor": "46", "2Cor": "47", "Gal": "48", "Eph": "49", "Phil": "50", "Col": "51", "1Thess": "52", "2Thess": "53", "1Tim": "54", "2Tim": "55", "Titus": "56", "Phlm": "57", "Heb": "58", "Jas": "59", "1Pet": "60", "2Pet": "61", "1John": "62", "2John": "63", "3John": "64", "Jude": "65", "Rev": "66" };

for (bookName in bookNameToIndex){
	console.log("Making Commentary Bookf for" + bookName);
	let thisBook=makeSingleBookCommentary(bookName);
	console.log(thisBook);
	fs.writeFileSync(bookName+".json",JSON.stringify(thisBook));
}


