const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file'); //ログファイルを日程ごとに生成
const appRoot = require('app-root-path'); // app root 経路を持ってくるlib
const process = require('process');

const logDir = `${appRoot}/logs`; // logsディレクトリ内にログファイルを登録

const {
    combine,
    timestamp,
    label,
    printf
} = winston.format;

const logFormat = printf(({
    level,
    message,
    label,
    timestamp
}) => {
    return `${timestamp} [${label}] ${level}: ${message}`; //log出力フォーマット定義
});

/*
 * Log Level
 * error: 0, warn: 1, info:2
 */
 