function insert(str, substr, pos=0) {
    return str.slice(0, pos) + substr + str.slice(pos)
}