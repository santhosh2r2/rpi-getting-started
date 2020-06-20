const child = require("child_process");

const args = process.argv.slice(2);

let comment = args[0];
if (!comment) {
  comment = `"Auto generated commit"`;
} else {
  comment = `"${comment}"`;
}

const gitAdd = "git add .";
const gitCommit = "git commit -m " + comment;
const gitPushMyGitlab = "git push gitlab master";
const gitPushGithub = "git push origin master";

const cmds = [gitAdd, gitCommit, gitPushGithub, gitPushMyGitlab];

cmds.forEach((cmd) => {
  child.execSync(cmd);
  console.log("Command '" + cmd + "' performed!");
});
