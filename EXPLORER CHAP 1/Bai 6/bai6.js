//Back-tics syntax

// const s1 =  "Hello world";
// const s2 = 'Hello world';
// const s3 = `Hello world`;


// console.log('string text line 1' + 'string text line 2');
// console.log(`string text line 1
// string text line 2`);

// console.log(s1, ' + ' ,s2, ' + ' ,s3);

// let a = 5;
// let b = 10;
// console.log('Fifteen is ' + (a+b) + ' and \n not ' + (2*a+b) + '.');
// console.log(`Fifteen is ${(a+b)} and not ${(2*a+b)}.`);

// const base_url = "localhost:8000";
// const api = "get-user"; fetch_page = 2;

//localhost:800 /get-user?page=2
// const result = `${base_url}/${api}?page=${fetch_page}`;

let json = '{ "watson_tone" : [' +
    '{ "score" : 0.1231 , "tone_id":"fear" },' +
    '{ "score" : 0.1235 , "tone_id":"sadness" },' +
    '{ "score" : 0.1236 , "tone_id":"disgust" } ]}';

const premierLeage = [
    {club: 'MC' , score: 100},
    {club: 'Liverpool', score: 98},
    {club: 'Chelsea' , score: 88},
    {club: 'MU', score: 69},
]

let count = premierLeage.length;

//Make some strings to include in our output
let tableHeader = "<table><tr><th>Club</th><th>Score</th></tr>";
let tableContent = "";

//Loop through the JSON and output each row in to a string 
for (i = 0; i < count; i++) {
    // tableContent = tableContent + "<tr></tr>" + premierLeage[i].club + "</td><td>" + premierLeage[i] + "</tr>";
    tableContent +=
    `
    <tr>
        <td> ${premierLeage[i].club} </td>
        <td> ${premierLeage[i].score} </td>
    </tr>
    `
    ;
}

let tableFooter = "</table>";
//Get div and output the HTML. You can include these HTML strings staight in to your emailText
document.getElementById("tableTest").innerHTML = tableHeader + tableContent + tableFooter;