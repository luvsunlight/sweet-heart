const fs = require("fs")
const path = require("path")

const remotePath = "/Users/lizhiyuan/Documents/blog/source/demo/sweet-heart-3d"
const localPath = "./build"

function deleteFile(dirpath) {
  let files = [];
  if (fs.existsSync(dirpath)) {
    files = fs.readdirSync(dirpath);
    files.forEach(function(file, index) {
      var curPath = dirpath + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        deleteFile(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirpath);
  }
}

function mkdir(dirpath, dirname) {
  //判断是否是第一次调用
  if (typeof dirname === "undefined") {
    if (fs.existsSync(dirpath)) {
      return;
    } else {
      mkdir(dirpath, path.dirname(dirpath));
    }
  } else {
    //判断第二个参数是否正常，避免调用时传入错误参数
    if (dirname !== path.dirname(dirpath)) {
      mkdir(dirpath);
      return;
    }
    if (fs.existsSync(dirname)) {
      fs.mkdirSync(dirpath);
    } else {
      mkdir(dirname, path.dirname(dirname));
      fs.mkdirSync(dirpath);
    }
  }
}

function copyDir(src, dist, callback) {
  fs.access(dist, function(err) {
    if (err) {
      // 目录不存在时创建目录
      fs.mkdirSync(dist);
    }
    _copy(null, src, dist);
  });

  function _copy(err, src, dist) {
    if (err) {
      callback(err);
    } else {
      fs.readdir(src, function(err, paths) {
        if (err) {
          callback(err);
        } else {
          paths.forEach(function(path) {
            var _src = src + "/" + path;
            var _dist = dist + "/" + path;
            fs.stat(_src, function(err, stat) {
              if (err) {
                callback(err);
              } else {
                // 判断是文件还是目录
                if (stat.isFile()) {
                  fs.writeFileSync(_dist, fs.readFileSync(_src));
                } else if (stat.isDirectory()) {
                  // 当是目录是，递归复制
                  copyDir(_src, _dist, callback);
                }
              }
            });
          });
        }
      });
    }
  }
}

function copyFile(src, dist) {
  fs.writeFileSync(dist, fs.readFileSync(src));
}

function main() {
  /* Local */
  deleteFile(localPath);
  mkdir(localPath);
  mkdir(path.join(localPath, "/src"));
  copyDir("./dist", path.join(localPath, "./dist"));
  copyDir("./src/assets", path.join(localPath, "./src/assets"));
  copyFile("./index.html", path.join(localPath, "./index.html"));

  /* Remote Push */
  deleteFile("remotePath");
  mkdir(remotePath)
  copyDir(localPath, remotePath)
}

main();
