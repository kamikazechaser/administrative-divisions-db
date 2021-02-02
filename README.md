# administrative-divisions-db

> Administrative divisons of countries as a JSON API over Github

## Why?

The current alternatives are unreliable:
 * Rate limited
 * No uptime gurantee
 * Require API key and have a quota

## About

This repo automagically serves an "API" over GitCDN/Rawgit (Cloudflare network). No limits and uptime is guranteed. To get the administrative division of a particular country, simply make a GET request to either:

```
https://gitcdn.xyz/repo/kamikazechaser/administrative-divisions-db/master/api/KE.json

https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/22034ec51765c618461730c8f55197ee8c060cf2/api/KE.json

```

Data is sourced from [GeoNames](http://www.geonames.org/).

## License

The Unlicense