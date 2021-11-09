const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file'); //ログファイルを日程ごとに生成
const appRoot = require('app-root-path'); // app root 経路を持ってくるlib
const process = require('process');

const logDir = `${appRoot}/logs`; // logsディレクトリ内にログファイルを登録