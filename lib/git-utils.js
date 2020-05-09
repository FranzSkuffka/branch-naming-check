const childProcess = require("child_process");

function currentBranchName() {
  return childProcess.execFileSync(
      "git",
      ["branch", "--show-current"],
      {
          encoding: "utf8"
      }
  ).trim();
}

module.exports = { currentBranchName };
