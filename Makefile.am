
EXTRA_DIST = \
	LICENSE \
	megacityregions.json

dist_sharedstate_DATA = megacityregions.json.gz

megacityregions.json.gz: megacityregions.json
	gzip --best --keep --force $<

