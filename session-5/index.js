

function getGrade (total) {

    switch (true) {
        case  total > 90:
            console.log('A+');
            break;
            case total => 90:
                console.log('A');
                break;
    case total => 80:
    console.log('B');
    break;
    case total => 70:
        console.log ('C');
    break;
    case total => 60:
    console.log ('D');
    break;
    case total => 50:
    console.log ('E');
    break;
    case total => 40:
        console.log ('F');
        default:
            console.log('You failed')
            break;
    }
//     if (total > 90) 
//     { console.log ('A+')}
    
//  else if ((total >= 80) && (total <= 90)) {
//     console.log ('A')
//  }


// else if ((total >= 70) && (total <= 80)) {
//     console.log ('B')
// }
// else if ((total >= 60) && (total <= 70)) {
//     console.log ('C')
// }
// else if ((total  >= 50) && (total <= 60)) {
//     console.log ('D')
// }
// else if ((total >= 40) && ( total <= 50)) {
//     console.log ('E')
// }
// else if ((total >= 30) && (total <= 40)) {
//     console.log ('F')
// }


// else if (total < 30)
// {console.log ('You failed')}
}
getGrade(85)
getGrade(28)
getGrade(64)
getGrade(96)
getGrade (50)
getGrade(93)
getGrade(33)