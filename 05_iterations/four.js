const myObject ={ 
    JS: 'Javascript',
    CPP: 'C++',
    RB: 'ruby',
    swift: 'swift by apple'

}
for (const key in myObject) {
    //console.log(myObject[key]);
    //console.log(`${key} shortcut is for ${myObject[key]}` );    
}

const programming = ["JS", "rb", "Py", "java", "cpp"]//0,1,2,3,4 op
for (const key in programming) {
    //  console.log( key );  .....//0,1,2,3,4 op
    console.log(programming [key] );   //js,rb,py,java,cpp 
}

//for for-in loop map is not iterable

