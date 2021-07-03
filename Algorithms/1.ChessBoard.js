var size = 8;
for(var y=0; y<size; y++){
    var line = ' '
    for(var x=0; x<size; x++){
        line += (y+x+1) % 2 ? ' ':'#';
    }
    console.log(line);
}
