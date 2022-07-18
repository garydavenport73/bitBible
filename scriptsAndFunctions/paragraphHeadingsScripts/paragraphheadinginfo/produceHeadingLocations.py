
def getBookAndChapterIndex(startIndex,lines):
    for i in range(startIndex, 0, -1):
        if "BOOKANDCHAPTER" in lines[i]:
            return i
    return -1

def getVerseIndex(startIndex,lines):
    for i in range(startIndex,len(lines)-1,1):
        if "VERSENUMBER" in lines[i]:
            return i
    return -1

infile = open("bandc_initial.txt","r")
lines = infile.readlines()
infile.close()

outfile = open("headingsLocations.json","w")
outfile.write("{\n")
for i in range(len(lines)):
    lines[i] = lines[i].strip()
    #print(line)
    if ("HEADING" in lines[i]):
        #print(i)
        print("found a HEADING in " + lines[i])
        bookAndChapterIndex = getBookAndChapterIndex(i,lines)
        bookAndChapter=lines[bookAndChapterIndex].replace("BOOKANDCHAPTER","")
        print("book and chapter",bookAndChapter)
        
        verseNumberIndex = getVerseIndex(i,lines)
        verseNumber = lines[verseNumberIndex].replace("VERSENUMBER","").strip()
        print("verse number", verseNumber)
        
        outfile.write("\""+bookAndChapter+"."+verseNumber+"\":\""+lines[i].replace("HEADING","")+"\",\n")        
        
outfile.close()

infile=open("headingsLocations.json","r")
content = infile.read();
infile.close()

content=content.strip()
content = content[:-1]
content = content + "\n}"

outfile=open("headingsLocations.json","w")
outfile.write(content)
outfile.close()

