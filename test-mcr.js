#!/usr/bin/env node

const mcrdb = require('./megacityregions.json').regions;

var nPass = 0;
var nFail = 0;

runTests();
process.exit(0);


function runTests()
{
	basicTests();

	var nTotal = nPass + nFail;
	console.log(`${nTotal} tests, ${nPass} passed, ${nFail} failed`);
	if (nFail > 0)
		process.exit(1);
}

function basicTests()
{
	for (var regionName in mcrdb) {
		if (basicTest(regionName, mcrdb[regionName])) {
			nPass++;
		} else {
			console.error('basicTest fail', regionName);
			nFail++;
		}
	}
}

function basicTest(code, obj)
{
	if (!code || !obj)
		return false;
	
	if ( !('cc' in obj) ||
	     !('code' in obj) ||
	     !('display' in obj) )
		return false;
	
	if (code !== obj.code)
		return false;

	return true;
}

