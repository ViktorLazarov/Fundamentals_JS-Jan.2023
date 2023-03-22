function emailExtractor(input) {
    let pattern = /(?<=\s|^)[A-Za-z0-9]+[-_.A-Za-z0-9]*@[a-z-]+[.]*[a-z]+\.[a-z]+/g;
    let emails = input.match(pattern);
    for (const email of emails) {
        console.log(email);
    }


}

// emailExtractor(`Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.`)
emailExtractor(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`)