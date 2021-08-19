import { config } from './wdio.conf';

config.specs = [
    './test/specs/smoke/*.js'
]

exports.config = config;