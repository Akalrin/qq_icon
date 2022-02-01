interface Mime {
	hello: number,
};
/**
	* Add
	* @param tagId {number}
	*/
function add(input: Mime): void {
	input.hello += 100;
	//return input+10;
}

export { add, Mime }
