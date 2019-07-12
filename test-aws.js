#!/usr/bin/env node

const mcrdb = require('./megacityregions.json').regions;
const awsdb = require('./mcr-aws-map.json');
var regiondb = {};

var nPass = 0;
var nFail = 0;

initTests();
runTests();
process.exit(0);

function initTests()
{
	for (var regionName in awsdb.aws_to_mcr) {
		regiondb[regionName] = true;
	}
}

function runTests()
{
	mcr_to_Tests();
	aws_to_Tests();

	var nTotal = nPass + nFail;
	console.log(`${nTotal} tests, ${nPass} passed, ${nFail} failed`);
	if (nFail > 0)
		process.exit(1);
}

function mcr_to_Tests()
{
	for (var regionName in awsdb.mcr_to_aws) {
		if (mcr_to_Test(regionName, awsdb.mcr_to_aws[regionName])) {
			nPass++;
		} else {
			console.error('mcr_to_Test fail', regionName);
			nFail++;
		}
	}
}

function mcr_to_Test(code, obj)
{
	if (!code || !obj)
		return false;

	if (!(code in mcrdb))
		return false;

	if ( !('region' in obj) )
		return false;

	if (!(obj.region in regiondb))
		return false;

	return true;
}

function aws_to_Tests()
{
	for (var regionName in awsdb.aws_to_mcr) {
		if (aws_to_Test(regionName, awsdb.aws_to_mcr[regionName])) {
			nPass++;
		} else {
			console.error('aws_to_Test fail', regionName);
			nFail++;
		}
	}
}

function aws_to_Test(region, obj)
{
	if (!region || !obj)
		return false;

	if (!(region in regiondb))
		return false;

	if ( !('code' in obj) )
		return false;

	if (!(obj.code in mcrdb))
		return false;

	return true;
}

