//cspell: disable

const stalinSort = require('./stalinSort');

test("Unspecified case", () => {
	expect(stalinSort("abced")).toBe("abce");
	expect(stalinSort("ABCED")).toBe("ABCE");
	expect(stalinSort("AbCeD")).toBe("AbCe");
});

test("Case insensitive", () => {
	expect(stalinSort("abced", false)).toBe("abce");
	expect(stalinSort("ABCED", false)).toBe("ABCE");
	expect(stalinSort("AbCeD", false)).toBe("AbCe");
});

test("Case sensitive", () => {
	expect(stalinSort("abced", true)).toBe("abce");
	expect(stalinSort("ABCED", true)).toBe("ABCE");
	expect(stalinSort("AbCeD", true)).toBe("Abe");
});

test("Short strings", () => {
	expect(stalinSort("a")).toBe("a");
	expect(stalinSort("a", true)).toBe("a");
	expect(stalinSort("a", false)).toBe("a");
});

test("Empty strings", () => {
	expect(stalinSort("")).toBe("");
	expect(stalinSort("", true)).toBe("");
	expect(stalinSort("", false)).toBe("");
});

test("Has spaces", () => {
	expect(stalinSort("A b C e D")).toBe("A b C e ");
	expect(stalinSort("A b C e D", true)).toBe("A b e ");
	expect(stalinSort("A b C e D", false)).toBe("A b C e ");
});

test("Break down multiple spaces", () => {
	expect(stalinSort("A b  C   e    D")).toBe("A b C e ");
	expect(stalinSort("A b  C   e    D", true)).toBe("A b e ");
	expect(stalinSort("A b  C   e    D", false)).toBe("A b C e ");
})