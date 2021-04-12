const {jsPDF} = require("jspdf");

let fs = require("fs");


let d= {

    "c++":[{name:"abc",link:"a.com",issue:[{issueName:"xyz",issueUrl:"xyz.com"},{issueName:"xyz",issueUrl:"xyz.com"}]

}]


 
}

function pdfgenerator(d)
{
    for(x in d)
    {
        fs.mkdirSync(x);
        //console.log(x);
        let path = "./"+x+"/";
        for(y in d[x])
        {
            const doc = new jsPDF();
            let issueArr= d[x][y].issue;
            let space =1;
            for(z in issueArr)
            {
                doc.text(issueArr[z].issueName,10,10*space);
                doc.text(issueArr[z].issueUrl,10,10*space+5);
                space++;
            }
            doc.save(path+d[x][y].name+".pdf");
        }
        

    }
}

pdfgenerator(d);