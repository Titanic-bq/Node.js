// argv
console.log(process.argv);
console.log(process.argv[3]);

// process

console.log(process.env.LOGNAME);
// pid
console.log(process.env.pid);

// cwd
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage
console.log(process.memoryUsage());

// uptime
console.log(process.uptime());
console.log("about to exit with code: ${code}");

// exit
process.exit(0);
