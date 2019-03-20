# megacity-region-data
Data enumerating population concentrations for autonomous geolocalization

# Goals, outcomes and data curation

The goal of this dataset is to capture the state of world, as world populations have self-organized themselves over time.  The goal is to give everyone in the world the best place to start looking for a "regional data cache and sharing hub."  Software may use this data to find P2P nodes and edge caches and clouds on a vendor-neutral, cross-cloud basis.

This dataset should be largely static, but not immutable.  The list of metro areas should be revisited every 10-20 years, as populations migrate.  Backwards compatibility with existing software is considered.   Existing metadata fields should not be altered, unless there is an error in the data.   Adding new metadata fields that follow a process (currently: file-a-ticket) are generally acceptable, provided it does not break existing softare and existing data fields.

# Data sourcing and curation

The raw list of megacity regions began with a list of the top 100 metropolitan areas, by population, as claimed by per-nation sources (generally, the census).  Limited filtering was applied for cities whose nations were over-represented on the list, and simultaneously under-served by current network fibre-optic networks.

# Data schema

See the separate [MCR Schema Specification](MCR-schema.md).
