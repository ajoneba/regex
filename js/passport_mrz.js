var data = 'P<NLDMEULENDIJK<<LOES<ALBERTINE<<<<<<<<<<<<<XX00000000NLD7110195F1108280123456782<<<<<02',
    passportRegex = new RegExp([
        /([A-Z])/,          // passport (P means passport)      
        /([A-Z0-9<])/,      // passport type
        /([A-Z]{3})/,       // issuing organization
        /([A-Z<]{39})/,     // name
        /([A-Z0-9<]{9})/,   // passport number
        /([0-9])/,          // check digit
        /([A-Z]{3})/,       // nationality
        /([0-9]{6})/,       // date of birth
        /([0-9])/,          // check digit
        /([MF<])/,          // sex
        /([0-9]{6})/,       // passport expiration date
        /([0-9])/,          // check digit
        /([A-Z0-9<]{14})/,  // personal number
        /([0-9])/,          // check digit
        /([0-9])/           // composite check digit
    ].map(function(r) { return r.source }).join('')),
    match = passportRegex.exec(data),
    result = {
        passport: match[1],
        type: match[2],
        issuingOrg: match[3],
        name: match[4].split('<').filter(function(val) { return val; }).join(' '),
        passportNo: match[5],
        nationality: match[7],
        birthDate: match[8],
        sex: match[10],
        expirationDate: match[11],
        personalNo: match[13],
    };
