
EXTRA_DIST = \
	LICENSE \
	mcr-aws-map.json \
	megacityregions.json

dist_sharedstate_DATA = mcr-aws-map.json.gz megacityregions.json.gz

megacityregions.json.gz: megacityregions.json
	gzip --best --keep --force $<
mcr-aws-map.json.gz: mcr-aws-map.json
	gzip --best --keep --force $<

