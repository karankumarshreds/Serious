// Question 2: Isomorphic Strings - Given two strings s and t, determine if they are isomorphic. 
// Two strings s and t are isomorphic if the characters in s can be replaced to get t. 
// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.


function isIsomorphic(str1, str2) {
	// abacus
	// rurfgs 
	const map = {}
	if (str1.length !== str2.length) return false 
	for (let i=0; i<str1.length; i++) {
		if (!map[str1[i]]) {
			map[str1[i]] = str2[i]
		} else {
			if (map[str1[i]] !== str2[i]) return false 
		}
	}
	return true 
}

console.log(isIsomorphic("abacus", "rurfgs"))
console.log(isIsomorphic("abacus", "ruzfgs"))
console.log(isIsomorphic("green", "abccd"))
